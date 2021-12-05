
import React from "react";

import { Projectssection, Text } from "./projectElements";
import ProjectCard from "./projectsSection";

const Projects = () => {
    return(
        <>
            <Projectssection id="projects">
                <Text>PROJECTS</Text>
                <ProjectCard/>
            </Projectssection>
        </>
    )
}

export default Projects;