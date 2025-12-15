import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti odio corporis repellat unde delectus fuga inventore voluptatem alias distinctio, eligendi nulla aliquid asperiores veniam non similique? Rem voluptate delectus reprehenderit?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>Get in touch</h2>
                <ul>
                    <li>123 Street, New York, USA</li>
                    <li>+012 345 67890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-bottom-text">Copyright &copy; Tomato 2024. All Rights Reserved</p>
      
    </div>
  )
}

export default Footer

