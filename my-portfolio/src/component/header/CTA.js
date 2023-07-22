import React from 'react'
import Resume from '../../asset/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact </a>
    </div>
  )
}

export default CTA