import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './ReviewsPage.css'

const FTB_REVIEWS_URL = 'https://www.freetobook.com/reviews/all?w_id=19678&w_tkn=5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb'

export default function ReviewsPage() {
  useSEO({ title: 'Guest Reviews | Brighton Inn', description: 'Read genuine guest reviews for Brighton Inn. Verified reviews from real guests via FreeToBook.' })
  const heroRef = useReveal()
  const contentRef = useReveal()

  return (
    <section className="reviews-page">
      <div className="reviews-page__hero reveal" ref={heroRef}>
        <span className="reviews-page__eyebrow">Brighton Inn · Brighton</span>
        <h1 className="reviews-page__title">Guest Reviews</h1>
        <p className="reviews-page__sub">Genuine reviews from our guests</p>
      </div>

      <div className="reviews-page__content reveal" ref={contentRef}>
        <iframe
          src={FTB_REVIEWS_URL}
          title="Brighton Inn Guest Reviews"
          className="reviews-page__iframe"
          frameBorder="0"
          loading="lazy"
        />

        <div className="reviews-page__cta">
          <a
            href={FTB_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-page__cta-link"
          >
            Open reviews in a new tab →
          </a>
        </div>
      </div>
    </section>
  )
}
