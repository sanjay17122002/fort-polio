import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Payment from './Payment'
import Settings from './Settings'
import Home from './Home'





function Rout() {
  return (
    <div>
        <Router>
        <Routes>
        
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/settings" element={<Settings/>}/>
        
        </Routes>
        </Router>

    </div>
  )
}

export default Rout