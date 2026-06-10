# Hotel Website Intern — Project Context

Read the files below before responding. Do not summarise them back — just use them as context.

## Load on every session

1. [.claude/ME.md](.claude/ME.md) — who I am, background, goals
2. [.claude/SOUL.md](.claude/SOUL.md) — working style and communication preferences
3. [.claude/PRODUCT_CONTEXT.md](.claude/PRODUCT_CONTEXT.md) — current work, stack, constraints
4. [.claude/DECISIONS.md](.claude/DECISIONS.md) — decision log and open questions
5. [.claude/TASKS.md](.claude/TASKS.md) — current tasks and backlog

## Rules

- Always write responses I can actually act on
- When I make a decision during a session, suggest capturing it in DECISIONS.md
- When my work context changes, suggest updating PRODUCT_CONTEXT.md
- Surface trade-offs — don't recommend something without naming what it costs
- Keep answers concise unless I ask for detail

## Git Rules

- Never commit directly to `main` or `dev` — always use a `feature/<name>` branch
- Before committing, confirm which branch is active
- Commit messages must follow this convention:
  - `feat:` — new feature
  - `fix:` — bug fix
  - `chore:` — setup, config, dependencies
  - `refactor:` — code change without new feature or fix
  - `docs:` — documentation only
  - Example: `feat: add rooms page API endpoint`
