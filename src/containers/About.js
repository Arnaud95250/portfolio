import Skills from "../components/Skills";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <div className="content_about">
        <hr className="hr_hidden" />
        <h1>
          Je suis actuellement à la recherche d'un poste de Developpeur
          FullStack JS (React.js / Recat Native / Node.js)
        </h1>
        <span>(mais si tu es là, c'est que tu le sais déjà).</span>
        <hr />
        <p>
          Depuis toujours, l'informatique a été un plaisir à tous les niveaux,
          j'ai toujours aimé comprendre et régler les soucis des autres et je
          crois que cette idée ne m’a jamais vraiment quittée puisque à 30 ans,
          je reprenais une formation de développeur web pour en faire mon
          nouveau métier...
        </p>
        <p>
          Bien-sûr avant d'en arriver là, j'ai travaillé plusieurs années dans
          le secteur du BTP à différents postes comme conducteur de travaux,
          commercial, maîtrise d'œuvre. C'était chouette, mais j'en étais arrivé
          à un moment de ma carrière où j'avais besoin de vibrer à nouveau dans
          mon métier. C'est là que le code s'est imposé !
        </p>
        <p>
          Envie d'en savoir un peu plus ? On se retrouve sur{" "}
          <Link
            to={{
              pathname: "https://linkedin.com/in/arnaud-malfait",
            }}
            target="_blank"
          >
            Linkedin.
          </Link>
        </p>
        <div className="components_skills">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
