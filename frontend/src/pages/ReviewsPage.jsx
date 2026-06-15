import { useEffect, useRef } from 'react'
import { useSEO } from '../hooks/useSEO'
import { useReveal } from '../hooks/useReveal'
import './ReviewsPage.css'

export default function ReviewsPage() {
  useSEO({
    title: 'Guest Reviews | Brighton Inn',
    description: 'Read what guests say about staying at Brighton Inn. Rated 5 stars on Google, TripAdvisor, and Booking.com.',
  })

  const heroRef = useReveal()
  const widgetRef = useRef(null)

  useEffect(() => {
    // Remove any previously injected instance to avoid duplicates on re-mount
    const existing = document.getElementById('ftb-widget-script')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.id = 'ftb-widget-script'
    script.src = 'https://widget.freetobook.com/widget.js?v=20190925'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const s = document.getElementById('ftb-widget-script')
      if (s) s.remove()
    }
  }, [])

  return (
    <section className="reviews-page">
      <div className="reviews-page__hero reveal" ref={heroRef}>
        <span className="reviews-page__eyebrow">Brighton Inn · Brighton</span>
        <h1 className="reviews-page__title">Guest Reviews</h1>
      </div>

      <div className="reviews-page__content">
        <div className="reviews-page__widget" ref={widgetRef}>
          <div
            className="ftb-widget"
            data-pid="NpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb"
            data-style="review"
          />
        </div>
      </div>
    </section>
  )
}
