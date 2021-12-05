import React from "react";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import Aboutme from "./aboutMe/aboutMe";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contacts/contact";
import './scrollbar.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Homepage = () =>{
    return(
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/home" component={Hero} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
        </Routes>
    </Router>
        <Hero/>
        <Aboutme/>
        <Skills/>
        <Projects/>
        <Contact/>
    </>
    );
}

export default Homepage;