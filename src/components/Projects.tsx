import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  fork: boolean;
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/baranbulduk/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo: Repo) => repo.name.toLowerCase() !== "baranbulduk"
        );
        console.log(filtered);
        setRepos(filtered);
      })
      .catch((err) => console.error("Failed to fetch repos:", err));
  }, []);

  return (
    <section className="section projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <h3 className="project-title">{repo.name}</h3>
            <p className="project-desc">{repo.description}</p>
            <p className="project-tech-badge">{repo.language}</p>
            <a
              href={repo.html_url}
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
