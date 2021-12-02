import React from "react";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import Aboutme from "./aboutMe/aboutMe";
import './scrollbar.css'

const Homepage = () =>{
    return(
    <>
        <Navbar/>
        <Hero/>
        <Aboutme/>
    </>
    );
}

export default Homepage;