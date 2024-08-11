import { Metadata } from "next";

import MainContainer from "./components/main/MainContainer";

export const metadata: Metadata = {
  title: "KAL",
  description:
    "KAL is a customer service AI chatbot assisting users in their daily life.",
  keywords: "chatbot, customer service, AI, chat, KAL",
  openGraph: {
    title: "KAL",
    description:
      "KAL is a customer service AI chatbot assist users in their daily life.",
    url: "https://www.kal.ai",
    siteName: "KAL",
    images: [
      {
        url: "https://www.kal.ai/api/og",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col justify-center items-center mx-auto xl:px-24">
      <MainContainer />
    </main>
  );
}
