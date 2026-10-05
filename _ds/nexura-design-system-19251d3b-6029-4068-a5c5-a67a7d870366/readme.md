# Nexura Design System

Nexura is an **AI marketing agent** — a SaaS product that connects to a team's ad channels and analytics, answers questions about performance in plain English, tracks campaigns, and runs automated multi-step workflows. Audiences: in-house marketing teams, lean startups, and agencies managing many client accounts (plans: Starter / Pro / Agency).

The only surface provided is the **marketing website** (Home, Product, Pricing, Integration, Blog, Contact, legal). The product app itself is only represented by screenshots on the site (`assets/ui/`), so there is no app UI kit.

## Sources
- Codebase: `nexura-theme/` — a static export of the Framer site **https://nexura.framer.ai** made with NoCodeXport (28 pages, 363 assets). Everything here was lifted from that export: Framer color tokens (`--token-*`), text style presets, `@font-face` rules + woff2 files, inline SVG icons, images.
- The site footer credits "Designed by Lunis" (the Framer template author).
- No Figma, no slide decks, no brand guidelines document were provided.

## Index
- `styles.css` — entry point; `@import`s everything in `tokens/`.
- `tokens/` — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css` (spacing, layout, radii), `effects.css` (shadows, blur, motion), `base.css` (element defaults + `.nx-*` type classes).
- `fonts/` — Inter 400/500/700 (+ italics), Geist 500/700, Inter Tight 500, Fragment Mono 400 (latin subsets from the export).
- `assets/` — `logo-mark.svg` / `logo-mark-white.svg` / `logo-mark-64*.png`, `cursor-yellow.svg` / `cursor-blue.svg`, `icons/` (30 line icons), `illustrations/`, `blog/`, `photos/`, `ui/` (product screenshots + charts), `logos/` (customer logos), `integrations/` (partner logos + placeholder orbit logos), `patterns/`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (see below), one card per folder.
- `ui_kits/website/` — click-through recreation of the marketing site.
- `SKILL.md` — Agent Skill entry point.

## Components
Built from the Framer component inventory found in the export (Button, Nav link, Navbar, Footer, BG Line/Divider, Static tag, Feature tab, Solution tab, Pricing tab/card, Step, Banner, Flow "Small" card, Testimonial, FAQ, Blog card, Integration card, prompt box, cursor chip, form fields).
- **core/** — `Button`, `Tag`, `Pill`, `Logo`, `Icon`, `Divider`, `FrameLines`
- **navigation/** — `Navbar`, `NavLink`, `Footer`, `FilterTabs`, `SegmentedToggle`
- **marketing/** — `SectionHeader`, `FeatureTab`, `StepItem`, `TestimonialCard`, `PricingCard`, `FaqItem`, `BlogCard`, `IntegrationCard`, `LogoStrip`
- **product/** — `PromptBox`, `CursorChip`, `NotificationBanner`, `FlowCard`, `MetricStat`, `ChatMessage`
- **forms/** — `TextField` (incl. multiline), `SelectField`

### Intentional additions
- `Icon` — wrapper around the site's exported SVG icons, with Phosphor CDN fallback for glyphs the export only had as CSS masks (caret-down).
- `Tag` tones `neutral` / `dark` — the site only uses the blue tone.
- `MetricStat`, `ChatMessage` — the Product page shows these as part of a Framer canvas; extracted as primitives so product illustrations can be rebuilt.

## UI kits
- `ui_kits/website/` — Home (hero, logo strip, feature switcher, demo video, integrations, solutions, testimonials, pricing, CTA), Pricing (+ comparison table), Integration directory, Blog list, Contact (form, info cards, FAQ). Navigate via the navbar.

---

## CONTENT FUNDAMENTALS

**Voice:** confident, plain-spoken, outcome-first. Short declarative sentences that end with a period — even headings. Nexura is talked about in the third person as an agent that does work for you ("Nexura handles the execution…", "Nexura flagged three underperforming campaigns…").

**Person:** speaks to **you / your team** ("Spend less time on logistics…", "Connects with your existing stack."). "We" only appears in customer quotes and the contact page ("We're ready to help.", "We'll get back to you within 24 hours.").

**Casing:** Sentence case for headings and buttons ("Start for free", "Talk to sales", "Explore all integrations"). Feature and plan names in Title Case ("Conversational AI Agent", "Campaign Tracking", "Most Popular"). "AI" always caps.

**Headline patterns**
- Section H2s are short, end with a period: "Built for every marketing team." · "Loved by teams worldwide." · "Choose your plan." · "Compare plans side by side."
- Page H1s pair a promise with a twist, often two clauses: "Built for performance. Designed for clarity." · "Start the conversation. We're ready to help." · "Connect to the tools you already use."
- Triplets with periods: "Connect. Configure. Grow." · "Ask Anything. Act Instantly." · "Set it up once. Let it run forever."
- Contrasts with em dashes: "Stop guessing, start growing — Nexura analyzes your data…"

**Body copy:** one or two sentences, concrete marketing nouns (ROI, ROAS, conversions, spend, campaigns, channels, KPIs, workflows). Reassurance lines: "No hidden fees, no surprises.", "no migration required", "Set up in minutes. See results from day one."

**Numbers as proof:** "4.2x return this week", "142 clicks tracked today", "15% remaining on Q1 spend", "2,000+ teams", "50+ supported integrations", "6,000+ apps". Numbers use digits, `x` multipliers, `%`, and `+`.

**CTAs:** Primary "Start for free" / "Get started" / "Continue with Pro"; secondary "Talk to sales" / "Contact us".

**Emoji:** never. Unicode: em dash (—), ellipsis in "Select…", en dash in "Mon–Fri". Testimonials are wrapped in straight double quotes.

---

## VISUAL FOUNDATIONS

**Overall vibe:** a crisp, near-monochrome "blueprint" layout softened by warm painterly countryside illustrations. White page, black type, grey surfaces, square corners — then a gentle hand-painted landscape (red-roofed farmhouses, mountains, wildflowers, a couple sitting in a meadow) as the emotional counterweight.

**Color:** greyscale does nearly all the work — `#fff` page, `#fafafa` cards, `#f4f4f4` muted panels/toggles, `#e6e6e6` hairlines, `#dadada` frame rails, `#605f5f` secondary text, `#999` tertiary, `#000` text/buttons/footer. Accents are tiny and functional: amber `#f2ac13` and blue `#79a9fc` collaborator cursors, pale blue `#f1f6ff` tags with `#477bd6` text, and 10% tints (purple, sky, yellow) behind icons in product UI. No gradients as backgrounds; colour imagery comes only from the illustrations and partner logos.

