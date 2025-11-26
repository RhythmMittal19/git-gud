# Track A: Full-Stack Development

> [Back to main README](../README.md)

The employability track. This gets you hired.

## Track A: Full-Stack Development

> **Goal:** Employable Full-Stack Developer in 5-6 months
> **Daily Time:** 5-7 hours
> **End Result:** Portfolio with 5+ projects, job-ready skills

This is the money track. Track B makes you exceptional, but Track A pays the bills.

**Why Full-Stack?**

- More job opportunities (you can apply to frontend, backend, or full-stack roles)
- Better understanding of the whole system
- Can build complete projects for portfolio
- Higher earning potential
- Can freelance while job hunting

---

### Month 1-2: Web Foundations

These are the building blocks. HTML is the skeleton, CSS is the skin, JavaScript is the brain. Rush through this and you'll regret it forever.

---


## Modules

| Module | Topic | Weeks | Status |
|--------|-------|-------|--------|
| [01-HTML](01-html/README.md) | HTML5 fundamentals | Week 1-2 | Done |
| [02-CSS](02-css/README.md) | CSS3 + Flexbox + Grid | Week 3-5 | Done |
| [03-JavaScript](03-javascript/README.md) | JS fundamentals + 25 projects | Week 6-9 | In Progress |
| [04-React](04-react/README.md) | React + hooks + state | Week 15-17 | Started |

## Coming Next
- TypeScript (Week 12-14)
- Testing (Week 18-19)
- Tailwind CSS (Week 20)
- Node.js + Backend (Week 22-28)
- Next.js (Week 29-31)
- DevOps (Week 32-34)

---

## Track A Curriculum (Full Detail)

### Month 1-2: Web Foundations

These are the building blocks. HTML is the skeleton, CSS is the skin, JavaScript is the brain. Rush through this and you'll regret it forever.

---

#### A1.1: HTML5 (Week 1-2)

> **Why this matters:** HTML is not "easy" — it's fundamental. Bad HTML means bad SEO, bad accessibility, bad everything. Most developers write garbage HTML because they rushed through it.

> **Time Investment:** ~2-3 hrs/day | **Total:** ~30 hours over 2 weeks

**What to Learn (In Order):**

**Day 1-2: Document Basics**

```html
<!-- The DOCTYPE declaration - tells browser this is HTML5 -->
<!DOCTYPE html>

<!-- The root element - lang attribute helps screen readers -->
<html lang="en">
  <head>
    <!-- Character encoding - always use UTF-8 -->
    <meta charset="UTF-8" />

    <!-- Responsive viewport - essential for mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Page title - shows in browser tab, important for SEO -->
    <title>Page Title</title>

    <!-- Meta description - shows in search results -->
    <meta name="description" content="Page description for SEO" />

    <!-- Link to CSS -->
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <!-- Your content goes here -->

    <!-- Scripts at the end of body (or use defer) -->
    <script src="script.js"></script>
  </body>
</html>
```

**Day 3-4: Text Content**

```html
<!-- Headings - h1 is most important, use only ONE h1 per page -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>

<!-- Paragraphs and inline text -->
<p>This is a paragraph of text.</p>
<p>Another paragraph with <strong>bold (important)</strong> text.</p>
<p>Text with <em>emphasis (italic)</em> for stress.</p>
<p>Text with <mark>highlighted</mark> portions.</p>

<!-- Line break and horizontal rule -->
<p>Line one<br />Line two</p>
<hr />
<!-- Thematic break -->

<!-- Quotes -->
<blockquote cite="https://source.com">
  <p>This is a longer quotation from another source.</p>
  <cite>— Author Name</cite>
</blockquote>

<p>She said <q>this is an inline quote</q> in her speech.</p>

<!-- Code -->
<p>Use the <code>console.log()</code> function to debug.</p>

<pre><code>
function hello() {
    console.log("Hello World");
}
</code></pre>

<!-- Other useful elements -->
<p><abbr title="HyperText Markup Language">HTML</abbr> is fun.</p>
<p>Published on <time datetime="2026-01-18">January 18, 2026</time></p>
<p>The result is <del>wrong</del> <ins>correct</ins>.</p>
<p>Water formula: H<sub>2</sub>O. Math: x<sup>2</sup></p>
```

**Day 5-6: Links & Media**

```html
<!-- Links -->
<a href="https://example.com">External link</a>
<a href="/about">Internal link (same site)</a>
<a href="#section-id">Jump to section on same page</a>
<a href="mailto:email@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>

<!-- Link with target -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Opens in new tab
</a>
<!-- rel="noopener noreferrer" is security best practice for target="_blank" -->

<!-- Images -->
<img src="photo.jpg" alt="Description of image for accessibility" />
<img src="photo.jpg" alt="Photo" width="300" height="200" />
<img src="photo.jpg" alt="Photo" loading="lazy" />
<!-- Lazy loading -->

<!-- Figure with caption -->
<figure>
  <img src="chart.png" alt="Sales chart showing growth" />
  <figcaption>Figure 1: Quarterly sales growth</figcaption>
</figure>

<!-- Video -->
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Your browser doesn't support video.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser doesn't support audio.
</audio>

<!-- Embedding external content -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560"
  height="315"
  title="Video title for accessibility"
  allowfullscreen
>
</iframe>
```

**Day 7-8: Lists & Tables**

```html
<!-- Unordered list (bullets) -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>
    Third item with nested list
    <ul>
      <li>Nested item</li>
    </ul>
  </li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - structure of web pages</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets - styling of web pages</dd>
</dl>

<!-- Tables - USE ONLY FOR TABULAR DATA, not layout -->
<table>
  <caption>
    Monthly Sales Report
  </caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
      <td>+5%</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
      <td>+20%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$22,000</td>
      <td>+12.5%</td>
    </tr>
  </tfoot>
</table>

<!-- Spanning cells -->
<td colspan="2">Spans 2 columns</td>
<td rowspan="3">Spans 3 rows</td>
```

**Day 9-10: Forms (VERY IMPORTANT)**

```html
<form action="/submit" method="POST">
  <!-- Text inputs -->
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" required />

  <!-- Number input -->
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="0" max="120" />

  <!-- Date input -->
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" />

  <!-- Phone -->
  <label for="phone">Phone:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{10}"
    placeholder="1234567890"
  />

  <!-- URL -->
  <label for="website">Website:</label>
  <input type="url" id="website" name="website" />

  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>

  <!-- Select dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Select a country</option>
    <optgroup label="Asia">
      <option value="IN">India</option>
      <option value="JP">Japan</option>
    </optgroup>
    <optgroup label="Europe">
      <option value="UK">United Kingdom</option>
      <option value="DE">Germany</option>
    </optgroup>
  </select>

  <!-- Radio buttons (choose one) -->
  <fieldset>
    <legend>Gender:</legend>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label>

    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label>

    <input type="radio" id="other" name="gender" value="other" />
    <label for="other">Other</label>
  </fieldset>

  <!-- Checkboxes (choose multiple) -->
  <fieldset>
    <legend>Interests:</legend>
    <input type="checkbox" id="coding" name="interests" value="coding" />
    <label for="coding">Coding</label>

    <input type="checkbox" id="music" name="interests" value="music" />
    <label for="music">Music</label>
  </fieldset>

  <!-- File upload -->
  <label for="resume">Upload Resume:</label>
  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />

  <!-- Hidden field -->
  <input type="hidden" name="csrf_token" value="abc123" />

  <!-- Buttons -->
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
  <button type="button" onclick="doSomething()">Custom Action</button>
</form>

<!-- Validation attributes -->
<!-- required, minlength, maxlength, min, max, pattern, step -->
```

**Day 11-14: Semantic HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic HTML Example</title>
  </head>
  <body>
    <!-- Header - introductory content, navigation -->
    <header>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main - primary content of the page (only one per page) -->
    <main>
      <!-- Article - self-contained content -->
      <article>
        <header>
          <h1>Article Title</h1>
          <p>
            By <a href="/author">Author Name</a> on
            <time datetime="2026-01-18">January 18, 2026</time>
          </p>
        </header>

        <!-- Section - thematic grouping -->
        <section>
          <h2>Section Heading</h2>
          <p>Section content...</p>
        </section>

        <section>
          <h2>Another Section</h2>
          <p>More content...</p>
        </section>

        <footer>
          <p>Tags: <a href="/tag/html">HTML</a>, <a href="/tag/web">Web</a></p>
        </footer>
      </article>

      <!-- Aside - tangentially related content -->
      <aside>
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/article-1">Related Article 1</a></li>
          <li><a href="/article-2">Related Article 2</a></li>
        </ul>
      </aside>
    </main>

    <!-- Footer - closing content -->
    <footer>
      <p>&copy; 2026 My Website. All rights reserved.</p>
      <nav aria-label="Footer navigation">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  </body>
</html>
```

**Why Semantics Matter:**

```text
1. ACCESSIBILITY
   - Screen readers understand the page structure
   - Users can navigate by landmarks (header, main, footer)
   - Proper headings create a document outline

2. SEO
   - Search engines understand your content better
   - Articles are recognized as main content
   - Navigation is identified correctly

3. MAINTAINABILITY
   - Code is self-documenting
   - Easier to style with CSS
   - Other developers understand the structure

4. FUTURE-PROOFING
   - New tools and browsers will understand your markup
   - AI and assistive technologies work better
```

**ARIA Basics (Accessibility):**

```html
<!-- ARIA roles (use semantic HTML first, ARIA as fallback) -->
<div role="navigation">...</div>
<!-- Better: use <nav> -->
<div role="main">...</div>
<!-- Better: use <main> -->

<!-- ARIA labels -->
<button aria-label="Close menu">X</button>
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>

<!-- ARIA for dynamic content -->
<div aria-live="polite">Content that updates will be announced</div>
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" hidden>...</div>

<!-- Hidden from screen readers -->
<span aria-hidden="true">🔥</span>
<!-- Decorative only -->
```

**Resources:**

| Resource            | Purpose         | Link                                              |
| ------------------- | --------------- | ------------------------------------------------- |
| MDN HTML            | Reference       | https://developer.mozilla.org/en-US/docs/Web/HTML |
| HTML Best Practices | Guidelines      | https://github.com/hail2u/html-best-practices     |
| web.dev HTML        | Google's guide  | https://web.dev/learn/html                        |
| W3C Validator       | Check your HTML | https://validator.w3.org/                         |
| The Odin Project    | Course          | https://www.theodinproject.com/                   |

**Practice Project:** Build your personal profile page with proper semantic structure.

**Milestones:**

- [ ] Day 7: Build a form that actually validates
- [ ] Day 14: Validate your HTML with W3C — zero errors
- [ ] Day 14: Explain why semantic HTML matters without looking it up

---

#### A1.2: CSS3 (Week 3-5)

> **Why this matters:** CSS is where most people get stuck and frustrated. They learn random properties without understanding the system. Learn the box model and layout systems properly — everything else is just details.

> **Time Investment:** ~2-3 hrs/day | **Total:** ~45 hours over 3 weeks

**What to Learn (In Order):**

**Week 3: Fundamentals**

**Day 1-2: Selectors & Specificity**

```css
/* ========== SELECTORS ========== */

/* Element selector */
p {
  color: blue;
}
h1 {
  font-size: 2rem;
}

/* Class selector (most common) */
.card {
  padding: 20px;
}
.btn {
  border-radius: 4px;
}

/* ID selector (use sparingly) */
#header {
  background: #333;
}

/* Attribute selectors */
[type="text"] {
  border: 1px solid #ccc;
}
[href^="https"] {
  color: green;
} /* Starts with */
[href$=".pdf"] {
  color: red;
} /* Ends with */
[class*="btn"] {
  cursor: pointer;
} /* Contains */

/* Pseudo-classes (state-based) */
a:hover {
  color: red;
}
a:focus {
  outline: 2px solid blue;
}
a:active {
  color: darkred;
}
input:focus {
  border-color: blue;
}
button:disabled {
  opacity: 0.5;
}
li:first-child {
  font-weight: bold;
}
li:last-child {
  margin-bottom: 0;
}
li:nth-child(odd) {
  background: #f0f0f0;
}
li:nth-child(3n) {
  color: blue;
} /* Every 3rd */
input:required {
  border-left: 3px solid red;
}
input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}

/* Pseudo-elements (parts of elements) */
p::first-line {
  font-weight: bold;
}
p::first-letter {
  font-size: 2em;
}
.quote::before {
  content: "" "; }
.quote::after { content: " "";
}
input::placeholder {
  color: #999;
}
::selection {
  background: yellow;
}

/* Combinators */
div p {
} /* Descendant: p inside div (any level) */
div > p {
} /* Child: p directly inside div */
h1 + p {
} /* Adjacent sibling: p immediately after h1 */
h1 ~ p {
} /* General sibling: p after h1 (same parent) */

/* Grouping */
h1,
h2,
h3 {
  font-family: sans-serif;
}

/* ========== SPECIFICITY ========== */
/*
   Specificity determines which rule wins when multiple rules match.

   Calculated as: (inline, IDs, classes, elements)

   Examples:
   p                    → (0, 0, 0, 1)
   .card                → (0, 0, 1, 0)
   #header              → (0, 1, 0, 0)
   style="..."          → (1, 0, 0, 0) - inline style

   .card p              → (0, 0, 1, 1)
   #header .nav a       → (0, 1, 1, 1)

   Higher specificity wins!
   Same specificity? Last rule wins.

   !important overrides everything (avoid using it)
*/

/* Avoid !important - it makes debugging hard */
.btn {
  color: blue !important; /* BAD - hard to override */
}

/* Better: use more specific selector */
.sidebar .btn {
  color: blue;
}
```

**Day 3-4: The Box Model (MOST IMPORTANT CONCEPT)**

```css
/*
   EVERY element is a box with:

   ┌──────────────────────────────────────┐
   │              MARGIN                  │ ← Space outside border
   │  ┌────────────────────────────────┐  │
   │  │           BORDER               │  │ ← The border itself
   │  │  ┌──────────────────────────┐  │  │
   │  │  │        PADDING           │  │  │ ← Space inside border
   │  │  │  ┌────────────────────┐  │  │  │
   │  │  │  │     CONTENT        │  │  │  │ ← Your actual content
   │  │  │  └────────────────────┘  │  │  │
   │  │  └──────────────────────────┘  │  │
   │  └────────────────────────────────┘  │
   └──────────────────────────────────────┘
*/

/* ALWAYS use border-box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
   content-box (default): width/height = content only
   border-box: width/height = content + padding + border

   border-box is much easier to work with!
*/

/* Box properties */
.box {
  /* Size */
  width: 300px;
  height: 200px;
  min-width: 100px;
  max-width: 500px;
  min-height: 50px;
  max-height: 400px;

  /* Padding (inside) */
  padding: 20px; /* All sides */
  padding: 10px 20px; /* Vertical | Horizontal */
  padding: 10px 20px 30px; /* Top | Horizontal | Bottom */
  padding: 10px 20px 30px 40px; /* Top | Right | Bottom | Left */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;

  /* Border */
  border: 1px solid #ccc;
  border-width: 1px;
  border-style: solid; /* solid, dashed, dotted, double, none */
  border-color: #ccc;
  border-radius: 8px; /* Rounded corners */
  border-radius: 50%; /* Circle (if square element) */

  /* Margin (outside) */
  margin: 20px;
  margin: 0 auto; /* Center horizontally */
  margin-top: 20px;
  /* Same patterns as padding */
}

/* MARGIN COLLAPSE - Important to understand! */
/*
   Vertical margins between adjacent elements collapse.
   Only the larger margin is used.

   If element A has margin-bottom: 20px
   And element B has margin-top: 30px
   The space between them is 30px, NOT 50px.

   This doesn't happen with:
   - Horizontal margins
   - Flexbox items
   - Grid items
   - Floated elements
*/
```

**Day 5-7: Display & Positioning**

```css
/* ========== DISPLAY ========== */

/* Block: takes full width, stacks vertically */
.block {
  display: block;
  /* Default for: div, p, h1-h6, section, article, header, footer */
}

/* Inline: flows with text, no width/height control */
.inline {
  display: inline;
  /* Default for: span, a, strong, em, img */
}

/* Inline-block: inline flow, but respects width/height */
.inline-block {
  display: inline-block;
  width: 100px;
  height: 50px;
}

/* None: removes from layout completely */
.hidden {
  display: none;
}

/* ========== POSITIONING ========== */

/* Static (default): normal flow */
.static {
  position: static;
}

/* Relative: positioned relative to its normal position */
.relative {
  position: relative;
  top: 10px; /* Moves down 10px from original position */
  left: 20px; /* Moves right 20px */
  /* Original space is preserved */
}

/* Absolute: positioned relative to nearest positioned ancestor */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  /* Removed from normal flow */
  /* Parent must be position: relative (or other non-static) */
}

