import React, { useEffect, useState, useRef } from 'react'
import './showcase.scss'
import { useSelector, useDispatch } from 'react-redux'
import { handleSectionClick, handleOpenCloseClick } from '../../features/showcase/showcaseSlice'
import SectionDropDown from './SectionDropDown'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const transition = {
  duration: 50,
  times: [0, 0.2, 0.4, 0.6, 0.8],
  ease: "easeInOut",
}

const shapes = [
  "polygon(133.33px 315.47px,224.67px 316.47px,221.50px 233.74px,222.33px 142.00px,266.67px 84.53px,133.33px 84.53px)",
  "polygon(133.33px 315.47px,224.67px 316.47px,221.50px 233.74px,268.33px 143.00px,266.67px 84.53px,133.33px 84.53px)",
  "polygon(133.33px 315.47px,224.67px 316.47px,247.58px 266.60px,270.50px 216.74px,268.33px 143.00px,266.67px 84.53px,133.33px 84.53px)",
  "polygon(133.33px 315.47px,224.67px 316.47px,268.58px 271.60px,270.50px 216.74px,268.33px 143.00px,266.67px 84.53px,133.33px 84.53px)",
  "polygon(133.33px 315.47px,269.67px 316.47px,268.58px 271.60px,270.50px 216.74px,268.33px 143.00px,266.67px 84.53px,133.33px 84.53px)",
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
      <div className='absolute z-60 h-[2rem]' onClick={handleSectionOpen}>
        Open/Close
      </div>

      { isOpen ?
        (
        <motion.div
          animate={{ clipPath: shapes }}
          transition={{
            duration: 5,
            times: [0, 0.2, 0.4, 0.6, 0.8]
          }}
          className='side-panel w-[20rem] bg-blue-500'
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
        ) : (<></>)
      }
    </>
  )
}

export default Showcase