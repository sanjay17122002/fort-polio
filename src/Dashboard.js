import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import Header from './common/Header'
import'./Dashboard.scss'
import { useEffect } from 'react';

function Dashboard() {
  const [show,setShow] = useState(true)
  useEffect(() =>{
    let a = localStorage.getItem("name")    
    toast.success("Welcome to the Dashboard  " + a)
   },[])
  const handler = () =>{
    setShow(!show)
  }
  return (
    <div>
        
        <ToastContainer/>
        <IoIosArrowDroprightCircle className='arrow' onClick={handler}  />
        
    
        {show ?
        <div className='navbar'>
        
        <label>Home</label>
        <label>settings</label>
        <label>Dashboard</label>
        <label>payment</label>
        </div>
        : null
      }


    </div>
    
  )
}

export default Dashboard