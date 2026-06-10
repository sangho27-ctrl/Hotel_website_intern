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

---

## Backlog

### E3.1 — Header Navigation

Build a React Header component.

**Design**

- Top info bar (bg `--color-bg`): phone left, email center-left, address right — small text, gold icons
- Main header (bg `--color-bg`): logo left, nav center, Book Now button right
- Logo: "COLSON HOUSE" in `--font-heading`, "BRIGHTON" subtitle in small `--color-accent` tracking caps
- Nav links: white, uppercase, letter-spaced — highlight active with `--color-accent`
- Book Now: bg `--color-accent`, text `--color-bg`, uppercase, bold, no border-radius
- Divider between top bar and main header: `--color-border`

**Files to create**

- `frontend/src/components/layout/Header.jsx`
- `frontend/src/components/layout/Header.css`
- `frontend/src/config/brand.js`

**Add to brand.js**

    export const brand = {
      name: "Colson House",
      subtitle: "Brighton",
      phone: "+44 1273 044 306",
      email: "info@colsonhouse.co.uk",
      address: "17 Upper Rock Gardens, Brighton, BN2 1QE",
      bookingUrl: "/book",
      nav: [
        { label: "Home", path: "/" },
        { label: "Our Rooms", path: "/rooms" },
        { label: "Offers", path: "/offers" },
        { label: "Local Attractions", path: "/attractions" },
        { label: "Reviews", path: "/reviews" },
        { label: "Contact", path: "/contact" },
      ],
    }

**Requirements**

- All values from `brand.js` — never hardcoded
- Use React Router `<NavLink>` with active state
- `position: sticky; top: 0; z-index: 100`
- Mobile (< 768px): hide nav + top bar, show hamburger
- Hamburger toggles full-width dropdown nav
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] Top info bar shows phone, email, address from brand config
- [ ] Logo shows name + subtitle from brand config
- [ ] Active nav link highlighted in gold
- [ ] Book Now links to `/book`
- [ ] Sticky on scroll
- [ ] Hamburger menu works on mobile < 768px

---

### E3.2 — Footer

Build a React Footer component.

**Design**

- Background: `--color-bg-footer`
- 4-column layout:
  - Col 1: Logo + tagline + social icons (Instagram, Facebook)
  - Col 2: EXPLORE — Our Rooms, Special Offers, Local Attractions, Gallery
  - Col 3: INFORMATION — Check-In & Check-Out, Parking, Terms & Conditions, Privacy Policy, Cookie Policy
  - Col 4: CONTACT — email, phone, address
- Column headings: uppercase, letter-spaced, `--color-accent`
- Links: `--color-text-muted`, no underline, hover → `--color-accent`
- Bottom bar: divider `--color-border`, copyright left, "Website by Hodfords" right

**Files to create**

- `frontend/src/components/layout/Footer.jsx`
- `frontend/src/components/layout/Footer.css`

**Add to brand.js**

    tagline: "A boutique Georgian townhouse hotel in the heart of Brighton's Kemp Town — one street from the seafront since 1997.",
    social: {
      instagram: "https://instagram.com/colsonhouse",
      facebook: "https://facebook.com/colsonhouse",
    },
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
    copyright: "© 2024 Colson House. All rights reserved.",
    builtBy: "Website by Hodfords",

**Requirements**



- All content from `brand.js` — never hardcoded
- Use React Router `<Link>` for internal links
- Responsive: 4 cols desktop, 2 cols tablet (768px), 1 col mobile (< 768px)
- Social icons use Tabler icons — no image files
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] 4-column layout on desktop
- [ ] Stacks correctly on tablet and mobile
- [ ] All links route correctly
- [ ] Hover on links turns gold
- [ ] Social icons link correctly
- [ ] Bottom bar shows copyright + built by
- [ ] All values from brand.js

---

### E3.4 — Page Layout Wrapper

Build a reusable Layout component that wraps every page with Header and Footer.

**Files to create**

- `frontend/src/components/layout/Layout.jsx`
- `frontend/src/components/layout/Layout.css`

