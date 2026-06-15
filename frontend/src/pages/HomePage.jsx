import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import HeroSlider from '../components/home/HeroSlider'
import { brand } from '../config/brand'
import { apiUrl } from '../config/api'
import { Landmark, Waves, MapPin } from 'lucide-react'
import './HomePage.css'

const FEATURES = [
  { icon: Landmark, title: 'Georgian Architecture', desc: 'Original 1820s townhouse lovingly restored with period features throughout.' },
  { icon: Waves,    title: 'One Street from the Sea', desc: 'Stroll to Brighton beach and the famous seafront in under two minutes.' },
  { icon: MapPin,   title: 'Heart of Kemp Town', desc: 'Steps from independent cafés, galleries, and Brighton\'s vibrant Lanes.' },
]

const OFFERS_PREVIEW = [
  { id: 1, title: 'Midweek Escape', description: 'Stay Sunday to Thursday and enjoy 20% off our standard room rates. Perfect for a quiet getaway away from the weekend crowds.', valid: 'Valid until 31 August 2026', badge: '20% off' },
  { id: 2, title: 'Brighton Boutique Breakfast', description: 'Start your day right with our full English breakfast included in your room rate. Available on all rooms throughout the year.', valid: 'Available year-round', badge: 'B&B rate' },
  { id: 3, title: 'Long Stay Offer', description: 'Book 4 nights or more and receive a complimentary bottle of local Sussex sparkling wine on arrival.', valid: 'Valid on stays of 4+ nights', badge: 'Free gift' },
  { id: 4, title: 'Early Bird Rate', description: 'Book at least 30 days in advance and save 15% on your entire stay. Our best rate for planners.', valid: 'Must book 30+ days ahead', badge: '15% off' },
]


const STATIC_ROOMS_PREVIEW = [
  { id: 1, name: 'Room 0, Deluxe King Room',   size: 18, description: 'This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable.', images: [] },
  { id: 2, name: 'Room 3 Front Aspect Luxury Suite', size: 25, description: 'Our largest room featuring a superking bed, freestanding roll top bath and chandelier for the ultimate in luxury.', images: [] },
  { id: 3, name: 'Room 6 Front Aspect Junior Suite', size: 24, description: 'A beautiful room on the second floor featuring a superking bed and freestanding roll top bath.', images: [] },
]

