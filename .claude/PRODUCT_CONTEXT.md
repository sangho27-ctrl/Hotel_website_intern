# Project Context

## My Role at Hodfords

- **Track**: Web Development
- **Supervisor**: Cong Nguyen
- **Placement Manager**: Orlando Adam
- **Placement dates**: 8 June – 28 August 2026

## What I'm Working On

### Project: Hotel Website Rebuild

Rebuilding Colson House website (colsonhouse.co.uk) from WordPress to a modern client-server architecture. Working with one other intern.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel (PHP) |
| Frontend | ReactJS + Vite |
| Database | MySQL |
| Authentication | JWT (tymon/jwt-auth v2.3) |

## Project Structure

```
Hotel_website_intern/
├── backend/    # Laravel API
└── frontend/   # React app
```

## Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready — never commit directly |
| `dev` | Integration branch — merge feature branches here first |
| `feature/<name>` | One branch per feature |

## Key People

- **Orlando Adam** — Placement Manager
- **Cong Nguyen** — Day-to-day technical supervisor

## Known Constraints

- Must ask Cong Nguyen before pushing to main / production
- Two interns working on the same repo — always branch from `dev`
- FreeToBook booking widget is third-party — cannot patch internal logic directly
- Placement only until 28 August 2026



## 