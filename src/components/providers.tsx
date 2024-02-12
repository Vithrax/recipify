"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "./ui/theme-provider";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ThemeProvider>
  );
};

export default Providers;
