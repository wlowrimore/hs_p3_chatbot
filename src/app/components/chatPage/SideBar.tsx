"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import SiteLogo from "../../../../public/logos/site-logo.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { useServiceDetails } from "../../../providers/ServiceDetailsProvider";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useEffect } from "react";

const SideBar = () => {
  const { data: session } = useSession();
  const storedServiceType = localStorage.getItem("serviceType");
  const storedServiceLocation = localStorage.getItem("serviceLocation");

  useEffect(() => {
    if (storedServiceType && storedServiceLocation) {
      console.log("serviceDetails: ", storedServiceType, storedServiceLocation);
    }
  }, []);

  const serviceDetails = { storedServiceType, storedServiceLocation };

  return (
    <div className="pt-6 flex flex-col min-h-screen">
      <div className="flex items-center justify-start w-full gap-2 mx-auto">
        <Image
          src={SiteLogo}
          alt="Site Logo"
          width={200}
          height={200}
          className="w-16 h-14 rounded-full"
        />
        <div className="flex flex-col space-y-[-0.4rem]">
          <h1 className="text-3xl uppercase text-[#cba9f2]">kal</h1>
          <p className="text-[0.6rem] uppercase text-neutral-300 tracking-widest">
            customer service expert
          </p>
        </div>
      </div>

      <div className="w-full h-[0.025rem] bg-neutral-400 my-4"></div>

      {/* Sevice Details */}
      {serviceDetails && (
        <div className="flex flex-col items-center justify-start w-full mx-auto mt-4 space-y-3">
          <h3 className="text-xs text-neutral-300 uppercase font-semibold tracking-wider w-full flex justify-start mb-2">
            Service Details
          </h3>
          <div className="flex flex-col w-full items-start">
            <p className="flex items-center gap-1">
              <IoMdCheckmarkCircleOutline />
              <span className="text-sm text-neutral-400">
                {storedServiceType}
              </span>
            </p>
          </div>
          <div className="flex w-full items-center pb-4">
            <p className="flex items-center gap-1">
              <MdOutlineLocationOn />
              <span className="text-sm text-neutral-400">
                {storedServiceLocation}
              </span>
            </p>
          </div>
          <div className="w-full h-[0.025rem] bg-neutral-400 my-4"></div>
        </div>
      )}

      <div className="sticky bottom-10 mt-auto flex items-center justify-start w-full gap-2 mx-auto">
        <Image
          src={session?.user?.image!}
          alt="profile"
          width={200}
          height={200}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-sm text-neutral-200 tracking-wider">
            {session?.user?.name}
          </p>
          <p className="text-xs text-neutral-400 tracking-wider">
            {session?.user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
