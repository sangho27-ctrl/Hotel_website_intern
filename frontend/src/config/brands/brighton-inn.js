import logoUrl from '../../assets/logos/logo_brighton.avif'

export default {
  name: "Brighton Inn",
  subtitle: "Brighton",
  theme: "light",
  logo: logoUrl,
  tagline: "A charming seafront hotel in the heart of Kemp Town — close to the beach and Brighton's famous Lanes since 2003.",
  phone: "+44 1273 044 306",
  email: "info@brightoninn.co.uk",
  address: "20 St Georges Terrace, Brighton",
  bookingUrl: "/availability",
  ftbUrl: "https://booking-directly.com/widgets/5CHOo9oZjASNpUd4bui1KA5CxpmGwIJJFBrd5bE08nQymJ4sRz51KbfL8eaPb/properties",
  social: {
    instagram: "https://instagram.com/brightoninn",
    facebook: "https://facebook.com/brightoninn",
  },
  nav: [
    { label: "Home", path: "/" },
    { label: "Our Rooms", path: "/rooms" },
    { label: "Offers", path: "/offers" },
    { label: "Local Attractions", path: "/attractions" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" },
  ],
  footer: {
    explore: [
      { label: "Our Rooms", path: "/rooms" },
      { label: "Special Offers", path: "/offers" },
      { label: "Local Attractions", path: "/attractions" },
      { label: "Gallery", path: "/gallery" },
    ],
    information: [
      { label: "Check-In & Check-Out", path: "/checkin" },
      { label: "Parking", path: "/parking" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Cookie Policy", path: "/cookies" },
    ],
  },
  copyright: "© 2026 Brighton Inn. All rights reserved.",
  builtBy: "Website by Hodfords",
}
