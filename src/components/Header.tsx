import React from 'react'
import { Link } from 'react-scroll'

interface HeaderProps {
  activeSection: string
}

const Header = ({ activeSection }: HeaderProps) => {
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'About', to: 'about' },
  ]

  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <div className="logo">Baran Bulduk</div>
          <nav>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={`nav-link${activeSection === item.to ? ' active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 