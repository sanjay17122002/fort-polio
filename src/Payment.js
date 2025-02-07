import React, { useState } from 'react'


function Payment() {
  const[data , setData] = useState(1)
  const[name , setName] = useState('HTML')
  const handle =()=>{
    setData(data+1)
  }
  const handledecrement =()=>{
    setData(data-1)
  }
  console.log(data);
  return (
    <div>
        <h1>payment</h1>
        <label>{data}</label>
        <button onClick={handle}>add</button>
        <button onClick={handledecrement}>sub</button>

        
    </div>
  )
}

export default Payment