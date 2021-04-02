import { Link } from "react-router-dom";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import test from "../../assets/img/todolist/todolist.jpg";

const ToDoList = () => {
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
            <span>Frontend</span>
          </div>
          <div>
            <p>PROJET</p>
            <span>Solo</span>
          </div>
          <div>
            <p>DUREE</p>
            <span>1/2 journée</span>
          </div>
        </div>
        <hr />
        <div>
          <div className="info_main">
            <p>Création d'une application simple de type Todolist.</p>
            <Link
              to={{
                pathname: "https://nostalgic-babbage-da7a0d.netlify.app/",
              }}
              target="_blank"
            >
              VOIR LA DEMO
            </Link>
            <h3>FEATURES :</h3>
            <p>Le but de cette application était de permettre :</p>
            <ul>
              <li>
                <p>
                  <p>Ajouter une nouvelle tâche à sa liste:</p>
                </p>
              </li>
              <li>
                <p>
                  Définir une tâche comme terminée et l'afficher en bas de liste
                </p>
              </li>
              <li>
                <p>Redéfinir une tâche terminée en tâche non-terminée</p>
              </li>
              <li>
                <p>Supprimer une tâche</p>
              </li>
            </ul>
            <h3>FUTURS DÉVELOPPEMENTS :</h3>
            <p>
              Une V2 de ce projet est prévue dans le cadre d'une initiation à
              Redux.
            </p>
            <h3>STACK :</h3>
            <p>React</p>
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
export default ToDoList;
