import React from 'react'
import { motion } from 'framer-motion'

const workExperience = [
  {
    title: 'Fullstack Developer',
    company: 'Rexett AB',
    period: 'Jan 2025 - Now',
    description: "I'm a intern at Rexett AB and work with fullstack development."
  },
  {
    title: 'Fordonsmontör',
    company: 'Volvo Cars AB',
    period: 'Mar 2022 - Mar 2025',
    description: 'Worked as a vehicle technician and performed maintenance and repairs on vehicles.'
  }
]

const education = [
  {
    title: 'Frontend Developer',
    institution: 'Folkuniversitetet',
    period: 'Sep 2023 - Jun 2025',
    description: 'Studied Frontend Development and fullstack development.'
  },
  {
    title: 'Programmering 1',
    institution: 'NBI/Handelsakedemin',
    period: 'May 2023 - May 2023',
    description: 'Basic Phyton programming course.'
  },
  {
    title: 'Digitala Medier',
    institution: 'Högskolan Väst',
    period: 'Sep 2020 - May 2023',
    description: 'Studied Digital Media and worked with web development, design, and multimedia.'
  },
  {
    title: 'Samhällsvetenskap med inriktning Beteendevetenskap',
    institution: 'Kunskapsgymnasiet Göteborg',
    period: 'Aug 2015 - Jun 2018',
    description: 'Studied Social Science with a focus on Behavioral Science.'
  }
]

const timelineItems = [
  { type: 'work', ...workExperience[0] },
  { type: 'education', ...education[0] },
  { type: 'work', ...workExperience[1] },
  { type: 'education', ...education[1] },
  { type: 'education', ...education[2] },
  { type: 'education', ...education[3] },
]


const Experience = () => {
  return (
    <section className="section experience">
      <h2 className="experience-title">Experience</h2>
      <div className='experience-subtitle-wrapper'>
        <div className='experience-subtitle'>
          Work
        </div>
        <div className='experience-subtitle'>
          Education
        </div>
        </div>
        <div className="timeline-vertical-wrapper">
        <div className="timeline-vertical-line" />
        {timelineItems.map((item, idx) => (
  <React.Fragment key={item.title + idx}>
    {/* Doten placeras direkt i wrappern */}
    <motion.div
      className="timeline-vertical-dot"
      style={{ top: `${idx * 200}px` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
    />
    
    {/* Kortet */}
    <motion.div
      initial={{ opacity: 0, x: item.type === 'work' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className={`timeline-vertical-entry ${item.type === 'work' ? 'left' : 'right'}`}
      style={{ top: `${idx * 200}px`, position: 'absolute' }}
    >
      <div className="timeline-title">{item.title}</div>
      <div className="timeline-company">{item.type === 'work' ? item.company : item.institution}</div>
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-desc">{item.description}</div>
    </motion.div>
  </React.Fragment>
))}
      </div>
    </section>
  )
}

export default Experience 