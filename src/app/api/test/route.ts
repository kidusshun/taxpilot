import { messages } from "@/lib/api_messages";
import { sendMessageValidator } from "@/lib/validators/sendMessageValidator";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { message } = sendMessageValidator.parse(body);
  const mockResponse = `you said ${message} agaiiiiiiiiiiiiiiiiiiiiiin`;
  

  const stream = OpenAIStream(new Response(mockResponse), {
  });
  
  console.log("response", mockResponse);
  return new StreamingTextResponse(stream);
};
