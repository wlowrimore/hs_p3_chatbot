"use client";

import Image from "next/image";
import SiteLogo from "../../../public/logos/site-logo.webp";
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
    <div className="w-screen min-h-screen flex flex-col justify-center items-center mx-auto xl:px-24">
      <ChatContainer />
    </div>
  );
}
