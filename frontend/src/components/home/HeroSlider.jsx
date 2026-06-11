import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './HeroSlider.css'

const SLIDES = [
  '/storage/rooms/room1/room1.avif',
  '/storage/rooms/room2/room2.avif',
  '/storage/rooms/room3/room3.avif',
  '/storage/rooms/room4/room4.avif',
  '/storage/rooms/room5/room5.avif',
  '/storage/rooms/room6/room6.avif',
  '/storage/rooms/room7/room7.avif',
  '/storage/rooms/room8/room8.avif',
  '/storage/rooms/room9/room9.avif',
]

export default function HeroSlider() {
  const [slides] = useState(SLIDES)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused || slides.length < 2) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next, slides.length])

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className={`hero-slider__slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={i !== current}
        />
      ))}

      <div className="hero-slider__overlay" />

      <HeroContent />

      {slides.length > 1 && (
        <>
          <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="hero-slider__arrow hero-slider__arrow--next" onClick={next} aria-label="Next">
            ›
          </button>

          <div className="hero-slider__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-slider__dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

function HeroContent() {
  return (
    <div className="hero-slider__content">
      <span className="hero-slider__eyebrow">Brighton · Est. 1997</span>
      <h1 className="hero-slider__title">Welcome to<br />Colson House</h1>
      <p className="hero-slider__sub">
        A boutique Georgian townhouse hotel in the heart of Brighton's Kemp Town
      </p>
      <div className="hero-slider__ctas">
        <Link to="/rooms" className="hero-slider__btn hero-slider__btn--primary">
          Explore Rooms
        </Link>
        <Link to="/book" className="hero-slider__btn hero-slider__btn--outline">
          Book Now
        </Link>
      </div>
    </div>
  )
}
