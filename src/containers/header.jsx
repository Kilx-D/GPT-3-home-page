import React, { useState } from 'react'
import people from "../assets/people.png";
import ai from "../assets/ai.png";




const Header = (props) => {
    const [clicked, setClick] = useState(false);
    const [email, setEmail] = useState("")
    const [plastic, setPlastic] = useState(false)


    const banner = <img src={
        clicked ?
            "https://media.tenor.com/msUe1bigvaEAAAAS/evangelion-shinji-ikari.gif"
            : ai
    } alt="ai" />


    const plasticVideo = <iframe width="500" height="500" src="https://www.youtube.com/embed/9Gj47G2e1Jc" title="Mariya Takeuchi Plastic Love  竹内 まりや" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>

    //<iframe width="1640" height="885" src="https://www.youtube.com/embed/9Gj47G2e1Jc title="Bad Apple!! - Full Version w/video [Lyrics in Romaji, Translation in English]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // return clicked ?
    //     "https://media.tenor.com/msUe1bigvaEAAAAS/evangelion-shinji-ikari.gif" :
    //     ai



    function handleEmailChange(e) {
        setEmail(e.target.value)
        if (e.target.value == "hit it") {
            setPlastic(true)
        }
    }

    return (

        <header className="gpt3__header section__padding" id="home">

            {/* the text content of the header */}
            <div className="gpt3__header-content">


                <h1 className="gradient__text">
                    {clicked ?
                        "i have no life" :
                        "Let's Build Something amazing with GPT-3 OpenAI"}
                </h1>

                <p>{clicked ?
                    "and you don't either" :
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores natus eius similique numquam totam quae eveniet asperiores quam reiciendis explicabo!"


                }</p>




                <div className='gpt3__header-content__input'>
                    <input type="email" value={email} onChange={handleEmailChange} placeholder={clicked ? "i wonder what happens if you type \"hit it\" " : "Your email address"} name=" " id="" />
                    <button type="button" onClick={() => setClick(x => !x)}>{clicked ? "please leave" : "Get Started"}</button>
                </div>



                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>{clicked ? "you shouldn't be here" : "1,600 poeple requested access a visit in last 24 hours" + props.transform}</p>
                </div>





            </div>
            <div className="gpt3__header-image">
                {plastic ? plasticVideo : banner}
            </div>
        </header>
    )
}

export default Header

//