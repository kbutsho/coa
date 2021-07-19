import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const AboutGroup = () => {
    return (
        <div>
            <div style={{ height: "80vh" }}>
                <NavBar></NavBar>
                <h1 className="text-center py-5">About Group Page</h1>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutGroup;