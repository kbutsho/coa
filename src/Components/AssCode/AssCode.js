import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const AssCode = () => {
    return (
        <div>
            <div style={{ height: "85vh" }}>
                <NavBar></NavBar>
                <h1 className="text-center py-5">Assembly code Page</h1>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AssCode;