import React from 'react'
import './SectionDropDown.css'
import { Link } from 'react-router-dom'

const SectionDropDown = () => {
  return (
    <div className='handles-main'>
      <div>
        <Link to={'/CFHandle'}>
        CodeForces
        </Link>
      </div>
      <div>
        CodeChef
      </div>
      <div>
        LeetCode
      </div>
    </div>
  )
}

export default SectionDropDown