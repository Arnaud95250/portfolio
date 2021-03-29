// Import Image
import deliveroo from "../../assets/img/deliveroo.jpg";
import marvel from "../../assets/img/marvel.jpg";
import todolist from "../../assets/img/todolist.jpg";
import chevronLeft from "../../assets/img/chevron-left.svg";

// Import components/projects
import Marvel from "./Marvel";
import Deliveroo from "./Deliveroo";
import ToDoList from "./ToDoList";

// Import package
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListProjects = () => {
  const [list, setList] = useState(true);
  const [projectMarvel, setProjectMarvel] = useState(false);
  const [projectDeliveroo, setProjectDeliveroo] = useState(false);
  const [projectToDoList, setProjectToDoList] = useState(false);

  return list ? (
    <div id="list_projects">
      <h1>Mes projets</h1>
      <div className="content_list">
        <div
          onClick={() => {
            setProjectDeliveroo(true);
            setList(false);
          }}
        >
          <div></div>
          <img src={deliveroo} />
        </div>
        <div
          onClick={() => {
            setProjectMarvel(true);
            setList(false);
          }}
        >
          <div></div>
          <img src={marvel} />
        </div>
        <div
          onClick={() => {
            setProjectToDoList(true);
            setList(false);
          }}
        >
          <div></div>
          <img src={todolist} />
        </div>
        <div>
          <div></div>
          <img src={todolist} />
        </div>
        <div>
          <div></div>
          <img src={deliveroo} />
        </div>
        <div>
          <div></div>
          <img src={marvel} />
        </div>
      </div>
      <div className="all_projects">
        <p>
          Voir tous mes projets sur mon
          <Link
            to={{
              pathname: "https://github.com/Arnaud95250?tab=repositories",
            }}
            target="_blank"
          >
            Github
          </Link>
        </p>
      </div>
    </div>
  ) : projectMarvel ? (
    <div className="content_project">
      <button
        className="button_return"
        onClick={() => {
          setList(true);
          setProjectMarvel(false);
        }}
      >
        <img src={chevronLeft} alt="chevronLeft" />
        Retour aux projets
      </button>
      <Marvel />
      {/* <Deliveroo /> */}
    </div>
  ) : projectDeliveroo ? (
    <div className="content_project">
      <button
        className="button_return"
        onClick={() => {
          setList(true);
          setProjectDeliveroo(false);
        }}
      >
        <img src={chevronLeft} alt="chevronLeft" />
        Retour aux projets
      </button>
      <Deliveroo />
    </div>
  ) : projectToDoList ? (
    <div className="content_project">
      <button
        className="button_return"
        onClick={() => {
          setList(true);
          setProjectToDoList(false);
        }}
      >
        <img src={chevronLeft} alt="chevronLeft" />
        Retour aux projets
      </button>
      <ToDoList />
    </div>
  ) : (
    <div></div>
  );
};
export default ListProjects;
