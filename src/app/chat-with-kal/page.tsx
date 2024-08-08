"use client";

import Image from "next/image";
import SiteLogo from "../../../public/logos/site-logo.webp";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ChatPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="relative w-screen min-h-screen flex flex-col justify-center items-center mx-auto px-24">
      <div className="flex flex-col justify-center pb-10 pt-4">
        <p
          onClick={handleBack}
          className="absolute top-10 left-20 text-white/70 text-lg font-semibold tracking-wide flex items-center cursor-pointer button-glow py-1 px-3 rounded-full"
        >
          <IoMdArrowRoundBack />
          &nbsp;Take Me Home
        </p>
        <Image
          priority
          src={SiteLogo}
          alt="Site Logo"
          width={500}
          height={500}
          className="rounded-full w-[10rem] h-[8.5rem]"
        />
        <div className="my-8 text-white/70 uppercase">
          <h1 className="text-3xl font-semibold tracking-wide">
            Chat with KAL page
          </h1>
          <h2 className="text-xl font-light">
            This is where the actual chatbot will be...
          </h2>
        </div>
      </div>
    </div>
  );
}
