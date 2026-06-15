import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../../config/brand'
import { apiUrl } from '../../config/api'
import './RoomCard.css'

function imgSrc(path) {
  if (!path) return null
  return path.startsWith('http') ? path : apiUrl(`/storage/${path}`)
}

export default function RoomCard({ room, checkIn, checkOut }) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = room.images ?? []

  const bookUrl = brand.bookingUrl

  function prev(e) {
    e.preventDefault()
    setImgIndex((i) => (i - 1 + images.length) % images.length)
  }

  function next(e) {
    e.preventDefault()
    setImgIndex((i) => (i + 1) % images.length)
  }

  return (
    <article className="room-card">
      {/* Image gallery */}
      <div className="room-card__gallery">
        <Link to={`/rooms/${room.id}`} className="room-card__main-img-link">
          {images.length > 0 ? (
            <img
              src={imgSrc(images[imgIndex])}
              alt={`${room.name} — photo ${imgIndex + 1}`}
              className="room-card__main-img"
              loading="lazy"
            />
          ) : (
            <div className="room-card__img-placeholder" />
          )}
        </Link>

        {images.length > 1 && (
          <>
            <button className="room-card__arrow room-card__arrow--prev" onClick={prev} aria-label="Previous photo">‹</button>
            <button className="room-card__arrow room-card__arrow--next" onClick={next} aria-label="Next photo">›</button>
            <span className="room-card__counter">{imgIndex + 1} / {images.length}</span>
          </>
        )}

        {images.length > 1 && (
          <div className="room-card__thumbs">
            {images.slice(0, 5).map((src, i) => (
              <button
                key={i}
                className={`room-card__thumb${i === imgIndex ? ' active' : ''}`}
                onClick={() => setImgIndex(i)}
                aria-label={`Photo ${i + 1}`}
              >
                <img src={imgSrc(src)} alt="" loading="lazy" />
              </button>
            ))}
            {images.length > 5 && (
              <Link to={`/rooms/${room.id}`} className="room-card__thumb room-card__thumb--more">
                +{images.length - 5}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="room-card__body">
        <div className="room-card__meta">
          {room.size && <span className="room-card__size">{room.size} m²</span>}
        </div>

        <h2 className="room-card__name">
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </h2>

        {room.description && (
          <p className="room-card__desc">{room.description}</p>
        )}

        {room.amenities?.length > 0 && (
          <ul className="room-card__amenities">
            {room.amenities.slice(0, 5).map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}

        <div className="room-card__actions">
          <Link to={`/rooms/${room.id}`} className="room-card__btn room-card__btn--outline">
            View Room
          </Link>
          <Link to={bookUrl} className="room-card__btn room-card__btn--primary">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  )
}
