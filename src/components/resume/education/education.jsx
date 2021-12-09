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
                        <div className="image">
                        <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1639046271/shantanu-portfolio/resume/nit_rourkela_pfbwuw.png" alt="nitr"></img>
                        </div>
                    </Imagesection>

                    <TextSection>
                        <InstituteName>National Institute of Technology, Rourkela</InstituteName>
                        <Degree>B.tech</Degree>
                        <Branch>Electrical Engineering</Branch>
                        <Location>Rourkela, Odisha, India</Location>
                        <Year>2020 - 2024</Year>
                    </TextSection>

                </CardEducation>

                <CardEducation>

                    <Imagesection>
                        <div className="image">
                        <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1639046271/shantanu-portfolio/resume/km_academy_xzengb.png" alt="nitr"></img>
                        </div>
                    </Imagesection>

                    <TextSection>
                        <InstituteName>K.M.Academy, Asarganj</InstituteName>
                        <Degree>Higher Secondary</Degree>
                        <Branch>Science</Branch>
                        <Location>Munger, Bihar, India</Location>
                        <Year>2018 - 2020</Year>
                    </TextSection>

                </CardEducation>

                <CardEducation>

                    <Imagesection>
                        <div className="image">
                        <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1639046271/shantanu-portfolio/resume/nda_munger_yojxfq.png" alt="nitr"></img>
                        </div>
                    </Imagesection>

                    <TextSection>
                        <InstituteName>Notre Dame Academy, Munger</InstituteName>
                        <Degree>Matriculation</Degree>
                        {/* <Branch></Branch> */}
                        <Location>Munger, Bihar, India</Location>
                        <Year>2009 - 2018</Year>
                    </TextSection>

                </CardEducation>
            </Educationsectionbottom>
          </Educationsection>
        </>
    )
}

export default Education;