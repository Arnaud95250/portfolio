import { Link } from "react-router-dom";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import vintedGif from "../../assets/img/vinted/gif/vinted-gif.gif";
import vintedGif2 from "../../assets/img/vinted/gif/vinted-gif2.gif";
import vint1 from "../../assets/img/vinted/vinted1.png";
import vint2 from "../../assets/img/vinted/vinted2.png";
import vint3 from "../../assets/img/vinted/vinted3.png";
import vint4 from "../../assets/img/vinted/vinted4.png";

const Vinted = () => {
  const image = [vintedGif, vintedGif2, vint1, vint2, vint3, vint4];

  return (
    <div className="project_selected">
      <div className="carousel">
        <Carousel>
          {image.map((elem, index) => {
            return (
              <div key={index}>
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
            <span>2 Semaines</span>
          </div>
        </div>
        <hr />
        <div>
          <div className="info_main">
            <p>
              Création d'une réplique du site vinted vente de produits entre
              particuliers.
            </p>
            <Link
              to={{
                pathname: "https://goofy-bhabha-148e17.netlify.app/",
              }}
              target="_blank"
            >
              VOIR LA DEMO
            </Link>
            <h3>FEATURES :</h3>
            <p>Le but de cette application était de :</p>
            <ul>
              <li>
                <p>Lister l'intégralité des annonces créées</p>
              </li>
              <li>
                <p>Formulaire de création d'un nouveau compte utilisateur</p>
              </li>
              <li>
                <p>Formulaire de connexion utilisateur</p>
              </li>
              <li>
                <p>
                  Ajouter une nouvelle annonce que si le membre est connecté à
                  son compte (si le Token existe). sinon redirection sur la page
                  login.
                </p>
              </li>

              <li>
                <p>Mise en place d'un input rechercher un produit</p>
              </li>
            </ul>
            <h3>FUTURS DÉVELOPPEMENTS :</h3>
            <p>
              J'ai pour projet de continuer le projet et de réaliser une
              interface utilisateur plus agréable (responsive), mais aussi de
              restyliser l'ensemble du projet en ajoutant des fonctionnalités
              qui permettront de supprimer/modifier une annonce et pouvoir
              également modifier le compte utilisateur.
            </p>
            <h3>STACK :</h3>
            React, axios, react-router-dom, NodeJS, cors, dotenv, express,
            express-formidable, mongoose
            <h3>CODE DU PROJET :</h3>
            <div className="info_git">
              <Link
                to={{
                  pathname: "https://github.com/Arnaud95250/vinted-front",
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
                  pathname: "https://github.com/Arnaud95250/vinted-back",
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
export default Vinted;
