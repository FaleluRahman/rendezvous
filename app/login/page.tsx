import Login from '@/component/Log/Login'
import React from 'react'
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div className='flex  items-center justify-center h-screen bg-orange-50'>
        <Login />
    </div>
  )
}

export default page