import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Koo from '../../asset/Koo_Logo.png'
const headersocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/anand-kumar-679416226/" target='_blank'> < FaLinkedin /> </a>
        <a href="https://github.com/kumaranand2506" target='_blank'> < FaGithub /> </a>
        <a href="https://www.kooapp.com/profile/kumaranand1999" target='_blank'><img src={Koo} alt="KOO" className='kooimg'/></a>
        <a href="https://twitter.com/kumaranand1999" target='_blank'> <FaTwitter/> </a>
        <a href="https://www.instagram.com/kumaranand2506/" target='_blank'> <FaInstagram/> </a>
    </div>
  )
}

export default headersocial