// import React, { Component } from 'react';
import React from "react";
import { Carousel } from "react-responsive-carousel";
import './CarouselSun.css';

export default function CarouselSun() {
    const img1 = require('../../assets/images/carouselGris.jpg');

    return (
        <div className="container" style={{ width: 600}} >
        <Carousel autoPlay>
            <div>
                    <p className="legend">Mettre un couvercle sur une casserole pour faire bouillir de l’eau, c’est 4 fois moins d’énergie consommée !</p>
            <img src={img1}/>
            </div>
            <div>
            <img src={img1} />
                    <p className="legend">Si vous réglez votre lave-linge à 40°C, vous consommez 25 % d'énergie en moins qu’en cycle court à 60 °C.</p>
            </div>
            <div>
            <img src={img1}/>
                    <p className="legend">Une ampoule bien dépoussiérée offre 40 % d’éclairage supplémentaire.</p>
            </div> 
            <div>
            <img src={img1} />
                    <p className="legend">Réguler et programmer votre chauffage vous permet de consommer jusqu’à 10 % de moins.</p>
            </div> 
                <div>
                    <img src={img1} />
                    <p className="legend">Plus votre douche est rapide, moins vous consommez d'eau et d'énergie. Pensez à arrêter le robinet quand vous vous savonnez.</p>
                </div> 
                <div>
                    <img src={img1} />
                    <p className="legend">En branchant les équipements électriques sur une multiprise à interrupteur, il est facile de couper toutes les veilles en même temps.</p>
                </div> 
        </Carousel>
        </div>
    );
}

