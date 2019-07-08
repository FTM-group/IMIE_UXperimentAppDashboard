import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Graph from './Components/Graph/Graph';

import CarouselSun from './Components/CarouselSun/CarouselSun';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';
import './GraphPage.css';
import './assets/css/argon.min.css';
import './assets/icons/icofont.min.css';

function GraphPage() {
  return (
    <div>
      <Navbar />
      <main>
         <div className="position-relative">
          { /*<section className="section section-lg section-hero section-shaped">
            <div className="shape shape-style-1 shape-primary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div> */}
            {/* <div className="separator separator-bottom separator-skew">
              <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section> */}
          <Graph />
		  <CarouselSun />
        </div>
      </main>
    </div>
  );
} 

export default GraphPage;