# Calvin Lyman Real Estate

Marketing website and digital headquarters for **Calvin Lyman Real Estate** (`CalvinLymanRealEstate.com`).

Built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS** — ready for Vercel.

## What's included

- Full site IA: Home, Buy, Sell, Rentals, Resources, Community, About, Contact, Schedule
- Lead forms for consultation, home valuation, buyer guide, and newsletter
- HubSpot + Resend wiring via environment variables
- Privacy Policy and Terms of Use
- Equal Housing, REALTOR®, Epic Real Estate, and Homes for Heroes marks in the footer
- Brand system: `#2d465c`, `#db392b`, `#ffffff` · Montserrat + Work Sans

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `HUBSPOT_PORTAL_ID` | HubSpot portal ID |
| `HUBSPOT_FORM_ID` | HubSpot form ID for website leads |
| `RESEND_API_KEY` | Sends notification emails to Calvin |
| `LEAD_NOTIFY_EMAIL` | Defaults to `calvinlyman@gmail.com` |
| `ALLOW_DEMO_LEADS` | Accepts leads locally without integrations |

### HubSpot form setup (recommended next step)

1. In HubSpot, create a form with fields: first name, last name, email, phone, message, address (optional), and a marketing consent checkbox.
2. Add a hidden/`single-line` field named `lead_type` if you want source tagging.
3. Enable form submission notifications to `calvinlyman@gmail.com`.
4. Paste Portal ID + Form ID into Vercel env vars / `.env.local`.

Until HubSpot/Resend are configured, local/dev submissions are accepted in demo mode and logged server-side.

## Brand assets to add

Drop these exact filenames into `public/brand/` (SVG placeholders remain until the real files appear):

| File | Used on |
| --- | --- |
| `public/brand/calvin-headshot.jpg` | About page + Home “About Calvin” section |
| `public/brand/epic-real-estate.png` | Footer brokerage disclosure + About affiliations |
| `public/brand/homes-for-heroes.png` | Homes for Heroes page + Footer affiliation area |

Still needed when ready:

- Official Calvin Lyman logo (currently using a wordmark)
- VIP Realty logo (Texas affiliation)
- Official REALTOR® logo file from NAR if you prefer that over the included mark

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy
5. Point `CalvinLymanRealEstate.com` when the domain is ready

## Contact

- Calvin Lyman — `calvinlyman@gmail.com` · `405-421-4220`
- Epic Real Estate — 508 W Vandament Avenue, Yukon, Oklahoma 73099
