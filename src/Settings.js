import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'; 
import { useEffect } from 'react';



function Settings() {
 useEffect(()=>{
  toast.success("welcome");

 })
    const[inputvalue1 , setInputValue1] = useState("")
    const[inputvalue2 , setInputValue2] = useState("")

    const handlesubmit = () =>{
        console.log(inputvalue1, inputvalue2);
        if (inputvalue1 ==='') {
            toast.error("please enter the name")
            
        }else{
          localStorage.setItem("name", inputvalue1)
          toast.success("user name save successfully")
        }
        if (inputvalue2 ==='') {
          toast.error("please enter the password")
          
      }else if(inputvalue2.length<=6){
        localStorage.setItem("password", inputvalue2)
        toast.error("please give password minimum 6 lettors")
      }
      else {
        localStorage.setItem("password", inputvalue2)
        toast.success("password save successfully")
        
        toast.info("submit sucessfully")
        window.location.href = "/Rout"
        
      }
      
      
    }
    
  
      
        
        
        
  

  return (
    <div>
      <ToastContainer/>
    <label>username</label>
    <input type="text"
    value={inputvalue1}
    onChange={(e) => setInputValue1(e.target.value)}
    /><br/>
    <label>Password</label>
    <input type="password"
    value={inputvalue2}
    onChange={(e) => setInputValue2(e.target.value)}
    />
    
    <button onClick={handlesubmit}>submit</button><br/>
    

    <label>{inputvalue1}</label><br/>
    <label>{inputvalue2}</label>
    </div>
    
  )
}






export default Settings