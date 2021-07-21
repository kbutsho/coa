import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Images/slider/slide1.webp';
import slider2 from '../Images/slider/slide2.webp';
import slider3 from '../Images/slider/slide3.webp';

const Slider = () => {
    return (
        <div>
             <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        style={{height: "400px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slider2}
                        alt="First slide"
                        style={{height: "400px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slider3}
                        alt="First slide"
                        style={{height: "400px"}}
                    />
                </Carousel.Item>               
            </Carousel>
        </div>
    );
};

export default Slider;