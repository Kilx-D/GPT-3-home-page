import React from 'react'
import Feature from "../components/feature";

const featuresData = [
    {
        title: "Improving end distrusts instantly",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur doloremque debitis atque pariatur. Voluptas animi tempora deleniti odit et.'
    },
    {
        title: "Become the tended active",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at numquam officia minima pariatur libero assumenda dignissimos, consequuntur repellat reprehenderit."
    },
    {
        title: "Message or am nothing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at numquam officia minima pariatur libero assumenda dignissimos, consequuntur repellat reprehenderit."
    },
    {
        title: "Really boy law county",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at numquam officia minima pariatur libero assumenda dignissimos, consequuntur repellat reprehenderit."

    }
]

const featuresList = featuresData.map(({ title, text }, index) => <Feature key={title + index} title={title} text={text} />)

const Features = () => {
    return (
        <section id="features" className="gpt3__features section__padding">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It.Step into the Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresList}
            </div>
        </section>
    )
}

export default Features