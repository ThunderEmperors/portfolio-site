import React, { useEffect, useState, useRef } from 'react'
import './showcase.scss'
import { useSelector, useDispatch } from 'react-redux'
import { handleclick } from '../../features/showcase/showcaseSlice'
import SectionDropDown from './SectionDropDown'

const Showcase = () => {

  const sections = useSelector(state => state.showcase.sections);
  const dispatch = useDispatch();

  const handleSectionClick = (e) => {
    dispatch(handleclick(e.target.id))
  }

  return (
    <>
      <div className='side-panel'>
        <div className='side-sections' id='section-1'>
          <div className='drop-section' id='0' onClick={handleSectionClick}>
            Section 1
            {(sections[0].isOpen == true) ? 
              <><SectionDropDown /></> 
              : 
              <></>
            }
          </div>
          <div className='drop-section' id='1' onClick={handleSectionClick}>
            Section 2
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
            CodeForces
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Showcase