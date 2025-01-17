"use client";

import { useEffect, useState } from "react";

const Filter = () => {
  const [programs, setPrograms] = useState<any[]>([]);
  useEffect(() => {
    const programs = JSON.parse(localStorage.getItem("programs") || "[]");
    setPrograms(programs);
  }, []);
 

  return (
    <div>
      <div className="bg-orange-50 py-5 w-full flex  justify-center font-gilroy">
        <div className="w-[90%] bg-white rounded-3xl flex flex-col pb-5">
          <div className="flex text-xs justify-between w-full">
            <h1 className="text-zinc-700 font-bold px-3 mt-1 pt-3 text-lg py-2 flex items-center">
              My Programmes
            </h1>
            <img className="h-10 px-5 pt-5" src="/image/clipboard.svg" alt="" />
          </div>

          <hr className="bg-zinc-700 w-full" />
    <div className="gap-2 text-zinc-700 font-semibold">
      {programs.map((program, index) => (
        <div key={index} className="px-3 pt-1 capitalize">
          <p>{program.name.toLowerCase()}</p>
        </div>
      ))}
    </div>



        </div>
      </div>
      {/* <div className="px-5 bg-orange-50">
        <div className="flex w-full bg-whit text-zinc-50 rounded-lg py-1 ">
          <div className="bg-gradient-to-r from-red-700 to-red-600  border-red-500 border-[2px] rounded-2xl  ml-2 flex-1 mr-2">
            <div className="flex text-start flex-col w-full text-zinc-50 ">
              <h1 className="w-fit text-white font-bold rounded-lg my-1 mx-1 px-2 text-center">
                Reporting
              </h1>
              <hr className="bg-red-50/50 h-[1px] w-full" />

              {/* <nav className="absolute left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bottom-[42px] bg-red-400" /> */}
{/* 
              <p className="px-3 font-bold text-xs">Song Arabic</p>
              <p className="px-3 font-bold text-xs">Talk Master Arabic</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-700 to-yellow-600  border-yellow-500 border-[2px] rounded-2xl  ml-2 flex-1 mr-2">
            <div className="flex text-start flex-col w-full text-zinc-50 ">
              <h1 className="w-fit text-white font-bold rounded-lg my-1 mx-1 px-2 text-center">
                Ongoing
              </h1>
              <hr className="bg-red-50/50 h-[1px] w-full" />

              {/* <nav className="absolute left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bottom-[42px] bg-red-400" /> */}

              {/* <p className="px-3 font-bold text-xs">Song Arabic</p>
              <p className="px-3 font-bold text-xs">Talk Master Arabic</p>
            </div>
          </div>
        </div>
      </div> */} 
    </div>
  );
};

export default Filter;
