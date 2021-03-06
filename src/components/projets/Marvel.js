import { Link } from "react-router-dom";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import marvGif from "../../assets/img/marvel/gif/marvelGif.gif";
import marv1 from "../../assets/img/marvel/marv1.png";
import marv2 from "../../assets/img/marvel/marv2.png";
import marv3 from "../../assets/img/marvel/marv3.png";
import marv4 from "../../assets/img/marvel/marv4.png";
import marv5 from "../../assets/img/marvel/marv5.png";
import marv6 from "../../assets/img/marvel/marv6.png";
import marv7 from "../../assets/img/marvel/marv7.png";
// import marv8 from "../../assets/img/marvel/marv8.png";

const Marvel = () => {
  const image = [
    marvGif,
    marv1,
    marv2,
    marv3,
    marv4,
    marv5,
    marv6,
    marv7,
    // marv8,
  ];
  return (
    <div className="project_selected">
      <div className="carousel">
        <Carousel>
          {image.map((elem, index) => {
            return (
              <div key={index} style={{ background: "black", height: "100%" }}>
                <img src={elem} alt="" />
              </div>
            );
          })}
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
            <span>2 Jours</span>
          </div>
        </div>
        <hr />
        <div>
          <div className="info_main">
            <p>
              Test technique réalisé en deux jours et portant sur l'univers
              Marvel.
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
            <p>Le but de cette application était de :</p>
            <ul>
              <li>
                <p>
                  Faire apparaître la liste des personnages Marvel par ordre
                  alphabétique sous forme de fiche photo
                </p>
              </li>
              <li>
                <p>
                  Au clic sur une de ces fiches, faire apparaître une page avec
                  les comics liés au personnage
                </p>
              </li>
              <li>
                <p>
                  Faire apparaître la liste de comics sous forme de fiche photo
                </p>
              </li>
              <li>
                <p>
                  Mettre en place un système de pagination et une barre de
                  recherche
                </p>
              </li>
              <li>
                <p>Mettre en place un système de gestion des favoris</p>
              </li>
            </ul>
            <h3>FUTURS DÉVELOPPEMENTS :</h3>
            <p>
              Je réfléchis actuellement à une V2 pour diminuer les temps de
              chargement au maximum, intégrer un système d'authentification et
              simplifier le code. J'aimerais utiliser Redux, sur lequel je suis
              entrain de me former, pour améliorer la gestion de cette data. Le
              back aura également besoin d'être corrigé/amélioré. La V2
              intégrera également le préprocesseur CSS, SASS que je trouve plus
              ergonomique.
            </p>
            <h3>STACK :</h3>
            <p>
              React, axios, react-pagination, react-router-dom, NodeJS, cors,
              dotenv, express, express-formidable, mongoos
            </p>
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
export default Marvel;
