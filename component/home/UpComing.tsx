import React from "react";

function UpComing({ programs }: { programs: any[] }) {
  return (
    <div className="bg-white overflow-hidden ">
      <div className="flex justify-between ml-4 w-full ">
        <p className="flex  font-bold text-lg text-zinc-700 rounded-badge mb-3 px-1.5 mr-2 py-0.5 ">
          Live Programmes
        </p>
        <p className="pr-10 font-bold text-red-700 text-lg mb-3 ">{programs.length}</p>
      </div>
      <div className="w-full flex flex-col items-end">
        <nav className="h-52 flex flex-row w-full overflow-x-auto no-scrollbar  mt-2  box-border snap-x snap-mandatory touch-pan-x">
          {programs?.map((prgrm, index) => (
            <div
              key={index}
              className="w-64 h-5/6 flex-shrink-0 bg-gradient-to-r from-red-700 to-red-600 border-red-500 border-[2px] rounded-2xl flex flex-col justify-start items-start pl-8 box-border overflow-hidden relative snap-center mx-2"
            >
              <p className="text-lg bg-red-500 px-2 font-semibold text-white rounded-md mt-5">
                {prgrm.category}
              </p>
              <h6 className="text-[15px]  pr-0 font-bold leading-[27px] text-white m-0 mt-[15px]">
                {prgrm.name}
              </h6>
              <nav className="absolute left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bottom-[42px] bg-red-400" />
              <p className="text-base font-semibold text-white absolute rounded-md bottom-3">
                Stage {prgrm.stage}
              </p>
              <svg
                width={46}
                height={46}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-28 h-28 -rotate-[20deg] transform translate-x-20 translate-y-24 text-[#dda338] opacity-20 cursor-pointer"
              >
                <path d="M12 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M7 20.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M17 20.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              </svg>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default UpComing;
