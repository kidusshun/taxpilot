import React from "react";
import Avatar from "./Avatar";

const SendTextbox = React.forwardRef(
  (
    { displayMessage }: { displayMessage: string },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className="flex items-center justify-end whitespace-pre-line"
        ref={ref}
      >
        <div className="pr-5 max-w-md text-xs sm:text-sm md:text-base break-wrap mb-3 mt-3 mr-3 leading-6 relative px-5 py-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl bg-textbox text-white shadow-md self-end border border-solid border-1 border-border-opacity">
          {displayMessage}
        </div>
        <Avatar src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
      </div>
    );
  }
);

export default SendTextbox;
