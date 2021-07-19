import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const CodeRun = () => {
    return (
        <div>
        <div style={{ height: "85vh" }}>
            <NavBar></NavBar>
            <h1 className="text-center py-5">Code Run Page</h1>

        </div>
        <Footer></Footer>
    </div>
    );
};

export default CodeRun;