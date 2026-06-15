import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { brand } from '../../config/brand'
import './Header.css'

function scrollToSection(anchor) {
  const el = document.getElementById(anchor)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function handleNavClick(e, anchor) {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection(anchor)
    } else {
      // Navigate to homepage then scroll after render
      navigate('/')
      setTimeout(() => scrollToSection(anchor), 100)
    }
  }

  return (
    <header className="header">
      <div className="header__topbar">
        <span className="header__topbar-item">
          <span className="header__topbar-icon">✆</span>
          {brand.phone}
        </span>
        <span className="header__topbar-item">
          <span className="header__topbar-icon">✉</span>
          {brand.email}
        </span>
        <span className="header__topbar-item">
          <span className="header__topbar-icon">◎</span>
          {brand.address}
        </span>
      </div>

      <div className="header__main">
        <Link to="/" className="header__logo">
          <img src="/logo_brighton.svg" alt={brand.name} className="header__logo-img" />
        </Link>

        <nav>
          <ul className="header__nav">
            {brand.nav.map((item) => (
              <li key={item.anchor}>
                <a
                  href={`#${item.anchor}`}
                  onClick={(e) => handleNavClick(e, item.anchor)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="header__book-btn"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Book Now
        </a>

        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`header__mobile-nav${menuOpen ? ' open' : ''}`}>
        {brand.nav.map((item) => (
          <a
            key={item.anchor}
            href={`#${item.anchor}`}
            onClick={(e) => handleNavClick(e, item.anchor)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="header__mobile-book"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Book Now
        </a>
      </nav>
    </header>
  )
}
