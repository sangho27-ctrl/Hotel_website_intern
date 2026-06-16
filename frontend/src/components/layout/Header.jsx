import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { brand } from '../../config/brand'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navClass = ({ isActive }) => isActive ? 'active' : undefined

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
        <NavLink to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo_brighton.png" alt={brand.name} className="header__logo-img" />
        </NavLink>

        <nav>
          <ul className="header__nav">
            {brand.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={navClass}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
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
          Check Availability
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
          <NavLink
            key={item.path}
            to={item.path}
            className={navClass}
            end={item.path === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties"
          className="header__mobile-book"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Check Availability
        </a>
      </nav>
    </header>
  )
}
