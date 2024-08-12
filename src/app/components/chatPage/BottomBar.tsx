"use client";

import { useState, useEffect } from "react";
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
import { PiDotsNineBold } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";

const BottomBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const { data: session } = useSession();
  // const storedServiceType = localStorage.getItem("serviceType");
  // const storedServiceLocation = localStorage.getItem("serviceLocation");

  // useEffect(() => {
  //   if (storedServiceType && storedServiceLocation) {
  //     console.log("serviceDetails: ", storedServiceType, storedServiceLocation);
  //   }
  // }, []);

  const handleMenuVisibilityClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // const serviceDetails = { storedServiceType, storedServiceLocation };

  return (
    <div className="md:hidden flex justify-between mx-auto px-4 pb-6 w-full">
      <div className="flex items-center gap-1">
        <Image
          src={SiteLogo}
          alt="Site Logo"
          width={200}
          height={200}
          className="w-[3.6rem] h-[3.2rem] rounded-full"
        />

        <div className="flex flex-col space-y-[-0.4rem]">
          <h1 className="text-2xl uppercase text-[#cba9f2]">kal</h1>
          <p className="text-[0.6rem] uppercase text-neutral-300 tracking-widest">
            customer service expert
          </p>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="fixed right-4 top-10">
        <p className="" onClick={handleMenuVisibilityClick}>
          <PiDotsNineBold className="w-8 h-8" />
        </p>
      </div>
      {isMenuVisible && (
        <Fade duration={700} triggerOnce={true}>
          <nav className="absolute z-50 right-[50%] translate-x-[50%] top-24 bg-gray-800/90 rounded-xl glow shadow-[#64329e] w-[20rem] h-[23rem] flex flex-col justify-center items-center text-neutral-300">
            <div className="flex items-center gap-2 pb-2">
              <Image
                src={session?.user?.image!}
                alt="profile"
                width={200}
                height={200}
                className="w-12 h-12 rounded-full border border-[#64329e]"
              />
              <div className="flex flex-col">
                <p className="text-sm text-neutral-300">
                  {session?.user?.name}
                </p>
                <p className="text-xs text-neutral-400">
                  {session?.user?.email}
                </p>
              </div>
            </div>
            <div className="w-[80%] h-[0.06rem] bg-gray-700 my-4"></div>
            <ul className=" flex flex-col items-start gap-3">
              <Link href="/">
                <li className="flex items-center gap-2 text-xl text-neutral-400 hover:text-neutral-300 button-glow hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200">
                  <RiHome2Line className="w-5 h-5" />
                  <span>Home</span>
                </li>
              </Link>
              <Link href="#">
                <li className="flex items-center gap-2 text-xl text-neutral-400 hover:text-neutral-300 button-glow hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200">
                  <RiMailSendLine className="w-5 h-5" />
                  <span>Mailing List</span>
                </li>
              </Link>
              <Link href="#">
                <li className="flex items-center gap-2 text-xl text-neutral-400 hover:text-neutral-300 button-glow hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200">
                  <RiArchiveStackLine className="w-5 h-5" />
                  <span>Archived Chats</span>
                </li>
              </Link>
              <li
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2 text-lg text-neutral-400 hover:text-neutral-300 button-glow hover:bg-gray-700/30 rounded-full px-4 py-2 transition-all duration-200 cursor-pointer"
              >
                <RiLogoutCircleLine className="w-5 h-5" />
                <span>Sign Out</span>
              </li>
            </ul>
          </nav>
        </Fade>
      )}
    </div>
  );
};

export default BottomBar;
