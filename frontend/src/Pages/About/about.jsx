import React from 'react'; //importing react from react
import AboutHeader from "../../images/H6.jpg"; //importing header image for about page
import AboutCustom from "../../images/H7.jpg"; //customing about page 
import './about.css'; //importing css for styles in about page

const About = () => { //creating a function for about
    return(
        <>
        <div id="about">
        <div className="about">
            <div className="img">
                <img src={AboutHeader} alt="" />
            </div>
            <div className="overlay">

            </div>
        </div>
        <div className="about_main container">
            <div className="content">
                <h6>
                    <span>A</span>bout Us
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, expedita.</p>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <img src={AboutCustom} alt="" />
                </div>
                <div className="col-sm-5">
                    <h6>
                        <span>
                            T
                        </span>ravel with Joy
                    </h6>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default About;
