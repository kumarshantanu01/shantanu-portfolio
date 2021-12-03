import {makeStyles, Typography } from "@material-ui/core";
import React from "react";
import './skills.css';
import Skillscard from "./skillsCard";
import SkillsIcon from "./skillsIcon";

const useStyles = makeStyles({
    heading:{
        fontSize: '60px',
    }
})

const Skills = () =>{
    const classes = useStyles();
    return(
        <>
            <div className='skillssection'>
                <div className="heading">
                    <Typography className={classes.heading}>Skills</Typography>
                </div>

                <div className='containerskills'>
                        <div className='skillslogo'>
                            <div className='skillsbox'>
                                {SkillsIcon.map(function ncards(val){
                                    return(
                                        <Skillscard
                                            logoname ={val.logoname}
                                            logo ={val.logo}
                                        />
                                    )
                                })}
                            </div>  
                        </div>
                        
                        <div className='imageskills'>
                            <img src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638525890/shantanu-portfolio/logo/image-removebg-preview_30_b4gnt1.png' alt='png'></img>
                        </div>
                
                    
                </div>
       
        </div>    
    </>
    )
}

export default Skills;