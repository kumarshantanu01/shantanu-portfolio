import React, {useState} from 'react';
import './navbar.css';
// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import {GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';

const Navbar = () =>{

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <>
            <nav className="main-nav">
                <div className='logo'>
                    <h2>
                    <Link smooth to="#home">
                        <span>K</span>umar
                        <span>S</span>hantanu
                    </Link>
                    </h2>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                           <Link smooth to="#home"> Home</Link>
                        </li>
                        <li>
                            <Link smooth to="#aboutme"> About Me</Link>
                        </li>
                        <li>
                            <Link smooth to="#skills"> Skills</Link>
                        </li>
                        <li>
                            <Link smooth to="#resume"> Resume</Link>
                        </li>
                        <li>
                            <Link smooth to="#projects"> Projects</Link>
                        </li>
                        <li>
                            <Link smooth to="#contact"> Contact</Link>
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