/* Fixed: positioned relative to viewport */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* Stays in place when scrolling */
  /* Great for: sticky headers, modals */
}

/* Sticky: hybrid of relative and fixed */
.sticky {
  position: sticky;
  top: 0;
  /* Acts relative until scroll position, then fixed */
  /* Great for: sticky headers that scroll into view */
}

/* Z-index: stacking order (only works on positioned elements) */
.modal {
  position: fixed;
  z-index: 1000; /* Higher = on top */
}
.overlay {
  position: fixed;
  z-index: 999;
}

/* Stacking context: created by certain properties */
/* Each stacking context is independent */
```

**Week 4: Layout Systems**

**Day 1-3: Flexbox (1D Layout)**

```css
/*
   FLEXBOX is for ONE-DIMENSIONAL layout
   Either a row OR a column (not both at once)

   Main axis: direction items flow (horizontal or vertical)
   Cross axis: perpendicular to main axis
*/

/* CONTAINER (parent) */
.flex-container {
  display: flex; /* or inline-flex */

  /* Direction */
  flex-direction: row; /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column; /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */

  /* Wrapping */
  flex-wrap: nowrap; /* Default: all in one line */
  flex-wrap: wrap; /* Wrap to new lines */
  flex-wrap: wrap-reverse;

  /* Shorthand */
  flex-flow: row wrap;

  /* Alignment on MAIN axis */
  justify-content: flex-start; /* Default: start of main axis */
  justify-content: flex-end; /* End of main axis */
  justify-content: center; /* Center */
  justify-content: space-between; /* Equal space between items */
  justify-content: space-around; /* Equal space around items */
  justify-content: space-evenly; /* Equal space everywhere */

  /* Alignment on CROSS axis */
  align-items: stretch; /* Default: fill container height */
  align-items: flex-start; /* Top (for row) */
  align-items: flex-end; /* Bottom (for row) */
  align-items: center; /* Center */
  align-items: baseline; /* Align text baselines */

  /* Multi-line alignment (when wrapping) */
  align-content: flex-start;
  align-content: center;
  align-content: space-between;

  /* Gap between items */
  gap: 20px;
  row-gap: 10px;
  column-gap: 20px;
}

/* ITEMS (children) */
.flex-item {
  /* Growing and shrinking */
  flex-grow: 0; /* Default: don't grow */
  flex-grow: 1; /* Grow to fill available space */
  flex-grow: 2; /* Grow twice as much as flex-grow: 1 */

  flex-shrink: 1; /* Default: shrink if needed */
  flex-shrink: 0; /* Don't shrink */

  flex-basis: auto; /* Default: use width/height */
  flex-basis: 200px; /* Start at 200px, then grow/shrink */
  flex-basis: 0; /* Ignore content size, distribute space evenly */

  /* Shorthand: grow shrink basis */
  flex: 0 1 auto; /* Default */
  flex: 1; /* Same as: 1 1 0 (grow equally) */
  flex: auto; /* Same as: 1 1 auto */
  flex: none; /* Same as: 0 0 auto (fixed size) */

  /* Override alignment for single item */
  align-self: center;
  align-self: flex-start;
  align-self: flex-end;

  /* Order (default is 0) */
  order: -1; /* Move to start */
  order: 1; /* Move to end */
}

/* COMMON PATTERNS */

/* Center everything (the holy grail) */
.center-all {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Card grid that wraps */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 300px; /* Grow, shrink, min 300px */
  max-width: 400px;
}

/* Sticky footer layout */
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1; /* Takes remaining space */
}
```

**Day 4-7: CSS Grid (2D Layout)**

```css
/*
   GRID is for TWO-DIMENSIONAL layout
   Rows AND columns at the same time
*/

/* CONTAINER (parent) */
.grid-container {
  display: grid; /* or inline-grid */

  /* Define columns */
  grid-template-columns: 200px 200px 200px; /* 3 equal columns */
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal fractions */
  grid-template-columns: 1fr 2fr 1fr; /* Middle is twice as wide */
  grid-template-columns: repeat(3, 1fr); /* Same as 1fr 1fr 1fr */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive! */
  grid-template-columns: 200px 1fr 100px; /* Fixed-flex-fixed */

  /* Define rows */
  grid-template-rows: 100px auto 50px; /* Header-content-footer */
  grid-template-rows: repeat(3, 100px); /* 3 rows of 100px */

  /* Implicit rows (when grid creates more rows) */
  grid-auto-rows: 100px;
  grid-auto-rows: minmax(100px, auto); /* Min 100px, grow as needed */

  /* Gap */
  gap: 20px;
  row-gap: 10px;
  column-gap: 20px;

  /* Alignment (same as flexbox) */
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  justify-content: start | end | center | space-between | space-around;
  align-content: start | end | center | space-between | space-around;

  /* Named areas (powerful!) */
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

/* ITEMS (children) */
.grid-item {
  /* Position by line numbers */
  grid-column-start: 1;
  grid-column-end: 3; /* Spans columns 1-2 */
  grid-row-start: 1;
  grid-row-end: 2;

  /* Shorthand */
  grid-column: 1 / 3; /* Start / end */
  grid-row: 1 / 2;
  grid-column: 1 / span 2; /* Start / span count */
  grid-column: 1 / -1; /* Full width (-1 = last line) */

  /* Even shorter */
  grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */

  /* Or use named areas */
  grid-area: header;
  grid-area: sidebar;
  grid-area: content;
  grid-area: footer;

  /* Self alignment */
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}

/* COMMON PATTERNS */

/* Responsive grid (no media queries!) */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Classic page layout */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}

/* Card with image and text aligned */
.card-grid {
  display: grid;
  grid-template-rows: 200px auto auto; /* Image-title-description */
}
```

**Week 5: Advanced CSS**

**Day 1-2: Typography & Colors**

```css
/* Typography */
.text {
  /* Font family (with fallbacks) */
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;

  /* Size (prefer rem for accessibility) */
  font-size: 16px; /* Pixels */
  font-size: 1rem; /* Relative to root (16px default) */
  font-size: 1.2em; /* Relative to parent */

  /* Weight */
  font-weight: normal; /* 400 */
  font-weight: bold; /* 700 */
  font-weight: 300; /* Light */
  font-weight: 500; /* Medium */

  /* Style */
  font-style: italic;

  /* Line height (unitless is best) */
  line-height: 1.5; /* 1.5 times font size */

  /* Letter spacing */
  letter-spacing: 0.05em;

  /* Text alignment */
  text-align: left | right | center | justify;

  /* Decoration */
  text-decoration: none;
  text-decoration: underline;
  text-decoration: line-through;

  /* Transform */
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;

  /* Overflow */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Shows ... */
}

/* Colors */
.colors {
  /* Named colors */
  color: red;

  /* Hexadecimal */
  color: #ff0000; /* Full */
  color: #f00; /* Shorthand */
  color: #ff0000ff; /* With alpha */

  /* RGB / RGBA */
  color: rgb(255, 0, 0);
  color: rgba(255, 0, 0, 0.5); /* 50% opacity */

  /* HSL / HSLA (easier to work with!) */
  color: hsl(0, 100%, 50%); /* Hue, Saturation, Lightness */
  color: hsla(0, 100%, 50%, 0.5);

  /* Modern syntax */
  color: rgb(255 0 0 / 50%);
  color: hsl(0 100% 50% / 50%);
}

/* CSS Custom Properties (Variables) */
:root {
  /* Define variables in :root for global access */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-text: #333;
  --color-bg: #fff;

  --font-family: "Inter", sans-serif;
  --font-size-base: 16px;

  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;

  --border-radius: 4px;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);

  /* Fallback value */
  color: var(--color-text, #000);
}

/* Dark mode with variables */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #fff;
    --color-bg: #1a1a1a;
  }
}

/* Or with a class toggle */
.dark-mode {
  --color-text: #fff;
  --color-bg: #1a1a1a;
}
```

**Day 3-4: Responsive Design**

```css
/* MOBILE-FIRST approach (start with mobile, add complexity for larger screens) */

/* Base styles (mobile) */
.container {
  width: 100%;
  padding: 0 16px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }

  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }

  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}

/* Common breakpoints:
   - 480px:  Large phones
   - 768px:  Tablets
   - 1024px: Small desktops/laptops
   - 1280px: Large desktops
   - 1536px: Extra large
*/

/* Viewport units */
.hero {
  height: 100vh; /* 100% of viewport height */
  width: 100vw; /* 100% of viewport width */
  min-height: 100svh; /* Small viewport height (accounts for mobile browser UI) */
}

/* Responsive typography */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* clamp(minimum, preferred, maximum) */
  /* Scales between 1.5rem and 3rem based on viewport */
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* Picture element for art direction */
/* (Different images for different screen sizes) */

/* Container queries (newer, powerful) */
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

**Day 5-7: Transitions & Animations**

```css
/* Transitions (for state changes) */
.button {
  background: #3498db;
  color: white;
  padding: 10px 20px;

  /* Transition properties */
  transition-property: background, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;

  /* Shorthand */
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  /* Transition all (careful - can be slow) */
  transition: all 0.3s ease;
}

.button:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

/* Timing functions */
/* ease       - slow start, fast middle, slow end (default) */
/* ease-in    - slow start */
/* ease-out   - slow end */
/* ease-in-out - slow start and end */
/* linear     - constant speed */
/* cubic-bezier(n,n,n,n) - custom */

/* Transforms */
.transform-examples {
  transform: translateX(50px); /* Move horizontally */
  transform: translateY(-20px); /* Move vertically */
  transform: translate(50px, -20px); /* Both */

  transform: rotate(45deg);
  transform: rotateX(45deg); /* 3D */
  transform: rotateY(45deg); /* 3D */

  transform: scale(1.2); /* 120% size */
  transform: scaleX(1.5);
  transform: scaleY(0.8);

  transform: skew(10deg, 5deg);

  /* Combine transforms */
  transform: translateX(50px) rotate(45deg) scale(1.1);

  /* Transform origin */
  transform-origin: center; /* Default */
  transform-origin: top left;
  transform-origin: 50% 100%;
}

/* Keyframe animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Or with percentages */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animated-element {
  /* Animation properties */
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1; /* or infinite */
  animation-direction: normal; /* or reverse, alternate */
  animation-fill-mode: forwards; /* Keep final state */
  animation-play-state: running; /* or paused */

  /* Shorthand */
  animation: fadeIn 0.5s ease-out forwards;

  /* Multiple animations */
  animation:
    fadeIn 0.5s ease-out,
    bounce 1s ease-in-out 0.5s infinite;
}

/* Performance tips */
/* Only animate these properties for best performance: */
/* - transform */
/* - opacity */
/* Avoid animating: width, height, margin, padding, top, left */

.performant {
  /* Use will-change sparingly */
  will-change: transform;

  /* Use GPU acceleration */
  transform: translateZ(0);
}

/* Reduced motion preference (accessibility) */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Resources:**

| Resource       | Purpose          | Link                                             |
| -------------- | ---------------- | ------------------------------------------------ |
| MDN CSS        | Reference        | https://developer.mozilla.org/en-US/docs/Web/CSS |
| CSS-Tricks     | Guides           | https://css-tricks.com/                          |
| Flexbox Froggy | Learn Flexbox    | https://flexboxfroggy.com/                       |
| Grid Garden    | Learn Grid       | https://cssgridgarden.com/                       |
| web.dev CSS    | Google's course  | https://web.dev/learn/css                        |
| 100 Days CSS   | Daily challenges | https://100dayscss.com/                          |
| CSS Battle     | Practice         | https://cssbattle.dev/                           |
| Kevin Powell   | YouTube          | https://www.youtube.com/@KevinPowell             |

**Projects:**

1. Responsive navigation bar
2. Card component library
3. Landing page clone (pick any modern site)
4. CSS Grid photo gallery

**Milestones:**

- [ ] Week 3: Explain the box model without looking it up
- [ ] Week 4: Complete Flexbox Froggy (all levels)
- [ ] Week 4: Complete Grid Garden (all levels)
- [ ] Week 5: Build a fully responsive landing page from scratch

---

#### A1.3: JavaScript Fundamentals (Week 6-9)

> **Why this matters:** JavaScript is where programming actually begins. Everything before this was markup. If you don't understand JavaScript deeply, React will destroy you. Don't rush.

> **Time Investment:** ~3-4 hrs/day | **Total:** ~80 hours over 4 weeks

**What to Learn (In Order):**

**Week 6: Core Basics**

**Day 1: Variables & Types**

```javascript
// Variables - use const by default, let when needed
const name = "Rhythm"; // Cannot be reassigned
let age = 21; // Can be reassigned
// var is old, avoid it (function-scoped, hoisted, confusing)

// Primitive types
const string = "Hello"; // String
const number = 42; // Number (integers and floats)
const decimal = 3.14; // Also Number
const boolean = true; // Boolean (true/false)
const nothing = null; // Null (intentional absence)
let notDefined; // Undefined (not yet assigned)
const bigInt = 9007199254740991n; // BigInt (large numbers)
const symbol = Symbol("id"); // Symbol (unique identifier)

// typeof operator
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (famous JavaScript bug!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof function () {}); // "function"

// Type coercion (JavaScript converts types automatically - be careful!)
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (subtraction converts to number)
console.log("5" * "2"); // 10
console.log(true + 1); // 2 (true = 1)
console.log(false + 1); // 1 (false = 0)
console.log("" == false); // true (loose equality)
console.log("" === false); // false (strict equality - use this!)

// Always use strict equality (===) to avoid confusion
```

**Day 2: Operators**

```javascript
// Arithmetic
let sum = 5 + 3; // 8
let diff = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.666...
let remainder = 5 % 3; // 2 (modulo)
let power = 5 ** 3; // 125 (exponentiation)

// Increment / Decrement
let x = 5;
x++; // x is now 6 (postfix: returns old value, then increments)
++x; // x is now 7 (prefix: increments, then returns new value)
x--; // x is now 6
--x; // x is now 5

// Assignment
let a = 10;
a += 5; // a = a + 5 = 15
a -= 3; // a = a - 3 = 12
a *= 2; // a = a * 2 = 24
a /= 4; // a = a / 4 = 6
a %= 4; // a = a % 4 = 2

// Comparison (ALWAYS use === and !==)
console.log(5 === 5); // true (strict equality)
console.log(5 === "5"); // false (different types)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3); // true (strict inequality)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// Logical
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// Short-circuit evaluation
const result = null || "default"; // "default" (first truthy)
const result2 = "value" && "other"; // "other" (last truthy if all truthy)

// Nullish coalescing (??) - only checks null/undefined
const value = null ?? "default"; // "default"
const value2 = 0 ?? "default"; // 0 (0 is not null/undefined)
const value3 = 0 || "default"; // "default" (0 is falsy)

// Optional chaining (?.)
const user = { name: "Rhythm", address: { city: "Delhi" } };
console.log(user.address?.city); // "Delhi"
console.log(user.profile?.avatar); // undefined (no error!)

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";
```

**Day 3: Strings**

```javascript
// String creation
const single = "Hello";
const double = "World";
const template = `Hello ${name}!`; // Template literals (use these!)

// Template literals are powerful
const multiline = `
  This is
  a multiline
  string
`;

const expression = `Sum: ${2 + 2}`;
const nested = `Name: ${user.name.toUpperCase()}`;

// String properties and methods
const str = "Hello World";

str.length; // 11
str[0]; // "H" (first character)
str[str.length - 1]; // "d" (last character)

str.toUpperCase(); // "HELLO WORLD"
str.toLowerCase(); // "hello world"

str.indexOf("World"); // 6 (position, -1 if not found)
str.lastIndexOf("o"); // 7
str.includes("World"); // true
str.startsWith("Hello"); // true
str.endsWith("World"); // true

str.slice(0, 5); // "Hello" (start, end)
str.slice(6); // "World" (start to end)
str.slice(-5); // "World" (last 5 characters)
str.substring(0, 5); // "Hello" (similar to slice)

str.split(" "); // ["Hello", "World"]
str.split(""); // ["H","e","l","l","o"," ","W","o","r","l","d"]
["Hello", "World"].join(" "); // "Hello World"

str.trim(); // Remove whitespace from both ends
str.trimStart(); // Remove from start
str.trimEnd(); // Remove from end

str.replace("World", "JS"); // "Hello JS" (first occurrence)
str.replaceAll("o", "0"); // "Hell0 W0rld" (all occurrences)

str.repeat(3); // "Hello WorldHello WorldHello World"

str.padStart(15, "*"); // "****Hello World"
str.padEnd(15, "*"); // "Hello World****"

// String is immutable - methods return new strings
const original = "hello";
const upper = original.toUpperCase();
console.log(original); // "hello" (unchanged)
console.log(upper); // "HELLO"
```

**Day 4-5: Numbers & Math**

```javascript
// Number creation
const int = 42;
const float = 3.14;
const negative = -10;
const exponential = 2.5e6; // 2,500,000

