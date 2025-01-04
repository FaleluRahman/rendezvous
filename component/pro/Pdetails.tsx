"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Pdetails = () => {
  const [details, setDetails] = useState<any>(null);
  useEffect(() => {
    const student = Cookies.get("student");
    if (student) {
      setDetails(JSON.parse(student));
    }
  }, []);

  
  return (
    <div className="bg-orange-50 py-5 w-full flex flex-col items-center">
      {/* Profile Image */}
      <div className="flex justify-center w-full">
        <img className="w-1/5" src="/image/user-c.png" alt="User Profile" />
      </div>

      {/* Name */}
      <div className="flex justify-center w-full px-5">
        <p className="text-orange-700 font-bold text-xl"> {details?.name}</p>
      </div>

      {/* Jamia ID */}
      <div className="flex justify-center w-full px-5">
        <p className="text-zinc-700">{details?.jamiaNo}</p>
      </div>

      {/* Details Section */}
      <div className="w-[90%] bg-white rounded-xl flex flex-col text-xs ">
        {/* Campus */}
        <div className="flex justify-between w-full px-5 py-1">
          <p className="text-zinc-700">Campus:</p>
          <p className="text-zinc-700 font-bold">{details?.campus}</p>
        </div>

        <hr className="bg-zinc-700 w-full my-1" />

        {/* Category */}
        <div className="flex justify-between w-full px-5 pb-2">
          <p className="text-zinc-700">Category:</p>
          <p className="text-zinc-700 font-bold capitalize">{details?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Pdetails;
