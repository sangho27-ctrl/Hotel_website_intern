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

### B1.1 — Run database migration

Start MySQL and run `php artisan migrate` to create the `rooms` table.

**Blocker:** MySQL service must be running first (XAMPP / MySQL Workbench).

---

### B1.2 — Room seed data

Add seeder so `/api/rooms` returns real-looking test data.

**Files to create**
- `backend/database/seeders/RoomSeeder.php`
- Update `DatabaseSeeder.php` to call `RoomSeeder`

**Run with:** `php artisan db:seed`

---

### E4.4 — Home Page Hero Section

Build the main landing page hero.

**Design**
- Full-viewport hero image (placeholder for now)
- Headline: "Welcome to Colson House" in `--font-heading`, large, white
- Subheading: small gold eyebrow text — "Brighton · Est. 1997"
- CTA button: "Explore Rooms" → `/rooms`, gold bg, no border-radius
- Dark overlay on hero image for text legibility

**Files to create/modify**
- `frontend/src/pages/HomePage.jsx`
- `frontend/src/pages/HomePage.css`
- Update `App.jsx` route `/` to use `HomePage`

---

### E4.5 — Offers Page

**Files to create**
- `frontend/src/pages/OffersPage.jsx`
- `frontend/src/pages/OffersPage.css`

**Design**
- Offer cards in a 2-column grid (desktop), 1-col mobile
- Each card: image, offer title, short description, validity date, "View Offer" CTA

---

### E4.6 — Contact Page

**Files to create**
- `frontend/src/pages/ContactPage.jsx`
- `frontend/src/pages/ContactPage.css`

**Design**
- Left: contact form (name, email, message, submit)
- Right: address, phone, email, embedded Google Map iframe
- Form submits to `POST /api/contact`

---

### E5.3 — Admin Dashboard

**Files to create**
- `frontend/src/pages/admin/DashboardPage.jsx`
- `frontend/src/pages/admin/DashboardPage.css`

**Design**
- Stats cards: Total Rooms (live count from API)
- Quick links: Add Room, View Site

---

### E5.4 — Admin Media Library

**Files to create**
- `frontend/src/pages/admin/MediaAdminPage.jsx`
- `backend/app/Http/Controllers/MediaController.php`
- `backend/database/migrations/xxxx_create_media_table.php`

**API**
- `GET /api/admin/media` — list images
- `POST /api/admin/media` — upload (multipart/form-data, max 5MB, JPG/PNG/WebP)
- `DELETE /api/admin/media/:id` — delete

---

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

### E7.1 — Guest Reviews Section

**Files to create**
- `frontend/src/components/reviews/ReviewsSection.jsx`
- `frontend/src/components/reviews/ReviewCard.jsx`

**API:** `GET /api/reviews`

**Design**
- Stars in gold, card bg `#221e17`
- Average rating at top, max 6 reviews shown

---

### E8.1 — Real Page Content

Fill all pages with real Colson House content (no placeholders).
- Text in `brand.js` under `content` key — never hardcoded in JSX
- Images in `frontend/public/images/`

---

### E8.2 — On-Page SEO

- `useSEO.js` hook sets `<title>` + `<meta name="description">` per page
- `robots.txt` + `sitemap.xml` in `frontend/public/`

---

### E8.3 — Performance & Accessibility

- `loading="lazy"` on all images except hero
- Code-split routes via `React.lazy()` + `Suspense`
- Lighthouse targets: Performance > 85, Accessibility > 90

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
- [x] E4.1 — Rooms Listing Page + RoomCard (skeleton loading, error state)
- [x] E4.2 — Room Detail Page (hero, gallery, lightbox, sticky CTA)
- [x] E4.3 — Multi-brand config (VITE_BRAND=colson-house / brighton-inn)
- [x] E5.1 — Admin Auth (LoginPage, AuthContext, ProtectedRoute)
- [x] E5.2 — Admin Room Management (RoomsAdminPage, RoomFormPage, RoomController, migration)
- [x] Scroll animations system (useReveal hook, animations.css, stagger, hover effects)
