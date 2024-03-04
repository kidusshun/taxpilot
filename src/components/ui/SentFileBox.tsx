import Avatar from "./Avatar";

const SentFileBox = ({
  fileName,
  fileSize,
  ref,
}: {
  fileName: string;
  fileSize: string;
  ref: React.Ref<HTMLDivElement>;
}) => {
  const fileType = fileName.split(".").pop()?.toUpperCase();
  return (
    <div className="upper flex items-center justify-end" ref={ref}>
      <div className="flex flex-wrap gap-4 pb-1 pr-5">
        <div
          className="w-40 relative cursor-pointer rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex shadow-element text-xs bg-textbox"
          aria-label="Goldsmith-note-to-PM-30July2002_2.pdf"
          title="Goldsmith-note-to-PM-30July2002_2.pdf"
        >
          <button
            aria-label="Preview contents"
            className="absolute inset-0 cursor-pointer hover:bg-black/5 w-40"
          ></button>
          <div
            className="flex-shrink-0 w-12 h-12 bg-teal-400 rounded-tl-md rounded-bl-md grid place-items-center text-white font-medium uppercase truncate bg-button"
            aria-hidden="true"
          >
            {fileType}
          </div>
          <div className="py-2 px-3 min-w-0 text-white">
            <p
              className="truncate"
              title="Goldsmith-note-to-PM-30July2002_2.pdf"
            >
              {fileName}
            </p>
            <div className="text-white">{fileSize}</div>
          </div>
        </div>
      </div>
      <Avatar src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
    </div>
  );
};

export default SentFileBox;
