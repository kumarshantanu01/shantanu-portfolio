import React from "react";
import Awards from "./awards/awards";
import Education from "./education/education";
import Experience from "./experience/experience";

const Resume = () => {
    return(
        <>
            <div id='resume'>
                <Education/>
                <Experience/>
                <Awards/>
            </div>
        </>
    )
}

export default Resume;