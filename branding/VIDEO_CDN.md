# Video CDN (R2 / Mux / YouTube)

Large educational reels should not ship inside the Next.js deploy forever. The site already supports a CDN base URL.

## Current status

- Local files: `public/videos/reels/reel-01.mp4` … `reel-11.mp4` (~47MB total)
- App reads: `NEXT_PUBLIC_VIDEO_CDN_BASE` when set; otherwise `/videos/reels/...`
- Cloudflare R2 on the connected account returned: **“Please enable R2 through the Cloudflare Dashboard.”** — enable R2 once, then upload.

## Recommended path: Cloudflare R2

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **R2** → enable R2.
2. Create a bucket, e.g. `calvin-lyman-reels`.
3. Upload the 11 mp4 files under a prefix such as `reels/` (so keys look like `reels/reel-01.mp4`).
4. Enable public access (custom domain preferred), e.g. `https://videos.calvinlymanrealestate.com` or the R2.dev public URL.
5. Set in Vercel + `.env.local`:

```env
NEXT_PUBLIC_VIDEO_CDN_BASE=https://videos.calvinlymanrealestate.com/reels
```

6. Redeploy. Confirm `/resources/videos` plays from the CDN URL (network tab).
7. After CDN is confirmed in production, stop shipping mp4s in git/deploys:

```bash
git rm --cached public/videos/reels/*.mp4
# files stay on disk; .gitignore already ignores them
```

Keep a local backup until you’re sure the CDN copies are good.

### Upload helpers

```bash
# After R2 is enabled + wrangler logged in:
npx wrangler r2 object put calvin-lyman-reels/reels/reel-01.mp4 --file=public/videos/reels/reel-01.mp4 --content-type=video/mp4
# …repeat for reel-02 … reel-11
```

Or use the dashboard drag-and-drop upload.

## Alternatives

| Option | When to use |
| --- | --- |
| **Mux** | Need adaptive streaming / signed playback |
| **YouTube** | Fine for public embeds; less control over player UX |
| **Keep local temporarily** | OK for now at ~47MB; move before heavy traffic |

## Env

See `.env.example` → `NEXT_PUBLIC_VIDEO_CDN_BASE`.
