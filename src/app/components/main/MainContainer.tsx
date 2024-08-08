"use client";

import { signOut, useSession } from "next-auth/react";
import SignIn from "../SignIn";
import WelcomeForm from "../WelcomeForm";

const MainContainer = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full max-w-[80rem] h-screen bg-gray-800 flex flex-col items-center justify-center p-12">
      <div className="relative text-white">
        {!session ? <SignIn /> : <WelcomeForm />}
      </div>
    </div>
  );
};

export default MainContainer;