// Special values
const inf = Infinity;
const negInf = -Infinity;
const notANumber = NaN;

// Checking special values
Number.isNaN(NaN); // true
Number.isNaN("hello"); // false (doesn't coerce)
isNaN("hello"); // true (coerces - avoid!)
Number.isFinite(42); // true
Number.isFinite(Infinity); // false
Number.isInteger(42); // true
Number.isInteger(42.5); // false

// Parsing strings to numbers
parseInt("42"); // 42
parseInt("42.5"); // 42 (truncates)
parseInt("42px"); // 42 (ignores trailing non-digits)
parseInt("abc"); // NaN
parseInt("101", 2); // 5 (binary)
parseFloat("3.14"); // 3.14
parseFloat("3.14abc"); // 3.14
Number("42"); // 42
Number("42abc"); // NaN (stricter)
+"42"; // 42 (unary plus, quick conversion)

// Number methods
const num = 3.14159;
num.toFixed(2); // "3.14" (string!)
num.toPrecision(4); // "3.142" (string!)
num.toString(); // "3.14159"
num.toString(2); // Binary representation

// Math object
Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045

Math.round(4.5); // 5 (round to nearest)
Math.floor(4.9); // 4 (round down)
Math.ceil(4.1); // 5 (round up)
Math.trunc(4.9); // 4 (remove decimals)

Math.abs(-5); // 5 (absolute value)
Math.sign(-5); // -1 (-1, 0, or 1)

Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1
Math.max(...[1, 5, 3]); // 5 (with array spread)

Math.pow(2, 3); // 8 (or use 2 ** 3)
Math.sqrt(16); // 4
Math.cbrt(27); // 3 (cube root)

Math.random(); // 0 to 0.999...
Math.floor(Math.random() * 10); // 0 to 9
Math.floor(Math.random() * (max - min + 1)) + min; // min to max

// Floating point issues (famous!)
console.log(0.1 + 0.2); // 0.30000000000000004 (not 0.3!)
// Solution: use integers (cents instead of dollars) or libraries
```

**Day 6-7: Control Flow**

```javascript
// If/else
if (condition) {
  // code
} else if (otherCondition) {
  // code
} else {
  // code
}

// Truthy and Falsy values (MEMORIZE THESE!)
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy (including [], {}, "0", "false")

if ("") console.log("truthy"); // Doesn't run (empty string is falsy)
if ("0") console.log("truthy"); // Runs ("0" is truthy!)
if ([]) console.log("truthy"); // Runs (empty array is truthy!)
if ({}) console.log("truthy"); // Runs (empty object is truthy!)

// Switch
switch (value) {
  case 1:
    console.log("One");
    break; // Don't forget break!
  case 2:
  case 3:
    console.log("Two or Three"); // Fall-through
    break;
  default:
    console.log("Other");
}

// Ternary (for simple conditions)
const message = isLoggedIn ? "Welcome back!" : "Please log in";

// Loops
// For loop (when you know the count)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While loop (when you don't know the count)
while (condition) {
  // code
  // Make sure condition eventually becomes false!
}

// Do-while (runs at least once)
do {
  // code
} while (condition);

// For...of (for iterables: arrays, strings, etc.)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

for (const char of "Hello") {
  console.log(char);
}

// For...in (for object properties - rarely use for arrays)
const person = { name: "Rhythm", age: 21 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Exit loop entirely
  if (i === 3) continue; // Skip this iteration
  console.log(i); // 0, 1, 2, 4
}

// Labeled statements (rare, but useful for nested loops)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer; // Breaks both loops
    console.log(i, j);
  }
}
```

**Day 7: Functions**

```javascript
// Function declaration (hoisted - can be called before definition)
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression (not hoisted)
const greet2 = function (name) {
  return `Hello, ${name}!`;
};

// Arrow function (modern, preferred for most cases)
const greet3 = (name) => {
  return `Hello, ${name}!`;
};

// Arrow function shortcuts
const greet4 = (name) => `Hello, ${name}!`; // Implicit return
const double = (x) => x * 2; // Single param, no parens needed
const getObject = () => ({ key: "value" }); // Return object (wrap in parens)

// Parameters
function example(required, optional = "default") {
  console.log(required, optional);
}
example("a"); // "a" "default"
example("a", "b"); // "a" "b"

// Rest parameters (collect remaining arguments)
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Spread operator (expand array into arguments)
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

// Return values
function noReturn() {
  console.log("No return");
  // Implicitly returns undefined
}

function earlyReturn(x) {
  if (x < 0) return "Negative"; // Early return
  return "Non-negative";
}

// Functions are first-class citizens (can be passed around)
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

function calculate(a, b, operation) {
  return operation(a, b);
}
calculate(5, 3, operations.add); // 8

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Runs immediately!");
})();

// Arrow functions and 'this' (important difference!)
// Arrow functions don't have their own 'this'
// They inherit 'this' from the surrounding scope
// More on this later...
```

**Week 7: Intermediate Concepts**

**Day 1-2: Arrays**

```javascript
// Array creation
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(5); // [empty × 5]
const arr3 = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const arr4 = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

// Accessing elements
const fruits = ["apple", "banana", "cherry"];
fruits[0]; // "apple"
fruits[fruits.length - 1]; // "cherry" (last element)
fruits.at(-1); // "cherry" (modern way)
fruits.at(-2); // "banana"

// Checking
Array.isArray(fruits); // true
fruits.includes("banana"); // true
fruits.indexOf("banana"); // 1 (-1 if not found)
fruits.lastIndexOf("a"); // ... finds from end

// Mutating methods (change the original array)
fruits.push("date"); // Add to end, returns new length
fruits.pop(); // Remove from end, returns removed element
fruits.unshift("avocado"); // Add to start
fruits.shift(); // Remove from start
fruits.splice(1, 1); // Remove 1 element at index 1
fruits.splice(1, 0, "blueberry"); // Insert at index 1
fruits.splice(1, 1, "blackberry"); // Replace at index 1
fruits.reverse(); // Reverse in place
fruits.sort(); // Sort in place (alphabetically by default)
fruits.fill("x"); // Fill with value

// Sort with custom compare function
const numbers = [10, 2, 30, 4];
numbers.sort((a, b) => a - b); // [2, 4, 10, 30] (ascending)
numbers.sort((a, b) => b - a); // [30, 10, 4, 2] (descending)

// Non-mutating methods (return new array)
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
const product = numbers.reduce((acc, n) => acc * n, 1);

// Very important methods to master:
// map - transform each element
[1, 2, 3].map((x) => x * 2); // [2, 4, 6]

// filter - keep elements that pass test
[1, 2, 3, 4, 5].filter((x) => x > 2); // [3, 4, 5]

// reduce - combine into single value
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0); // 10

// find - first element that passes test
[1, 2, 3, 4].find((x) => x > 2); // 3

// findIndex - index of first element that passes test
[1, 2, 3, 4].findIndex((x) => x > 2); // 2

// some - do ANY elements pass test?
[1, 2, 3].some((x) => x > 2); // true

// every - do ALL elements pass test?
[1, 2, 3].every((x) => x > 0); // true

// forEach - just loop (no return value, avoid when possible)
[1, 2, 3].forEach((x) => console.log(x));

// Other useful methods
[1, 2, 3].slice(1, 2); // [2] (doesn't mutate)
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
[
  [1, 2],
  [3, 4],
].flat(); // [1, 2, 3, 4]
[1, 2, 3].flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
[1, 2, 3].join("-"); // "1-2-3"

// Spread operator
const arr = [1, 2, 3];
const copy = [...arr]; // Shallow copy
const merged = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
const combined = [...arr1, ...arr2]; // Combine arrays

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

const [a, , c] = [1, 2, 3]; // Skip elements
// a = 1, c = 3
```

**Day 3-4: Objects**

```javascript
// Object creation
const person = {
  name: "Rhythm",
  age: 21,
  isStudent: true,
  hobbies: ["coding", "badminton"],
  address: {
    city: "Delhi",
    country: "India",
  },
  // Method (function inside object)
  greet() {
    return `Hello, I'm ${this.name}`;
  },
  // Computed property name
  ["dynamic" + "Key"]: "value",
};

// Accessing properties
person.name; // "Rhythm" (dot notation)
person["name"]; // "Rhythm" (bracket notation)
const key = "age";
person[key]; // 21 (dynamic key access)
person.address.city; // "Delhi" (nested)
person?.address?.city; // "Delhi" (optional chaining - safe)
person?.phone?.number; // undefined (no error if phone doesn't exist)

// Modifying
person.name = "New Name"; // Update
person.email = "a@b.com"; // Add new property
delete person.isStudent; // Remove property

// Checking properties
"name" in person; // true
person.hasOwnProperty("name"); // true
Object.hasOwn(person, "name"); // true (modern)

// Object methods
Object.keys(person); // ["name", "age", ...] (array of keys)
Object.values(person); // ["Rhythm", 21, ...] (array of values)
Object.entries(person); // [["name", "Rhythm"], ["age", 21], ...]

// Looping over objects
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Object spread (shallow copy)
const copy = { ...person };
const merged = { ...person, ...otherObj };
const withUpdates = { ...person, age: 22 };

// Object destructuring
const { name, age } = person;
const { name: userName, age: userAge } = person; // Rename
const {
  name,
  address: { city },
} = person; // Nested
const { name, phone = "N/A" } = person; // Default value

// Shorthand property names
const x = 10,
  y = 20;
const point = { x, y }; // Same as { x: x, y: y }

// Object.assign (older way to copy/merge)
const copy2 = Object.assign({}, person);
const merged2 = Object.assign({}, person, otherObj);

// Object.freeze (make immutable)
const frozen = Object.freeze({ a: 1, b: 2 });
frozen.a = 100; // Silently fails (or throws in strict mode)
console.log(frozen.a); // Still 1

// Object.seal (can modify, but can't add/remove properties)
const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 100; // Works
sealed.c = 3; // Silently fails
```

**Day 5-6: Scope & Closures**

```javascript
// SCOPE - where variables are accessible

// Global scope
const globalVar = "I'm global";

function example() {
  // Function scope
  const functionVar = "I'm in a function";

  if (true) {
    // Block scope
    const blockVar = "I'm in a block";
    let alsoBlock = "Me too";
    var notBlock = "I'm function-scoped!"; // var ignores blocks!
  }

  console.log(notBlock); // Works (var is function-scoped)
  // console.log(blockVar); // Error (const is block-scoped)
}

// HOISTING - declarations are "moved" to top of scope
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "hello";

// console.log(notHoisted);  // Error: Cannot access before initialization
let notHoisted = "hello";
const alsoNotHoisted = "hello";

// Function declarations are fully hoisted
sayHello(); // Works!
function sayHello() {
  console.log("Hello!");
}

// Function expressions are not hoisted
// sayGoodbye();  // Error!
const sayGoodbye = function () {
  console.log("Goodbye!");
};

// CLOSURES - functions "remember" their scope

function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount(); // 2
// count is not accessible directly, only through the returned functions

// Closure example: creating functions with "memory"
function createMultiplier(factor) {
  return function (number) {
    return number * factor; // "Remembers" factor
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
double(5); // 10
triple(5); // 15

// Common closure gotcha with var in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Prints: 3, 3, 3 (not 0, 1, 2!)

// Fix with let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Prints: 0, 1, 2

// Or fix with IIFE
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Prints: 0, 1, 2
```

**Day 7: Higher-Order Functions**

```javascript
// Higher-order function: takes or returns a function

// Taking a function as argument
function doTwice(fn) {
  fn();
  fn();
}

doTwice(() => console.log("Hello!"));

// Returning a function
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Rhythm"); // "Hello, Rhythm!"
sayHi("World"); // "Hi, World!"

// Practical examples with array methods
const numbers = [1, 2, 3, 4, 5];

// map with callback
const doubled = numbers.map(function (num) {
  return num * 2;
});

// Same with arrow function
const tripled = numbers.map((num) => num * 3);

// filter
const evens = numbers.filter((num) => num % 2 === 0);

// reduce
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

// Chaining
const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 2)
  .reduce((sum, n) => sum + n, 0);
// [3, 4, 5] -> [6, 8, 10] -> 24

// Custom higher-order function
function unless(condition, fn) {
  if (!condition) {
    fn();
  }
}

unless(false, () => console.log("This runs!"));

// Debounce (common utility)
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle (common utility)
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
}, 300);
```

This covers the first half of JavaScript Fundamentals. The content continues with Week 8 (Asynchronous JavaScript) and Week 9 (DOM & Browser APIs), but I'll include those in the next part to keep this section manageable.

**Resources:**

| Resource            | Purpose                     | Link                                                                             |
| ------------------- | --------------------------- | -------------------------------------------------------------------------------- |
| JavaScript.info     | Comprehensive tutorial      | https://javascript.info/                                                         |
| Eloquent JavaScript | Free book                   | https://eloquentjavascript.net/                                                  |
| MDN JavaScript      | Reference                   | https://developer.mozilla.org/en-US/docs/Web/JavaScript                          |
| Namaste JavaScript  | Execution context deep dive | https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP         |
| JavaScript30        | 30 projects                 | https://javascript30.com/                                                        |
| freeCodeCamp JS     | Practice                    | https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/ |
| Exercism JavaScript | Mentored practice           | https://exercism.org/tracks/javascript                                           |

**Milestones:**

- [ ] Week 6: Explain the difference between `==` and `===`
- [ ] Week 7: Use `map`, `filter`, `reduce` without looking up syntax
- [ ] Week 8: Explain closures and give a real-world use case
- [ ] Week 8: Explain the event loop to a rubber duck
- [ ] Week 9: Build an app that fetches data from an API

---

#### A1.3: JavaScript Fundamentals (Continued)

**Week 8: Asynchronous JavaScript**

> This is where most beginners get confused. Take your time. Understand how JavaScript handles async operations.

**Day 1: Understanding Async**

```javascript
// JavaScript is SINGLE-THREADED
// Only one thing can execute at a time

// But it's also NON-BLOCKING
// Long operations don't freeze the program

// How? The EVENT LOOP

console.log("1. First");

setTimeout(() => {
  console.log("2. Timeout callback");
}, 0); // Even 0ms delay!

console.log("3. Second");

// Output:
// 1. First
// 3. Second
// 2. Timeout callback

// Why? setTimeout is async - it goes to the callback queue
// and waits for the call stack to be empty

/*
THE EVENT LOOP:

1. Call Stack - where functions execute (one at a time)
2. Web APIs - browser handles async operations (setTimeout, fetch, etc.)
3. Callback Queue - callbacks waiting to be executed
4. Event Loop - checks if call stack is empty, then moves callbacks from queue

When you call setTimeout:
1. setTimeout is added to call stack
2. setTimeout registers callback with Web API
3. setTimeout is removed from call stack
4. After delay, callback moves to queue
5. Event loop waits for call stack to be empty
6. Callback is moved to call stack and executed
*/

// Callbacks (the old way)
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "Rhythm" };
    callback(user);
  }, 1000);
}

fetchUserData(1, (user) => {
  console.log(user);
});

// Callback Hell (why we needed something better)
fetchUserData(1, (user) => {
  fetchUserPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      fetchReplies(comments[0].id, (replies) => {
        // This is a nightmare to read and maintain
      });
    });
  });
});
```

**Day 2-3: Promises**

```javascript
// A Promise represents a future value
// States: pending -> fulfilled OR rejected

// Creating a Promise
const promise = new Promise((resolve, reject) => {
  // Async operation here
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data fetched!"); // Fulfilled
    } else {
      reject(new Error("Failed to fetch")); // Rejected
    }
  }, 1000);
});

// Consuming a Promise
promise
  .then((result) => {
    console.log(result); // "Data fetched!"
    return "Next value"; // Passes to next .then
  })
  .then((nextResult) => {
    console.log(nextResult); // "Next value"
  })
  .catch((error) => {
    console.error(error); // Handles any error in the chain
  })
  .finally(() => {
    console.log("Always runs"); // Cleanup
  });

// Practical example: wrapping callback in Promise
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(1000).then(() => console.log("1 second passed"));

// Fetch API returns a Promise
fetch("https://api.example.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Also returns a Promise!
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch failed:", error);
  });

// Chaining Promises (solving callback hell)
fetchUserData(1)
  .then((user) => fetchUserPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => fetchReplies(comments[0].id))
  .then((replies) => console.log(replies))
  .catch((error) => console.error(error));

// Promise static methods

// Promise.all - wait for ALL promises (fails fast on first rejection)
const promises = [
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments"),
];

Promise.all(promises)
  .then((responses) => {
    console.log("All fetched:", responses);
  })
  .catch((error) => {
    console.error("One failed:", error);
  });

// Promise.allSettled - wait for ALL, get all results (no fail-fast)
Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failed:", result.reason);
    }
  });
});

