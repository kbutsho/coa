import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div>
        <div style={{ height: "80vh" }}>
            <NavBar></NavBar>
            <h1 className="text-center py-5">Home Page</h1>

        </div>
        <Footer></Footer>
    </div>
    );
};

export default Home;