"use client"


import Cookies from 'js-cookie'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdLogOut } from 'react-icons/io'

const Logout = () => {
    const router=useRouter()
  return (
    <div className=' bg-gray-50 flex w-full justify-end pr-5 pt-5'>
              <button className="bg-gradient-to-r from-red-700 to-red-600 px-2 py-0.5 rounded-xl text-white font-bold flex"
              onClick={() => {
                Cookies.remove("student");
                localStorage.removeItem('programsF')
                router.push("/login");
            }}
            >Logout <LogOut className='w-4 h-4 mt-1 font-bold' />
            </button>

    </div>
  )
}

export default Logout



