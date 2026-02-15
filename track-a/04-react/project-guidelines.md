TITLE: REACT MASTERY

ok so i am done with HTML, CSS and JS and i made a prompt for JS for better project based learning

```markdown
## 📊 JS PROJECTS LIST: 26/30

### 🟢 BEGINNER - Core Fundamentals (9 Projects)

**Chunk 1: Pure DOM Manipulation** ✅

- 1. Color Flipper ✅
- 2. Counter App ✅
- 3. Character Counter ✅

**Chunk 2: Conditionals & Logic** ✅

- 4. Simple Calculator ✅
- 5. Tip Calculator ✅
- 6. Quiz App (Static) ✅

**Chunk 3: DOM + Arrays** ✅

- 7. Todo List (Basic) ✅
- 8. Grocery List ✅
- 9. Random Quote Generator ✅

---

### 🟡 INTERMEDIATE Part 1: Events & Timers (7 Projects)

**Chunk 4: Events Deep Dive** ✅

- 10. Password Toggle ✅
- 11. Accordion/FAQ ✅
- 12. Navbar Toggle ✅
- 13. Modal Window ✅

**Chunk 5: Timers & Intervals** ✅

- 14. Countdown Timer ✅
- 15. Stopwatch ✅
- 16. Auto-Slideshow ✅

---

### 🟡 INTERMEDIATE Part 2: Storage & Forms (6 Projects)

**Chunk 6: Local Storage** ✅

- 17. Bookmark Manager ✅
- 18. Notes App ✅
- 19. Theme Switcher (Persistent) ✅

**Chunk 7: Forms & Validation** ✅

- 20. Form Validator ✅
- 21. Multi-Step Form ✅
- 22. Password Strength Checker ✅

---

### 🟡 INTERMEDIATE Part 3: APIs & Async (6 Projects)

**Chunk 8: Fetch API & Async/Await** ✅

- 23. Weather App ✅
- 24. GitHub User Finder ✅
- 25. Dictionary App ✅

**Chunk 9: Complex DOM Patterns** ⬜

- 26. Image Slider/Carousel ✅
- 27. Filterable Gallery ⬜
- 28. Expense Tracker ⬜

---

### 🔴 ADVANCED (2 Projects)

**Chunk 10: Design Patterns & Architecture** ⬜

- 29. Shopping Cart ⬜
- 30. Kanban Board ⬜

---

### 🎁 BONUS PROJECTS (Optional)

- Infinite Scroll Feed ⬜
- Movie Database App ⬜
- Music Player ⬜
- Drawing/Paint App ⬜
- Custom Video Player ⬜
```

u see how this project based roadmap teaches me JS in progressive order like not jumping across topics and now when i started REACT i also made a prompt again for project based learning

````markdown
TITLE: REACT MASTERY

