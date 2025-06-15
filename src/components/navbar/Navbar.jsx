import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import LandingParticles from '../cfhandle/landingParticles'

const Navbar = () => {
  return (
    <>
    <LandingParticles />
    
    <div className='main-nav-elem'>
        <div className='text-white text-xl'>
          <Link to={`/`}>
            Home
          </Link>
        </div>
        <div className='text-white text-xl'>
          <Link to={`/CFHandle`}>
          CodeForces
          </Link>
        </div>
        <div className="dropdown-elem">
          <div className='text-white text-xl dropdown-text'>Dropdown</div>
          <div className='dropdown-content'>
            <Link to={'/'}>Link 1</Link>
            <Link to={'/'}>Link 2</Link>
            <Link to={'/'}>Link 3</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar