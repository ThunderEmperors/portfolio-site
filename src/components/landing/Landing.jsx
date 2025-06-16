import React, { useEffect, useRef } from 'react'
import './Landing.css'
import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'

const Landing = () => {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    })
  })

  return (
  <div className='container-div'>
    <div className='main-landing h-[100vh] bg-black text-amber-200'>
      Landing
    </div>
    <div className='skills h-[100vh] flex'>
      Skills
    </div>
  </div>
  )
}

export default Landing