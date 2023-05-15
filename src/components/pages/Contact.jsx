// import '../../css/ContactStyle.css'
import '../../App.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_saufldv', 'template_famkt64', form.current, 'BHdZkYWw7238i5vxX')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };

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
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <div className="styled-input wide">
                                <input type="text" name="from_name" required />
                                <label>Name</label> 
                            </div>
                        </div>
                        <div>
                            <div className="styled-input">
                                <input type="text" name="form_email" required />
                                <label>Email</label> 
                            </div>
                        </div>
                        <div>
                            <div className="styled-input" name="phone_number" id="phoneNumber">
                                <input type="text" />
                                <label>Phone Number</label> 
                            </div>
                        </div>
                        <div>
                            <div className="styled-input wide" name="message">
                                <textarea required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div>
                            <div className='submit-btn' type="submit" value="Send" onClick={sendEmail}>Send Message</div>
                        </div>
                    </form>

                    <div>
                        <a href="https://github.com/ericcnguyen04" target="_blank"><img src="/content/github.png" alt="linkedIn logo"></img></a>
                        <a href="https://www.linkedin.com/in/eric-nguyen-3970b0229/" target="_blank"><img src="/content/linkedin.png" alt="linkedIn logo"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}