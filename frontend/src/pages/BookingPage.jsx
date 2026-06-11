import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import './BookingPage.css'

const FTB_ID    = '48235'
const FTB_TOKEN = '2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY'

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

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widget.freetobook.com/widget.js?v=20190925'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

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
        <div
          className="ftb-widget"
          data-id={FTB_ID}
          data-token={FTB_TOKEN}
        />
      </div>
    </div>
  )
}
