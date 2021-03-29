import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import perso1 from "../assets/img/perso1.png";
import perso2 from "../assets/img/perso2.png";
import perso3 from "../assets/img/perso3.png";
import perso4 from "../assets/img/perso4.png";

const Anime = () => {
  const [anime, setAnime] = useState("");
  const animation = [perso1, perso2, perso3, perso4];

  useEffect(() => {
    const fetchData = async () => {
      try {
        animePerso();
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const animePerso = () => {
    setAnime(<img src={animation[0]} />);
    setTimeout(function () {
      setAnime(<img src={animation[1]} />);
      setTimeout(function () {
        setAnime(<img src={animation[2]} />);
        setTimeout(function () {
          setAnime(<img src={animation[3]} />);
          setTimeout(function () {
            return requestAnimationFrame(animePerso);
          }, 250);
        }, 250);
      }, 250);
    }, 250);
  };

  return (
    <div id="anime">
      <Link to="/">{anime}</Link>
    </div>
  );
};
export default Anime;
