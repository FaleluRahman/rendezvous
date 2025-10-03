import React from "react";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Link from "next/link"; // Import the Link component for navigation

const Headtop = () => {
  return (
    <div className="overflow-hidden flex w-full z-20 sticky top-0 shadow-md">
      <div className="flex w-full justify-between h-20  bg-white items-center">
        {/* Logo */}
        <img className="h-10 py-1.5 px-5" src="/image/Primary_Logo.png" alt="Logo 1" />

        {/* Notification and Profile Icons */}
        <div className="flex gap-2 px-5">
          {/* <Link href="/notification">
            <FaBell className="text-stone-900 text-xl cursor-pointer" />
          </Link> */}
          <Link href="/profile">
            <CgProfile className="text-stone-900 text-xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headtop;
