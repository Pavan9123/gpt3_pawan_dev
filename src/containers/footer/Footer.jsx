import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className='gpt3__footer' id='footer'>
      <div className='gpt3__footer-sectionA'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-sectionB'>
        <div className='gpt3__footer-logo'>
          <img src={logo} alt="logo" />
          <span>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
        </div>
        <div>
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div>
          <h3>Get in touch</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  )
}

export default Footer