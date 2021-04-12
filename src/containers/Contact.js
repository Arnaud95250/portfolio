import { Link } from "react-router-dom";

import linkedin from "../assets/img/linkedin.png";
import githubLogo from "../assets/img/githubLogo.png";
import contat from "../assets/img/contact.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="content_contact">
        <div className="img_contact">
          <img src={contat} alt="" />
        </div>
        <div>
          <h1>Pour me joindre</h1>
          <p>
            Envoyez-moi un email à : <span>arnaud.malfait@hotmail.fr</span>
          </p>
          <h2>Ou retrouvez-moi sur :</h2>
          <Link
            to={{
              pathname: "https://linkedin.com/in/arnaud-malfait",
            }}
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </Link>
          <Link
            to={{
              pathname: "https://github.com/Arnaud95250?tab=repositories",
            }}
            target="_blank"
          >
            <img src={githubLogo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
