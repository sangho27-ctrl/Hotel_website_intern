import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './RoomDetailPage.css'

export default function RoomDetailPage() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const layoutRef = useReveal()

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
  if (error) return <div className="room-detail__error">{error}</div>
  if (!room) return null

  return (
    <div className="room-detail">
      {/* Hero image */}
      {room.images?.[0] && (
        <div className="room-detail__hero">
          <img src={room.images[0]} alt={room.name} />
        </div>
      )}

      <div className="room-detail__layout reveal" ref={layoutRef}>
        <div className="room-detail__main">
          <div className="room-detail__badges">
            {room.size && <span className="room-detail__badge">{room.size} m²</span>}
          </div>

          <h1 className="room-detail__name">{room.name}</h1>

          {room.description && (
            <p className="room-detail__desc">{room.description}</p>
          )}

          {room.longDescription && (
            <p className="room-detail__long-desc">{room.longDescription}</p>
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

          {room.images?.length > 1 && (
            <div className="room-detail__gallery">
              <h3 className="room-detail__section-title">Gallery</h3>
              <div className="room-detail__gallery-grid">
                {room.images.map((src, i) => (
                  <button
                    key={i}
                    className="room-detail__gallery-item"
                    onClick={() => setLightbox(i)}
                  >
                    <img src={src} alt={`${room.name} ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky CTA sidebar */}
        <aside className="room-detail__sidebar">
          <div className="room-detail__cta-card">
            <div className="room-detail__price">
              <span className="room-detail__price-amount">£{room.price}</span>
              <span className="room-detail__price-label">per night</span>
            </div>
            <Link
              to={`/book?room=${room.id}`}
              className="room-detail__book-btn"
            >
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
          <img
            src={room.images[lightbox]}
            alt={room.name}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