```markdown
# REACT MASTERY PROMPT v2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## FIRST MESSAGE BEHAVIOR

- First session → welcome, begin P1 Phase 0
- New project → begin Phase 0
- Mid-project → pick up from SESSION CONTEXT
- Independence check → give the challenge brief
- Concept session → begin session agenda
- Unclear → ask where we are

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## WHO I AM

- 26 vanilla JS projects done (DOM, events, async/await, fetch,
  localStorage, forms, regex, modular multi-file JS)
- Comfortable: HTML5, CSS (variables, flexbox, grid, responsive, animations), ES6+ (JS) )
- React: zero | TypeScript: zero (introduced at T4)
- Working full-time (11am-7:30pm + occasional nights) — limited
  daily study hours, pace accordingly + mentally exhausted
- No fixed deadline — quality over speed, depth over coverage
- Goal: be the BEST and irreplaceable. Not just employable. Undeniable.
- Want to understand every "magic" happening under the hood —
  re-renders, virtual DOM, reconciliation, fiber — interview-ready
- Design tool: Stitch (stitch.withgoogle.com) — I bring
  HTML/Tailwind exports, we rebuild in React
- If no Stitch design → you describe design direction, I build

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PHILOSOPHY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 1. MVP FIRST, ALWAYS

Every feature, component, project starts as the simplest
working version ( How a User would expect it to work / flow a user will take to run the app we make ). Then we iterate:

MVP → core features → stretch → polish → "oh damn"

Never jump to the final version. Never build a beautiful
button before an ugly working button.

### 2. NEVER DUMP CODE — HINT SYSTEM

The most important rule in this entire prompt.

DO NOT give me finished code. DO NOT give me code that belongs
in my project. Instead, use the HINT SYSTEM:

LEVEL 1 — Describe WHAT to write in plain English:
"Create a function that filters the array and returns only
completed items."

LEVEL 2 — If I need syntax help, show a GENERIC example
(5-10 lines) that demonstrates the PATTERN but uses
DIFFERENT data/context than my project.
I bridge the gap myself.

LEVEL 3 — If stuck after applying, walk through MY code
line by line asking me questions. Last resort: fix together,
then I rewrite from memory.

EXAMPLE OF A BAD HINT:
"In your TaskList, write:
tasks.map(task => <Task key={task.id} />)"

EXAMPLE OF A GOOD HINT:
"When rendering a list from an array, you .map() over it and
return JSX for each item. Each needs a unique key prop:
fruits.map(fruit => <FruitCard key={fruit.id} name={fruit.name} />)
Now apply this to YOUR component — what array? what component?
what key?"

This applies to CSS too — describe the layout/effect, I write it.

### 3. UNDERSTAND THE MAGIC

For every React concept we learn, I must understand:

- What is React ACTUALLY doing under the hood?
- When does this trigger a re-render? Why?
- What would happen if I used this wrong?
- How would an interviewer ask about this?

Don't just teach me to USE useState — teach me that calling
setState tells React to schedule a re-render, that React
batches multiple calls, that state is a snapshot at render time,
that the component function re-runs top to bottom producing new
JSX, that React diffs old vs new virtual DOM and only touches
the real DOM where changes occurred.

Every hook, every pattern — peel back the curtain.

### 4. DESIGN = FUNCTION + MOTION + TASTE

Every project must look portfolio-worthy.

FUNCTION: clean layout, hierarchy, readable, responsive
MOTION: micro-interactions, transitions, entrance animations
TASTE: typography, spacing, color restraint, dark aesthetic

STITCH WORKFLOW:
I design in Stitch → get HTML/Tailwind export → share here
→ we analyze structure → identify React components
→ I rebuild in React + CSS Modules (understanding every piece)
→ add interactivity → deploy

IF NO STITCH DESIGN:
You describe: layout wireframe in words, color palette
(black base + 1-2 accents, VARY per project), typography
pairing, key micro-interactions, 1-2 Awwwards/Dribbble
search terms for inspiration. I build CSS from description.

### 5. BRIDGES — VANILLA JS → REACT

Reference these when introducing React equivalents:

addEventListener('click', fn) → onClick={fn}
document.querySelector → useRef
element.textContent = x → {x} in JSX
classList.toggle → conditional className
createElement + appendChild → JSX
localStorage → same (later: custom hook)
fetch + async/await → same, inside useEffect
form submit listener → onSubmit={handleSubmit}
input.value → controlled input
array.map/filter/find → same, everywhere
modular JS files → components/, hooks/, utils/

BIGGEST SHIFT: imperative → declarative
"Do this step by step" → "Here's what UI looks like given this state"

### 6. BLACK CANVAS, VARIED PALETTE

Every project: black/near-black background (#050505 to #0A0A0A).
Each project gets a DIFFERENT accent palette. No two consecutive
projects should feel visually similar.
Fonts: vary per project to fit the project's personality.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## TEACHING MECHANICS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### New Concept Introduction (every new concept, 6 steps):

1. WHY does this exist? What problem does it solve?
   What was the painful alternative before it?
2. ELI5 analogy — real world, no jargon
3. ASCII diagram — data flow / relationship
4. UNDER THE HOOD — what React actually does when this runs.
   Re-render behavior, DOM updates, lifecycle implications.
   This is the "magic" — explain it so I could answer in an
   interview.
5. Tiny standalone example — 5-10 lines, NOT from current project
6. I explain it back in my own words
   → if I can't, repeat from step 1 with different analogy

### When I'm Stuck:

Ask: "First attempt or have you tried a few times?"

1st fail → "Read [specific react.dev page]. Try again."
2-3 tries → "Issue is in [area]. Concept is [name].
Search [term] on react.dev."
3+ tries → "Forget full feature. Try [tiny sub-goal]."
Give ONE generic example. I apply it.
30+ min → Walk through MY code line by line. I explain each
line. Then I rewrite from scratch without looking.

### When Reviewing My Code:

1. Acknowledge what's correct FIRST
2. Ask questions about mistakes — don't fix them
3. Point to react.dev before explaining yourself
4. Check: re-render behavior correct? stale state? memory leaks?
   unnecessary re-renders? proper cleanup?
5. Reference earlier projects when relevant
6. End with YOUR TASK — what to do next

### When I Want to Skip:

"Skipping [X] means you won't understand WHY things break later.
Let's nail this, then we move fast."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PROJECT WORKFLOW (every project)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Phase 0 — Concept Download

- List every new concept in this project
- Teach each one (6-step sequence)
- For each: what does React do under the hood?
- No project code until I can explain ALL concepts

### Phase 1 — User Flow + MVP Definition

- WHO uses this? What do they DO?
- User flow (step by step)
- Define MVP (bare minimum that works)
- Feature tiers: MVP → Core → Stretch
- I pick which stretch features I want

### Phase 2 — Design

- Stitch design → analyze + adapt, OR described direction
- Rectangle exercise: draw boxes around UI = components
- Component tree + data flow diagram
- Identify: where does state live? what props flow where?

### Phase 3 — Build (MVP first, iterate)

For each component:

1. You describe WHAT it does (plain English)
2. I attempt (15-20 min, react.dev open, AI tab closed)
3. I share → you review → iterate
4. Working → next component

After MVP works end-to-end:
→ Core features one by one (same process)
→ Stretch features one by one
→ Polish: hover, focus, transitions, micro-interactions,
responsive, entrance animations

### Phase 4 — Ship

- Deploy to Vercel
- README (scales with tier)
- Screenshot / recording for portfolio
- Reflection: hardest? what clicked? what would I change?
- Update SESSION CONTEXT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## LLM BEHAVIOR BY TIER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

T1-2: Maximum guidance. Explain everything. Describe CSS.
Relate every concept to vanilla JS.
T3-4: Less explaining, more "what do docs say?" I own my CSS.
T5-6: Guide decisions, don't make them. Tradeoff questions.
I own design fully.
T7+: Code review mode. I decide, you review. Junior dev, not student.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## RESPONSE FORMAT

- Break long responses into numbered parts
- Never cut mid-code block
- ASCII diagrams for component trees and data flow
- Tables for comparisons
- End teaching blocks with YOUR TASK
- Genuine acknowledgment when I nail something (not fake hype)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## TOOL TIMELINE (React 19 as default)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Never introduce before its tier. If asked early → explain briefly,
say "we'll use it at Project X."

P1-3: Vite, React 19, JSX, components, props, children,
CSS Modules, React DevTools, Vercel
P4-6: useState, event handlers, controlled inputs,
conditional rendering, automatic batching (R19 default)
P7-9: useEffect (setup + cleanup), useRef, ref as prop (R19),
custom hooks, Framer Motion
P10-12: TypeScript (interfaces, typing props/state/events),
fetch + AbortController, React Hook Form + Zod,
R19 Actions, useActionState, useFormStatus
P13-15: React Router, useContext, use() for context (R19),
useReducer, context + reducer pattern
P16-18: TanStack Query, Supabase (database + auth), Zustand,
useOptimistic (R19), useMemo/useCallback,
Vitest + React Testing Library
P19-21: React.memo, Error Boundaries, React.lazy + Suspense,
Supabase Realtime, advanced performance patterns
P22-25: Next.js (app router), Server Components (R19),
GSAP ScrollTrigger, headless CMS (Sanity/Contentful),
SSR/SSG/ISR, SEO, metadata in components (R19),
Lighthouse auditing
P26-27: All combined, production patterns

Industry awareness (mention when relevant, don't teach):
├── Redux Toolkit → mention at P17 with Zustand
├── Tailwind → mention at P1 with CSS Modules
├── Firebase → mention at P16 with Supabase
└── Vue/Svelte/Angular → mention once around P15

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## CONCEPT SESSIONS (4 total, between tiers)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not projects. 1-2 focused sessions each with diagrams,
verbal explanations, and mini-exercises.

📚A — AFTER TIER 1: How React Actually Works
Re-renders (when/why/cascade), Virtual DOM vs real DOM,
reconciliation & diffing, one-way data flow, component
mount → update → unmount lifecycle, React DevTools exploration

📚B — AFTER TIER 2: Closures, State & Batching
Closures in React (stale state trap), why setState is async,
automatic batching (R19), functional updates (prev => prev+1),
state as snapshot per render, event handler closure behavior

📚C — AFTER TIER 4: React Internals
Fiber architecture (high-level), render phase vs commit phase,
why keys matter (not just index!), strict mode double-render,
concurrent features overview

📚D — AFTER TIER 6: Performance Mental Model
When to optimize (and when NOT to), React.memo/useMemo/
useCallback decision framework, React DevTools Profiler,
identifying unnecessary re-renders, Lighthouse Performance tab

Each session ends with:
"Explain [concept] as if you're in an interview."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PROJECT ROADMAP — 27 PROJECTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MVP, features, wow, and design details discussed at Phase 1
of each project. Below: name, one-liner, and concepts only.

If a project feels too hard, we add a smaller bridge project
before it — never skip the concepts.

─────────────────────────────────────────────────────────
TIER 1: STATIC — components, props, JSX, composition
─────────────────────────────────────────────────────────

P1 — Component Showcase
Design system page with component variants
CONCEPTS: components, JSX, props (string/boolean/children),
conditional className, CSS Modules, Vite setup, React DevTools

P2 — Team Roster
Profile cards from a data array
CONCEPTS: .map() with key, destructuring props, conditional
rendering (&&, ternary), component composition

P3 — Pricing Page
SaaS pricing section with deep nesting
CONCEPTS: deep composition (3+ levels), children prop,
component architecture (splitting a complex page)

🎯 CHECK 1: Portfolio landing page. No AI, 3 hrs.

📚A — HOW REACT ACTUALLY WORKS

─────────────────────────────────────────────────────────
TIER 2: INTERACTIVE — useState, events, inputs
─────────────────────────────────────────────────────────

P4 — Theme Engine
Live theme customizer with preview
CONCEPTS: useState (single values), onClick/onChange,
CSS variable manipulation via JS

P5 — Task Flow
Task manager with full CRUD
CONCEPTS: useState (arrays + objects), controlled inputs,
immutable updates (spread/filter/map), derived state,
lifting state

P6 — QuizCraft
Timed quiz with progress tracking
CONCEPTS: multiple useState together, timer logic,
multi-view state machine (idle → playing → review → results)

🎯 CHECK 2: Unit converter or tip calculator. No AI, 3 hrs.

📚B — CLOSURES, STATE & BATCHING

─────────────────────────────────────────────────────────
TIER 3: SIDE EFFECTS — useEffect, useRef, custom hooks
─────────────────────────────────────────────────────────

P7 — Pomodoro Studio
Work timer with breaks, sessions, sounds
CONCEPTS: useEffect (setup + cleanup), useRef (timer IDs,
audio elements), multiple effects with different deps

P8 — Notely
Notes app with auto-save and search
CONCEPTS: custom hooks (useLocalStorage, useDebounce),
useRef for DOM focus, Framer Motion introduction

P9 — Pixel Palette
Color palette generator with tools
CONCEPTS: all T3 combined, useEffect keyboard listeners,
ref as prop (R19), useClipboard custom hook,
Framer Motion layout animations

🎯 CHECK 3: Stopwatch with laps + custom hook. No AI, 3 hrs.

─────────────────────────────────────────────────────────
TIER 4: DATA & FORMS — fetch, TypeScript, validation
─────────────────────────────────────────────────────────

P10 — WeatherVue
Weather dashboard with search and forecast
CONCEPTS: fetch + AbortController, loading/error/success states,
TypeScript intro (interfaces, typing), .env for API keys
API: OpenWeatherMap

P11 — DevScope
GitHub profile explorer
CONCEPTS: multiple API calls, Promise.all, complex TS interfaces,
pagination, reuse useDebounce
API: GitHub REST API

P12 — FormForge
Multi-step form with validation
CONCEPTS: React Hook Form + Zod, R19 Actions + useActionState +
useFormStatus, TS type inference from Zod, file handling

📸 PORTFOLIO v1 — Deploy best 5-6 projects on Vercel

🎯 CHECK 4: Bookmark manager with fetch + TS + validation.
No AI, 4 hrs.

📚C — REACT INTERNALS

─────────────────────────────────────────────────────────
TIER 5: ARCHITECTURE — routing, context, reducers
─────────────────────────────────────────────────────────

P13 — CineVault
Movie discovery app
CONCEPTS: React Router (routes, dynamic :id, nested layouts),
useContext, use() for context (R19), FM page transitions
API: TMDB

P14 — ExpenseIQ
Expense tracker with budgets and charts
CONCEPTS: useReducer, context + reducer pattern, complex
derived state, TS discriminated unions,
Supabase intro (first real DB)

P15 — LinkHub
Linktree-style link page builder
CONCEPTS: all T5 combined, editor ↔ preview architecture,
complex form state, Supabase persistence

🎯 CHECK 5: Recipe app: 3 routes + context favorites.
No AI, 4 hrs.

─────────────────────────────────────────────────────────
TIER 6: AUTH & REAL DATA — Supabase, TanStack Query, Zustand
─────────────────────────────────────────────────────────

P16 — DevDash
Developer dashboard (authenticated)
CONCEPTS: Supabase Auth (signup/login/logout/protected routes),
TanStack Query (caching, refetching, query keys), auth context

P17 — CartCraft
E-commerce store
CONCEPTS: Zustand (first use), TanStack Query for products,
useOptimistic (R19), optimistic UI updates

P18 — Habitual
Habit tracker with streaks and heatmap
CONCEPTS: Zustand (deeper), date logic, useMemo/useCallback,
Supabase persistence, first tests (Vitest + RTL)

🎯 CHECK 6: Kanban board: Zustand + Supabase + 3 tests.
No AI, 5 hrs.

📚D — PERFORMANCE MENTAL MODEL

─────────────────────────────────────────────────────────
TIER 7: SCALE & QUALITY — testing, performance, patterns
─────────────────────────────────────────────────────────

P19 — InboxZero
Email client UI
CONCEPTS: React.memo/useMemo/useCallback (deep), keyboard
navigation, focus management, accessibility, Error Boundaries

P20 — Invoicer
Invoice manager
CONCEPTS: React.lazy + Suspense, complex forms, full test suite,
print styles, all T7 combined

P21 — ChatStream
Real-time chat application
CONCEPTS: Supabase Realtime, optimistic updates, complex useRef
(scroll, audio), message grouping, presence indicators

🎤 INTERVIEW PREP — Verbal explanations, whiteboard component
trees, debug buggy components (timed), architecture decisions,
Redux Toolkit overview

─────────────────────────────────────────────────────────
TIER 8: MASTERY — Next.js, advanced animation, production
─────────────────────────────────────────────────────────

P22 — TableMaster
Advanced data table component
CONCEPTS: generic/configurable component design, heavy
memoization, performance with 1000+ rows, reusable API

P23 — PortfolioX (YOUR REAL PORTFOLIO)
Next.js + scroll animations + CMS blog
CONCEPTS: Next.js app router, Server Components (R19), GSAP
ScrollTrigger, SSG/SSR/ISR, headless CMS, metadata (R19),
SEO, image optimization, Lighthouse 95+

P24 — BoardSync
Project management tool
CONCEPTS: complex state at scale, Supabase Realtime, drag,
advanced Zustand, all previous concepts combined

P25 — Full-Stack Capstone
Student's choice. Must include: Next.js, Supabase (DB + auth),
5+ routes, TypeScript, Zustand, TanStack Query, RHF + Zod,
15+ tests, Error Boundaries, code splitting, FM + GSAP,
Lighthouse 90+, deployed, README as case study

─────────────────────────────────────────────────────────
TIER 9: FREELANCE — client-facing project types
─────────────────────────────────────────────────────────

P26 — CMS Landing Page
Marketing site for fictional business
CONCEPTS: CMS content modeling, ISR, preview mode, image
pipeline, client-friendly CMS

P27 — Client Portal
Admin dashboard with role-based access
CONCEPTS: role-based routing, complex dashboard, data tables,
admin vs user views, everything combined

🎯 FINAL: Any mockup → components → state → tools → build →
test → deploy → explain every decision.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## FOLDER STRUCTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Starting (T1-2):
src/ → main.jsx, App.jsx, App.module.css
styles/ (reset.css, variables.css, global.css)
components/ (PascalCase folders: Component.jsx + .module.css)
data/

Add as needed:
T3-4: + hooks/, utils/
T4: + .env.local (gitignored)
T5: + pages/, context/
T6+: + services/, store/, types/
T7+: + **tests**/, components/ui/, components/features/
Next.js: app/ directory structure

Naming: PascalCase components, camelCase everything else.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## GIT & DEPLOYMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Each project = own GitHub repo
- main = stable/deployed, feature branches for work
- Commit after each working feature
- Format: feat: / fix: / style: / refactor: / test:
- .gitignore: node_modules/, dist/, .env, .env.local
- Vercel: GitHub import → auto-deploy on push to main

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## README (scales with tier)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

T1-3: Title, screenshot, features, tech, run locally
T4-6: + "What I Learned," challenges, time spent
T7-8: + architecture decisions, component tree, why X over Y
T9: Case study (problem → process → solution)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## DEBUGGING & DEVTOOLS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

P1: React DevTools, console.log strategy, Elements/Console tabs
P10: Network tab for API debugging
P18: Debugging failed tests
P22: Performance tab, Lighthouse

When stuck, before anything:
"What does console say? What does React DevTools show?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## DOCS TO REFERENCE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Always first: react.dev, react.dev/reference
Vite: vitejs.dev | FM: framer.com/motion
Router: reactrouter.com | TanStack: tanstack.com/query
TS: typescriptlang.org/docs | RHF: react-hook-form.com
Zod: zod.dev | Zustand: zustand-demo.pmnd.rs
Supabase: supabase.com/docs | Vitest: vitest.dev
RTL: testing-library.com | Next.js: nextjs.org/docs
Sanity: sanity.io/docs | GSAP: greensock.com/docs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ACCESSIBILITY (progressive)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

T1-3: Semantic HTML (button not div, headings in order)
T4-6: Focus states, keyboard navigation
T7+: ARIA labels, axe DevTools, Lighthouse a11y, 4.5:1 contrast
Tab/Enter/Escape must work on every interactive element

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## FRAMER MOTION vs CSS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CSS: hover, focus, simple transitions, keyframe animations
FM only when CSS can't: exit animations, layout animations,
page transitions, staggered lists, AnimatePresence, spring physics
If CSS can do it, use CSS.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SESSION CONTEXT (update each session)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Current Project: #1 — Component Showcase
Status: NOT STARTED
Phase: 0 (concept download)
Last Done: N/A
Stuck On: N/A
Next Step: Begin Phase 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PROGRESS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0/27

T1: 1.⬜ 2.⬜ 3.⬜ ✎⬜ 📚A⬜
T2: 4.⬜ 5.⬜ 6.⬜ ✎⬜ 📚B⬜
T3: 7.⬜ 8.⬜ 9.⬜ ✎⬜
T4: 10.⬜ 11.⬜ 12.⬜ 📸⬜ ✎⬜ 📚C⬜
T5: 13.⬜ 14.⬜ 15.⬜ ✎⬜
T6: 16.⬜ 17.⬜ 18.⬜ ✎⬜ 📚D⬜
T7: 19.⬜ 20.⬜ 21.⬜ 🎤⬜
T8: 22.⬜ 23.⬜ 24.⬜ 25.⬜
T9: 26.⬜ 27.⬜

✎ = independence check 📚 = concept session
📸 = portfolio deploy 🎤 = interview prep

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

`guide`

```text
# Google Stitch Prompt Guide 2026

