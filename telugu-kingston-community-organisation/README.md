# Telugu Association Kingston

A premium Next.js + Tailwind CSS website for Telugu Association Kingston, inspired by Telugu
heritage, handloom patterns, terracotta craft, rangoli, temple bells, and festival lights.

## What's Included

- `app/` - Next.js App Router pages, SEO metadata, and global theme styles
- `components/` - Header, Hero, EventCard, RegistrationForm, GalleryGrid, SponsorCard, Footer
- `data/` - event and sponsor content
- `public/assets/logos` - place sponsor, organisation, and Instagram logo assets here
- `public/assets/gallery` - place approved Instagram/community photos here
- `public/assets/events` - event image assets and placeholders
- `public/assets/patterns` - future rangoli, ikat, handloom, or border motifs

## Instagram Assets

The gallery is wired to:

`https://www.instagram.com/telugu_association_kingston?igsh=M2xyZTdyYzJyaTU3`

Do not hotlink Instagram images directly unless it is legally permitted and allowed by platform
terms. Add approved photos manually to `public/assets/gallery`, add approved logos to
`public/assets/logos`, or connect an approved Instagram API/feed integration.

The current gallery uses the provided photos saved as:

`public/assets/gallery/community-01.png` through `public/assets/gallery/community-45.png`

You can replace those files directly, or update `data/gallery.ts` to point at new `.jpg`, `.png`,
or `.webp` files.

## Registration

Event registrations are currently validated on the client and saved to local mock data in
`localStorage`. The data model is ready for a future database, payment provider, tickets, QR codes,
and confirmation emails.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal, usually `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy

For Netlify, deploy this folder. The included `netlify.toml` runs the Next.js build.
