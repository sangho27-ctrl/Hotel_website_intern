import { Link } from 'react-router-dom'
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'
import { brand } from '../../config/brand'
import { useReveal } from '../../hooks/useReveal'
import './Footer.css'

export default function Footer() {
  const innerRef = useReveal()

  return (
    <footer className="footer">
      <div className="footer__inner reveal stagger" ref={innerRef}>
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <img src="/logo_brighton.svg" alt={brand.name} className="footer__logo-img" />
          </div>
          <p className="footer__tagline">{brand.tagline}</p>
          <div className="footer__social">
            <a
              href={brand.social.instagram}
              className="footer__social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
            <a
              href={brand.social.facebook}
              className="footer__social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconBrandFacebook size={18} stroke={1.5} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__links">
            {brand.footer.explore.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Information</h4>
          <ul className="footer__links">
            {brand.footer.information.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>
              <a href={`tel:${brand.phone}`}>{brand.phone}</a>
            </li>
            <li>{brand.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>{brand.copyright}</span>
        <span>{brand.builtBy}</span>
      </div>
    </footer>
  )
}
