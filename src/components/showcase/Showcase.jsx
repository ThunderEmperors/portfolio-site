import React, { useEffect, useState, useRef } from 'react'
import './showcase.scss'
import { useSelector, useDispatch } from 'react-redux'
import { handleSectionClick, handleOpenCloseClick } from '../../features/showcase/showcaseSlice'
import SectionDropDown from './SectionDropDown'
import { Link } from 'react-router-dom'

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
        <div className='side-panel w-[10rem] bg-blue-500'>
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
        
        </div>
        ) : (<></>)
      }
    </>
  )
}

export default Showcase