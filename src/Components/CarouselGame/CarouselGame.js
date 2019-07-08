import React from 'react';

export default function CarouselGame() {

  const img1 = require('../../assets/images/img1.jpg');
  const img2 = require('../../assets/images/img2.jpg');

  return (
   
    <div className="container">
        <div className="carousel-item">
            <img src={img1}  alt="Image1"/>
            <img src={img2}  alt="Image2"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Conseil1</h5>
                <p>Lorem ipsum</p>
            </div>
        </div>
    </div>
  );
}