# AGENTS.md

## 1. PROJECT

This project is YEONJU's Web Publisher Portfolio.

Core concept:

**ANIME OPENING × SETTING BOOK**

The portfolio combines:

- Anime Opening → Motion / Typography / Transition / Story
- Setting Book → Editorial / Grid / Figure / Caption / Project Information

The portfolio must feel like one complete work rather than a collection of unrelated pages.

---

## 2. READ BEFORE WORKING

Before implementing or modifying the project:

1. Read `planning.md`.
2. Check the current project structure.
3. Check existing files before creating new files.
4. Check existing assets inside `src`.
5. Check `src/data/projects.js` before modifying project content.

`planning.md` is the primary design and content specification.

Do not make major design or structural decisions that contradict `planning.md`.

---

## 3. CORE DESIGN PRINCIPLE

Always follow:

**MOTION ATTRACTS. EDITORIAL EXPLAINS.**

**THE CONTENT IS THE PORTFOLIO.  
THE CONCEPT IS THE LANGUAGE.**

Design priority:

1. Information
2. Readability
3. Structure
4. Concept
5. Motion
6. Decoration

Never sacrifice readability or project information for visual effects.

---

## 4. VISUAL DIRECTION

Required mood:

- Youth
- Clear sky
- Summer
- Blue
- Light
- Wind
- Freshness
- Openness
- Growth

Korean keywords:

**청춘 / 푸름 / 젊음 / 맑음 / 하늘 / 구름 / 빛 / 바람 / 청량**

The site should feel:

- Bright
- Clean
- Fresh
- Spacious
- Organized
- Editorial
- Modern

---

## 5. COLOR SYSTEM

Primary colors:

- Cloud White `#F8FAFC`
- White `#FFFFFF`
- Sky Blue `#67B7E8`
- Clear Blue `#3B91D1`
- Mist Blue `#DDF2FC`
- Deep Navy `#172A3A`
- Body Slate `#53616D`

Black should only be used intentionally for:

- Opening
- Scene cuts
- Episode transitions
- Ending / Credits

Do not turn the entire portfolio into a dark website.

---

## 6. DESIGN RESTRICTIONS

Avoid:

- Generic AI landing-page design
- Excessive rounded cards
- Excessive gradients
- Excessive blue gradients
- Glassmorphism
- Neon
- Cyberpunk styling
- Gaming UI
- Excessive glow
- Excessive shadows
- Random floating icons
- Excessive decoration
- Excessive animation
- Unreadable typography
- Meaningless Japanese text
- Direct copies of specific anime
- Anime logos
- Anime character-heavy layouts

Do not let the portfolio become a Japanese magazine website.

Do not let the concept overpower the actual projects.

---

## 7. TYPOGRAPHY

English typography is primarily used for:

- Visual hierarchy
- Episode numbers
- Figure numbers
- Section labels
- Credits
- Metadata

Korean is primarily used for:

- Project explanations
- Detailed information
- Portfolio introduction
- Readable body content

Examples:

`EPISODE 01`

`FIG.001`

`PROJECT DATA`

`RESPONSIVE STUDY`

`DESIGN MATERIAL`

`TO BE CONTINUED`

Body text must always remain readable.

---

## 8. MOTION SYSTEM

Limit the main motion language to:

1. TEXT CUT
2. MASK REVEAL
3. SLIDE
4. SCROLL REVEAL

Reuse these motions consistently.

Do not invent a different animation style for every section.

The Opening and Episode transitions may use stronger motion.

Project Detail pages should use significantly less motion.

---

## 9. PROJECT STRUCTURE

The portfolio contains exactly 8 main projects:

1. TOUS les JOURS
2. MEGABOX
3. MEGABOX APP
4. APPLE
5. DuckSpot
6. WISH SHOP
7. CINEOPS
8. ANIME GOODS

Do not remove, rename, replace, or invent projects unless explicitly requested by the user.

---

## 10. PROJECT EXPERIENCE

Each project should follow:

`PROJECT INDEX`

↓

`EPISODE INTRO`

↓

`PROJECT STORY`

↓

`PROJECT DETAIL`

