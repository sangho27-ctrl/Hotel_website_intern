# Hotel Website — Intern Project

Rebuild of [Colson House Brighton](https://colsonhouse.co.uk) from WordPress to a modern stack.

## Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 11 (PHP 8.2+) |
| Frontend | React 18 + Vite |
| Database | MySQL 8 |
| Auth | JWT via `tymon/jwt-auth` |

## Project Structure

```
Hotel_website_intern/
├── backend/      # Laravel API (port 8000)
└── frontend/     # React + Vite app (port 5173)
```

---

## Local Setup

### Prerequisites

Make sure you have all of these installed before starting:

- PHP 8.2+ and Composer
- Node 18+ and npm
- MySQL 8 (running locally)

---

### 1. Clone the repo

```bash
git clone https://github.com/sangho27-ctrl/Hotel_website_intern.git
cd Hotel_website_intern
```

---

### 2. Create the database

Open MySQL (via MySQL Workbench, TablePlus, or the CLI) and run:

```sql
CREATE DATABASE hotel_website CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

---

### 3. Backend setup

```bash
cd backend
cp .env.example .env
```

Open `.env` and update these values with your own MySQL credentials:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hotel_website
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
``` 

Then run the following commands **in order**:

```bash
composer install
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan db:seed
php artisan storage:link
php artisan serve
```

What each command does:

| Command | Purpose |
|---------|---------|
| `composer install` | Install PHP dependencies |
| `key:generate` | Generate the app encryption key |
| `jwt:secret` | Generate the JWT signing secret |
| `migrate` | Create all database tables |
| `db:seed` | Insert 5 sample rooms |
| `storage:link` | Symlink `storage/app/public` → `public/storage` (needed for media uploads) |
| `serve` | Start the API on `http://localhost:8000` |

---

### 4. Create the admin user

While the backend is running, open a second terminal in the `backend/` folder and run:

```bash
php artisan tinker
```

Then paste this inside tinker:

```php
\App\Models\User::create([
    'name'     => 'Admin',
    'email'    => 'admin@colsonhouse.co.uk',
    'password' => bcrypt('password123'),
]);
exit
```

> You only need to do this once. Change the password to something secure before deploying.

---

### 5. Frontend setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`.

> The frontend proxies all `/api` requests to `http://localhost:8000` automatically via Vite config — no CORS setup needed locally.

---

### 6. Verify everything works

| URL | What you should see |
|-----|---------------------|
| `http://localhost:5173` | Homepage |
| `http://localhost:5173/rooms` | Rooms list (5 rooms from seed) |
| `http://localhost:5173/admin/login` | Admin login page |
| `http://localhost:8000/api/rooms` | JSON list of rooms |

Admin credentials:
- Email: `admin@colsonhouse.co.uk`
- Password: `password123`

---

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code only — never commit directly |
| `dev` | Integration branch — merge feature branches here first |
| `feature/<name>` | One branch per feature (e.g. `feature/rooms-page`) |

**Workflow:** `feature/*` → PR to `dev` → reviewed → merge to `main`

**Commit message convention:**

```
feat:     new feature
fix:      bug fix
chore:    config, dependencies, setup
refactor: code change, no new feature
docs:     documentation only
```

Example: `feat: add rooms page API endpoint`

---

## API Endpoints

### Public (no auth required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/login` | Login, returns JWT token |
| `GET` | `/api/rooms` | List all rooms |
| `GET` | `/api/rooms/{id}` | Get single room |

### Protected (requires `Authorization: Bearer <token>`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/logout` | Logout |
| `GET` | `/api/auth/me` | Get current user |
| `POST` | `/api/admin/rooms` | Create room |
| `PUT` | `/api/admin/rooms/{id}` | Update room |
| `DELETE` | `/api/admin/rooms/{id}` | Delete room |
| `GET` | `/api/admin/media` | List uploaded media |
| `POST` | `/api/admin/media` | Upload image |
| `DELETE` | `/api/admin/media/{id}` | Delete image |

---

## Common Issues

**`php artisan migrate` fails — can't connect to database**
→ Make sure MySQL is running. On Windows, start it from MySQL Workbench or Services.

**`php artisan jwt:secret` — JWT_SECRET not found in .env**
→ Make sure you ran `cp .env.example .env` first.

**`php artisan storage:link` — already exists**
→ Safe to ignore if the symlink already exists.

**Rooms page shows empty / error**
→ Make sure the backend is running on port 8000 and you ran `php artisan db:seed`.

**Admin login returns 401**
→ Make sure you created the admin user via tinker (Step 4 above).

---

## Security Notes

- Never commit `.env` — it is in `.gitignore`
- Use `.env.example` for sharing config structure (no real credentials)
- JWT tokens expire after 60 minutes (set via `JWT_TTL` in `.env`)
- All inputs are validated server-side via Laravel Form Requests
- Database queries use Eloquent ORM — no raw SQL with user input
