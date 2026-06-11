import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import './BookingPage.css'

const FTB_ACTION = 'https://portal.freetobook.com/reservations'
const FTB_ID     = '48235'
const FTB_TOKEN  = '2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY'
const MS_PER_DAY = 86400000

function toYMD(date) {
  return date.toISOString().split('T')[0]
}

function addDays(date, n) {
  return new Date(date.getTime() + n * MS_PER_DAY)
}

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const roomId = searchParams.get('room')
  const [room, setRoom] = useState(null)

  const initCheckIn  = searchParams.get('check_in')  || toYMD(new Date())
  const initCheckOut = searchParams.get('check_out') || toYMD(addDays(new Date(), 1))

  const [checkIn,  setCheckIn]  = useState(initCheckIn)
  const [checkOut, setCheckOut] = useState(initCheckOut)

  const stayLength = Math.max(1, Math.round(
    (new Date(checkOut) - new Date(checkIn)) / MS_PER_DAY
  ))

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

  function handleCheckInChange(e) {
    const val = e.target.value
    setCheckIn(val)
    if (val >= checkOut) setCheckOut(toYMD(addDays(new Date(val), 1)))
  }

  const roomImg = room
    ? (room.images?.[0] || `/storage/rooms/room${room.id}/room${room.id}.avif`)
    : null

  return (
    <div className="booking-page">
      {/* Hero */}
      <div className="booking-page__hero">
        <span className="booking-page__eyebrow">Colson House · Brighton</span>
        <h1 className="booking-page__title">Book Your Stay</h1>
        {room && (
          <p className="booking-page__room-name">
            {room.name} · £{room.price} <small>/ night</small>
          </p>
        )}
      </div>

      {/* Content */}
      <div className="booking-page__content">

        {/* FreeToBook form */}
        <div className="ftb-card">
          <div className="ftb-card__header">
            <span className="ftb-card__eyebrow">Direct Booking</span>
            <h2 className="ftb-card__title">Check Availability</h2>
          </div>

          <form
            className="ftb-card__body"
            action={FTB_ACTION}
            method="post"
            target="_blank"
          >
            <input type="hidden" name="w_id"            value={FTB_ID} />
            <input type="hidden" name="w_tkn"           value={FTB_TOKEN} />
            <input type="hidden" name="check_in_date"   value={checkIn} />
            <input type="hidden" name="check_out_date"  value={checkOut} />
            <input type="hidden" name="stay_length"     value={stayLength} />

            <div className="ftb-card__row">
              <div className="ftb-field">
                <span className="ftb-field__label">Check-in</span>
                <input
                  type="date"
                  value={checkIn}
                  min={toYMD(new Date())}
                  onChange={handleCheckInChange}
                />
              </div>
              <div className="ftb-field">
                <span className="ftb-field__label">Check-out</span>
                <input
                  type="date"
                  value={checkOut}
                  min={toYMD(addDays(new Date(checkIn), 1))}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>

            <div className="ftb-nights">
              <strong>{stayLength}</strong> night{stayLength !== 1 ? 's' : ''}
            </div>

            <button type="submit" className="ftb-submit-btn">
              Check Availability
            </button>

            <p className="ftb-note">
              You'll be taken to our secure booking portal to complete your reservation.
              Best rate guaranteed when booking direct.
            </p>
          </form>
        </div>

        {/* Room summary sidebar */}
        <aside className="booking-page__summary">
          {room ? (
            <>
              {roomImg ? (
                <img
                  src={roomImg}
                  alt={room.name}
                  className="booking-page__room-img"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              ) : (
                <div className="booking-page__room-img-placeholder">No image</div>
              )}
              <div className="booking-page__summary-body">
                <h3>{room.name}</h3>
                {room.size && <p className="booking-page__summary-size">{room.size} m²</p>}
                <p className="booking-page__price">
                  £{room.price} <small>/ night</small>
                </p>
              </div>
            </>
          ) : (
            <div className="booking-page__no-room">
              <p>No room selected. Browse our rooms to find your perfect stay.</p>
              <Link to="/rooms" className="booking-page__browse-link">
                View All Rooms
              </Link>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
