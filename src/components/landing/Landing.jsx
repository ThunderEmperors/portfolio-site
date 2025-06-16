import React, { useEffect, useRef } from 'react'
import './Landing.css'
import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'

const Landing = () => {

  const lenis = new Lenis();

  function raf(time){
    lenis.raf(time);
    console.log(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  

  return (
  <div className='container-div'>
    <div className='main-landing h-[100%] bg-black text-amber-200'>
      Landing
    </div>
    <div className='skills h-[100vh] flex'>
      Skills
    </div>
  </div>
  )
}

export default Landing