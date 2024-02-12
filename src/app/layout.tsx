import "@/styles/globals.css";

import { type Viewport, type Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Recipify",
  description: "Ultimate recipe workshop app",
  manifest: "/images/favico/site.webmanifest",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/images/favico/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/favico/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/images/favico/favicon-16x16.png",
    },
  ],
};

export const viewPort: Viewport = {
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Next themes lib causes hydration error
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`font-sans ${GeistSans.className} bg-background antialiased`}
      >
        <Providers>
          <div vaul-drawer-wrapper="" className="min-h-screen bg-background">
            {children}
          </div>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
