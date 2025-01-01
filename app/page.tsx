import Navig from "@/component/footer/Navigation";
import Counts from "@/component/home/Counts";
import EvBtn from "@/component/home/ev-btn";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";
import Login from "@/component/Log/Login";
import { LogIn } from "lucide-react";


export default function Home() {
  return (
    <div>
      
      <Header />
      <Counts/>
      <ImageSlider />
      <UpComing />
      <EvBtn/>
      <Navig/>
      
    </div>
  );
}
