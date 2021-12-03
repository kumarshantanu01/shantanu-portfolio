
import React from "react";
import './skills.css';

const Skillscard = (props) =>{
    return(
        <>
    
            <div className="card">
                <div className="icon">
                    <img src={props.logo} alt='logo'/>
                </div>
                <div className="logoname">
                <h2>{props.logoname}</h2>
                </div>
            </div>
        
        </>
    )
}

export default Skillscard;