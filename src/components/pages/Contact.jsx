// import '../../css/ContactStyle.css'
import '../../App.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    return(
        <div className='contactContainer'>
            <div>
                <div>
                    <h1 className="contacth1">Contact me!</h1>
                </div>
                <div>
                    <h4 className='sub'>I'd love to hear from you!</h4>
                </div>
            
                <div className='input-container'>
                    <div>
                        <div className="styled-input wide">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div>
                        <div className="styled-input">
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div>
                        <div className="styled-input" id="phoneNumber">
                            <input type="text" />
                            <label>Phone Number</label> 
                        </div>
                    </div>
                    <div>
                        <div className="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div>
                        <div className='submit-btn'>Send Message</div>
                    </div>

                    <div>
                        <a href="https://github.com/ericcnguyen04" target="_blank"><img src="/content/github.png"></img></a>
                        <a href="https://www.linkedin.com/in/eric-nguyen-3970b0229/" target="_blank"><img src="/content/linkedin.png"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}