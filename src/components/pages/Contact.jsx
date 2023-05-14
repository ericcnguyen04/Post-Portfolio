// import '../../css/ContactStyle.css'

export default function Contact() {
    return(
        <div className='contactContainer'>
            <div>
                <div>
                        <h1>contact us</h1>
                </div>
	        <div>
			    <h4>We'd love to hear from you!</h4>
	        </div>
            <div>
                    <div>
                        <div>
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div>
                        <div style="float:right;">
                            <input type="text" required />
                            <label>Phone Number</label> 
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div>
                        <div>Send Message</div>
                    </div>
            </div>
            </div>
        </div>
    )
}