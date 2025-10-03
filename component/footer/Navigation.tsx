"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  RiFunctionAddLine, 
  RiFunctionAddFill, 
  RiHome5Fill, 
  RiCalendarScheduleLine, 
  RiCalendarScheduleFill,
  RiHome5Line,
  RiUserLine,
  RiUserFill
} from "react-icons/ri";
import { BsTrophy, BsTrophyFill } from "react-icons/bs";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "events",
    label: "Events",
    href: "/Events",
    icon: <RiFunctionAddLine size={24} />,
    activeIcon: <RiFunctionAddFill size={24} />,
  },
  {
    id: "results",
    label: "Results",
    href: "/result",
    icon: <BsTrophy size={24} />,
    activeIcon: <BsTrophyFill size={24} />,
  },
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: <RiHome5Line size={24} />,
    activeIcon: <RiHome5Fill size={24} />,
  },
  {
    id: "schedule",
    label: "Schedule",
    href: "/schedule",
    icon: <RiCalendarScheduleLine size={24} />,
    activeIcon: <RiCalendarScheduleFill size={24} />,
  },
  {
    id: "profile",
    label: "Profile",
    href: "/profile",
    icon: <RiUserLine size={24} />,
    activeIcon: <RiUserFill size={24} />,
  },
];

function Navig() {
  const pathname = usePathname();
  const [activeIcon, setActiveIcon] = useState<string>("home");

  // Update active icon based on current pathname
  useEffect(() => {
    const currentNavItem = navItems.find(item => item.href === pathname);
    if (currentNavItem) {
      setActiveIcon(currentNavItem.id);
    }
  }, [pathname]);

  const handleNavClick = (id: string) => {
    setActiveIcon(id);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-md mx-4 mb-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50">
        <nav className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`
                flex flex-col items-center justify-center
                px-3 py-2 rounded-xl transition-all duration-200 ease-in-out
                min-w-0 flex-1 max-w-[80px]
                ${
                  activeIcon === item.id
                    ? "bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 text-white shadow-md"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <div className="mb-1">
                {activeIcon === item.id ? item.activeIcon : item.icon}
              </div>
              <span className="text-xs font-medium text-center leading-tight">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navig;