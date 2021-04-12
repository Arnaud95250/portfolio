import profil from "../assets/img/photo-profil.jpg";

const Home = () => {
  return (
    <div id="home">
      <div className="content_home">
        <div>
          <img src={profil} alt="profil" />
        </div>
        <div>
          <h1>Hi, I'm Arnaud.</h1>
          <p>
            Ex-employé du BTP j'ai depuis bientôt 2 ans changé de secteur
            d'activité pour être (👩‍💻)développeur Web et mobile, front-end mais
            aussi Back-end et tout ça en JAVASCRIPT 😉.
          </p>
          <p>On a sûrement des choses à se dire sur votre prochain projet !</p>
          <p>
            Si mon profil vous intérresse je suis actuellement à la recherche
            d'un poste comme developpeur Full-Stack Js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
