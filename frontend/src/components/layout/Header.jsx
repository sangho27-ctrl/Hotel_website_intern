import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { brand } from '../../config/brand'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
          <span className="header__logo-name">{brand.name}</span>
          <span className="header__logo-subtitle">{brand.subtitle}</span>
        </Link>

        <nav>
          <ul className="header__nav">
            {brand.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to={brand.bookingUrl} className="header__book-btn">
          Book Now
        </Link>

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
            className={({ isActive }) => isActive ? 'active' : ''}
            end={item.path === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to={brand.bookingUrl}
          className="header__mobile-book"
          onClick={() => setMenuOpen(false)}
        >
          Book Now
        </Link>
      </nav>
    </header>
  )
}
