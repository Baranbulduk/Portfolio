import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

interface TimelineItem extends Partial<WorkExperience>, Partial<Education> {
  type: 'work' | 'education';
  title: string;
}

const workExperience: WorkExperience[] = [
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

const education: Education[] = [
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

const timelineItems: TimelineItem[] = [
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
        <div className="timeline-items-container">
          {timelineItems.map((item, idx) => (
            <div key={item.title + idx} className="timeline-item">
              <motion.div
                className="timeline-vertical-dot"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
              <motion.div
                initial={{ opacity: 0, x: item.type === 'work' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`timeline-vertical-entry ${item.type === 'work' ? 'left' : 'right'}`}
              >
                <div className="timeline-header">
                  <div className="timeline-title">{item.title}</div>
                  <span className={`timeline-type ${item.type}`}>
                    {item.type === 'work' ? <FaBriefcase /> : <MdSchool />}
                    {item.type}
                  </span>
                </div>
                <div className="timeline-company">
                  {item.type === 'work' ? item.company : item.institution}
                </div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-desc">{item.description}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 