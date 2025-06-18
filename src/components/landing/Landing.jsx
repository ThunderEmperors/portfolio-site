import React, { useEffect, useRef } from 'react'
import './Landing.css'
import Lenis from 'lenis'
import { easeIn, progress, useReducedMotion } from 'motion/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/src/all'
import {ReactLenis, useLenis} from 'lenis/react'
import useWindowDimensions from '../../app/useWindowDimensions'
import portrait from '../../assets/portrait.jpg'
import landingbg1 from '../../assets/landingbg1.jpeg'
import landingbg2 from '../../assets/landingbg2.jpeg'
import landingbg3 from '../../assets/landingbg3.jpeg'
import Hobbies from './Hobbies'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Landing = () => {

  const { height, width } = useWindowDimensions();

  const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.35,
  });

  const nameContainerRef = useRef();
  const firstNameRef = useRef();
  const triggerRef = useRef();
  const triggerRefIntro = useRef();
  const introTextRef = useRef();
  const textOneRef = useRef();
  const textTwoRef = useRef();
  const textThreeRef = useRef();
  const textFourRef = useRef();
  const lastNameRef = useRef();
  const mainImageContainerRef = useRef();

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

    
    // pin the name container text
    gsap.to(nameContainerRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        endTrigger: triggerRefIntro.current,
        start: "top bottom",
        end: 'top top',
        scrub: true,
        // markers: true,
        pin: nameContainerRef.current,
        // onLeave: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        // onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
      },
      opacity: 1
    })

    //Add movement to first name element
    gsap.to(firstNameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: 'bottom top',
        scrub: true,
        // markers: true,
        toggleActions: "start pause reverse pause",
      },
      x: -width/1.6,
      duration: 2,
    });

    //add movement to last name div
    gsap.to(lastNameRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: 'bottom top',
        scrub: true,
        // markers: true,
        toggleActions: "start pause reverse pause",
      },
      x: width/1.9,
      duration: 2,
    });

    // add scale scroll trigger to image
    let tl = gsap.timeline();
    tl.to(mainImageContainerRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: 'bottom top',
        scrub: true,
        // markers: true,
        toggleActions: "start pause reverse pause",
      },
      scale: 1,
      duration: 2,
      delay: 0.5
    })

    gsap.to(introTextRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        endTrigger: triggerRefIntro.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: true,
        pin: introTextRef.current
      }
    })

    // let introtl = gsap.timeline();
    // introtl.to(textOneRef.current,{
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       endTrigger: triggerRefIntro.current,
    //       start: "top bottom",
    //       end: 'top top',
    //       scrub: true,
    //       // markers: true,
    //       // pin: introTextRef.current,
    //       onLeave: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
    //       onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
    //     },
    //     duration: 0.5,
    //     opacity: 1
    //   }).to(textTwoRef.current,{
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       endTrigger: triggerRefIntro.current,
    //       start: "top bottom",
    //       end: 'top top',
    //       scrub: true,
    //       // markers: true,
    //       // pin: introTextRef.current,
    //       onLeave: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
    //       onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
    //     },
    //     opacity: 1,
    //     duration: 0.5
    //   })

    gsap.to('.welcome-text', {
      scrollTrigger:{
        trigger: triggerRef.current,
        endTrigger: triggerRefIntro.current,
        start: "top center",
        end: "top top",
        scrub: true
      },
      opacity: 1,
      duration: 2,
      stagger: 0.8
    })
    

  });

  return (
  <>
  <div className='container-div'>
    <div ref={nameContainerRef} className='main-landing h-[100%] bg-black text-[#ffc300]'>
      <div ref={triggerRef} className='absolute top-[100vh] left-0'></div>
      <div ref={firstNameRef} className='first-name flex text-6xl pr-[0.8rem]'>Puranjay </div>
      <div ref={mainImageContainerRef} className="image-container scale-0 absolute">
        <img src={landingbg3} className='h-screen w-screen object-cover'/>
      </div>
      <div ref={lastNameRef} className='last-name flex text-6xl pl-[0.8rem]'>Joshi</div>
        <div ref={introTextRef} className='intro-text items-center justify-center flex absolute text-[#ffc300] text-6xl'>
            {/* <span ref={textOneRef} className='opacity-0'>A</span>
            <span ref={textTwoRef} className='opacity-0'>GLIMPSE</span>
            <span ref={textThreeRef} className='opacity-0'>INTO</span>
            <span ref={textFourRef} className='opacity-0'>ME</span> */}
            <span className='welcome-text opacity-0 p-5'>A</span>
            <span className='welcome-text opacity-0 p-5'>GLIMPSE</span>
            <span className='welcome-text opacity-0 p-5'>INTO</span>
            <span className='welcome-text opacity-0 p-5'>ME</span>
        </div>
    </div>
    <div className='introduction h-[100vh] flex bg-black'>
      <div ref={triggerRefIntro} className='relative top-[0vh] left-0'></div>
    </div>
    <Hobbies />
  </div>
  </>
  )
}

export default Landing