**Type:** Inter everywhere with OpenType features `cv03 cv04 cv09 cv11 blwf` on (single-storey a, open digits). Headings weight 500 (never bold) with tight −0.04em tracking; body 400 with −0.03em. Scale: 54 / 40 / 32 / 28 / 22 / 20 / 18 / 16 / 14 / 13. Prices and big figures switch to **Geist 500** at 44px. Hero H1 animates in letter-by-letter.

**Layout:** content column max 1250px with 64px side padding (40 tablet, 20 mobile) inside a 20px page gutter; sections 100px vertical padding with 64px internal gaps. Breakpoints: ≥1200 desktop, 810–1199 tablet, <810 mobile. Fixed white navbar (73px). Section headers centred in a 600px column, descriptions at 80% width with `text-wrap: balance`.

**Frame motif ("BG Line"):** every section sits between 1px `#dadada` vertical rails at the container edges; horizontal rails cross at section boundaries, marked by 10×10 white squares with a grey border. Dashed `#e6e6e6` rules separate list items. Hero and CTA backgrounds use a faint grid pattern (`assets/patterns/pattern-grid.svg`, 126px tile) fading to white.

**Backgrounds & imagery:** no full-bleed photography. Wide painterly illustrations anchor the hero bottom, the CTA bottom, and the contact form backdrop; blog thumbnails use the same warm, slightly grainy illustrated style. Testimonial photos are neutral-toned studio portraits. Product screenshots appear in light grey "windows".

