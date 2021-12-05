import React from "react";
import './aboutme.css'

const Aboutme = () =>{
    return(
        <>
            <div id="aboutme" className="aboutme">
                <div className="container">
                    <div className="text" style={{ color: '#f2f2f2' }}>
                        <h2>Hola, I’m Kumar Shantanu!</h2>
                        <h1>I am a sophomore at NIT Rourkela pursuing Electrical Engineering.</h1>
                        <h3>I love web-development, programming and designing. Currently, I am exploring back-end development and learning DSA.</h3>
                    </div>
                    <div className="image">
                       <div className="card">
                        <img
                                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638436237/shantanu-portfolio/aboutme-image_cdhk0x.png"
                                alt="about me"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutme;