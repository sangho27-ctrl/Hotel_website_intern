import { useSEO } from '../hooks/useSEO'
import { brand } from '../config/brand'
import './AvailabilityPage.css'

export default function AvailabilityPage() {
  useSEO({
    title: `Check Availability | ${brand.name}`,
    description: `Check room availability at ${brand.name}. Book direct for the best rate.`,
  })

  return (
    <div className="avail-page">
      <iframe
        src={brand.ftbUrl}
        className="avail-iframe"
        title={`Book a Room — ${brand.name}`}
        frameBorder="0"
        scrolling="yes"
        allowFullScreen
      />
    </div>
  )
}
