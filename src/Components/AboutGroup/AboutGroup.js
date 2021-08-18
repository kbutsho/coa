import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './AboutGroup.css';
import faculty from '../Images/sir.png';
import oishi from "../Images/Oishi_pic.jpg";
import imrul from '../Images/Emon_Pic.jpg';
import mum from '../Images/Muntasir_Pic.jpg';
import nirob from '../Images/Nirob_Pic.jpg';

const AboutGroup = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div>
                    <h1 className="my-5 text-center text-white">About Group</h1>
                    <h3 className="my-3 text-center text-white">INSTRUCTOR</h3>
                    <div className="container">
                        <div className="w-25" style={{ margin: "0 auto" }}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={faculty} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5>MD. NAZMUL HOSSAIN</h5>
                                    <span>Lecturer,Computer Science</span>
                                    <span>American International University-Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center text-white my-5">
                            <h1>PARTICIPENT</h1>
                            <h5>Group number-06</h5>
                            <h5>Vehicle placing management system</h5>
                        </div>

                        <div className="row my-5">
                            <div className="col-md-6">
                                <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
                                    <img src={oishi} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5>AFIFA TAZREMIN OISHI</h5>
                                        <span>ID : 19-40028-1</span> <br />
                                        <span>American International University-Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
                                    <img src={imrul} className="card-img-top w-100" alt="" />
                                    <div className="card-body">
                                        <h5>MD EMRUL HASAN EMON</h5>
                                        <span> ID : 19-40357-1</span> <br />
                                        <span>American International University-Bangladesh</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
                                    <img src={mum} className="card-img-top" alt="" />
                                    <div className="card-body">


                                        <h5> SM MUNTASIR RAHMAN</h5>
                                        <span> ID : 18-39197-1</span> <br />
                                        <span>American International University-Bangladesh</span>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card" style={{ width: "18rem", margin: "0 auto", minHeight: "350px" }}>
                                    <img src={nirob} className="card-img-top w-100" style={{ height: "290px" }} alt="" />
                                    <div className="card-body">
                                        <h5> RAIYAN RAHMAN KHAN</h5>
                                        <span>ID : 17-35963-1</span> <br />
                                        <span>American International University-Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutGroup;