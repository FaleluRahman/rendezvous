import Eventset from '@/component/events/Eventset'
import Navig from '@/component/footer/Navigation'
import React from 'react'
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div>
            <Eventset/>
            <Navig/>

    </div>
  )
}

export default page