// Promise.race - first to settle wins
Promise.race([
  fetch("/api/fast"),
  fetch("/api/slow"),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), 5000),
  ),
])
  .then((first) => console.log("Winner:", first))
  .catch((error) => console.error(error));

// Promise.any - first to FULFILL wins (ignores rejections)
Promise.any([
  fetch("/api/server1"),
  fetch("/api/server2"),
  fetch("/api/server3"),
])
  .then((first) => console.log("First success:", first))
  .catch((error) => console.error("All failed:", error));
```

**Day 4-5: Async/Await**

```javascript
// Async/await is syntactic sugar over Promises
// Makes async code look synchronous

// Async function always returns a Promise
async function getData() {
  return "Hello"; // Wrapped in Promise.resolve()
}

getData().then(console.log); // "Hello"

// Await pauses execution until Promise resolves
async function fetchUser() {
  const response = await fetch("/api/user"); // Waits here
  const data = await response.json(); // Then waits here
  return data;
}

// Error handling with try/catch
async function fetchUserSafe() {
  try {
    const response = await fetch("/api/user");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error; // Re-throw or return default value
  }
}

// Sequential vs Parallel

// Sequential (slow - each waits for previous)
async function sequential() {
  const user = await fetchUser(); // Wait
  const posts = await fetchPosts(user.id); // Then wait
  const comments = await fetchComments(posts[0].id); // Then wait
  return { user, posts, comments };
}

// Parallel (fast - all at once)
async function parallel() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
  ]);
  return { users, posts, comments };
}

// Start parallel, await later
async function parallelBetter() {
  // Start both immediately
  const usersPromise = fetchUsers();
  const postsPromise = fetchPosts();

  // Do other stuff...

  // Now wait for both
  const users = await usersPromise;
  const posts = await postsPromise;

  return { users, posts };
}

// Async in loops - be careful!

// WRONG - sequential (slow)
async function processSequential(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item); // Waits each time
    results.push(result);
  }
  return results;
}

// RIGHT - parallel (fast)
async function processParallel(items) {
  const results = await Promise.all(items.map((item) => processItem(item)));
  return results;
}

// Sometimes sequential is correct (rate limiting, dependencies)
async function processSequentialCorrect(items) {
  const results = [];
  for (const item of items) {
    // Each iteration depends on previous
    const result = await processWithPreviousResult(item, results);
    results.push(result);
  }
  return results;
}

// Async IIFE
(async () => {
  const data = await fetchData();
  console.log(data);
})();

// Top-level await (in modules)
// const data = await fetchData();  // Works in ES modules
```

**Day 6: Modules**

```javascript
// ES Modules (ESM) - the modern standard

// Exporting

// Named exports (multiple per file)
// math.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// Or export at the end
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
export { multiply, divide };

// Default export (one per file)
// User.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// Mixed exports
export default function main() {}
export const helper = () => {};

// Importing

// Named imports (must match export names)
import { add, subtract } from './math.js';
import { add as addition } from './math.js';  // Rename
import * as math from './math.js';  // Import all as namespace
math.add(1, 2);
math.PI;

// Default import (can use any name)
import User from './User.js';
import MyUser from './User.js';  // Same thing

// Mixed
import User, { helper } from './User.js';

// Side-effect import (just runs the module)
import './analytics.js';

// Dynamic import (code splitting, lazy loading)
async function loadModule() {
    const module = await import('./heavy-module.js');
    module.doSomething();
}

// Conditional import
if (condition) {
    const { feature } = await import('./feature.js');
    feature();
}

// Re-exporting
// index.js (barrel file)
export { add, subtract } from './math.js';
export { default as User } from './User.js';
export * from './utils.js';  // Re-export everything
```

**Day 7: Error Handling**

```javascript
// Types of errors
// SyntaxError - code can't be parsed
// ReferenceError - variable doesn't exist
// TypeError - wrong type operation
// RangeError - value out of range

// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(`${resource} not found`);
    this.name = "NotFoundError";
    this.resource = resource;
  }
}

// Using custom errors
function findUser(id) {
  const user = database.find((u) => u.id === id);
  if (!user) {
    throw new NotFoundError("User");
  }
  return user;
}

// Try/catch/finally
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation failed:", error.message);
  } else if (error instanceof NotFoundError) {
    console.error("Not found:", error.resource);
  } else {
    console.error("Unknown error:", error);
    throw error; // Re-throw unexpected errors
  }
} finally {
  // Always runs (cleanup)
  cleanup();
}

// Error handling in async code
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request cancelled");
    } else {
      console.error("Fetch failed:", error);
    }
    throw error; // Re-throw for caller to handle
  }
}

// Catching unhandled Promise rejections
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled rejection:", event.reason);
  // Log to error tracking service
});

// Catching all errors
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
  // Log to error tracking service
});
```

**Week 9: DOM & Browser APIs**

**Day 1-2: DOM Selection & Traversal**

```javascript
// The DOM (Document Object Model) is a tree representation of your HTML
// JavaScript can read and modify it

// Selecting elements

// By ID (returns single element or null)
const header = document.getElementById("header");

// By CSS selector (returns first match or null)
const firstButton = document.querySelector(".btn");
const submitBtn = document.querySelector('button[type="submit"]');
const nav = document.querySelector("nav > ul");

// All matches (returns NodeList)
const allButtons = document.querySelectorAll(".btn");
const allLinks = document.querySelectorAll('a[href^="https"]');

// NodeList is array-like but not an array
// Convert to array if needed:
const buttonsArray = Array.from(allButtons);
const buttonsArray2 = [...allButtons];

// Loop over NodeList
allButtons.forEach((btn) => {
  console.log(btn.textContent);
});

// Older methods (still work, but querySelector is preferred)
const byClass = document.getElementsByClassName("btn"); // HTMLCollection
const byTag = document.getElementsByTagName("p"); // HTMLCollection
// HTMLCollection is live (updates when DOM changes)
// NodeList from querySelectorAll is static

// Traversing the DOM

const element = document.querySelector(".item");

// Parent
element.parentNode; // Direct parent
element.parentElement; // Direct parent (element only)
element.closest(".container"); // Nearest ancestor matching selector

// Children
element.children; // HTMLCollection of child elements
element.childNodes; // NodeList including text nodes
element.firstChild; // First child (including text)
element.firstElementChild; // First child element
element.lastChild; // Last child (including text)
element.lastElementChild; // Last child element

// Siblings
element.previousSibling; // Previous (including text)
element.previousElementSibling; // Previous element
element.nextSibling; // Next (including text)
element.nextElementSibling; // Next element

// Checking relationships
parent.contains(child); // Is child inside parent?
element.matches(".active"); // Does element match selector?
```

**Day 3: DOM Manipulation**

```javascript
// Reading and modifying content

const element = document.querySelector(".item");

// Text content (just text, no HTML)
element.textContent; // Get text
element.textContent = "New text"; // Set text (escapes HTML)

// HTML content (includes HTML tags)
element.innerHTML; // Get HTML
element.innerHTML = "<strong>Bold</strong>"; // Set HTML
// WARNING: innerHTML with user input = XSS vulnerability!
element.innerHTML = userInput; // DANGEROUS!
element.textContent = userInput; // SAFE (escapes HTML)

// Outer HTML (includes the element itself)
element.outerHTML;
element.outerHTML = "<div>Replaced!</div>";

// Attributes
element.getAttribute("href");
element.setAttribute("href", "https://example.com");
element.removeAttribute("disabled");
element.hasAttribute("data-id");

// Data attributes
// HTML: <div data-user-id="123" data-active="true">
element.dataset.userId; // "123"
element.dataset.active; // "true"
element.dataset.newAttr = "value"; // Sets data-new-attr

// Classes
element.className; // Get/set class string
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.toggle("active", condition); // Force add/remove
element.classList.contains("active"); // Returns boolean
element.classList.replace("old", "new");

// Styles
element.style.color = "red";
element.style.backgroundColor = "blue"; // camelCase!
element.style.cssText = "color: red; background: blue;";

// Get computed styles (actual rendered styles)
const styles = getComputedStyle(element);
styles.color; // "rgb(255, 0, 0)"

// Creating elements
const div = document.createElement("div");
div.className = "card";
div.textContent = "Hello";

const link = document.createElement("a");
link.href = "https://example.com";
link.textContent = "Click me";

// Adding elements to DOM
parent.appendChild(child); // Add as last child
parent.prepend(child); // Add as first child
parent.append(child1, child2); // Add multiple at end
parent.insertBefore(newNode, referenceNode);
element.before(newElement); // Insert before
element.after(newElement); // Insert after

// Safer HTML insertion
element.insertAdjacentHTML("beforebegin", "<p>Before</p>"); // Before element
element.insertAdjacentHTML("afterbegin", "<p>Start</p>"); // First child
element.insertAdjacentHTML("beforeend", "<p>End</p>"); // Last child
element.insertAdjacentHTML("afterend", "<p>After</p>"); // After element

// Removing elements
element.remove(); // Remove from DOM
parent.removeChild(child); // Old way

// Cloning
const clone = element.cloneNode(false); // Shallow (just element)
const deepClone = element.cloneNode(true); // Deep (with children)

// Replacing
parent.replaceChild(newChild, oldChild);
oldElement.replaceWith(newElement);
```

**Day 4-5: Events**

```javascript
// Adding event listeners
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log("Clicked!", event);
});

// Arrow function (shorter, but 'this' behaves differently)
button.addEventListener("click", (e) => {
  console.log("Clicked!", e.target);
});

// Named function (can be removed later)
function handleClick(event) {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// The event object
button.addEventListener("click", (event) => {
  event.target; // Element that triggered event
  event.currentTarget; // Element listener is attached to
  event.type; // "click"
  event.timeStamp; // When it happened

  // For mouse events
  event.clientX; // X position relative to viewport
  event.clientY; // Y position relative to viewport
  event.pageX; // X position relative to document
  event.pageY; // Y position relative to document
  event.button; // Which mouse button (0=left, 1=middle, 2=right)

  // For keyboard events
  event.key; // The key pressed ("Enter", "a", "Escape")
  event.code; // Physical key ("Enter", "KeyA", "Escape")
  event.ctrlKey; // Was Ctrl held?
  event.shiftKey; // Was Shift held?
  event.altKey; // Was Alt held?
  event.metaKey; // Was Cmd/Win held?

  // Methods
  event.preventDefault(); // Prevent default action
  event.stopPropagation(); // Stop bubbling
});

// Common events
// Mouse: click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave
// Keyboard: keydown, keyup, keypress (deprecated)
// Form: submit, change, input, focus, blur
// Window: load, DOMContentLoaded, resize, scroll
// Touch: touchstart, touchend, touchmove

// Event bubbling and capturing
/*
When you click a button inside a div inside body:
1. Capturing phase: window → document → body → div → button (down)
2. Target phase: button
3. Bubbling phase: button → div → body → document → window (up)
*/

// By default, listeners run in bubbling phase
parent.addEventListener("click", () => console.log("Parent"));
child.addEventListener("click", () => console.log("Child"));
// Click on child: "Child" then "Parent" (bubbles up)

// Capture phase (third argument true)
parent.addEventListener("click", () => console.log("Parent"), true);
// Click on child: "Parent" (capture) then "Child" (bubble)

// Stop propagation
child.addEventListener("click", (e) => {
  e.stopPropagation(); // Parent listener won't run
  console.log("Child only");
});

// Prevent default behavior
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault(); // Don't navigate
  console.log("Link clicked but not followed");
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Don't submit
  // Handle form with JavaScript instead
});

// EVENT DELEGATION (very important pattern!)
// Instead of attaching listeners to many elements,
// attach one listener to a parent

// BAD: listener on each button
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

// GOOD: one listener on parent
document.querySelector(".button-container").addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    handleClick(e);
  }
});

// Benefits of delegation:
// - Works for dynamically added elements
// - Uses less memory
// - Easier to manage

// Practical example: todo list
const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", (e) => {
  // Delete button clicked
  if (e.target.matches(".delete-btn")) {
    const todoItem = e.target.closest(".todo-item");
    todoItem.remove();
  }

  // Checkbox clicked
  if (e.target.matches(".todo-checkbox")) {
    const todoItem = e.target.closest(".todo-item");
    todoItem.classList.toggle("completed");
  }
});

// Once option (listener runs once then removes itself)
button.addEventListener("click", handleClick, { once: true });

// Passive option (for scroll performance)
window.addEventListener("scroll", handleScroll, { passive: true });
```

**Day 6: Forms**

```javascript
// Accessing form elements
const form = document.querySelector("form");

// By name attribute
form.elements.username; // Input with name="username"
form.elements["email"]; // Input with name="email"

// Getting values
const input = document.querySelector("input");
input.value; // Current value
input.defaultValue; // Original value

// Checkboxes and radios
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.checked; // true or false

// Select dropdowns
const select = document.querySelector("select");
select.value; // Selected option's value
select.selectedIndex; // Index of selected option
select.options; // All options
select.options[select.selectedIndex].text; // Selected option's text

// Multiple select
const multiSelect = document.querySelector("select[multiple]");
const selected = Array.from(multiSelect.selectedOptions).map((o) => o.value);

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get all form data
  const formData = new FormData(form);

  // Access values
  const username = formData.get("username");
  const email = formData.get("email");

  // Convert to object
  const data = Object.fromEntries(formData);

  // Or iterate
  for (const [key, value] of formData) {
    console.log(key, value);
  }

  // Send to server
  fetch("/api/submit", {
    method: "POST",
    body: formData, // FormData can be sent directly
  });

  // Or send as JSON
  fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
});

// Input validation
const emailInput = document.querySelector('input[type="email"]');

emailInput.addEventListener("input", (e) => {
  if (emailInput.validity.valid) {
    emailInput.classList.remove("error");
  } else {
    emailInput.classList.add("error");
  }
});

// Validity API
input.validity.valid; // Is valid?
input.validity.valueMissing; // Required but empty?
input.validity.typeMismatch; // Wrong type (email, url)?
input.validity.patternMismatch; // Doesn't match pattern?
input.validity.tooShort; // Shorter than minlength?
input.validity.tooLong; // Longer than maxlength?
input.validity.rangeUnderflow; // Less than min?
input.validity.rangeOverflow; // Greater than max?

// Custom validation
input.setCustomValidity("Custom error message");
input.setCustomValidity(""); // Clear custom error

// Check validity
form.checkValidity(); // Returns boolean
form.reportValidity(); // Shows validation UI
```

**Day 7: Browser APIs**

```javascript
// Local Storage (persists across sessions)
localStorage.setItem("username", "Rhythm");
const username = localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear(); // Remove all

// Store objects (must stringify)
const user = { name: "Rhythm", age: 21 };
localStorage.setItem("user", JSON.stringify(user));
const stored = JSON.parse(localStorage.getItem("user"));

// Session Storage (cleared when tab closes)
sessionStorage.setItem("tempData", "value");
sessionStorage.getItem("tempData");

// Fetch API
async function fetchData() {
  // GET request
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  // POST request
  const postResponse = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token123",
    },
    body: JSON.stringify({ name: "Rhythm", email: "r@r.com" }),
  });

  // Check if successful
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return data;
}

// Response methods
response.json(); // Parse as JSON
response.text(); // Parse as text
response.blob(); // Parse as binary
response.formData(); // Parse as FormData

// Abort fetch
const controller = new AbortController();

fetch(url, { signal: controller.signal })
  .then((response) => response.json())
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch cancelled");
    }
  });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);

// URL API
const url = new URL("https://example.com/path?name=value");
url.searchParams.get("name"); // "value"
url.searchParams.set("name", "new");
url.searchParams.append("other", "value");
url.toString(); // Full URL string

// History API
history.pushState({ page: 1 }, "Title", "/page1"); // Add to history
history.replaceState({ page: 2 }, "Title", "/page2"); // Replace current
history.back(); // Go back
history.forward(); // Go forward
history.go(-2); // Go back 2 pages

window.addEventListener("popstate", (event) => {
  console.log("Navigation:", event.state);
});

// Location
window.location.href; // Full URL
window.location.origin; // Protocol + host
window.location.pathname; // Path
window.location.search; // Query string
window.location.hash; // Hash fragment
window.location.reload(); // Reload page
window.location.assign(url); // Navigate (adds to history)
window.location.replace(url); // Navigate (no history)

// Timers
const timeoutId = setTimeout(() => {
  console.log("Runs once after 1 second");
}, 1000);
clearTimeout(timeoutId); // Cancel

const intervalId = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);
clearInterval(intervalId); // Cancel

// requestAnimationFrame (for animations)
function animate() {
  // Update animation
  element.style.left = x + "px";

  if (!done) {
    requestAnimationFrame(animate);
  }
}
requestAnimationFrame(animate);

