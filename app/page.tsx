import Counts from "@/component/home/Counts";
import EvBtn from "@/component/home/ev-btn";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";


export default function Home() {
  return (
    <div>
      <Header />
      <Counts/>
      <ImageSlider />
      <EvBtn/>
      <UpComing />
      
    </div>
  );
}
