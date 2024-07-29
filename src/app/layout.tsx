import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-200 ${inter.className}`} >
        <Navbar />
        <div className="min-h-[calc(100vh-96px)] py-8 px-4 2xl:px-32 xl:px-24 lg:px-16 md:px-8 max-w-[1800px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}