// IntersectionObserver (detect when element is visible)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing
      }
    });
  },
  {
    threshold: 0.5, // 50% visible
  },
);

document.querySelectorAll(".lazy-load").forEach((el) => {
  observer.observe(el);
});
```

**JavaScript Projects to Build:**

1. **Calculator** - Practice DOM manipulation
2. **Todo List with localStorage** - CRUD operations, persistence
3. **Quiz App** - State management, scoring
4. **Form Validator** - Validation, user feedback
5. **Weather App** - Fetch API, async/await
6. **GitHub User Search** - API integration, error handling

**Milestones:**

- [ ] Week 8: Explain the event loop to a rubber duck
- [ ] Week 8: Use async/await without looking up syntax
- [ ] Week 9: Build an app that fetches data from an API
- [ ] Week 9: Implement event delegation correctly

---

### Month 3-4: Advanced JavaScript & TypeScript

#### A2.1: Advanced JavaScript (Week 10-11)

> **Why this matters:** Prototypes, classes, design patterns — this is what separates juniors from mid-level developers. Interviewers love asking about these.

> **Time Investment:** ~3 hrs/day | **Total:** ~30 hours over 2 weeks

**Week 10: Prototypes & Classes**

```javascript
// PROTOTYPES - JavaScript's inheritance mechanism

// Every object has a prototype (hidden [[Prototype]] property)
const obj = { name: "Rhythm" };
Object.getPrototypeOf(obj); // Object.prototype

// Prototype chain
// obj -> Object.prototype -> null

const arr = [1, 2, 3];
// arr -> Array.prototype -> Object.prototype -> null
// That's why arrays have .map, .filter, etc.

// Creating objects with prototypes
const personPrototype = {
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

const person = Object.create(personPrototype);
person.name = "Rhythm";
person.greet(); // "Hello, I'm Rhythm"

// Constructor functions (old way)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

const rhythm = new Person("Rhythm", 21);
rhythm.greet(); // "Hello, I'm Rhythm"
rhythm instanceof Person; // true

// CLASSES - syntactic sugar over prototypes

class Person {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method (on prototype)
  greet() {
    return `Hello, I'm ${this.name}`;
  }

  // Getter
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }

  // Setter
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }

  // Static method (on class, not instances)
  static createAnonymous() {
    return new Person("Anonymous", 0);
  }

  // Private field (starts with #)
  #privateField = "secret";

  // Private method
  #privateMethod() {
    return this.#privateField;
  }

  // Access private from public method
  getSecret() {
    return this.#privateMethod();
  }
}

const person = new Person("Rhythm", 21);
person.greet(); // "Hello, I'm Rhythm"
person.birthYear; // 2005 (getter)
person.birthYear = 2000; // Sets age to 26 (setter)
Person.createAnonymous(); // Static method

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call parent constructor
    this.grade = grade;
  }

  // Override parent method
  greet() {
    return `${super.greet()}, I'm in grade ${this.grade}`;
  }

  study() {
    return `${this.name} is studying`;
  }
}

const student = new Student("Rhythm", 21, 12);
student.greet(); // "Hello, I'm Rhythm, I'm in grade 12"
student.study(); // "Rhythm is studying"
student instanceof Student; // true
student instanceof Person; // true

// Class expressions
const MyClass = class {
  constructor(value) {
    this.value = value;
  }
};
```

**Week 11: The `this` Keyword & Patterns**

```javascript
// 'this' depends on HOW a function is called, not WHERE it's defined

// 1. Global context
console.log(this); // window (browser) or global (Node)

// 2. Object method
const obj = {
  name: "Rhythm",
  greet() {
    console.log(this.name); // 'Rhythm'
  },
};
obj.greet();

// 3. Function call
function standalone() {
  console.log(this); // window (non-strict) or undefined (strict)
}
standalone();

// 4. Constructor (new keyword)
function Person(name) {
  this.name = name; // 'this' is the new object
}
const p = new Person("Rhythm");

// 5. Explicit binding (call, apply, bind)
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const user = { name: "Rhythm" };

greet.call(user, "Hello"); // "Hello, Rhythm"
greet.apply(user, ["Hi"]); // "Hi, Rhythm"

const boundGreet = greet.bind(user);
boundGreet("Hey"); // "Hey, Rhythm"

// 6. Arrow functions - NO own 'this', inherits from surrounding scope
const obj2 = {
  name: "Rhythm",
  greet: () => {
    console.log(this.name); // undefined! Arrow inherits outer 'this'
  },
  greetLater() {
    setTimeout(() => {
      console.log(this.name); // 'Rhythm'! Arrow inherits from greetLater
    }, 1000);
  },
};

// Common gotcha
const obj3 = {
  name: "Rhythm",
  greet() {
    console.log(this.name);
  },
};

const greetFn = obj3.greet;
greetFn(); // undefined! 'this' is lost when method is extracted

// Fix with bind
const boundFn = obj3.greet.bind(obj3);
boundFn(); // 'Rhythm'

// DESIGN PATTERNS

// Module Pattern (encapsulation)
const Calculator = (function () {
  // Private
  let result = 0;

  // Public API
  return {
    add(x) {
      result += x;
      return this;
    },
    subtract(x) {
      result -= x;
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      return this;
    },
  };
})();

Calculator.add(5).add(3).subtract(2).getResult(); // 6

// Factory Pattern (create objects without 'new')
function createUser(name, role) {
  return {
    name,
    role,
    greet() {
      return `Hi, I'm ${this.name}`;
    },
  };
}

const user1 = createUser("Alice", "admin");
const user2 = createUser("Bob", "user");

// Observer Pattern (pub/sub)
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this;
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
    return this;
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
    return this;
  }
}

const emitter = new EventEmitter();
emitter.on("message", (data) => console.log("Received:", data));
emitter.emit("message", "Hello World");

// Singleton Pattern (single instance)
class Database {
  static instance = null;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
    this.connection = "connected";
  }

  query(sql) {
    return `Executing: ${sql}`;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (same instance)
```

**Resources:**

| Resource                        | Purpose            | Link                                       |
| ------------------------------- | ------------------ | ------------------------------------------ |
| JavaScript.info (Part 2-3)      | Advanced topics    | https://javascript.info/                   |
| You Don't Know JS (Book Series) | Deep understanding | https://github.com/getify/You-Dont-Know-JS |
| Patterns.dev                    | Design patterns    | https://www.patterns.dev/                  |

**Milestones:**

- [ ] Week 10: Explain the prototype chain without looking it up
- [ ] Week 11: Explain all 6 rules of 'this'
- [ ] Week 11: Implement the Observer pattern from scratch

---

#### A2.2: TypeScript (Week 12-14)

> **Why this matters:** TypeScript is no longer optional. 90%+ of serious React jobs require it. It catches bugs before they happen. Learn it now, not later.

> **Time Investment:** ~3 hrs/day | **Total:** ~45 hours over 3 weeks

**Week 12: TypeScript Basics**

```typescript
// WHY TYPESCRIPT?
// 1. Catch errors at compile time, not runtime
// 2. Better IDE support (autocomplete, refactoring)
// 3. Self-documenting code
// 4. Required for most React jobs

// BASIC TYPES

// Primitives
let name: string = "Rhythm";
let age: number = 21;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Type inference (TypeScript figures out the type)
let inferred = "Hello"; // TypeScript knows this is a string
// inferred = 123;  // Error! Can't assign number to string

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
let mixed: (string | number)[] = [1, "two", 3]; // Union type

// Alternative syntax
let nums: Array<number> = [1, 2, 3];

// Tuples (fixed-length arrays with specific types)
let tuple: [string, number] = ["hello", 42];
// tuple = [42, "hello"];  // Error! Wrong order

// Objects
let person: { name: string; age: number } = {
  name: "Rhythm",
  age: 21,
};

// Optional properties
let user: { name: string; email?: string } = {
  name: "Rhythm",
  // email is optional
};

// Any (escape hatch - avoid when possible)
let anything: any = "hello";
anything = 123; // No error, but defeats the purpose

// Unknown (safer than any)
let unknown: unknown = "hello";
// unknown.toUpperCase();  // Error! Must check type first
if (typeof unknown === "string") {
  unknown.toUpperCase(); // OK now
}

// FUNCTIONS

// Parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// Default parameters
function greetDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Void return (no return value)
function logMessage(message: string): void {
  console.log(message);
}

// Never return (throws or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}

// Function types
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;

// TYPE ALIASES

type ID = string | number;

type User = {
  id: ID;
  name: string;
  email: string;
  age?: number; // Optional
};

const user1: User = {
  id: 1,
  name: "Rhythm",
  email: "r@r.com",
};

// Union types
type Status = "pending" | "approved" | "rejected"; // Literal types
let status: Status = "pending";
// status = "other";  // Error!

type StringOrNumber = string | number;

// Intersection types
type Employee = User & {
  employeeId: string;
  department: string;
};

const employee: Employee = {
  id: 1,
  name: "Rhythm",
  email: "r@r.com",
  employeeId: "EMP001",
  department: "Engineering",
};
```

**Week 13: Intermediate TypeScript**

```typescript
// INTERFACES (similar to type aliases, but for objects)

interface User {
  id: number;
  name: string;
  email: string;
}

// Extending interfaces
interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// Implementing interfaces (with classes)
interface Printable {
  print(): void;
}

class Document implements Printable {
  print() {
    console.log("Printing...");
  }
}

// Interface vs Type Alias
// - Interfaces: better for objects, can be extended/merged
// - Type aliases: better for unions, primitives, functions

// Declaration merging (only interfaces)
interface User {
  age: number; // Adds to existing User interface
}

// GENERICS (write reusable, type-safe code)

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

identity<string>("hello"); // Returns string
identity<number>(42); // Returns number
identity("hello"); // Type inferred as string

// Generic with constraints
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getLength("hello"); // 5
getLength([1, 2, 3]); // 3
// getLength(123);    // Error! number doesn't have length

// Generic interface
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: Response<User> = {
  data: { id: 1, name: "Rhythm", email: "r@r.com", age: 21 },
  status: 200,
  message: "Success",
};

// Generic class
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>("hello");
const numberContainer = new Container(42); // Type inferred

// Multiple generic parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

pair<string, number>("hello", 42);

// Generic defaults
interface ApiResponse<T = unknown> {
  data: T;
  error?: string;
}

// TYPE NARROWING

function processValue(value: string | number) {
  // Type guard with typeof
  if (typeof value === "string") {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}

// instanceof type guard
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// 'in' operator type guard
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// Custom type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processUnknown(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows it's a string
  }
}

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}
```

**Week 14: Advanced TypeScript**

```typescript
// UTILITY TYPES (built-in type transformations)

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial<T> - all properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; password?: string; }

// Required<T> - all properties required
type RequiredUser = Required<PartialUser>;

// Readonly<T> - all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick<T, K> - select specific properties
type UserCredentials = Pick<User, "email" | "password">;
// { email: string; password: string; }

// Omit<T, K> - exclude specific properties
type PublicUser = Omit<User, "password">;
// { id: number; name: string; email: string; }

// Record<K, T> - create object type with key type and value type
type UserRoles = Record<string, "admin" | "user" | "guest">;
const roles: UserRoles = {
  rhythm: "admin",
  john: "user",
};

// Exclude<T, U> - remove types from union
type NotString = Exclude<string | number | boolean, string>;
// number | boolean

// Extract<T, U> - keep only matching types
type OnlyString = Extract<string | number | boolean, string>;
// string

// NonNullable<T> - remove null and undefined
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
// string

// ReturnType<T> - get return type of function
function getUser() {
  return { id: 1, name: "Rhythm" };
}
type UserReturn = ReturnType<typeof getUser>;
// { id: number; name: string; }

// Parameters<T> - get parameter types as tuple
type GetUserParams = Parameters<typeof getUser>;
// []

function createUser(name: string, age: number) {
  return { name, age };
}
type CreateUserParams = Parameters<typeof createUser>;
// [string, number]

// MAPPED TYPES

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;
// All properties can be their type or null

// Conditional types
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// Template literal types
type EventName = `on${Capitalize<string>}`;
// "onAnything", "onClick", etc.

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiEndpoint = `/${string}`;
type ApiRoute = `${HttpMethod} ${ApiEndpoint}`;
// "GET /users", "POST /users", etc.

// DECLARATION FILES (.d.ts)
// Type definitions for JavaScript libraries

// Example: types for a JS library
declare module "my-library" {
  export function doSomething(value: string): number;
  export interface Config {
    debug: boolean;
    timeout: number;
  }
}

// TYPE ASSERTIONS (tell TypeScript you know better)

// 'as' syntax (preferred)
const input = document.getElementById("input") as HTMLInputElement;
input.value = "Hello";

// Angle bracket syntax (doesn't work in JSX)
const input2 = <HTMLInputElement>document.getElementById("input");

// Non-null assertion (careful!)
const element = document.getElementById("exists")!; // ! asserts not null

// Double assertion (escape hatch, avoid)
const value = "hello" as unknown as number; // Bad practice

// TYPE INFERENCE BEST PRACTICES

// Let TypeScript infer when obvious
const name = "Rhythm"; // string inferred
const numbers = [1, 2, 3]; // number[] inferred

// Annotate function parameters
function greet(name: string) {
  // Parameter annotated
  return `Hello, ${name}`; // Return type inferred
}

// Annotate when TypeScript can't infer
const parse = (json: string): User => {
  return JSON.parse(json); // JSON.parse returns 'any', so annotate return
};
```

**TypeScript with DOM:**

```typescript
// DOM element types
const button = document.querySelector("button"); // HTMLButtonElement | null
const input = document.querySelector("input"); // HTMLInputElement | null
const div = document.getElementById("myDiv"); // HTMLElement | null

// Type assertion when you know the element exists
const button2 = document.querySelector("button") as HTMLButtonElement;
const input2 = document.querySelector('input[type="text"]') as HTMLInputElement;

// Null check
const button3 = document.querySelector("button");
if (button3) {
  button3.addEventListener("click", () => {
    console.log("Clicked!");
  });
}

// Event types
button?.addEventListener("click", (event: MouseEvent) => {
  console.log(event.clientX, event.clientY);
});

input?.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

// Form handling
const form = document.querySelector("form");
form?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const name = formData.get("name") as string;
});
```

**Resources:**

| Resource                | Purpose       | Link                                               |
| ----------------------- | ------------- | -------------------------------------------------- |
| TypeScript Handbook     | Official docs | https://www.typescriptlang.org/docs/handbook/      |
| TypeScript Deep Dive    | Free book     | https://basarat.gitbook.io/typescript/             |
| Type Challenges         | Practice      | https://github.com/type-challenges/type-challenges |
| Total TypeScript (Free) | Tutorials     | https://www.totaltypescript.com/tutorials          |
| Exercism TypeScript     | Practice      | https://exercism.org/tracks/typescript             |
| Matt Pocock             | YouTube       | https://www.youtube.com/@maaborern                 |

**Milestones:**

- [ ] Week 12: Convert a JavaScript file to TypeScript with proper types
- [ ] Week 13: Write a generic function that works with any type
- [ ] Week 14: Complete 10+ Type Challenges (easy level)

---

### Month 4-5: React & Testing

#### A3.1: React Fundamentals (Week 15-17)

> **Why this matters:** React is the industry standard. Every other company uses it. But here's the thing — most React tutorials teach you the syntax without teaching you why things work. You need both.

> **Time Investment:** ~4 hrs/day | **Total:** ~60 hours over 3 weeks

**Week 15: Core Concepts**

**Day 1-2: Setup & JSX**

```tsx
// Create a new React project with TypeScript
// npm create vite@latest my-app -- --template react-ts

// JSX - JavaScript XML
// Looks like HTML, but it's JavaScript

// Basic component
function Welcome() {
    return <h1>Hello, World!</h1>;
}

// JSX expressions (use curly braces for JavaScript)
const name = "Rhythm";
const element = <h1>Hello, {name}!</h1>;

// Expressions can be any valid JavaScript
const element2 = <p>2 + 2 = {2 + 2}</p>;
const element3 = <p>Today is {new Date().toLocaleDateString()}</p>;

// JSX differences from HTML
// 1. className instead of class
<div className="container">Content</div>

// 2. htmlFor instead of for
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// 3. camelCase for attributes
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
<div tabIndex={0}>Focusable</div>

// 4. style is an object
<div style={{ color: 'red', fontSize: '16px' }}>Styled</div>

// 5. Self-closing tags must have /
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />

// 6. All elements must be wrapped in a single parent
// Use fragments to avoid extra div
function Component() {
    return (
        <>
            <h1>Title</h1>
            <p>Paragraph</p>
        </>
    );
}

// 7. Comments in JSX
function ComponentWithComments() {
    return (
        <div>
            {/* This is a comment */}
            <h1>Title</h1>
        </div>
    );
}
```

**Day 3-4: Components & Props**

```tsx
// Components are functions that return JSX
// They must start with a capital letter

