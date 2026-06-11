import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './RoomDetailPage.css'

export default function RoomDetailPage() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    fetch(`/api/rooms/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Room not found')
        return res.json()
      })
      .then((data) => {
        setRoom(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="room-detail__loading">Loading...</div>
  if (error)   return <div className="room-detail__error">{error}</div>
  if (!room)   return null

  const images = room.images ?? []

  return (
    <div className="room-detail">
      {/* Hero image */}
      {images[0] && (
        <div className="room-detail__hero">
          <img src={`/storage/${images[activeImg]}`} alt={room.name} />
          {images.length > 1 && (
            <div className="room-detail__hero-thumbs">
              {images.slice(0, 8).map((src, i) => (
                <button
                  key={i}
                  className={`room-detail__hero-thumb${i === activeImg ? ' active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={`/storage/${src}`} alt="" loading="lazy" />
                </button>
              ))}
              {images.length > 8 && (
                <button
                  className="room-detail__hero-thumb room-detail__hero-thumb--more"
                  onClick={() => setLightbox(8)}
                >
                  +{images.length - 8}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <div className="room-detail__layout">
        <div className="room-detail__main">
          <div className="room-detail__badges">
            {room.size && <span className="room-detail__badge">{room.size} m²</span>}
          </div>

          <h1 className="room-detail__name">{room.name}</h1>

          {room.description && (
            <p className="room-detail__desc">{room.description}</p>
          )}

          {room.long_description && (
            <p className="room-detail__long-desc">{room.long_description}</p>
          )}

          {room.amenities?.length > 0 && (
            <div className="room-detail__amenities">
              <h3 className="room-detail__section-title">Amenities</h3>
              <ul className="room-detail__amenity-list">
                {room.amenities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {images.length > 1 && (
            <div className="room-detail__gallery">
              <h3 className="room-detail__section-title">Gallery</h3>
              <div className="room-detail__gallery-grid">
                {images.map((src, i) => (
                  <button
                    key={i}
                    className="room-detail__gallery-item"
                    onClick={() => setLightbox(i)}
                  >
                    <img src={`/storage/${src}`} alt={`${room.name} ${i + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky sidebar */}
        <aside className="room-detail__sidebar">
          <div className="room-detail__cta-card">
            <div className="room-detail__price">
              <span className="room-detail__price-amount">£{room.price}</span>
              <span className="room-detail__price-label">per night</span>
            </div>
            <Link to={`/book?room=${room.id}`} className="room-detail__book-btn">
              Book This Room
            </Link>
            <Link to="/rooms" className="room-detail__back-link">
              ← All rooms
            </Link>
          </div>
        </aside>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="room-detail__lightbox" onClick={() => setLightbox(null)}>
          <button className="room-detail__lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="room-detail__lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}>‹</button>
          <img
            src={`/storage/${images[lightbox]}`}
            alt={room.name}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="room-detail__lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}>›</button>
          <span className="room-detail__lightbox-counter">{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </div>
  )
}
