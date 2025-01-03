import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Progressor from "@/component/common/Progressor";
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
        {/* <Progressor/> */}
       
        <div className="w-full max-w-[500px] mx-auto relative min-h-screen">
        
        
        
          {children}
          
    
        </div>
        

      </body>
    </html>
  );
}
