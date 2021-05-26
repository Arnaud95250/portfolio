// Import Image
import deliveroo from "../../assets/img/deliveroo/deliveroo.jpg";
import marvel from "../../assets/img/marvel/marvel.jpg";
import todolist from "../../assets/img/todolist/todolist.jpg";
// import tellMeMore from "../../assets/img/tellmemore/tell-me-more.png";
import vinted from "../../assets/img/vinted/vinted.png";
import chevronLeft from "../../assets/img/chevron-left.svg";

// Import components/projects
import Marvel from "./Marvel";
import Deliveroo from "./Deliveroo";
import ToDoList from "./ToDoList";
// import TellMeMore from "./TellMeMore";
import Vinted from "./Vinted";

// Import package
import { useState } from "react";
import { Link } from "react-router-dom";

const ListProjects = () => {
  const [list, setList] = useState(true);
  const [projectMarvel, setProjectMarvel] = useState(false);
  const [projectDeliveroo, setProjectDeliveroo] = useState(false);
  const [projectToDoList, setProjectToDoList] = useState(false);
  const [projectTellMeMore, setProjectTellMeMore] = useState(false);
  const [projectVinted, setProjectVinted] = useState(false);

  return list ? (
    <div id="list_projects">
      <h1>Mes projets</h1>
      <div className="content_list">
        {/* MARVEL */}
        <div
          onClick={() => {
            setProjectMarvel(true);
            setList(false);
          }}
        >
          <img src={marvel} alt="marvel" />
        </div>
        {/* VINTED */}
        <div
          onClick={() => {
            setProjectVinted(true);
            setList(false);
          }}
        >
          <img src={vinted} alt="vinted" />
        </div>
        {/* DELIVEROO */}
        <div
          onClick={() => {
            setProjectDeliveroo(true);
            setList(false);
          }}
        >
          <img src={deliveroo} alt="deliveroo" />
        </div>
        {/* TODOLIST */}
        <div
          onClick={() => {
            setProjectToDoList(true);
            setList(false);
          }}
        >
          <img src={todolist} alt="todolist" />
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
  ) : projectVinted ? (
    <div className="content_project">
      <button
        className="button_return"
        onClick={() => {
          setList(true);
          setProjectVinted(false);
        }}
      >
        <img src={chevronLeft} alt="chevronLeft" />
        Retour aux projets
      </button>
      <Vinted />
    </div>
  ) : (
    <div></div>
  );
};
export default ListProjects;

{
  /* TELLMEMORE */
}
{
  /* <div
          style={{ border: "solid 0.1px green" }}
          onClick={() => {
            setProjectTellMeMore(true);
            setList(false);
          }}
        >
          <img src={tellMeMore} alt="tellMeMore" />
        </div> */
}

// ) : projectTellMeMore ? (
//   <div className="content_project">
//     <button
//       className="button_return"
//       onClick={() => {
//         setList(true);
//         setProjectTellMeMore(false);
//       }}
//     >
//       <img src={chevronLeft} alt="chevronLeft" />
//       Retour aux projets
//     </button>
//     <TellMeMore />
//   </div>