// Function component (modern way)
function Greeting() {
    return <h1>Hello!</h1>;
}

// Arrow function component
const Greeting2 = () => {
    return <h1>Hello!</h1>;
};

// Using components
function App() {
    return (
        <div>
            <Greeting />
            <Greeting2 />
        </div>
    );
}

// PROPS - passing data to components

// Define props type
interface GreetingProps {
    name: string;
    age?: number;  // Optional
}

// Using props
function Greeting({ name, age }: GreetingProps) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            {age && <p>You are {age} years old</p>}
        </div>
    );
}

// Using the component
<Greeting name="Rhythm" age={21} />
<Greeting name="John" />  // age is optional

// Default props
interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
}

function Button({ text, variant = "primary" }: ButtonProps) {
    return <button className={`btn btn-${variant}`}>{text}</button>;
}

// Children prop
interface CardProps {
    title: string;
    children: React.ReactNode;  // Any valid React content
}

function Card({ title, children }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-body">{children}</div>
        </div>
    );
}

// Using children
<Card title="My Card">
    <p>This is the card content</p>
    <button>Click me</button>
</Card>

// Props are READ-ONLY
// Never modify props directly!
function BadComponent({ name }: { name: string }) {
    // name = "Changed";  // ERROR! Never do this
    return <h1>{name}</h1>;
}

// Destructuring props
interface UserProps {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
}

function UserProfile({ user }: UserProps) {
    const { name, email, avatar } = user;
    return (
        <div>
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// Spread props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function Input({ label, ...inputProps }: InputProps) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    );
}

// All input attributes are passed through
<Input label="Email" type="email" placeholder="Enter email" required />
```

**Day 5: Conditional Rendering**

```tsx
interface MessageProps {
  isLoggedIn: boolean;
  username?: string;
  notifications: number;
  error?: string | null;
}

function Dashboard({
  isLoggedIn,
  username,
  notifications,
  error,
}: MessageProps) {
  // 1. Logical AND (&&) - show if truthy
  // Short-circuit: if left side is falsy, return it; otherwise return right side
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
      {notifications > 0 && <span>You have {notifications} notifications</span>}
      {/* Be careful with 0! */}
      {notifications && <span>Notifications</span>}{" "}
      {/* Shows "0" if notifications is 0 */}
      {notifications > 0 && <span>Notifications</span>} {/* Correct! */}
    </div>
  );
}

// 2. Ternary operator - either/or
function Greeting({ isLoggedIn, username }: MessageProps) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome, {username}!</h1> : <h1>Please log in</h1>}
    </div>
  );
}

// 3. Early return
function UserGreeting({
  isLoggedIn,
  username,
}: {
  isLoggedIn: boolean;
  username: string;
}) {
  if (!isLoggedIn) {
    return <button>Log In</button>;
  }

  return <h1>Welcome, {username}!</h1>;
}

// 4. Variable assignment
function Notification({ type }: { type: "success" | "error" | "warning" }) {
  let icon;
  let color;

  switch (type) {
    case "success":
      icon = "✓";
      color = "green";
      break;
    case "error":
      icon = "✗";
      color = "red";
      break;
    case "warning":
      icon = "⚠";
      color = "orange";
      break;
  }

  return (
    <div style={{ color }}>
      <span>{icon}</span>
      {/* ... */}
    </div>
  );
}

// 5. Null for no output
function MaybeComponent({ show }: { show: boolean }) {
  if (!show) {
    return null; // Renders nothing
  }

  return <div>Visible content</div>;
}
```

**Day 6-7: Lists & Events**

```tsx
// RENDERING LISTS

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        // Key is REQUIRED for list items
        // Must be unique and stable (not index if list changes)
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Why keys matter:
// - React uses keys to identify which items changed
// - Without keys, React re-renders all items
// - Don't use index as key if items can be reordered/deleted

// Extracting list item component
function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li>
      <span>{todo.text}</span>
    </li>
  );
}

function TodoList2({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// EVENTS

function EventExamples() {
  // Click event
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event.clientX);
  };

  // Input change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", event.target.value);
  };

  // Form submit event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted!");
  };

  // Keyboard event
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter pressed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} onKeyDown={handleKeyDown} />
    </form>
  );
}

// Passing arguments to event handlers
function ItemList({ items }: { items: string[] }) {
  const handleDelete = (id: number) => {
    console.log("Deleting item:", id);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          {/* Arrow function to pass argument */}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// Passing event handlers as props
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function CustomButton({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

function Parent() {
  const handleClick = () => {
    console.log("Clicked from parent!");
  };

  return <CustomButton onClick={handleClick}>Click me</CustomButton>;
}
```

**Week 16: React Hooks**

**Day 1-2: useState**

```tsx
import { useState } from "react";

// Basic useState
function Counter() {
  const [count, setCount] = useState(0); // Initial value: 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// useState with TypeScript
function TypedCounter() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
}

// IMPORTANT: Updating state based on previous state
function Counter2() {
  const [count, setCount] = useState(0);

  // BAD: May not work correctly with multiple updates
  const incrementBad = () => {
    setCount(count + 1);
    setCount(count + 1); // Still uses old count value!
  };

  // GOOD: Use callback form for dependent updates
  const incrementGood = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1); // Works correctly!
  };

  return <button onClick={incrementGood}>Increment by 2</button>;
}

// State with objects
interface User {
  name: string;
  email: string;
  age: number;
}

function UserForm() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    age: 0,
  });

  // Updating object state - ALWAYS create new object
  const updateName = (name: string) => {
    // BAD: mutating state directly
    // user.name = name;  // Never do this!

    // GOOD: spread and override
    setUser((prev) => ({ ...prev, name }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={user.name} onChange={handleChange} />
      <input name="email" value={user.email} onChange={handleChange} />
    </form>
  );
}

// State with arrays
function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Add item
  const addTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [...prev, input]); // Spread + new item
      setInput("");
    }
  };

  // Remove item
  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  // Update item
  const updateTodo = (index: number, newText: string) => {
    setTodos((prev) => prev.map((todo, i) => (i === index ? newText : todo)));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Lazy initial state (for expensive computations)
function ExpensiveComponent() {
  // This function runs only once, on initial render
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation();
    return initialState;
  });
}
```

**Day 3-4: useEffect**

```tsx
import { useState, useEffect } from "react";

// useEffect runs AFTER render
// Used for side effects: data fetching, subscriptions, DOM manipulation

// Basic useEffect - runs after every render
function Logger({ count }: { count: number }) {
  useEffect(() => {
    console.log("Component rendered!");
    console.log("Count is:", count);
  }); // No dependency array = runs after every render

  return <div>{count}</div>;
}

// Empty dependency array - runs once after initial render
function OnMount() {
  useEffect(() => {
    console.log("Component mounted!");

    // Cleanup function (runs on unmount)
    return () => {
      console.log("Component unmounted!");
    };
  }, []); // Empty array = only on mount/unmount
}

// With dependencies - runs when dependencies change
function DataFetcher({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Re-run when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return <div>{user.name}</div>;
}

// Cleanup - VERY IMPORTANT
function EventListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remove listener when component unmounts
    // or before effect runs again
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

// Timer example with cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: clear interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

// Common mistakes and fixes

// 1. Missing dependency
function BadEffect({ userId }: { userId: number }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ESLint will warn: userId is used but not in dependencies
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, []); // BAD: userId should be in dependencies
}

// 2. Object/function dependencies
function ParentComponent() {
  // This object is recreated every render
  const config = { theme: "dark" };

  // This function is recreated every render
  const handleClick = () => console.log("clicked");

  return <ChildComponent config={config} onClick={handleClick} />;
}

// 3. Infinite loop
function InfiniteLoop() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // This creates infinite loop!
    setData([...data, "new item"]); // State change triggers re-render
  }, [data]); // data is dependency, but we're changing data
}
```

**Day 5: useRef & useContext**

```tsx
import { useRef, useContext, createContext, useState } from "react";

// useRef - mutable value that persists across renders
// Does NOT trigger re-render when changed

// DOM reference
function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // Access DOM element
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Mutable value (like instance variable)
function Timer2() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current !== null) return; // Already running

    intervalRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

// Previous value
function PreviousValue({ value }: { value: number }) {
  const prevRef = useRef<number>();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current: {value}</p>
      <p>Previous: {prevRef.current}</p>
    </div>
  );
}

// CONTEXT - share data without prop drilling

// 1. Create context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. Create provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for consuming context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// 4. Use in components
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#333",
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

// 5. Wrap app with provider
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>My App</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}
```

**Day 6-7: useReducer & Custom Hooks**

```tsx
import { useReducer, useState, useEffect } from "react";

// useReducer - alternative to useState for complex state logic

// Define state and action types
interface State {
  count: number;
  error: string | null;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, error: null };
    case "decrement":
      if (state.count <= 0) {
        return { ...state, error: "Cannot go below 0" };
      }
      return { ...state, count: state.count - 1, error: null };
    case "reset":
      return { count: 0, error: null };
    case "set":
      return { ...state, count: action.payload, error: null };
    default:
      return state;
  }
}

function Counter3() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div>
      <p>Count: {state.count}</p>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}

// CUSTOM HOOKS - extract and reuse logic

// useLocalStorage hook
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
function App() {
  const [name, setName] = useLocalStorage("name", "");
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}

// useDebounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      // Only search after user stops typing
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);
}

// useFetch hook
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }: { userId: number }) {
  const { data: user, loading, error } = useFetch<User>(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return <div>{user.name}</div>;
}

// useOnClickOutside hook
function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Usage: close modal when clicking outside
function Modal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, onClose);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        Modal content
      </div>
    </div>
  );
}
```

**Resources:**

| Resource                    | Purpose              | Link                                             |
| --------------------------- | -------------------- | ------------------------------------------------ |
| React Docs                  | Official (excellent) | https://react.dev/                               |
| React TypeScript Cheatsheet | TS + React           | https://react-typescript-cheatsheet.netlify.app/ |
| Full Stack Open (Parts 1-2) | Comprehensive        | https://fullstackopen.com/en/                    |
| React Patterns              | Common patterns      | https://reactpatterns.com/                       |
| Bulletproof React           | Architecture         | https://github.com/alan2207/bulletproof-react    |
| Josh Comeau                 | Blog + Courses       | https://www.joshwcomeau.com/                     |

**Milestones:**

- [ ] Week 15: Build a component that renders a list from props
- [ ] Week 16: Build a counter with useState
- [ ] Week 16: Fetch data with useEffect and display loading/error states
- [ ] Week 17: Extract logic into a custom hook
- [ ] Week 17: Add routing to an app with protected routes

---

#### A3.1: React Fundamentals (Continued)

**Week 17: React Router & State Management**

**Day 1-3: React Router**

```tsx
// Install: npm install react-router-dom

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

// Basic setup
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// NavLink - adds active class automatically
function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

// useParams - access URL parameters
function UserProfile() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// useNavigate - programmatic navigation
function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login();
    if (success) {
      navigate("/dashboard"); // Navigate on success
      // navigate('/dashboard', { replace: true });  // Replace history
      // navigate(-1);  // Go back
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}

// useSearchParams - query string parameters
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const page = searchParams.get("page") || "1";

  const updateSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery, page: "1" });
  };

  return (
    <div>
      <input value={query} onChange={(e) => updateSearch(e.target.value)} />
      <p>
        Searching for: {query}, Page: {page}
      </p>
    </div>
  );
}

// useLocation - access location object
function CurrentPath() {
  const location = useLocation();

  return (
    <div>
      <p>Path: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

// Nested routes with Outlet
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="overview">Overview</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

function AppWithNested() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardOverview />} />
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Protected routes
interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth(); // Your auth hook
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to login, but save the attempted URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

// Usage
function AppWithProtection() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// After login, redirect back to attempted page
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/dashboard";

  const handleLogin = async () => {
    await login();
    navigate(from, { replace: true });
  };
}
```

**Day 4-5: State Management with Zustand**

```tsx
// Zustand is simpler than Redux, perfect for most apps
// Install: npm install zustand

import { create } from "zustand";
import { persist } from "zustand/middleware";

// Basic store
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Using the store
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Select specific state (prevents unnecessary re-renders)
function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  return <p>Count: {count}</p>;
}

// More complex store example
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  filteredTodos: () => Todo[];
}

const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  filter: "all",

  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  setFilter: (filter) => set({ filter }),

  // Computed value using get()
  filteredTodos: () => {
    const { todos, filter } = get();
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  },
}));

// Persist to localStorage
const usePersistedStore = create(
  persist<CounterStore>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "counter-storage", // localStorage key
    },
  ),
);

// Async actions
interface UserStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: (id: number) => Promise<void>;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/users/${id}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const user = await response.json();
      set({ user, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Unknown error",
        loading: false,
      });
    }
  },

  logout: () => set({ user: null }),
}));
```

**Day 6-7: Performance Optimization**

```tsx
import { memo, useMemo, useCallback, lazy, Suspense } from "react";

// React.memo - prevent re-renders if props haven't changed
interface ItemProps {
  item: { id: number; name: string };
  onDelete: (id: number) => void;
}

const Item = memo(function Item({ item, onDelete }: ItemProps) {
  console.log(`Rendering item ${item.id}`);
  return (
    <div>
      {item.name}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
});

// Custom comparison function
const ItemWithCustomMemo = memo(
  function Item({ item, onDelete }: ItemProps) {
    return <div>{item.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.item.name === nextProps.item.name
    );
  },
);

// useMemo - memoize expensive calculations
function ExpensiveList({ items, filter }: { items: Item[]; filter: string }) {
  // Only recalculate when items or filter changes
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [items, filter]);

  // Sort is expensive, only do when filtered items change
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    return [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredItems]);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// useCallback - memoize functions
function ParentComponent() {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState("");

  // Without useCallback, this is recreated every render
  // Child components with memo would still re-render
  const handleDelete = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []); // Empty deps = never changes

  const handleAdd = useCallback((name: string) => {
    setItems((prev) => [...prev, { id: Date.now(), name }]);
  }, []);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

// When to use useMemo/useCallback:
// 1. Expensive calculations
// 2. Referential equality for memo'd children
// 3. Dependencies for useEffect

// When NOT to use:
// 1. Simple calculations
// 2. Primitive values (they're already equal by value)
// 3. Everything "just in case" (adds overhead)

// Code splitting with lazy loading
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div>
      <button onClick={() => setShowHeavy(true)}>Load Heavy</button>

      {showHeavy && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

// Route-based code splitting
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

function AppWithLazyRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Virtualization for long lists (react-window)
// npm install react-window
import { FixedSizeList } from "react-window";

function VirtualList({ items }: { items: string[] }) {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => <div style={style}>{items[index]}</div>;

  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
```

**Milestones:**

- [ ] Week 17: Add routing to an app with protected routes
- [ ] Week 17: Implement global state with Zustand
- [ ] Week 17: Use memo, useMemo, useCallback appropriately

---

#### A3.2: Testing (Week 18-19)

> **Why this matters:** Untestable code is unemployable code. Companies care about tests. Plus, writing tests forces you to write better code. It's not optional.

> **Time Investment:** ~3 hrs/day | **Total:** ~30 hours over 2 weeks

**Week 18: Unit & Integration Testing**

**Day 1-2: Testing Fundamentals**

```typescript
// Testing Philosophy:
// 1. Test behavior, not implementation
// 2. Write tests that give confidence
// 3. If it can break in production, test it

// The Testing Trophy (Kent C. Dodds):
// - Static Analysis (TypeScript, ESLint) - catches typos
// - Unit Tests - pure functions, utilities
// - Integration Tests - components working together (MOST tests here)
// - E2E Tests - critical user journeys only

// Test structure: Arrange, Act, Assert
test("adds two numbers", () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(5);
});

// Describe blocks for organization
describe("Calculator", () => {
  describe("add", () => {
    test("adds positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("divide", () => {
    test("divides numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("throws on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });
});
```

**Day 3-4: Jest Fundamentals**

```typescript
// Jest is the most popular testing framework
// Setup: npm install -D jest @types/jest ts-jest

// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
};

// MATCHERS

// Equality
expect(value).toBe(5); // Strict equality (===)
expect(object).toEqual({ a: 1 }); // Deep equality
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
expect(value).toBeTruthy();
expect(value).toBeFalsy();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3, 5); // For floating point

// Strings
expect(string).toMatch(/regex/);
expect(string).toContain("substring");

// Arrays
expect(array).toContain(item);
expect(array).toContainEqual({ id: 1 }); // Deep equality
expect(array).toHaveLength(3);

// Objects
expect(object).toHaveProperty("name");
expect(object).toHaveProperty("user.name", "Rhythm");
expect(object).toMatchObject({ name: "Rhythm" }); // Partial match

// Exceptions
expect(() => badFunction()).toThrow();
expect(() => badFunction()).toThrow("Error message");
expect(() => badFunction()).toThrow(CustomError);

// Negation
expect(value).not.toBe(5);
expect(array).not.toContain(item);

// MOCKING

// Mock functions
const mockFn = jest.fn();
mockFn("arg1", "arg2");

expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(1);
expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");

// Mock return values
const mockFn2 = jest.fn().mockReturnValue(10).mockReturnValueOnce(5); // First call returns 5

mockFn2(); // 5
mockFn2(); // 10
mockFn2(); // 10

// Mock implementation
const mockFn3 = jest.fn((x: number) => x * 2);

// Mock modules
jest.mock("./api", () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 1, name: "Test" }),
}));

