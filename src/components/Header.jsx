import { useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const handleNavClick = (link) => {
    setMenuOpen(false)
    setActiveLink(link)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-title">Portofolio</span>
          <span className="brand-subtitle">Muhammad Fikri</span>
        </div>
        <button
          className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeLink === 'skills' ? 'active' : ''}
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </a>
          <a
            href="#certificates"
            className={activeLink === 'certificates' ? 'active' : ''}
            onClick={() => handleNavClick('certificates')}
          >
            Certificates
          </a>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </a>
          <a
            href="#music"
            className={activeLink === 'music' ? 'active' : ''}
            onClick={() => handleNavClick('music')}
          >
            Music
          </a>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
