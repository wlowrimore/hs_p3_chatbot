"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ServiceDetailsProvider } from "@/providers/ServiceDetailsProvider";
import { useExtractFirstName } from "@/app/hooks/useExtractFirstName";
import SideBar from "./SideBar";

import { RiGradienterLine } from "react-icons/ri";
import Image from "next/image";

const ChatContainer = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [storedPrompt, setStoredPrompt] = useState<string>("");
  const [prompts, setPrompts] = useState<string[]>([]);
  const [serviceType, setServiceType] = useState<string>("");
  const [serviceLocation, setServiceLocation] = useState<string>("");

  let inMemoryMessages: any[] = [];
  let inMemoryPrompts: string[] = [];
  let inMemoryStoredPrompt: string = "";
  let inMemoryServiceType: string = "";
  let inMemoryServiceLocation: string = "";

  const { data: session } = useSession();
  const name = useExtractFirstName();
  const userImage = session?.user?.image;

  // useEffect(() => {
  //   if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  //     const serviceType = localStorage.getItem("serviceType");
  //     const serviceLocation = localStorage.getItem("serviceLocation");
  //     const storedMessages = sessionStorage.getItem("chatMessages");
  //     const storedPrompts = sessionStorage.getItem("chatPrompts");

  //     if (serviceType) {
  //       setServiceType(serviceType);
  //     }
  //     if (serviceLocation) {
  //       setServiceLocation(serviceLocation);
  //     }

  //     if (storedMessages) {
  //       setMessages(JSON.parse(storedMessages));
  //     }
  //     if (storedPrompts) {
  //       setPrompts(JSON.parse(storedPrompts));
  //     }
  //   }
  // }, []);

  const handleSendMessage = (message: string) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
    inMemoryMessages = newMessages;
  };

  // useEffect(() => {
  //   if (session && prompts) {
  //     getPrompt();
  //   }
  // }, [prompts, session]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrompt(e.target.value);
  };

  const getPrompt = () => {
    return inMemoryStoredPrompt;
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   let promptsArray = JSON.parse(sessionStorage.getItem("promps") || "[]");
  //   promptsArray.push(prompt);
  //   if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  //     sessionStorage.setItem("promps", JSON.stringify(promptsArray));
  //   }

  //   handleSendMessage(prompt);
  //   setPrompt("");
  //   getPrompt();
  //   setPrompts(promptsArray);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let promptsArray = inMemoryPrompts;
    promptsArray.push(prompt);
    inMemoryPrompts = promptsArray;

    handleSendMessage(prompt);
    setPrompt("");
    const storedPrompt = getPrompt();
    setStoredPrompt(storedPrompt);
    setPrompts(promptsArray);
  };

  return (
    <div className="w-full max-w-[80rem] min-h-screen bg-gray-800 flex flex-col justify-center px-12 text-white">
      <div className="flex border-r border-gray-700 w-full">
        <aside className="max-w-[20rem] w-full flex flex-col px-6 border-r border-gray-700">
          <ServiceDetailsProvider>
            <SideBar />
          </ServiceDetailsProvider>
        </aside>

        {/* Chat Container */}
        <main className=" bg-[url('/logos/site-logo-bg.webp')] bg-no-repeat bg-center flex-1 flex-col px-8 pt-14 overflow-y-auto">
          <div className="w-full h-full bg-gray-800/95">
            <h1 className="text-3xl text-neutral-100">
              What can I help you with, {name}?
            </h1>
            <p className="text-gray-400 text-[1.4rem]">
              I see that you are interested in {serviceType} in and around{" "}
              {serviceLocation}.
            </p>
            <p className="text-gray-400 text-[1.4rem]">
              Please feel free to ask me any questions you may have.
            </p>

            {/* Chat Interaction Window */}
            <section className="mt-6 w-full flex flex-col">
              <div className="w-full my-6 max-h-[40rem] min-h-[40rem] overflow-y-auto bg-white/5 rounded-2xl border border-[#4f2d78]">
                <div className="w-full flex justify-end">
                  <button className="text-sm text-neutral-300 font-semibold tracking-wider uppercase rounded-bl-[0.7rem] bg-[#4f2d78] hover:text-white hover:bg-[#3d1e61] transition duration-200 px-4 py-2 border border-[#4f2d78] hover:border hover:border-neutral-600">
                    archive this chat
                  </button>
                </div>
                {prompts &&
                  prompts.map((prompt, promptIndex) => (
                    <div
                      key={promptIndex}
                      className="flex items-center gap-2 w-full p-6"
                    >
                      <Image
                        src={userImage as string}
                        alt={name as string}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border border-[#9081a1] bg-white/10"
                      />

                      <p className="text-neutral-200">{prompt}</p>
                    </div>
                  ))}
              </div>
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="text"
                  value={prompt}
                  name="prompt"
                  onChange={handleOnChange}
                  placeholder="Type Here"
                  className="w-full h-[4rem] my-6 py-2 px-4 rounded-l-2xl border border-[#4f2d78] bg-white/10 outline-none text-[1.3rem]"
                />
                <button type="submit">
                  <RiGradienterLine className=" w-16 h-16 p-3 bg-white/10 text-purple-400 cursor-pointer hover:text-neutral-400 transition duration-200 rounded-r-2xl" />
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatContainer;
