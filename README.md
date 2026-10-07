# Consolidated Services Bureau website

Next.js website for the Abu Dhabi marine surveying and loss adjusting business. The home page covers the company, services, UAE coverage, FAQs and contact details. `/gallery` presents the two supplied videos and a filterable field photograph collection.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`. For a production check, run `npm.cmd run build` and `npm.cmd run lint`.

## Content and assets

- Business copy comes from the supplied `Brochure Text.docx`, edited for readability without adding unverified service claims.
- `public/logo.jpeg`, the original four gallery photographs, 38 additional photographs in `public/gallery/`, and the two gallery videos are supplied assets.
- `public/hero-marine-survey.png` is a generated illustrative hero image; the gallery uses supplied field photographs.
- `scripts/generate-brand-assets.py` creates the social sharing image, video posters and favicon from the supplied logo. Run it after changing the logo or brand artwork.
- `lib/content.ts` holds service summaries, FAQs, the map link and production site URL.

Set `NEXT_PUBLIC_SITE_URL` to the exact live origin before deployment if it differs from `https://consolidatedbureau.com`. This value drives canonical URLs, structured data, the sitemap and Open Graph URLs.

The secondary address `ops@consoludatedbureau.com` is shown exactly as supplied. Confirm the spelling before publishing if it was meant to match the primary domain.
