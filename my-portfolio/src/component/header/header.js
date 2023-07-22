import React from 'react'
import './header.css'
import CTA from './CTA'
import MYName from '../../asset/MY Name.jpg'
import Headersocial from './headersocial'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Anand Kumar</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <CTA />
         < Headersocial/>

        <div className="me">
          <img src={MYName} alt="MY Image" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header