import Navig from '@/component/footer/Navigation'
import Login from '@/component/Log/Login'
import Filter from '@/component/pro/Filter'
import StudentsLogin from '@/component/pro/Logask'
import Pdetails from '@/component/pro/Pdetails'
import Wallet from '@/component/pro/Wallet'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <StudentsLogin/> */}
      <Pdetails/>
      <Filter/>
      <Wallet/>
      <a href="/guest">Guest</a>
      <Navig/>
     
    </div>
  )
}

export default page
