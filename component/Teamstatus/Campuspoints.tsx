"use client";

import React, { useState } from "react";

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
  const [view, setView] = useState(false); // State to toggle full data

  return (
    <div className="bg-orange-50 flex flex-col h-fit pt-5 pb-10 rounded-b-2xl">
      <div className="flex flex-col  justify-between items-end  w-full">
        {/* <h1 className="bg-red-700  rounded-lg w-fit px-2 font-semibold  text-white mb-5">Junior</h1> */}
        <div className="flex  gap-1 w-11/12 mx-auto overflow-x-auto">
          {["Minor", "Premeir", "Subjunior", "Junior", "Senior", ].map(
            (item: any) => (
              <div
                onClick={() => setCat(item)}
                key={item}
                className={` py-1 rounded-lg text-white text-xs text-center  w-full  my-4 ${cat==item ? "bg-red-700 text-xs font-bold":" bg-zinc-500 font-sans"}`}
              >
                {item}
              </div>
            )
          )}
        </div>
        {/* {cat} */}
        {/* <div className=" flex w-full justify-end px-1">
        <h1 className="bg-red-700 mt-5 flex rounded-lg w-fit px-2 items-end font-semibold text-white mb-5">
          After 50
        </h1>
        </div> */}
      </div>
      {/* minor Top 3 Ranks */}
      {cat == "Minor" ? (
        <div className="flex flex-col px-5 gap-1 font-gilroy">
          {minor.slice(0, 3).map((item: any) => (
            <div
              key={item.rank}
              className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
            >
              <img src={placeImage[item.rank]} alt="" className="h-8" />
              <p className="font-bold">{item.campus}</p>
              <p className="font-bold">{item.point}</p>
            </div>
          ))}

          {/* minor Additional Data */}
          {view &&
            minor.slice(3).map((item: any) => (
              <div
                key={item.rank}
                className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
              >
                <p className="bg-red-800 text-center h-8 w-8 py-1 px-2 text-white rounded-full font-semibold">
                  {item.rank}
                </p>
                <p className="font-medium">{item.campus}</p>
                <p className="font-medium">{item.point}</p>
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
      ) : cat == "Premeir" ? (
        <div className="flex flex-col px-5 gap-1 font-gilroy">
          {premeir.slice(0, 3).map((item: any) => (
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
            premeir.slice(3).map((item: any) => (
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
            className="bg-red-700 rounded-xl text-white font-bold font-sans py-2 mt-2"
            onClick={() => setView(!view)}
          >
            {!view ? "View More" : "View Less"}
          </button>
        </div>
      ) : cat == "Subjunior" ? (
        <div className="flex flex-col px-5 gap-1 font-gilroy">
          {Subjunior.slice(0, 3).map((item: any) => (
            <div
              key={item.rank}
              className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
            >
              <img src={placeImage[item.rank]} alt="" className="h-8" />
              <p className="font-bold">{item.campus}</p>
              <p className="font-bold">{item.point}</p>
            </div>
          ))}

          {/* Subjunior Additional Data */}
          {view &&
            Subjunior.slice(3).map((item: any) => (
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
            className="bg-red-700 rounded-xl text-white font-bold font-sans py-2 mt-2"
            onClick={() => setView(!view)}
          >
            {!view ? "View More" : "View Less"}
          </button>
        </div>
      ) : cat == "Junior" ? (
        <div className="flex flex-col px-5 gap-1 font-gilroy">
          {Junior.slice(0, 3).map((item: any) => (
            <div
              key={item.rank}
              className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
            >
              <img src={placeImage[item.rank]} alt="" className="h-8" />
              <p className="font-bold">{item.campus}</p>
              <p className="font-bold">{item.point}</p>
            </div>
          ))}

          {/* Junior Additional Data */}
          {view &&
            Junior.slice(3).map((item: any) => (
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
            className="bg-red-700 rounded-xl text-white font-bold font-sans py-2 mt-2"
            onClick={() => setView(!view)}
          >
            {!view ? "View More" : "View Less"}
          </button>
        </div>
      ) : (
        cat == "Senior" && (
          <div className="flex flex-col px-5 gap-1 font-gilroy">
            {senior.slice(0, 3).map((item: any) => (
              <div
                key={item.rank}
                className="p-3 rounded-xl shadow-md bg-white flex items-center justify-between px-5"
              >
                <img src={placeImage[item.rank]} alt="" className="h-8" />
                <p className="font-bold">{item.campus}</p>
                <p className="font-bold">{item.point}</p>
              </div>
            ))}

            {/* Senior Additional Data */}
            {view &&
              senior.slice(3).map((item: any) => (
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
            className="bg-red-700 rounded-xl text-white font-bold font-sans py-2 mt-2"
            onClick={() => setView(!view)}
          >
            {!view ? "View More" : "View Less"}
          </button>
          </div>
        )
      )}
    </div>
  );
}

export default Campuspoints;
