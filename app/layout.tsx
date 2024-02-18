import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My blog",
  description: "This is my blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-6 tablet:px-10 max-w-[1920px] mx-auto`}>
        <Navbar />
        <main className="py-10 px-0 tablet:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
