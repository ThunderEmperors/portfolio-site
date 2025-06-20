import React, { useEffect, useState, useRef } from 'react'
import './showcase.scss'
import { useSelector, useDispatch } from 'react-redux'
import { handleSectionClick, handleOpenCloseClick } from '../../features/showcase/showcaseSlice'
import SectionDropDown from './SectionDropDown'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'


const shapes = [
  "ellipse(25% 50% at -25% 50%)",
  "ellipse(170% 170% at -25% 50%)",
  "ellipse(170% 170% at -25% 50%)",
  "ellipse(180% 450% at -25% 50%)",
];

const shapes1 = [
  "ellipse(150% 180% at -25% 50%)",
  "ellipse(50% 75% at -25% 50%)",
  "ellipse(0% 0% at -25% 50%)",
  "ellipse(0% 0% at -25% 50%)",
  "ellipse(0% 0% at -25% 50%)",
];

const Showcase = () => {

  const sections = useSelector(state => state.showcase.sections);
  const dispatch = useDispatch();

  const handleDropdownClick = (e) => {
    dispatch(handleSectionClick(e.target.id));
  }

  let isOpen = useSelector(state => state.showcase.showPane);

  const handleSectionOpen = () => {
    dispatch(handleOpenCloseClick());
  }

  return (
    <>
      <div className='fixed z-60 h-[2rem] p-4' onClick={handleSectionOpen}>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="2rem"  height="2rem"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-align-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M10 12l10 0" /><path d="M6 18l14 0" /></svg>
      </div>
      <AnimatePresence>
      { isOpen &&
        (
        <motion.div
          animate={{ clipPath: shapes }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.6, 1],
          }}
          // exit={{ opacity: [1, 0.8, 0.6, 0.3, 0], times: [0, 0.2, 0.6, 0.8, 1], duration: 1 }}
          exit={{ clipPath: shapes1}}
          className='side-panel w-[12.5rem] bg-[#7f845b] h-[100vh]'
        >
        <div className='side-sections' id='section-1'>
          <div className='drop-section'><Link to={'/'}> Home </Link></div>
          <div className='drop-section'>
          <div  id='0' onClick={handleDropdownClick}>Section 1</div>
            {(sections[0].isOpen == true) ? 
              <><SectionDropDown /></> 
              : 
              <></>
            }
          </div>
          <div className='drop-section'>
          <div  id='1' onClick={handleDropdownClick}>Section 2</div>
            {(sections[1].isOpen == true) ? 
              <><SectionDropDown /></> 
              : 
              <></>
            }
          </div>
        </div>
        <div className='side-sections'>
          <div className='LinkedIn' id='connects-child'>
            LinkedIN
          </div>
          <div className='GitHub' id='connects-child'>
            GitHub
          </div>
          <div className='CodeForces' id='connects-child'>
            <Link to={'https://codeforces.com/profile/ThunderWasTaken'}> CodeForces </Link>
          </div>
        </div>
        
        </motion.div>
        )
      }
      </AnimatePresence>
    </>
  )
}

export default Showcase