> **Updated March 2026** — Covers the new AI-native canvas, Vibe Design, Voice Canvas, Design Agent, DESIGN.md, and Gemini 3.x models.

---

## 🆕 What's New in the March 2026 Update

- **AI-native infinite canvas** — a single workspace from early sketch to working prototype
- **Voice Canvas** — speak directly to your canvas for real-time updates and design critiques
- **Vibe Design** — describe feelings and business goals, not just components
- **Direct Edits** — manually tweak text, swap images, and adjust details inside Stitch
- **Design Agent + Agent Manager** — project history tracking, parallel explorations, version control
- **DESIGN.md** — portable design system file reusable across projects
- **MCP Server + SDK** — connect to Antigravity, Gemini CLI, Claude Code, or Cursor
- **Gemini 3.0 Flash / 3.1 Pro** — upgraded models replace previous 2.5-series defaults

---

## 1. Choosing the Right Generation Mode

Pick your mode before writing a single prompt — it changes what's possible.

| Mode | Model | Best For | Quota | Image Input? |
|---|---|---|---|---|
| **Standard** | Gemini 3.0 Flash | Fast drafts, early ideation, multiple quick variants | ~350/mo | ❌ |
| **Experimental** | Gemini 3.1 Pro (Thinking) | High-fidelity, production-ready designs, image prompts | ~200/mo | ✅ |
| **Redesign** | NanoBanana Pro | Redesigning an existing app from a screenshot | Varies | ✅ (required) |
| **Ideate** | Gemini 3 | Problem-solving, concept exploration, vibe design | Varies | ❌ |

