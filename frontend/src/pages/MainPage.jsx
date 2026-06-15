import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { useRooms } from '../hooks/useRooms'
import { contactService } from '../services/contactService'
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
      await contactService.sendMessage(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch { 
      setStatus('error') 
    } finally { 
      setSending(false) 
    }
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

  const { rooms, loading, error } = useRooms()
  const featuresRef    = useReveal()
  const aboutRef       = useReveal()
  const offersRef      = useReveal()
  const attractionsRef = useReveal()
  const contactRef     = useReveal()

  useEffect(() => {
    const existing = document.getElementById('ftb-widget-script')
    if (existing) existing.remove()
    const script = document.createElement('script')
    script.id = 'ftb-widget-script'
    script.src = 'https://widget.freetobook.com/widget.js?v=20190925'
    script.async = true
    document.body.appendChild(script)
    return () => {
      const s = document.getElementById('ftb-widget-script')
      if (s) s.remove()
    }
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
            <a href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties" className="mp-btn mp-btn--outline" target="_blank" rel="noopener noreferrer">Book Now</a>
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

        {!loading && !error && rooms.length > 0 ? (
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
              <a href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties" className="mp-offer-card__btn" target="_blank" rel="noopener noreferrer">Book This Offer</a>
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
        </div>
        <div className="mp-reviews__widget">
          <div
            className="ftb-widget"
            data-pid="NpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb"
            data-style="review"
          />
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
