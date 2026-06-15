import { useState, useEffect } from 'react'
import RoomCard from '../components/rooms/RoomCard'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { brand } from '../config/brand'
import { apiUrl } from '../config/api'
import './RoomsPage.css'

const MS_PER_DAY = 86400000
const today = new Date().toISOString().split('T')[0]

const STATIC_ROOMS = [
  { id: 1, name: 'Room 0, Deluxe King Room',          size: 18, description: 'This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable.', amenities: ['King Size Bed', 'En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 2, name: 'Room 1, Luxurious Small Double',    size: 10, description: 'This room is small but beautifully formed. Situated on the first floor at the rear of the house.', amenities: ['En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'GHD Irons & Hairdryer', 'Daily Housekeeping'], images: [] },
  { id: 3, name: 'Room 2 Rear Aspect Luxury Double',  size: 16, description: 'Beautifully decorated with quality fixtures and fittings. Kingsize bed or 2 singles.', amenities: ['King Size Bed', 'En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 4, name: 'Room 3 Front Aspect Luxury Suite',  size: 25, description: 'Our largest room featuring a superking bed, freestanding roll top bath and chandelier.', amenities: ['King Size Bed', 'En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 5, name: 'Room 4 Small Double',               size: 10, description: 'This room is small but beautifully formed. Situated on the second floor at the rear of the house.', amenities: ['En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'GHD Irons & Hairdryer', 'Daily Housekeeping'], images: [] },
  { id: 6, name: 'Room 5 Superior Double',            size: 16, description: 'Beautifully decorated with quality fixtures. Superking bed or 2 singles on the second floor.', amenities: ['King Size Bed', 'En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 7, name: 'Room 6 Front Aspect Junior Suite',  size: 24, description: 'A beautiful room featuring a superking bed and freestanding roll top bath on the second floor.', amenities: ['King Size Bed', 'En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 8, name: 'Room 7 Superior Double with Sofa',  size: 16, description: 'Sumptuously decorated on the third/top floor with a kingsize bed and sofa for extra space.', amenities: ['King Size Bed', 'En Suite', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
  { id: 9, name: 'Room 8 Deluxe Double (Internal)',   size: 16, description: 'Stylishly decorated on the ground floor with a superking bed and ensuite bathroom with bath.', amenities: ['En Suite', 'Bath Tub', 'Flat Screen TV', 'Wifi Free', 'Fridge', 'Daily Housekeeping'], images: [] },
]

function fetchRooms(url, setRooms, setLoading, setError) {
  setLoading(true)
  setError(null)
  fetch(url)
    .then((r) => { if (!r.ok) throw new Error('Failed to load rooms'); return r.json() })
    .then((data) => { setRooms(Array.isArray(data) && data.length > 0 ? data : STATIC_ROOMS); setLoading(false) })
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
    title: `Our Rooms | ${brand.name}`,
    description: `Browse our individually designed rooms at ${brand.name}. Book direct for the best rate.`,
  })
  const heroRef = useReveal()
  const gridRef = useReveal()

  useEffect(() => {
    fetchRooms(apiUrl('/api/rooms'), setRooms, setLoading, setError)
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    if (!checkIn || !checkOut) return
    setSearched(true)
    const params = new URLSearchParams({ check_in: checkIn, check_out: checkOut, guests })
    fetchRooms(apiUrl(`/api/rooms/available?${params}`), setRooms, setLoading, setError)
  }

  function handleReset() {
    setCheckIn('')
    setCheckOut('')
    setGuests(1)
    setSearched(false)
    fetchRooms(apiUrl('/api/rooms'), setRooms, setLoading, setError)
  }

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / MS_PER_DAY))
    : 0

  return (
    <section className="rooms-page">
      <div className="rooms-page__hero reveal" ref={heroRef}>
        <span className="rooms-page__eyebrow">{brand.name} · {brand.subtitle}</span>
        <h1 className="rooms-page__title">Our Rooms</h1>
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
