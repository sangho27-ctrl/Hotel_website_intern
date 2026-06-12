import { useSEO } from '../hooks/useSEO'
import { brand } from '../config/brand'
import './AvailabilityPage.css'

export default function AvailabilityPage() {
  useSEO({
    title: 'Check Availability | Colson House Brighton',
    description: 'Check room availability at Colson House Brighton. Book direct for the best rate.',
  })

  return (
    <div className="avail-page">
      <iframe
        src={brand.ftbUrl}
        className="avail-iframe"
        title="Book a Room — Colson House"
        frameBorder="0"
        scrolling="yes"
        allowFullScreen
      />
    </div>
  )
}
