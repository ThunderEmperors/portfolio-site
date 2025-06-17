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

  const nameContainerRef = useRef();
  const firstNameRef = useRef();
  const triggerRef = useRef();
  const lastNameRef = useRef();

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

    //Make name container pinned
    gsap.to(nameContainerRef.current, {
      scrollTrigger: {
        trigger: nameContainerRef.current,
        start: "bottom bottom",
        end: 'bottom top',
        // markers: true,
        pin: true
      },
    })

    //Add movement to first name element
    gsap.to(firstNameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: 'bottom top',
        scrub: true,
        markers: true,
        toggleActions: "start pause reverse pause",
      },
      x: -200,
      duration: 2,
    });

    //add movement to last name div
    gsap.to(lastNameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: 'bottom top',
        scrub: true,
        markers: true,
        toggleActions: "start pause reverse pause",
      },
      x: 200,
      duration: 2,
    });
  });
  

  return (
  <>
  <div className='container-div'>
    <div ref={nameContainerRef} className='main-landing h-[100%] bg-black text-amber-900'>
      <div ref={triggerRef} className='absolute top-[100vh] left-0'></div>
      <div ref={firstNameRef} className='flex'>Puranjay</div>
      <div ref={lastNameRef} className='flex'>Joshi</div>
    </div>
    <div className='skills h-[100vh] flex'>
      Skills
    </div>
  </div>
  </>
  )
}

export default Landing