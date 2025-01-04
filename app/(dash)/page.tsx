import Counts from "@/component/home/Counts";
import EvBtn from "@/component/home/ev-btn";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";
import { isLogged } from "@/lib/auth";
import axios from "axios";

const HomePage = async () => {
  const logged = await isLogged();
  let programs:any[]=[];
  await axios
    .get(
      "https://malikoptics.abaqas.in/workspace-backend/programs/action.php?action=getOngoingPrograms"
    )
    .then((res) => (programs = res?.data?.data || []))
    .catch((err: any) => (programs = []));

  const programIds = programs?.map((program: any) => program.id) || [];
let schedule:any[] =[];

await axios.get(
    "http://application.abaqas.in/schedule/actions.php?api=b1daf1bbc7bbd214045af&programs=" +
      programIds.join(",")
  ).then((res) => schedule =res?.data?.data||[]).catch((err) => schedule = []);

  const ongoing = programs?.map((program: any) => {
    return {
      ...program,
      stage: schedule?.find((s: any) => s.program === program.id)?.stage,
    };
  });
  return (
    <div>
      <>
        <Header />
        <Counts />
        <ImageSlider />
        <UpComing programs={ongoing} />
        {logged && <EvBtn />}
        <div className="h-20"></div>
      </>
    </div>
  );
};

export default HomePage;
