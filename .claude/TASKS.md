# Tasks

## Design Tokens (dùng cho tất cả components)

    --color-bg:        #1a1611
    --color-bg-footer: #111009
    --color-accent:    #c9a96e
    --color-text:      #ffffff
    --color-text-muted:#d4c5a9
    --color-border:    #2e2a22
    --font-heading:    'Playfair Display', Georgia, serif
    --font-body:       'Inter', system-ui, sans-serif

---

## In Progress

_(nothing — all current tasks complete)_

---

## Backlog

### E6.1 — Booking Flow (Frontend)

Multi-step booking: Select Room → Dates → Guest Info → Confirm.

**Files to create**
- `frontend/src/pages/booking/BookingPage.jsx`
- `frontend/src/components/booking/` (StepRoomSelect, StepDateSelect, StepGuestInfo, StepConfirmation, BookingStepper)

**Requirements**
- `?room=:id` pre-selects room from Room Detail page
- Total price calculated: nights × room.price
- Submits to `POST /api/bookings` → redirect to `/booking/success`

---

### E6.2 — Booking Engine (Backend)

**Files to create**
- `backend/app/Http/Controllers/BookingController.php`
- `backend/app/Models/Booking.php`
- `backend/database/migrations/xxxx_create_bookings_table.php`

**API**
- `POST /api/bookings` — create booking, check availability, calculate total
- `GET /api/rooms/:id/availability?checkin=&checkout=` — availability check

**Requirements**
- Reject overlapping bookings (409 Conflict)
- Send confirmation email via Laravel Mail

---

### E6.3 — Stripe Payment

**Requirements**
- Stripe Elements embedded in booking Step 4
- `POST /api/payments/create-intent` → client_secret
- `POST /api/payments/confirm` → mark booking confirmed
- Keys: `STRIPE_SECRET` (backend), `VITE_STRIPE_KEY` (frontend)

---

### E8.1 — Real Page Content

Fill all pages with real Colson House content (no placeholders).
- Text in `brand.js` under `content` key — never hardcoded in JSX
- Images in `frontend/public/images/`

---

### E8.4 — Pre-Launch SEO Audit

Full checklist before going live — broken links, Lighthouse scores, Google Search Console.

---

## Done

- [x] E2.0 — Website designs (signed off)
- [x] E2.1 — Tech stack configured (Laravel + React + Vite + MySQL)
- [x] E2.2 — Colson House design tokens extracted (colors, fonts, CSS variables)
- [x] E3.1 — Header (sticky, Playfair Display logo, gold nav underline, mobile hamburger)
- [x] E3.2 — Footer (4-col layout, Tabler icons, responsive)
- [x] E3.4 — Layout wrapper (Header + Footer on every page, tokens.css)
- [x] E4.1 — Rooms Listing Page + RoomCard (skeleton loading, error state, stagger animation)
- [x] E4.2 — Room Detail Page (hero slideshow + thumbnails, gallery, lightbox prev/next, amenities, sticky CTA sidebar, similar rooms section)
- [x] E4.3 — Multi-brand config (VITE_BRAND=colson-house / brighton-inn)
- [x] E4.4 — Home Page (hero with real photo, features strip, about section with real photo, CTA banner, scroll reveal)
- [x] E4.5 — Offers Page (4 offer cards, gold badge, stagger reveal)
- [x] E4.6 — Contact Page (form → POST /api/contact, info list, Google Maps iframe)
- [x] E5.1 — Admin Auth (LoginPage, AuthContext, ProtectedRoute)
- [x] E5.2 — Admin Room Management (RoomsAdminPage, RoomFormPage, RoomController, migration)
- [x] E5.3 — Admin Dashboard (stats cards, quick links)
- [x] E5.4 — Admin Media Library (drag & drop upload, XHR progress, image grid, delete)
- [x] E7.1 — Guest Reviews Page (6 static reviews, Stars component, average rating, stagger grid)
- [x] E8.2 — On-Page SEO (useSEO hook, robots.txt, sitemap.xml)
- [x] E8.3 — Performance & Accessibility (lazy images, React.lazy code splitting)
- [x] B1.1 — Database migration (rooms table, media table)
- [x] B1.2 — Room seed data (9 rooms with real photos from Room_Photos folder)
- [x] JWT Auth fix (api guard in config/auth.php, User model implements JWTSubject)
- [x] Scroll animations system (useReveal hook, animations.css, stagger, hover effects)
- [x] Remove side margins (index.css reset, #root full width)
- [x] Real room photos (9 bộ ảnh → frontend/public/images/rooms/, wired into seeder)
