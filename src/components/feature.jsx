import React from 'react'


const Feature = ({ title, text, compact }) => {
    return (
        <div className={`gpt3__features-container__feature ${compact ? "feature-compact" : ""}`}>
            <div className="gpt3__features-container__feature-title">
                <div></div>
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature