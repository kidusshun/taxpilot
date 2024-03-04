import React from "react";
import Avatar from "./Avatar";
import ReactMarkdown from "react-markdown";

const ReceiveTextbox = React.forwardRef(
  (
    { receivedMessage }: { receivedMessage: string },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div className="flex items-center whitespace-pre-line" ref={ref}>
        <Avatar src="https://eazytaxes.com/favicon.ico" />
        <div className=" pl-5 xs:max-w-xs lg:max-w-md break-wrap  mb-3 mt-3 ml-3 relative px-5 py-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-textbox shadow-md self-start border border-solid border-1 border-border-opacity">
          <p className="text-xs sm:text-sm md:text-base leading-6 text-white">
            <ReactMarkdown>{receivedMessage}</ReactMarkdown>
          </p>
        </div>
      </div>
    );
  }
);

export default ReceiveTextbox;
