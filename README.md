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

## Local Setup

### Prerequisites
- PHP 8.2+, Composer
- Node 18+, npm
- MySQL

### Backend

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve
```

Create a MySQL database named `hotel_website` first.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Security Notes

- Never commit `.env` files — use `.env.example` with placeholder values
- No API keys or credentials hardcoded in source
- All inputs validated server-side
- Database queries use Eloquent ORM (no raw SQL with user input)
- JWT tokens expire after 60 minutes (configurable via `JWT_TTL`)
