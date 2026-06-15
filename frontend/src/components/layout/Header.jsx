import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { brand } from '../../config/brand'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function getAnchor(item) {
    // Support both {path} and legacy {anchor} config formats
    if (item.anchor) return item.anchor
    if (!item.path || item.path === '/') return 'home'
    return item.path.replace(/^\//, '')
  }

  function scrollToAnchor(anchor) {
    const el = document.getElementById(anchor)
    if (!el) return
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  function handleNavClick(e, item) {
    e.preventDefault()
    setMenuOpen(false)

    const anchor = getAnchor(item)

    if (location.pathname === '/') {
      scrollToAnchor(anchor)
    } else {
      navigate('/')
      setTimeout(() => scrollToAnchor(anchor), 350)
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
              <li key={item.path || item.anchor}>
                <a
                  href={item.path || `#${item.anchor}`}
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
            key={item.path || item.anchor}
            href={item.path || `#${item.anchor}`}
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
