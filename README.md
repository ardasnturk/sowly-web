# Sowly website

Landing page, privacy policy, terms of use and support page for **Sowly**, the planting
planner for vegetables, fruit and herbs (iPhone, iOS 18+), in 12 languages: English, Turkish,
German, Spanish, French, Italian, Japanese, Korean, Dutch, Brazilian Portuguese, Russian and
Simplified Chinese.

Will be live at **https://sowly.ardasnturk.com**

- `/` – landing page
- `/privacy/` – privacy policy (link it from the app and App Store Connect)
- `/terms/` – terms of use
- `/support/` – support page with FAQ (App Store support URL)

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # type-check, then build to dist/
npm run preview   # serve dist/ locally
```

Vite + React 19 + TypeScript + Tailwind CSS 4. There is no router: each page is its own HTML
entry (`index.html`, `privacy/index.html`, `terms/index.html`, `support/index.html`, listed in
`vite.config.ts`) that names its page on `<body data-page>`; `src/main.tsx` renders it.

```
index.html, privacy/, terms/, support/   HTML entries (title, description, Open Graph, hreflang)
public/CNAME                             custom domain for GitHub Pages
public/assets/                           icon.png (favicon, logo), og.png (1200 × 630 share image, drawn by `python3 -I tools/make_og.py`)
public/screens/<language>/               app screenshots, 780 px wide WebP, unframed
public/crops/                            produce photos, 320 px WebP
src/config.ts                            App Store URL, support e-mail, screenshot helpers
src/App.tsx                              page shell: header, page, footer, document title
src/components/                          Header, Footer, LanguageSelect, PhoneFrame, Produce, Reveal, AppStoreButton, Icon
src/pages/Home.tsx, src/pages/home/      landing page sections (Hero, How, Features, Rest: Pro, Privacy, Faq, CallToAction)
src/pages/Legal.tsx, Support.tsx         privacy / terms / support pages
src/i18n/                                texts (see below)
src/lib/motion.ts                        reveal-on-scroll, parallax and reduced-motion hooks
src/index.css                            Tailwind theme (brand colours, radius, shadows) and animations
```

### App Store link

The app is not released yet. `APP_STORE_URL` in `src/config.ts` is empty, so every App Store
button shows a non-clickable "Coming soon to the App Store" state. After release, set it to the
App Store URL and the buttons become download links. (Optionally also add
`<meta name="apple-itunes-app" content="app-id=…">` to the four HTML entries for the Safari
smart banner.)

### Texts and languages

Texts shared by every page (header, footer, privacy, terms, support) live in
`src/i18n/<language>.ts`; the landing page copy lives in `src/i18n/home/<language>.ts`. The
shapes are in `src/i18n/types.ts`, so a missing or extra key fails `npm run build`.

The language is picked from `?lang=xx`, then the visitor's saved choice (`localStorage`), then
the browser languages, then English. The switcher is in the header and the footer. `<html lang>`,
the title and the meta description are set for the chosen language at runtime.

To add a language:

1. Add its code to `LANGUAGES`, `LANGUAGE_NAMES` and `HTML_LANG` in `src/i18n/types.ts`.
2. Copy `src/i18n/en.ts` and `src/i18n/home/en.ts` to `<code>.ts` and translate them.
3. Import both in `src/i18n/index.tsx` and add them to `DICTIONARIES`.
4. Add a `<link rel="alternate" hreflang="…">` line to the four HTML entries.

When the legal texts change, update `legal.updated` in every language.

### Screenshots and photos

Screenshots are raw, unframed screen captures of the app (1206 × 2622), resized to 780 px wide
WebP; the site draws the device frame. Only English screenshots exist so far. To add localized
ones, put them in `public/screens/<language>/` with the same file names (`today`, `crop`, `bed`,
`garden`, `planner`) and add the language code to `SCREEN_LANGUAGES` in `src/config.ts`.

```bash
cwebp -q 82 -resize 780 0 today.png -o public/screens/en/today.webp
cwebp -q 80 -resize 320 320 tomato.jpg -o public/crops/tomato.webp
```

### Design

Brand colours are Tailwind theme tokens in `src/index.css` (`brand` #2E9E62, `brand-deep`
#1F7F52, `lime` #CDEBA9, `paper` #F3F6EF, `ink` #16211B, `sun` #F5C73D, `orange` #F08A34). Light
and dark mode follow the system setting. Type is the system rounded font on Apple devices and
the bundled Nunito elsewhere (self-hosted through `@fontsource-variable/nunito`; no font
service is contacted). All motion is plain CSS plus the hooks in `src/lib/motion.ts` and is
switched off for `prefers-reduced-motion`.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`); in the repository settings, Pages must use "GitHub Actions" as
its source. The custom domain is set by `public/CNAME` (`sowly.ardasnturk.com`); DNS needs a
`CNAME sowly → ardasnturk.github.io` record. The site is served from the root path
(`base: "/"` in `vite.config.ts`).
