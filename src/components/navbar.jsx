import React, { useState } from 'react'

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";


//a list of links to use in the site navbar
//this will be used in different places depending on the screen size
const Menu = () => (
    <>
        <p><a target="_blank" href="https://www.youtube.com/watch?v=Kjr7US2Z9aY">Home</a></p>
        <p><a href="#wgpt3">What is GPT3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)


const Navbar = (props) => {
    //checks to see if the toggle menu is pressed or not
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <nav className='gpt3__navbar'>



            {/*shows the main logo on the navbar */}
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    {/*shows the site logo on the navbar */}
                    <img src={logo} alt="logo" />
                </div>





                <div className='gpt3__navbar-links_container'>

                    {/*the list of links from earlier */}
                    <Menu />
                </div>
            </div>





            {/*the sign in buttons */}
            <div className='gpt3__navbar-sign'>
                <p>Sign In</p>
                <button type="button" onClick={() => props.transform(x => !x)}>Sign Up</button>
            </div>







            {/*
            When the screen size is smaller
            it will show a little menu toggle button
            when clicked, it will show a little menu of links

    */}
            <div className='gpt3__navbar-menu'>

                {/*checks to see if the user toggled the menu or not */}
                {toggleMenu ?
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> :
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }









                {/* when the  menu is toggled
                it will show a little menu, the scale-up-center class adds an animation
                to it
            */}
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>

                            <Menu />

                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>




        </nav>
    )
}

export default Navbar