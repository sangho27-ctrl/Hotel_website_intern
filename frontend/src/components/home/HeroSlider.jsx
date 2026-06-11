import { useState, useEffect, useCallback } from 'react'
import { brand } from '../../config/brand'
import './HeroSlider.css'

const SLIDES = [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80',
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [])

  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    if (paused || SLIDES.length < 2) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next])

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`hero-slider__slide${i === current ? ' active' : ''}`}
          aria-hidden={i !== current}
        >
          <img src={src} alt="" className="hero-slider__slide-img" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}

      <div className="hero-slider__overlay" />

      <HeroContent />

      {SLIDES.length > 1 && (
        <>
          <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="hero-slider__arrow hero-slider__arrow--next" onClick={next} aria-label="Next">
            ›
          </button>

          <div className="hero-slider__dots">
            {SLIDES.map((_, i) => (
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
        <a href="#rooms" className="hero-slider__btn hero-slider__btn--primary" onClick={(e) => {
          e.preventDefault()
          const el = document.getElementById('rooms')
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
        }}>
          Explore Rooms
        </a>
        <a href={brand.bookingUrl} className="hero-slider__btn hero-slider__btn--outline" target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
      </div>
    </div>
  )
}
