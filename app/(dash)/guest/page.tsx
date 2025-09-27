import StudentsLogin from '@/component/pro/Logask'
import React from 'react'
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div className='bg-white min-h-screen  pt-10'>


        <div className="flex justify-center w-full">
            <img className="w-1/5" src="/image/user-c.png" alt="User Profile" />
        </div>

        {/* Name */}
        <div className="flex justify-center w-full px-5">
            <p className="text-orange-700 font-bold text-xl">Guest</p>
        </div>
        <StudentsLogin/>


    </div>
  )
}

export default page
