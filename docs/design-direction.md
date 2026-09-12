# Design direction

User-supplied references, reviewed in a browser on September 12, 2026:

- https://springfieldproperties.ae/
- https://homes4life.ae/
- https://danubeproperties.com/

## Reference observations

Springfield uses an architectural image hero, overlaid navigation, large project title, outlined action, and a search panel. Project cards carry useful facts and enquiry actions. Use its project discovery hierarchy as the main structural reference.

Homes 4 Life presents a bold, oversized uppercase brand statement on a dark hero, with straightforward navigation and a latest-projects section. Adapt its typography hierarchy and generous spacing.

Danube uses a large lifestyle campaign hero, prominent registration action, latest-launch and featured-project sections, and visible contact/WhatsApp options. Adapt the emphasis on launch storytelling and enquiries.

These are design references only. Their property imagery, listings, prices, claims, and branding are not Scheme 33 Property content.

## Proposed application

Build an image-led, contemporary real estate website centered on MFK projects in Scheme 33, Karachi. Use verified MFK brand colors; exact color values remain to be extracted.

Keep Scheme 33 Property as the main identity. Pair it with the exact line “Powered by MFK Builders and Developers” in the header and footer, and repeat it in project and enquiry contexts.

Suggested homepage order:

1. Navigation and architectural hero, with Explore Projects and Book a Site Visit actions.
2. Ongoing and upcoming projects, with verified status and location details.
3. Featured development story with a gallery and project facts.
4. Scheme 33 location overview using verified local information.
5. MFK company introduction and documented experience.
6. Enquiry section and footer.

Use filters only when the verified project inventory is large enough to make them useful. Show upcoming projects only when supported by source material or client confirmation.

## Motion and responsive behavior

Use Framer Motion for section entrances, mobile navigation, and interface transitions. Use Anime.js for a restrained hero text or decorative animation sequence. Keep animation ownership separate so both libraries do not animate the same element. Respect reduced-motion preferences and preserve normal scrolling. Provide visible keyboard focus, sufficient contrast, and practical touch targets.

The first implementation follows this direction. It uses a manual hero image switcher, Framer Motion section entrances, and Anime.js hero text animation. No autoplay carousel or scroll hijacking is used. Project imagery is kept local and Manrope provides the main typeface, with Georgia for editorial emphasis.
