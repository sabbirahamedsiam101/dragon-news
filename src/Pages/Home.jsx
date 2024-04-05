import React from 'react'
import Header from './Shared/Header'
import Navber from './Shared/Navber'
import Leftside from './Shared/Leftside'
import RightsideNav from './Shared/RightsideNav'
import BreakingNews from '../Components/BreakingNews'

export default function  () {
  return (
    <div className='lg:mx-[8%] font-popins'>
       <Header />
       <BreakingNews />
       <Navber />

       <div className=' grid lg:grid-cols-4 gap-6'>
         <div  className=' border-2 border-emerald-200'>
           <Leftside />
         </div>
         <div className=' border-2 border-emerald-200 col-span-2'>
           <h1 className=' text-[2vw]'>middle div</h1>
         </div>
         <div  className=' border-2 border-emerald-200'>
           <RightsideNav />
         </div>
       </div>
    </div>
  )
}
