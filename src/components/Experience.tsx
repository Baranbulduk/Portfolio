import React from 'react'
import { motion } from 'framer-motion'

const workExperience = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Working on modern web applications using React and TypeScript.'
  },
  {
    title: 'Junior Developer',
    company: 'Previous Company',
    period: '2022 - 2023',
    description: 'Developed and maintained web applications using JavaScript and React.'
  }
]

const education = [
  {
    title: 'Frontend Development',
    institution: 'School Name',
    period: '2021 - 2022',
    description: 'Focused on modern web development technologies and best practices.'
  },
  {
    title: 'Computer Science',
    institution: 'University Name',
    period: '2017 - 2021',
    description: "Bachelor's degree in Computer Science with focus on software development."
  }
]

const Experience = () => {
  return (
    <section className="section experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
        {/* Work Experience */}
        <div>
          <h3 className="experience-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Work Experience</h3>
          <div className="timeline">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-entry"
                style={{ position: 'relative' }}
              >
                <div className="timeline-dot" />
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-desc">{exp.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h3 className="experience-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-entry"
                style={{ position: 'relative' }}
              >
                <div className="timeline-dot" />
                <div className="timeline-title">{edu.title}</div>
                <div className="timeline-company">{edu.institution}</div>
                <div className="timeline-period">{edu.period}</div>
                <div className="timeline-desc">{edu.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 