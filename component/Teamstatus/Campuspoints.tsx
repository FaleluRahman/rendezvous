"use client";

import { programs } from "@/data/programs";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Campuspoints() {
  const placeImage: any = {
    1: "/image/1.png",
    2: "/image/2.png",
    3: "/image/3.png",
  };
  
  const [cat, setCat] = useState("Minor");
  const [view, setView] = useState(false);
  const [after, setAfter] = useState(0);
  const [results, setResults] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cat) {
      setLoading(true);
      setError(null);
      
      axios
        .get(
          `https://rend-application.abaqas.in/campus_points/actions.php?category=${cat}`
        )
        .then((res) => {
          if (res?.data?.success && res?.data?.data) {
            setAfter(res.data.data.after || 0);
            setResults(res.data.data.results || []);
          } else {
            setAfter(0);
            setResults([]);
            setError(null); // Don't set error, just empty results
          }
        })
        .catch((err) => {
          setAfter(0);
          setResults([]);
          setError("Failed to fetch data. Please try again.");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [cat]);

  // Get total programs count for the current category
  const getTotalProgramsCount = () => {
    return programs.filter((prgrm) =>
      cat === "premier"
        ? prgrm.category === "premier"
        : prgrm.category === cat.toLowerCase()
    ).length;
  };

  // Determine if it's final status or showing partial results
  const getStatusText = () => {
    const totalPrograms = getTotalProgramsCount();
    if (after === 0 || totalPrograms <= after) {
      return "After 10 Results";
    }
    return `After ${after} Results`;
  };

  return (
    <div className="bg-gray-50 flex flex-col h-fit pt-4 pb-10 px-5">
      <div className="flex flex-col justify-between items-end w-full">
        {/* Category Selection Buttons */}
        <div className="flex gap-1 w-11/12 mx-auto overflow-x-auto">
          {["Minor", "Premier", "Subjunior", "Junior", "Senior"].map(
            (item: any) => (
              <div
                onClick={() => {
                  setCat(item);
                  setView(false); // Reset view when changing category
                }}
                key={item}
                className={`py-1 px-2 rounded-lg text-white text-xs text-center w-full my-4 cursor-pointer ${
                  cat === item
                    ? "bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 text-xs font-bold"
                    : "bg-zinc-500 font-sans"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-600 font-semibold py-8">
          Loading...
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center text-red-600 font-semibold py-8">
          {error}
        </div>
      )}

      {/* Results Display - Only show if we have data with points */}
      {!loading && !error && results && results.length > 0 && results.some((item: any) => item.points > 0) && (
        <div className="flex flex-col gap-1">
<h3 className="text-2xl font-bold text-center bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 bg-clip-text text-transparent">            {getStatusText()}
          </h3>

          {/* Top 3 Results */}
          {results.slice(0, 3).map((item: any, index: number) => (
            <div
              key={index}
              className="p-3 rounded-xl shadow-md bg-white flex items-center text-zinc-700 justify-between px-5"
            >
              <img src={placeImage[index + 1]} alt="" className="h-8" />
              <p className="font-bold align-middle text-center">{item.campus}</p>
              <p className="font-bold">{item.points}</p>
            </div>
          ))}

          {/* Remaining Results (when expanded) */}
          {view &&
            results.slice(3).map((item: any, index: number) => (
              <div
                key={index}
                className="p-3 rounded-xl shadow-md bg-white flex items-center text-zinc-700 justify-between px-5"
              >
                <p className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 text-center h-8 w-8 py-1 px-2 text-white rounded-full font-semibold">
                  {index + 4}
                </p>
                <p className="font-semibold text-zinc-700 align-middle text-center">{item.campus}</p>
                <p className="font-semibold">{item.points}</p>
              </div>
            ))}

          {/* Toggle Button - Only show if more than 3 results */}
          {results.length > 3 && (
            <button
              className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 rounded-xl text-white font-bold font-sans py-2 mt-2"
              onClick={() => setView(!view)}
            >
              {!view ? "View More" : "View Less"}
            </button>
          )}
        </div>
      )}

      {/* Show "Not announced" message when no data or all points are 0 */}
      {!loading && !error && (!results || results.length === 0 || !results.some((item: any) => item.points > 0)) && (
        <div className="text-xs font-semibold text-center text-gray-500">
          Campus Points Not announced Yet
        </div>
      )}
    </div>
  );
}

export default Campuspoints;