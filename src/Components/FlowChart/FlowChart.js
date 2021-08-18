import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import chart from '../Images/COA Diagram2.png';

const FlowChart = () => {
    return (
        <div>
            <div >
                <NavBar></NavBar>
                <div style={{margin: "80px auto", width: "80%"}}>
                    <img src={chart} alt="" style={{ width: "100%", borderRadius: "15px"}} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FlowChart;