// Spies (mock existing methods)
const consoleSpy = jest.spyOn(console, "log").mockImplementation();
// ... test ...
expect(consoleSpy).toHaveBeenCalledWith("expected message");
consoleSpy.mockRestore();

// ASYNC TESTING

// Promises
test("fetches user", async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe("Rhythm");
});

// Resolved/rejected values
test("resolves to user", async () => {
  await expect(fetchUser(1)).resolves.toEqual({ id: 1, name: "Rhythm" });
});

test("rejects with error", async () => {
  await expect(fetchUser(-1)).rejects.toThrow("User not found");
});

// SETUP AND TEARDOWN

describe("Database tests", () => {
  beforeAll(async () => {
    // Run once before all tests
    await connectDatabase();
  });

  afterAll(async () => {
    // Run once after all tests
    await disconnectDatabase();
  });

  beforeEach(async () => {
    // Run before each test
    await clearDatabase();
  });

  afterEach(() => {
    // Run after each test
    jest.clearAllMocks();
  });

  test("creates user", async () => {
    // ...
  });
});
```

**Day 5-7: React Testing Library**

```tsx
// React Testing Library philosophy:
// "The more your tests resemble the way your software is used,
// the more confidence they can give you."

// Setup: npm install -D @testing-library/react @testing-library/jest-dom

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Basic rendering
test("renders welcome message", () => {
  render(<Welcome name="Rhythm" />);

  // Find element by text
  expect(screen.getByText("Hello, Rhythm!")).toBeInTheDocument();
});

// QUERIES (in order of preference)
// 1. getByRole - most accessible
// 2. getByLabelText - for form fields
// 3. getByPlaceholderText - if no label
// 4. getByText - for non-interactive elements
// 5. getByTestId - last resort

test("queries example", () => {
  render(
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter email" />
      <button type="submit">Submit</button>
    </form>,
  );

  // By role (preferred)
  screen.getByRole("button", { name: /submit/i });
  screen.getByRole("textbox", { name: /email/i });

  // By label text
  screen.getByLabelText(/email/i);

  // By placeholder
  screen.getByPlaceholderText(/enter email/i);

  // By text
  screen.getByText(/submit/i);
});

// Query variants:
// getBy - throws if not found or multiple
// queryBy - returns null if not found (good for asserting absence)
// findBy - returns promise (for async)
// getAllBy, queryAllBy, findAllBy - for multiple elements

test("element not present", () => {
  render(<ComponentWithoutError />);

  // queryBy returns null instead of throwing
  expect(screen.queryByText("Error")).not.toBeInTheDocument();
});

test("element appears async", async () => {
  render(<AsyncComponent />);

  // findBy waits for element
  const element = await screen.findByText("Loaded");
  expect(element).toBeInTheDocument();
});

// USER EVENTS (prefer over fireEvent)
test("form submission", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(<LoginForm onSubmit={handleSubmit} />);

  // Type in inputs
  await user.type(screen.getByLabelText(/email/i), "test@example.com");
  await user.type(screen.getByLabelText(/password/i), "password123");

  // Click submit
  await user.click(screen.getByRole("button", { name: /submit/i }));

  // Assert
  expect(handleSubmit).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "password123",
  });
});

test("interaction examples", async () => {
  const user = userEvent.setup();

  // Click
  await user.click(element);

  // Double click
  await user.dblClick(element);

  // Type
  await user.type(input, "hello");

  // Clear and type
  await user.clear(input);
  await user.type(input, "new value");

  // Select option
  await user.selectOptions(select, "option-value");

  // Check/uncheck
  await user.click(checkbox);

  // Keyboard
  await user.keyboard("{Enter}");
  await user.keyboard("{Shift>}A{/Shift}"); // Shift+A

  // Tab
  await user.tab();
});

// TESTING ASYNC BEHAVIOR
test("loads data", async () => {
  // Mock the API
  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => ({ name: "Rhythm" }),
  } as Response);

  render(<UserProfile userId={1} />);

  // Initially shows loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText("Rhythm")).toBeInTheDocument();
  });

  // Loading should be gone
  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
});

// TESTING WITH CONTEXT
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <AuthProvider>{ui}</AuthProvider>
    </ThemeProvider>,
  );
};

test("uses theme from context", () => {
  renderWithProviders(<ThemedButton />);
  // ...
});

// TESTING CUSTOM HOOKS
import { renderHook, act } from "@testing-library/react";

test("useCounter hook", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

// SNAPSHOT TESTING (use sparingly)
test("matches snapshot", () => {
  const { container } = render(<Card title="Test" />);
  expect(container).toMatchSnapshot();
});

// Complete component test example
describe("TodoList", () => {
  const mockTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write tests", completed: true },
  ];

  test("renders todos", () => {
    render(
      <TodoList todos={mockTodos} onToggle={jest.fn()} onDelete={jest.fn()} />,
    );

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo on click", async () => {
    const user = userEvent.setup();
    const handleToggle = jest.fn();

    render(
      <TodoList
        todos={mockTodos}
        onToggle={handleToggle}
        onDelete={jest.fn()}
      />,
    );

    await user.click(screen.getByText("Learn React"));

    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  test("deletes todo on button click", async () => {
    const user = userEvent.setup();
    const handleDelete = jest.fn();

    render(
      <TodoList
        todos={mockTodos}
        onToggle={jest.fn()}
        onDelete={handleDelete}
      />,
    );

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    await user.click(deleteButtons[0]);

    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test("shows empty message when no todos", () => {
    render(<TodoList todos={[]} onToggle={jest.fn()} onDelete={jest.fn()} />);

    expect(screen.getByText(/no todos/i)).toBeInTheDocument();
  });
});
```

**Week 19: E2E Testing with Playwright**

```typescript
// Install: npm init playwright@latest

// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3000",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});

// e2e/login.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("successful login flow", async ({ page }) => {
    // Go to login page
    await page.goto("/login");

    // Fill in credentials
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "password123");

    // Submit form
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL("/dashboard");

    // Should show welcome message
    await expect(page.locator("h1")).toContainText("Welcome");
  });

  test("shows error on invalid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.fill('input[name="email"]', "wrong@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    // Should show error message
    await expect(page.locator(".error-message")).toBeVisible();
    await expect(page.locator(".error-message")).toContainText(
      "Invalid credentials",
    );

    // Should stay on login page
    await expect(page).toHaveURL("/login");
  });

  test("logout flow", async ({ page }) => {
    // Login first
    await page.goto("/login");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("/dashboard");

    // Logout
    await page.click('button:has-text("Logout")');

    // Should redirect to login
    await expect(page).toHaveURL("/login");
  });
});

test.describe("Todo App", () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto("/login");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("/dashboard");
  });

  test("creates a new todo", async ({ page }) => {
    await page.goto("/todos");

    // Add new todo
    await page.fill('input[placeholder="Add a todo"]', "Buy groceries");
    await page.click('button:has-text("Add")');

    // Should appear in list
    await expect(page.locator(".todo-item")).toContainText("Buy groceries");
  });

  test("completes a todo", async ({ page }) => {
    await page.goto("/todos");

    // Add a todo first
    await page.fill('input[placeholder="Add a todo"]', "Test todo");
    await page.click('button:has-text("Add")');

    // Click to complete
    await page.click('.todo-item:has-text("Test todo") input[type="checkbox"]');

    // Should be marked complete
    await expect(page.locator('.todo-item:has-text("Test todo")')).toHaveClass(
      /completed/,
    );
  });

  test("deletes a todo", async ({ page }) => {
    await page.goto("/todos");

    // Add a todo first
    await page.fill('input[placeholder="Add a todo"]', "To be deleted");
    await page.click('button:has-text("Add")');

    // Delete it
    await page.click('.todo-item:has-text("To be deleted") button.delete');

    // Should be gone
    await expect(
      page.locator('.todo-item:has-text("To be deleted")'),
    ).not.toBeVisible();
  });
});

// Page Object Model (for better organization)
// e2e/pages/login-page.ts
import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator(".error-message");
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Usage in test
import { LoginPage } from "./pages/login-page";

test("login with page object", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("test@example.com", "password123");
  await expect(page).toHaveURL("/dashboard");
});
```

**Resources:**

| Resource           | Purpose            | Link                                   |
| ------------------ | ------------------ | -------------------------------------- |
| Jest Docs          | Official           | https://jestjs.io/docs/getting-started |
| Testing Library    | Official           | https://testing-library.com/docs/      |
| Kent C. Dodds Blog | Testing philosophy | https://kentcdodds.com/blog            |
| Playwright Docs    | E2E                | https://playwright.dev/docs/intro      |

**Milestones:**

- [ ] Week 18: Write unit tests for a utility function
- [ ] Week 18: Write an integration test for a React component
- [ ] Week 19: Write an E2E test for login flow
- [ ] Week 19: Achieve 80% coverage on a small project

---

### Month 5-6: Styling & Build Tools

#### A4.1: Tailwind CSS (Week 20)

> **Why this matters:** Tailwind is the industry standard for rapid development. It's utility-first, which means you write less CSS and ship faster.

> **Time Investment:** ~3 hrs/day | **Total:** ~15 hours over 1 week

```tsx
// Setup with Vite:
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#3498db',
                secondary: '#2ecc71',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// BASIC USAGE

function Button() {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
        </button>
    );
}

// COMMON PATTERNS

// Flexbox
<div className="flex items-center justify-between gap-4">
    <div>Left</div>
    <div>Right</div>
</div>

// Grid
<div className="grid grid-cols-3 gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>

// Responsive (mobile-first)
<div className="w-full md:w-1/2 lg:w-1/3">
    {/* Full width on mobile, half on medium, third on large */}
</div>

// States
<button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700 disabled:opacity-50">
    Button
</button>

// Dark mode
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
    Supports dark mode
</div>

// CARD COMPONENT EXAMPLE
function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                <div className="text-gray-600">{children}</div>
            </div>
        </div>
    );
}

// FORM EXAMPLE
function LoginForm() {
    return (
        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="password"
                    id="password"
                />
            </div>
            <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                type="submit"
            >
                Sign In
            </button>
        </form>
    );
}

// NAVBAR EXAMPLE
function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">Logo</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600">
                            {/* Menu icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Using @apply for repeated patterns (in CSS file)
/*
@layer components {
    .btn {
        @apply py-2 px-4 font-bold rounded transition-colors;
    }
    .btn-primary {
        @apply bg-blue-500 text-white hover:bg-blue-600;
    }
    .btn-secondary {
        @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
    }
    .input {
        @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500;
    }
}
*/

// Then use in JSX:
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>

// CLASS MERGING with clsx or cn
// npm install clsx tailwind-merge

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Usage
interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
}

function Button({ variant = 'primary', size = 'md', className, children }: ButtonProps) {
    return (
        <button
            className={cn(
                'font-bold rounded transition-colors',
                {
                    'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
                    'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
                    'py-1 px-2 text-sm': size === 'sm',
                    'py-2 px-4': size === 'md',
                    'py-3 px-6 text-lg': size === 'lg',
                },
                className
            )}
        >
            {children}
        </button>
    );
}
```

**Resources:**

| Resource      | Purpose          | Link                          |
| ------------- | ---------------- | ----------------------------- |
| Tailwind Docs | Official         | https://tailwindcss.com/docs  |
| Tailwind UI   | Components       | https://tailwindui.com/       |
| Headless UI   | Unstyled + A11y  | https://headlessui.com/       |
| Radix UI      | Unstyled + A11y  | https://www.radix-ui.com/     |
| shadcn/ui     | Copy-paste comps | https://ui.shadcn.com/        |
| Tailwind Play | Online editor    | https://play.tailwindcss.com/ |

---

#### A4.2: Build Tools (Week 21)

```typescript
// VITE - Modern build tool (you're already using this)

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    // Path aliases
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },

    // Dev server
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            },
        },
    },

    // Build options
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                },
            },
        },
    },
});

// tsconfig.json for path aliases
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"],
            "@components/*": ["src/components/*"],
            "@hooks/*": ["src/hooks/*"]
        }
    }
}

// ENVIRONMENT VARIABLES

// .env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=MyApp

// .env.production
VITE_API_URL=https://api.myapp.com

// .env.local (not committed to git)
VITE_SECRET_KEY=abc123

// Usage in code
const apiUrl = import.meta.env.VITE_API_URL;
const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;

// PACKAGE.JSON SCRIPTS
{
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "preview": "vite preview",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "lint:fix": "eslint . --ext ts,tsx --fix",
        "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
        "test": "vitest",
        "test:coverage": "vitest --coverage",
        "test:ui": "vitest --ui",
        "e2e": "playwright test",
        "type-check": "tsc --noEmit"
    }
}

// ESLINT CONFIGURATION
// .eslintrc.cjs
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

// PRETTIER CONFIGURATION
// .prettierrc
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "printWidth": 100,
    "bracketSpacing": true,
    "arrowParens": "avoid"
}
```

**Milestones:**

- [ ] Week 20: Build a responsive navbar with Tailwind
- [ ] Week 20: Build a card component with dark mode support
- [ ] Week 21: Configure path aliases in Vite
- [ ] Week 21: Set up ESLint and Prettier

---

### Month 6-7: Backend Development

#### A5.1: Node.js Fundamentals (Week 22-23)

> **Why this matters:** You're about to become a full-stack developer. Node.js is JavaScript on the server. If you understood JavaScript well, this will feel like coming home.

> **Time Investment:** ~3-4 hrs/day | **Total:** ~40 hours over 2 weeks

**Week 22: Core Node.js**

```javascript
// What is Node.js?
// - JavaScript runtime built on Chrome's V8 engine
// - Non-blocking, event-driven I/O
// - NOT a framework, NOT a language

// When to use Node.js:
// - API servers
// - Real-time applications (chat, gaming)
// - Microservices
// - Build tools (Vite, Webpack are Node.js apps)

// When NOT to use:
// - CPU-intensive tasks (use Go, Rust, or worker threads)

// Running Node.js
// node app.js
// node --watch app.js  // Auto-restart on changes

// MODULES

// ES Modules (modern - use this)
// package.json: "type": "module"

// Exporting
// math.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export default function multiply(a, b) {
  return a * b;
}

// Importing
import multiply, { PI, add } from "./math.js";

// CommonJS (older, still common)
// Exporting
module.exports = { add, subtract };
// or
exports.add = add;

// Importing
const { add, subtract } = require("./math.js");

// BUILT-IN MODULES

// fs - File System
import { readFile, writeFile, mkdir, readdir, unlink } from "fs/promises";

// Read file
const content = await readFile("./data.txt", "utf-8");
console.log(content);

// Write file
await writeFile("./output.txt", "Hello World");

// Read JSON
const data = JSON.parse(await readFile("./data.json", "utf-8"));

// Write JSON
await writeFile("./data.json", JSON.stringify(data, null, 2));

// Create directory
await mkdir("./new-folder", { recursive: true });

// List directory
const files = await readdir("./");
console.log(files);

// Delete file
await unlink("./temp.txt");

// Check if exists
import { access } from "fs/promises";
try {
  await access("./file.txt");
  console.log("File exists");
} catch {
  console.log("File does not exist");
}

// path - Work with file paths
import path from "path";

path.join("folder", "subfolder", "file.txt"); // 'folder/subfolder/file.txt'
path.resolve("./relative/path"); // Absolute path
path.dirname("/path/to/file.txt"); // '/path/to'
path.basename("/path/to/file.txt"); // 'file.txt'
path.extname("/path/to/file.txt"); // '.txt'

// ALWAYS use path.join for cross-platform compatibility
const filePath = path.join(__dirname, "data", "file.txt");

// process - Environment and process info
console.log(process.cwd()); // Current working directory
console.log(process.env.NODE_ENV); // Environment variable
console.log(process.argv); // Command line arguments
process.exit(0); // Exit with code

// http - HTTP server (low-level)
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// events - Event emitter
import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("message", (data) => {
  console.log("Received:", data);
});

emitter.emit("message", "Hello World");
```

**Week 23: Express.js**

```typescript
// Express is the most popular Node.js web framework
// npm install express
// npm install -D @types/express

