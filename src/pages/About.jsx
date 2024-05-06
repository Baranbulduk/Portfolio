import React from "react";
import Header from "../components/Header/Header";
import Competence from "../components/Competence/Competence";
import Footer from "../components/Footer/Footer";
import htmlLogo from "../assests/htmlLogo.png";
import cssLogo from "../assests/cssLogo.png";
import javascriptLogo from "../assests/javascriptLogo.png";
import reactLogo from "../assests/reactLogo.png";
import nodejsLogo from "../assests/nodejsLogo.png";
import gitLogo from "../assests/gitLogo.png";
import figmaLogo from "../assests/figmaLogo.png";
import scrumLogo from "../assests/scrumLogo.png";
import wordpressLogo from "../assests/wordpressLogo.png";
import adobeLogo from "../assests/adobeLogo.png";

function About() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>About Me</h2>
        <section>
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

        <h3>Comptence</h3>
        <section className="competence_container">
          <Competence image={htmlLogo} title="HTML" experience="2" />
          <Competence image={cssLogo} title="CSS" experience="2" />
          <Competence
            image={javascriptLogo}
            title="JavaScript"
            experience="1"
          />
          <Competence image={reactLogo} title="React" experience="1" />
          <Competence image={nodejsLogo} title="Node.js" experience="1" />
          <Competence image={gitLogo} title="Git" experience="1" />
          <Competence image={figmaLogo} title="Figma" experience="1" />
          <Competence image={scrumLogo} title="Scrum" experience="1" />
          <Competence image={wordpressLogo} title="Wordpress" experience="1" />
          <Competence image={adobeLogo} title="Adobe" experience="2" />
        </section>
        <section className="work_education_experience">
          <div>
            <h3>Work Experience</h3>
            <h6>Title</h6>
            <p>Year</p>
          </div>
          <div>
            <h3>Education</h3>
            <h6>Title</h6>
            <p>Year</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
