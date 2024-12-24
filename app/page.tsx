import Counts from "@/component/home/Counts";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";


export default function Home() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <Counts/>
      <UpComing />
      
    </div>
  );
}
