import React from 'react'
import LandingPage from './components/LandingPage'
import SeatSwapPortal from './components/SeatSwapPortal'
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
  <Routes>
    <Route path='/' element={<LandingPage />}></Route>
    <Route path='/seat-swap' element={<SeatSwapPortal />}></Route>
  </Routes>
    </div>
  )
}

export default App
