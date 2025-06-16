import React, { useEffect, useRef } from 'react'
import './Landing.css'
import Lenis from 'lenis'
import { easeIn, useReducedMotion } from 'motion/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/src/all'
import {ReactLenis, useLenis} from 'lenis/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Landing = () => {

  const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.35,
  });
  const landingRef = useRef();
  const triggerRef = useRef();

  lenis.on('scroll', ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time* 1000);
  // })

  // gsap.ticker.lagSmoothing(0);
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  useGSAP(() => {
    gsap.to(landingRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "50px 90%",
        end: '50px 80%',
        scrub: true,
        markers: true,
        toggleActions: "start pause reverse pause",
        duration: 0.5
      },
      opacity: 0,
      duration: 0.5,
    });
  });
  

  return (
  <>
  <div className='container-div'>
    <div  className='main-landing h-[100%] bg-black text-amber-200'>
      <div ref={triggerRef} className='absolute top-[90vh] left-0'></div>
      <div ref={landingRef} className='flex'>Landing</div>
    </div>
    <div className='skills h-[100vh] flex'>
      Skills
    </div>
  </div>
  </>
  )
}

export default Landing