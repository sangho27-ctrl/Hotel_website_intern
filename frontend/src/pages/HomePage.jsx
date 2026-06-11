import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import HeroSlider from '../components/home/HeroSlider'
import { Landmark, Waves, MapPin } from 'lucide-react'
import './HomePage.css'

const FEATURES = [
  { icon: Landmark, title: 'Georgian Architecture', desc: 'Original 1820s townhouse lovingly restored with period features throughout.' },
  { icon: Waves,    title: 'One Street from the Sea', desc: 'Stroll to Brighton beach and the famous seafront in under two minutes.' },
  { icon: MapPin,   title: 'Heart of Kemp Town', desc: 'Steps from independent cafés, galleries, and Brighton\'s vibrant Lanes.' },
]

export default function HomePage() {
  useSEO({
    title: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    description: 'Colson House is a boutique Georgian townhouse hotel in Brighton\'s Kemp Town, one street from the seafront. Book direct for the best rates.',
    ogTitle: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    ogDescription: 'A boutique hotel in the heart of Brighton\'s Kemp Town — one street from the seafront since 1997.',
  })
  const featuresRef = useReveal()
  const aboutRef    = useReveal()
  const ctaRef      = useReveal()

  return (
    <div className="home">
      <HeroSlider />

      {/* Features strip */}
      <section className="home__features">
        <div className="home__features-inner reveal stagger" ref={featuresRef}>
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="home__feature reveal">
                <Icon className="home__feature-icon" size={28} strokeWidth={1.5} />
                <h3 className="home__feature-title">{f.title}</h3>
                <p className="home__feature-desc">{f.desc}</p>
              </div>
            )
          })}
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
            <img
              src="/storage/rooms/room3/room3.avif"
              alt="Colson House Brighton"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
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
