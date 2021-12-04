import React from "react";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import Aboutme from "./aboutMe/aboutMe";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import './scrollbar.css'

const Homepage = () =>{
    return(
    <>
        <Navbar/>
        <Hero/>
        <Aboutme/>
        <Skills/>
        <Projects/>
    </>
    );
}

export default Homepage;