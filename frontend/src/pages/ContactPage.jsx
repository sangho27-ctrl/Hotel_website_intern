import { brand } from '../config/brand'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import './ContactPage.css'

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | Brighton Inn',
    description: 'Get in touch with Brighton Inn. Call, email, or visit us in Kemp Town, Brighton.'
  })

  const heroRef = useReveal()
  const contentRef = useReveal()

  return (
    <section className="contact-page">
      <div className="contact-page__hero reveal" ref={heroRef}>
        <span className="contact-page__eyebrow">Get in Touch</span>
        <h1 className="contact-page__title">Contact Us</h1>
      </div>

      <div className="contact-page__content reveal" ref={contentRef}>

        <div className="contact-page__info-col">
          <ul className="contact-info">
            <li className="contact-info__item">
              <span className="contact-info__label">Address</span>
              <span className="contact-info__value">{brand.address}</span>
            </li>
            <li className="contact-info__item">
              <span className="contact-info__label">Phone</span>
              <a href={`tel:${brand.phone}`} className="contact-info__value contact-info__link">
                {brand.phone}
              </a>
            </li>
            <li className="contact-info__item">
              <span className="contact-info__label">Email</span>
              <a href={`mailto:${brand.email}`} className="contact-info__value contact-info__link">
                {brand.email}
              </a>
            </li>
            <li className="contact-info__item">
              <span className="contact-info__label">Check-in</span>
              <span className="contact-info__value">From 3:00 pm</span>
            </li>
            <li className="contact-info__item">
              <span className="contact-info__label">Check-out</span>
              <span className="contact-info__value">By 11:00 am</span>
            </li>
          </ul>
        </div>

        <div className="contact-page__map-col">
          <iframe
            title="Brighton Inn location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.9!2d-0.124561!3d50.819637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585bca00c07d9%3A0x49cf4f1e6ad78a07!2sBrighton%20Inn%20Boutique%20Guest%20Accommodation!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '340px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}