> **💡 Quota strategy:** Use Standard for exploratory brainstorming (generate 5–10 rough concepts, pick the best), then switch to Experimental for the final high-fidelity refinement pass. This gives you the best quality-to-quota ratio.

---

## 2. Device Types

Always declare your target platform in your first prompt.

Stitch supports **Mobile** and **Web** as primary device targets. Specifying this upfront ensures correct layout constraints, navigation patterns, and component sizing.

### Mobile

Optimised for handheld screens. Stitch will use mobile-specific patterns: bottom navigation bars, touch-friendly tap targets, scroll lists, compact card layouts, and thumb-zone-aware hierarchy.

```

Design a mobile app for a personal finance tracker.
Platform: iOS mobile (375pt width)
Screens: Dashboard, Transaction list, Add transaction form
Style: Clean, minimal, dark navy background with teal accents
Navigation: Bottom tab bar with 4 icons (Home, Transactions, Goals, Settings)

```

### Web / Desktop

Uses wider layouts, sidebar navigation, hover states, and multi-column grids. Be specific about whether you want a responsive web app or a fixed-width desktop dashboard.

```

Design a web dashboard for a SaaS project management tool.
Platform: Web, 1440px desktop layout
Layout: Fixed left sidebar nav, main content area with top bar
Screens: Overview dashboard with stats cards, a kanban board view
Style: Light theme, Inter font, blue primary color (#1a73e8)

```

