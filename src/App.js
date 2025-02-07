import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
   <div>
    <h1>app page</h1>
    <Link to="/">
    <button>go to home</button>
    </Link>
    </div>
  )
}

export default App