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
            Ex-marketer en reconversion vers le côté obscur (👩‍💻). Développement
            web/mobile, marketing, design, stratégie... On a sûrement des choses
            à se dire sur votre prochain projet !
          </p>
          <p>Sinon, en ce moment je suis Dev FullStack chez Fleet ! 🦄</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