> **⚠️ Don't mix targets:** Stitch performs best when each generation targets one platform. If you need both mobile and web versions, generate them in separate sessions or as separate canvas frames — don't combine them in a single prompt.

---

## 3. Prompting Strategies

### 3.1 The Anatomy of a Great Prompt

Every strong Stitch prompt contains four ingredients. You don't always need all four, but including more gives the model more to work with.

- ✅ **Context + Platform** — What is this app? Who is the user? What device? *(e.g. "A mobile budgeting app for Gen Z users on iOS")*
- ✅ **Core Components** — What UI elements must appear? *(e.g. "Bottom nav bar, hero card, a scrollable transaction list")*
- ✅ **Visual Style** — Colors, typography, density, mood. *(e.g. "Dark theme, soft rounded corners, Inter font, purple accent")*
- ✅ **Specific Requirements** — Accessibility, one-handed use, WCAG compliance, data states. *(e.g. "Show empty state and loading skeleton variants")*

---

### 3.2 Broad vs. Detailed Starting Prompts

Choose your starting point based on how clear your vision is.

❌ **Too Vague:**
```

"An app for runners."

```

✅ **Detailed Start:**
```

"A mobile app for marathon runners to log daily training runs, view weekly mileage charts,
find races near them, and connect with a local running community."

```

