import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import Header from './common/Header'
import'./Dashboard.scss'

function Dashboard() {
  const [show,setShow] = useState(true)
  const handler = () =>{
    setShow(!show)
  }
  return (
    <div>
        
        <ToastContainer/>
        
        
    

        <div className='navbar'>
        <IoIosArrowDroprightCircle className='arrow' onClick={handler}  />
        <label>Home</label>
        <label>settings</label>
        <label>Dashboard</label>
        <label>payment</label>
        </div>


    </div>
  )
}

export default Dashboard