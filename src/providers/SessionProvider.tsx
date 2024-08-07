"use client";

import { SessionProvider as NextAuthProvider } from "next-auth/react";
const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <NextAuthProvider>{children}</NextAuthProvider>;
};

export default SessionWrapper;
