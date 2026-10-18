# Sara, My Love ♡

A romantic, private anniversary website built with Next.js, Vercel, and Neon Postgres.

## Features
- Server-validated password gate and signed, HTTP-only session cookie.
- Live timer counting from November 11, 2024.
- Responsive romantic landing page and memory placeholders.
- `/api/health` endpoint to verify the Neon connection without exposing credentials.

## Local setup
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Set `DATABASE_URL` to your Neon pooled connection string.
5. Set a strong `SESSION_SECRET` (at least 32 characters).
6. Set `LOVE_PASSWORD` (default requested password: `14413`).
7. Run `npm run dev`.

Visit `http://localhost:3000`. Check `/api/health` to verify the database connection.

## Deploy to Vercel
Import this repository in Vercel. Add `DATABASE_URL`, `LOVE_PASSWORD`, and `SESSION_SECRET` under Project Settings → Environment Variables. Redeploy after changing environment variables.

## Notes
- Never commit `.env.local` or expose `DATABASE_URL` in browser code.
- The supplied password is short and intended for a personal surprise, not high-security data. For a public deployment, consider rate limiting `/api/unlock` and changing the password to a longer secret.
- The page is private behind the password screen, but the visual assets and HTML are not a substitute for access controls on any future private image/file APIs.
