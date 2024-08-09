import React from "react";
import SideBar from "./SideBar";
import { ServiceDetailsProvider } from "@/providers/ServiceDetailsProvider";

const ChatContainer = () => {
  return (
    <div className="w-full max-w-[80rem] min-h-screen bg-gray-800 flex flex-col justify-center px-12 text-white">
      <div className="flex border-r w-full">
        <aside className="max-w-[20rem] w-full flex flex-col px-6 border-r">
          <ServiceDetailsProvider>
            <SideBar />
          </ServiceDetailsProvider>
        </aside>
        <main className="flex-1 flex-col p-6">
          <h1>Chat with KAL</h1>
        </main>
      </div>
    </div>
  );
};

export default ChatContainer;
