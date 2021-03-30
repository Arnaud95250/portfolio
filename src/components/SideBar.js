import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default (props) => {
  let boolean = Boolean.valueOf({ areMenusOpen: true });
  const [state, setState] = useState((boolean = true));

  const closeAllMenusOnEsc = () => {
    let toto = new Boolean({ areMenusOpen: true });
    // let toto = Boolean.valueOf({ areMenusOpen: true });
    setState(toto);
  };

  return (
    <Menu customOnKeyDown={closeAllMenusOnEsc} isOpen={state}>
      {/* <Menu isOpen={false}> */}
      <Link
        to="/"
        className="menu-item"
        onClick={() => {
          closeAllMenusOnEsc();
        }}
      >
        Hi !
      </Link>

      <Link
        to="/about"
        className="menu-item"
        onClick={() => {
          closeAllMenusOnEsc();
        }}
      >
        A propos
      </Link>

      <Link
        to="/projets"
        className="menu-item"
        onClick={() => {
          closeAllMenusOnEsc();
        }}
      >
        Projets
      </Link>

      <Link
        to="/contact"
        className="menu-item"
        onClick={() => {
          closeAllMenusOnEsc();
        }}
      >
        Contact
      </Link>
    </Menu>
  );
};
