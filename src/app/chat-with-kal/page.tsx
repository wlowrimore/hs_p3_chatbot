"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import ChatContainer from "../components/chatPage/ChatContainer";
import { ServiceDetailsProvider } from "@/providers/ServiceDetailsProvider";

export default function ChatPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center mx-auto px-24">
      <div>
        {/* Use the Image component from Next.js to render the image */}
        <Image
          src="/logos/site-logo.webp" // Adjust path as needed
          alt="Site Logo"
          width={100} // Adjust width as needed
          height={100} // Adjust height as needed
        />
      </div>
      <ChatContainer />
    </div>
  );
}
