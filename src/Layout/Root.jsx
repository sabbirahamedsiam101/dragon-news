import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className=' max-w-7xl mx-auto '>
       <Outlet />
    </div>
  )
}
