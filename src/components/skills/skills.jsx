import { Grid } from "@material-ui/core";
import React from "react";
import './skills.css'
import Skillscard from "./skillsCard";
import SkillsIcon from "./skillsIcon";

const Skills = () =>{
    return(
        <>
            <div className='skillssection'>
                <div className="heading">
                    <h2>skills</h2>
                </div>

                <div className='containerskills'>
                    <div className='skillslogo'>
                        <div className='skillsbox'>
                        <Grid>
                            {SkillsIcon.map(function ncards(val){
                                return(
                                    <Skillscard
                                        logoname ={val.logoname}
                                        logo ={val.logo}
                                    />
                                )
                            })}
                        </Grid>
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