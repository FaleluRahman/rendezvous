"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineEmojiEvents, MdOutlineEventSeat } from "react-icons/md";
import { GrHomeRounded, GrTrophy } from "react-icons/gr";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

// Define the nav items
const navItems = [
  {
    id: "icon-a",
    label: "Events",
    href: "/events",
    left: "15px",
    png: <MdOutlineEventSeat />,
    png1: <MdOutlineEmojiEvents className="text-white" />,
  },
  {
    id: "icon-b",
    label: "Results",
    href: "/result",
    left: "87px",
    png: <GrTrophy />,
    png1: <GrTrophy className="text-white" />,
  },
  {
    id: "icon-c",
    label: "Home",
    href: "/",
    left: "158px",
    png: <GrHomeRounded />,
    png1: <GrHomeRounded />,
  },
  {
    id: "icon-d",
    label: "Schedule",
    href: "/schedule",
    left: "230px",
    png: <AiOutlineSchedule />,
    png1: <AiOutlineSchedule />,
  },
  {
    id: "icon-e",
    label: "Profile",
    href: "/profile",
    left: "300px",
    png: <CgProfile />,
    png1: <CgProfile className="text-white" />,
  },
];

function Navig() {
  const [activeIcon, setActiveIcon] = useState("/"); // Default active route
  const [navLeft, setNavLeft] = useState("158px");

  // Function to get the class for navigation items
  const getNavClass = (id: string) =>
    `flex flex-col items-center justify-center w-[19%] h-[40px] ${
      activeIcon === id ? "text-red-900 font-bold" : "text-zinc-500"
    }`;

  return (
    <div
      id="footer"
      className="m-0 mx-auto fixed bottom-0 z-[5] max-w-[375px] w-full flex items-center justify-center bg-white rounded-t-[15px] shadow-xl h-16"
    >
      {/* Loop through navItems and render each icon */}
      {navItems.map((item) => (
        <nav
          key={item.id}
          className={getNavClass(item.id)}
          onClick={() => {
            setActiveIcon(item.id);
            setNavLeft(item.left);
          }}
          aria-label={item.label}
        >
          <Link href={item.href}>
            <p
              className={`text-2xl transition duration-300 ${
                activeIcon === item.id ? "!text-white" : ""
              }`}
            >
              {item.png}
            </p>
            <p className="text-[10px] mt-[4px] absolute bottom-[5px] opacity-100 transition duration-500">
              {item.label}
            </p>
          </Link>
        </nav>
      ))}
      {/* Active indicator */}
      <section
        id="nav-act"
        className="absolute bg-gradient-to-br from-red-600 to-red-700 w-[60px] h-[60px] rounded-[18px] -z-10 left-[15px] translate-y-[-20px] transition duration-500"
        style={{ left: navLeft }}
      />
    </div>
  );
}

export default Navig;
