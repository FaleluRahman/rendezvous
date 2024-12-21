import React from "react";

const Headtop = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex w-full justify-between h-8 bg-gradient-to-r from-red-700 to-red-600 items-center">

        <img className="h-5 px-5" src="/image/rend-w.png" alt="Logo 1" />
        <div className="flex gap-1"> <img className="h-5   " src="/image/logo-w.png" alt="Logo 2" />
        <img className="h-5 mr-5 bg-white rounded-xl cursor-pointer" src="/image/Notification bell.gif" alt="Notification Bell"/></div>
        
      
      </div>
    </div>
  );
};

export default Headtop;
