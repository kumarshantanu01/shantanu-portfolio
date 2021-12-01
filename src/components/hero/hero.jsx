import React from "react";
import './hero.css';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
    button:{
        backgroundColor: "#1AB394",
        padding: "1rem",
    }
});

const Hero = () =>{
    const classes = useStyles();
    return(
        <>
        <div className='herosection'>
            <div className='leftsection'>
                <div className="text-container">
                    <h2>Hello</h2>
                    <h1>I am Kumar Shantanu</h1>
                    <h2>I am a web developer</h2>
                    <Button className={classes.button}>Download Resume</Button>
                </div>
                <div className="social-mediacontainer">
                    <GitHub/>
                    <LinkedIn/>
                    <Twitter/>
                    <Instagram/>
                    <Facebook/>
                </div>
            </div>
            <div className='rightsection'>
                <div className="imagesection">
                    <img src="https://res.cloudinary.com/webwiznitr/image/upload/v1628944049/webwiz-portfolio/team-images/team-webwiz/kumar%20shantanu.jpg" alt='shantanu pic'/>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Hero;