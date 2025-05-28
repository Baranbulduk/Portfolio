import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About Me</h2>
        <div>
          <p className="about-text">
            I am a young driven guy who has studied and worked in design and
            programming for a couple of years. I have always been curious to
            learn more and am always open to my shortcomings. Additionally, I
            easily adapt to different environments and contexts.
          </p>
          <p className="about-text">
            I am a cheerful and helpful person who is always motivated to
            develop within my role. I thrive in both team environments and
            independently. I strive to contribute to the success of my workplace
            and my colleagues. My goal is to improve my skills and knowledge to
            become an expert in the field.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
