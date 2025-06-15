import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Showcase from './components/showcase/Showcase'
import CFHandleLanding from './components/cfhandle/CFHandleLanding'
import Landing from './components/landing/Landing'
import './App.css'
import LandingParticles from './components/cfhandle/landingParticles'
import MainShadow from './components/MainShadow'

function App() {

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <section className='app'>
        <MainShadow />
        <Showcase />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/CFHandle' element={<CFHandleLanding />} />
        </Routes>
        </section>
      </Router>
    </>
  )
}

export default App
