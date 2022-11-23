import React from 'react'


const Cta = (props) => {
    return (
        <section className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access</p>
                <h3>{props.title ? "You're really immature" : "Register today and start exploring the endless possibilities"}</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button onClick={() => props.setGame(x => !x)} type="button">Get Started</button>
            </div>

        </section>
    )
}

export default Cta