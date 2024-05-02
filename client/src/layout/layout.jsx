import React from 'react'
import Navbar from '../components/navbar/navbar'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      
    </div>
  )
}
