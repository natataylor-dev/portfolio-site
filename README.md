# Natalie Taylor Portfolio — bare-bones 11ty site

This is a working 11ty (Eleventy) static site with placeholder content,
already tested to build with no errors. It's structured so new case
studies and copy samples can be added later just by adding a markdown
file with the right tag — no template or config changes needed.

## What's in here

```
nataliesite/
├── src/
│   ├── _includes/base.njk      ← shared page layout (nav, footer)
│   ├── css/style.css           ← all styling, one file
│   ├── index.md                ← homepage
│   ├── about.md                ← about page
│   ├── work.md                 ← "everything" overview page
│   ├── case-studies.md         ← case studies index page
│   ├── copy-samples.md         ← copy samples index page
│   ├── case-studies/           ← 4 placeholder Format A pieces
│   └── copy-samples/           ← 4 placeholder Format B pieces
├── .eleventy.js                ← site config + collections setup
├── .github/workflows/deploy.yml ← auto-builds & deploys on every push
├── package.json
└── .gitignore
```

## Adding new work later

Drop a new markdown file into `src/case-studies/` or `src/copy-samples/`
with front matter like this:

```
---
layout: base.njk
title: "Your title"
summary: "One line for the index/homepage cards"
tags: case-study      (or: copy-sample)
order: 5
---

Your content here.
```

It'll automatically appear on the relevant index page and homepage —
nothing else needs updating.

## Pushing to GitHub Pages

1. Create a new **public** repository on GitHub (any name — e.g. `portfolio-site`).
2. From inside the `nataliesite` folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site scaffold"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. In the GitHub repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**. The workflow in `.github/workflows/deploy.yml`
   will then build and publish automatically on every push to `main`.
4. **Important — set the path prefix.** If your repo is *not* named
   `YOUR-USERNAME.github.io`, open `.eleventy.js` and change:
   ```js
   pathPrefix: "/",
   ```
   to:
   ```js
   pathPrefix: "/YOUR-REPO-NAME/",
   ```
   then commit and push again. (If the repo *is* named
   `YOUR-USERNAME.github.io`, leave it as `/` — it serves from the root.)
5. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   (or `https://YOUR-USERNAME.github.io/` for the root-named repo).

## Adding a custom domain later

In GitHub, go to **Settings → Pages** and enter your domain in the
"Custom domain" field — GitHub will create the `CNAME` file for you.
You'll also need to point your domain's DNS at GitHub Pages (GitHub
shows the exact records to add). Once that's in place, set
`pathPrefix` back to `"/"` in `.eleventy.js`.

## Testing locally (optional — needs Node.js installed)

```
npm install
npm run serve
```

This starts a local preview at `http://localhost:8080` and rebuilds
automatically as files change.

## Current state

Every content page has a `[PLACEHOLDER: ...]` marker and a small
notice box — nothing here is meant to go live as-is. Replace the
placeholders using the case study template format (Format A for
case studies, Format B for copy samples) once each piece is drafted.
