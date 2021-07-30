import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './AboutGroup.css';

const AboutGroup = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div className="about-area">
                </div>
                <div>
                    <div className="about-details bg-info" style={{height: "40vh"}}>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutGroup;