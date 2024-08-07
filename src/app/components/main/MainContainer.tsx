import React from "react";
import SignIn from "../SignIn";

const MainContainer = () => {
  return (
    <div className="w-full max-w-[80rem] h-screen bg-gray-800 flex flex-col items-center p-12">
      <SignIn />
    </div>
  );
};

export default MainContainer;
