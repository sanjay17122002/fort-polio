import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>hello{props.name}</h1>
        <h1>welcome{props.fname}</h1>
    </div>
  )
}

export default Child