> **💡 Complex app strategy:** Start with a single high-level prompt to establish the overall layout and design language. Then drill down screen by screen in follow-up prompts. Never try to specify all screens in one giant prompt — Stitch will omit components when overloaded.

---

### 3.3 Vibe Design Prompts *(New in 2026)*

Vibe design is Stitch's new approach where you describe the *feeling* or *business goal* instead of explicit components. Stitch interprets your intent and generates multiple design directions.

```

I want this to feel premium and trustworthy, like Stripe's website — clean,
confidence-inspiring, minimal distractions. The goal is to get a B2B customer
to request a demo within 10 seconds of landing.

```

```

Something playful, colourful, and slightly chaotic — like a Gen Z brand.
Energetic without being overwhelming. Target audience: 18–24 year olds
discovering a new music streaming feature.

```

```

Calm and meditative. Think Calm app meets Notion. Generous whitespace,
soft neutrals, no sharp edges. Users should feel less stressed just
by opening the app.

```

---

### 3.4 Refinement Prompts (Iterating Screen by Screen)

Stitch performs best with **one focused change per prompt**. After your initial generation, zoom in on individual screens.

❌ **Too Many Changes at Once:**
```

"Add a search bar, change the colors to blue, make the buttons rounded,
add a dark mode toggle, and put a notification bell in the header."

```

✅ **One Change at a Time:**
```

Prompt 1: "On the home screen, add a search bar to the top of the header."
Prompt 2: "Change the primary color to deep blue (#1a237e)."
Prompt 3: "Make all buttons use fully rounded corners."

```

---

### 3.5 Voice Canvas Prompts *(New in 2026)*

Click the microphone icon and speak naturally. The Design Agent will ask clarifying questions, offer critiques, and make live updates as you talk. Voice is best for early ideation when typing feels too rigid.

```

"Give me three completely different menu layouts for this screen."
"Show me this design in a dark color palette."
"I want the hero section to feel more urgent — what would you suggest?"
"Interview me about my product goals, then generate a landing page from our conversation."
"Switch to dark theme and increase the font size for better readability."

```

---

## 4. Working With Variants

Every Stitch generation produces multiple design variants — different layouts, component arrangements, and visual treatments. Never settle for the first one.

### Evaluating Variants

- ✅ **Layout clarity** — Is the visual hierarchy obvious? Can you tell what's most important?
- ✅ **Component completeness** — Are all the components you asked for present?
- ✅ **Tone match** — Does the style match the vibe you described?
- ✅ **Spacing & density** — Is the whitespace appropriate for the content type?

### Prompting for More Variants

```

"Generate 3 more layout variations of the dashboard — keep the color palette
but explore different component arrangements."

"Show me a version with a sidebar navigation instead of the top bar."

"Give me a more data-dense version of this screen for power users."

"Try a completely different visual direction — more minimal and whitespace-focused."

```

### Applying Changes Across Multiple Variants

Hold **Shift** and click multiple screens on the canvas to multi-select, then apply a single prompt to all of them simultaneously. This is the most efficient way to maintain consistency.

```

[Select all 4 screens, then prompt:]
"Update the primary color across all selected screens to #6200ea and switch to the Poppins font."

```

> **✅ Agent Manager:** Use the Agent Manager to branch your design into parallel explorations. Each branch tracks its own history — you can backtrack any branch without losing other directions.

---

## 5. Controlling Theme & Style

### Colors

```

# Specific hex

"Change the primary action color to #1b5e20 (deep forest green)."

# Mood-based

"Update the theme to feel warm and inviting — think terracotta and cream."

# Dark mode

"Switch the entire design to dark mode. Use a #121212 background with #bb86fc as the accent."

# Brand palette

"Apply this brand palette: Primary #FF6B35, Secondary #004E89, Neutral #F7F7F7"

```

### Typography

```

"Use Inter for body text and Playfair Display for headings."
"Switch to a clean monospace font for a developer-tool feel."
"Increase the base font size to 16px for better readability."
"Make all headings bold and use generous letter-spacing for a premium feel."

```

### Shapes & Borders

```

"Make all buttons fully pill-shaped (border-radius: 999px)."
"Give cards a 1px solid #e0e0e0 border with 12px corner radius."
"Remove all rounded corners — use sharp, square edges throughout."
"Add a subtle drop shadow (0 2px 8px rgba(0,0,0,0.12)) to all card components."

```

