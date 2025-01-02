"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiFunctionAddLine, RiFunctionAddFill, RiHome5Fill, RiCalendarScheduleLine, RiCalendarScheduleFill } from "react-icons/ri";
import { BsTrophy, BsTrophyFill } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";

const navItems = [
  {
    id: "icon-a",
    label: "Events",
    href: "/Events",
    // left: "15px",
    png: <RiFunctionAddLine className="bg-white w-fit p-0.5 rounded-2xl" />,
    png1: <RiFunctionAddFill className="bg-red-100 w-fit p-0.5 rounded-2xl" />,
  },
  {
    id: "icon-b",
    label: "Results",
    href: "/result",
    // left: "87px",
    png: <BsTrophy className="bg-white w-fit p-0.5 rounded-2xl"  />,
    png1: <BsTrophyFill className="bg-red-100 w-fit p-0.5 rounded-2xl" />,
  },
  {
    id: "icon-c",
    label: "Home",
    href: "/",
    // left: "158px",
    png: <RiHome5Line className="bg-white w-fit p-0.5 rounded-2xl"/>,
    png1: <RiHome5Fill className="bg-red-100 w-fit p-0.5 rounded-2xl"/>,
  },
  {
    id: "icon-d",
    label: "Schedule",
    href: "/schedule",
    // left: "230px",
    png: <RiCalendarScheduleLine  className="bg-white w-fit p-0.5 ml-1.5 rounded-2xl"/>,
    png1: <RiCalendarScheduleFill className="bg-red-100 w-fit p-0.5 ml-1.5 rounded-2xl" />,
  },
  {
    id: "icon-e",
    label: "Profile",
    href: "/profile",
    // left: "300px",
    png: <img className="bg-white w-fit p-0.5 rounded-2xl" src="/image/bx-user-circle.svg" alt="" />,
    png1: <img className="bg-red-100 w-fit p-0.5 rounded-2xl" src="/image/bxs-user-circle.svg" alt="" />,
  },
];


function Navig() {
  const [activeIcon, setActiveIcon] = useState("icon-c"); 

  const getNavClass = (id: string) =>
    `flex flex-col items-center justify-center w-[19%] h-[40px] ${
      activeIcon === id ? "text-red-900 font-bold" : "text-zinc-500"
    }`;

  return (
    <div className="flex w-full text-center justify-center z-40">
    <div
      id="footer"
      className="m-0 mx-auto fixed bottom-0 z-[5] max-w-[375px] w-full flex items-center justify-center bg-white rounded-t-[15px] shadow-xl h-16"
    >
      {/* Render each navigation item separately */}
      {navItems.map((item) => (
        <nav
          key={item.id}
          className={getNavClass(item.id)}
          onClick={() => setActiveIcon(item.id)}
          aria-label={item.label}
        >
          <Link href={item.href}>
            <p
              className={`text-2xl transition duration-300 ${
                activeIcon === item.id ? "text-white" : ""
              }`}
            >
              {activeIcon === item.id ? item.png1 : item.png}
            </p>
            <p className="text-[10px] mt-[4px] flex justify-center text-center opacity-100  w-full">
              {item.label}
            </p>
          </Link>
        </nav>
      ))}
    </div>
    </div>
  );
}

export default Navig;