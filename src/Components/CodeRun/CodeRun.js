import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Carousel from 'react-bootstrap/Carousel';

import pic1 from '../Images/code-run/1ST.PNG';
import pic2 from '../Images/code-run/2ND.PNG';
import pic3 from '../Images/code-run/3RD.PNG';
import pic4 from '../Images/code-run/4TH.PNG';
import pic5 from '../Images/code-run/5TH.PNG';
import pic6 from '../Images/code-run/6TH.PNG';
import pic7 from '../Images/code-run/7TH.PNG';
import pic8 from '../Images/code-run/8TH.PNG';
import pic9 from '../Images/code-run/9TH.PNG';
import pic10 from '../Images/code-run/10TH.PNG';
import pic11 from '../Images/code-run/11TH.PNG';



const CodeRun = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div>
                    <Carousel controls={true} indicators interval={100000}>
                        <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic2}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic3}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic4}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic5}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic6}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic7}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic8}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic9}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic10}
                                alt="First slide"
                            />
                        </Carousel.Item> <Carousel.Item >
                            <img style={{height:"90vh"}}
                                className="d-block w-100 custom-img"
                                src={pic11}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default CodeRun;