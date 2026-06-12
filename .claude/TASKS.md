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
STT	Image file's name	Room's name 	Description	Tiện nghi (Amenities)
1	"rroom0
rroom0_1 -> rroom0_31"	Room 0, Deluxe king room	Room 0 Deluxe Ground Floor King Room - 18m2. This light and airy ground floor room is beautifully decorated and full to the brim with boutique/high end fixtures and fittings to make your stay more enjoyable. It comes with the following amenities. Super comfy Kingsize bed, egyptian cotton linen, 32" smart led tv, wifi (high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Broadband/High Speed Internet Access
CD Player
Central Heating
Complimentary Toiletries
Daily Housekeeping
Designer Toiletries
Duvet
DVD Library
DVD Player
Egyptian Cotton Linen
Electric Shaver Point
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Hair Dryer In Room
Hairdryer
Heating Throughout Property
Internet via TV
Ironing Facilities
Kettle
King Size Bed
Linen & Towels Supplied
Make Up Mirror
Private Bathroom
Radio
Remote Control TV
Shower EnSuite
Tea/Coffee
Television
WC EnSuite
WI-FI Internet Access
Wifi Free
Windows open"
2	"rroom1
rroom1_1 -> room1_15"	Room 1, luxurious small double	"Room 1 Compact Double - 10m2. This room is small but beautifully formed. Situated on the first floor at the rear of the house this room comes with the following amenities. Super comfy double bed, egyptian cotton linen, lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.

"	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
Designer Toiletries
Desk Chair
Duvet
DVD Player
Egyptian Cotton Linen
Electric Shaver Point
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Hair Dryer In Room
Hairdryer
Heating Throughout Property
I-Pod docking station
Iron and Ironing Board on request
Ironing Facilities
Kettle
LCD/Plasma Television
Linen & Towels Supplied
Make Up Mirror
Private Bathroom
Remote Control TV
Shower EnSuite
Shower Room
Tea/Coffee
Television
TV In Room
Wash Hand Basin EnSuite
WC EnSuite
WI-FI Internet Access
Wifi Free
Windows open
Work Desk
GHD Irons & Hairdryer"
3	"rroom2
rroom2_1 -> room2_10"	Room 2 rear aspect luxury double	Room 2 Luxury Double/Twin - 16m2. This room is situated on the first floor at the rear of the house and is beautifully decorated with quality fixtures and fittings. It comes with the following amenities. Kingsize bed or 2 singles, egyptian cotton linen, 32"lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
DVD Player
Egyptian Cotton Linen
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Heating Throughout Property
I-Pod docking station
Ironing Facilities
Kettle
King Size Bed
LCD/Plasma Television
Wifi Free
GHD Irons & Hairdryer"
4	"rroom3
rroom3_1 -> rroom3_21"	Room 3 front aspect luxury suite	Room 3 Suite - 25m2. Our largest room situated on the first floor at the front of the house. For the ultimate in luxury, it features a superking bed, freestanding roll top bath, egyptian cotton linen, chandelier, 32"lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
DVD Player
Egyptian Cotton Linen
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Heating Throughout Property
I-Pod docking station
Ironing Facilities
Kettle
King Size Bed
Wifi Free
GHD Irons & Hairdryer"
5	"rroom4
rroom4_1 -> rroom4_15"	Room 4 Small Double	Room 4 Small Compact Double - 10m2. This room is small but beautifully formed. Situated on the second floor at the rear of the house this room comes with the following amenities. Super comfy double bed, egyptian cotton linen, lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
DVD Player
Egyptian Cotton Linen
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Heating Throughout Property
I-Pod docking station
Ironing Facilities
Kettle
Wifi Free
GHD Irons & Hairdryer"
6	"rroom5
rroom5_1 -> rroom5_15"	Room 5 Superior Double	Room 5 Superior Double/Twin - 16m2. This room is situated on the second floor at the rear of the house and is beautifully decorated with quality fixtures and fittings. It comes with the following amenities. Superking bed or 2 singles, egyptian cotton linen, 32"lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
DVD Player
Egyptian Cotton Linen
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Heating Throughout Property
I-Pod docking station
Ironing Facilities
Kettle
King Size Bed
Wifi Free
GHD Irons & Hairdryer"
7	"rroom6
rroom6_1 -> rroom6_22"	Room 6 front aspect junior suite	Room 6 Junior Suite - 24m2. A beautiful room situated on the second floor at the front of the house. For the ultimate in luxury, it features a superking bed, freestanding roll top bath, egyptian cotton linen, chandelier, 32"lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
DVD Player
Egyptian Cotton Linen
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Heating Throughout Property
I-Pod docking station
Ironing Facilities
Kettle
King Size Bed
Wifi Free
GHD Irons & Hairdryer
"
8	"rroom7
rroom7_1 -> rroom7_22"	Room 7 superior double with sofa	Room 7 Superior Double With Sofa - 16m2. This room is situated on the third/top floor and is sumptuously decorated with quality fixtures and fittings. It comes with the following amenities. Kingsize bed, egyptian cotton linen, 32"lcd tv, wifi(high speed), ensuite wetroom with underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"Alarm Clock
ALL bedrooms Non Smoking
Central Heating
Complimentary Toiletries
Daily Housekeeping
DVD Player
Egyptian Cotton Linen
En Suite
Flat Screen TV
Fridge
Full-Length Mirror
Heating Throughout Property
I-Pod docking station
Ironing Facilities
Kettle
King Size Bed
Wifi Free
GHD Irons & Hairdryer"
9	"rroom8
rroom8_1 -> rroom8_24"	Room 8 Deluxe double (Internal)	Room 8 Deluxe double room - 16m2. This room is situated on the ground floor to the rear of the house. This room is stylishly decorated with quality fixtures and fittings. It comes with the following amenities. Super comfy Superking bed, egyptian cotton linen, 42"lcd tv, wifi(high speed), ensuite bathroom with bath and underfloor heating, free designer toiletries, Grohe rain and power shower, GHD hair straighteners and hairdryer, mini fridge.	"ALL bedrooms Non Smoking
Bath Ensuite
Bath Tub
Bath/Shower
Bottled Water (Complimentary)
Central Heating
Complimentary Toiletries
Daily Housekeeping
Designer Toiletries
Digital Television Channels
Duvet
Egyptian Cotton Linen
En Suite
Fridge
Full-Length Mirror
Hair Dryer In Room
Hairdryer
Heating Throughout Property
Ironing Facilities
Kettle
LCD/Plasma Television
Linen & Towels Supplied
Make Up Mirror
Private Bathroom
Rainfall Shower
Remote Control TV
Tea/Coffee
Television
WI-FI Internet Access
Wifi Free"
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


