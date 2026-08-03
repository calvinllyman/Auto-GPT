# Calvin Lyman Real Estate — Plan backlog

Living checklist for the marketing site + automation build. Items stay here until intentionally scheduled.

## Done
- [x] Next.js foundation + full IA (Home, Buy, Sell, Rentals, Resources, Community, About, Contact, Schedule, Privacy, Terms)
- [x] Brand system (navy/crimson, Montserrat + Work Sans)
- [x] Lead forms wired for HubSpot + Resend (demo mode works locally)
- [x] Brand assets in UI: headshot, Epic, VIP Realty, Homes for Heroes
- [x] About page bio (Calvin’s copy)
- [x] Facebook + LinkedIn footer links
- [x] HubSpot portal ID `245992846` + form ID `f6fe1d07-cf0d-4f49-91c4-56a2bcf49f7e`
- [x] Calendly embed — `https://calendly.com/calvinlyman/new-meeting`
- [x] User-facing copy pass (removed internal/meta voice)
- [x] Header CTA white text + footer logo rendering QA
- [x] Educational reels library at `/resources/videos` (11 Facebook reels)
- [x] Vercel project `calvin-lyman-real-estate` deployed
- [x] Custom domains added in Vercel (`calvinlymanrealestate.com` + `www`) — DNS pointed
- [x] GoDaddy zone verified: A `@` + `www` → `76.76.21.21` (HTTP live; HTTPS cert provisioning)
- [x] HTTPS working on custom domain
- [x] Resend API key added (Vercel + local); domain `calvinlymanrealestate.com` created in Resend
- [x] Resend domain verified (DKIM + SPF); test lead email sent to calvinlyman@gmail.com
- [x] Publer Free Plan A live (Batch 01 imported; refill calendar through Dec)

## Next / blocked on Calvin
- [ ] Enable Cloudflare R2 (Dashboard → R2), then upload reels + set `NEXT_PUBLIC_VIDEO_CDN_BASE` on Vercel (see `branding/VIDEO_CDN.md`)
- [ ] Optional HubSpot subscription type ID for marketing consent
- [ ] Rotate Resend API key (was shared in chat) and update Vercel
- [ ] Instagram / YouTube / Google Business / TikTok URLs when ready
- [ ] Official REALTOR® logo from NAR (optional upgrade over placeholder)
- [ ] Official Calvin Lyman wordmark/logo if separate from text brand
- [ ] Confirm/adjust tagline wording if desired
- [ ] Provide real titles/topics for each educational reel (`src/lib/reels.ts`)
- [ ] Solicit past-client testimonials (quotes + permission) for Home/About

## Later plan steps
- [x] Facebook publishing Plan A (Publer Free batches) — handled with companion agent
- [ ] Homes for Heroes affiliate portal asset pack (optional deeper library; Plan A captions already running)
- [ ] Plan B: Sheets → Publer Zap automation (optional later)
- [ ] IDX / home search integration
- [x] Community content engine (neighborhoods, events) — markdown under `content/community/`
- [x] Resources SEO machine (guides, checklists, market reports, FAQs) — markdown under `content/resources/`
- [x] Cornerstone article #1: low appraisal guide + Publer companion post (Batch 02 / Aug 3 5pm)
- [x] Content quality pass: rental guide library + deepened buy/sell guides (closing costs, VA, HFH, option period, offers, inspections, seller prep)
- [ ] Evergreen content library goal: ~100 cornerstone articles over 12–18 months (SEO Q&A pattern + social companion each time)
- [x] Local events calendar beefed up (Calvin’s Safety Awareness Day + Yukon/Edmond metro events)
- [x] ClearPath System™ ebook + Homeownership for Heroes workshop pages featured on homepage
- [ ] Continue deepening remaining neighborhood pages beyond Yukon / Mustang / Edmond
- [x] Video CDN-ready plumbing (`NEXT_PUBLIC_VIDEO_CDN_BASE`, upload script, gitignore mp4s)
- [ ] Enable Cloudflare R2 in dashboard + upload reels + set CDN env on Vercel (blocked until R2 enabled)
- [x] QR / card / email-signature / Google Business destination alignment (`/start`, `branding/`)

### GoDaddy DNS — site (done)
| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| A | `www` | `76.76.21.21` |

### GoDaddy DNS — Resend email (done)
| Type | Name | Value | Priority |
| --- | --- | --- | --- |
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCijYstKSr7DzYhoBF9osks8RcxhxDO+JDmscjZzfs5vbMt+cwqecLX0DvzNsdLV9oYh3XA09jR3sqmsan04HawFu3eLAO1FPsAaZJMZKdBOckT/9aO0RD5oY1tvx9I8oPsQvQwdDRTmabXAlKBd8tjqaQq+vMlhVQjQZVJ8duBVQIDAQAB` | — |
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` | `10` |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | — |

Live: https://calvinlymanrealestate.com