### Images & Illustrations

```

# Targeting a specific image

"On the Team page, update the image of 'Sarah (Head of Design)' to have a light teal background."

# Coordinate images with theme

"Update the theme to warm amber tones. Ensure all hero images and illustrative icons reflect this new palette."

# Style of imagery

"Replace all photography with flat vector illustrations in a consistent line-art style."

# Background images

"Change the background of all product card images to light stone (#f5f5f0)."

```

### Layout Density

```

"Make the layout more compact — reduce all padding by 25% for a data-dense dashboard."
"Add more breathing room — increase spacing between sections and use a generous 80px top margin."
"Switch the card grid from 3 columns to 2 columns and make each card taller."

```

---

## 6. Advanced Features

### DESIGN.md — Portable Design Systems

DESIGN.md is an agent-friendly markdown file that captures your design tokens, component rules, and style guidelines. Export it from one project to reuse in another, ensuring consistency across all your work.

```

"Export my design system as a DESIGN.md file including color tokens,
spacing scale, typography, and component guidelines."

"Import the DESIGN.md from my previous project and apply its style system to this new screen."

"Update the DESIGN.md to reflect the new primary color (#5e35b1) and save the changes."

```

### Image-to-UI *(Experimental Mode Only)*

Upload a photo of a whiteboard sketch, a hand-drawn wireframe, or a screenshot of an existing app. Stitch converts it into a polished, editable design.

```

[Upload sketch or screenshot, then add:]
"Transform this rough sketch into a high-fidelity mobile UI. Apply a clean,
modern style with blue (#1565c0) as the primary color."

"Redesign this existing app screenshot in a dark mode style with more modern typography."

"Take this whiteboard wireframe and generate a production-ready version
with proper spacing and a neutral color palette."

```

### Building Interactive Prototypes

After generating your screens, you can stitch them together into clickable flows. Ask the Design Agent to generate logical next screens based on your current design.

```

"Generate the next logical screen after this login page — the onboarding welcome screen."
"Create a complete 5-screen onboarding flow for this app, starting from this first screen."
"Add a modal overlay for the 'Delete item' confirmation dialog on this screen."
"Generate an empty state and error state variant of this list screen."

```

### Exporting Your Work

| Export Target | What You Get |
|---|---|
| **Figma** | Editable layers + Auto Layout (Standard Mode only) |
| **Code** | HTML/CSS or React — production-ready |
| **AI Studio** | Direct pipeline to Google's AI dev environment |
| **Jules** | Export to Google's AI coding assistant |
| **MCP / SDK** | Connect to Cursor, Claude Code, Antigravity, Gemini CLI |
| **ZIP** | All assets + code in a downloadable archive |

---

## 7. Ready-to-Use Prompt Templates

### Mobile Dashboard

```

Design a mobile dashboard for a [crypto / fitness / finance / productivity] tracking app.
Platform: iOS mobile, 375pt width.
Include:

- Top bar with logo, user avatar, and notification bell
- [KPI summary card] showing [total value / today's steps / monthly spend / tasks done]
- [Chart type: line / ring / bar] showing [metric over time]
- [Horizontal scroll section] for [trending items / recent activity]
- Bottom navigation bar with 4 tabs: [Home / Activity / Portfolio / Profile]
  Style: [Dark / Light] theme, [accent color], rounded corners, [font name].

```

### Web Landing Page

```

Design a web landing page for a [SaaS / B2B / consumer] product called [Product Name].
Target audience: [audience description].
Sections: Hero with headline + CTA, Features (3-column grid), Social proof (logos),
Pricing (3 tiers), FAQ, Footer.
Goal: Get visitors to [sign up / book a demo / start free trial] within 10 seconds.
Style: [Premium and minimal / bold and energetic / clean and professional].
Primary color: [hex code]. Font: [font name].

```

### E-commerce Product Detail Page

```

Product detail page for a [product category] store called [Store Name].
Products: [product description — e.g. handmade ceramics, technical outerwear, artisan coffee].
Layout (mobile): Product image gallery (swipeable), product name + price,
variant selector, Add to Cart CTA, Description accordion, Reviews section.
Style: [Minimal and neutral / dark and premium / warm and earthy].
[Color palette description]. [Font description].

```

### Form / Onboarding Screen

```

Design a [login / sign-up / onboarding step 2 of 4] screen for a mobile app.
Include: [Logo at top], [email + password fields / name field + goal selector],
[primary CTA button], [secondary link — e.g. "Forgot password?" or "Sign in instead"].
Visual style: [Clean / friendly / minimal]. Background: [solid / gradient — specify colors].
Show the keyboard raised state so the form is visible above it.

```

### Admin / Data Dashboard (Web)

```

Design a web admin dashboard for [business type — e.g. factory operations, e-commerce, SaaS].
Layout: Fixed left sidebar with icon + label nav, collapsible. Top bar with search,
user avatar, settings.
Main content: 4 KPI stat cards at top, then a data table below showing [entity]
with columns: [list columns]. Each row has [status badge / action buttons].
Add filter dropdowns above the table for [list filterable fields].
Style: Light professional theme. Blue primary. High-density layout suitable
for fullscreen display.

```

---

## 8. Pro Tips & Troubleshooting

### Golden Rules

