# Zevu

Website studio for restaurants, bars and coffee shops in Spain. Next.js (App Router) on Vercel.

## Structure

| Path | What it is |
| --- | --- |
| `lib/content/en.ts`, `lib/content/es.ts` | All site copy, one file per language, sharing one type. Change prices and wording in both. |
| `app/(en)/…` | English pages at the root: `/`, `/restaurants`, `/bars`, `/coffee-shops`, `/other-businesses`, `/blog`, `/contact` |
| `app/(es)/es/…` | Spanish pages: `/es`, `/es/restaurantes`, `/es/bares`, `/es/cafeterias`, `/es/otros-negocios`, `/es/blog`, `/es/contacto` |
| `components/site/views/` | Page layouts shared by both languages |
| `lib/articles/` | Blog articles: model, storage, SEO checklist |
| `lib/articles/seed/` | Articles shipped in code (one EN + ES pair per file) |
| `app/admin/` | Admin panel: articles, enquiries, Analytics, Search Console |

## Articles

Articles shipped in `lib/articles/seed/` are merged with articles created or edited in the admin.
Admin changes are stored in Redis (Vercel KV / Upstash) in production and in `data/articles.json`
locally. Editing a seed article in the admin saves a copy that overrides the code version; "Restore
original" removes the copy.

Each article has a language, a translation group (links the EN and ES versions for hreflang and the
language switch), a sector, a focus keyword, SEO title and description, and FAQs (marked up as
FAQPage). The editor scores each article against an on-page SEO checklist (`lib/articles/seo.ts`).

## Environment

| Variable | Purpose |
| --- | --- |
| `ADMIN_USER`, `ADMIN_PASSWORD` | Admin login |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` (or Upstash equivalents) | Leads and article storage |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number (e.g. `34600111222`); buttons are hidden until set |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, defaults to `https://www.zevu.cc` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_GA4_PROPERTY_ID`, `GOOGLE_SEARCH_CONSOLE_SITE_URL` | Admin Analytics and Search Console pages |

## Develop

```bash
npm install
npm run dev
```
