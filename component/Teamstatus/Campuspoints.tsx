"use client";

import { programs } from "@/data/programs";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Campuspoints() {
  const minor = [
    { rank: 1, campus: "Markaz Garden", point: 120 },
    { rank: 2, campus: "Markaz Garden", point: 100 },
    { rank: 3, campus: "Markaz Garden", point: 90 },
    { rank: 4, campus: "Darul Hidaya Campus", point: 80 },
    { rank: "05", campus: "Isra Vatanappally", point: 70 },
    { rank: "06", campus: "Ashabul Badr", point: 50 },
    { rank: "07", campus: "Baithul Izza Narikkuni", point: 40 },
    { rank: "08", campus: "Shuhada Edu", point: 30 },
    { rank: "09", campus: "Markaz Al Munawara", point: 20 },
    { rank: 10, campus: "Markazunnajath", point: 10 },
  ];

  const premeir = [
    { rank: 1, campus: "Imam Rabbani Kanthapuram", point: 140 },
    { rank: 2, campus: "Imam Rabbani Kanthapuram", point: 120 },
    { rank: 3, campus: "Imam Rabbani Kanthapuram", point: 100 },
    { rank: "04", campus: "Darul Hidaya Campus", point: 80 },
    { rank: "05", campus: "Isra Vatanappally", point: 70 },
    { rank: "06", campus: "Ashabul Badr", point: 50 },
    { rank: "07", campus: "Baithul Izza Narikkuni", point: 40 },
    { rank: "08", campus: "Shuhada Edu", point: 30 },
    { rank: "09", campus: "Markaz Al Munawara", point: 20 },
    { rank: 10, campus: "Markazunnajath", point: 10 },
  ];

  const Subjunior = [
    { rank: 1, campus: "Imam Shafi Busthanabad", point: 140 },
    { rank: 2, campus: "Imam Shafi Busthanabad", point: 120 },
    { rank: 3, campus: "Imam Shafi Busthanabad", point: 100 },
    { rank: "4", campus: "Imam Shafi Busthanabad", point: 80 },
    { rank: "05", campus: "Isra Vatanappally", point: 70 },
    { rank: "06", campus: "Ashabul Badr", point: 50 },
    { rank: "07", campus: "Baithul Izza Narikkuni", point: 40 },
    { rank: "08", campus: "Shuhada Edu", point: 30 },
    { rank: "09", campus: "Markaz Al Munawara", point: 20 },
    { rank: 10, campus: "Markazunnajath", point: 10 },
  ];

  const Junior = [
    { rank: 1, campus: "Isra Vatanappally", point: 140 },
    { rank: 2, campus: "Isra Vatanappally", point: 120 },
    { rank: 3, campus: "Isra Vatanappally", point: 100 },
    { rank: "04", campus: "Imam Shafi Busthanabad", point: 80 },
    { rank: "05", campus: "Isra Vatanappally", point: 70 },
    { rank: "06", campus: "Ashabul Badr", point: 50 },
    { rank: "07", campus: "Baithul Izza Narikkuni", point: 40 },
    { rank: "08", campus: "Shuhada Edu", point: 30 },
    { rank: "09", campus: "Markaz Al Munawara", point: 20 },
    { rank: 10, campus: "Markazunnajath", point: 10 },
  ];

  const senior = [
    { rank: 1, campus: "Baithul Izza Narikkuni", point: 140 },
    { rank: 2, campus: "Baithul Izza Narikkuni", point: 120 },
    { rank: 3, campus: "Baithul Izza Narikkuni", point: 100 },
    { rank: "04", campus: "Imam Shafi Busthanabad", point: 80 },
    { rank: "05", campus: "Isra Vatanappally", point: 70 },
    { rank: "06", campus: "Ashabul Badr", point: 50 },
    { rank: "07", campus: "Baithul Izza Narikkuni", point: 40 },
    { rank: "08", campus: "Shuhada Edu", point: 30 },
    { rank: "09", campus: "Markaz Al Munawara", point: 20 },
    { rank: 10, campus: "Markazunnajath", point: 10 },
  ];

  const placeImage: any = {
    1: "/image/1.png",
    2: "/image/2.png",
    3: "/image/3.png",
  };
  const [cat, setCat] = useState("Minor");
  const [view, setView] = useState(false);
  const [after, setAfter] = useState(0);
  const [results, setResults] = useState<any[] | null>(null); // State to toggle full data
  useEffect(() => {
    if (cat) {
      axios
        .get(
          "https://malikoptics.abaqas.in/workspace-backend/programs/syncCampusResult.php?category=" +
            cat
        )
        .then((res) => {
          if (res?.data?.data) {
            setAfter(res.data.data.after);
            setResults(JSON.parse(res.data.data.result ?? "[]"));
          } else {
            setAfter(0);
            setResults([]);
          }
        })
        .catch((err) => {
          setAfter(0);
          setResults([]);
          console.log(err);
        });
    }
  }, [cat]);
  return (
    <div className="bg-orange-50 flex flex-col h-fit pt-5 pb-10 ">
      <div className="flex flex-col  justify-between items-end  w-full">
        {/* <h1 className="bg-red-700  rounded-lg w-fit px-2 font-semibold  text-white mb-5">Junior</h1> */}
        <div className="flex  gap-1 w-11/12 mx-auto overflow-x-auto">
          {["Minor", "Premeir", "Subjunior", "Junior", "Senior"].map(
            (item: any) => (
              <div
                onClick={() => setCat(item)}
                key={item}
                className={` py-1 rounded-lg text-white text-xs text-center  w-full  my-4 ${
                  cat == item
                    ? "bg-red-700 text-xs font-bold"
                    : " bg-zinc-500 font-sans"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
      {results && results.length !== 0 ? (
        <div className=" flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-center">
            {programs.filter((prgrm) => prgrm.category == cat).length == after
              ? "Final Result"
              : `After ${after} Results`}
          </h3>
          {results.slice(0, 3).map((item: any, index: number) => (
            <div
              key={index}
              className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
            >
              <img src={placeImage[index + 1]} alt="" className="h-8" />
              <p className="font-bold">{item.campus}</p>
              <p className="font-bold">{item.points}</p>
            </div>
          ))}

          {/* Toggle Button */}
          {view &&
            results.slice(3).map((item: any, index: number) => (
              <div
                key={index}
                className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
              >
                <p className="bg-red-800 text-center h-8 w-8 py-1 px-2 text-white rounded-full font-semibold">
                  {index + 4}
                </p>
                <p className="font-medium">{item.campus}</p>
                <p className="font-medium">{item.points}</p>
              </div>
            ))}

          {/* Toggle Button */}
          <button
            className="bg-red-700 rounded-xl text-white font-bold font-sans py-2 mt-2"
            onClick={() => setView(!view)}
          >
            {!view ? "View More" : "View Less"}
          </button>
        </div>
      ) : (
        <div className="text-2xl font-bold text-center text-red-500">
          nothing found
        </div>
      )}

      {/* {cat} */}
      {/* <div className=" flex w-full justify-end px-1">
        <h1 className="bg-red-700 mt-5 flex rounded-lg w-fit px-2 items-end font-semibold text-white mb-5">
          After 50
        </h1>
        </div> */}
    </div>
  );
}

export default Campuspoints;
