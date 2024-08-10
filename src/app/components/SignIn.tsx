"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { getFirstName } from "../../lib/utils";

import GoogleLogo from "../../../public/logos/google.jpg";
import SiteLogo from "../../../public/logos/site-logo.webp";
import Image from "next/image";
import { signIn } from "next-auth/react";
import WelcomeForm from "./WelcomeForm";
import Loading from "../loading";
const SignIn = () => {
  const { data: session, status } = useSession();

  const name = getFirstName();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="glow w-full max-w-[30rem] p-3 md:p-8 border-[#64329e] border rounded-3xl">
      <div className="flex justify-center pb-10 pt-4">
        <Image
          priority
          src={SiteLogo}
          alt="Site Logo"
          width={500}
          height={500}
          className="rounded-full w-[10rem] h-[8.5rem]"
        />
      </div>
      <div className="text-white divide-y-2 divide-[#cba9f2]">
        <div className="space-y-1">
          <h1 className="text-3xl text-[#cba9f2] font-bold uppercase">
            Hi, I&apos;m KAL
          </h1>
          <h2 className="text-lg mb-2">Your customer service assistant</h2>
        </div>

        <article className="py-6 flex flex-col gap-3">
          <p>
            I&apos;m here to help you find the right services for your needs.
          </p>
          <p>
            So that I may assist you with the proper responses to your
            questions, please sign in and provide me with a couple of details.
          </p>
        </article>
      </div>

      <section className="w-full h-[6rem] flex items-center justify-center mt-4">
        <div
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-2 cursor-pointer button-glow max-w-[75%] py-2 px-4 text-sm md:text-lg bg-neutral-950/90 text-white rounded-full opacity-80 border border-zinc-600 hover:text-[#cba9f2]"
        >
          <Image
            src={GoogleLogo}
            alt="Google"
            width={20}
            height={20}
            className="rounded-full"
          />
          Sign In With Google
        </div>
      </section>
    </div>
  );
};

export default SignIn;
