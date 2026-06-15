import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './OffersPage.css'

const OFFERS = [
  {
    id: 1,
    title: 'Midweek Escape',
    description: 'Stay Sunday to Thursday and enjoy 20% off our standard room rates. Perfect for a quiet getaway away from the weekend crowds.',
    valid: 'Valid until 31 August 2026',
    badge: '20% off',
  },
  {
    id: 2,
    title: 'Brighton Boutique Breakfast',
    description: 'Start your day right with our full English breakfast included in your room rate. Available on all rooms throughout the year.',
    valid: 'Available year-round',
    badge: 'B&B rate',
  },
  {
    id: 3,
    title: 'Long Stay Offer',
    description: 'Book 4 nights or more and receive a complimentary bottle of local Sussex sparkling wine on arrival.',
    valid: 'Valid on stays of 4+ nights',
    badge: 'Free gift',
  },
  {
    id: 4,
    title: 'Early Bird Rate',
    description: 'Book at least 30 days in advance and save 15% on your entire stay. Our best rate for planners.',
    valid: 'Must book 30+ days ahead',
    badge: '15% off',
  },
]

export default function OffersPage() {
  useSEO({ title: 'Special Offers | Colson House Brighton', description: 'Exclusive hotel deals at Colson House Brighton. Midweek escapes, early bird rates, and more. Book direct only.' })
  const heroRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="offers-page">
      <div className="offers-page__hero reveal" ref={heroRef}>
        <span className="offers-page__eyebrow">Colson House · Brighton</span>
        <h1 className="offers-page__title">Special Offers</h1>
        <p className="offers-page__sub">Exclusive deals for direct bookings only</p>
      </div>

      <div className="offers-page__content">
        <div className="offers-page__grid stagger" ref={gridRef}>
          {OFFERS.map((offer) => (
            <article key={offer.id} className="offer-card reveal">
              <div className="offer-card__badge">{offer.badge}</div>
              <div className="offer-card__body">
                <h2 className="offer-card__title">{offer.title}</h2>
                <p className="offer-card__desc">{offer.description}</p>
                <span className="offer-card__valid">{offer.valid}</span>
                <a
                  href="https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties"
                  className="offer-card__btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >Book This Offer</a>
              </div>
            </article>
          ))}
        </div>

        <div className="offers-page__note reveal">
          <p>All offers are available on direct bookings only and cannot be combined with other promotions. <Link to="/contact">Contact us</Link> if you have any questions.</p>
        </div>
      </div>
    </section>
  )
}
