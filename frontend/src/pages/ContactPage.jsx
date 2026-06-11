import { useState } from 'react'
import { brand } from '../config/brand'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import API_BASE from '../config/api'
import './ContactPage.css'

export default function ContactPage() {
  useSEO({ title: 'Contact Us | Colson House Brighton', description: 'Get in touch with Colson House Brighton. Call, email, or send a message. We\'re happy to help with bookings and enquiries.' })
  const heroRef = useReveal()
  const contentRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-page__hero reveal" ref={heroRef}>
        <span className="contact-page__eyebrow">Get in Touch</span>
        <h1 className="contact-page__title">Contact Us</h1>
      </div>

      <div className="contact-page__content reveal" ref={contentRef}>
        {/* Form */}
        <div className="contact-page__form-col">
          <h2 className="contact-page__col-title">Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label className="contact-field__label" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" className="contact-field__input"
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="contact-field">
              <label className="contact-field__label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="contact-field__input"
                value={form.email} onChange={handleChange} required />
            </div>
            <div className="contact-field">
              <label className="contact-field__label" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="contact-field__input contact-field__textarea"
                rows={5} value={form.message} onChange={handleChange} required />
            </div>

            {status === 'success' && (
              <p className="contact-form__msg contact-form__msg--success">
                Thank you — we'll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__msg contact-form__msg--error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button type="submit" className="contact-form__btn" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="contact-page__info-col">
          <h2 className="contact-page__col-title">Find Us</h2>

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

          <div className="contact-page__map">
            <iframe
              title="Colson House location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.5!2d-0.1194!3d50.8193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ5JzA5LjUiTiAwwrAwNyc0OS44Ilc!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
