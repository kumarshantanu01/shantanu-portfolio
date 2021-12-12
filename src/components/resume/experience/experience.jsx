import React from "react";
import './experience.css';
import { Heading, Timelinebox, Timelinedot, Timelinesection, Timelinesectionbottom, Timelinesectiontop, Timelinedate, Timelinecontent, Subheading, /*Text, */  Subheading2 } from "./experienceElements";

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

                        {/* <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>2021</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Title</Subheading>
                                <Subheading2></Subheading2>
                                <Text>WRITING ABOUT MY EXPERIENCE</Text>
                            </Timelinecontent>
                        </div> */}

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>Aug 2021 - present</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Coordinator</Subheading>
                                <Subheading2>WEBWIZ</Subheading2>
                                {/* <Text>WRITING ABOUT MY EXPERIENCE</Text> */}
                            </Timelinecontent>
                        </div>

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>Sep 2021 - present</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Student Ambassador</Subheading>
                                <Subheading2>AngelHack</Subheading2>
                                {/* <Text>WRITING ABOUT MY EXPERIENCE</Text> */}
                            </Timelinecontent>
                        </div>

                        <div class="timeline-item">
                        <Timelinedot></Timelinedot>
                        <Timelinedate>April 2021 - Sep 2021</Timelinedate>
                            <Timelinecontent>
                                <Subheading>Management Lead</Subheading>
                                <Subheading2>HACKODISHA</Subheading2>
                                {/* <Text>WRITING ABOUT MY EXPERIENCE</Text> */}
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