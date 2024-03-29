import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
// import Graph from './Components/Container/Graph';

import './App.css';
import './assets/css/argon.min.css';
import './assets/icons/icofont.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="position-relative">
          <section className="section section-lg section-hero section-shaped">
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
            </div>
            <div className="separator separator-bottom separator-skew">
              <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
        </div>
      </main>
      <Container />
    </div>
  );
} 

export default App;
