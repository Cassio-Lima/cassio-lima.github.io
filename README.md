# Cássio Lima — personal site

Static site. No build step. Ready for GitHub Pages, Netlify, Vercel, or any static host.

## Files

```
index.html          ← landing page (hash-routed)
styles.css          ← site styles
colors_and_type.css ← design tokens
atoms.jsx           ← UI atoms (Icon, Pill, Btn, …)
chrome.jsx          ← Nav, Footer
data.jsx            ← content (about, work, papers, experience)
views.jsx           ← Home, Papers, CV, Contact views
cv/                 ← printable A4 CV (open in browser → Print → Save as PDF)
assets/             ← logo marks, patterns, illustrations
```

## Deploy to GitHub Pages — step by step

### Option A · Dedicated repo at `cassio-lima.github.io` (cleanest)

1. **Create a new GitHub repo** named exactly `cassio-lima.github.io` (replace with your GitHub username).
2. On your machine, copy **everything inside this `publish/` folder** to a new local folder.
3. From that folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/cassio-lima/cassio-lima.github.io.git
   git push -u origin main
   ```
4. Wait 1–2 minutes. Visit `https://cassio-lima.github.io` — your site is live.

GitHub Pages auto-detects this kind of repo and serves it from `main` at the root. No settings needed.

### Option B · Subfolder of your existing portfolio repo

If you already have a repo and want to add a `/site` path:

1. Copy the `publish/` folder contents into your repo (anywhere).
2. Push to GitHub.
3. In the repo → **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or whichever you push to)
   - Folder: `/publish` (or wherever you put the files)
4. Save. Your site goes live at `https://<username>.github.io/<repo>/`.

## Custom domain (e.g. `cassiolima.com`)

1. Buy a domain — recommended registrars: **Cloudflare Registrar** (at-cost pricing) or **Namecheap**.
2. In your registrar's DNS settings, add these records:

   | Type | Name | Value |
   |------|------|-------|
   | A    | @    | 185.199.108.153 |
   | A    | @    | 185.199.109.153 |
   | A    | @    | 185.199.110.153 |
   | A    | @    | 185.199.111.153 |
   | CNAME | www | cassio-lima.github.io |

3. Back in GitHub: **Settings → Pages → Custom domain** → enter `cassiolima.com` → save.
4. Tick **Enforce HTTPS** once GitHub provisions the certificate (a few minutes).

## After deploy: a few things to do

- **Test the CV link** in the nav → it should open `cv/` in a new tab. From there, `Cmd/Ctrl + P` → Save as PDF.
- **Replace the placeholder figure** in the hero (`atoms.jsx` → `FigurePanel`) with anything you'd rather show — your GIS map, a real chart, etc.
- **Update the publication list** in `data.jsx` (`PAPERS` array) when new work lands.
- **Add an OG image** for social sharing: create a 1200×630 PNG, save as `assets/og.png`, then add this to `<head>` in `index.html`:
  ```html
  <meta property="og:title" content="Cássio Lima">
  <meta property="og:description" content="Data Management & Governance Specialist · Data Scientist · PhD Plant Biotech.">
  <meta property="og:image" content="/assets/og.png">
  <meta property="og:url" content="https://cassiolima.com">
  <meta name="twitter:card" content="summary_large_image">
  ```

## Production-bundle option (later)

The site uses Babel-in-browser to transpile JSX at load time. This is fine for personal scale (~50 KB of overhead, runs once) but adds ~300 ms to first paint. When you want production polish:

- Migrate to **Vite** (`npm create vite@latest`) → pre-compiles the JSX, ships ~30 KB of JS instead of ~150 KB. I can prep a handoff package when you're ready.
