import ChatWrapper from "@/components/chat/ChatWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UploadButton from "@/components/UploadButton";
export default function Home() {
  return (
    <MaxWidthWrapper>
      {/* file upload button */}
      {/* <UploadButton isSubscribed={true}></UploadButton> */}

      <ChatWrapper />
    </MaxWidthWrapper>
  );
}
