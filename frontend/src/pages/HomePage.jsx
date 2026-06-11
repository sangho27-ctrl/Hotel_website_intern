import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './HomePage.css'

const FEATURES = [
  { icon: '◈', title: 'Georgian Architecture', desc: 'Original 1820s townhouse lovingly restored with period features throughout.' },
  { icon: '◈', title: 'One Street from the Sea', desc: 'Stroll to Brighton beach and the famous seafront in under two minutes.' },
  { icon: '◈', title: 'Heart of Kemp Town', desc: 'Steps from independent cafés, galleries, and Brighton\'s vibrant Lanes.' },
]

export default function HomePage() {
  useSEO({
    title: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    description: 'Colson House is a boutique Georgian townhouse hotel in Brighton\'s Kemp Town, one street from the seafront. Book direct for the best rates.',
    ogTitle: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    ogDescription: 'A boutique hotel in the heart of Brighton\'s Kemp Town — one street from the seafront since 1997.',
  })
  const featuresRef = useReveal()
  const aboutRef = useReveal()
  const ctaRef = useReveal()

  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__hero-overlay" />
        <div className="home__hero-content">
          <span className="home__hero-eyebrow">Brighton · Est. 1997</span>
          <h1 className="home__hero-title">Welcome to<br />Colson House</h1>
          <p className="home__hero-sub">
            A boutique Georgian townhouse hotel in the heart of Brighton's Kemp Town
          </p>
          <div className="home__hero-ctas">
            <Link to="/rooms" className="home__hero-btn home__hero-btn--primary">
              Explore Rooms
            </Link>
            <Link to="/book" className="home__hero-btn home__hero-btn--outline">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="home__features">
        <div className="home__features-inner stagger" ref={featuresRef}>
          {FEATURES.map((f) => (
            <div key={f.title} className="home__feature home__feature-anim">
              <span className="home__feature-icon">{f.icon}</span>
              <h3 className="home__feature-title">{f.title}</h3>
              <p className="home__feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="home__about">
        <div className="home__about-inner reveal" ref={aboutRef}>
          <div className="home__about-text">
            <span className="home__eyebrow">Our Story</span>
            <h2 className="home__about-title">A Home Away from Home in Brighton</h2>
            <p className="home__about-body">
              Colson House has been welcoming guests to Brighton since 1997. Set in a beautifully
              preserved Georgian townhouse, just one street from the seafront, we offer a warm and
              personal alternative to the big hotels.
            </p>
            <p className="home__about-body">
              Each of our five individually designed rooms combines original period features with
              modern comforts. From the sweeping Brighton Suite to the peaceful Garden Room, every
              stay is a little different.
            </p>
            <Link to="/rooms" className="home__about-link">
              View Our Rooms →
            </Link>
          </div>
          <div className="home__about-image">
            <img src="/images/about.webp" alt="Inside Colson House Brighton" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home__cta-banner">
        <div className="home__cta-banner-inner reveal" ref={ctaRef}>
          <span className="home__eyebrow">Ready to visit?</span>
          <h2 className="home__cta-title">Book Your Stay in Brighton</h2>
          <Link to="/book" className="home__hero-btn home__hero-btn--primary">
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  )
}
