import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './ReviewsPage.css'

const REVIEWS = [
  { id: 1, author: 'Sarah M.', rating: 5, date: 'March 2026', source: 'Google',
    text: 'Absolutely wonderful stay. The room was beautifully decorated, the bed was incredibly comfortable, and the location is perfect — we walked to the beach in two minutes. Will definitely return.' },
  { id: 2, author: 'James & Emily', rating: 5, date: 'February 2026', source: 'Booking.com',
    text: 'We stayed for our anniversary and were blown away by the attention to detail. The hosts were warm and welcoming, and the breakfast recommendations they gave us were spot on.' },
  { id: 3, author: 'Charlotte B.', rating: 5, date: 'January 2026', source: 'TripAdvisor',
    text: 'Such a gem in Brighton. The Georgian architecture is stunning and the rooms feel authentic without sacrificing any modern comforts. Quiet, stylish, and perfectly located.' },
  { id: 4, author: 'Tom H.', rating: 4, date: 'December 2025', source: 'Google',
    text: 'Really lovely boutique hotel. Stayed for two nights over Christmas and felt very well looked after. The room overlooking the garden was peaceful and cosy.' },
  { id: 5, author: 'Priya K.', rating: 5, date: 'November 2025', source: 'Booking.com',
    text: 'One of the best boutique hotels I\'ve stayed in. Everything was immaculate, the location is unbeatable, and the personal touches made all the difference. Highly recommended.' },
  { id: 6, author: 'David & Sue L.', rating: 5, date: 'October 2025', source: 'TripAdvisor',
    text: 'We have stayed at Colson House three times now and it never disappoints. Feels like a home away from home. The Brighton Suite is exceptional — treat yourself.' },
]

const SOURCE_LABELS = { Google: '★ Google', 'Booking.com': '● Booking.com', TripAdvisor: '◆ TripAdvisor' }

function Stars({ rating }) {
  return (
    <span className="review-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'review-stars__star--filled' : 'review-stars__star--empty'}>★</span>
      ))}
    </span>
  )
}

function avgRating(reviews) {
  return (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
}

export default function ReviewsPage() {
  useSEO({ title: 'Guest Reviews | Colson House Brighton', description: 'Read what guests say about staying at Colson House Brighton. Rated 5 stars on Google, TripAdvisor, and Booking.com.' })
  const heroRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="reviews-page">
      <div className="reviews-page__hero reveal" ref={heroRef}>
        <span className="reviews-page__eyebrow">Colson House · Brighton</span>
        <h1 className="reviews-page__title">Guest Reviews</h1>
        <div className="reviews-page__avg">
          <Stars rating={5} />
          <span className="reviews-page__avg-score">{avgRating(REVIEWS)}</span>
          <span className="reviews-page__avg-label">average from {REVIEWS.length} reviews</span>
        </div>
      </div>

      <div className="reviews-page__content">
        <div className="reviews-grid stagger" ref={gridRef}>
          {REVIEWS.map((review) => (
            <article key={review.id} className="review-card reveal">
              <Stars rating={review.rating} />
              <p className="review-card__text">"{review.text}"</p>
              <footer className="review-card__footer">
                <span className="review-card__author">{review.author}</span>
                <span className="review-card__meta">
                  {review.date} · <span className="review-card__source">{SOURCE_LABELS[review.source]}</span>
                </span>
              </footer>
            </article>
          ))}
        </div>

        <div className="reviews-page__cta reveal">
          <p>Read more reviews on <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a> and <a href="https://www.tripadvisor.co.uk" target="_blank" rel="noopener noreferrer">TripAdvisor</a>.</p>
        </div>
      </div>
    </section>
  )
}
