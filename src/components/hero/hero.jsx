import React from "react";
import './hero.css';
import { Button, Link } from "@material-ui/core";
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
    },

    socialmedia:{
        '&:hover': {
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
                    <div className="socialmediaicons" >
                        <Link href='https://github.com/kumarshantanu01' target="_blank" color='inherit' className={classes.socialmedia}>
                            <GitHub  style={{ fontSize: 28 }}/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/kumar-shantanu01/' target="_blank" color='inherit' className={classes.socialmedia}>
                            <LinkedIn style={{ fontSize: 30 }}/>
                        </Link>
                        <Link href='https://twitter.com/kumarshantanu01' target="_blank" color='inherit' className={classes.socialmedia}>
                            <Twitter style={{ fontSize: 30 }}/>
                        </Link>
                        <Link href='https://www.instagram.com/kumar_shantanu_01/' target="_blank" color='inherit' className={classes.socialmedia}>
                            <Instagram style={{ fontSize: 30 }}/>
                        </Link>
                        <Link href='https://www.facebook.com/shantanu.kumar.96930013' target="_blank" color='inherit' className={classes.socialmedia}>
                            <Facebook style={{ fontSize: 30 }}/>
                        </Link>
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