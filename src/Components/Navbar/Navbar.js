import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">Sunshare Dashboard</a>
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
              <a className="nav-link nav-link-icon" href="/Graph">
                Graphique
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