export default function HomePage() {
  useSEO({
    title: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    description: 'Colson House is a boutique Georgian townhouse hotel in Brighton\'s Kemp Town, one street from the seafront. Book direct for the best rates.',
    ogTitle: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    ogDescription: 'A boutique hotel in the heart of Brighton\'s Kemp Town — one street from the seafront since 1997.',
  })

  const [rooms, setRooms] = useState(STATIC_ROOMS_PREVIEW)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactStatus, setContactStatus] = useState(null)
  const [contactSending, setContactSending] = useState(false)
  const featuresRef       = useReveal()
  const aboutRef          = useReveal()
  const roomsHeaderRef    = useReveal()
  const roomsGridRef      = useReveal()
  const offersHeaderRef   = useReveal()
  const offersGridRef     = useReveal()
  const attractHeaderRef  = useReveal()
  const attractGridRef    = useReveal()
  const reviewsHeaderRef  = useReveal()
  const reviewsGridRef    = useReveal()
  const contactRef        = useReveal()

  async function handleContactSubmit(e) {
    e.preventDefault()
    setContactSending(true)
    setContactStatus(null)
    try {
      const res = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })
      if (!res.ok) throw new Error()
      setContactStatus('success')
      setContactForm({ name: '', email: '', message: '' })
    } catch {
      setContactStatus('error')
    } finally {
      setContactSending(false)
    }
  }

  useEffect(() => {
    fetch(apiUrl('/api/rooms'))
      .then((r) => r.json())
      .then((data) => setRooms(Array.isArray(data) && data.length > 0 ? data.slice(0, 3) : STATIC_ROOMS_PREVIEW))
      .catch(() => setRooms(STATIC_ROOMS_PREVIEW))
  }, [])

  return (
    <div className="home">
      <HeroSlider />

      {/* Features strip */}
      <section className="home__features" id="features">
        <div className="home__features-inner reveal stagger" ref={featuresRef}>
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="home__feature reveal">
                <span className="home__feature-line" />
                <Icon className="home__feature-icon" size={24} strokeWidth={1.5} />
                <h3 className="home__feature-title">{f.title}</h3>
                <p className="home__feature-desc">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* About — light section */}
      <section className="home__about" id="about">
        <div className="home__about-inner reveal" ref={aboutRef}>
          <div className="home__about-text">
            <span className="home__eyebrow home__eyebrow--dark">Our Story</span>
            <h2 className="home__about-title home__about-title--dark">Boutique Comfort in the Heart of Kemp Town</h2>
            <p className="home__about-body home__about-body--dark">
              We are a boutique style guest accommodation occupying a fully refurbished 1890s built four storey Georgian
              townhouse situated in a quiet residential street in the fashionable Kemp Town area of Brighton. Just one
              street back from the seafront and a ten minute walk to the pier, city centre, lanes and the marina — we
              offer a great base from which you can explore all that Brighton has to offer, in comfort and style.
            </p>
            <p className="home__about-body home__about-body--dark">
              We have nine completely different rooms ranging from cosy compact doubles, to medium sized luxury and
              superior doubles with superking beds, through to our two suites featuring freestanding roll top baths.
              All rooms have ensuite wet rooms with underfloor heating and Grohe rain showers — sumptuously decorated
              to give that high end feel without the hefty price tag.
            </p>
            <p className="home__about-body home__about-body--dark">
              We operate a self check-in procedure via a coded front door, so you can arrive from 2pm and come and go
              as you please using your own unique door code. Our best rates are always available by booking direct.
            </p>
            <p className="home__about-body home__about-body--dark">
              <strong>Parking</strong> — Parking can be difficult in Brighton. There are no car parks, so all parking
              is on street. When you book, we will email you precise parking instructions that will get you parked
              quickly, cheaply, and close to us with no fuss.
            </p>
            <Link to="/rooms" className="home__about-link home__about-link--dark">
              View Our Rooms →
            </Link>
          </div>
          <div className="home__about-image">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80"
              alt="Colson House Brighton"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Rooms Preview — dark section */}
      {rooms.length > 0 && (
        <section className="home__rooms-preview" id="rooms">
          <div className="home__section-header reveal" ref={roomsHeaderRef}>
            <span className="home__eyebrow">Our Rooms</span>
            <h2 className="home__section-title">Each Room Individually Designed</h2>
            <p className="home__section-sub">Period charm with modern comforts — no two rooms alike.</p>
          </div>
          <div className="home__rooms-grid stagger" ref={roomsGridRef}>
            {rooms.map((room) => (
              <Link key={room.id} to="/rooms" className="home__room-card reveal">
                <div className="home__room-card-img">
                  {room.images?.[0] ? (
                    <img
                      src={room.images[0].startsWith('http') ? room.images[0] : `/storage/${room.images[0]}`}
                      alt={room.name}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  ) : null}
                </div>
                <div className="home__room-card-body">
                  <div className="home__room-card-meta">
                    {room.size && <span>{room.size} m²</span>}
                  </div>
                  <h3 className="home__room-card-name">{room.name}</h3>
                  <p className="home__room-card-desc">{room.description?.slice(0, 100)}…</p>
                  <span className="home__room-card-btn">View Room</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="home__section-footer">
            <Link to="/rooms" className="home__hero-btn home__hero-btn--outline">View All Rooms</Link>
          </div>
        </section>
      )}

      {/* Special Offers — light section */}
      <section className="home__offers" id="offers">
        <div className="home__section-header reveal" ref={offersHeaderRef}>
          <span className="home__eyebrow home__eyebrow--dark">Direct Bookings Only</span>
          <h2 className="home__section-title home__section-title--dark">Special Offers</h2>
          <p className="home__section-sub home__section-sub--dark">Exclusive deals you won't find anywhere else.</p>
        </div>
        <div className="home__offers-grid stagger" ref={offersGridRef}>
          {OFFERS_PREVIEW.map((offer) => (
            <article key={offer.id} className="home__offer-card reveal">
              <div className="home__offer-badge">{offer.badge}</div>
              <div className="home__offer-body">
                <h3 className="home__offer-title">{offer.title}</h3>
                <p className="home__offer-desc">{offer.description}</p>
                <span className="home__offer-valid">{offer.valid}</span>
                <a href={brand.bookingUrl} className="home__offer-btn" target="_blank" rel="noopener noreferrer">Book This Offer</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Local Attractions — dark section */}
      <section className="home__attractions-preview" id="attractions">
        <div className="home__section-header reveal" ref={attractHeaderRef}>
          <span className="home__eyebrow">Explore Brighton</span>
          <h2 className="home__section-title">Local Attractions</h2>
          <p className="home__section-sub">Everything Brighton has to offer — right on your doorstep.</p>
        </div>
        <div className="home__attractions-grid stagger" ref={attractGridRef}>
          {[
            { cat: 'Beach & Seafront', walk: '2 min walk', name: 'Brighton Beach & Palace Pier', desc: 'Just two minutes on foot. Brighton\'s famous pebble beach and the Victorian Palace Pier with its funfair, restaurants, and arcades.' },
            { cat: 'Culture', walk: '10 min walk', name: 'Royal Pavilion', desc: 'A magnificent Regency-era palace built for King George IV, with extraordinary Indo-Saracenic architecture and beautifully restored interiors.' },
            { cat: 'Shopping', walk: '8 min walk', name: 'The Lanes & North Laine', desc: 'Brighton\'s famous maze of independent boutiques, antique shops, cafés, and jewellers — all within easy walking distance of Brighton Inn.' },
            { cat: 'Nature', walk: '30 min drive', name: 'South Downs National Park', desc: 'Miles of open downland, chalk cliffs, and panoramic sea views — accessible by bus or a short drive from the hotel.' },
            { cat: 'Arts', walk: '5 min walk', name: 'Brighton Museum & Art Gallery', desc: 'World-class collections of fine art, fashion, and archaeology in a stunning Edwardian building at the heart of the Royal Pavilion estate.' },
            { cat: 'Food & Drink', walk: 'On your doorstep', name: 'Kemp Town Village', desc: 'Colson House sits in the heart of Kemp Town — Brighton\'s most characterful neighbourhood, packed with independent restaurants, bars, and delis.' },
          ].map((a) => (
            <div key={a.name} className="home__attraction-card reveal">
              <div className="home__attraction-meta">
                <span className="home__attraction-cat">{a.cat}</span>
                <span className="home__attraction-walk">{a.walk}</span>
              </div>
              <h3 className="home__attraction-name">{a.name}</h3>
              <p className="home__attraction-desc">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="home__section-footer">
          <Link to="/attractions" className="home__hero-btn home__hero-btn--outline">Explore Brighton</Link>
        </div>
      </section>

      {/* Reviews — light section */}
      <section className="home__reviews" id="reviews">
        <div className="home__section-header reveal" ref={reviewsHeaderRef}>
          <span className="home__eyebrow home__eyebrow--dark">What Guests Say</span>
          <h2 className="home__section-title home__section-title--dark">Guest Reviews</h2>
          <p className="home__section-sub home__section-sub--dark">Read genuine reviews from our guests — verified by FreeToBook.</p>
        </div>
        <div className="home__reviews-embed reveal" ref={reviewsGridRef}>
          <iframe
            src="https://www.freetobook.com/reviews/all?w_id=19678&w_tkn=5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb"
            title="Brighton Inn Guest Reviews"
            className="home__reviews-iframe"
            frameBorder="0"
            loading="lazy"
          />
          <div className="home__reviews-fallback">
            <a
              href="https://www.freetobook.com/reviews/all?w_id=19678&w_tkn=5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb"
              target="_blank"
              rel="noopener noreferrer"
              className="home__reviews-link"
            >
              Open reviews in a new tab →
            </a>
          </div>
        </div>
      </section>

      {/* Contact — dark section */}
      <section className="home__contact" id="contact">
        <div className="home__contact-inner reveal" ref={contactRef}>
          <div className="home__contact-left">
            <span className="home__eyebrow">Get in Touch</span>
            <h2 className="home__section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>
              Contact Us
            </h2>
            <form className="home__contact-form" onSubmit={handleContactSubmit} noValidate>
              <input
                className="home__contact-input"
                type="text"
                placeholder="Name"
                value={contactForm.name}
                onChange={(e) => setContactForm(f => ({ ...f, name: e.target.value }))}
                required
              />
              <input
                className="home__contact-input"
                type="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={(e) => setContactForm(f => ({ ...f, email: e.target.value }))}
                required
              />
              <textarea
                className="home__contact-input home__contact-textarea"
                placeholder="Message"
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm(f => ({ ...f, message: e.target.value }))}
                required
              />
              {contactStatus === 'success' && (
                <p className="home__contact-msg home__contact-msg--ok">Thank you — we'll be in touch shortly.</p>
              )}
              {contactStatus === 'error' && (
                <p className="home__contact-msg home__contact-msg--err">Something went wrong. Please try again.</p>
              )}
              <button type="submit" className="home__contact-btn" disabled={contactSending}>
                {contactSending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="home__contact-right">
            <h2 className="home__section-title" style={{ textAlign: 'left', marginBottom: '28px' }}>
              Find Us
            </h2>
            <ul className="home__contact-info">
              <li><span>Address</span><span>{brand.address}</span></li>
              <li><span>Phone</span><a href={`tel:${brand.phone}`}>{brand.phone}</a></li>
              <li><span>Email</span><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><span>Check-in</span><span>From 3:00 pm</span></li>
              <li><span>Check-out</span><span>By 11:00 am</span></li>
            </ul>
            <div className="home__contact-map">
              <iframe
                title="Colson House location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.5!2d-0.1194!3d50.8193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ5JzA5LjUiTiAwwrAwNyc0OS44Ilc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
