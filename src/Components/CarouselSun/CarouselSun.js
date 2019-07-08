// import React, { Component } from 'react';
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function CarouselSun() {
    const img1 = require('../../assets/images/img1.jpg');
    const img2 = require('../../assets/images/img2.jpg');

    return (
        <Carousel autoPlay>
            <div>
            <img src={img1} />
            <p className="legend">Legend 1</p>
            </div>
            <div>
            <img src={img2} />
            <p className="legend">Legend 2</p>
            </div>    
        </Carousel>
    );
}

