import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import API_BASE from '../config/api'
import RoomCard from '../components/rooms/RoomCard'
import './MainPage.css'

/* ─── Static data ─── */
const ATTRACTIONS = [
  {
    id: 1,
    category: 'Beach & Seafront',
    name: 'Brighton Beach & Palace Pier',
    desc: 'Just two minutes on foot. Brighton\'s iconic pebble beach and the Victorian Palace Pier with its funfair, restaurants, and arcades.',
    distance: '2 min walk',
  },
  {
    id: 2,
    category: 'Culture',
    name: 'Royal Pavilion',
    desc: 'A magnificent Regency-era palace built for King George IV, with extraordinary Indo-Saracenic architecture and beautifully restored interiors.',
    distance: '10 min walk',
  },
  {
    id: 3,
    category: 'Shopping',
    name: 'The Lanes & North Laine',
    desc: 'Brighton\'s famous maze of independent boutiques, antique shops, cafés, and jewellers — all within easy walking distance of Brighton Inn.',
    distance: '8 min walk',
  },
  {
    id: 4,
    category: 'Nature',
    name: 'South Downs National Park',
    desc: 'Miles of open downland, chalk cliffs, and panoramic sea views — accessible by bus or a short drive from the hotel.',
    distance: '20 min drive',
  },
  {
    id: 5,
    category: 'Arts',
    name: 'Brighton Museum & Art Gallery',
    desc: 'World-class collections of fine art, fashion, and archaeology in a stunning Edwardian building at the heart of the Royal Pavilion estate.',
    distance: '12 min walk',
  },
  {
    id: 6,
    category: 'Food & Drink',
    name: 'Kemp Town Village',
    desc: 'Brighton Inn sits in the heart of Kemp Town — Brighton\'s most characterful neighbourhood, packed with independent restaurants, bars, and delis.',
    distance: 'On your doorstep',
  },
]

const FEATURES = [
  { title: 'Georgian Architecture', desc: 'Original 1820s townhouse lovingly restored with period features throughout.' },
  { title: 'One Street from the Sea', desc: 'Stroll to Brighton beach and the famous seafront in under two minutes.' },
  { title: 'Heart of Kemp Town', desc: 'Steps from independent cafés, galleries, and Brighton\'s vibrant Lanes.' },
]

const OFFERS = [
  { id: 1, title: 'Midweek Escape', description: 'Stay Sunday to Thursday and enjoy 20% off our standard room rates. Perfect for a quiet getaway away from the weekend crowds.', valid: 'Valid until 31 August 2026', badge: '20% off' },
  { id: 2, title: 'Brighton Boutique Breakfast', description: 'Start your day right with our full English breakfast included in your room rate. Available on all rooms throughout the year.', valid: 'Available year-round', badge: 'B&B rate' },
  { id: 3, title: 'Long Stay Offer', description: 'Book 4 nights or more and receive a complimentary bottle of local Sussex sparkling wine on arrival.', valid: 'Valid on stays of 4+ nights', badge: 'Free gift' },
  { id: 4, title: 'Early Bird Rate', description: 'Book at least 30 days in advance and save 15% on your entire stay. Our best rate for planners.', valid: 'Must book 30+ days ahead', badge: '15% off' },
]

const REVIEWS = [
  { id: 1, author: 'Sarah M.', rating: 5, date: 'March 2026', source: 'Google', text: 'Absolutely wonderful stay. The room was beautifully decorated, the bed was incredibly comfortable, and the location is perfect — we walked to the beach in two minutes. Will definitely return.' },
  { id: 2, author: 'James & Emily', rating: 5, date: 'February 2026', source: 'Booking.com', text: 'We stayed for our anniversary and were blown away by the attention to detail. The hosts were warm and welcoming, and the breakfast recommendations they gave us were spot on.' },
  { id: 3, author: 'Charlotte B.', rating: 5, date: 'January 2026', source: 'TripAdvisor', text: 'Such a gem in Brighton. The Georgian architecture is stunning and the rooms feel authentic without sacrificing any modern comforts. Quiet, stylish, and perfectly located.' },
  { id: 4, author: 'Tom H.', rating: 4, date: 'December 2025', source: 'Google', text: 'Really lovely boutique hotel. Stayed for two nights over Christmas and felt very well looked after. The room overlooking the garden was peaceful and cosy.' },
  { id: 5, author: 'Priya K.', rating: 5, date: 'November 2025', source: 'Booking.com', text: 'One of the best boutique hotels I\'ve stayed in. Everything was immaculate, the location is unbeatable, and the personal touches made all the difference. Highly recommended.' },
  { id: 6, author: 'David & Sue L.', rating: 5, date: 'October 2025', source: 'TripAdvisor', text: 'We have stayed at Brighton Inn three times now and it never disappoints. Feels like a home away from home. The Brighton Suite is exceptional — treat yourself.' },
]

