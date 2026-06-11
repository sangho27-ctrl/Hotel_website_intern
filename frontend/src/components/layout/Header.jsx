import { useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import { brand } from '../../config/brand'
import './Header.css'

function scrollToSection(hash) {
  const offset = 80
  const el = document.getElementById(hash)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate   = useNavigate()
  const location   = useLocation()

  function handleNavClick(e, item) {
    if (!item.hash) return
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection(item.hash)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(item.hash), 350)
    }
  }

  return (
    <header className="header">
      <div className="header__topbar">
        <a href={`tel:${brand.phone}`} className="header__topbar-item header__topbar-link">
          <span className="header__topbar-icon">✆</span>
          {brand.phone}
        </a>
        <a href={`mailto:${brand.email}`} className="header__topbar-item header__topbar-link">
          <span className="header__topbar-icon">✉</span>
          {brand.email}
        </a>
        <span className="header__topbar-item">
          <span className="header__topbar-icon">◎</span>
          {brand.address}
        </span>
      </div>

      <div className="header__main">
        <Link to="/" className="header__logo">
          <span className="header__logo-name">{brand.name}</span>
          <span className="header__logo-subtitle">{brand.subtitle}</span>
        </Link>

        <nav>
          <ul className="header__nav">
            {brand.nav.map((item) => (
              <li key={item.label}>
                {item.hash ? (
                  <a
                    href={`#${item.hash}`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink to={item.path} end className={({ isActive }) => isActive ? 'active' : ''}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href={brand.bookingUrl} className="header__book-btn" target="_blank" rel="noopener noreferrer">
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
          item.hash ? (
            <a
              key={item.label}
              href={`#${item.hash}`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={item.path}
              end
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          )
        ))}
        <a
          href={brand.bookingUrl}
          className="header__mobile-book"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Book Now
        </a>
      </nav>
    </header>
  )
}
