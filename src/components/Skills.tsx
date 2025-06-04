import React from "react";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiWordpress,
  SiNodedotjs,
} from "react-icons/si";

import { DiScrum } from "react-icons/di";

const skillsfirstrow = [
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
  { name: "Adobe InDesign", icon: <SiAdobeindesign /> },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Adobe XD", icon: <SiAdobexd /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Scrum", icon: <DiScrum /> },
];

const skillssecondrow = [
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Git", icon: <SiGit /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const skillsthirdrow = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "WordPress", icon: <SiWordpress /> },
];

const Skills = () => {

  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-row">
        {skillsfirstrow.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            animate={{ x: [20, -20, 20] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="skills-row">
        {skillssecondrow.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            animate={{ x: [-20, 20, -20] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="skills-row">
        {skillsthirdrow.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            animate={{ x: [20, -20, 20] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
