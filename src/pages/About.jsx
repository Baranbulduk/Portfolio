import React from "react";
import Header from "../components/Header/Header";
import Competence from "../components/Competence/Competence";
import Footer from "../components/Footer/Footer";

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
          <Competence src="htmlLogo.png" title="HTML" experience="2" />
          <Competence title="CSS" experience="2" />
          <Competence title="JavaScript" experience="1" />
          <Competence title="React" experience="1" />
          <Competence title="Node.js" experience="1" />
          <Competence title="Git" experience="1" />
          <Competence title="Figma" experience="1" />
          <Competence title="Scrum" experience="1" />
          <Competence title="Wordpress" experience="1" />
          <Competence title="Adobe" experience="2" />
        </section>

        <h3>Work Experience</h3>
        <h3>Education</h3>
      </div>
      <Footer />
    </>
  );
}

export default About;
