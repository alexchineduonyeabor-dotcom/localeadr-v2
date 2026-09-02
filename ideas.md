# Localeadr Design Directions

## Approach 1

**Theme Name:** Civic Atlas

**Very Brief Intro:** An editorial local-discovery experience that feels like a beautifully printed city guide: grounded, trustworthy, warm, and useful. Structured around a dark ink canvas, saffron wayfinding accents, and generous paper-like space.

**Probability:** 0.07

## Approach 2

**Theme Name:** Market Day Modern

**Very Brief Intro:** A bright, energetic marketplace with saturated produce-inspired color blocks, playful commerce cues, and a faster browsing rhythm. It makes local discovery feel social and spontaneous.

**Probability:** 0.04

## Approach 3

**Theme Name:** Signal Night

**Very Brief Intro:** A high-contrast dark interface with electric lime signals, glassy panels, and map-like motion. It positions Localeadr as a sharp, always-on local intelligence layer.

**Probability:** 0.02

## Chosen Approach: Civic Atlas

**Design Movement:** Contemporary editorialism with references to independent city guides, modernist wayfinding systems, and tactile print ephemera.

**Core Principles:**

1. Trust should feel observable: use clear provenance cues, verification marks, and legible metadata rather than vague marketing claims.
2. Discovery should feel directional: use a strong left-edge rail, offset compositions, compass-like motifs, and horizontal reading paths instead of centered symmetry.
3. Local texture matters: balance precise typography and functional controls with paper grain, ink tones, map lines, and small human details.
4. Every screenful earns its space: editorial scale, deliberate whitespace, and short, useful copy replace filler and visual noise.

**Color Philosophy:** Build from near-black ink (#111412), warm bone (#F4F0E8), and a single ownable saffron (#E7A629). Ink communicates confidence and legibility, bone makes the interface feel like a considered printed guide, and saffron becomes the visual signal for action, verification, and local energy. Supporting sage (#B8C5B2) and clay (#C66F4E) are used sparingly as category cues, never as competing accents.

**Layout Paradigm:** A magazine-like canvas with a persistent left navigation rail on desktop, broad offset section headers, and uneven content columns. The hero uses an asymmetric 7/5 split: editorial message on the left, a layered “city index” visual on the right. Cards sit in an intentionally varied rhythm, with compact metadata bands and a few wide feature moments rather than one uniform card grid.

**Signature Elements:**

1. A vertical “LOCAL / VERIFIED / NOW” wayfinding rail that anchors the page and collapses into a top bar on mobile.
2. Thin map-grid lines and crosshair ticks behind major sections, echoing a city index without turning the page into a literal map.
3. Saffron verification stamps and compact monospaced metadata labels for businesses, places, and content.

**Interaction Philosophy:** Interactions should feel like turning pages or selecting a location marker: deliberate, quick, and legible. Hover states reveal a small saffron signal line and lift content by a few pixels. Search, category chips, and tabs should respond instantly and preserve context. Buttons use direct verbs; placeholder actions surface a concise “Coming soon” toast rather than pretending to be functional.

**Animation:** Use short 180–260ms ease-out transitions for hover, filter, and tab changes. Stagger major hero and section entrances by 50ms per block, limited to opacity and translateY. Use a subtle compass-needle rotation only for the brand mark on initial load. Respect `prefers-reduced-motion` and remove entrance transforms when requested.

**Typography System:** Use Fraunces for display headlines and section titles, with its editorial contrast and slightly humanized curves. Use IBM Plex Sans for body copy and UI, and IBM Plex Mono for labels, counts, dates, ratings, and verification metadata. Headlines are sentence case, compact, and never set in all caps except for the small wayfinding rail. Body copy is 16–18px with relaxed line-height. UI labels are 11–12px, medium weight, with letter spacing around 0.12em.

**Brand Essence:** Localeadr is the trusted city index for people who want to discover, compare, and connect with real local businesses without the noise. Personality: **observant, grounded, connective**.

**Brand Voice:** Headlines sound like a confident editor who knows the city, not like a generic marketplace. CTAs are specific and active. Microcopy is brief, transparent, and human.

Example lines:

- “Find the places your city keeps talking about.”
- “Verified businesses, one clear next step.”

**Wordmark & Logo:** Use a custom compass-window symbol: a bold four-point mark with one offset saffron quadrant, paired with a lowercase wordmark set in Fraunces with a modified open ‘a’. The symbol should be recognizable on its own, work as the favicon, and sit at a confident 30–34px height in the header.

**Signature Brand Color:** Saffron Signal — `#E7A629`. It is the only high-saturation accent and should appear wherever Localeadr is asking the user to act, verify, or notice something important.

## File-Level Reminder

Use this direction in every edited CSS, component, and page file: Civic Atlas editorialism; ink, bone, and saffron palette; asymmetric wayfinding layout; Fraunces + IBM Plex Sans + IBM Plex Mono; map-grid texture; restrained 180–260ms motion.
