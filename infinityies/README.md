# Infinity Engineering Solution — website

Static site. No build step, no framework, no dependencies to install.
Opens directly in a browser and deploys to any static host as-is.

## Folder structure

```
infinityies/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/            (drop real photos/logos here — see below)
└── README.md
```

## Before you go live — 3 things to change

1. **Contact form endpoint** — `index.html`, the `<form>` tag near the
   bottom has `action="https://formspree.io/f/YOUR_FORM_ID"`.
   - Go to formspree.io, create a free account, create a form, and it
     gives you a real endpoint URL. Paste it in.
   - Formspree's free tier is enough for a contact form at this volume.
     If you'd rather not use a third party, any backend endpoint that
     accepts a POST with form fields works the same way.

2. **Phone number & WhatsApp link** — currently `+92 300 0000000`
   / `wa.me/92300000000` in three places in `index.html` (header, hero
   is untouched, contact section, WhatsApp button). Replace with the
   real business number.

3. **Email address** — `info@infinityies.com` appears in the contact
   section. Set up that inbox on your domain, or swap it for whichever
   address you're actually using.

## Case studies — read before publishing

The "How we work with each client" section (`#clients` in `index.html`)
has a short case study for each of the 7 clients. These describe the
*type* of work plausible for that kind of client based on public
information (what KFC is, what ICAP does, etc.) — they are **not**
sourced from real project data, and contain no invented numbers or
quotes. Before this goes live:

- Swap in real specifics your brother can confirm (dates, scope,
  actual outcomes) wherever you have them.
- Get sign-off from each client before naming them publicly with a
  "case study," not just a logo mention — this matters especially for
  the government/institutional ones (National Police Academy, FIA
  Academy, ICAP), where being named without clearance could be a
  problem for both sides.
- The plain "Currently on contract with" chip list further up the
  page is lower-risk than the detailed case studies below it, if any
  client would rather not have specifics published.

## Logo &amp; brand assets

The real Infinity Engineering Solutions logo (the one you shared) has
been processed into `assets/img/`:
- `logo-mark-sm.webp` — icon only (snowflake + gear), used in the header and hero
- `logo-full-lg.webp` — full logo with wordmark, used in the footer
- `favicon-32.png` — browser tab icon, cropped from the icon mark

Colors were sampled directly from your logo: blue `#056DB4` and red
`#DF3825`. If you get an official brand guide later with exact hex
codes, update the `:root` variables at the top of `assets/css/style.css`.

## Adding real photos and logos

The client section currently uses styled text badges instead of actual
logos (safer than using client logos without permission, and avoids
requiring image assets before you've gathered permissioned files). If
your brother gets sign-off from clients to display their logos:

- Drop image files into `assets/img/`
- Replace the `.client-badge` markup in `index.html` with an `<img>`
  per client, keeping the same grid container

For a real hero photo of a technician or job site (recommended — it
will read as more trustworthy than the schematic illustration alone),
add the image to `assets/img/` and either swap the `.hero-visual` SVG
for an `<img>`, or add it as a background to a new section.

## Deploying

Any of these work with zero configuration since it's a static site:

- **Netlify / Vercel**: drag the `infinityies` folder onto the deploy
  page, or connect a GitHub repo. Point `infinityies.com` at the
  generated URL via your domain registrar's DNS (both give you exact
  DNS records once the site's created).
- **Your domain's hosting (cPanel/shared hosting)**: upload the
  contents of this folder into `public_html/` via the file manager or
  FTP.
- **GitHub Pages**: push this folder to a repo, enable Pages on the
  `main` branch, add a `CNAME` file containing `infinityies.com`.

## Performance notes

- No JS framework, no build tooling, no icon libraries — icons are
  inline SVG, so there's nothing to download beyond two font files.
- Fonts are loaded from Google Fonts with `preconnect` hints; swap for
  self-hosted `.woff2` files under `assets/` if you want to drop the
  external request entirely.
- Total page weight (HTML + CSS + JS, excluding fonts) is under 40KB
  uncompressed.
