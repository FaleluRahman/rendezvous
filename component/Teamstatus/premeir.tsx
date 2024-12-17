"use client";

import React, { useState } from "react";

function premeir() {
  const Data = [
    { rank: 1, campus: "Markaz Garden poonoor", point: 120 },
    { rank: 2, campus: "Imam Rabbani Kanthapuram", point: 100 },
    { rank: 3, campus: "Imam Shafi Busthanabad", point: 90 },
    { rank: "04", campus: "Darul Hidaya Campus", point: 80 },
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

  const [view, setView] = useState(false); // State to toggle full data

  return (
    <div className="bg-orange-50 flex flex-col pt-10 pb-10 ">
<div className="flex ml-5 justify-between mr-5">
    <h1 className="bg-orange-700  rounded-lg w-fit px-2 font-semibold  text-white mb-5">Premeir</h1>
    <h1 className="bg-orange-700  rounded-lg w-fit px-2 font-semibold   text-white mb-5">After 40</h1>
    </div>
      {/* Top 3 Ranks */}
      <div className="flex flex-col px-5 gap-1 font-gilroy">
        {Data.slice(0, 3).map((item: any) => (
          <div
            key={item.rank}
            className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
          >
            <img src={placeImage[item.rank]} alt="" className="h-8" />
            <p className="font-bold">{item.campus}</p>
            <p className="font-bold">{item.point}</p>
          </div>
        ))}

        {/* Additional Data */}
        {view &&
          Data.slice(3).map((item: any) => (
            <div
              key={item.rank}
              className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
            >
              <p className="bg-red-800 py-1 px-2 text-white rounded-full font-semibold">
                {item.rank}
              </p>
              <p className="font-medium">{item.campus}</p>
              <p className="font-medium">{item.point}</p>
            </div>
          ))}

        {/* Toggle Button */}
        <button
          className="bg-orange-700  rounded-xl font-bold text-white font-sans py-2 mt-2"
          onClick={() => setView(!view)}
        >
          {!view ? "View More" : "View Less"}
        </button>
      </div>
    </div>
  );
}

export default premeir;
