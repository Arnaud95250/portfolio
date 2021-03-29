import Skills from "../components/Skills";

const About = () => {
  return (
    <div id="about">
      <div className="content_about">
        <hr className="hr_hidden" />
        <h1>
          Je suis actuellement à la recherche d'un poste de Developpeur
          FullStack JS (React.js / Recat Native / Node.js)
        </h1>
        <span>(mais si tu es la, c'est que tu le sais déjà).</span>
        <hr />
        <p>
          A 4 ans, j’ai reçu mon premier ordinateur. Je l'adorais et je
          l’emmenais partout où j'allais. Et je crois que cette idée ne m’a
          jamais vraiment quittée puisque 25 ans plus tard, je reprenais une
          formation de développeur web pour en faire mon nouveau métier...
        </p>
        <p>
          Avant d'en arriver là, j'ai travaillé plusieurs années en PME/startup
          à des postes de Marketing et Stratégie. C'était chouette, mais j'en
          étais arrivée à un moment de ma carrière où j'avais besoin de vibrer à
          nouveau dans mon métier. C'est là que le code s'est imposé !
        </p>
        <p>Envie d'en savoir un peu plus ? On se retrouve sur Linkedin.</p>
        <div className="components_skills">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
