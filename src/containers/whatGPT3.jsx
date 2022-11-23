import React from 'react'
import Feature from "../components/feature";

const WhatGPT3 = () => {
    return (
        <section className='gpt3__whatgpt3 section__margin' id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique. Earum iusto non a nobis ipsa similique beatae magnam iste." />
            </div>

            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>

                <p><a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Explore the Library</a></p>
            </div>

            <div className="gpt3__whatgpt3-container">
                <Feature compact={true} title="Chatbots" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet veniam. Rem, distinctio ab?" />
                <Feature compact={true} title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quae nemo sunt rerum maiores itaque?" />
                <Feature compact={true} title="Education" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic quae dignissimos tempora odit non?" />
            </div>
        </section>
    )
}

export default WhatGPT3