import { useSEO } from '../hooks/useSEO'
import './LocalAttractionsPage.css'

const ATTRACTIONS = [
  {
    name: 'Brighton Beach & Seafront',
    distance: '2 min walk',
    desc: 'One of England\'s most iconic beaches, stretching along the city\'s famous promenade. Perfect for a morning stroll or an afternoon sunbathe.',
    // pebble beach with seaside promenade
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    tag: 'Beach',
  },
  {
    name: 'Brighton Palace Pier',
    distance: '10 min walk',
    desc: 'A Victorian pleasure pier stretching over the sea, packed with fairground rides, arcade games and traditional fish & chips.',
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80',
    tag: 'Landmark',
  },
  {
    name: 'The Lanes',
    distance: '15 min walk',
    desc: 'A maze of twisting alleyways crammed with independent boutiques, antique jewellers, cafés and restaurants — the heart of old Brighton.',
    // narrow cobbled shopping alley
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tag: 'Shopping',
  },
  {
    name: 'Royal Pavilion',
    distance: '15 min walk',
    desc: 'An extraordinary Indo-Saracenic palace built for King George IV. One of the most distinctive buildings in the UK, with lavish interiors.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Pavilion,_Brighton.jpg',
    tag: 'Historic',
  },
  {
    name: 'Brighton Museum & Art Gallery',
    distance: '15 min walk',
    desc: 'Free entry museum housed in the Royal Pavilion gardens, featuring fine art, fashion, and cultural history collections.',
    // art museum interior with paintings
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80',
    tag: 'Culture',
  },
  {
    name: 'Kemp Town Village',
    distance: '5 min walk',
    desc: 'The lively neighbourhood right on our doorstep — packed with independent cafés, bars, galleries and some of Brighton\'s best restaurants.',
    // colourful independent café street
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    tag: 'Neighbourhood',
  },
  {
    name: "Volks Electric Railway",
    distance: '5 min walk',
    desc: "The world's oldest operating electric railway, running along Brighton's seafront since 1883. A charming ride with great sea views.",
    // vintage heritage tram / railway
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
    tag: 'Transport',
  },
  {
    name: 'Brighton Marina',
    distance: '15 min walk',
    desc: 'The largest marina in the UK, home to a wide range of restaurants, a cinema, bowling alley and boat trips along the coast.',
    // marina with boats and waterfront
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    tag: 'Leisure',
  },
]

export default function LocalAttractionsPage() {
  useSEO({
    title: 'Local Attractions | Colson House Brighton',
    description: 'Discover the best of Brighton near Colson House — beach, pier, The Lanes, Royal Pavilion and more, all within walking distance.',
  })

  return (
    <div className="attractions">
      {/* Hero */}
      <div className="attractions__hero">
        <span className="attractions__eyebrow">Colson House · Brighton</span>
        <h1 className="attractions__title">Local Attractions</h1>
        <p className="attractions__sub">
          Everything Brighton has to offer — most within walking distance from our door at 17 Upper Rock Gardens.
        </p>
      </div>

      {/* Attractions grid */}
      <div className="attractions__grid">
        {ATTRACTIONS.map((a) => (
          <article key={a.name} className="attraction-card">
            <div className="attraction-card__img-wrap">
              <img src={a.image} alt={a.name} loading="lazy" />
              <span className="attraction-card__tag">{a.tag}</span>
            </div>
            <div className="attraction-card__body">
              <div className="attraction-card__header">
                <h2 className="attraction-card__name">{a.name}</h2>
                <span className="attraction-card__distance">{a.distance}</span>
              </div>
              <p className="attraction-card__desc">{a.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Google Maps */}
      <div className="attractions__map-section">
        <h2 className="attractions__map-title">Find Us</h2>
        <p className="attractions__map-address">17 Upper Rock Gardens, Brighton BN2 1QE</p>
        <div className="attractions__map">
          <iframe
            title="Colson House Brighton"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7!2d-0.1179!3d50.8193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875850a3a2a3a2b%3A0x1!2s17+Upper+Rock+Gardens%2C+Brighton+BN2+1QE!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
