import { Link } from "react-router-dom";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import tellGif from "../../assets/img/tellmemore/gif/gif_tellmemore.gif";
import tell1 from "../../assets/img/tellmemore/tellMeMore1.png";
import tell2 from "../../assets/img/tellmemore/tellMeMore2.png";
import tell3 from "../../assets/img/tellmemore/tellMeMore3.png";
import tell4 from "../../assets/img/tellmemore/tellMeMore4.png";
import tell5 from "../../assets/img/tellmemore/tellMeMore5.png";
import tell6 from "../../assets/img/tellmemore/tellMeMore6.png";
import tell7 from "../../assets/img/tellmemore/tellMeMore7.png";
import tell8 from "../../assets/img/tellmemore/tellMeMore8.png";

const TellMeMore = () => {
  const image = [
    tellGif,
    tell1,
    tell2,
    tell3,
    tell4,
    tell5,
    tell6,
    tell7,
    tell8,
  ];

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
              Certification de fin de formation réalisé en deux semaines
              (validé).
            </p>
            <Link
              to={{
                pathname: "https://suspicious-northcutt-61fbf5.netlify.app/",
              }}
              target="_blank"
            >
              VOIR LA DEMO
            </Link>
            <h3>FEATURES :</h3>
            <p>Le but de cette application était de :</p>
            <ul>
              <li>
                <p>Créer un nouveau formulaire</p>
              </li>
              <li>
                <p>
                  Modifier le titre d'un formulaire ou supprimer un formulaire
                </p>
              </li>
              <li>
                <p>
                  Ajouter une nouvelle question (de type Texte ou de type Note
                  de 1 à 5)
                </p>
              </li>
              <li>
                <p>
                  Modifier l'intitulé d'une question ou modifier l'ordre des
                  questions ou supprimer une question et sauvegarder les
                  changements
                </p>
              </li>
              <li>
                <p>
                  Pouvoir répondre au formulaire créer et faire apparaitre les
                  réponses dans un onglet réponses
                </p>
              </li>
            </ul>
            <h3>FUTURS DÉVELOPPEMENTS :</h3>
            <p>
              Je déjà réfléchis à une V2 qui permettrait de réduire le nombre de
              lignes de code par deux. il faudra également modifier la partie
              back-end qui n'est pas suffisamment optimisé, les models de
              mongoose sont trop simples et demandent à être retravaillé. cela
              qui bloque le bon fonctionnement de l'application.
            </p>
            <h3>STACK :</h3>
            <p>
              React, axios, react-router-dom, NodeJS, cors, dotenv, express,
              express-formidable, mongoose
            </p>
            <h3>CODE DU PROJET :</h3>
            <div className="info_git">
              <Link className="button_git test2">
                <div>
                  <span>FrontEnd private</span>
                </div>
              </Link>
              <Link className="button_git">
                <div>
                  <span>BackEnd private</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TellMeMore;
