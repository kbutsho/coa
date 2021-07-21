import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark py-1 d-flex justify-content-center align-items-center">
            <p className="text-white mt-2" style={{ fontSize: "16px" }}>Copyright © {(new Date()).getFullYear()} || All Rights Reserved</p>
        </div>
    );
};

export default Footer;