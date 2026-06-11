import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import HeroSlider from '../components/home/HeroSlider'
import { brand } from '../config/brand'
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

const REVIEWS_PREVIEW = [
  { id: 1, author: 'Sarah M.', rating: 5, date: 'March 2026', source: 'Google', text: 'Absolutely wonderful stay. The room was beautifully decorated, the bed was incredibly comfortable, and the location is perfect — we walked to the beach in two minutes. Will definitely return.' },
  { id: 2, author: 'James & Emily', rating: 5, date: 'February 2026', source: 'Booking.com', text: 'We stayed for our anniversary and were blown away by the attention to detail. The hosts were warm and welcoming, and the breakfast recommendations they gave us were spot on.' },
  { id: 3, author: 'Charlotte B.', rating: 5, date: 'January 2026', source: 'TripAdvisor', text: 'Such a gem in Brighton. The Georgian architecture is stunning and the rooms feel authentic without sacrificing any modern comforts. Quiet, stylish, and perfectly located.' },
  { id: 4, author: 'Tom H.', rating: 4, date: 'December 2025', source: 'Google', text: 'Really lovely boutique hotel. Stayed for two nights over Christmas and felt very well looked after. The room overlooking the garden was peaceful and cosy.' },
  { id: 5, author: 'Priya K.', rating: 5, date: 'November 2025', source: 'Booking.com', text: 'One of the best boutique hotels I\'ve stayed in. Everything was immaculate, the location is unbeatable, and the personal touches made all the difference. Highly recommended.' },
  { id: 6, author: 'David & Sue L.', rating: 5, date: 'October 2025', source: 'TripAdvisor', text: 'We have stayed at Colson House three times now and it never disappoints. Feels like a home away from home. The Brighton Suite is exceptional — treat yourself.' },
]

function Stars({ rating }) {
  return (
    <span className="home__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'home__star--filled' : 'home__star--empty'}>★</span>
      ))}
    </span>
  )
}

export default function HomePage() {
  useSEO({
    title: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    description: 'Colson House is a boutique Georgian townhouse hotel in Brighton\'s Kemp Town, one street from the seafront. Book direct for the best rates.',
    ogTitle: 'Colson House Brighton | Boutique Hotel in Kemp Town',
    ogDescription: 'A boutique hotel in the heart of Brighton\'s Kemp Town — one street from the seafront since 1997.',
  })

  const [rooms, setRooms] = useState([])
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
      const res = await fetch('/api/contact', {
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

  const STATIC_ROOMS_PREVIEW = [
    { id: 1, name: 'Deluxe Double Room', size: 32, price: 185, description: 'A fireplace, private bathroom, seating area and flat-screen TV. One street from Brighton seafront.', images: [] },
    { id: 2, name: 'Four Poster Room',   size: 22, price: 130, description: 'Romance and period charm with a stunning four poster bed, fireplace and en-suite bathroom.', images: [] },
    { id: 3, name: 'Deluxe Balcony Room', size: 16, price: 95, description: 'Wake up to sea breezes on your private balcony. Flat-screen TV, desk and en-suite shower.', images: [] },
  ]

  useEffect(() => {
    fetch('/api/rooms')
      .then((r) => r.json())
      .then((data) => setRooms(Array.isArray(data) ? data.slice(0, 3) : []))
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
            <h2 className="home__about-title home__about-title--dark">A Home Away from Home in Brighton</h2>
            <p className="home__about-body home__about-body--dark">
              Colson House has been welcoming guests to Brighton since 1997. Set in a beautifully
              preserved Georgian townhouse, just one street from the seafront, we offer a warm and
              personal alternative to the big hotels.
            </p>
            <p className="home__about-body home__about-body--dark">
              Each of our individually designed rooms combines original period features with
              modern comforts. From the sweeping Brighton Suite to the peaceful Garden Room, every
              stay is a little different.
            </p>
            <Link to="/rooms" className="home__about-link home__about-link--dark">
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
              <Link key={room.id} to={`/rooms/${room.id}`} className="home__room-card reveal">
                <div className="home__room-card-img">
                  <img
                    src={room.images?.[0] || `/storage/rooms/room${room.id}/room${room.id}.avif`}
                    alt={room.name}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="home__room-card-body">
                  <div className="home__room-card-meta">
                    {room.size && <span>{room.size} m²</span>}
                    {room.price && <span>£{room.price}/night</span>}
                  </div>
                  <h3 className="home__room-card-name">{room.name}</h3>
                  <p className="home__room-card-desc">{room.description?.slice(0, 100)}…</p>
                  <span className="home__room-card-btn">Book Now</span>
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
                <Link to="/book" className="home__offer-btn">Book This Offer</Link>
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
          <div className="home__reviews-avg">
            <Stars rating={5} />
            <span className="home__reviews-score">4.9</span>
            <span className="home__reviews-label">average · 6 reviews</span>
          </div>
        </div>
        <div className="home__reviews-grid stagger" ref={reviewsGridRef}>
          {REVIEWS_PREVIEW.map((r) => (
            <article key={r.id} className="home__review-card reveal">
              <Stars rating={r.rating} />
              <p className="home__review-text">"{r.text}"</p>
              <footer className="home__review-footer">
                <span className="home__review-author">{r.author}</span>
                <span className="home__review-meta">{r.date} · {r.source}</span>
              </footer>
            </article>
          ))}
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
