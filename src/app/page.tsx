import "./globals.css";

import Image from "next/image";
import Loading from "./loading";
import MainContainer from "./components/main/MainContainer";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col justify-center items-center mx-auto p-24">
      <MainContainer />
    </main>
  );
}
