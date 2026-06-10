# Decisions

## Open Questions / Pending Decisions

_Last reviewed: 2026-06-09_

1. **Deployment process** — Where does the Laravel backend get hosted? Confirm with placement manager before any deploy work.
2. **Room content** — Do room photos and descriptions already exist, or do we source from the hotel owner?
3. **Reviews approach** — Manual curation (4–6 static quotes) or a live embedded widget (Google Reviews)? Needs supervisor sign-off.

---

## Decision Log

## 2026-06-08 — Decision: Stack confirmed — Laravel + React + MySQL + JWT

- **Why**: Rebuilding from WordPress to a proper client-server architecture for better maintainability and extensibility.
- **Trade-offs**: Higher initial setup cost vs WordPress; no CMS for non-technical edits.
- **Status**: Implemented — project scaffolded.

## 2026-06-09 — Decision: Project structure — backend/ + frontend/ in monorepo

- **Why**: Two interns working together; single repo simplifies Git workflow and onboarding.
- **Trade-offs**: Not a separate API repo — easier to manage but less separation of concerns.
- **Status**: Implemented.