import express, { Request, Response, NextFunction } from "express";

const app = express();

// MIDDLEWARE - functions that process requests

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static("public")); // Serve static files

// Custom middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next(); // MUST call next() or request hangs
};

app.use(logger);

// Middleware for specific paths
app.use("/api", apiMiddleware);

// ROUTES

// GET - retrieve data
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/api/users", async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
});

// Route parameters
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// Query parameters: /api/users?page=1&limit=10
app.get("/api/users", (req: Request, res: Response) => {
  const { page = "1", limit = "10" } = req.query;
  // ...
});

// POST - create data
app.post("/api/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email required" });
  }

  const user = await createUser({ name, email });
  res.status(201).json(user);
});

// PUT - replace entire resource
app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = await updateUser(id, { name, email });
  res.json(user);
});

// PATCH - partial update
app.patch("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  const user = await partialUpdateUser(id, updates);
  res.json(user);
});

// DELETE
app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUser(id);
  res.status(204).send(); // No content
});

// ROUTERS - organize routes

// routes/users.ts
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  // GET /api/users
});

router.get("/:id", async (req, res) => {
  // GET /api/users/:id
});

router.post("/", async (req, res) => {
  // POST /api/users
});

export default router;

// app.ts
import userRouter from "./routes/users";
app.use("/api/users", userRouter);

// ERROR HANDLING

// Async error wrapper
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

app.get(
  "/api/data",
  asyncHandler(async (req: Request, res: Response) => {
    const data = await fetchData(); // If this throws, error is caught
    res.json(data);
  }),
);

// Error handling middleware (must be last, must have 4 parameters)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: "Internal Server Error" });
});

// Custom error class
class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

// 404 handler (before error handler)
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

#### A5.2: REST API Design & Validation (Week 24)

```typescript
// REST PRINCIPLES

// 1. Resources are nouns, not verbs
// Good: GET /users, POST /users, GET /users/123
// Bad: GET /getUsers, POST /createUser

// 2. HTTP methods have meaning
// GET    = Read (safe, idempotent)
// POST   = Create
// PUT    = Replace entirely (idempotent)
// PATCH  = Partial update
// DELETE = Remove (idempotent)

// 3. Use proper status codes

// STATUS CODES (memorize these)

// 2xx Success
// 200 OK - General success
// 201 Created - Resource created (POST)
// 204 No Content - Success, no body (DELETE)

// 4xx Client Error
// 400 Bad Request - Invalid syntax
// 401 Unauthorized - Not authenticated
// 403 Forbidden - Authenticated but not allowed
// 404 Not Found - Resource doesn't exist
// 409 Conflict - Duplicate resource
// 422 Unprocessable Entity - Validation failed

// 5xx Server Error
// 500 Internal Server Error - Something broke

// VALIDATION WITH ZOD
// npm install zod

import { z } from "zod";

// Define schemas
const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().int().min(0).max(150).optional(),
});

const updateUserSchema = createUserSchema.partial(); // All fields optional

// Type inference from schema
type CreateUserInput = z.infer<typeof createUserSchema>;

// Validation middleware
const validate = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json({
          error: "Validation failed",
          details: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      next(error);
    }
  };
};

// Usage
app.post("/api/users", validate(createUserSchema), async (req, res) => {
  // req.body is validated and typed
  const user = await createUser(req.body);
  res.status(201).json(user);
});

// Common Zod patterns
const productSchema = z.object({
  name: z.string().min(1).max(100),
  price: z.number().positive(),
  category: z.enum(["electronics", "clothing", "food"]),
  tags: z.array(z.string()).optional().default([]),
  metadata: z.record(z.string()).optional(), // Object with string values
  inStock: z.boolean().default(true),
});

// Query parameter validation
const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  sort: z.enum(["asc", "desc"]).optional(),
});

// API RESPONSE STRUCTURE

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Helper functions
const sendSuccess = <T>(res: Response, data: T, status = 200) => {
  res.status(status).json({ success: true, data });
};

const sendError = (res: Response, message: string, status = 400) => {
  res.status(status).json({ success: false, error: message });
};

const sendPaginated = <T>(
  res: Response,
  data: T[],
  page: number,
  limit: number,
  total: number,
) => {
  res.json({
    success: true,
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};
```

---

#### A5.3: Authentication (Week 25)

```typescript
// npm install bcrypt jsonwebtoken
// npm install -D @types/bcrypt @types/jsonwebtoken

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// NEVER store plain passwords
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = "7d";

// Password hashing
async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// JWT functions
interface TokenPayload {
  userId: string;
  email: string;
}

function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}

// Registration endpoint
app.post("/api/auth/register", validate(registerSchema), async (req, res) => {
  const { email, password, name } = req.body;

  // Check if user exists
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ error: "Email already registered" });
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await db.user.create({
    data: { email, password: hashedPassword, name },
  });

  // Generate token
  const token = generateToken({ userId: user.id, email: user.email });

  res.status(201).json({
    user: { id: user.id, email: user.email, name: user.name },
    token,
  });
});

// Login endpoint
app.post("/api/auth/login", validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Check password
  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Generate token
  const token = generateToken({ userId: user.id, email: user.email });

  res.json({
    user: { id: user.id, email: user.email, name: user.name },
    token,
  });
});

// Auth middleware
interface AuthRequest extends Request {
  user?: TokenPayload;
}

const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Protected route
app.get("/api/profile", authenticate, async (req: AuthRequest, res) => {
  const user = await db.user.findUnique({
    where: { id: req.user!.userId },
    select: { id: true, email: true, name: true, createdAt: true },
  });

  res.json(user);
});

// Refresh token
app.post("/api/auth/refresh", authenticate, (req: AuthRequest, res) => {
  const newToken = generateToken({
    userId: req.user!.userId,
    email: req.user!.email,
  });

  res.json({ token: newToken });
});
```

---

#### A5.4: Databases with Prisma (Week 26-28)

```typescript
// Prisma is the best ORM for TypeScript
// npm install prisma @prisma/client
// npx prisma init

// prisma/schema.prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"  // or "mysql", "sqlite", "mongodb"
    url      = env("DATABASE_URL")
}

model User {
    id        String   @id @default(cuid())
    email     String   @unique
    password  String
    name      String
    avatar    String?
    role      Role     @default(USER)
    posts     Post[]
    comments  Comment[]
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model Post {
    id          String    @id @default(cuid())
    title       String
    content     String?
    published   Boolean   @default(false)
    author      User      @relation(fields: [authorId], references: [id])
    authorId    String
    categories  Category[]
    comments    Comment[]
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt

    @@index([authorId])
}

model Category {
    id    String @id @default(cuid())
    name  String @unique
    posts Post[]
}

model Comment {
    id        String   @id @default(cuid())
    content   String
    author    User     @relation(fields: [authorId], references: [id])
    authorId  String
    post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
    postId    String
    createdAt DateTime @default(now())
}

enum Role {
    USER
    ADMIN
}

// Generate client: npx prisma generate
// Migrate: npx prisma migrate dev --name init
// Studio: npx prisma studio

// db.ts - Prisma client singleton
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

// CRUD OPERATIONS

// Create
const user = await db.user.create({
    data: {
        email: 'rhythm@example.com',
        password: hashedPassword,
        name: 'Rhythm',
    },
});

// Create with relation
const post = await db.post.create({
    data: {
        title: 'My First Post',
        content: 'Hello World',
        author: { connect: { id: userId } },
        categories: {
            connectOrCreate: [
                { where: { name: 'Tech' }, create: { name: 'Tech' } }
            ]
        }
    },
    include: { author: true, categories: true }
});

// Read
const user = await db.user.findUnique({
    where: { id: userId },
});

const user = await db.user.findUnique({
    where: { email: 'rhythm@example.com' },
    select: { id: true, name: true, email: true },  // Only these fields
});

// Find with relations
const userWithPosts = await db.user.findUnique({
    where: { id: userId },
    include: {
        posts: {
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            take: 10,
        }
    }
});

// Find many
const users = await db.user.findMany({
    where: {
        role: 'USER',
        createdAt: { gte: new Date('2024-01-01') }
    },
    orderBy: { createdAt: 'desc' },
    skip: 0,
    take: 10,
});

// Complex queries
const posts = await db.post.findMany({
    where: {
        OR: [
            { title: { contains: 'prisma', mode: 'insensitive' } },
            { content: { contains: 'prisma', mode: 'insensitive' } },
        ],
        published: true,
        author: { role: 'ADMIN' }
    }
});

// Update
const updatedUser = await db.user.update({
    where: { id: userId },
    data: { name: 'New Name' },
});

// Upsert (update or create)
const user = await db.user.upsert({
    where: { email: 'rhythm@example.com' },
    update: { name: 'Updated Name' },
    create: { email: 'rhythm@example.com', name: 'New User', password: hash },
});

// Delete
await db.user.delete({ where: { id: userId } });

// Delete many
await db.post.deleteMany({ where: { authorId: userId } });

// Transactions
const [post, user] = await db.$transaction([
    db.post.create({ data: postData }),
    db.user.update({ where: { id: userId }, data: { postCount: { increment: 1 } } })
]);

// Interactive transaction
const result = await db.$transaction(async (tx) => {
    const user = await tx.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const post = await tx.post.create({
        data: { ...postData, authorId: user.id }
    });

    return post;
});

// Pagination
async function getPaginatedPosts(page: number, limit: number) {
    const [posts, total] = await Promise.all([
        db.post.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'desc' }
        }),
        db.post.count()
    ]);

    return {
        posts,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
}
```

**Resources:**

| Resource                 | Purpose          | Link                                              |
| ------------------------ | ---------------- | ------------------------------------------------- |
| Node.js Docs             | Official         | https://nodejs.org/docs/latest/api/               |
| Express Docs             | Official         | https://expressjs.com/                            |
| Prisma Docs              | ORM              | https://www.prisma.io/docs                        |
| Full Stack Open (Part 3) | Comprehensive    | https://fullstackopen.com/en/part3                |
| Node Best Practices      | Production ready | https://github.com/goldbergyoni/nodebestpractices |

**Milestones:**

- [ ] Week 23: Create an Express server with 3 routes
- [ ] Week 24: Implement validation with Zod
- [ ] Week 25: Implement user registration and login with JWT
- [ ] Week 26-28: Build a full CRUD API with Prisma

---

### Month 8-9: Full-Stack Integration

#### A6.1: Next.js (Week 29-31)

> **Why this matters:** Next.js is the industry standard for React applications. It combines frontend and backend in one framework. Most companies use it.

> **Time Investment:** ~4 hrs/day | **Total:** ~60 hours over 3 weeks

```tsx
// Create Next.js app
// npx create-next-app@latest my-app --typescript --tailwind --app

// APP ROUTER (Next.js 13+)

// File-based routing
// app/
//   page.tsx           → /
//   about/page.tsx     → /about
//   blog/page.tsx      → /blog
//   blog/[slug]/page.tsx → /blog/:slug

// app/page.tsx (Home page)
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// app/about/page.tsx
export default function About() {
  return <h1>About Us</h1>;
}

// Dynamic routes: app/blog/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: PageProps) {
  return <h1>Post: {params.slug}</h1>;
}

// LAYOUTS (wrap pages)

// app/layout.tsx (root layout, required)
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>...</nav>
        <main>{children}</main>
        <footer>...</footer>
      </body>
    </html>
  );
}

// Nested layout: app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside>Dashboard Sidebar</aside>
      <div>{children}</div>
    </div>
  );
}

// SERVER COMPONENTS (default)
// - Run on server, no client JavaScript
// - Can fetch data directly
// - Cannot use hooks or browser APIs

async function ServerComponent() {
  // Direct database access (no API needed!)
  const posts = await db.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// CLIENT COMPONENTS
// - Run in browser
// - Can use hooks, events, browser APIs
// - Add 'use client' at the top

("use client");

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;
}

// DATA FETCHING

// Server component with fetch
async function Posts() {
  const res = await fetch("https://api.example.com/posts", {
    cache: "no-store", // Dynamic data (every request)
    // cache: 'force-cache',  // Static data (cached)
    // next: { revalidate: 60 },  // Revalidate every 60 seconds
  });
  const posts = await res.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// Static generation (build time)
export async function generateStaticParams() {
  const posts = await db.post.findMany();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// API ROUTES

// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await db.user.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}

// app/api/users/[id]/route.ts
interface RouteContext {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  const user = await db.user.findUnique({ where: { id: params.id } });

  if (!user) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  await db.user.delete({ where: { id: params.id } });
  return new NextResponse(null, { status: 204 });
}

// SERVER ACTIONS (mutations without API routes)

// app/actions.ts
("use server");

import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await db.post.create({
    data: { title, content },
  });

  revalidatePath("/posts"); // Refresh the page data
}

export async function deletePost(id: string) {
  await db.post.delete({ where: { id } });
  revalidatePath("/posts");
}

// Using Server Actions
("use client");

import { createPost, deletePost } from "./actions";

function CreatePostForm() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" />
      <button type="submit">Create</button>
    </form>
  );
}

function DeleteButton({ id }: { id: string }) {
  const deleteWithId = deletePost.bind(null, id);

  return (
    <form action={deleteWithId}>
      <button type="submit">Delete</button>
    </form>
  );
}

// LOADING AND ERROR STATES

// app/posts/loading.tsx (automatic loading UI)
export default function Loading() {
  return <div>Loading posts...</div>;
}

// app/posts/error.tsx (automatic error UI)
("use client");

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// app/not-found.tsx (404 page)
export default function NotFound() {
  return <h1>Page not found</h1>;
}

// MIDDLEWARE

// middleware.ts (at root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
```

**Resources:**

| Resource      | Purpose            | Link                     |
| ------------- | ------------------ | ------------------------ |
| Next.js Docs  | Official           | https://nextjs.org/docs  |
| Next.js Learn | Interactive course | https://nextjs.org/learn |
| Vercel        | Deployment         | https://vercel.com       |

---

#### A6.2: DevOps & Deployment (Week 32-34)

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type check
        run: npm run type-check

      - name: Run tests
        run: npm run test

      - name: Build
        run: npm run build
```

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Deployment Platforms:**

| Platform    | Best For               | Link                    |
| ----------- | ---------------------- | ----------------------- |
| Vercel      | Next.js (free tier)    | https://vercel.com      |
| Railway     | Full-stack + DB        | https://railway.app     |
| Render      | Full-stack (free tier) | https://render.com      |
| Fly.io      | Global distribution    | https://fly.io          |
| Neon        | PostgreSQL (free tier) | https://neon.tech       |
| PlanetScale | MySQL (free tier)      | https://planetscale.com |
| Supabase    | PostgreSQL + Auth      | https://supabase.com    |

**Milestones:**

- [ ] Week 29: Create a Next.js app with multiple pages
- [ ] Week 30: Fetch data in a Server Component
- [ ] Week 31: Use Server Actions for form submission
- [ ] Week 32: Set up GitHub Actions for CI
- [ ] Week 34: Deploy a full-stack app to Vercel + Neon

---

### Month 9-10: Projects & Job Readiness

#### A7.1: Portfolio Projects (Week 35-40)

**Project 1: Personal Portfolio Website (Week 35)**

```
Tech: Next.js, Tailwind, Framer Motion
Features:
- Responsive design
- Dark mode
- Projects showcase
- Blog with MDX
- Contact form
- SEO optimized
```

**Project 2: Full-Stack E-Commerce (Week 36-38)**

```
Tech: Next.js, Prisma, PostgreSQL, Stripe
Features:
- Product catalog with search/filter
- Shopping cart
- User authentication
- Checkout with Stripe
- Order history
- Admin dashboard
```

**Project 3: Real-Time Chat Application (Week 38-39)**

```
Tech: Next.js, Socket.io or Pusher, PostgreSQL
Features:
- User authentication
- Direct messages
- Group chats
- Online status
- Message history
```

**Project 4: SaaS Dashboard (Week 39-40)**

```
Tech: Next.js, Prisma, Tailwind, Charts
Features:
- User authentication
- Dashboard with analytics
- CRUD operations
- Role-based access
- Data export
```

---

## Track A Summary

| Month | Focus                       | Key Outcome               |
| ----- | --------------------------- | ------------------------- |
| 1-2   | HTML, CSS, JavaScript       | Build static websites     |
| 3-4   | Advanced JS, TypeScript     | Write professional code   |
| 4-5   | React, Testing              | Build interactive UIs     |
| 5-6   | Styling, Build Tools        | Production-ready frontend |
| 6-7   | Node.js, Express, Databases | Build APIs                |
| 8-9   | Next.js, DevOps             | Full-stack applications   |
| 9-10  | Projects, Portfolio         | Job-ready                 |

**Total Time Investment:** ~800-1000 hours over 10 months

**End Result:**

- 5+ portfolio projects
- Understanding of full web stack
- Ready for junior/mid full-stack developer roles

---

