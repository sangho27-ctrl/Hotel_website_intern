# Hotel Website — Intern Project

Rebuild of Colson House website (colsonhouse.co.uk) from WordPress to a modern stack.

## Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel (PHP) |
| Frontend | ReactJS + Vite |
| Database | MySQL |
| Authentication | JWT (tymon/jwt-auth) |

## Project Structure

```
Hotel_website_intern/
├── backend/    # Laravel API
└── frontend/   # React app
```

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code only — never commit directly |
| `dev` | Integration branch — merge feature branches here first |
| `feature/<name>` | One branch per feature (e.g. `feature/rooms-page`) |

**Workflow**: `feature/*` → PR to `dev` → reviewed → merge to `main`

---

## Local Setup (First Time)

### Prerequisites

- PHP 8.2+, Composer
- Node 18+, npm
- MySQL

### Step 1 — Clone the repo

```bash
git clone https://github.com/sangho27-ctrl/Hotel_website_intern.git
cd Hotel_website_intern
```

### Step 2 — Create the database

Open MySQL and run:

```sql
CREATE DATABASE hotel_website;
```

### Step 3 — Backend setup

```bash
cd backend
cp .env.example .env
```

Open `.env` and fill in your own MySQL credentials:

```
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
```

Then run:

```bash
composer install
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve
```

Backend will be available at `http://localhost:8000`.

### Step 4 — Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`.

---

## Security Notes

- Never commit `.env` — it is in `.gitignore`. Use `.env.example` with placeholder values only.
- No API keys or credentials hardcoded in source
- All inputs validated server-side
- Database queries use Eloquent ORM (no raw SQL with user input)
- JWT tokens expire after 60 minutes (configurable via `JWT_TTL` in `.env`)
