"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useExtractFirstName } from "@/app/hooks/useExtractFirstName";
import { ServiceDetailsProvider } from "@/providers/ServiceDetailsProvider";
import SideBar from "./SideBar";
import { RiGradienterLine } from "react-icons/ri";
import Image from "next/image";
import axios from "axios";
import SkeletonChat from "../ui/SkeletonChat";
import BottomBar from "./BottomBar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatContainer = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  const { data: session } = useSession();
  const name = useExtractFirstName() || "User";
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  const [userScrolled, setUserScrolled] = useState<boolean>(false);

  const userImage = session?.user?.image || "/default-user-avatar.png";

  // const serviceType = sessionStorage.getItem("serviceType") || "our services";

  // useEffect(() => {
  //   setIsBrowser(
  //     typeof window !== "undefined" &&
  //       typeof window.sessionStorage !== "undefined"
  //   );
  // }, []);

  // const serviceLocation =
  //   sessionStorage.getItem("serviceLocation") || "your location";

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedMessages = sessionStorage.getItem("chatMessages");
  //     if (storedMessages) {
  //       setMessages(JSON.parse(storedMessages));
  //       scrollToBottom();
  //     }
  //     return () => sessionStorage.removeItem("chatMessages");
  //   }
  // }, [messages, isBrowser]);

  const handleScroll = () => {
    const element = chatHistoryRef.current;
    if (element) {
      const isNearBottom =
        element.scrollTop + element.clientHeight >= element.scrollHeight - 10;
      setUserScrolled(!isNearBottom);
    }
  };

  const scrollToBottom = () => {
    if (!userScrolled) {
      chatHistoryRef.current?.scrollTo({
        top: chatHistoryRef.current?.scrollHeight || 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage: Message = { role: "user", content: prompt };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    // localStorage.setItem("chatMessages", JSON.stringify(newMessages));
    setPrompt("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/chat", { messages: newMessages });
      const assistantMessage: Message = {
        role: "assistant",
        content: response.data.message,
      };
      const updatedMessages = [...newMessages, assistantMessage];
      setMessages(updatedMessages);
      // localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    } catch (error: any) {
      console.error(
        "Error calling OpenAI API:",
        error.response?.data || error.message || error
      );
      // Show error message to the user
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <SkeletonChat />
      ) : (
        <>
          <div className="w-full max-w-[80rem] min-h-screen bg-gray-800 flex flex-col xl:justify-center pt-8 xl:pt-0 xl:px-12 text-white">
            {/* BottomBar for Mobile */}
            <section>
              <BottomBar />
            </section>
            <div className="flex xl:border-r border-gray-700 w-full">
              <aside className="hidden max-w-[20rem] w-full xl:flex flex-col px-6 xl:border-r border-gray-700">
                <ServiceDetailsProvider>
                  <SideBar />
                </ServiceDetailsProvider>
              </aside>
              <main className="bg-[url('/logos/site-logo-bg-sm.webp')] md:bg-[url('/logos/site-logo-bg.webp')] bg-no-repeat bg-center flex-1 flex-col px-4 md:px-8 pt-14 overflow-y-auto">
                <div className="w-full h-full bg-gray-800/95">
                  <h1 className="text-3xl text-neutral-100">
                    What can I help you with, {name}?
                  </h1>
                  {/* <p className="text-gray-400 text-[1.4rem]">
                    I see that you are interested in {serviceType} in and around{" "}
                    {serviceLocation}.
                  </p> */}
                  <p className="text-gray-400 text-[1.4rem]">
                    Please feel free to ask me any questions you may have.
                  </p>

                  {/* Chat Interaction Window */}
                  <section className="mt-6 w-full flex flex-col">
                    <div
                      ref={chatHistoryRef}
                      onScroll={handleScroll}
                      className="w-full my-6 max-h-[40rem] min-h-[40rem] overflow-y-auto bg-white/5 rounded-2xl border border-[#4f2d78]"
                    >
                      <div className="w-full flex justify-end">
                        <button className="text-sm text-neutral-300 font-semibold tracking-wider uppercase rounded-bl-[0.7rem] bg-[#4f2d78] hover:text-white hover:bg-[#3d1e61] transition duration-200 px-4 py-2 border border-[#4f2d78] hover:border hover:border-neutral-600">
                          archive this chat
                        </button>
                      </div>
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 w-full p-6 ${
                            message.role === "user"
                              ? "justify-start"
                              : "justify-end"
                          }`}
                        >
                          {message.role === "user" && (
                            <Image
                              src={userImage}
                              alt={name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full border border-[#9081a1] bg-white/10"
                            />
                          )}
                          <p
                            className={`text-neutral-200 ${
                              message.role === "user"
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {message.content}
                          </p>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex items-center justify-center p-4">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center">
                      <input
                        type="text"
                        value={prompt}
                        onChange={handleOnChange}
                        placeholder="Type Here"
                        className="w-full h-[4rem] my-6 py-2 px-4 rounded-l-2xl border border-[#4f2d78] bg-white/10 outline-none text-[1.3rem]"
                      />
                      <button type="submit" disabled={isLoading}>
                        <RiGradienterLine className="w-16 h-16 p-3 bg-white/10 text-purple-400 cursor-pointer hover:text-neutral-400 transition duration-200 rounded-r-2xl" />
                      </button>
                    </form>
                  </section>
                </div>
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatContainer;
