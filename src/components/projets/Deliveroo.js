import { Link } from "react-router-dom";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import test from "../../assets/img/deliveroo.jpg";

const Deliveroo = () => {
  return (
    <div className="project_selected">
      <div className="carousel">
        <Carousel>
          <div>
            <img src={test} />
          </div>
          <div>
            <img src={test} />
          </div>
          <div>
            <img src={test} />
          </div>
          <div>
            <img src={test} />
          </div>
        </Carousel>
      </div>
      <div className="content_project_selected">
        <hr />
        <div className="info_header">
          <div>
            <p>CATEGORIE</p>
            <span>FullStack</span>
          </div>
          <div>
            <p>PROJET</p>
            <span>Solo</span>
          </div>
          <div>
            <p>DUREE</p>
            <span>1/2 Journée</span>
          </div>
        </div>
        <hr />
        <div>
          <div className="info_main">
            <p>
              Création d'une réplique de page de restaurant sur le modèle de
              Deliveroo.
            </p>
            <Link
              to={{
                pathname: "https://sharp-lichterman-1c20d3.netlify.app",
              }}
              target="_blank"
            >
              VOIR LA DEMO
            </Link>
            <h3>FEATURES :</h3>
            <p>
              Exercice d'initiation pour la gestion d'un panier. Le but de cette
              application était de :
            </p>
            <ul>
              <li>
                <p>
                  Lister l'intégralité du menu du restaurant 'Le Pain Quotidien'
                </p>
              </li>
              <li>
                <p>Au clic sur un item, l'ajouter au panier</p>
              </li>
              <li>
                <p>Ajout/suppression de produit depuis le panier</p>
              </li>
              <li>
                <p>Calcul du montant total du panier en temps réel</p>
              </li>
            </ul>
            <h3>STACK :</h3>
            <p>React, axios, numeral, NodeJS, cors, express</p>
            <h3>CODE DU PROJET :</h3>
            <div className="info_git">
              <Link
                to={{
                  pathname: "https://github.com/Arnaud95250/marvel-front",
                }}
                target="_blank"
                className="button_git test2"
              >
                <div>
                  <span>FrontEnd</span>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "https://github.com/Arnaud95250/marvel-back",
                }}
                target="_blank"
                className="button_git"
              >
                <div>
                  <span>BackEnd</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deliveroo;
