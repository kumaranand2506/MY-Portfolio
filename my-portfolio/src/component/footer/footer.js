import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <footer>
      

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; Anand Kumar</small>
      </div>
    </footer>
  )
}

export default footer