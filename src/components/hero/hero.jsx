import React from "react";
import './hero.css';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
    button:{
        backgroundColor: "#C6FF00",
        padding: "1rem",
        fontSize: "12px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: '#091C34',
            color: '#C6FF00',
        },
    }
});

const Hero = () =>{
    const classes = useStyles();
    return(
        <>
        <div className='herosection'>
            <div className='leftsection'>
                <div className="textcontainer">
                    <h2>Hello,</h2>
                    <h1>I am <span>Kumar Shantanu</span></h1>
                    <h2>I am a web developer</h2>
                    <Button className={classes.button}>Download Resume</Button>
                </div>
                <div className="socialmediacontainer">
                    <div className="socialmediaicons">
                        <GitHub style={{ fontSize: 28 }}/>
                        <LinkedIn style={{ fontSize: 30 }}/>
                        <Twitter style={{ fontSize: 30 }}/>
                        <Instagram style={{ fontSize: 30 }}/>
                        <Facebook style={{ fontSize: 30 }}/>
                    </div>
                </div>
            </div>
            <div className='rightsection'>
                <div className="imagesection">
                    <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638359763/shantanu-portfolio/Kumar_Shantanu_y3ktwt.jpg" alt='shantanu pic'/>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Hero;