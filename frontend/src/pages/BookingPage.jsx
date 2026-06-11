import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import './BookingPage.css'

function getToday() { return new Date().toISOString().split('T')[0] }
function getTomorrow() { return new Date(new Date().getTime() + 86400000).toISOString().split('T')[0] }

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const roomId = searchParams.get('room')

  const [room, setRoom] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const today    = getToday()
  const tomorrow = getTomorrow()

  const [form, setForm] = useState({
    check_in: searchParams.get('check_in') || today,
    check_out: searchParams.get('check_out') || tomorrow,
    guests: 1,
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  useEffect(() => {
    if (!roomId) return
    fetch(`/api/rooms/${roomId}`)
      .then((r) => r.json())
      .then(setRoom)
      .catch(() => {})
  }, [roomId])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, room_id: roomId, guests: Number(form.guests) }),
      })

      if (!res.ok) {
        const data = await res.json()
        const messages = data.errors
          ? Object.values(data.errors).flat().join(' ')
          : data.message || 'Booking failed.'
        throw new Error(messages)
      }

      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const nights =
    form.check_in && form.check_out
      ? Math.max(0, Math.round((new Date(form.check_out) - new Date(form.check_in)) / 86400000))
      : 0

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success__card">
          <div className="booking-success__icon">✓</div>
          <h1>Booking Request Received</h1>
          <p>Thank you, <strong>{form.name}</strong>. We'll confirm your reservation at <strong>{form.email}</strong> shortly.</p>
          {room && (
            <p className="booking-success__room">
              {room.name} · {nights} night{nights !== 1 ? 's' : ''} · £{room.price * nights}
            </p>
          )}
          <Link to="/rooms" className="booking-success__btn">Browse More Rooms</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-page">
      <div className="booking-page__inner">
        <div className="booking-page__form-col">
          <h1 className="booking-page__title">Book Your Stay</h1>

          {room && (
            <p className="booking-page__room-name">
              Room: <strong>{room.name}</strong>
            </p>
          )}

          {error && <div className="booking-page__error">{error}</div>}

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form__row">
              <label>
                Check-in
                <input
                  type="date"
                  name="check_in"
                  value={form.check_in}
                  min={today}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Check-out
                <input
                  type="date"
                  name="check_out"
                  value={form.check_out}
                  min={form.check_in || today}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Guests
              <input
                type="number"
                name="guests"
                value={form.guests}
                min={1}
                max={10}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Jane Smith"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="jane@example.com"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone <span className="booking-form__optional">(optional)</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                placeholder="+44 7700 000000"
                onChange={handleChange}
              />
            </label>

            <label>
              Special Requests <span className="booking-form__optional">(optional)</span>
              <textarea
                name="notes"
                value={form.notes}
                rows={3}
                placeholder="Early check-in, dietary requirements, etc."
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="booking-form__submit"
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Request Booking'}
            </button>
          </form>
        </div>

        {room && (
          <aside className="booking-page__summary">
            {room.images?.[0] && (
              <img
                src={`/storage/${room.images[0]}`}
                alt={room.name}
                className="booking-page__room-img"
              />
            )}
            <div className="booking-page__summary-body">
              <h2>{room.name}</h2>
              <p className="booking-page__summary-size">{room.size} m²</p>
              <div className="booking-page__price-row">
                <span>£{room.price} <small>/ night</small></span>
                {nights > 0 && (
                  <span className="booking-page__total">
                    {nights} night{nights !== 1 ? 's' : ''} = £{room.price * nights}
                  </span>
                )}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
