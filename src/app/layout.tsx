import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/providers/SessionProvider";
import { ServiceDetailsProvider } from "../providers/ServiceDetailsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <ServiceDetailsProvider>
            <main className="bg-gray-800">{children}</main>
          </ServiceDetailsProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
