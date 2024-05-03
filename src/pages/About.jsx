import React from "react";
import Header from "../components/Header/Header";
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
        <h6>Component-Competence</h6>
        <h3>Work Experience</h3>
        <h3>Education</h3>
      </div>
      <Footer />
    </>
  );
}

export default About;
