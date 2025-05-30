import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero">
      <div>
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-headline"
        >
          Hi, I'm
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-title"
        >
          Baran Bulduk
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-headline"
        >
          Fullstack Developer from Gothenburg, Sweden
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="https://github.com/baranbulduk"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          View GitHub
        </motion.a>
      </div>
    </section>
  )
}

export default Hero 