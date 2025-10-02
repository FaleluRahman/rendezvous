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
  
  // Stage name mapping
  const stageNames: { [key: number]: string } = {
    1: "Habitus",
    2: "Veritas",
    3: "Zenith",
    4: "Satori",
    5: "Haqiqat",
    6: "Falah",
    7: "Noor",
    8: "Sabr",
  };
  
  // Helper function to format stage
  const formatStage = (stage: any): string => {
    // If no stage data, return empty string
    if (!stage || stage === null) {
      return "";
    }
    
    // If stage is a number or numeric string, convert to stage name
    const stageNum = parseInt(stage);
    if (!isNaN(stageNum) && stageNames[stageNum]) {
      return stageNames[stageNum];
    }
    
    // If stage is already a stage name, return as is
    if (typeof stage === 'string') {
      const stageName = Object.values(stageNames).find(
        name => name.toLowerCase() === stage.toLowerCase()
      );
      if (stageName) return stageName;
    }
    
    // For any other case, return empty string
    return "";
  };
  
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

      // 2. Fetch schedule for each program individually using program_name and category
      const ongoingWithStage = await Promise.all(
        programs.map(async (program: any) => {
          try {
            const scheduleRes = await axios.get(
              "https://rend-application.abaqas.in/schedule/actions.php",
              {
                params: {
                  api: "b1daf1bbc7bbd214045af",
                  program_name: program.name || program.program_name,
                  category: program.category,
                },
              }
            );

            console.log(`📊 Schedule Response for ${program.name}:`, scheduleRes.data);

            // Extract only stage from response: data is an array, get first item's stage
            let stage = null;
            if (scheduleRes?.data?.data && Array.isArray(scheduleRes.data.data) && scheduleRes.data.data.length > 0) {
              stage = scheduleRes.data.data[0]?.stage;
            }

            // Format the stage (will return empty string if no data)
            const formattedStage = formatStage(stage);

            console.log(`✅ Stage extracted for ${program.name}: ${formattedStage || '(blank)'}`);

            return {
              ...program,
              stage: formattedStage,
            };
          } catch (err) {
            console.error(`❌ Error fetching schedule for ${program.name}:`, err);
            return {
              ...program,
              stage: "", // Empty string for errors
            };
          }
        })
      );

      console.log("Final Ongoing Programs:", ongoingWithStage);
      return ongoingWithStage;
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
        {/* <AdSlider /> */}

        <div className="h-20"></div>
      </>
    </div>
  );
};

export default HomePage;