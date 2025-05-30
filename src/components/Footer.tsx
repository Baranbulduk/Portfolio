import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-socials">
          <a href='mailto:baranbulduk99@gmail.com'
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Email"
          >
            <span className="gradient-icon"><FaEnvelope /></span>
          </a>
          <a
            href="https://github.com/baranbulduk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <span className="gradient-icon"><FaGithub /></span>
          </a>

          <a
            href="https://www.linkedin.com/in/baran-bulduk-000a74198"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <span className="gradient-icon"><FaLinkedin /></span>
          </a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Baran Bulduk. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
