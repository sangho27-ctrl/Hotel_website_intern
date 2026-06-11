import { useState, useEffect } from 'react'
import RoomCard from '../components/rooms/RoomCard'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './RoomsPage.css'

const MS_PER_DAY = 86400000
const today = new Date().toISOString().split('T')[0]

const STATIC_ROOMS = [
  { id: 1, name: 'Deluxe Double Room',   size: 32, price: 185, description: 'Guests will have a special experience as this double room offers a fireplace. Includes a private bathroom with a shower and a hairdryer, seating area, wardrobe and flat-screen TV.', amenities: ['Wifi Free', 'En Suite', 'Flat Screen TV', 'Tea/Coffee', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 2, name: 'Four Poster Room',     size: 22, price: 130, description: 'Guests will have a special experience as this double room offers a fireplace. Features a seating area, wardrobe, flat-screen TV and four poster bed.', amenities: ['Wifi Free', 'Four Poster Bed', 'En Suite', 'Flat Screen TV', 'Tea/Coffee', 'Daily Housekeeping'], images: [] },
  { id: 3, name: 'Standard Double',      size: 18, price: 110, description: 'Featuring free toiletries, this double room includes a private bathroom with a shower and hairdryer, wardrobe, electric kettle and flat-screen TV.', amenities: ['Wifi Free', 'En Suite', 'Flat Screen TV', 'Kettle', 'Tea/Coffee', 'Daily Housekeeping'], images: [] },
  { id: 4, name: 'Deluxe Balcony Room',  size: 16, price: 95,  description: 'This double room provides a fireplace, seating area with flat-screen TV, a desk, a balcony and a private bathroom.', amenities: ['Wifi Free', 'Balcony', 'En Suite', 'Flat Screen TV', 'Kettle', 'Daily Housekeeping'], images: [] },
  { id: 5, name: 'Standard Double',      size: 28, price: 165, description: 'Featuring free toiletries, this double room includes a private bathroom with a shower and hairdryer, wardrobe, electric kettle and flat-screen TV.', amenities: ['Wifi Free', 'En Suite', 'Flat Screen TV', 'Work Desk', 'Tea/Coffee', 'Daily Housekeeping'], images: [] },
  { id: 6, name: 'Deluxe Double',        size: 20, price: 120, description: 'Offering free toiletries, this double room includes a private bathroom with a shower and hairdryer. Features a seating area, wardrobe and flat-screen TV.', amenities: ['Wifi Free', 'En Suite', 'Flat Screen TV', 'Fridge', 'Tea/Coffee', 'Daily Housekeeping'], images: [] },
  { id: 7, name: 'Small Single',         size: 24, price: 140, description: 'A TV, DVD player and tea/coffee making facilities are featured in this room.', amenities: ['Wifi Free', 'En Suite', 'TV In Room', 'Tea/Coffee', 'Work Desk', 'Daily Housekeeping'], images: [] },
  { id: 8, name: 'Deluxe Double',        size: 26, price: 155, description: 'Offering free toiletries, this double room includes a private bathroom. Features a seating area, wardrobe, flat-screen TV and fridge.', amenities: ['Wifi Free', 'En Suite', 'Flat Screen TV', 'Fridge', 'Kettle', 'Daily Housekeeping'], images: [] },
  { id: 9, name: 'Split Level Double',   size: 30, price: 175, description: 'Guests will have a special experience as this double room offers a fireplace. Features a seating area, wardrobe and flat-screen TV.', amenities: ['Wifi Free', 'En Suite', 'Flat Screen TV', 'Fridge', 'Work Desk', 'Daily Housekeeping'], images: [] },
]

function fetchRooms(url, setRooms, setLoading, setError) {
  setLoading(true)
  setError(null)
  fetch(url)
    .then((r) => { if (!r.ok) throw new Error('Failed to load rooms'); return r.json() })
    .then((data) => { setRooms(data); setLoading(false) })
    .catch(() => { setRooms(STATIC_ROOMS); setLoading(false) })
}

export default function RoomsPage() {
  const [rooms, setRooms]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)
  const [searched, setSearched] = useState(false)

  const [checkIn,  setCheckIn]  = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests,   setGuests]   = useState(1)

  useSEO({
    title: 'Our Rooms | Colson House Brighton',
    description: 'Browse our individually designed rooms at Colson House, a boutique hotel in Brighton\'s Kemp Town. Book direct for the best rate.',
  })
  const heroRef = useReveal()
  const gridRef = useReveal()

  useEffect(() => {
    fetchRooms('/api/rooms', setRooms, setLoading, setError)
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    if (!checkIn || !checkOut) return
    setSearched(true)
    const params = new URLSearchParams({ check_in: checkIn, check_out: checkOut, guests })
    fetchRooms(`/api/rooms/available?${params}`, setRooms, setLoading, setError)
  }

  function handleReset() {
    setCheckIn('')
    setCheckOut('')
    setGuests(1)
    setSearched(false)
    fetchRooms('/api/rooms', setRooms, setLoading, setError)
  }

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / MS_PER_DAY))
    : 0

  return (
    <section className="rooms-page">
      <div className="rooms-page__hero reveal" ref={heroRef}>
        <span className="rooms-page__eyebrow">Colson House · Brighton</span>
        <h1 className="rooms-page__title">Our Rooms</h1>
      </div>

      {/* Search bar */}
      <div className="rooms-search">
        <form className="rooms-search__form" onSubmit={handleSearch}>
          <label className="rooms-search__field">
            <span>Check-in</span>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </label>

          <label className="rooms-search__field">
            <span>Check-out</span>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </label>

          <label className="rooms-search__field rooms-search__field--guests">
            <span>Guests</span>
            <input
              type="number"
              value={guests}
              min={1}
              max={10}
              onChange={(e) => setGuests(e.target.value)}
            />
          </label>

          {nights > 0 && (
            <span className="rooms-search__nights">{nights} night{nights !== 1 ? 's' : ''}</span>
          )}

          <button type="submit" className="rooms-search__btn" disabled={!checkIn || !checkOut}>
            Check Availability
          </button>

          {searched && (
            <button type="button" className="rooms-search__reset" onClick={handleReset}>
              Show All
            </button>
          )}
        </form>

        {searched && !loading && (
          <p className="rooms-search__result">
            {rooms.length > 0
              ? `${rooms.length} room${rooms.length !== 1 ? 's' : ''} available`
              : 'No rooms available for those dates.'}
          </p>
        )}
      </div>

      <div className="rooms-page__content">
        {loading && (
          <div className="rooms-page__grid">
            {[1, 2, 3].map((i) => <div key={i} className="rooms-page__skeleton" />)}
          </div>
        )}

        {error && <p className="rooms-page__error">Unable to load rooms: {error}</p>}

        {!loading && !error && rooms.length === 0 && !searched && (
          <p className="rooms-page__empty">No rooms available at the moment.</p>
        )}

        {!loading && !error && rooms.length > 0 && (
          <div className="rooms-page__grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} checkIn={checkIn} checkOut={checkOut} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
