import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import './BookingPage.css'

// Replace with actual FreeToBook widget URL from dashboard → Booking Button
const FTB_WIDGET_URL = 'https://booking-directly.com/widgets/2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY/properties'

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const roomId = searchParams.get('room')
  const [room, setRoom] = useState(null)

  useSEO({
    title: 'Book Your Stay | Colson House Brighton',
    description: 'Book direct at Colson House Brighton for the best available rate.',
  })

  useEffect(() => {
    if (!roomId) return
    fetch(`/api/rooms/${roomId}`)
      .then((r) => r.json())
      .then(setRoom)
      .catch(() => {})
  }, [roomId])

  return (
    <div className="booking-page">
      <div className="booking-page__hero">
        <span className="booking-page__eyebrow">Colson House · Brighton</span>
        <h1 className="booking-page__title">Book Your Stay</h1>
        {room && (
          <p className="booking-page__room-name">
            {room.name} · £{room.price} <small>/ night</small>
          </p>
        )}
      </div>

      <div className="booking-page__widget-wrap">
        {FTB_WIDGET_URL ? (
          <iframe
            src={FTB_WIDGET_URL}
            title="Book at Colson House"
            className="booking-page__iframe"
            frameBorder="0"
            scrolling="yes"
            allowFullScreen
          />
        ) : (
          <div className="booking-page__placeholder">
            <p>Online booking coming soon.</p>
            <p>
              To book, please call <a href="tel:+441273044306">+44 1273 044 306</a> or email{' '}
              <a href="mailto:info@colsonhouse.co.uk">info@colsonhouse.co.uk</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
