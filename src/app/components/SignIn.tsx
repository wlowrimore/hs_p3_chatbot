"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { getFirstName } from "../../lib/utils";

import GoogleLogo from "../../../public/logos/google.jpg";
import SiteLogo from "../../../public/logos/site-logo.webp";
import Image from "next/image";
import { signIn } from "next-auth/react";
const SignIn = () => {
  const { data: session } = useSession();
  const name = getFirstName();
  return (
    <div className="glow w-full max-w-[30rem] p-8 border-[#64329e] border rounded-xl">
      <div className="flex justify-center pb-10 pt-4">
        <Image
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
      {!session ? (
        <section className="flex items-start max-w-[50%] mt-4">
          <div
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center gap-2 cursor-pointer button-glow w-full p-2 bg-black text-white rounded-2xl opacity-80 border hover:text-[#cba9f2]"
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
      ) : (
        <section className="flex gap-2 cursor-pointer button-glow w-full p-4 bg-black text-white rounded-xl opacity-80 border hover:text-[#cba9f2] mb-6">
          <div className="w-full flex flex-col">
            <form>
              <h2 className="text-lg font-bold tracking-wide pt-2">
                Welcome {name}!
              </h2>
              <article>
                <p>
                  Please fill in the following details so that I can give you
                  the best customer service experience.
                </p>
              </article>
              <div className="my-6 w-full space-y-6">
                <div className="w-full flex flex-col gap-1">
                  <label className="text-sm">Service Type</label>
                  <input
                    type="text"
                    aria-label="Service Type"
                    placeholder="technology / shopping / repairs / etc"
                    className="w-full bg-purple-200 text-neutral-950 px-2 py-1 rounded-xl placeholder:text-sm italic placeholder:text-neutral-700"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label className="text-sm">
                    Location Where Service Is Needed
                  </label>
                  <input
                    type="text"
                    aria-label="Location Where Service Needed"
                    placeholder="city / state / country"
                    className="w-full bg-purple-200 text-neutral-950 px-2 py-1 rounded-xl placeholder:text-sm italic placeholder:text-neutral-700"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <input
                  type="checkbox"
                  aria-label="I agree to the terms and conditions"
                  className="w-3 h-3"
                />
                <p className="text-sm">
                  I have read and I agree with the&nbsp;
                  <a href="#" className="text-[#cba9f2]">
                    terms and conditions
                  </a>
                </p>
              </div>
              <div className="flex justify-center my-4">
                <button
                  type="submit"
                  className="w-[75%] py-1 button-glow rounded-full"
                >
                  Let&apos;s Go!
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default SignIn;
