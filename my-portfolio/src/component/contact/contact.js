import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';



const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ubg202a', 'template_wzs44ha', form.current, '8KaUXtqEGGH18b51D')
      e.target.reset()
  };
    
  return (
    <section id='contact'>
      <h2>Get in Touch</h2>
      <div className="container contact_container">

        
        <form>
        <input type="text" name='Name' placeholder='Your Name' required/><br />
        <input type="email" name='email' placeholder='Your Email' required/><br />
        <textarea name="message"  rows="10" placeholder='Your Message' required></textarea><br />
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact