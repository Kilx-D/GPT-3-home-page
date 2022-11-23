import React, { useState } from 'react'
import { Article } from "../components/";
import blog1 from "../assets/blog01.png"
import blog2 from "../assets/blog02.png";
import blog3 from "../assets/blog03.png";
import blog4 from "../assets/blog04.png";
import blog5 from "../assets/blog05.png"


const Blog = () => {

    const [titleChange, setTitle] = useState(false)
    const title = titleChange ? "please dont touch me" : "New developments of GPT-3, Learn how GPT-3 is changing the future."


    return (
        <section id="blog" className="gpt3__blog section__padding">
            <div className="gpt3__blog-heading">
                <h1 className='gradient__text'>{titleChange ? "dude really?" : "A lot is happening, We are blogging about it."}</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article change={setTitle} imgUrl={titleChange ? "https://i.imgflip.com/2re1l7.png" : blog1} date="Sep 26, 2021" title={title} author="your mom" />
                </div>""
                <div className="gpt3__blog-container_groupB">
                    <Article change={setTitle} imgUrl={titleChange ? "https://i.imgflip.com/2re1l7.png" : blog2} date="Sep 26, 2021" title={title} author="your mom" />
                    <Article change={setTitle} imgUrl={titleChange ? "https://i.imgflip.com/2re1l7.png" : blog3} date="Sep 26, 2021" title={title} author="your mom" />
                    <Article change={setTitle} imgUrl={titleChange ? "https://i.imgflip.com/2re1l7.png" : blog4} date="Sep 26, 2021" title={title} author="your mom" />
                    <Article change={setTitle} imgUrl={titleChange ? "https://i.imgflip.com/2re1l7.png" : blog5} date="Sep 26, 2021" title={title} author="your mom" />
                </div>

            </div>
        </section>
    )
}

export default Blog