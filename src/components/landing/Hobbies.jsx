import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Lenis from 'lenis';
import { marker } from 'motion/react-client';
import personal1 from '../../assets/personal1.jpg'
// import personal2 from '../../assets/personal2.jpg'
// import personal3 from '../../assets/personal3.jpg'
// import personal4 from '../../assets/personal4.jpg'

import personal2 from '../../assets/placeholder1.jpg'
import personal3 from '../../assets/placeholder2.jpg'
import personal4 from '../../assets/placeholder2.jpg'

import useWindowDimensions from '../../app/useWindowDimensions';
import './Hobbies.scss'

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Hobbies = () => {

  const { height, width } = useWindowDimensions();

  const triggerHobbiesStartRef = useRef();
  const firstTextRollInRef = useRef();
  const secondTextRollInRef = useRef();
  const thirdTextRollInRef = useRef();
  const triggerHobbiesEndRef = useRef();
  const picsContainerRef = useRef();
  const hobbiesContainerRef = useRef();
  const personal1ContainerRef = useRef();
  const personal2ContainerRef = useRef();
  const personal3ContainerRef = useRef();
  const personal4ContainerRef = useRef();
  const softwareDevTextRef = useRef();
  const webDevTextRef = useRef();
  const debaterTextRef = useRef();

  const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.4,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);


  
  useGSAP(() => {
    

    //pin the main container ref for the pictures
    gsap.to(picsContainerRef.current, {
      scrollTrigger: {
        trigger: triggerHobbiesStartRef.current,
        // endTrigger: triggerHobbiesEndRef.current,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        scrub: true,
        pin: picsContainerRef.current,
        pinSpacing: false,
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

      y: -height/8,
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

      y: height/8,
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


    //Software Text roll in
    gsap.to(softwareDevTextRef.current, {
      scrollTrigger: {
        // trigger: secondTextRollInRef.current,
        trigger: firstTextRollInRef.current,
        start: `center ${height/4}px`,
        end: "+=200px",
        // markers: true,
        scrub: true,
      },
      x: -width/1.7,
    })

    var swElems = gsap.utils.toArray('#software-elem');
    //Y translation for each element in software text
    swElems.forEach((elem, id) => {
      gsap.to(elem, {
        scrollTrigger:{
          // trigger: secondTextRollInRef.current,
          trigger: firstTextRollInRef.current,
          start: `center ${height/4}px`,
          end: "+=200px",
          // markers: true,
          scrub: true,
        },
        y: 0
      })
    })

    //Webdev Text roll in
    gsap.to(webDevTextRef.current, {
      scrollTrigger: {
        trigger: secondTextRollInRef.current,
        start: `center ${height/4}px`,
        end: "+=150px",
        // markers: true,
        scrub: true,
      },
      x: width/1.2,
    })

    var webDevElems = gsap.utils.toArray('#web-elem');
    //Y translation for each element in webdev text
    webDevElems.forEach((elem, id) => {
      gsap.to(elem, {
        scrollTrigger:{
          // trigger: secondTextRollInRef.current,
          trigger: secondTextRollInRef.current,
          start: `center ${height/4}px`,
          end: "+=150px",
          // markers: true,
          scrub: true,
        },
        y: 0
      })
    })

    //Debater Text roll in
    gsap.to(debaterTextRef.current, {
      scrollTrigger: {
        trigger: thirdTextRollInRef.current,
        start: `center ${height/4}px`,
        end: "+=150px",
        // markers: true,
        scrub: true,
      },
      x: -width/1.7,
    })

    var debaterElems = gsap.utils.toArray('#debater-elem');
    //Y translation for each element in debater text
    debaterElems.forEach((elem, id) => {
      gsap.to(elem, {
        scrollTrigger:{
          // trigger: secondTextRollInRef.current,
          trigger: thirdTextRollInRef.current,
          start: `center ${height/4}px`,
          end: "+=150px",
          // markers: true,
          scrub: true,
        },
        y: 0
      })
    })


    //end of useGsap lol
  });



  

  return (
  <>
    <div ref={hobbiesContainerRef} className='hobbies-container'>
      <div ref={picsContainerRef} className='images-container pt-[5rem] flex h-[50vh] w-[100vw]  justify-between items-center text-black'>
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
      <div ref={triggerHobbiesStartRef} className='trigger-hobbies-start relative top-[0vh] left-0'></div>
      <div className='h-[100vh] mb-[13vh] flex relative'>

        <div ref={firstTextRollInRef} className='first-text-roll-in relative top-[0vh] left-0'></div>
        <div ref={secondTextRollInRef} className='second-text-roll-in relative top-[25vh] left-0'></div>
        <div ref={thirdTextRollInRef} className='third-text-roll-in relative top-[75vh] left-0'></div>
        <div className='triangle-area-1 flex items-center w-[100vw] absolute top-[75vh] h-[60vh] bg-amber-500'>
          <div ref={softwareDevTextRef} className='software-dev-text absolute left-[100vw] flex'>
            <span id='software-elem' className='-translate-y-5'>S</span>
            <span id='software-elem' className='translate-y-35'>O</span>
            <span id='software-elem' className='-translate-y-30'>F</span>
            <span id='software-elem' className='translate-y-20'>T</span>
            <span id='software-elem' className='-translate-y-45'>W</span>
            <span id='software-elem' className='-translate-y-35'>A</span>
            <span id='software-elem' className='translate-y-50'>R</span>
            <span id='software-elem' className='pr-[1.5rem] -translate-y-55'>E</span>
            
            <span>D</span>
            <span>E</span>
            <span>V</span>
          </div>
        </div> 
      </div>
      <div className='w-[100vw] top-[75vh] '>
        <div className='triangle-area-2 flex items-center h-[60vh] bg-[#9fba47]'>
          <div ref={webDevTextRef} className='web-dev-text absolute w-[50vw] -left-[50vw] flex'>
            <span id='web-elem' className='-translate-y-55'>W</span>
            <span id='web-elem' className='translate-y-40'>E</span>
            <span id='web-elem' className='pr-[1.5rem] -translate-y-40'>B</span>
            <span id='web-elem' className='translate-y-35'>D</span>
            <span id='web-elem' className='-translate-y-30'>E</span>
            <span id='web-elem' className='translate-y-20'> V</span>
          </div>
        </div>
        <div className='h-[60vh]'>
          <div ref={debaterTextRef} className='debater-text absolute w-[50vw] left-[100vw] flex'>
            <span id='debater-elem' className='-translate-y-10'>D</span>
            <span id='debater-elem' className='translate-y-15'>E</span>
            <span id='debater-elem' className='-translate-y-15'>B</span>
            <span id='debater-elem' className='translate-y-21'>A</span>
            <span id='debater-elem' className='-translate-y-26'>T</span>
            <span id='debater-elem' className='translate-y-26'>E</span>
            <span id='debater-elem' className='-translate-y-30'>R</span>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Hobbies