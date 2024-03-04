import { ReactNode, useState, createContext, useRef, useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { questionnaire } from "@/lib/Questionnaires";
import ChatMessage from "@/lib/chatMessage";
import { questionAnswer } from "@/lib/api_messages";

type Questionnaire = {
  question: string;
  type: "multiple_choice" | "text_input" | "drop_down" | "Date";
  options: string[]; // Only for multiple_choice and drop_down questions
  conditions: {
    [key: string]: string; // Maps response to the next question
  };
};
type StreamResponse = {
  messages: ChatMessage[];
  addMessage: () => void;
  message: string;
  handleInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement> | string
  ) => void;
  isLoading: boolean;
  questionType: "multiple_choice" | "text_input" | "drop_down" | "Date";
  updateQuestionType: (message: string) => void;
  options?: string[];
};

export const ChatContext = createContext<StreamResponse>({
  messages: [],
  addMessage: () => {},
  message: "",
  handleInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement> | string
  ) => {},
  isLoading: false,
  questionType: "multiple_choice",
  updateQuestionType: (message: string) => {},
  // options:[""]
});

interface Props {
  children: ReactNode;
}
export const ChatContextProvider = ({ children }: Props) => {
  const [currentQuestionId, setCurrentQuestionId] = useState("q1");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  const utils = trpc.useContext()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [questionType, setQuestionType] = useState<
    "multiple_choice" | "text_input" | "drop_down" | "Date"
  >("multiple_choice");
  const [options, setOptions] = useState<string[]>(
    questionnaire[currentQuestionId]?.options || []
  );
  const { toast } = useToast()
  const updateQuestionType = (type: string) => {
    if (type === "text_input") {
      setQuestionType("text_input");
    } else if (type === "multiple_choice") {
      setQuestionType("multiple_choice");
    } else if (type === "Date") {
      setQuestionType("Date");
    } else if (type == "drop_down") {
      setQuestionType("drop_down");
    }
  };

  useEffect(() => {
    setMessages((prevMessages) =>([{ content: questionnaire[currentQuestionId].question, role: "assistant" }]))
    }, []);

  const backupMessage = useRef('')
  const prevMessageRef = useRef<ChatMessage []>([]);
  const firstCall = useRef(true)

  const { mutate: sendMessage } = useMutation({
    mutationFn: async ({ message }: { message: string }) => {
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
            
      return response.body;
    },
    onMutate:  ({message}) => {
      
      if (firstCall){
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: backupMessage.current, role: "user" },
        ]);
        firstCall.current = false;        
      }else{
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: message, role: "user" },
        ]);
        backupMessage.current = message;
      }
      prevMessageRef.current = messages;
      setMessage('')
    },

    onSuccess: async (stream) => {
      setIsLoading(false)

      if (!stream) {
        return toast({
          title: 'There was a problem sending this message',
          description:
            'Please refresh this page and try again',
          variant: 'destructive',
        })
      }
      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let done = false
      

      let accResponse = ''
      while (!done) {
        const {value, done: donReading} = await reader.read()
        done = donReading
        const chunkValue = decoder.decode(value)
        
        accResponse += chunkValue
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: accResponse, role: "assistant" },
      ]);
    },

    onError: (_,__,context) => {
      setMessage(backupMessage.current)
      setMessages(prevMessageRef.current)
    },
    onSettled: () => {
      setIsLoading(false);
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> | string
  ) => {
    if (typeof e === "string") {
      setMessage(e);
    } else {
      setMessage(e.target.value);
    }
  };

  const addMessage = () => {
    if (message.trim() !== "") {
      
      const currQuestion = questionnaire[currentQuestionId];
      const nextQuestionId =
        currQuestion["conditions"]["continue"] ||
        currQuestion["conditions"][message] ||
        "end";
      const newMessage = { content: message, role: "user" };
      if (nextQuestionId !== "end") {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        questionAnswer[currQuestion.question] = message; 
        
        if (message.length >= 1) {

          setCurrentQuestionId(nextQuestionId);
          if (nextQuestionId !== "end") {
            setMessages((prevMessages) => {
              const responseMessage: ChatMessage = {
                content: questionnaire[nextQuestionId].question,
                role: "assistant",
              };
              return [...prevMessages, responseMessage];
            });
            setQuestionType(questionnaire[nextQuestionId].type);
            if (questionnaire[nextQuestionId].options) {
              
              setOptions(questionnaire[nextQuestionId].options!);
            } else {
              setOptions([]);
            }
          }
        }
      } else {
        
        backupMessage.current = message;
        setQuestionType("text_input");
        if (!firstCall.current){
          console.log("first here");
          const response = sendMessage({ message });
        }
        else{         
          console.log("second here");
          questionAnswer[currQuestion.question] = message
          let questionAnswerString = JSON.stringify(questionAnswer)
          const response = sendMessage({message :questionAnswerString})
        }

        // setMessages((prevMessages) => {
        //   const responseMessage: ChatMessage = {
        //     content: response,
        //     role: "assistant",
        //   };
        //   return [...prevMessages, responseMessage];
        // });
        
      }
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        message,
        handleInputChange,
        isLoading,
        questionType,
        updateQuestionType,
        options,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
