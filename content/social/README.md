# Social publishing content

Pipeline for Calvin Lyman Real Estate Facebook posts (Homes for Heroes + original content).

## Folders

| Path | Purpose |
| --- | --- |
| `homes-for-heroes/assets/` | Official HFH social graphics, templates, and downloads from the affiliate portal |
| `homes-for-heroes/captions/` | Caption drafts paired with HFH assets |
| `queue/` | JSON items ready to publish |
| `published/` | Archive of posts that went live |

## Homes for Heroes assets (your step)

Branded HFH social packs live in the **affiliate portal** (not the public website).

1. Log in at [homesforheroes.com](https://www.homesforheroes.com/) → affiliate / member dashboard  
2. Download all available **social media / marketing** resources  
3. Drop the files into `content/social/homes-for-heroes/assets/` (keep zip folders unzipped)  
4. Tell the agent — we’ll catalog them and build the publish queue

## Queue item format

Create a file like `queue/2026-08-01-hfh-001.json`:

```json
{
  "id": "2026-08-01-hfh-001",
  "status": "ready",
  "channel": "facebook_page",
  "source": "homes-for-heroes",
  "message": "Serving local heroes across the OKC metro. Ask me how Homes for Heroes savings can help with your next move.\n\nhttps://calvinlymanrealestate.com/buy/homes-for-heroes",
  "linkUrl": "https://calvinlymanrealestate.com/buy/homes-for-heroes",
  "media": ["content/social/homes-for-heroes/assets/example.jpg"],
  "scheduledFor": null,
  "notes": ""
}
```

## Publishing (current: Publer Free)

Primary path is **Publer Free** personal Facebook profile (push-to-post), via Desktop batch CSVs:

- Batches: `Desktop\Publer_Free_Batches\`
- How-to: `Desktop\HOW_TO_USE_PUBLER_FREE.txt`
- Queue drafts in this repo: `content/social/queue/*.json`

When a cornerstone article ships on the website, add a companion post to the next Publer batch **and** a matching `queue/*.json` file with the live article URL.

Optional later: Zapier → Facebook Pages for fully automated publishing.
