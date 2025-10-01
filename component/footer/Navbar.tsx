import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { GrTrophy } from "react-icons/gr";
import { MdOutlineEventSeat } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";






const Navbar = () => {

    const Items=[
        {icon:<MdOutlineEventSeat /> ,label:"Events",path:"/Events"},
        {icon:<GrTrophy />,label:"Results",path:"/result"},
        {icon:<GrHomeRounded/>,label:"Home",path:"/"},
        {icon:<AiOutlineSchedule /> ,label:"Schedule",path:"/"},
        {icon:<CgProfile />,label:"Profile",path:"/profile"},

    ]
  return (
    <div className=' h-20 bg-red-700 fixed bottom-0 '>
      
    </div>
  )
}

export default Navbar
