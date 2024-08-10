import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonChat = () => {
  return (
    <div className="w-full max-w-[80rem] min-h-screen bg-gray-800 flex flex-col xl:justify-center pt-8 xl:pt-0 xl:px-12 text-white">
      {/* BottomBar for Mobile */}
      <section>
        <Skeleton className="w-full bg-white/5 h-2rem rounded-xl px-6" />
      </section>
      <Skeleton className="flex xl:border-r border-white/5 w-full">
        <Skeleton className="hidden mt-12  mb-4 max-w-[20rem] bg-white/5 rounded-xl w-full xl:flex flex-col px-6 xl:border-r border-white/5">
          <div className="flex items-center justify-start w-full gap-2 mx-auto my-8">
            <Skeleton className="w-16 h-14 rounded-full" />
            <div className="flex flex-col space-y-[-0.4rem]">
              <Skeleton className="w-[3rem] h-[1rem] rounded-xl" />
              <Skeleton className="w-[3rem] h-[1rem] rounded-xl" />
            </div>
          </div>
        </Skeleton>

        {/* Chat Container */}
        <main className="flex-1 flex-col px-4 xl:px-8  xl:pt-14 overflow-y-auto">
          <div className="w-full h-full space-y-3">
            <Skeleton className="w-[80%] h-[2rem] rounded-xl bg-white/5" />
            <Skeleton className="w-[20%] h-[2rem] rounded-xl bg-white/5" />
            <Skeleton className="w-[40%] h-[2rem] rounded-xl bg-white/5" />

            {/* Chat Interaction Window */}
            <Skeleton className="pt-4 xl:pt-0 xl:mt-6 w-full flex flex-col">
              <div className="w-full lg:my-6 max-h-[22rem] min-h-[22rem] xl:max-h-[40rem] xl:min-h-[40rem] overflow-y-auto bg-white/5 rounded-2xl border border-[#4f2d78]">
                <div className="w-full flex justify-end">
                  <Skeleton className="w-[3rem] h-[2rem] rounded-xl" />
                </div>
              </div>
              <form className="flex items-center">
                <Skeleton className="w-full h-[4rem] my-6 py-2 px-4 rounded-l-2xl border border-[#4f2d78] bg-white/10 outline-none text-[1.3rem]" />
                <Skeleton className=" w-16 h-16 p-3 bg-white/10 rounded-r-2xl" />
              </form>
            </Skeleton>
          </div>
        </main>
      </Skeleton>
    </div>
  );
};

export default SkeletonChat;
