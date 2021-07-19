import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="mb-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
                <div className="container-fluid container">
                    <h3 className="text-white customFont" style={{ letterSpacing: '2px' }}>
                        COA Project
                    </h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav fw-bold text-uppercase ms-auto">
                            <Link className="nav-link px-3 text-white" to="/">Home</Link>
                            <Link className="nav-link px-3 text-white" to="/flowChart">Flow Chart</Link>
                            <Link className="nav-link px-3 text-white" to="/about">About Us</Link>
                            <Link className="nav-link px-3 text-white" to="/assCode">Assembly Code</Link>
                            <Link className="nav-link px-3 text-white" to="/codeSection">Code Section</Link>
                            <Link className="nav-link px-3 text-white" to="/codeRun">Code Run</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;