import Navig from "@/component/footer/Navigation";
import Headtop from "@/component/home/Headtop";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Headtop />
      {children}
      <Navig/>

    </>
  );
}
