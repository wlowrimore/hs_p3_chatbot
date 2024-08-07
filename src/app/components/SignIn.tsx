"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import GoogleLogo from "../../../public/logos/google.jpg";
import Image from "next/image";
import { signIn } from "next-auth/react";
const SignIn = () => {
  const { data: session } = useSession();

  return (
    <div className="glow w-full max-w-[30rem] p-8 border-[#64329e] border rounded-xl">
      <div className="text-white divide-y-2 divide-[#cba9f2]">
        <div>
          <h1 className="text-3xl text-[#cba9f2] font-bold uppercase">
            Hi, I&apos;m KAL
          </h1>
          <h2 className="text-lg mb-2">Your customer service assistant</h2>
        </div>

        <article className="py-6 flex flex-col gap-3">
          <p>I am here to help you find the right services for your needs.</p>
          <p>
            So that I may assist you with the proper responses to your
            questions, please sign in and provide me with a few details.
          </p>
        </article>
      </div>
      <section className="flex items-start max-w-[50%] mt-4">
        <div
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-2 cursor-pointer button-glow w-full p-2 bg-black text-white rounded-full opacity-80 border hover:text-[#cba9f2]"
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
