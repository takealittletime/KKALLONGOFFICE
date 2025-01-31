import "@/styles/globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/clsx";
import { SpoqaHanSansNeo } from "@/styles/font";

export const metadata: Metadata = {
  title: "KKALLONG OFFICE",
  description: "KKALLONG OFFICE",
  icons: {
    icon: "/favicon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SpoqaHanSansNeo.variable}>
      <body className={cn("font-spoqa-han-sans-neo", "w-full", "h-dvh")}>
        {children}
      </body>
    </html>
  );
}
