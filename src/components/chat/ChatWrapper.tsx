"use client";

import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { ChatContextProvider } from "./ChatContext";

const ChatWrapper = ({}) => {
  return (
    <ChatContextProvider>
      <div className=" inset-0 overflow-y-auto h-screen relative">
      <div className="max-w-3xl mx-auto px-3 pt-16 pb-4 grid gap-x-2 gap-y-3">
          <Messages />
        </div>

        <ChatInput />
      </div>
    </ChatContextProvider>
  );
};

export default ChatWrapper;