**Layout.jsx structure**

    <div class="layout">
      <Header />
      <main class="layout__main">
        {children}
      </main>
      <Footer />
    </div>

**Requirements**

- `layout__main` has `min-height: calc(100vh - header height - footer height)`
- Background `--color-bg` applied at layout level
- Import and apply CSS variables from `frontend/src/styles/tokens.css`
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] Header and Footer appear on every page automatically
- [ ] Main content area fills available height
- [ ] CSS tokens file created at `frontend/src/styles/tokens.css` with all design tokens

---

### E4.1 — Rooms Listing Page

Build the Rooms page showing all available rooms.

**Design**

- Page title: "Our Rooms" — `--font-heading`, centered, large
- Subtitle: small gold eyebrow text above title — "COLSON HOUSE · BRIGHTON"
- Room cards in a 3-column grid (desktop), 2-col tablet, 1-col mobile
- Each card: hero image top, room name, size (m²), short description, amenity icons, price per night, Book Now button
- Card bg: slightly lighter than page bg — `#221e17`
- Card hover: subtle gold border `--color-accent`
- Book Now button: gold bg, dark text — same style as header CTA

**Files to create**

- `frontend/src/pages/RoomsPage.jsx`
- `frontend/src/pages/RoomsPage.css`
- `frontend/src/components/rooms/RoomCard.jsx`
- `frontend/src/components/rooms/RoomCard.css`

**API call**

    GET /api/rooms
    Response: [{ id, name, size, description, price, images[], amenities[] }]

**Requirements**

- Fetch rooms from Laravel API `GET /api/rooms`
- Show loading skeleton while fetching
- Show error message if fetch fails
- RoomCard is a separate reusable component
- Clicking a card or Book Now navigates to `/rooms/:id`
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] Rooms fetched from API and displayed
- [ ] Loading state shown while fetching
- [ ] Error state shown if API fails
- [ ] 3-col grid on desktop, 2-col tablet, 1-col mobile
- [ ] Each card shows image, name, size, price, Book Now button
- [ ] Clicking card navigates to room detail page

---

### E4.2 — Room Detail Page

Build the individual room page.

**Files to create**

- `frontend/src/pages/RoomDetailPage.jsx`
- `frontend/src/pages/RoomDetailPage.css`

**API call**

    GET /api/rooms/:id
    Response: { id, name, size, description, price, images[], amenities[], longDescription }

**Design**

- Full-width hero image at top
- Room name in large `--font-heading`
- Size badge, price per night
- Amenities list with icons
- Long description paragraph
- Image gallery grid below description
- Sticky "Book This Room" CTA button on right side (desktop)

**Requirements**

- Fetch room by ID from API using `useParams()`
- Image gallery — clicking image opens lightbox
- "Book This Room" button links to `/book?room=:id`
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] Room data fetched by ID from API
- [ ] Hero image, name, size, price displayed
- [ ] Amenities shown with icons
- [ ] Image gallery renders
- [ ] Book This Room button links to booking with correct room ID

---

### E4.3 — Reuse Room System for Brighton Inn

Add Brighton Inn brand config so the same room components work for both hotels.

**Files to create**

- `frontend/src/config/brands/colson-house.js` (move existing brand.js here)
- `frontend/src/config/brands/brighton-inn.js` (new)
- `frontend/src/config/brand.js` (updated — reads from env variable)

**brand.js updated logic**

    import colsonHouse from './brands/colson-house.js'
    import brightonInn from './brands/brighton-inn.js'
    const brandMap = { 'colson-house': colsonHouse, 'brighton-inn': brightonInn }
    export const brand = brandMap[import.meta.env.VITE_BRAND] || colsonHouse

**brighton-inn.js shape** — same structure as colson-house.js but with Brighton Inn values:

    name: "Brighton Inn",
    subtitle: "Kemp Town, Brighton",
    phone: "+44 1273 044 306",
    email: "info@brightoninn.co.uk",
    address: "20 St Georges Terrace, Brighton, BN2 1JH",

**Requirements**

- No component files should change — only brand.js and config files
- Build command for Colson House: `VITE_BRAND=colson-house npm run build`
- Build command for Brighton Inn: `VITE_BRAND=brighton-inn npm run build`
- Add `VITE_BRAND=colson-house` to `.env.example`

