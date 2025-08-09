# Sales-Wings Founders Program — Design Pattern Inventory

**URL:** https://www.sales-wings.com/founders-program  
**Captured:** 2025-08-09 07:20:18

This file catalogs notable UX/UI design patterns present on the page so they can be referenced or reused.

---

## Global Patterns
- **Top Navigation Bar:** Logo at left; primary links (Home, Founders Program, VC Program, Negotiation Masterclass, 1x1, Experts, About) and simple single-level nav.
- **Primary CTAs:** Repeated action prompts such as “Learn More”, “Let’s Talk”, and “Choose The Program For You,” used at key scroll stops.
- **Anchor-Based Sectioning:** Sections are segmented with anchors (e.g., “What You’ll Learn”, “Program Options”, “What We Cover”) enabling in-page jumps.
- **Iconography:** Small line/flat icons paired with section headers to visually code concepts.
- **Visual Rhythm:** Alternating blocks of copy + icon, then dense lists, then logo grids to pace reading.
- **Trust & Social Proof:** Dedicated logos grid and testimonial to reduce friction and boost credibility.
- **Consistent Tone & Voice:** Benefit‑driven copy with “Immediate Impact” callouts for outcomes.

---

## Page-Level Components & Patterns

### 1) Hero: Value Proposition + Primary CTA
- **Pattern:** Full-width hero with strong headline, supporting paragraph, and a primary CTA (“Learn More”).
- **Purpose:** Immediate articulation of value; fast path to conversion.
- **Notes:** Founder-centric framing (“you’re the one selling it”) clarifies audience fit.

### 2) “What You’ll Learn” — Benefits Grid with Icons
- **Pattern:** Three-item grid. Each tile contains an icon, a benefit-oriented subheadline, brief description, and an “Immediate Impact” line.
- **Purpose:** Scannable program outcomes; shows practical results alongside learning claims.
- **Notes:** Uses verbs (“Build”, “Gain”, “Create”) to keep momentum.

### 3) Outcome Callouts (“The Immediate Impact”)
- **Pattern:** Short outcome statements nested under each learning item.
- **Purpose:** Translates features into benefits to strengthen motivation.
- **Notes:** Helpful for skim-readers; pairs well with sales-focused copy.

### 4) Instructor Bio / Credibility Block
- **Pattern:** “Your Guide to Sales Mastery” with personal intro and headshot.
- **Purpose:** Adds authority and relatability; shows domain expertise.
- **Notes:** Mentions prior roles and university lecturing for added proof.

### 5) Program Options — Side-by-Side Comparison Cards
- **Pattern:** Two cards (“In-Person Program”, “Virtual Program”) with bullet lists of logistics (capacity, cadence, time), next cohort dates, price, and “Let’s Talk” CTA.
- **Purpose:** Clarifies format and scheduling; gives pricing early; facilitates quick fit assessment.
- **Notes:** Early-bird vs regular pricing increases urgency.

### 6) Curriculum Outline (“What We Cover”)
- **Pattern:** A sequence of modules (e.g., First Call Excellence, Mastering the Demo, Discovery is King, Winning Proposal, Winning Pitch, Building Your Pipeline) each with an icon and brief blurb.
- **Purpose:** Communicates scope and depth; sets expectations.
- **Notes:** Copy emphasizes practical frameworks and mistakes to avoid.

### 7) Differentiators List (“What Makes This Program Unique?”)
- **Pattern:** Short checklist of unique-value bullets (practicality, big-picture knowledge, expectation setting).
- **Purpose:** Positions the offer vs. alternatives; manages expectations.
- **Notes:** Transparent statement about limits (“won’t turn you into a sales professional overnight”).

### 8) Client Logos Grid (“Trusted By Leading Startups”)
- **Pattern:** Dense, monochrome/brand logos grid.
- **Purpose:** Social proof for status and relevance; reduces perceived risk.
- **Notes:** Diverse company mix (startups and recognizable brands).

### 9) Testimonial Block with Photo & Attribution
- **Pattern:** Long-form testimonial with headshot, role, and company logo.
- **Purpose:** Narrative proof of outcomes; humanizes results.
- **Notes:** Uses concrete phrasing about winning conversations and applying tools same day.

### 10) Footer/Final CTA Bar
- **Pattern:** “Choose The Program For You” concluding CTA.
- **Purpose:** Capture late-stage intent after content proofing.
- **Notes:** Simple, non-distracting closer.

---

## Reusable Component Suggestions

- **HeroSection** (props: title, subtitle, primaryCTA)
- **BenefitTile** (props: icon, title, description, impactLine)
- **InstructorBio** (props: name, photo, credentialBullets)
- **ProgramCompare** (props: items list with title, bullets, nextCohort, priceRegular, priceEarlyBird, cta)
- **CurriculumModule** (props: icon, title, summary)
- **USPList** (props: items list)
- **LogoGrid** (props: logos list)
- **Testimonial** (props: quote, author, title, companyLogo)
- **StickyCTA / FooterCTA** (props: text, href)

---

## Notes & Opportunities
- Consider **sticky CTA** on scroll for mobile to keep conversion visible.
- Add **FAQ accordion** near the pricing/options section to preempt objections.
- Include **micro-CTAs** inside the curriculum items (e.g., “See sample agenda”).

---

*End of inventory.*
