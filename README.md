# Terminal CV

A config-driven CV/resume site with a terminal-inspired design, built with [UtopiaJS](https://github.com/wrxck/utopiajs) and Vite. Includes PDF export.

## Quick Start

1. Clone this repo
2. Edit `site.config.ts` with your details (experience, skills, projects, contact)
3. Install and build:

```bash
pnpm install
pnpm build
```

The build will fail if `site.config.ts` still contains placeholder values.

## Configuration

Edit `site.config.ts` at the project root. This single file contains all your CV data. Type definitions are in `site.config.types.ts`.

### Meta Fields

| Field | Description |
|-------|-------------|
| `url` | Your site's canonical URL |
| `locale` | Locale code (e.g. `en_GB`) |
| `themeColor` | Browser theme color (hex) |
| `sentryDsn` | Sentry DSN for error tracking (leave empty to disable) |
| `pdfFilename` | Filename for PDF export (without `.pdf`) |

### CV Data

| Field | Description |
|-------|-------------|
| `identity.name` | Your full name |
| `identity.title` | Your job title |
| `identity.summary` | A paragraph describing yourself |
| `experience` | Array of work experience entries |
| `skills` | Array of skill categories with items |
| `projects` | Array of notable projects |
| `contact` | Array of contact links (email, GitHub, LinkedIn) |

See `site.config.types.ts` for the exact shape of each entry.

## Local Development

```bash
pnpm dev
```

Opens at `http://localhost:5173`.

## PDF Export

Click the "Export PDF" button on the site. The PDF is generated client-side using `@react-pdf/renderer`.

## Deployment

### Docker

```bash
docker compose up -d --build
```

Serves on port `60611`. Configure your reverse proxy to point your domain here.

To enable Sentry, set `sentryDsn` in `site.config.ts` to your DSN.

### Static

The `dist/` folder after `pnpm build` is a static site. Deploy to any static host.
