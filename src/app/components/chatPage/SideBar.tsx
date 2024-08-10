"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useServiceDetails } from "../../../providers/ServiceDetailsProvider";
import SiteLogo from "../../../../public/logos/site-logo.webp";

import { RiHome2Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";
import { RiArchiveStackLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";

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
      <div className="flex items-center justify-start w-full gap-2 mx-auto my-8">
        <Image
          src={SiteLogo}
          alt="Site Logo"
          width={200}
          height={200}
          className="w-16 h-14 rounded-full"
        />
        <div className="flex flex-col space-y-[-0.4rem]">
          <h1 className="text-4xl uppercase text-[#cba9f2]">kal</h1>
          <p className="text-[0.6rem] uppercase text-neutral-300 tracking-widest">
            customer service expert
          </p>
        </div>
      </div>

      <div className="w-full h-[0.025rem] bg-gray-700 my-4"></div>

      {/* Sevice Details */}
      {serviceDetails && (
        <div className="flex flex-col items-center justify-start w-full mx-auto my-8 space-y-3">
          <h3 className="text-sm text-neutral-300 uppercase font-semibold tracking-wider w-full flex justify-start mb-2">
            Service Details
          </h3>
          <div className="flex flex-col w-full items-start pl-4">
            <p className="flex items-center gap-1 mb-4">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 text-neutral-400" />
              <span className="text-sm text-neutral-400">
                {storedServiceType}
              </span>
            </p>
          </div>
          <div className="flex w-full items-center pb-4 pl-4">
            <p className="flex items-center gap-1 mb-4">
              <MdOutlineLocationOn className="w-6 h-6 ml-[-0.15rem] text-neutral-400/75" />
              <span className="text-sm text-neutral-400">
                {storedServiceLocation}
              </span>
            </p>
          </div>
          <div className="w-full h-[0.025rem] bg-gray-700 my-4"></div>
        </div>
      )}

      {/* Links */}
      <nav className="my-2 text-neutral-300">
        <ul className="w-full flex flex-col gap-3">
          <Link href="/">
            <li className="flex items-center gap-2 text-neutral-400 hover:text-neutral-300 hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200">
              <RiHome2Line className="w-5 h-5" />
              <span>Home</span>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center gap-2 text-neutral-400 hover:text-neutral-300 hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200">
              <RiMailSendLine className="w-5 h-5" />
              <span>Mailing List</span>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center gap-2 text-neutral-400 hover:text-neutral-300 hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200">
              <RiArchiveStackLine className="w-5 h-5" />
              <span>Archived Chats</span>
            </li>
          </Link>
          <li
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 text-neutral-400 hover:text-neutral-300 hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200 cursor-pointer"
          >
            <RiLogoutCircleLine className="w-5 h-5" />
            <span>Sign Out</span>
          </li>
        </ul>
      </nav>

      {/* User Profile */}
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
