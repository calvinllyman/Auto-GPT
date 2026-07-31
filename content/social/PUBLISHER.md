# Facebook publisher — Calvin Lyman Real Estate

Publishes approved social queue items to Calvin's Facebook Page via Zapier.

## Prerequisites
- Homes for Heroes assets dropped in `content/social/homes-for-heroes/assets/`
- Queue JSON files in `content/social/queue/` with `"status": "ready"`
- User confirms the Facebook Page name and approves each post

## Validated fixed values
- Website CTA base: `https://calvinlymanrealestate.com`
- HFH landing page: `https://calvinlymanrealestate.com/buy/homes-for-heroes`
- Zapier Facebook app available (Create Page Photo / Create Page Post)

## Actions
Use Zapier MCP after user approval:

- Photo post: `ZapierAction[FacebookV2CLIAPI:page_photo](page: PAGE_NAME, source: MEDIA_URL_OR_FILE, message: CAPTION)`
- Text/link post: `ZapierAction[FacebookV2CLIAPI:page_stream](page: PAGE_NAME, message: CAPTION, link_url: LINK, source: OPTIONAL_MEDIA)`

## Runtime instructions
1. Read the next `ready` item from `content/social/queue/`.
2. Show Calvin the exact caption, media, and link — wait for explicit approval before any write.
3. Prefer publicly accessible media URLs (or Zapier-accepted file uploads under 4MB JPEG/PNG).
4. After a successful post, move the JSON to `content/social/published/` and set `"status": "published"` with timestamp.
5. Always include a next-step link back to calvinlymanrealestate.com when relevant.

## Constraints
- Never post without explicit approval of the final caption/media.
- Never invent Homes for Heroes savings claims beyond approved HFH copy.
- Do not post to Instagram until that channel is intentionally enabled for this workflow.
- Keep Epic / VIP / HFH as affiliations under the personal brand — not separate brands.
