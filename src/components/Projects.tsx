import React from "react";
import { motion } from "framer-motion";
import House from "../assets/house.jpg";
import Apartment from "../assets/apartment.jpg";
import Tokyo from "../assets/tokyo.jpg";
import Plants from "../assets/plants.jpg";

const projects = [
  {
    id: 1,
    title: "Fullstack Task Manager",
    description:
      "En uppgiftshanterare med autentisering och rollbaserad åtkomst (Admin, Manager, Employer).",
    image: House,
    tech: "React, Node.js, Express, MongoDB, JWT",
    year: 2025,
    link: "https://github.com/baranbulduk/fullstack-task-manager",
  },
  {
    id: 2,
    title: "Quiz App",
    description:
      "En frågesport-app där användare kan spela olika kategorier och spara sina poäng.",
    image: Apartment,
    tech: "React, TypeScript, Tailwind CSS",
    year: 2024,
    link: "https://github.com/baranbulduk/quiz-app",
  },
  {
    id: 3,
    title: "Fullstack Task Manager",
    description:
      "En uppgiftshanterare med autentisering och rollbaserad åtkomst (Admin, Manager, Employer).",
    image: Tokyo,
    tech: "React, Node.js, Express, MongoDB, JWT",
    year: 2025,
    link: "https://github.com/baranbulduk/fullstack-task-manager",
  },
  {
    id: 4,
    title: "Fullstack Task Manager",
    description:
      "En uppgiftshanterare med autentisering och rollbaserad åtkomst (Admin, Manager, Employer).",
    image: Plants,
    tech: "React, Node.js, Express, MongoDB, JWT",
    year: 2025,
    link: "https://github.com/baranbulduk/fullstack-task-manager",
  },
];

const Projects = () => {
  return (
    <section className="section projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-year">{project.year}</p>
              <div className="project-tech">
                {project.tech.split(", ").map((tech, i) => (
                  <span key={i} className="project-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
