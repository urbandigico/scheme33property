# Scheme 33 Property

Domain: scheme33property.com

Brand attribution: **Powered by MFK Builders and Developers**

A website promoting MFK Builders and Developers’ ongoing and upcoming projects in Scheme 33, Karachi, Pakistan.

## Foundation

The first working version is implemented, with a responsive homepage, project listing, two project detail pages, about, contact, privacy, and a custom 404 page.

The stack follows Urban Digi Co: Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Anime.js, using current dependencies for this new project. Manrope fonts and all project images are served locally.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev -- --port 3033
```

Open http://127.0.0.1:3033. For a production preview, run `npm run build` followed by `npm run start -- --port 3033`.

## Included behavior

- Manual hero image selection and apartment/villa filters.
- Project galleries, plan downloads, and Google Maps links.
- Mobile navigation with Escape dismissal and reduced-motion support.
- Validated enquiry preparation with a reviewable WhatsApp link. The visitor sends the message in WhatsApp; the site does not claim to submit or store leads.
- Shared brand attribution, per-page metadata, local fonts, sitemap, robots file, and favicon.

## Content and launch notes

The two detailed projects are Farhan Residency and MFK Signature Villas. Panjwani Residency is included as an upcoming-portfolio enquiry, without an invented location, price, release date, or property rendering. Other communities appear as MFK portfolio history, not as claims that MFK developed entire societies.

Project imagery comes from MFK's website. Artist renderings and published site photographs are labeled. Latest availability, prices, handover dates and approval documents were not established by the supplied website and are not invented. See `docs/source-notes.md`.

The website runs locally. Domain connection, hosting deployment, and any future CRM/email lead delivery are not configured.

Validation: production build and TypeScript checks pass. Desktop and mobile navigation, filters, gallery selection, enquiry preparation, image loading and page routes were checked. No enquiries were sent during testing.

## Directories

- `src/app`: Home, project listing and detail, about, and contact routes.
- `src/components`: Shared layout, page sections, UI, and animation components.
- `src/content/projects`: Verified project content.
- `src/lib`: Shared utilities and configuration.
- `src/hooks`: Reusable React hooks.
- `src/styles`: Global styles and brand design tokens.
- `src/types`: Shared TypeScript definitions.
- `public/images`: Brand, project, and Scheme 33 imagery.
- `public/fonts` and `public/videos`: Font and video assets.
- `docs`: Source notes and design requirements.

## Design requirements

Use https://mfkbuilder.com/ only for brand colors and relevant company/project information, not as the website design reference. Design references are Springfield Properties, Homes 4 Life, and Danube Properties; see `docs/design-direction.md`. Repeat the exact brand attribution consistently across the website.
