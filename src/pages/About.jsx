import React from "react";
import Header from "../components/Header/Header";
import Competence from "../components/Competence/Competence";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import htmlLogo from "../assests/logotypes/htmlLogo.png";
import cssLogo from "../assests/logotypes/cssLogo.png";
import javascriptLogo from "../assests/logotypes/javascriptLogo.png";
import reactLogo from "../assests/logotypes/reactLogo.png";
import nodejsLogo from "../assests/logotypes/nodejsLogo.png";
import gitLogo from "../assests/logotypes/gitLogo.png";
import figmaLogo from "../assests/logotypes/figmaLogo.png";
import scrumLogo from "../assests/logotypes/scrumLogo.png";
import wordpressLogo from "../assests/logotypes/wordpressLogo.png";
import adobeLogo from "../assests/logotypes/adobeLogo.png";

function About() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>ABOUT ME</h2>
        </div>
        <section className="aboutMe_text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            mollitia aut delectus ipsam suscipit? Voluptatibus optio sapiente
            numquam incidunt magnam aut dicta, tempora vel odio quasi facere
            quas minus veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Deserunt nostrum amet distinctio ea pariatur, nisi
            aspernatur soluta beatae corporis! Corrupti et iure reprehenderit
            alias error eaque velit unde laudantium porro.
          </p>
        </section>
        <div className="wrapper">
        <h3>COMPETENCE</h3>
        <section className="competence_container">
          <Competence image={htmlLogo} title="HTML" />
          <Competence image={cssLogo} title="CSS" />
          <Competence image={javascriptLogo} title="JavaScript" />
          <Competence image={reactLogo} title="React" />
          <Competence image={nodejsLogo} title="Node.js" />
          <Competence image={gitLogo} title="Git" />
          <Competence image={figmaLogo} title="Figma" />
          <Competence image={scrumLogo} title="Scrum" />
          <Competence image={wordpressLogo} title="Wordpress" />
          <Competence image={adobeLogo} title="Adobe" />
        </section>
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default About;