function Stars({ rating }) {
  return (
    <span className="mp-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'mp-stars__on' : 'mp-stars__off'}>★</span>
      ))}
    </span>
  )
}

/* ─── Contact form ─── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
    finally { setSending(false) }
  }

  return (
    <form className="mp-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="mp-field">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mp-field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mp-field">
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" name="message" rows={5} value={form.message} onChange={handleChange} required />
      </div>
      {status === 'success' && <p className="mp-form-ok">Thank you — we'll be in touch shortly.</p>}
      {status === 'error' && <p className="mp-form-err">Something went wrong. Please try again.</p>}
      <button type="submit" className="mp-form-btn" disabled={sending}>
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

/* ─── Main page ─── */
export default function MainPage() {
  useSEO({
    title: 'Brighton Inn Brighton | Boutique Hotel in Kemp Town',
    description: 'Brighton Inn is a boutique Georgian townhouse hotel in Brighton\'s Kemp Town, one street from the seafront. Book direct for the best rates.',
  })

  const [rooms, setRooms] = useState([])
  const featuresRef    = useReveal()
  const aboutRef       = useReveal()
  const offersRef      = useReveal()
  const attractionsRef = useReveal()
  const reviewsRef     = useReveal()
  const contactRef     = useReveal()

  useEffect(() => {
    fetch(`${API_BASE}/api/rooms`).then((r) => r.json()).then(setRooms).catch(() => {})
  }, [])

  return (
    <div className="mp">

      {/* ══════════════ HERO ══════════════ */}
      <section id="home" className="mp-hero">
        <div className="mp-hero__overlay" />
        <div className="mp-hero__content">
          <span className="mp-hero__eyebrow">Brighton · Est. 1997</span>
          <h1 className="mp-hero__title">Welcome to<br />Brighton Inn</h1>
          <p className="mp-hero__sub">A boutique Georgian townhouse hotel in the heart of Brighton's Kemp Town</p>
          <div className="mp-hero__ctas">
            <a href="#rooms" className="mp-btn mp-btn--primary">Explore Rooms</a>
            <a href="#contact" className="mp-btn mp-btn--outline">Book Now</a>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <div className="mp-features" ref={featuresRef}>
        {FEATURES.map((f, i) => (
          <div key={f.title} className="mp-feature mp-feature-anim" style={{ transitionDelay: `${i * 120}ms` }}>
            <span className="mp-feature__line" />
            <h3 className="mp-feature__title">{f.title}</h3>
            <p className="mp-feature__desc">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* ══════════════ DIVIDER ══════════════ */}
      <div className="mp-divider" />

      {/* ══════════════ ABOUT ══════════════ */}
      <section className="mp-about">
        <div className="mp-about__inner reveal" ref={aboutRef}>
          <div className="mp-about__text">
            <span className="mp-eyebrow">Our Story</span>
            <h2 className="mp-about__title">A Home Away from Home in Brighton</h2>
            <p className="mp-about__body">Brighton Inn has been welcoming guests to Brighton since 1997. Set in a beautifully preserved Georgian townhouse, just one street from the seafront, we offer a warm and personal alternative to the big hotels.</p>
            <p className="mp-about__body">Each of our individually designed rooms combines original period features with modern comforts. From the sweeping Brighton Suite to the peaceful Garden Room, every stay is a little different.</p>
            <a href="#rooms" className="mp-about__link">View Our Rooms →</a>
          </div>
          <div className="mp-about__image">
            <img src="/images/about.webp" alt="Inside Brighton Inn Brighton" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ══════════════ DIVIDER ══════════════ */}
      <div className="mp-divider" />

      {/* ══════════════ ROOMS ══════════════ */}
      <section id="rooms" className="mp-section mp-rooms">
        <div className="mp-section__head">
          <span className="mp-eyebrow">Brighton Inn · Brighton</span>
          <h2 className="mp-section__title">Our Rooms</h2>
          <p className="mp-section__sub">Each room individually designed — period charm with modern comforts</p>
        </div>

        {rooms.length > 0 ? (
          <div className="mp-rooms__grid">
            {rooms.map((room, i) => (
              <div key={room.id} className="mp-rooms__card-wrap" style={{ animationDelay: `${i * 80}ms` }}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mp-rooms__skeleton-grid">
            {[1,2,3].map((i) => <div key={i} className="mp-skeleton" />)}
          </div>
        )}
      </section>

      {/* ══════════════ DIVIDER ══════════════ */}
      <div className="mp-divider" />

      {/* ══════════════ OFFERS ══════════════ */}
      <section id="offers" className="mp-section mp-offers">
        <div className="mp-section__head">
          <span className="mp-eyebrow">Direct Bookings Only</span>
          <h2 className="mp-section__title">Special Offers</h2>
          <p className="mp-section__sub">Exclusive deals you won't find anywhere else</p>
        </div>

        <div className="mp-offers__grid stagger" ref={offersRef}>
          {OFFERS.map((offer) => (
            <article key={offer.id} className="mp-offer-card reveal">
              <div className="mp-offer-card__badge">{offer.badge}</div>
              <h3 className="mp-offer-card__title">{offer.title}</h3>
              <p className="mp-offer-card__desc">{offer.description}</p>
              <span className="mp-offer-card__valid">{offer.valid}</span>
              <a href="#contact" className="mp-offer-card__btn">Book This Offer</a>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════ DIVIDER ══════════════ */}
      <div className="mp-divider" />

      {/* ══════════════ LOCAL ATTRACTIONS ══════════════ */}
      <section id="attractions" className="mp-section mp-attractions">
        <div className="mp-section__head">
          <span className="mp-eyebrow">Explore Brighton</span>
          <h2 className="mp-section__title">Local Attractions</h2>
          <p className="mp-section__sub">Everything Brighton has to offer — right on your doorstep</p>
        </div>

        <div className="mp-attractions__grid stagger" ref={attractionsRef}>
          {ATTRACTIONS.map((a) => (
            <article key={a.id} className="mp-attraction-card reveal">
              <div className="mp-attraction-card__top">
                <span className="mp-attraction-card__category">{a.category}</span>
                <span className="mp-attraction-card__distance">{a.distance}</span>
              </div>
              <h3 className="mp-attraction-card__name">{a.name}</h3>
              <p className="mp-attraction-card__desc">{a.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════ DIVIDER ══════════════ */}
      <div className="mp-divider" />

      {/* ══════════════ REVIEWS ══════════════ */}
      <section id="reviews" className="mp-section mp-reviews">
        <div className="mp-section__head">
          <span className="mp-eyebrow">What Guests Say</span>
          <h2 className="mp-section__title">Guest Reviews</h2>
          <div className="mp-reviews__avg">
            <Stars rating={5} />
            <span className="mp-reviews__score">4.9</span>
            <span className="mp-reviews__label">average · 6 reviews</span>
          </div>
        </div>

        <div className="mp-reviews__grid stagger" ref={reviewsRef}>
          {REVIEWS.map((r) => (
            <article key={r.id} className="mp-review-card reveal">
              <Stars rating={r.rating} />
              <p className="mp-review-card__text">"{r.text}"</p>
              <footer className="mp-review-card__footer">
                <span className="mp-review-card__author">{r.author}</span>
                <span className="mp-review-card__meta">{r.date} · {r.source}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════ DIVIDER ══════════════ */}
      <div className="mp-divider" />

      {/* ══════════════ CONTACT ══════════════ */}
      <section id="contact" className="mp-section mp-contact">
        <div className="mp-section__head">
          <span className="mp-eyebrow">Get in Touch</span>
          <h2 className="mp-section__title">Contact Us</h2>
        </div>

        <div className="mp-contact__inner reveal" ref={contactRef}>
          <div className="mp-contact__form-col">
            <h3 className="mp-contact__col-title">Send a Message</h3>
            <ContactForm />
          </div>

          <div className="mp-contact__info-col">
            <h3 className="mp-contact__col-title">Find Us</h3>
            <ul className="mp-contact__info">
              <li><span>Address</span><span>{brand.address}</span></li>
              <li><span>Phone</span><a href={`tel:${brand.phone}`}>{brand.phone}</a></li>
              <li><span>Email</span><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><span>Check-in</span><span>From 3:00 PM</span></li>
              <li><span>Check-out</span><span>By 11:00 AM</span></li>
            </ul>
            <div className="mp-contact__map">
              <iframe
                title="Brighton Inn location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.5!2d-0.1194!3d50.8193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ5JzA5LjUiTiAwwrAwNyc0OS44Ilc!5e0!3m2!1sen!2suk!4v1"
                width="100%" height="260" style={{ border: 0 }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
