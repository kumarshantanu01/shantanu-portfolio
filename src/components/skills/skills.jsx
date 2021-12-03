import {makeStyles, Typography } from "@material-ui/core";
import React from "react";
import './skills.css';
import Skillscard from "./skillsCard";
import SkillsIcon from "./skillsIcon";
import { Heading, SkillsBox, SkillsContainer, SkillsImage, SkillsLogo, Skillssection } from "./skillsElement";

const useStyles = makeStyles({
    text:{
        fontSize: '60px',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Skills = () =>{
    const classes = useStyles();
    return(
        <>
            <Skillssection>
                <Heading>
                    <Typography className={classes.text}>Skills</Typography>
                </Heading>

                <SkillsContainer>
                        <SkillsBox>
                            <SkillsLogo>
                                {SkillsIcon.map(function ncards(val){
                                    return(
                                        <Skillscard
                                            logoname ={val.logoname}
                                            logo ={val.logo}
                                        />
                                    )
                                })}
                            </SkillsLogo>
                        </SkillsBox>  
                        
                        <SkillsImage>
                            <div className='imageskills'>
                                <img src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638525890/shantanu-portfolio/logo/image-removebg-preview_30_b4gnt1.png' alt='png'></img>
                            </div>
                        </SkillsImage>
                    
                </SkillsContainer>
       
        </Skillssection>    
    </>
    )
}

export default Skills;