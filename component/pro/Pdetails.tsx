import React from 'react';

const Pdetails = () => {
  return (
    <div className="bg-orange-50 py-5 w-full flex flex-col items-center">
      {/* Profile Image */}
      <div className="flex justify-center w-full">
        <img className="w-1/5" src="/image/user-c.png" alt="User Profile" />
      </div>

      {/* Name */}
      <div className="flex justify-center w-full px-5">
        <p className="text-orange-700 font-bold text-2xl">Shameem Ali</p>
      </div>

      {/* Jamia ID */}
      <div className="flex justify-center w-full px-5">
        <p className="text-zinc-700">JF 2019063</p>
      </div>

      {/* Details Section */}
      <div className="w-[90%] bg-white rounded-xl flex flex-col text-xs ">
        {/* Campus */}
        <div className="flex justify-between w-full px-5 py-2">
          <p className="text-zinc-700">Campus:</p>
          <p className="text-zinc-700 font-bold">Markaz Garden</p>
        </div>

        <hr className="bg-zinc-700 w-full my-1" />

        {/* Category */}
        <div className="flex justify-between w-full px-5 pb-2">
          <p className="text-zinc-700">Category:</p>
          <p className="text-zinc-700 font-bold">Senior</p>
        </div>
      </div>
    </div>
  );
};

export default Pdetails;
