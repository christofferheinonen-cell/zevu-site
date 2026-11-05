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
| `ADMIN_EMAIL` | Admin login and where enquiries are emailed. The password is set via an emailed link (`/admin/forgot`) and stored only as a scrypt hash in Redis. |
| `RESEND_API_KEY` | Resend API key (secret). Sends enquiry notifications and password-reset links. |
| `RESEND_FROM` | Sender, e.g. `Zevu <hello@zevu.cc>` once the domain is verified in Resend. Defaults to `onboarding@resend.dev`. |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` (or Upstash equivalents) | Leads, articles, admin password hash, sessions and rate limits. Required for admin login in production. |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number (e.g. `34600111222`); buttons are hidden until set |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, defaults to `https://www.zevu.cc` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_GA4_PROPERTY_ID`, `GOOGLE_SEARCH_CONSOLE_SITE_URL` | Admin Analytics and Search Console pages |

## Develop

```bash
npm install
npm run dev
```

## Security

- Admin pages and APIs are guarded by `proxy.ts`: server-side sessions (random token, only its hash stored, 7-day expiry, revoked on logout and on password reset) and a same-origin check on every state-changing request.
- Rate limits: login 5 per 15 min per IP and 20 per hour overall; password-reset emails 3 per hour per IP; contact form 5 per 10 min per IP.
- Article HTML is sanitized on save. Secrets live only in Vercel environment variables; modules that read them are marked `server-only`.
