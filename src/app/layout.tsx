import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.className} h-screen bg-background antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TRPCReactProvider>
            {/* 
              vaul-drawer-wrapper is data attribute 
              for drawer background scaling feature  
            */}
            <div vaul-drawer-wrapper="" className="h-screen bg-background">
              {children}
            </div>
            <Toaster richColors />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
