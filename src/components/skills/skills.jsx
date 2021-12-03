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
        color: '#C6FF00',
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
                                <img src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638553790/shantanu-portfolio/image-removebg-preview_30_1_kjqnt0.svg' alt='png'></img>
                            </div>
                        </SkillsImage>
                    
                </SkillsContainer>
       
        </Skillssection>    
    </>
    )
}

export default Skills;