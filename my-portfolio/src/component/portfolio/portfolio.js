import React from 'react'
import './portfolio.css'
import Portfoimg from '../../asset/portfo.jpg'
import tictac from '../../asset/tic-tac.jpg'
import shoping from '../../asset/shoping.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>My Reacent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
          <div className='proimage'>
            <div className="text-img">
           <img src={Portfoimg} alt="" />
            <a href="https://my-anand-portfolio.netlify.app/home.html" target='_blank' className='btn btn-primary'>Live demo </a> 
            <a href="https://github.com/kumaranand2506/Portfolio" target='_blank'><h3>Github</h3></a>
            <p>This is a Portfolio website built Using HTML, Css and JavaScript. It has four section Home, MY intro, Blog, contact Us. </p>
            </div>
            </div>
            
            <div className='proimage'> 
            <div className="text-img">
            <img src={tictac} alt="" />
            <a href="https://tico-tac.netlify.app/" target='_blank' className='btn btn-primary'>Live demo </a> 
            <a href="https://github.com/kumaranand2506/tic-tac-toe" target='_blank'> <h3>Github</h3></a>
            <p>It's a tic-tac-toe game built using HTML, Css and Javascript. Player can reset the game by taping on reset button</p>
            </div>
            </div>
            
            
            <div className='proimage'> 
            <div className="text-img"> 
            <img src={shoping} alt="" />
            <a href="https://shoppingstor.netlify.app/" target='_blank' className='btn btn-primary'>Live demo </a> 
            <a href="https://github.com/kumaranand2506/shoping" target='_blank'><h3>Github</h3></a>
            <p>It's a single page shoping store website built using HTML, Css and Javascript having featured and latest product section</p>
            </div>
            </div>
            
            
            
          </div>
        </article>
      </div>
    </section>
  
  )
}

export default portfolio