import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
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
        <form
          className="ftb-custom-form"
          action={FTB_ACTION}
          method="post"
          target="_blank"
        >
          <input type="hidden" name="w_id"   value={FTB_ID} />
          <input type="hidden" name="w_tkn"  value={FTB_TOKEN} />
          <input type="hidden" name="check_in_date"  value={checkIn} />
          <input type="hidden" name="check_out_date" value={checkOut} />
          <input type="hidden" name="stay_length"    value={stayLength} />

          <div className="ftb-custom-form__fields">
            <label className="ftb-custom-form__field">
              <span>Check-in</span>
              <input
                type="date"
                value={checkIn}
                min={toYMD(new Date())}
                onChange={handleCheckInChange}
              />
            </label>

            <label className="ftb-custom-form__field">
              <span>Check-out</span>
              <input
                type="date"
                value={checkOut}
                min={toYMD(addDays(new Date(checkIn), 1))}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </label>

            <div className="ftb-custom-form__nights">
              {stayLength} night{stayLength !== 1 ? 's' : ''}
            </div>

            <button type="submit" className="ftb-custom-form__btn">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
