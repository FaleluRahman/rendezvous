// import React from 'react'
// import { PiStudentBold } from "react-icons/pi";
// import { MdMicExternalOn } from "react-icons/md";
// import { BiCard } from "react-icons/bi";




// const Counts = () => {
//   return (
//     <div className='bg-orange-50 grid grid-cols-2  grid-rows-3 px-5 py-4 w-full mx-auto text-center   '>

//         <div className='bg-yellow-50 mb-3  px-3 py-3 rounded-3xl relative  mx-1  overflow-hidden row-span-2'>
//             <h1 className='text-yellow-600 text-3xl text-left font-extrabold'>1500+</h1>
//             <p className='text-zinc-700 text-md  text-left '>Participates</p>
//             <PiStudentBold className='absolute w-20 h-20  bottom-[-8px] right-0 text-[#dda338] opacity-15 cursor-pointer'/>

//         </div>
//         <div className='bg-red-50  px-3 py-5 rounded-3xl relative mx-1  overflow-hidden'>
//             <h1 className='text-red-600 text-3xl text-left font-bold'>250+</h1>
//             <p className='text-zinc-700 text-md  text-left p'>Programs</p>
//             <MdMicExternalOn className='absolute w-20 h-20 top-5  right-0 text-red-400 opacity-15 cursor-pointer'/>

//         </div>
//         <div className='bg-green-50  mb-0 mt-3   px-3 py-5 rounded-3xl relative  mx-1  overflow-hidden row-span-2'>
//             <h1 className='text-green-600 text-3xl text-left font-extrabold'>42+</h1>
//             <p className='text-zinc-700 text-md  text-left '>Institutions</p>
//             <img className='absolute w-28 h-28  bottom-[-12px] right-0 text-green-600 opacity-15 cursor-pointer' src="/image/jm-logo.png" alt="" />

//         </div>
//         <div className='bg-green-50  px-3 py-5 rounded-3xl relative  mx-1  overflow-hidden row-span-2'>
//             <h1 className='text-blue-600 text-3xl text-left font-extrabold'>10+</h1>
//             <p className='text-zinc-700 text-md  text-left '>Venues</p>
//             <BiCard className='absolute w-20 h-20  bottom-[-12px] right-0 text-blue-600 opacity-15 cursor-pointer' />

//         </div>
       
        
       

        
//     </div>
//   )
// }

// export default Counts


import React from 'react';
import { PiStudentBold } from "react-icons/pi";
import { MdMicExternalOn } from "react-icons/md";
import { BiCard } from "react-icons/bi";
import { HiBuildingLibrary } from "react-icons/hi2";

const Counts = () => {
  const stats = [
    {
      number: "1,700+",
      label: "Participants",
      icon: PiStudentBold,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      number: "250+",
      label: "Programs",
      icon: MdMicExternalOn,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      number: "40+",
      label: "Institutions",
      icon: HiBuildingLibrary,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      number: "10+",
      label: "Venues",
      icon: BiCard,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    }
  ];

  return (
    <div className=" p-8  w-full max-w-md mx-auto h-auto">
    

      {/* Stats Grid */}
      <div className="space-y-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.bgGradient} p-6 rounded-3xl relative overflow-hidden border-2 border-white shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-4 translate-y-4"></div>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent text-4xl font-extrabold mb-2`}>
                    {stat.number}
                  </h3>
                  <p className="text-gray-700 text-lg font-semibold tracking-wide">
                    {stat.label}
                  </p>
                </div>
                
                <div className={`bg-gradient-to-br ${stat.gradient} p-4 rounded-2xl shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Animated Accent */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-500 hover:h-2`} 
                   style={{width: '100%'}}></div>
            </div>
          );
        })}
      </div>

   
    </div>
  );
};

export default Counts;