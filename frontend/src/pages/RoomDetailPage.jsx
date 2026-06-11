import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import API_BASE from '../config/api'
import './RoomDetailPage.css'


export default function RoomDetailPage() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [otherRooms, setOtherRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  useSEO({
    title: room ? `${room.name} | Brighton Inn Brighton` : 'Room | Brighton Inn Brighton',
    description: room?.description ?? '',
  })

  useEffect(() => {
    setLoading(true)
    setActiveImg(0)
    fetch(`${API_BASE}/api/rooms/${id}`)
      .then((res) => { if (!res.ok) throw new Error('Room not found'); return res.json() })
      .then((data) => { setRoom(data); setLoading(false) })
      .catch((err) => { setError(err.message); setLoading(false) })
  }, [id])

  useEffect(() => {
    fetch(`${API_BASE}/api/rooms`)
      .then((r) => r.json())
      .then((data) => setOtherRooms(data.filter((r) => String(r.id) !== String(id)).slice(0, 3)))
      .catch(() => {})
  }, [id])

  const prevImg = () => setActiveImg((i) => (i - 1 + room.images.length) % room.images.length)
  const nextImg = () => setActiveImg((i) => (i + 1) % room.images.length)

  const prevLightbox = (e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + room.images.length) % room.images.length) }
  const nextLightbox = (e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % room.images.length) }

  if (loading) return (
    <div className="rd__loading">
      <div className="rd__loading-shimmer" />
    </div>
  )
  if (error) return <div className="rd__error"><p>{error}</p><Link to="/rooms">← Back to rooms</Link></div>
  if (!room) return null

  return (
    <div className="rd">

      {/* ── Breadcrumb ── */}
      <nav className="rd__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/rooms">Rooms</Link>
        <span>/</span>
        <span>{room.name}</span>
      </nav>

      {/* ── Hero slideshow ── */}
      {room.images?.length > 0 && (
        <div className="rd__hero">
          <img
            key={activeImg}
            src={room.images[activeImg]}
            alt={room.name}
            className="rd__hero-img"
          />
          <div className="rd__hero-overlay" />

          {room.images.length > 1 && (
            <>
              <button className="rd__hero-arrow rd__hero-arrow--prev" onClick={prevImg}>‹</button>
              <button className="rd__hero-arrow rd__hero-arrow--next" onClick={nextImg}>›</button>
              <div className="rd__hero-dots">
                {room.images.map((_, i) => (
                  <button
                    key={i}
                    className={`rd__hero-dot ${i === activeImg ? 'rd__hero-dot--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Thumbnail strip ── */}
      {room.images?.length > 1 && (
        <div className="rd__thumbs">
          {room.images.map((src, i) => (
            <button
              key={i}
              className={`rd__thumb ${i === activeImg ? 'rd__thumb--active' : ''}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={src} alt={`${room.name} ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* ── Main layout ── */}
      <div className="rd__layout">

        {/* ── Left: content ── */}
        <div className="rd__main">

          <div className="rd__meta">
            {room.size && <span className="rd__badge">{room.size} m²</span>}
            <span className="rd__badge rd__badge--muted">Boutique Hotel</span>
          </div>

          <h1 className="rd__name">{room.name}</h1>

          {room.description && (
            <p className="rd__desc">{room.description}</p>
          )}

          {room.long_description && (
            <p className="rd__long-desc">{room.long_description}</p>
          )}

          {/* Amenities */}
          {room.amenities?.length > 0 && (
            <div className="rd__section">
              <h2 className="rd__section-title">What's Included</h2>
              <ul className="rd__amenities">
                {room.amenities.map((a, i) => (
                  <li key={i} className="rd__amenity">
                    <span className="rd__amenity-check">✓</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery */}
          {room.images?.length > 1 && (
            <div className="rd__section">
              <h2 className="rd__section-title">Photo Gallery</h2>
              <div className="rd__gallery">
                {room.images.map((src, i) => (
                  <button
                    key={i}
                    className="rd__gallery-item"
                    onClick={() => setLightbox(i)}
                  >
                    <img src={src} alt={`${room.name} ${i + 1}`} loading="lazy" />
                    <span className="rd__gallery-zoom">⊕</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* House info */}
          <div className="rd__section rd__info-grid">
            <div className="rd__info-item">
              <span className="rd__info-label">Check-in</span>
              <span className="rd__info-value">From 3:00 PM</span>
            </div>
            <div className="rd__info-item">
              <span className="rd__info-label">Check-out</span>
              <span className="rd__info-value">By 11:00 AM</span>
            </div>
            <div className="rd__info-item">
              <span className="rd__info-label">Cancellation</span>
              <span className="rd__info-value">Free up to 48 hrs</span>
            </div>
            <div className="rd__info-item">
              <span className="rd__info-label">Breakfast</span>
              <span className="rd__info-value">Not included</span>
            </div>
          </div>
        </div>

        {/* ── Sticky sidebar ── */}
        <aside className="rd__sidebar">
          <div className="rd__cta-card">
            <div className="rd__price-block">
              <span className="rd__price">£{room.price}</span>
              <span className="rd__price-per">per night</span>
            </div>

            <div className="rd__cta-divider" />

            <ul className="rd__cta-perks">
              <li>✓ Best rate guaranteed</li>
              <li>✓ Free cancellation (48 hrs)</li>
              <li>✓ Instant confirmation</li>
            </ul>

            <Link to={`/book?room=${room.id}`} className="rd__book-btn">
              Book This Room
            </Link>

            <a href="tel:+441273000000" className="rd__call-btn">
              Or call us to book
            </a>

            <Link to="/rooms" className="rd__back-link">
              ← View all rooms
            </Link>
          </div>

          <div className="rd__sidebar-note">
            <p>Questions? <Link to="/contact">Contact us</Link> — we're happy to help with special requests.</p>
          </div>
        </aside>
      </div>

      {/* ── Other rooms ── */}
      {otherRooms.length > 0 && (
        <section className="rd__other">
          <div className="rd__other-inner">
            <h2 className="rd__other-title">You Might Also Like</h2>
            <div className="rd__other-grid">
              {otherRooms.map((r) => (
                <Link key={r.id} to={`/rooms/${r.id}`} className="rd__other-card">
                  {r.images?.[0] && (
                    <div className="rd__other-img">
                      <img src={r.images[0]} alt={r.name} loading="lazy" />
                    </div>
                  )}
                  <div className="rd__other-body">
                    <span className="rd__other-price">£{r.price}<span>/night</span></span>
                    <h3 className="rd__other-name">{r.name}</h3>
                    {r.description && <p className="rd__other-desc">{r.description}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="rd__lightbox" onClick={() => setLightbox(null)}>
          <button className="rd__lb-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="rd__lb-arrow rd__lb-arrow--prev" onClick={prevLightbox}>‹</button>
          <img
            src={room.images[lightbox]}
            alt={room.name}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="rd__lb-arrow rd__lb-arrow--next" onClick={nextLightbox}>›</button>
          <span className="rd__lb-counter">{lightbox + 1} / {room.images.length}</span>
        </div>
      )}
    </div>
  )
}
