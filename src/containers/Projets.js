import { Link } from "react-router-dom";
import ListProjects from "../components/projets/ListProjects";

const Projets = () => {
  return (
    <div id="projets">
      <div className="content_projets">
        <div className="projects_list"></div>
        <ListProjects />
        <div>
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
    </div>
  );
};

export default Projets;
