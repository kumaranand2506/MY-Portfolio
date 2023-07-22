import React from 'react'
import './nav.css'
import { FiHome, FiUser, FiBook, FiPhoneCall, FiBriefcase } from "react-icons/fi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href=""onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <FiHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> < FiUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> < FiBook /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <FiBriefcase /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> < FiPhoneCall /> </a>
    </nav>
  )
}

export default Nav