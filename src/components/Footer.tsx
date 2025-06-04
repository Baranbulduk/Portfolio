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
            className="footer-socials-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/baranbulduk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-socials-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/baran-bulduk-000a74198"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-socials-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
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
