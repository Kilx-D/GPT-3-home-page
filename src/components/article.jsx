import React from 'react'


const Article = ({ change, imgUrl, date, title, author }) => {
    return (
        <article className='gpt3__blog-container__article'>
            <div className="gpt3__blog-container__article-image">
                <img onClick={() => change(x => !x)} src={imgUrl} alt="blog image" />
            </div>
            <div className="gpt3__blog-container__article-content">
                <div>
                    <p>{date}</p>
                    <h3 onClick={() => change(x => !x)}>{title}</h3>
                </div>
                <p onClick={() => change(x => !x)}>Read Full Article</p>
            </div>

        </article>
    )
}

export default Article