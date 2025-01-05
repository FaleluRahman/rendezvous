import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const EvBtn = () => {
  return (
    <div className="w-full flex justify-center bg-orange-50 px-3 pt-5">
      <div className="w-full relative bg-white rounded-3xl flex flex-col overflow-hidden mx-5  pb-2 mb-16">
        <div className="text-zinc-700  flex-col flex w-full px-5 pt-5">
          <p className="font-bold text-sm">Collect Glocal Points</p>

          <p className="text-[9px] text-justify w-[100%] leading-[-42px]">
            Scan the QR code to earn points by participating in these sessions,
            and redeem them for delicious items at Cafe and reduction at book
            fair and various exhibitions
          </p>
        </div>

        <Link
          className="bg-violet-200 ml-5 text-zinc-700 font-bold px-3 mt-4 py-1 rounded-2xl flex w-fit "
          href={`/profile/#collect`}
        >
          Collect
        </Link>

        <img
          className="ml-[73%] h-13 w-11 absolute top-[68%] pb-3 "
          src="/image/coinInEgg.svg"
          alt=""
        />
      </div>
    </div>
    // <div className='bg-orange-50 pb-5 pt-5'>
    // <div className='bg-zinc-100 mx-8 py-4  rounded-3xl' >
    //   <div className='py-2 px-5 text-sm text-justify'>
    //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iure quibusdam unde.
    //     Temporibus aliquam voluptatibus sint, eveniet minima in et quis id officia, inventore
    //     cumque ex voluptates maxime repudiandae provident.</p>
    //     <Link href="/Events" > <div className='w-full flex justify-end text-right cursor-pointer'><p className='bg-zinc-800 flex px-4 py-3 text-center text-sm font-semibold text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 active:scale-95">'>Explore
    //     <FaRegArrowAltCircleRight className='ml-1 mt-1 '/> </p></div></Link>
    //   </div>

    // </div>
    // </div>
  );
};

export default EvBtn;
