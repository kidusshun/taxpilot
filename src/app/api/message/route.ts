import { openai } from "@/lib/openai";
import { sendMessageValidator } from "@/lib/validators/sendMessageValidator";
import { NextRequest, NextResponse } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { SystemMessage, HumanMessage, AIMessage } from "langchain/schema";
import { messages } from "@/lib/api_messages";

const systemMessage = `
you are an AI assistant.
you're task is to conduct an interview of the user you are interacting with and figure out the files needed to file their taxes and instruct them to upload them.
you'll first be provided with the user's initial answers to certain questions.
In the first message you will recieve a json object converted to a string that is questions with the answers the customer has filled out previously.
your task is to ask a series of questions to understand who the customer is based on the first message you recieved.
You will ask business related tax questions if the customer is a company and ask tax questions for an individual if it's an individual.
Only ask one question at a time and then based on the response you get you'll continue with the follow up questions.
Don't steer away from this guidelines.
You must ask for all the necessary questions needed to figure out the files needed to be filed.
after you gather all the information you will tell the User what documents to upload.
don't ask for any confidential information like ssn.`;

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { message } = sendMessageValidator.parse(body);
  console.log(message);
  
  messages.push({role:"user", content: message})
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    stream: true,
    messages: messages,
  });

  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      messages.push({ role: "assistant", content: completion });
    },
  });
  console.log(messages);
  
  return new StreamingTextResponse(stream);
};
