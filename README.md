# PDFSwifter

PDFSwifter is a production-focused web platform for PDF utilities and social video downloads, built as a two-service architecture:

- `PDFSwifter/`: Next.js web app (UI + API routes + auth/session + usage limits + payment flow)
- `PDFSwifter-api/`: FastAPI worker API (PDF conversion/compression + async TikTok/Instagram/YouTube downloads)

It is deployed with Docker Compose, Caddy (TLS/reverse proxy), and Redis.

## Why this project is CV-ready

- End-to-end full-stack architecture (Next.js + FastAPI + Redis + Caddy)
- Async job pipeline with progress polling (`process_id` pattern)
- Feature flag + reliability gate system for safe tool rollout/auto-disable
- Freemium usage controls with monthly limits and premium unlock logic
- Production hardening in containers (non-root users, read-only FS, health checks)

## Key Features

- PDF tools:
  - Compress PDF (async)
  - Rotate PDF
  - PDF to Excel
  - PDF to JPG
  - PDF to Word (implemented, currently policy-disabled by default)
- Social download tools:
  - TikTok download (async)
  - Instagram download (async)
  - YouTube download pipeline (implemented in backend; disabled by default in tool policy)
- Platform capabilities:
  - Auth (signup/signin/signout/session) with signed HTTP-only cookie session token
  - Per-tool usage tracking by month (`ip/token/user`)
  - Premium plan detection from approved payment orders
  - Dynamic sitemap/SEO pages

## Architecture

```text
Browser
  -> Next.js app (PDFSwifter)
     -> Tool policy + usage checks + auth/session
     -> Tool processor layer
        -> Local processing (e.g., rotate) OR
        -> FastAPI API (PDFSwifter-api)
           -> yt-dlp / PDF libraries / background jobs
           -> Redis-backed job tracking
  <- Polling/download via Next.js proxy routes
```

## Tech Stack

- Frontend: Next.js 16, React 19, Tailwind CSS 4, Heroicons
- Backend API: FastAPI, Uvicorn, yt-dlp, PyMuPDF, pdfplumber, pandas, pdf2docx, Pillow
- Data/infra: Redis, Docker Compose, Caddy, JSON-based usage/order stores
- Other: MSSQL integration (`mssql`), bcrypt password hashing

## Repository Layout

```text
.
├── PDFSwifter/            # Next.js app
│   ├── app/               # App routes + API routes
│   ├── features/          # Tool processors + UI features
│   ├── lib/               # Policy, usage, auth, payment, db helpers
│   └── deploy/            # Service env examples
├── PDFSwifter-api/        # FastAPI service
│   ├── app/routes/        # tiktok, instagram, downloads, pdf endpoints
│   ├── app/services/      # redis client, tracker, cleanup
│   └── app/downloaders/   # yt-dlp downloaders
├── docker-compose.yml
└── .env.example
```

## Quick Start (Docker, recommended)

1. Create environment files:

```bash
cp .env.example .env
cp PDFSwifter/deploy/web.env.example PDFSwifter/deploy/web.env
cp PDFSwifter/deploy/api.env.example PDFSwifter/deploy/api.env
```

2. Update required values:

- Root `.env`: `WEB_DOMAIN`, `API_DOMAIN`, `CADDY_EMAIL`, `REDIS_PASSWORD`
- `PDFSwifter/deploy/web.env`: `AUTH_SECRET` and any payment/ad settings
- `PDFSwifter/deploy/api.env`: `ALLOWED_ORIGINS`, `ALLOWED_HOSTS`, downloader settings

3. Start stack:

```bash
docker compose up -d --build
```

4. Health checks:

- Web: `GET /api/health`
- API: `GET /health`

## Local Development (without Docker)

1. Start API:

```bash
cd PDFSwifter-api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

2. Start Next.js app:

```bash
cd PDFSwifter
cp .env.example .env.local
npm install
npm run dev
```

3. For local API integration, set these in `PDFSwifter/.env.local`:

```env
API_BASE_URL=http://localhost:8000
PDF_CONVERTER_API_BASE_URL=http://localhost:8000
TIKTOK_API_BASE_URL=http://localhost:8000
INSTAGRAM_API_BASE_URL=http://localhost:8000
YOUTUBE_API_BASE_URL=http://localhost:8000
```

## Main API Endpoints

- `POST /pdf/compress`
- `POST /pdf/to-word`
- `POST /pdf/to-excel`
- `POST /pdf/to-image`
- `POST /tiktok/download`
- `POST /instagram/download`
- `POST /youtube/download`
- `GET /downloads/{process_id}`
- `GET /downloads/{process_id}/file`
- `GET /health`

## Testing

```bash
cd PDFSwifter
npm test
```

## Deployment Notes

- Use strong secrets for `REDIS_PASSWORD` and `AUTH_SECRET`.
- Keep env files out of git.
- Configure DB credentials through environment variables before public deployment.
- Some tools are intentionally disabled via policy defaults and can be enabled via `data/tools-config.json`.
