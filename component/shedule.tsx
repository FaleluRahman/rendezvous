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
  const [date, setDate] = useState<any>(5);
  const [stage, setStage] = useState<any>(1);
  const [schedule, setSchedule] = useState<any>([]);

  const getDate = (dt: number) => {
    if ((dt == 4)) {
      return "2025-01-04";
    } else {
      return "2025-01-05";
    }
  };
  useEffect(() => {
    if (date && stage) {
      axios
        .get(
          "https://application.abaqas.in/schedule/actions.php?api=b1daf1bbc7bbd214045af&stage=" +
            stage +
            "&date=" +
            getDate(date)
        )
        .then((res) => {
          setSchedule(res?.data?.data || []);
        })
        .catch((err) => {
          setSchedule([]);
        });
    }
  }, [date, stage]);
  return (
    <section
      className="w-full  h-full bg-zinc-50  shadow-[0_2px_10px_rgba(0,0,0,0.13)] box-border
            transition-all ease-in-out duration-500 pb-20 "
    >
      <div>
        <div className="bg-gradient-to-r from-red-700 to-red-600 pb-1 rounded-bl-3xl rounded-br-3xl">
          <h1 className=" font-bold text-3xl py-2 w-11/12 text-center text-white ">
            Schedule
          </h1>

          <div
            className="flex items-center justify-evenly text-center mt-4 text-black bg-gradient-to-r from-red-600 to-red-500
                rounded-lg w-11/12 py-2 m-auto"
          >
            {[
              { date: 4, day: "Sat" },
              { date: 5, day: "Sun" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${
                  item.date == date
                    ? "bg-white text-red-800 "
                    : "bg-none text-white"
                } w-[45px] h-[76px] rounded-xl border-0 border-black-100 cursor-pointer
                        transition duration-200 ease-in-out flex items-center justify-center flex-col`}
                onClick={() => setDate(item.date)}
              >
                <p className="text-2xl font-bold ">{item.date}</p>
                <p className="text-xs font-normal ">{item.day}</p>
              </div>
            ))}
          </div>
          {/* {/Stage Section/} */}

          <div className="flex  my-4 overflow-x-auto no-scrollbar w-11/12 py-2 m-auto bg-red-500 rounded-3xl ">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((stg) => (
              <div
                className={`${
                  stage == stg
                    ? "bg-white text-red-800 font-bold"
                    : "bg-none text-white font-bold"
                } rounded-3xl py-1 px-3 flex-1 text-center min-w-28   mx-1.5 text-nowrap cursor-pointer`}
                onClick={() => setStage(stg)}
                key={stg}
              >
                Stage {stg}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col relative px-4 my-4">
          {schedule.map((item: any, index: number) => (
            <section
              className="text-black px-2 py-1 w-full mt-1 grid grid-cols-5"
              key={index}
            >
              {/* Time  */}
              <div className="px-1 py-1 flex items-center">
                <p className="text-xs font-semibold  nowrap">
                  {convertTo12Hour(item.start)} -<br/>{convertTo12Hour(item.end)}
                </p>
              </div>
              <div className="flex justify-center items-center align-middle  px-4">
                <div className="w-3 h-3 border-4 border-red-300 rounded-full bg-red-700"></div>
              </div>
              <div className="px-2 py-4 bg-white shadow-white border  rounded-xl col-span-3">
                <p className="text-xs font-medium">{item.category}</p>

                <p className="text-sm font-semibold text-zinc-600">{item.name}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
