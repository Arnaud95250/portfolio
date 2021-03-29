import ListProjects from "../components/projets/ListProjects";

const Projets = () => {
  return (
    <div id="projets">
      <div className="content_projets">
        <div className="projects_list"></div>
        <ListProjects />
      </div>
    </div>
  );
};

export default Projets;
