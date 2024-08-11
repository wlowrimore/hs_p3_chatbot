import { Metadata } from "next";
import ChatContainer from "../components/chatPage/ChatContainer";

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

export default function ChatPage() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center mx-auto xl:px-24">
      <ChatContainer />
    </div>
  );
}
