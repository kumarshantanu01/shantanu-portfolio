import React from "react";
import './experience.css';
import { Heading, Timelinebox, Timelinedot, Timelinesection, Timelinesectionbottom, Timelinesectiontop, Timelinedate, Timelinecontent, Subheading, Text } from "./experienceElements";

const Experience = () => {
    return(
        <>
        <Timelinesection>

            <Timelinesectiontop>
                <Heading>Experience</Heading>
            </Timelinesectiontop>

            <Timelinesectionbottom>
                <Timelinebox>
                    <div class='timeline-items'>

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>2020</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Title</Subheading>
                                <Text>WRITING ABOUT MY EXPERIENCE</Text>
                            </Timelinecontent>
                        </div>

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>2020</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Title</Subheading>
                                <Text>WRITING ABOUT MY EXPERIENCE</Text>
                            </Timelinecontent>
                        </div>

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>2020</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Title</Subheading>
                                <Text>WRITING ABOUT MY EXPERIENCE</Text>
                            </Timelinecontent>
                        </div>

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>2020</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Title</Subheading>
                                <Text>WRITING ABOUT MY EXPERIENCE</Text>
                            </Timelinecontent>
                        </div>

                    </div>
                </Timelinebox>
            </Timelinesectionbottom>

        </Timelinesection>
        </>
    )
}

export default Experience;