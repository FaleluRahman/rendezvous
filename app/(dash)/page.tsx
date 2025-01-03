import Counts from "@/component/home/Counts";
import EvBtn from "@/component/home/ev-btn";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";
import { isLogged } from "@/lib/auth";

const HomePage = async () => {
  const logged = await isLogged();
  return (
    <div>
      
      <>
        <Header />
        <Counts />
        <ImageSlider />
        <UpComing />
        {logged && <EvBtn />}
      </>
      
    </div>
  );
};

export default HomePage;
