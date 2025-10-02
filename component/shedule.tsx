"use client";

import { axiosInstance } from "@/lib/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";

function convertTo12Hour(time24: string) {
  // Split the input into hours and minutes
  const [hours, minutes] = time24.split(":").map(Number);

  // Determine whether it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour format
  const hours12 = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Return formatted string
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

const Schedule = () => {
  const [date, setDate] = useState<string>("03"); 
  const [stage, setStage] = useState<number>(1);
  const [schedule, setSchedule] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const [availableStages, setAvailableStages] = useState<number[]>([]);

  const stageNames: { [key: number]: string } = {
    1: "Zenith",
    2: "Habitus",
    3: "Chrysalis",
    4: "Satori",
    5: "Oblivion",
    6: "Lumora",
    7: "Vertex",
    8: "Nexora",
    9: "Auralith",
  };

  // Fixed date mapping function
  const getDate = (dt: string) => {
    switch (dt) {
      case "03":
        return "2025-10-03"; 
      case "04":
        return "2025-10-04";
      case "05":
        return "2025-10-05";
      default:
        return "2025-10-02";
    }
  };

  useEffect(() => {
    if (date && stage) {
      setLoading(true);
      axios
        .get(
          "https://rend-application.abaqas.in/schedule/actions.php?api=b1daf1bbc7bbd214045af&stage=" +
            stage +
            "&date=" +
            getDate(date)
        )
        .then((res) => {
          console.log("API Response:", res.data); // Debug log
          setSchedule(res?.data?.data || []);
        })
        .catch((err) => {
          console.error("API Error:", err); // Debug log
          setSchedule([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [date, stage]);

  // Fetch available stages for the selected date
  useEffect(() => {
    if (date) {
      const fetchStagesPromises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((stg) =>
        axios
          .get(
            "https://rend-application.abaqas.in/schedule/actions.php?api=b1daf1bbc7bbd214045af&stage=" +
              stg +
              "&date=" +
              getDate(date)
          )
          .then((res) => {
            if (res?.data?.data && res.data.data.length > 0) {
              return stg;
            }
            return null;
          })
          .catch(() => null)
      );

      Promise.all(fetchStagesPromises).then((stages) => {
        const validStages = stages.filter((s) => s !== null) as number[];
        setAvailableStages(validStages);
        
        // If current stage is not available, switch to first available stage
        if (validStages.length > 0 && !validStages.includes(stage)) {
          setStage(validStages[0]);
        }
      });
    }
  }, [date]);

  return (
    <section
      className="w-full h-full bg-gray-50 min-h-screen shadow-[0_2px_10px_rgba(0,0,0,0.13)] box-border
            transition-all ease-in-out duration-500 pb-28"
    >
      <div>
        <div className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 pb-1 rounded-bl-3xl rounded-br-3xl">
          <h1 className="font-bold font-sans text-3xl  py-2 text-center text-white">
            Program Schedule
          </h1>

          <div
            className="flex items-center justify-evenly text-center mt-4 text-black bg-gradient-to-br from-rose-700 via-rose-600 to-red-700
                rounded-lg w-11/12 py-2 m-auto"
          >
            {[
              { date: "03", day: "Fri" },
              { date: "04", day: "Sat" },
              { date: "05", day: "Sun" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${
                  item.date === date // Fixed comparison
                    ? "bg-white text-red-800"
                    : "bg-none text-white"
                } w-[45px] h-[76px] rounded-xl border-0 border-black-100 cursor-pointer
                        transition duration-200 ease-in-out flex items-center justify-center flex-col`}
                onClick={() => setDate(item.date)}
              >
                <p className="text-2xl font-bold">{item.date}</p>
                <p className="text-xl font-bold">{item.day}</p>
              </div>
            ))}
          </div>

          {/* Stage Section */}
      <div className="flex my-4 overflow-x-auto no-scrollbar w-11/12 py-2 m-auto bg-gradient-to-br from-rose-700 via-rose-600 to-red-700 rounded-3xl">
            {availableStages.map((stg) => ( 
              <div
                className={`${
                  stage === stg
                    ? "bg-white text-red-800 font-bold"
                    : "bg-none text-white font-bold"
                } rounded-3xl py-1 px-3 flex-1 text-center min-w-28 mx-1.5 text-nowrap cursor-pointer`}
                onClick={() => setStage(stg)}
                key={stg}
              >
                {stageNames[stg] || `Stage ${stg}`}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col relative px-4 my-4">
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-red-500 border-t-transparent"></div>
              <p className="text-gray-600 mt-2">Loading schedule...</p>
            </div>
          )}

          {!loading && schedule.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">No schedule items found</p>
              <p className="text-sm">Select a different date or stage</p>
            </div>
          )}

          {schedule.map((item: any, index: number) => (
            <section
              className="text-black px-2 py-1 w-full mt-1 grid grid-cols-5"
              key={index}
            >
              {/* Time */}
              <div className="px-1 py-1 flex items-center">
                <p className="text-xs font-semibold nowrap">
                  {convertTo12Hour(item.start)} -<br />
                  {convertTo12Hour(item.end)}
                </p>
              </div>
              <div className="flex justify-center items-center align-middle px-4">
                <div className="w-3 h-3 border-4 border-red-300 rounded-full bg-red-700"></div>
              </div>
              <div className="px-2 py-4 bg-white shadow-white border rounded-xl col-span-3">
                <p className="text-xs font-medium uppercase">{item.category}</p>
                <p className="text-sm font-semibold text-zinc-600">{item.program_name}</p>
              </div>

             
            </section>

           
          ))}

            <div className="col-span-5 px-10 py-2  text-xs text-center text-red-800">
                <p><span className="font-semibold">NB:</span>The Schedule is subject to change and the complete authority rests under the jurisdiction of the <span className="font-semibold">Festival Collective</span>.</p>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;