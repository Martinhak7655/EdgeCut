import React from 'react'
import "./Components7.css"
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

const Components7 = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-flex'>
                    <div className='footer-column'>
                        <BsFillTelephoneFill />
                        <b>Call: +012345678990</b>
                    </div>
                    <div className='footer-column'>
                        <MdEmail />
                        <b>Emil: main@domain.com</b>
                    </div>
                    <div className='footer-column'>
                        <HiLocationMarker />
                        <b>Location</b>
                    </div>
                </div>
                <div className='footer-flex'>
                    <div className='footer-column'>
                      <h2>Quick Links</h2>
                      <div className='footer-around'>
                       <div className='footer-column2'>
                         <b>Home</b>
                         <b>Furniture</b>
                         <b>Contact Us</b>
                       </div>
                       <div className='footer-column2'>
                         <b>About Us</b>
                         <b>Blog</b>
                       </div>
                      </div>
                    </div>
                    <div className='footer-column'>
                     <h2>Instagram Feeds</h2>
                     <div className='footer-around2'>
                       <div className='footer-div1'></div>
                       <div className='footer-div2'></div>
                       <div className='footer-div3'></div>
                     </div>
                     <div className='footer-around2'>
                       <div className='footer-div4'></div>
                       <div className='footer-div5'></div>
                       <div className='footer-div6'></div>
                     </div>
                    </div>
                    <div className='footer-column'>
                      <h2>SIGN UP TO OUR NEWSLETTER</h2>
                      <input type='text' placeholder='Enter Your Email' />
                      <button className='footer-but'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Components7