import React, { useState } from 'react';
import ModalInfo from '../ModalInfo/ModalInfo';

import './Navbar.css';

import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';


function activateModal() {
	console.log('ok');
	// <ModalInfo />
}

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);
  const logo = require('../../assets/images/logo.png');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-default">
      <div className="container">
        
        <img src={logo} width="50" height="50" alt="Logo Sunshare" />
        
        <button onClick={() => setCollapse(true)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={collapse ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbar-default">
          <button onClick={() => setCollapse(false)} type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
          </button>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/">
                Prévisions
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link nav-link-icon" href="/" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Paramètres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/graph">
                Graphique
              </a>
            </li>
			<li className="nav-item">
              <a className="nav-link nav-link-icon" href="#">
				{/* <i class="fas fa-info-circle"></i> */}
				<FontAwesomeIcon icon={faInfo} onClick={() => activateModal()}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
