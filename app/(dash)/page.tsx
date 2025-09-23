import AdSlider from "@/component/home/AdSlider";
import Counts from "@/component/home/Counts";
import EvBtn from "@/component/home/ev-btn";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";
import { isLogged } from "@/lib/auth";
import { phpInstance } from "@/lib/utils";
import axios from "axios";
export const dynamic = "force-dynamic";

const HomePage = async () => {
  const logged = await isLogged();
  let programs: any[] = [];
  // await axios
  //   .post(
  //     "https://rendezvous.abaqas.in/campusprograms/action.php?status=campusId=JM001&action=getOngoingPrograms"
  //   )
  //   .then((res) => (programs = res?.data?.data || []))
  //   .catch((err: any) => {
  //     console.log(err);

  //     programs = [];
  //   });
  await phpInstance
    .get("/campusprograms/action.php", {
      params: { campusId: "JM001",status: "pending", action: "pagination",limit: 10,page: 1 },
    })
    .then((res) => (programs = res.data.data));

  // await fetch(
  //   "https://rendezvous.abaqas.in/campusprograms/action.php?status=campusId=JM001&action=getOngoingPrograms"
  // )
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res);

  //     programs = res?.data?.data || [];
  //   })
  //   .catch((err: any) => {
  //     console.log(err);
  //     programs = [];
  //   });

  const programIds = programs?.map((program: any) => program.id) || [];
  let schedule: any[] = [];

  await axios
    .post(
      "http://application.abaqas.in/schedule/actions.php?api=b1daf1bbc7bbd214045af&programs=" +
        programIds.join(",")
    )
    .then((res) => (schedule = res?.data?.data || []))
    .catch((err) => (schedule = []));

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
        <AdSlider />

        <div className="h-20"></div>
      </>
    </div>
  );
};

export default HomePage;
