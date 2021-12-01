import React, {useState} from 'react';
import './navbar.css';
// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import {GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from 'react-router-dom';

const Navbar = () =>{

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <>
            <nav className="main-nav">
                <div className='logo'>
                    <h2>
                        <span>K</span>umar
                        <span>S</span>hantanu
                    </h2>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                           <a href="/hero"> Home</a>
                        </li>
                        <li>
                        <a href="aa"> About Me</a>
                        </li>
                        <li>
                        <a href="aa"> Skills</a>
                        </li>
                        <li>
                        <a href="aa"> Projects</a>
                        </li>
                        <li>
                        <a href="aa"> Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="social-media">

                    <div className="hamburger-menu">
                            <div onClick = { () => setShowMediaIcons(!showMediaIcons) } >
                                <GiHamburgerMenu color='#f6f6f6'/>
                            </div>
                    </div>

                </div>
            </nav>
        </>
    )
};

export default Navbar;