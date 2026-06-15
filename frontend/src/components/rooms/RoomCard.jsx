import { Link } from 'react-router-dom'
import './RoomCard.css'

export default function RoomCard({ room }) {
  return (
    <article className="room-card">
      <Link to={`/rooms/${room.id}`} className="room-card__image-link">
        {room.images?.[0] ? (
          <img
            src={room.images[0]}
            alt={room.name}
            className="room-card__image"
            loading="lazy"
          />
        ) : (
          <div className="room-card__image-placeholder" />
        )}
      </Link>

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
            {room.amenities.slice(0, 4).map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}

        <a
          href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties"
          className="room-card__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Availability
        </a>
      </div>
    </article>
  )
}