**Acceptance Criteria**

- [ ] `VITE_BRAND=colson-house` builds Colson House site
- [ ] `VITE_BRAND=brighton-inn` builds Brighton Inn site
- [ ] No hotel name or contact info hardcoded in any component
- [ ] Both brands share identical component files

---

### E5.1 — Admin Authentication

Build secure admin login using JWT.

**Files to create**

- `frontend/src/pages/admin/LoginPage.jsx`
- `frontend/src/pages/admin/LoginPage.css`
- `frontend/src/context/AuthContext.jsx`
- `frontend/src/hooks/useAuth.js`
- `backend/app/Http/Controllers/AuthController.php` (if not exists)

**API calls**

    POST /api/auth/login
    Body: { email, password }
    Response: { token, user }

    POST /api/auth/logout
    Headers: Authorization: Bearer {token}

**Design**

- Centered login card on dark bg `--color-bg`
- Logo at top of card
- Email + password inputs — dark bg `#221e17`, cream text, gold focus border
- Login button — gold bg, dark text, full width
- Error message in red below button if login fails

**Requirements**

- Store JWT token in `localStorage` as `admin_token`
- `AuthContext` provides `user`, `login()`, `logout()`, `isAuthenticated`
- All admin routes wrapped in `<ProtectedRoute>` — redirect to `/admin/login` if not authenticated
- Token sent in `Authorization: Bearer` header on all API calls
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] Login form submits to `POST /api/auth/login`
- [ ] JWT token stored in localStorage on success
- [ ] Failed login shows error message
- [ ] Authenticated user redirected to `/admin/dashboard`
- [ ] Unauthenticated access to admin routes redirects to `/admin/login`
- [ ] Logout clears token and redirects to login

---

### E5.2 — Admin Room Management

Build admin panel for adding, editing, and deleting rooms.

**Files to create**

- `frontend/src/pages/admin/RoomsAdminPage.jsx`
- `frontend/src/pages/admin/RoomsAdminPage.css`
- `frontend/src/pages/admin/RoomFormPage.jsx`
- `frontend/src/pages/admin/RoomFormPage.css`
- `backend/app/Http/Controllers/RoomController.php`
- `backend/app/Models/Room.php`
- `database/migrations/xxxx_create_rooms_table.php`

**API calls**

    GET    /api/admin/rooms          — list all rooms
    POST   /api/admin/rooms          — create room
    PUT    /api/admin/rooms/:id      — update room
    DELETE /api/admin/rooms/:id      — delete room

    Body (create/update): { name, size, description, price, amenities[], images[] }

**Design**

- Admin layout: dark sidebar left (links: Rooms, Content, Media), main content area right
- Rooms list: table with columns — Name, Size, Price, Status, Actions (Edit / Delete)
- Add Room button top right — navigates to room form
- Room form: inputs for name, size (m²), description, price per night, amenities (multi-select), image upload
- Delete: confirmation modal before deleting

**Requirements**

- All admin routes protected by `<ProtectedRoute>` (from E5.1)
- Send `Authorization: Bearer {token}` header on all admin API calls
- Room form used for both Create and Edit (detect by presence of `:id` in URL)
- Delete triggers confirmation modal — only deletes on confirm
- After create/edit/delete — redirect back to rooms list with success message
- No Tailwind — plain CSS only

**Acceptance Criteria**

- [ ] Rooms list fetched and displayed in table
- [ ] Add Room navigates to empty form
- [ ] Edit Room navigates to pre-filled form
- [ ] Create submits `POST /api/admin/rooms`
- [ ] Update submits `PUT /api/admin/rooms/:id`
- [ ] Delete shows confirmation modal then calls `DELETE /api/admin/rooms/:id`
- [ ] All actions require valid JWT token

---

## Done

- [x] E2.0 — Website designs (signed off)
- [x] E2.1 — Tech stack configured (Laravel + React + Vite + MySQL)
- [x] E2.2 — Colson House design tokens extracted (colors, fonts, CSS variables)