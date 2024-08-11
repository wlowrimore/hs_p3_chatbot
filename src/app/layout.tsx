import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/providers/SessionProvider";
import { ServiceDetailsProvider } from "../providers/ServiceDetailsProvider";

const nunito = Nunito({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SessionWrapper>
          <ServiceDetailsProvider>
            <main className="bg-gray-800">{children}</main>
          </ServiceDetailsProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
