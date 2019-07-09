import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Graph from './Components/Graph/Graph';
import Graph2 from './Components/Graph/Graph2';

import CarouselSun from './Components/CarouselSun/CarouselSun';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';
import './GraphPage.css';
import './assets/css/argon.min.css';
import './assets/icons/icofont.min.css';
import ModalInfo from './Components/ModalInfo/ModalInfo';

function GraphPage() {
  return (
    <div>
      	<Navbar />
		<main>
			<div className="position-relative">
				{/* <div className="container"> */}
					<div className="row row-grid box">
						<div className="col-sm-7">
							<Graph />
						</div>
						<div className="col-sm-5 subox">
							<div className="alert alert-secondary indexBox" role="alert">
								<span><strong>Index </strong></span>
								<span className="badge badge-default">4000000</span>
							</div>
							<div className="alert alert-secondary indexBox" role="alert">
								<span><strong>Consommation </strong></span>
								<span className="badge badge-success">-300</span>
							</div>
							<div className="alert alert-secondary indexBox"  role="alert">
								<span><strong>AutoConsommation </strong></span>
								<span className="badge badge-warning">1000</span>
							</div>
						</div>
					</div>
					<div className="row row-grid box">
						<div className="col">
							<Graph2 />
						</div>
						<div className="col">
							<CarouselSun />
						</div>
					</div>
				{/* </div> */}
			</div>
		</main>
    </div>
  );
} 

export default GraphPage;