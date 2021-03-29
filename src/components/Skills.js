import js from "../assets/img/js.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import sass from "../assets/img/sass.png";
import react from "../assets/img/react.png";
import angular from "../assets/img/angular.png";
import node from "../assets/img/node.png";
import mongoDB from "../assets/img/mongoDB.png";
import githubLogo from "../assets/img/githubLogo.png";
import heroku from "../assets/img/heroku.png";
import netlify from "../assets/img/netlify.svg";
import figma from "../assets/img/figma-1.svg";
import visual from "../assets/img/visual.png";
import php from "../assets/img/php.png";
import mysql from "../assets/img/mysql.png";
import sql from "../assets/img/sql.png";
import codeigniter from "../assets/img/codeigniter.png";
import bootstrap from "../assets/img/bootstrap.png";
import filezilla from "../assets/img/filezilla.png";
import wordpress from "../assets/img/wordpress.png";

const Header = () => {
  return (
    <div id="skills">
      <h4>SKILLS</h4>
      <div className="icons">
        <div>
          <div>
            <img src={js} alt="java script" />
          </div>
          <p>JavaScrit</p>
        </div>
        <div>
          <div>
            <img src={html} alt="html" />
          </div>
          <p>HTML5</p>
        </div>
        <div>
          <div>
            <img src={css} alt="css" />
          </div>
          <p>CSS3</p>
        </div>
        <div>
          <div>
            <img src={sass} alt="sass" />
          </div>
          <p>SASS</p>
        </div>
        <div>
          <div>
            <img src={react} alt="react" />
          </div>
          <p>React / React Native</p>
        </div>
        <div>
          <div>
            <img src={angular} alt="angular" />
          </div>
          <p>Angular</p>
        </div>
        <div>
          <div>
            <img src={node} alt="node" />
          </div>
          <p>NodeJS</p>
        </div>
        <div>
          <div>
            <img src={mongoDB} alt="mongoDB" />
          </div>
          <p>MongoDB</p>
        </div>
        <div>
          <div>
            <img src={githubLogo} alt="github" />
          </div>
          <p>GitHub</p>
        </div>
        <div>
          <div>
            <img src={heroku} alt="heroku" />
          </div>
          <p>Heroku</p>
        </div>
        <div>
          <div>
            <img src={netlify} alt="netlify" />
          </div>
          <p>Netlify</p>
        </div>
        <div>
          <div>
            <img src={figma} alt="figma" />
          </div>
          <p>Figma</p>
        </div>
        <div>
          <div>
            <img src={visual} alt="visual" />
          </div>
          <p>Visual Studio Code</p>
        </div>
        <div>
          <div>
            <img src={php} alt="php" />
          </div>
          <p>php</p>
        </div>
        <div>
          <div>
            <img src={mysql} alt="mysql" />
          </div>
          <p>MySql</p>
        </div>
        <div>
          <div>
            <img src={sql} alt="sql" />
          </div>
          <p>sql</p>
        </div>
        <div>
          <div>
            <img src={codeigniter} alt="codeigniter" />
          </div>
          <p>odeigniter</p>
        </div>
        <div>
          <div>
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <p>bootstrap</p>
        </div>
        <div>
          <div>
            <img src={filezilla} alt="filezilla" />
          </div>
          <p>filezilla</p>
        </div>
        <div>
          <div>
            <img src={wordpress} alt="wordpress" />
          </div>
          <p>Wordpress</p>
        </div>
      </div>
      <div>
        <h4>Tranche de vie</h4>
      </div>
    </div>
  );
};
export default Header;
