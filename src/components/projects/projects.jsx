
import React from "react";

import { Projectssection, Text } from "./projectElements";
import ProjectCard from "./projectsSection";

const Projects = () => {
    return(
        <>
            <Projectssection>
                <Text>PROJECTS</Text>
                <ProjectCard/>
            </Projectssection>
        </>
    )
}

export default Projects;