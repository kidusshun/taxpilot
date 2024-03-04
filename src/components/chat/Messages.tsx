import { questionnaire } from "@/lib/Questionnaires";
import ChatMessage from "@/lib/chatMessage";
import { useContext, useEffect, useRef, useState } from "react";
import SentFileBox from "../ui/SentFileBox";
import SendTextbox from "../ui/SendTextbox";
import ReceiveTextbox from "../ui/ReceiveTextbox";
import { ChatContext } from "./ChatContext";

const Messages = () => {
  const { messages, isLoading } = useContext(ChatContext);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="mb-20">
      {messages.map((message, index) => {
        let isLastMessage = index === messages.length - 1;

        if (message.role === "user") {
          if (message.type) {
            const [fileName, fileSize] = message.type;
            return (
              <SentFileBox
                fileName={fileName}
                fileSize={fileSize}
                ref={isLastMessage ? lastMessageRef : null}
                key={index}
              />
            );
          } else {
            return (
              <div>
                <SendTextbox
                  displayMessage={message.content}
                  ref={isLastMessage ? lastMessageRef : null}
                  key={index}
                />
              </div>
            );
          }
        } else if (message.role === "assistant") {
          return (
            <ReceiveTextbox
              receivedMessage={message.content}
              ref={isLastMessage ? lastMessageRef : null}
              key={index}
            />
          );
        }
      })}
    </div>
  );
};
export default Messages;
