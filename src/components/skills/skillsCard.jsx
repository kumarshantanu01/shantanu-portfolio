import React from "react";

const Skillscard = (props) =>{
    return(
        <>
        <div className="card">
            <div className="logoname">
                <h2>{props.logoname}</h2>
            </div>
            <div className="icon">
                <img src={props.logo} alt='logo'/>
            </div>
        </div>
        </>
    )
}

export default Skillscard;