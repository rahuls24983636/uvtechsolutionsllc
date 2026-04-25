## UV Tech Solutions LLC (Standalone)

This folder is a **self-contained static website** you can upload/deploy by itself.

### What’s inside

- `index.html` (main site)
- `privacy-policy.html`
- `assets/` (images)
- `logos/` (partner/customer logos)
- `logo.png`
- `netlify.toml` (Netlify config)
- `package.json` (optional: Netlify local dev)
- `.nojekyll` (helps GitHub Pages serve files as-is)

### Run locally (quick)

Open `index.html` in a browser, or use a local static server.

If you have Node installed:

```bash
npx --yes serve .
```

Then open the URL it prints.

### Run locally (Netlify dev)

```bash
npm install
npm run dev
```

### Deploy

#### Netlify (recommended)

- Create a new site in Netlify
- Set **Publish directory** to this folder (the folder that contains `index.html`)

#### GitHub Pages

GitHub Pages serves the **root of a repository** (or `/docs`) by default.
So for the simplest setup:

- Create a new repo and upload the **contents of this `standalone/` folder** to the repo root
- Enable GitHub Pages for that repo

