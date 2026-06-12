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

### 8.2 change information
STT	Image file's name	Type of image	Room's name 	Description	Tiện nghi (Amenities)
1	"room1
room1_1 -> room1_9"	WEBP	"
Room 1, Deluxe Double Room"	Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV. The unit offers 1 bed.	ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Electric Shaver Point • En Suite • LCD/Plasma Television • Remote Control TV • Shower EnSuite • Tea/Coffee • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Complimentary Toiletries • Digital Television Channels • Flat Screen TV • Fridge • Linen & Towels Supplied • Private Bathroom • Work Desk
2	"room2
room2_1 -> room2_12"	WEBP	Room 2, Four Poster Room	Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers a four poster bed.	ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Digital Television Channels • Egyptian Cotton Linen • En Suite • Flat Screen TV • Four Poster Bed • Fridge • Private Bathroom • Shower EnSuite • Tea/Coffee • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open
3	"room3
room3_1 -> room3_18"	WEBP	Room3, Standard Double	Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.	Central Heating • Daily Housekeeping • Egyptian Cotton Linen • Flat Screen TV • Fridge • Kettle • Private Bathroom • Shower EnSuite • Tea/Coffee • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk
4	"room4
room4_1 -> room4_13"	WEBP	Room 4, Deluxe Balcony Room	This double room provides a fireplace. A seating area with a flat-screen TV, a desk, a balcony and a private bathroom are provided in this double room. The unit offers 1 bed.	ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Balcony • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Flat Screen TV • Fridge • Kettle • Linen & Towels Supplied • Private Bathroom • Remote Control TV • Shower EnSuite • Tea/Coffee • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open
5	"room5
room5_1 -> room5_15"	WEBP	Room 5, Standard Double	Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.	ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Digital Television Channels • Egyptian Cotton Linen • Flat Screen TV • Fridge • Kettle • Linen & Towels Supplied • Shower EnSuite • Tea/Coffee • Wash Hand Basin EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk with Lamp
6	"room6
room6_1 -> room6_20"	WEBP	Room 6, Deluxe Double	Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.	ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Electric Shaver Point • En Suite • Flat Screen TV • Fridge • Kettle • Linen & Towels Supplied • Private Bathroom • Remote Control TV • Shower EnSuite • Tea/Coffee • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk
7	"room7
room7_1 -> room7_5"	WEBP	Room 7, Small Single	A TV, DVD player and tea/coffee making facilities are featured in this room.	"ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Desk Chair • Egyptian Cotton Linen • Electric Shaver Point • En Suite • Heating Throughout Property • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk


"
8	"room8
room8_1 -> room8_11"	WEBP	Room 8, Deluxe Double	Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.	"ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Broadband/High Speed Internet Access • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Electric Shaver Point • En Suite • Flat Screen TV • Fridge • Kettle • Private Bathroom • Shower EnSuite • Tea/Coffee • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk
"
9	"room9
room9_1 -> room9_14"	WEBP	Room 9, Split Level Double	Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.	ALL bedrooms Non Smoking • ALL Rooms Non-Smoking • Central Heating • Complimentary Toiletries • Daily Housekeeping • Designer Toiletries • Egyptian Cotton Linen • Electric Shaver Point • En Suite • Flat Screen TV • Fridge • Linen & Towels Supplied • Television • TV In Room • Wash Hand Basin EnSuite • WC EnSuite • WI-FI Internet Access • Wifi Free • Windows open • Work Desk

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


