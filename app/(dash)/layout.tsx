import Navig from "@/component/footer/Navigation";
import Headtop from "@/component/home/Headtop";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navigation } from "lucide-react";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Headtop />
      {children}
       <SpeedInsights />
      <Navig/>

    </>
  );
}
