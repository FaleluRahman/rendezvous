// import AdSlider from "@/component/home/AdSlider";
// import Counts from "@/component/home/Counts";
// import EvBtn from "@/component/home/ev-btn";
// import Header from "@/component/home/Header";
// import ImageSlider from "@/component/home/ImageSlider";
// import UpComing from "@/component/home/UpComing";
// import { isLogged } from "@/lib/auth";
// import { phpInstance, phpInstances } from "@/lib/utils";
// import axios from "axios";
// export const dynamic = "force-dynamic";

// const HomePage = async () => {
//   const logged = await isLogged();
//   let programs: any[] = [];
//   // await axios
//   //   .post(
//   //     "https://rendezvous.abaqas.in/campusprograms/action.php?status=campusId=JM001&action=getOngoingPrograms"
//   //   )
//   //   .then((res) => (programs = res?.data?.data || []))
//   //   .catch((err: any) => {
//   //     console.log(err);

//   //     programs = [];
//   //   });




//   await phpInstances
//     .get("/campusprograms/action.php", {
//       params: { campusId: "JM001",status: "reporting", action: "pagination",limit: 10,page: 1 },
//     })
//     .then((res) => (programs = res.data.data));





//     // console.log(programs);

//   // await fetch(
//   //   "https://rendezvous.abaqas.in/campusprograms/action.php?status=campusId=JM001&action=getOngoingPrograms"
//   // )
//   //   .then((res) => res.json())
//   //   .then((res) => {
//   //     console.log(res);

//   //     programs = res?.data?.data || [];
//   //   })
//   //   .catch((err: any) => {
//   //     console.log(err);
//   //     programs = [];
//   //   });

  

//   const programIds = programs?.map((program: any) => program.id) || [];
//   let schedule: any[] = [];

//   await axios
//     .post(
//       "http://application.abaqas.in/schedule/actions.php?api=b1daf1bbc7bbd214045af&programs=" +
//         programIds.join(",")
//     )
//     .then((res) => (schedule = res?.data?.data || []))
//     .catch((err) => (schedule = []));

//   const ongoing = programs?.map((program: any) => {
//     return {
//       ...program,
//       stage: schedule?.find((s: any) => s.program === program.id)?.stage,
//     };
//   });
//   return (
//     <div>
//       <>
//         <Header />
//         <Counts />
//         <ImageSlider />
//         <UpComing programs={ongoing} />
//         {/* {logged && <EvBtn />} */}
//         <AdSlider />

//         <div className="h-20"></div>
//       </>
//     </div>
//   );
// };

// export default HomePage;


"use client"

import AdSlider from "@/component/home/AdSlider";
import Counts from "@/component/home/Counts";
import EvBtn from "@/component/home/ev-btn";
import Header from "@/component/home/Header";
import ImageSlider from "@/component/home/ImageSlider";
import UpComing from "@/component/home/UpComing";
import { isLogged } from "@/lib/auth";
import { phpInstance, phpInstances } from "@/lib/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const dynamic = "force-dynamic";


const HomePage = () => {
  const [ongoing, setOngoing] = useState<any[]>([]);
  async function fetchProgramsAndSchedule() {
    try {
      // 1. Fetch programs
      const programsRes = await axios.get(
        "https://rendezvous.abaqas.in/programs/results.php",
        {
          params: { action: "overview", status: "ongoing,reporting" },
        }
      );

      console.log("Programs API Response:", programsRes.data);

      const programs: any[] = programsRes?.data?.data || [];
      console.log("Programs Extracted:", programs);

      if (programs.length === 0) {
        console.warn("⚠️ No programs found");
        return [];
      }

      // 2. Collect program IDs
      const programIds = programs.map((p: any) => p.id);
      console.log("Program IDs:", programIds);

      // 3. Fetch schedule
      let schedule: any[] = [];
      try {
        const scheduleRes = await axios.post(
          "https://application.abaqas.in/schedule/actions.php",
          null, // body (null since we only pass query params)
          {
            params: {
              api: "b1daf1bbc7bbd214045af",
              programs: programIds.join(","),
            },
          }
        );

        console.log("Schedule API Response:", scheduleRes.data);
        schedule = scheduleRes?.data?.data || [];
      } catch (err) {
        console.error("❌ Error fetching schedule:", err);
        schedule = [];
      }

      // 4. Merge programs with schedules
      const ongoing = programs.map((program: any) => {
        const matchingSchedule = schedule.find(
          (s: any) => String(s.program) === String(program.id)
        );

        return {
          ...program,
          stage: matchingSchedule?.stage || null,
        };
      });

      console.log("Final Ongoing Programs:", ongoing);
      return ongoing;
    } catch (err) {
      console.error("❌ Error fetching programs:", err);
      return [];
    }
  }

  useEffect(() => {
    fetchProgramsAndSchedule().then((data) => {
      console.log("Fetched Programs and Schedule:", data);
      setOngoing(data);
    });
  }, []);

  return (
    <div>
      <>
        <Header />
        <Counts />
        <ImageSlider />
        <UpComing programs={ongoing} />
        {/* {false && <EvBtn />} */}
        <AdSlider />

        <div className="h-20"></div>
      </>
    </div>
  );
};

export default HomePage;