**Corners:** sections, cards, pricing cards, testimonial and FAQ blocks are **square (0 radius)**. Rounded only for: pills/buttons/tags/avatars (100px), floating product UI cards and the prompt box (12px), the demo video frame (16px / 14px thumb).

**Cards:** flat `#fafafa` fills with no border and no shadow (pricing, blog, integration, testimonial, info). Floating product-UI cards are white with 12px radius and very soft shadows (`0 5px 20px rgba(0,0,0,.08)`, `0 1px 20px rgba(0,0,0,.05)`).

**Shadows:** soft and low-contrast. Black buttons carry `0 2px 10px rgba(0,0,0,.2)`; the hero prompt box floats on `0 15px 30px 5px rgba(0,0,0,.2)`; logo tiles `0 5px 20px 2px rgba(0,0,0,.1)`. No inner shadows except Framer's 1px border overlays.

**Borders:** 1px only. Filled buttons have a `#605f5f` hairline on black; outline buttons `#e6e6e6`. Inputs are borderless white; focus draws a 1px `#79a9fc` line.

**Transparency & blur:** used sparingly — the prompt box has `backdrop-filter: blur(5px)` with a 2px white border; the footer uses 10% white discs for social buttons and 70–80% white text; video overlay is 35% black.

**Animation:** Framer "appear" effects on scroll — elements fade from opacity 0 while rising 80px (or sliding 80px from the right for feature tabs) with a springy ease-out; hero heading reveals per letter (10px rise). The integration logos pop into an orbit; testimonial cards expand horizontally; the hero prompt types its placeholder with a blinking caret. Customer logos scroll in a marquee. No bounces, no parallax beyond a subtle illustration scale.

**Hover:** buttons show a `#f4f4f4` glow ring 4px outside the pill and the label rolls upward (two stacked copies) — the fill colour never changes. Nav links get a grey pill wash. Blog thumbnails scale ~5%; integration cards reveal a black arrow disc. Closed accordion items are greyed (#999) and brighten when opened.

**Press:** no explicit pressed state in the export; keep it to the hover treatment.

---

## ICONOGRAPHY

- **System:** line icons on a 24px grid with **1.5px round-cap strokes** — visually Phosphor Regular. Framer rendered them as inline SVG symbols; all 30 used glyphs were extracted programmatically to `assets/icons/*.svg` and embedded in the `Icon` component (`components/core/Icon.jsx`).
- Glyphs include: user-sound, target, chart-bar, path, lightning, database, money, rocket, plugs-connected, bandaids, thumbs-up/down, envelope-open, phone-call, hand-heart, check, plus, arrow-right, copy, list, play, waves, chalkboard, align-center-horizontal, and brand marks (google, meta, x, linkedin, youtube, github).
- Icons are monochrome: black on light, white in the footer, `#999` when inactive, or tinted (purple/blue/amber) inside 10%-tint discs in product UI.
- **Substitution flag:** the nav caret and select chevron were CSS masks not recoverable from the export — `Icon` falls back to **Phosphor Regular via unpkg CDN** for any unknown name (e.g. `caret-down`).
- Collaborator cursor arrows (`assets/cursor-*.svg`) are exported SVGs.
- No icon font, no emoji, no unicode-as-icon usage. Partner/integration logos are full-colour raster/SVG files in white circles.

## Logo
`assets/logo-mark.svg` (28×28 path from the site) + the word "Nexura" in Inter 500 20px, −0.04em, 2px gap. White version for the black footer. Use the `Logo` component.

## Font notes
All brand fonts were present in the export and are shipped in `fonts/` (latin subsets only — cyrillic/greek/vietnamese subsets were left out).
