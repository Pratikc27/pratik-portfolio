# pratik-portfolio

Personal portfolio for Pratik Choudhari — a statically exported Next.js site
deployed to GitHub Pages.

**Live:** https://pratikc27.github.io/pratik-portfolio

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Dev server on :3000, no basePath                          |
| `npm run build`     | Static export into `out/` (basePath `/pratik-portfolio`)   |
| `npm run preview`   | Rebuild **without** basePath, serve `out/` on :4000        |
| `npm run typecheck` | `tsc --noEmit`                                             |
| `npm run lint`      | ESLint                                                     |

`preview` rebuilds with `NEXT_PUBLIC_BASE_PATH=` before serving, on purpose. A
normal `npm run build` bakes `/pratik-portfolio` into every asset URL, so
serving `out/` at a localhost root makes the stylesheet and all images 404 —
you get an unstyled page with broken images that looks like a code bug but
isn't. Never serve a default build from the root.

> **`npm run build` and `npm run dev` cannot share `.next`.** With
> `output: "export"` a production build leaves `.next` in a state the dev server
> can't load, giving `Error: Cannot find module './682.js'`. If you've just run a
> build, use `rm -rf .next && npm run dev`.

## How it's put together

```
content/site.ts        All copy and data. Edit this, not the JSX.
app/layout.tsx         Fonts, metadata, OpenGraph, Person JSON-LD, skip link
app/page.tsx           Server component; composes the sections
app/globals.css        Base styles, focus ring, scroll-reveal CSS
components/            One file per section, plus icons/section/reveal primitives
tailwind.config.ts     The colour, font and motion tokens
```

Two rules keep it maintainable:

1. **Content lives in `content/site.ts`.** Adding a project is one object in the
   `projects` array — no JSX to copy. Sections read from that file and render
   whatever is there, so a project with no `liveUrl` simply doesn't get a
   "Live demo" link rather than getting a dead one.
2. **One responsive layout, not two.** Desktop and mobile differences are done
   with grid ordering and breakpoints on a single tree. There are no
   `hidden md:block` / `md:hidden` pairs holding duplicate copies of the same
   copy.

Only `components/nav.tsx` and `components/reveal.tsx` are client components.
Everything else renders on the server, so the full page text is in the initial
HTML for crawlers and slow connections.

### Colour tokens

One dark palette, one accent. Every value is a Tailwind token in
`tailwind.config.ts`; contrast against the background is 15.9:1 for body text,
6.5:1 for muted, 4.5:1 for dim and 10.3:1 for the accent — all WCAG AA or better.

### The basePath gotcha

GitHub Pages serves this from `/pratik-portfolio`, not a domain root.
`next/image` prefixes `basePath` onto its *own* optimizer URLs, but **not** onto
the `src` of an `unoptimized` image — and `output: "export"` forces
`unoptimized`. So every path into `public/` must be wrapped in the `asset()`
helper from `content/site.ts`, or it will 404 in production while working fine
in dev:

```ts
image: { src: asset("/png/furniture.png"), … }   // ✅
image: { src: "/png/furniture.png", … }          // ❌ 404s on Pages
```

To move to a custom domain or a root deployment, set `NEXT_PUBLIC_BASE_PATH=""`
and `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`.

## Deployment

`.github/workflows/nextjs.yml` runs typecheck → lint → build → deploy on every
push to `dev`. It uploads `out/` via `actions/deploy-pages`. `basePath` is set in
`next.config.mjs` rather than injected by `configure-pages`, so a local
`npm run build` produces exactly what CI produces.

## What is and isn't published about work

The experience content is derived from the résumé but deliberately narrower,
because this page is public and search-indexed while a résumé goes to named
recipients. Read the disclosure note above `roles` in `content/site.ts` before
adding anything to that array. Currently excluded on purpose: TruSkillsForce,
the supply-chain system, TruScholar Wallet, the email and queueing services, and
specific credential-revocation behaviour.

The personal phone number from the résumé is also not on the site — a public
page invites scraping, and email is enough for a first contact.

## Things worth doing next

Ordered by how much they'd improve the site:

1. **Add live demos and repo links for the remaining projects.** Employer
   surveys consistently rank a working demo above everything else on a
   portfolio, and two projects currently have neither. See the `TODO` comments
   on `hospital-management` and `cicd-pipeline` in `content/site.ts` —
   `project-frontend` and `project-backend` on GitHub look like the two halves
   of the hospital project; confirm and fill them in.
2. **Fix the two broken links in the résumé PDF itself.** It lists
   `https://www.linkedin.com/pratik-choudhari` (missing `/in/`, so it 404s) and
   `https://pratik-portfolio/`, which isn't a resolvable URL. Recruiters click
   both. The working values are in `socials` and `SITE_URL` in
   `content/site.ts`.
3. **Add more numbers to the experience bullets.** The 30% API improvement is
   the strongest line on the page precisely because it has a figure attached.
   The document-processing bullets have none — page counts, processing times,
   volume handled, accuracy improvement. Only add what you can defend in an
   interview, and keep it free of internal system detail.
4. **Host the résumé yourself.** `profile.resumeUrl` points at a Google Drive
   `uc?export=download` link, which can't be previewed in the browser and breaks
   if the file's sharing changes. Commit a PDF to `public/` and point at it via
   `asset()`.
5. **Add descriptions to the GitHub repos.** All four are currently blank, and
   recruiters who follow the source links land on them.
6. **Replace `app/favicon.ico`** — it's still the create-next-app default.
7. **`robots.txt` won't be read on a project Pages site.** Crawlers only honour
   it at a domain root, and this deploys under `/pratik-portfolio`. It's
   generated and correct, and starts working the moment you add a custom domain.
