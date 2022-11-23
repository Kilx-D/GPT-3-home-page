import React from 'react'

import pImage from "../assets/possibility.png";

const Possibility = (props) => {
    return !props.game ? (
        <section id="possibility" className="gpt3__possibility section__padding">
            <div className="gpt3__possibility-image">
                <img src={pImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolor eos autem quaerat, illum nemo voluptatibus in vel laudantium doloremque sapiente, omnis esse aliquam dolores officiis nam dolorem consequatur ratione? Nostrum sint id harum vel expedita ratione voluptas, autem porro?</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </section>
    ) :
        <iframe src="https://elgoog.im/breakout/" frameborder="0"></iframe>


}

export default Possibility