import { Link } from "react-router-dom";
import Anime from "./Anime";
import Sidebar from "./SideBar";

const Header = () => {
  return (
    <div id="header">
      <hr />
      <div>
        <Anime />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Hi !</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="burger_menu">
        <Sidebar />
      </div>
    </div>
  );
};
export default Header;
