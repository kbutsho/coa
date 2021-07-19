import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className="text-dark text-center" style={{fontSize: "15px"}}>Copyright {(new Date()).getFullYear()} || All Rights Reserved  by <span style={{color: "red", fontWeight:"bold"}}>KB UTSHO</span></p>
        </div>
    );
};

export default Footer;