//import fichier SCSS
import "./App.scss";
import "./assets/scss/components/header.scss";
import "./assets/scss/components/footer.scss";
import "./assets/scss/components/anime.scss";
import "./assets/scss/components/skills.scss";
import "./assets/scss/components/sideBar.scss";

import "./assets/scss/components/projets/listProjects.scss";
import "./assets/scss/components/projets/projectSelected.scss";

import "./assets/scss/containers/home.scss";
import "./assets/scss/containers/projets.scss";
import "./assets/scss/containers/about.scss";
import "./assets/scss/containers/contact.scss";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import components
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Projets from "./containers/Projets";
import About from "./containers/About";

// Package Yarn
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projets">
            <Projets />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
