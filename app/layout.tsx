import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Headtop from "@/component/home/Headtop";
import { Navigation } from "swiper";
import Navig from "@/component/footer/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rendezvous",
  description: "Glocal Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        
        <div className="w-full max-w-[500px] mx-auto relative">
        <Headtop/>
        <Navig/>
        
          {children}
          
    
        </div>
        

      </body>
    </html>
  );
}
