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
				<div className="container">
					<div className="row row-grid">
						<div className="col">
							<Graph />
						</div>
						<div className="col">
							<CarouselSun />
						</div>
					</div>
				</div>
			</div>
		</main>
    </div>
  );
} 

export default GraphPage;