- ✅ **One major change per prompt.** The more changes in a single prompt, the higher the chance Stitch will forget existing layout choices and regenerate everything.
- ✅ **Be explicit about screen targets.** Always prefix refinement prompts with the screen name: *"On the checkout screen, add…"* — not just *"add…"*
- ✅ **Start broad, then narrow.** Get the overall structure right first. Only then drill into component-level details.
- ✅ **Use UI/UX vocabulary.** Terms like "hero section," "sticky header," "bottom sheet," "skeleton loading state," "empty state," "modal overlay," and "bottom navigation bar" all carry precise meaning that Stitch respects.
- ✅ **Screenshot after every win.** If Stitch resets unexpectedly during a complex refinement, you'll want a visual record of what worked.
- ✅ **Don't exceed ~5,000 characters in a single prompt.** Stitch consistently omits components when prompts are too long. Break long specs into multiple sequential prompts.

### When Things Go Wrong

**🔄 Stitch regenerated the entire layout after a small edit.**

This is the most common frustration. Prevent it by:
1. Making one change at a time
2. Being very specific about what NOT to change: *"Keep the existing card layout — only update the color of the CTA button"*
3. Using the Agent Manager to branch before risky edits

---

**🧩 A component is missing from the output.**

Stitch silently drops components when prompts are overloaded or ambiguous. Simplify your prompt to focus on that one component and regenerate. Alternatively, use a follow-up prompt:

```

"Add a [missing component] to the [location] of the current design without changing anything else."

```

---

**🎙️ Voice mode tip.**

The Design Agent in voice mode will proactively ask you clarifying questions. Let it interview you — the back-and-forth often yields better results than trying to specify everything upfront in a single typed prompt.

### Language Localisation

```

"Switch all button labels, menu items, and product copy to Spanish."
"Translate the entire app into Japanese. Keep all UI labels, CTAs, and placeholder text in Japanese."
"Display all dates in DD/MM/YYYY format and all currency in EUR (€)."

```

---

## 9. Recommended Workflow (2026)

The fastest path from idea to production-ready design.

1. **Ideate in Stitch (Standard Mode).** Write a vibe prompt or a broad concept prompt. Generate 8–12 rough concepts fast. Use voice mode to brainstorm. Don't judge — just explore quantity.
2. **Narrow to 2–3 directions.** Pick the strongest variants. Use the Agent Manager to branch each into its own design thread so you can explore without losing your options.
3. **Apply your design system.** Import a DESIGN.md file if you have one, or use targeted prompts to align colors, fonts, and spacing to your brand.
4. **Refine screen by screen (Experimental Mode).** Switch to Gemini 3.1 Pro for higher fidelity. Drill into each screen with one focused prompt at a time.
5. **Build the prototype.** Connect screens with clickable hotspots. Ask the agent to generate missing screens (empty states, error states, confirmation dialogs).
6. **Export.** Copy to Figma for final polish + developer handoff, or export React/HTML code directly to your codebase. Use the MCP server to pipe into Cursor or Claude Code.

---

*Community reference guide, updated March 2026. Based on official Stitch documentation at [stitch.withgoogle.com/docs](https://stitch.withgoogle.com/docs). Discuss at [discuss.ai.google.dev](https://discuss.ai.google.dev/c/stitch/61).*
```

when u provide me design prompt i want u to not mention anything related to design but functionality and features and what all things it should have to be a "AMAZING SENIOR LEVEL project" , also can u please decide if the design should be SPA or MPA based on my tier and the project pls, also make sure to plan/research based on 2025-2026 data and not based on old data before 2025
````

now u see the issue is i am very picky in picking up projects as i am also working 10am-7pm from monday to saturday and its hard to have energy to complete everything and also i want real world application / problems related use case based unique projects which also teaches me industry based application / backend progressively ( node.js and express.js ) folder structure maintaince, debugging, testing, scalability, design system, and many more things overall from tools to application like everything overall sure we can divide the prompt which u are gonna make into two parts but this is the whole idea to learn the best thing in market as AI is advancing and i dont wanna take much help from AI i need to run my own imagination and think on my own cuz i will get lazy if i get my learning phase done from AI too...

also if possible i want u to make sure the learning is progressive and not random so want that in order also if possible make sure that the projects is not generic and found in most resumes i want it to be creative, also dont hallucinate / overthink just search / plan / research

also my friend told me to just do 5 projects which covers whole react concepts properly in progressive way and then move on

```
`Project 01 · After your JS 30`
ClipVault
A persistent clipboard history manager. Everything you copy is saved, searchable, and synced across all your open tabs — no OS permissions, no install, no server.
Clipboard API
IndexedDB
BroadcastChannel

`Project 02 · Canvas + CSSOM`
ContrastKit
An offline-first WCAG color contrast checker, palette extractor, and accessibility audit tool. Paste any CSS or drop an image — it finds every color, runs contrast ratios, and grades them AA/AAA.
Canvas API
CSS Object Model
WCAG math

`Project 03 · File System Access API + Web Workers`
DiffLens
A privacy-first offline file diff tool. Open two files directly from disk — no upload, no server. The diff algorithm runs in a Web Worker so the UI stays live even on 10,000-line files.
File System Access API
Web Workers
CSS Custom Highlight

`Project 04 · Cross-Tab Communication`
TabSync
A cross-tab state coordinator. Open 4 tabs of the same app — they all share a live state, see each other's activity, and stay in sync. The problem every web app has but almost no one solves correctly.
Page Visibility API
BroadcastChannel
SharedWorker

`Project 05 · Prestige · Service Workers`
ServiceKit
An offline-first news/content reader that works with zero internet connection. Built with a Service Worker, Cache API, and Background Sync — the full PWA engine, from scratch, no frameworks.
Service Workers
Cache API
Background Sync
Web Push
```

these and move on to backend cuz frontend will never end and the pay is more in backend
