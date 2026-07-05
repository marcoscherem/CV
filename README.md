# Marcos Cherem — Portfolio Site

A single-page CV / portfolio website, built as three static files with no build step.
Design inspired by Cleanfolio (the same look as hexpy.fyi): dark navy + lavender,
hero, flagship-work cards, skills pills, an alternating experience timeline, and a
light/dark toggle.

```
Website/
├── index.html      # structure + hero copy
├── styles.css      # all styling + theming (dark default, light via toggle)
├── script.js       # content data (projects / skills / experience) + interactions
├── assets/
│   └── profile.jpg # optional — drop a square photo here to replace the monogram
└── README.md
```

## Edit your content

All the editable data lives at the top of `script.js` in three arrays:
`projects`, `skills`, and `experience`. Change the text there and the page updates.
Hero intro copy lives in `index.html`.

## Add your photo

A square image at `assets/marcoscherem.jpg` is used as the hero photo (referenced in
`index.html`). Replace that file to change the picture. If it's missing, the page
falls back to the "MC" monogram automatically.

## Add your resume PDF

The `resume` button links to `assets/Marcos-Cherem-CV.pdf`. Export one of your CVs
to PDF, name it that, and place it in `assets/`.

## Preview locally

Any static server works, for example:

```bash
# Python
python -m http.server 8145 --directory .
# or Node
npx serve .
```

Then open http://localhost:8145.

## Deploy to GitHub Pages (the "CV as code" way)

1. Create a public repo (e.g. `cv` or `portfolio`) and push the contents of this folder.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. Your site goes live at `https://<username>.github.io/<repo>/`.
4. To use a custom domain (like `cherem.eu`), add it under **Settings → Pages → Custom domain**
   and create the matching DNS records with your registrar.

No framework, no pipeline required. Push to `main` and it publishes.
