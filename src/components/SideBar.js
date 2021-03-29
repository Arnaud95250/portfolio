import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Menu isOpen={true}>
      <Link to="/" className="menu-item">
        Hi !
      </Link>

      <Link to="/about" className="menu-item">
        A propos
      </Link>

      <Link to="/projets" className="menu-item">
        Projets
      </Link>

      <Link to="/contact" className="menu-item">
        Contact
      </Link>
    </Menu>
  );
};
