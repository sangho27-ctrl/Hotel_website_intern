import { useState, useEffect } from 'react'
import RoomCard from '../components/rooms/RoomCard'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './RoomsPage.css'

export default function RoomsPage() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useSEO({ title: 'Our Rooms | Colson House Brighton', description: 'Browse our individually designed rooms at Colson House, a boutique hotel in Brighton\'s Kemp Town. Book direct for the best rate.' })
  const heroRef = useReveal()
  const gridRef = useReveal()

  useEffect(() => {
    fetch('/api/rooms')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load rooms')
        return res.json()
      })
      .then((data) => {
        setRooms(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section className="rooms-page">
      <div className="rooms-page__hero reveal" ref={heroRef}>
        <span className="rooms-page__eyebrow">Colson House · Brighton</span>
        <h1 className="rooms-page__title">Our Rooms</h1>
      </div>

      <div className="rooms-page__content">
        {loading && (
          <div className="rooms-page__grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rooms-page__skeleton" />
            ))}
          </div>
        )}

        {error && (
          <p className="rooms-page__error">Unable to load rooms: {error}</p>
        )}

        {!loading && !error && rooms.length === 0 && (
          <p className="rooms-page__empty">No rooms available at the moment.</p>
        )}

        {!loading && !error && rooms.length > 0 && (
          <div className="rooms-page__grid stagger" ref={gridRef}>
            {rooms.map((room) => (
              <div key={room.id} className="reveal">
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
