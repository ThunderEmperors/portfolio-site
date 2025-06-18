import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Lenis from 'lenis';
import { marker } from 'motion/react-client';
import personal1 from '../../assets/personal-pics/personal1.jpg'
import personal2 from '../../assets/personal-pics/personal2.jpg'
import personal3 from '../../assets/personal-pics/personal3.jpg'
import personal4 from '../../assets/personal-pics/personal4.jpg'
import useWindowDimensions from '../../app/useWindowDimensions';

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Hobbies = () => {

  const { height, width } = useWindowDimensions();

  const triggerHobbiesStartRef = useRef();
  const triggerHobbiesEndRef = useRef();
  const hobbiesContainerRef = useRef();
  const personal1ContainerRef = useRef();
  const personal2ContainerRef = useRef();
  const personal3ContainerRef = useRef();
  const personal4ContainerRef = useRef();

  const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.35,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);


  useGSAP(() => {

    gsap.to(hobbiesContainerRef.current, {
      scrollTrigger: {
        trigger: triggerHobbiesStartRef.current,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        scrub: true,
        pin: hobbiesContainerRef.current
      },
    });

    gsap.to(personal1ContainerRef.current, {
      scrollTrigger: {
        trigger: triggerHobbiesStartRef.current,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        scrub: true,
        // pin: personal1ContainerRef.current
      },

      y: -height/4,
      duration: 2
    });

    gsap.to(personal2ContainerRef.current, {
      scrollTrigger: {
        trigger: triggerHobbiesStartRef.current,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        scrub: true,
        // pin: personal1ContainerRef.current
      },

      y: height/4,
      duration: 1
    });

    gsap.to(personal3ContainerRef.current, {
      scrollTrigger: {
        trigger: triggerHobbiesStartRef.current,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        scrub: true,
        // pin: personal1ContainerRef.current
      },

      y: -height/4,
      duration: 1
    });

    gsap.to(personal4ContainerRef.current, {
      scrollTrigger: {
        trigger: triggerHobbiesStartRef.current,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        scrub: true,
        // pin: personal1ContainerRef.current
      },

      y: height/4,
      duration: 2
    });

  });

  return (
  <>
    <div ref={hobbiesContainerRef} className='hobbies-container'>
      <div className='flex h-[100vh] w-[100vw] justify-between items-center text-black'>
        <div ref={personal1ContainerRef} className="pic1-container flex w-[23vw] h-[50vh]">
          <img src={personal1} className='w-full h-full object-cover pl-[2vw]' />
        </div>
        <div ref={personal2ContainerRef} className="pic2-container flex w-[23vw] h-[50vh]" >
          <img src={personal2} className='w-full h-full object-cover' /> 
        </div>
        <div ref={personal3ContainerRef} className="pic3-container flex w-[23vw] h-[50vh]">
          <img src={personal3} className='w-full h-full object-cover' />
        </div>
        <div ref={personal4ContainerRef} className="pic4-container flex w-[23vw] h-[50vh]">
          <img src={personal4} className='w-full h-full object-cover pr-[2vw]' />
        </div>
      </div>
      <div className='h-[100vh]'>
        <div ref={triggerHobbiesStartRef} className='relative top-[0vh] left-0'></div>
      </div>
      <div className='h-[100vh]'>
        <div ref={triggerHobbiesEndRef} className='relative top-[0vh] left-0'></div>
        <div className='temp-text'>

        </div>
      </div>  
    </div>
  </>
  )
}

export default Hobbies