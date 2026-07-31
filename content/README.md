# Content engine

Markdown files with YAML-ish frontmatter power Community and Resources pages.

## Folders

| Kind | Path | URL |
| --- | --- | --- |
| Neighborhood | `content/community/neighborhoods/*.md` | `/community/{slug}` |
| Event | `content/community/events/*.md` | `/community/events/{slug}` |
| Business | `content/community/businesses/*.md` | `/community/businesses/{slug}` |
| Guide | `content/resources/guides/*.md` | `/resources/guides/{slug}` |
| FAQ | `content/resources/faqs/*.md` | `/resources/faqs/{slug}` |
| Checklist | `content/resources/checklists/*.md` | `/resources/checklists/{slug}` |
| Market report | `content/resources/market-reports/*.md` | `/resources/market-reports/{slug}` |

## Frontmatter

```md
---
title: Page title
description: Meta + card summary
date: 2026-07-31
city: Yukon
tags: buyers, guides
ctaLabel: Schedule a consult
ctaHref: /schedule
---

Body in simple Markdown (`##` / `###` headings, `-` or `1.` lists, `**bold**`, `*italic*`, `[links](/path)`).
```

Do not invent school ratings, HOA fees, or testimonials. Keep local copy high-level and route readers to Calvin for specifics.
