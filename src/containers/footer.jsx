import React from 'react'
import gpt3Logo from "../assets/logo.svg"


const Footer = (props) => {
    return (
        <section className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to to step into the future before others?</h1>

            </div>

            <div className='gpt3__footer-btn' onClick={() => props.transform(x => !x)}>
                <a href="#badApple">Request Early Access</a>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links__logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>308 Negra Arroyo Lane Albuquerque New Mexico US, All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links__div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counter</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links__div">
                    <h4>Get in Touch</h4>
                    <p>308 Negra Arroyo Lane Albuquerque NM US</p>
                    <p>(914) 737-9938</p>
                    <p>corndog.io</p>

                </div>
                <div className="gpt3__footer-links__div">
                    <h4>Company</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>

                </div>
            </div>


            <div className="gpt3__footer-copyright">
                <p>&copy; 2022 GPT-3. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer