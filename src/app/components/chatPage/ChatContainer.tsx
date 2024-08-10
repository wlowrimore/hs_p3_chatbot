"use client";

import { ServiceDetailsProvider } from "@/providers/ServiceDetailsProvider";
import { getFirstName } from "@/lib/utils";
import SideBar from "./SideBar";

import { RiGradienterLine } from "react-icons/ri";

const ChatContainer = () => {
  const name = getFirstName();

  const serviceType = localStorage.getItem("serviceType");
  const serviceLocation = localStorage.getItem("serviceLocation");

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
              <div className="w-full my-6 min-h-[40rem] bg-white/5 rounded-2xl border border-[#4f2d78]"></div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-full h-[4rem] my-6 py-2 px-4 rounded-l-2xl border border-[#4f2d78] bg-white/10 outline-none text-[1.3rem]"
                />
                <RiGradienterLine className=" w-16 h-16 p-3 bg-white/10 text-purple-400 cursor-pointer hover:text-neutral-400 transition duration-200 rounded-r-2xl" />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatContainer;
