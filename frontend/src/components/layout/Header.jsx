import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { brand } from '../../config/brand'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function getAnchor(path) {
    return path === '/' ? 'home' : path.slice(1)
  }

  function handleNavClick(e, item) {
    e.preventDefault()
    setMenuOpen(false)

    if (location.pathname === '/') {
      // Already on main page — scroll to section
      const el = document.getElementById(getAnchor(item.path))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // On another page — navigate to main page then scroll
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(getAnchor(item.path))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
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
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo_brighton.png" alt={brand.name} className="header__logo-img" />
        </Link>

        <nav>
          <ul className="header__nav">
            {brand.nav.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={isActive(item.path) ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties"
          className="header__book-btn"
          target="_blank"
          rel="noopener noreferrer"
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
            key={item.path}
            href={item.path}
            className={isActive(item.path) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, item)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties"
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
