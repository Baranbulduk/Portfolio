import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    id: 1,
    title: "Fullstack Task Manager",
    description: "En uppgiftshanterare med autentisering och rollbaserad åtkomst (Admin, Manager, Employer).",
    image: "./assets/react.svg",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    year: 2025,
    link: "https://github.com/baranbulduk/fullstack-task-manager",
  },
  {
    id: 2,
    title: "Quiz App",
    description: "En frågesport-app där användare kan spela olika kategorier och spara sina poäng.",
    image: "/images/quiz-app.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    year: 2024,
    link: "https://github.com/baranbulduk/quiz-app",
  },
  {
    id: 3,
    title: "Fullstack Task Manager",
    description: "En uppgiftshanterare med autentisering och rollbaserad åtkomst (Admin, Manager, Employer).",
    image: "/images/task-manager.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    year: 2025,
    link: "https://github.com/baranbulduk/fullstack-task-manager",
  },
  {
    id: 4,
    title: "Fullstack Task Manager",
    description: "En uppgiftshanterare med autentisering och rollbaserad åtkomst (Admin, Manager, Employer).",
    image: "/images/task-manager.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
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
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech-badge">{project.tech.join(", ")}</p>
            <p className="project-year">{project.year}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