↓

`LIVE SITE`

↓

`NEXT EPISODE`

Story answers:

**WHY was this project created?**

Detail answers:

**HOW was this project designed and implemented?**

Keep these roles visually and structurally distinct.

---

## 11. PROJECT DATA

Use a data-driven architecture.

Project content should be managed through:

`src/data/projects.js`

Do not hard-code eight completely separate project pages when reusable components can handle them.

Each project should support:

- episode
- slug
- title
- subtitle
- category
- year
- summary
- role
- period
- contribution
- tools
- story
- sections
- assets
- liveUrl
- githubUrl

---

## 12. PROJECT ROUTES

Required project slugs:

- `touslesjours`
- `megabox`
- `megabox-app`
- `apple`
- `duckspot`
- `wish-shop`
- `cineops`
- `anime-goods`

Use these slugs consistently.

Do not change them without explicit instruction.

---

## 13. LIVE SITE / GITHUB

Keep:

```js
liveUrl: ""
githubUrl: ""
```

until the user provides the final URLs.

Do not automatically copy old deployment URLs.

When a URL exists:

- Open it in a new tab.
- Use `target="_blank"`.
- Use `rel="noopener noreferrer"`.

When the URL is empty:

- Hide or disable the related link.
- Never open an empty page.

---

## 14. ASSETS

Project images and music are supplied by the user inside `src`.

Before creating placeholders:

**inspect the existing assets first.**

Do not:

- Generate replacement project screenshots.
- Replace screenshots with stock images.
- Use random external images.
- Replace the supplied music.

Use the actual supplied project assets.

Do not rename or move existing assets unnecessarily.

---

## 15. MUSIC

The portfolio includes background music.

Music should be controlled globally so it can continue while navigating the portfolio.

Provide a minimal:

`SOUND ON / SOUND OFF`

control.

Respect browser autoplay restrictions.

Do not repeatedly restart the music during normal page navigation unless technically unavoidable.

---

## 16. RESPONSIVE DESIGN

Desktop:

Editorial Grid.

Tablet:

Simplified Editorial Grid.

Mobile:

Prefer:

`TEXT → IMAGE → CAPTION`

Do not force complex desktop compositions onto small screens.

All 8 projects must remain readable and usable on mobile.

---

## 17. ACCESSIBILITY

Maintain:

- Semantic HTML
- Alt text
- Keyboard accessibility
- Visible focus states
- Sufficient contrast
- Reduced-motion consideration
- Clear link/button distinction
- Opening Skip control
- Music control

---

## 18. CODE RULES

Prefer:

- Reusable React components
- Clear component responsibilities
- Data-driven rendering
- Semantic markup
- Maintainable CSS
- Consistent naming
- Minimal dependencies

Avoid:

- Duplicate project-page code
- Unnecessary dependencies
- Huge components when reasonable separation is possible
- Inline styles without a clear reason
- Repeating identical data inside components
- Breaking existing functionality during visual changes

---

## 19. CHANGE POLICY

When modifying existing code:

1. Inspect the relevant component first.
2. Understand existing behavior.
3. Preserve working functionality.
4. Make the smallest reasonable change.
5. Check responsive behavior.
6. Check related routes.
7. Check asset paths.
8. Check for console errors.

Do not rewrite large working sections merely to make a small visual change.

---

## 20. IMPLEMENTATION ORDER

Prioritize:

1. Structure
2. Project data
3. Routing
4. Static layout
5. Setting Book layout
6. Story / Detail pages
7. Responsive
8. Typography
9. Interaction
10. Opening
11. Music
12. Episode transitions
13. Final polish

Do not prioritize decorative animation before the portfolio structure works.

---

## 21. FINAL CHECK

Before considering a task complete, verify:

- The requested feature works.
- Existing features still work.
- No broken asset paths exist.
- No console errors were introduced.
- Desktop layout works.
- Mobile layout works.
- The visual direction still matches the project.
- Project information remains readable.
- The Anime Opening × Setting Book concept remains consistent.

When uncertain, choose:

**cleaner over busier**

**clearer over more decorative**

**structured over experimental**

**content over concept**