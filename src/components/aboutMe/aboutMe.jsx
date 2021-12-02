import React from "react";
import './aboutme.css'

const Aboutme = () =>{
    return(
        <>
            <div className="aboutme">
                <div className="container">
                    <div className="text" style={{ color: '#fff' }}>
                        <h2>Hola, I’m Kumar Shantanu!</h2>
                        <h1>I am a sophomore at NIT Rourkela pursuing Electrical Engineering.</h1>
                        <h3>I love web-development, programming and designing. Currently, I am exploring back-end development and learning DSA.</h3>
                    </div>
                    <div className="image">
                       <div className="card">
                        <img
                                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638432819/shantanu-portfolio/image-aboutme_fgpvhb.png"
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