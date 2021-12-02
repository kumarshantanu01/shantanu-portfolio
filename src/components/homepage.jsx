import React from "react";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import Aboutme from "./aboutMe/aboutMe";

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