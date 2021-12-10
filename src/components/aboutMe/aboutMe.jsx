import React from "react";
import './aboutme.css'
import { AboutmeSection, Card, Container, ImageSection, Text1, Text2, Text3, TextSection } from "./aboutmeElements";

const Aboutme = () =>{
    return(
        <>
            <div id="aboutme">
                <AboutmeSection>
                    <Container>

                        <TextSection>
                            <Text1>Hola, I’m Kumar Shantanu!</Text1>
                            <Text2>I am a sophomore at NIT Rourkela pursuing Electrical Engineering.</Text2>
                            <Text3>I love web-development, programming and designing. Currently, I am exploring back-end development and learning DSA.</Text3>
                        </TextSection>

                        <ImageSection>
                            <Card className="card">
                                <img
                                    src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638436237/shantanu-portfolio/aboutme-image_cdhk0x.png"
                                    alt="about me"
                                />
                            </Card>
                        </ImageSection>
                        
                    </Container>
                </AboutmeSection>    
            </div>
        </>
    );
};

export default Aboutme;