import React from "react";
import SideBar from "./SideBar";
import { ServiceDetailsProvider } from "@/providers/ServiceDetailsProvider";

const ChatContainer = () => {
  return (
    <div className="w-full max-w-[80rem] min-h-screen bg-gray-800 flex flex-col justify-center px-12 text-white">
      <div className="flex border-r border-gray-700 w-full">
        <aside className="max-w-[20rem] w-full flex flex-col px-6 border-r border-gray-700">
          <ServiceDetailsProvider>
            <SideBar />
          </ServiceDetailsProvider>
        </aside>
        <main className="bg-[url('/logos/site-logo-bg.webp')] bg-no-repeat bg-center flex-1 flex-col p-6">
          <div className="w-full h-full bg-gray-800/95">
            <h1>Chat with KAL</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatContainer;
