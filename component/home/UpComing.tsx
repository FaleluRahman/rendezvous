import React from 'react';

function UpComing() {
  return (
    <div className="bg-orange-600 overflow-hidden rounded-lg ">
      <div className="w-full flex flex-col items-end">
        <nav className="h-52 flex flex-row w-full overflow-x-auto no-scrollbar  mt-5 box-border snap-x snap-mandatory touch-pan-x">
          {[1, 1, 1, 1].map((_, index) => (
            <div
              key={index}
              className="w-64 h-5/6 flex-shrink-0 bg-gradient-to-r from-red-700 to-red-600 border-red-500 border-[2px] rounded-2xl flex flex-col justify-start items-start pl-8 box-border overflow-hidden relative snap-center mx-2"
            >
              <p className="text-lg bg-red-500 px-2 font-semibold text-white rounded-md mt-5">
                Junior
              </p>
              <h6 className="text-[25px] w-[70%] pr-0 font-bold leading-[27px] text-white m-0 mt-[15px]">
                Talk Master Arabic
              </h6>
              <nav className="absolute left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bottom-[42px] bg-red-400" />
              <p className="text-base font-semibold text-white absolute rounded-md bottom-3">
                Participated 15
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
      <div className="bg-orange-50">
        <div className="flex flex-col">
          <div className="h-10 w-screen bg-[url('/image/logoleft.png')] bg-repeat-x bg-contain animate-rightToLeft"></div>
        </div>
      </div>
    </div>
  );
}

export default UpComing;
