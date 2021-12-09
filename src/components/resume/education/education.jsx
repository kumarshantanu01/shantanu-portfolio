import React from "react";
import { Branch, CardEducation, Degree, Educationsection, Educationsectionbottom, Educationsectiontop, Heading, Imagesection, InstituteName, Location, TextSection, Year } from "./educationElements";

const Education = () => {
    return(
        <>
          <Educationsection>     

            <Educationsectiontop>
              <Heading>My Education</Heading>
            </Educationsectiontop>

            <Educationsectionbottom>
                <CardEducation>

                    <Imagesection>

                    </Imagesection>

                    <TextSection>
                        <InstituteName>National Institute of Technology, Rourkela</InstituteName>
                        <Degree>B.tech</Degree>
                        <Branch>Electrical Engineering</Branch>
                        <Location>Rourkela, India</Location>
                        <Year>2020 - 2024</Year>
                    </TextSection>

                </CardEducation>

                <CardEducation>

                    <Imagesection>

                    </Imagesection>

                    <TextSection>
                        <InstituteName>National Institute of Technology, Rourkela</InstituteName>
                        <Degree>B.tech</Degree>
                        <Branch>Electrical Engineering</Branch>
                        <Location>Rourkela, India</Location>
                        <Year>2020 - 2024</Year>
                    </TextSection>

                </CardEducation>

                <CardEducation>

                    <Imagesection>

                    </Imagesection>

                    <TextSection>
                        <InstituteName>National Institute of Technology, Rourkela</InstituteName>
                        <Degree>B.tech</Degree>
                        <Branch>Electrical Engineering</Branch>
                        <Location>Rourkela, India</Location>
                        <Year>2020 - 2024</Year>
                    </TextSection>

                </CardEducation>
            </Educationsectionbottom>
          </Educationsection>
        </>
    )
}

export default Education;