import React from "react";
import './skills.css';
import { Cardlogos, Text } from "./skillsElement";

const Skillscard = (props) =>{
    return(
        <>
            <Cardlogos>
                <div className="icon">
                    <img src={props.logo} alt='logo'/>
                </div>
                <div className="logoname">
                    <Text>{props.logoname}</Text>
                </div>
            </Cardlogos>
        </>
    )
}

export default Skillscard;