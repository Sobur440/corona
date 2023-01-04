import './Footer.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png' 

const Footer = () => {



    return(
        <div className="footer-container">
           <div className="first-footer">
            <div className="footer-name-container">
              <div className="footer-name-head footer-head">COVID 19</div>
              <div className="foter-name-body footer-body">
                Lorem ipsum dolor sit amet consectetur, <br /> 
                adipisicing elit. Nesciunt, omnis rerum.
              </div>
            </div>
            <div className="footer-phone-number">
                <div className="contact footer-head">Contact</div>
                <div className='contact-number footer-body'>+2348160592518</div>
            </div>
            <div className="footer-email">
                <div className="email footer-head">Email:</div>
               <div className="email-body footer-body"> Covid-19@gmail.com</div>
            </div>
            <div className="footer-location">
                <div className="location footer-head">Location:</div>
                <div className="location-body footer-body">Adeta, Ilorin Kwara <br />
                State</div>
            </div>
           </div>
           <div className="line-through"></div>
           <div className="second-footer">
            <div className="right">2022, All Rights Reserved</div>
            <div className="socials">
                <Link to="#" className="facebook">
                    <img src={facebook} alt="facebook-icon" className='fb-icon social-icon' />
                </Link>
                <Link to="#" className="twitter">
                    <img src={twitter} alt="twitter-icon" className='twitter-icon social-icon' />
                </Link>
                <Link to="#" className="insta">
                    <img src={insta} alt="instagram-icon" className="insta-icon social-icon" />
                </Link>
            </div>
            <div className="conditions">
                <Link className='terms-and-conditions'>terms and conditions</Link>
                <Link className='policy'>privacy policy</Link>
            </div>
           </div>
           <div className="developer">
            <div className="by">Developed by Sobur Abubakar <span className='halal'>(D Halal Uchiha)</span></div>
            <div className="pc-container"><a href="https://twitter.com/Wave440" target="_blank" className='pc'>buy me a pc</a></div>
           </div>

        </div>
    )
}
export default Footer
