## Track A: Full-Stack Development

> [!NOTE]
> This course and learning path can feel very challenging, and I want to be honest—coding is not easy. However, nothing is impossible if you stay consistent. I won’t try to oversimplify things, because this roadmap is meant for people who truly want to grow and improve. It’s designed for learners who are ready to stay committed, put in regular effort, and focus on long-term progress.

> **Goal:** Become employable/freelance-ready in 5-6 months
> **Daily Time:** 8 hours
> **End Result:** Portfolio with 5+ killer projects + ₹1-2L/month income

This is the money track. Track B makes you exceptional, but Track A pays the bills. ( circumstances based schedule)

---

## Current Status

| Field                  | Value            |
| ---------------------- | ---------------- |
| **Currently Learning** | HTML Foundations |
| **Current Resource**   | The Odin Project |
| **Started**            | [16-01-2026]     |
| **Target Completion**  | [16-01-2026]     |

---

> **Philosophy:** One resource at a time. No tutorial hopping. Finish completely before moving on.

---

### Month 1-2: Web Foundations

These are the building blocks. HTML is the skeleton, CSS is the skin, JavaScript is the brain. Rush through this and you'll regret it forever.

---

#### A1.1: HTML5 — The Skeleton (Week 1-2)

> **Why this matters:** HTML is not "easy" — it's fundamental. Bad HTML means bad SEO, bad accessibility, bad everything. Most developers write garbage HTML because they rushed through it.

> **Time Investment:** ~2-3 hrs/day | **Total:** ~30 hours over 2 weeks

**Primary Resource:**

| Resource                                          | Link                                                                 | Status         |
| ------------------------------------------------- | -------------------------------------------------------------------- | -------------- |
| **The Odin Project — Foundations (HTML Section)** | https://www.theodinproject.com/paths/foundations/courses/foundations | 🟡 In Progress |

**What to Complete:**

- [ ] Introduction to HTML and CSS
- [ ] Elements and Tags
- [ ] HTML Boilerplate
- [ ] Working with Text
- [ ] Lists
- [ ] Links and Images
- [ ] Commit Messages
- [ ] PROJECT: Recipes Website

**What You'll Learn (In Order):**

**Day 1-2: Document Basics**

```
<!DOCTYPE html> — why it matters
<html>, <head>, <body>
<meta> tags (charset, viewport)
<title>
Document outline
```

**Day 3-4: Text Content**

```
<h1> - <h6> — heading hierarchy
<p>, <span>
<strong>, <em>, <mark>
<br>, <hr>
<blockquote>, <cite>
<pre>, <code>
```

**Day 5-6: Links & Media**

```
<a> — href, target, rel
<img> — src, alt, loading
<figure>, <figcaption>
<video>, <audio>
<iframe>
```

**Day 7-8: Lists & Tables**

```
<ul>, <ol>, <li>
<dl>, <dt>, <dd>
<table>, <thead>, <tbody>, <tfoot>
<tr>, <th>, <td>
colspan, rowspan
When to use tables (data, not layout)
```

**Day 9-10: Forms**

```
<form> — action, method
<input> — all types (text, email, password, number, date, etc.)
<label> — accessibility!
<textarea>
<select>, <option>, <optgroup>
<button>
Form validation attributes (required, pattern, min, max)
<fieldset>, <legend>
```

**Day 11-14: Semantic HTML**

```
<header>, <footer>
<nav>, <main>
<article>, <section>, <aside>
Why semantics matter (SEO, accessibility, maintainability)
ARIA basics (roles, labels)
```

**Supplementary (Reference Only — Don't Learn From These):**

| Resource            | Purpose               | Link                                              |
| ------------------- | --------------------- | ------------------------------------------------- |
| MDN HTML            | Look up specific tags | https://developer.mozilla.org/en-US/docs/Web/HTML |
| HTML Best Practices | Guidelines            | https://github.com/hail2u/html-best-practices     |
| web.dev HTML        | Google's guide        | https://web.dev/learn/html                        |
| W3C Validator       | Validate your HTML    | https://validator.w3.org/                         |

**Projects to Build:**

- [ ] Recipes Website (Odin Project — mandatory)
- [ ] Personal Profile Page (self-initiated)
- [ ] Tribute Page (any person you admire)

**Milestones:**

- [ ] Day 7: Build a form that actually validates
- [ ] Day 14: Validate your HTML with W3C — zero errors
- [ ] Day 14: Explain why semantic HTML matters without looking it up

**Started:** **16-01-2026**
**Completed:** **16-01-2026**

---

#### A1.2: CSS3 — The Skin (Week 3-5)

> **Why this matters:** CSS is where most people get stuck and frustrated. They learn random properties without understanding the system. Learn the box model and layout systems properly — everything else is just details.

> **Time Investment:** ~2-3 hrs/day | **Total:** ~45 hours over 3 weeks

**Primary Resource:**

| Resource                                         | Link                                                                 | Status         |
| ------------------------------------------------ | -------------------------------------------------------------------- | -------------- |
| **The Odin Project — Foundations (CSS Section)** | https://www.theodinproject.com/paths/foundations/courses/foundations | ⚪ Not Started |

**What to Complete:**

- [ ] Intro to CSS
- [ ] The Cascade
- [ ] Inspecting HTML and CSS
- [ ] The Box Model
- [ ] Block and Inline
- [ ] Flexbox (Introduction)
- [ ] Flexbox (Growing and Shrinking)
- [ ] Flexbox (Axes)
- [ ] Flexbox (Alignment)
- [ ] PROJECT: Landing Page

**What You'll Learn (In Order):**

**Week 3: Fundamentals**

_Day 1-2: Selectors & Specificity_

```css
/* Selectors */
element, .class, #id
[attribute], [attr="value"]
:hover, :focus, :active, :first-child, :nth-child()
::before, ::after

/* Specificity */
Inline > ID > Class > Element
!important (and why to avoid it)
Calculating specificity
```

_Day 3-4: Box Model_

This is the most important concept in CSS. Everything is a box.

```css
content, padding, border, margin
box-sizing: border-box (always use this)
width, height, min-*, max-*
Margin collapse
```

_Day 5-7: Display & Positioning_

```css
display: block, inline, inline-block, none
position: static, relative, absolute, fixed, sticky
top, right, bottom, left
z-index and stacking context
float (legacy, but understand it)
```

**Week 4: Layout Systems**

_Day 1-3: Flexbox_

Flexbox is for 1-dimensional layouts (row OR column).

```css
/* Container */
display:
  flex flex-direction,
  flex-wrap justify-content,
  align-items,
  align-content gap /* Items */ flex-grow,
  flex-shrink,
  flex-basis flex shorthand align-self,
  order;
```

_Day 4-7: CSS Grid_

Grid is for 2-dimensional layouts (rows AND columns).

```css
/* Container */
display:
  grid grid-template-columns,
  grid-template-rows grid-template-areas gap,
  justify-items,
  align-items /* Items */ grid-column,
  grid-row grid-area justify-self,
  align-self /* Functions */ repeat(),
  minmax(),
  fr unit auto-fit,
  auto-fill;
```

**Week 5: Advanced CSS**

_Day 1-2: Typography & Colors_

```css
font-family, font-size, font-weight
line-height, letter-spacing
text-align, text-transform, text-decoration
color, background-color
Hex, RGB, HSL, RGBA, HSLA
CSS custom properties (variables)
```

_Day 3-4: Responsive Design_

This is not optional. Mobile-first is the standard.

```css
Mobile-first approach
Media queries
Viewport units (vw, vh, vmin, vmax)
Responsive images
Container queries (new)
```

_Day 5-7: Transitions & Animations_

```css
transition (property, duration, timing-function, delay)
transform (translate, rotate, scale, skew)
@keyframes
animation properties
Performance (will-change, GPU acceleration)
```

**Supplementary (After Completing Odin CSS):**

| Resource                 | Purpose                           | Link                                                     |
| ------------------------ | --------------------------------- | -------------------------------------------------------- |
| Flexbox Froggy (must do) | Master Flexbox (game) — MANDATORY | https://flexboxfroggy.com/                               |
| Grid Garden (must do)    | Master Grid (game) — MANDATORY    | https://cssgridgarden.com/                               |
| CSS-Tricks Flexbox Guide | Reference                         | https://css-tricks.com/snippets/css/a-guide-to-flexbox/  |
| CSS-Tricks Grid Guide    | Reference                         | https://css-tricks.com/snippets/css/complete-guide-grid/ |
| MDN CSS                  | Reference                         | https://developer.mozilla.org/en-US/docs/Web/CSS         |
| Kevin Powell (YouTube)   | When stuck on specific concepts   | https://www.youtube.com/@KevinPowell                     |
| web.dev CSS              | Google's course                   | https://web.dev/learn/css                                |

**Projects to Build:**

- [ ] Landing Page (Odin Project — mandatory)
- [ ] Responsive Navbar (mobile menu, hamburger)
- [ ] Card Component Library (3 different styles)
- [ ] Clone a real website's hero section
- [ ] CSS Grid Photo Gallery

**Milestones:**

- [ ] Week 3: Explain the box model to someone without looking it up
- [ ] Week 4: Complete Flexbox Froggy (all 24 levels)
- [ ] Week 4: Complete Grid Garden (all 28 levels)
- [ ] Week 5: Build a fully responsive landing page from scratch (no AI)

**Started:** **\_**
**Completed:** **\_**

---

#### A1.3: JavaScript Fundamentals — The Brain (Week 6-9)

> **Why this matters:** JavaScript is where programming actually begins. Everything before this was markup. If you don't understand JavaScript deeply, React will destroy you. Don't rush.

> **Time Investment:** ~3-4 hrs/day | **Total:** ~80 hours over 4 weeks

**Primary Resource (Foundations):**

| Resource                                                | Link                                                                 | Status         |
| ------------------------------------------------------- | -------------------------------------------------------------------- | -------------- |
| **The Odin Project — Foundations (JavaScript Section)** | https://www.theodinproject.com/paths/foundations/courses/foundations | ⚪ Not Started |

**What to Complete:**

- [ ] Fundamentals Part 1 (Variables, Numbers, Operators)
- [ ] Fundamentals Part 2 (Strings, Conditionals)
- [ ] JavaScript Developer Tools
- [ ] Fundamentals Part 3 (Functions)
- [ ] Problem Solving
- [ ] Understanding Errors
- [ ] PROJECT: Rock Paper Scissors
- [ ] Clean Code
- [ ] Fundamentals Part 4 (Arrays, Loops)
- [ ] DOM Manipulation and Events
- [ ] PROJECT: Etch-a-Sketch
- [ ] Fundamentals Part 5 (Objects)
- [ ] PROJECT: Calculator

**Primary Resource (Deep Mastery — After Odin Foundations):**

| Resource            | Link                     | Status         |
| ------------------- | ------------------------ | -------------- |
| **JavaScript.info** | https://javascript.info/ | ⚪ Not Started |

**What to Complete on JavaScript.info:**

`Part 1: The JavaScript Language`

- [ ] JavaScript Fundamentals (review + fill gaps)
- [ ] Code Quality
- [ ] Objects: The Basics
- [ ] Data Types
- [ ] Functions Advanced
- [ ] Object Properties Configuration
- [ ] Prototypes, Inheritance
- [ ] Classes
- [ ] Error Handling
- [ ] Promises, Async/Await
- [ ] Generators, Advanced Iteration
- [ ] Modules

`Part 2: Browser`

- [ ] Document (DOM)
- [ ] Introduction to Events
- [ ] UI Events
- [ ] Forms, Controls
- [ ] Storing Data in Browser

**What You'll Learn (In Order):**

**Week 6: Core Basics**

_Day 1: Variables & Types_

```javascript
let, const (never use var)
Primitive types: string, number, boolean, null, undefined, symbol, bigint
typeof operator
Type coercion (and why it's confusing)
```

_Day 2: Operators_

```javascript
Arithmetic: +, -, *, /, %, **
Comparison: ==, ===, !=, !==, <, >, <=, >=
Logical: &&, ||, !
Nullish coalescing: ??
Optional chaining: ?.
Assignment: =, +=, -=, etc.
```

_Day 3: Strings_

```javascript
Template literals `${variable}`
String methods: length, indexOf, slice, substring
split, join, trim
toUpperCase, toLowerCase
includes, startsWith, endsWith
replace, replaceAll
```

_Day 4: Numbers & Math_

```javascript
(parseInt, parseFloat);
(Number.isNaN, Number.isFinite);
(toFixed, toPrecision);
(Math.floor, Math.ceil, Math.round);
(Math.random, Math.max, Math.min);
```

_Day 5-6: Control Flow_

```javascript
if, else if, else
switch
Ternary operator
Truthy and falsy values
for, while, do...while
for...of, for...in
break, continue
```

_Day 7: Functions_

```javascript
Function declaration vs expression
Arrow functions
Parameters, default parameters
Return values
Rest parameters (...args)
```

**Week 7: Intermediate Concepts**

_Day 1-2: Arrays_

Arrays are everywhere. Master these methods.

```javascript
Creation, indexing
push, pop, shift, unshift
slice, splice
indexOf, includes, find, findIndex
forEach, map, filter, reduce
some, every
sort, reverse
flat, flatMap
Spread operator [...arr]
```

_Day 3-4: Objects_

```javascript
Object literals
Accessing properties (dot vs bracket)
Adding, modifying, deleting properties
Object methods
this keyword (in objects)
Object.keys, Object.values, Object.entries
Object.assign, spread {...obj}
Destructuring
```

_Day 5-6: Scope & Closures_

This is where most beginners get lost. Take your time.

```javascript
Global scope
Function scope
Block scope
Lexical scoping
Closures (and practical uses)
Hoisting
```

_Day 7: Higher-Order Functions_

```javascript
Functions as values
Callbacks
Functions returning functions
Practical patterns
```

**Week 8: Advanced Fundamentals**

_Day 1: Execution Context_

This is what separates JavaScript developers from JavaScript users.

```javascript
How JavaScript runs
Call stack
Execution context (global, function)
The this keyword (all rules)
```

_Day 2: Asynchronous JavaScript_

```javascript
JavaScript is single-threaded
Event loop
Callbacks
Callback hell
```

_Day 3-4: Promises_

```javascript
Creating promises
.then, .catch, .finally
Chaining promises
Promise.all, Promise.race
Promise.allSettled, Promise.any
```

_Day 5-6: Async/Await_

Modern async code. This is what you'll use 90% of the time.

```javascript
async functions
await keyword
Error handling with try/catch
Parallel vs sequential
```

_Day 7: Modules_

```javascript
ES Modules: import, export
Named exports vs default exports
Dynamic imports
```

**Week 9: DOM & Browser APIs**

This is where JavaScript meets HTML. Interactive websites start here.

_Day 1-2: DOM Selection_

```javascript
document.getElementById
document.querySelector, querySelectorAll
Element properties (textContent, innerHTML, id, className)
classList (add, remove, toggle, contains)
getAttribute, setAttribute
```

_Day 3: DOM Manipulation_

```javascript
document.createElement
appendChild, removeChild, remove
insertBefore, insertAdjacentHTML
cloneNode
innerHTML vs textContent (security)
```

_Day 4-5: Events_

```javascript
addEventListener (click, submit, keydown, etc.)
Event object
event.target, event.currentTarget
event.preventDefault
Event bubbling and capturing
Event delegation
```

_Day 6: Forms_

```javascript
Accessing form values
Form submission
Form validation
FormData API
```

_Day 7: Browser APIs_

```javascript
(localStorage, sessionStorage);
fetch(GET, POST, PUT, DELETE);
(JSON.parse, JSON.stringify);
```

**Supplementary (Reference Only):**

| Resource            | Purpose                         | Link                                                    |
| ------------------- | ------------------------------- | ------------------------------------------------------- |
| MDN JavaScript      | Reference                       | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| Eloquent JavaScript | Alternative reading (free book) | https://eloquentjavascript.net/                         |

**Supplementary (After Mastering Basics):**

| Resource                  | Purpose                     | Link                                                                     |
| ------------------------- | --------------------------- | ------------------------------------------------------------------------ |
| JavaScript30              | 30 vanilla JS projects      | https://javascript30.com/                                                |
| Exercism JavaScript Track | Practice problems           | https://exercism.org/tracks/javascript                                   |
| Namaste JavaScript        | Execution context deep dive | https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP |

**Projects to Build:**

- [ ] Rock Paper Scissors (Odin Project — mandatory)
- [ ] Etch-a-Sketch (Odin Project — mandatory)
- [ ] Calculator (Odin Project — mandatory)
- [ ] Todo List (with localStorage)
- [ ] Weather App (fetch API)
- [ ] Quiz App
- [ ] Form Validator
- [ ] GitHub User Search

**Milestones:**

- [ ] Week 6: Explain the difference between `==` and `===`
- [ ] Week 7: Use `map`, `filter`, `reduce` without looking up syntax
- [ ] Week 8: Explain closures and give a real-world use case
- [ ] Week 8: Explain the event loop to a rubber duck
- [ ] Week 9: Build an app that fetches data from an API

**Started:** **\_**
**Completed:** **\_**

---

### Month 3-4: Advanced JavaScript & TypeScript

---

#### A2.1: Advanced JavaScript (Week 10-11)

> **Why this matters:** Prototypes, classes, design patterns — this is what separates juniors from mid-level developers. Interviewers love asking about these.

> **Time Investment:** ~3 hrs/day | **Total:** ~30 hours over 2 weeks

**Primary Resource:**

| Resource                            | Link                                       | Status         |
| ----------------------------------- | ------------------------------------------ | -------------- |
| **JavaScript.info (Part 2-3)**      | https://javascript.info/                   | ⚪ Not Started |
| **You Don't Know JS (Book Series)** | https://github.com/getify/You-Dont-Know-JS | ⚪ Not Started |

**Supplementary:**

| Resource     | Purpose         | Link                      |
| ------------ | --------------- | ------------------------- |
| Patterns.dev | Design patterns | https://www.patterns.dev/ |

**What to Learn:**

_Prototypes & Classes_

```javascript
Prototype chain
Object.create
Class syntax
Constructors
Inheritance (extends, super)
Static methods and properties
Private fields (#)
Getters and setters
```

_Advanced Patterns_

```javascript
Module pattern
Factory functions
Singleton pattern
Observer pattern
Pub/Sub pattern
```

_Error Handling_

```javascript
Error types
throw
try/catch/finally
Custom errors
Error handling in async code
```

_Web APIs Deep Dive_

```javascript
History API
Intersection Observer
Mutation Observer
Web Workers (intro)
Service Workers (intro)
```

**Milestones:**

- [ ] Week 10: Explain the prototype chain without looking it up
- [ ] Week 11: Implement the Observer pattern from scratch
- [ ] Week 11: Create a custom Error class

**Started:** **\_**
**Completed:** **\_**

---

#### A2.2: TypeScript (Week 12-14)

> **Why this matters:** TypeScript is no longer optional. 90%+ of serious React jobs require it. It catches bugs before they happen. Learn it now, not later.

> **Time Investment:** ~3 hrs/day | **Total:** ~45 hours over 3 weeks

**Primary Resource:**

| Resource                              | Link                                          | Status         |
| ------------------------------------- | --------------------------------------------- | -------------- |
| **TypeScript Handbook**               | https://www.typescriptlang.org/docs/handbook/ | ⚪ Not Started |
| **Total TypeScript (Free Tutorials)** | https://www.totaltypescript.com/tutorials     | ⚪ Not Started |

**Supplementary:**

| Resource             | Purpose   | Link                                               |
| -------------------- | --------- | -------------------------------------------------- |
| TypeScript Deep Dive | Free book | https://basarat.gitbook.io/typescript/             |
| Type Challenges      | Practice  | https://github.com/type-challenges/type-challenges |
| Exercism TypeScript  | Practice  | https://exercism.org/tracks/typescript             |

**What to Learn (In Order):**

**Week 12: Basics**

```typescript
// Why TypeScript
Type safety, better tooling, self-documentation

// Basic Types
let name: string = "Rhythm";
let age: number = 21;
let isStudent: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];

// Objects
let person: { name: string; age: number } = {
  name: "Rhythm",
  age: 21
};

// Functions
function add(a: number, b: number): number {
  return a + b;
}

// Optional & Default
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}
```

**Week 13: Intermediate**

```typescript
// Type Aliases
type User = {
  id: number;
  name: string;
  email: string;
};

// Interfaces
interface Product {
  id: number;
  name: string;
  price: number;
}

// Extending
interface Admin extends User {
  role: string;
}

// Union Types
type Status = "pending" | "approved" | "rejected";
type StringOrNumber = string | number;

// Intersection Types
type Employee = User & { employeeId: string };

// Generics
function identity<T>(arg: T): T {
  return arg;
}

// Generic Interfaces
interface Response<T> {
  data: T;
  error: string | null;
}
```

**Week 14: Advanced**

```typescript
// Utility Types
Partial<T>, Required<T>, Readonly<T>
Pick<T, K>, Omit<T, K>
Record<K, T>
ReturnType<T>, Parameters<T>

// Type Guards
typeof, instanceof
in operator
Custom type guards

// Conditional Types
type Check<T> = T extends string ? "string" : "other";

// Mapped Types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Template Literal Types
type EventName = `on${Capitalize<string>}`;
```

**Milestones:**

- [ ] Week 12: Convert a JavaScript file to TypeScript with proper types
- [ ] Week 13: Write a generic function that works with any type
- [ ] Week 14: Complete 10+ Type Challenges (easy level)

**Started:** **\_**
**Completed:** **\_**

---

### Month 4-5: React & Testing

---

#### A3.1: React Fundamentals (Week 15-17)

> **Why this matters:** React is the industry standard. Every other company uses it. But here's the thing — most React tutorials teach you the syntax without teaching you why things work. You need both.

> **Time Investment:** ~4 hrs/day | **Total:** ~60 hours over 3 weeks

**Primary Resource:**

| Resource                        | Link                          | Status         |
| ------------------------------- | ----------------------------- | -------------- |
| **React Official Docs**         | https://react.dev/            | ⚪ Not Started |
| **Full Stack Open (Parts 1-2)** | https://fullstackopen.com/en/ | ⚪ Not Started |

**Supplementary:**

| Resource                    | Purpose         | Link                                             |
| --------------------------- | --------------- | ------------------------------------------------ |
| React TypeScript Cheatsheet | TS + React      | https://react-typescript-cheatsheet.netlify.app/ |
| React Patterns              | Common patterns | https://reactpatterns.com/                       |
| Bulletproof React           | Architecture    | https://github.com/alan2207/bulletproof-react    |

**What to Learn (In Order):**

**Week 15: Core Concepts**

_Day 1-2: Setup & JSX_

```jsx
// Project setup
npm create vite@latest my-app -- --template react-ts

// JSX
const element = <h1>Hello, World!</h1>;

// Expressions in JSX
const name = "Rhythm";
const element = <h1>Hello, {name}!</h1>;

// JSX is NOT HTML
className (not class)
htmlFor (not for)
camelCase properties
```

_Day 3-4: Components & Props_

Components are just functions that return JSX. That's it. Don't overcomplicate it.

```jsx
// Functional Components
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

// Using Components
<Welcome name="Rhythm" />;

// Children prop
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

// Prop destructuring
// Default props
// Props are read-only
```

_Day 5: Rendering_

```jsx
// Conditional Rendering
{
  isLoggedIn && <Welcome />;
}
{
  isLoggedIn ? <Welcome /> : <Login />;
}

// Rendering Lists
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}

// Why keys matter
```

_Day 6-7: Events_

```jsx
// Event Handling
function Button() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}

// Event types in TypeScript
// Passing arguments
// Preventing default
```

**Week 16: Hooks**

Hooks are how React manages state and side effects. Master these.

_Day 1-2: useState_

```jsx
const [count, setCount] = useState(0);

// Updating state
setCount(count + 1);
setCount(prev => prev + 1); // Preferred

// State with objects
const [user, setUser] = useState({ name: "", age: 0 });
setUser(prev => ({ ...prev, name: "Rhythm" }));

// State with arrays
const [items, setItems] = useState<string[]>([]);
setItems(prev => [...prev, "new item"]);
```

_Day 3-4: useEffect_

This is where beginners get confused. Read this carefully.

```jsx
// Side effects
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

// Cleanup
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);

// Dependency array rules:
// [] = run once on mount
// [dep] = run when dep changes
// no array = run every render (almost never what you want)
```

_Day 5: useRef_

```jsx
// DOM references
const inputRef = useRef < HTMLInputElement > null;

// Mutable values that DON'T trigger re-render
const renderCount = useRef(0);
```

_Day 6: useContext_

```jsx
// Creating context
const ThemeContext = (createContext < "light") | ("dark" > "light");

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>;

// Consuming
const theme = useContext(ThemeContext);
```

_Day 7: useReducer_

When state logic gets complex, useReducer is cleaner than useState.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "increment" });
```

**Week 17: Advanced React**

_Day 1: Performance Hooks_

```jsx
// useMemo - memoize computed values
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback - memoize functions
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

_Day 2-3: Custom Hooks_

This is where React becomes beautiful. Extract and reuse logic.

```jsx
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
```

_Day 4-5: React Router_

```jsx
npm install react-router-dom

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users/:id" element={<User />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

// Navigation
<Link to="/about">About</Link>
const navigate = useNavigate();
navigate("/users/123");

// Route params
const { id } = useParams();
```

_Day 6-7: State Management_

```jsx
// Zustand (recommended for most apps)
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

**Milestones:**

- [ ] Week 15: Build a component that renders a list from props
- [ ] Week 16: Build a counter with useState (simple, but do it)
- [ ] Week 16: Fetch data with useEffect and display loading/error states
- [ ] Week 17: Extract logic into a custom hook
- [ ] Week 17: Add routing to an app with protected routes

**Started:** **\_**
**Completed:** **\_**

---

#### A3.2: Testing (Week 18-19)

> **Why this matters:** Untestable code is unemployable code. Companies care about tests. Plus, writing tests forces you to write better code. It's not optional.

> **Time Investment:** ~3 hrs/day | **Total:** ~30 hours over 2 weeks

**Primary Resource:**

| Resource                 | Link                                   | Status         |
| ------------------------ | -------------------------------------- | -------------- |
| **Testing Library Docs** | https://testing-library.com/docs/      | ⚪ Not Started |
| **Jest Docs**            | https://jestjs.io/docs/getting-started | ⚪ Not Started |
| **Playwright Docs**      | https://playwright.dev/docs/intro      | ⚪ Not Started |

**Supplementary:**

| Resource           | Purpose            | Link                        |
| ------------------ | ------------------ | --------------------------- |
| Kent C. Dodds Blog | Testing philosophy | https://kentcdodds.com/blog |

**Milestones:**

- [ ] Week 18: Write unit tests for a utility function
- [ ] Week 18: Write an integration test for a React component
- [ ] Week 19: Write an E2E test for login flow
- [ ] Week 19: Achieve 80% coverage on a small project

**Started:** **\_**
**Completed:** **\_**

---

### Month 5-6: Styling & Build Tools

---

#### A4.1: Modern CSS & Tailwind (Week 20)

> **Why this matters:** You already know CSS. Now learn how to scale it. Tailwind is the industry standard for rapid development.

> **Time Investment:** ~3 hrs/day | **Total:** ~15 hours over 1 week

**Primary Resource:**

| Resource          | Link                         | Status         |
| ----------------- | ---------------------------- | -------------- |
| **Tailwind Docs** | https://tailwindcss.com/docs | ⚪ Not Started |

**Supplementary:**

| Resource    | Purpose                | Link                      |
| ----------- | ---------------------- | ------------------------- |
| Tailwind UI | Components (some free) | https://tailwindui.com/   |
| Headless UI | Unstyled components    | https://headlessui.com/   |
| Radix UI    | Unstyled primitives    | https://www.radix-ui.com/ |

**Milestones:**

- [ ] Build a responsive navbar with Tailwind
- [ ] Build a card component with dark mode support
- [ ] Recreate a popular website's landing page section

**Started:** **\_**
**Completed:** **\_**

---

#### A4.2: Build Tools (Week 21)

> **Why this matters:** You need to understand what happens when you run `npm run build`. Vite is the modern standard. Know it.

> **Time Investment:** ~2 hrs/day | **Total:** ~10 hours over 1 week

**Primary Resource:**

| Resource      | Link                      | Status         |
| ------------- | ------------------------- | -------------- |
| **Vite Docs** | https://vitejs.dev/guide/ | ⚪ Not Started |

**Milestones:**

- [ ] Configure path aliases in Vite
- [ ] Set up environment variables correctly
- [ ] Understand what `npm run build` actually produces

**Started:** **\_**
**Completed:** **\_**

---

### Month 6-7: Backend Development

---

#### A5.1: Node.js Fundamentals (Week 22-23)

> **Why this matters:** You're about to become a full-stack developer. Node.js is JavaScript on the server.

> **Time Investment:** ~3-4 hrs/day | **Total:** ~40 hours over 2 weeks

**Primary Resource:**

| Resource                     | Link                                | Status         |
| ---------------------------- | ----------------------------------- | -------------- |
| **Full Stack Open (Part 3)** | https://fullstackopen.com/en/part3  | ⚪ Not Started |
| **Node.js Docs**             | https://nodejs.org/docs/latest/api/ | ⚪ Not Started |
| **Express Docs**             | https://expressjs.com/              | ⚪ Not Started |

**Supplementary:**

| Resource            | Purpose          | Link                                              |
| ------------------- | ---------------- | ------------------------------------------------- |
| Node Best Practices | Production ready | https://github.com/goldbergyoni/nodebestpractices |

**Milestones:**

- [ ] Week 22: Read a file and log its contents with Node
- [ ] Week 23: Create an Express server with 3 routes
- [ ] Week 23: Write custom middleware that logs requests

**Started:** **\_**
**Completed:** **\_**

---

#### A5.2: REST API Design (Week 24)

> **Why this matters:** Bad API design haunts you forever. Learn to design APIs that developers actually want to use.

> **Time Investment:** ~3 hrs/day | **Total:** ~15 hours over 1 week

**Milestones:**

- [ ] Design a REST API for a blog (users, posts, comments)
- [ ] Implement validation with Zod
- [ ] Return proper status codes for all scenarios

**Started:** **\_**
**Completed:** **\_**

---

#### A5.3: Authentication (Week 25)

> **Why this matters:** Every app needs auth. Get it wrong and you've exposed user data.

> **Time Investment:** ~4 hrs/day | **Total:** ~20 hours over 1 week

**Milestones:**

- [ ] Implement user registration with password hashing
- [ ] Implement login that returns a JWT
- [ ] Protect routes with auth middleware
- [ ] Handle token expiration gracefully

**Started:** **\_**
**Completed:** **\_**

---

#### A5.4: Databases (Week 26-28)

> **Why this matters:** Data is everything. Learn both SQL and NoSQL.

> **Time Investment:** ~4 hrs/day | **Total:** ~60 hours over 3 weeks

**Primary Resource:**

| Resource                       | Link                               | Status         |
| ------------------------------ | ---------------------------------- | -------------- |
| **Full Stack Open (Part 3-4)** | https://fullstackopen.com/en/part3 | ⚪ Not Started |
| **Prisma Docs**                | https://www.prisma.io/docs         | ⚪ Not Started |

**Supplementary:**

| Resource            | Purpose      | Link                                |
| ------------------- | ------------ | ----------------------------------- |
| PostgreSQL Tutorial | SQL          | https://www.postgresqltutorial.com/ |
| MongoDB University  | Free courses | https://learn.mongodb.com/          |
| Mongoose Docs       | ODM          | https://mongoosejs.com/docs/        |

**Milestones:**

- [ ] Week 26: Write SQL queries with JOINs
- [ ] Week 26: Set up Prisma with PostgreSQL
- [ ] Week 27: Build a CRUD API with MongoDB
- [ ] Week 28: Explain when to use SQL vs NoSQL

**Started:** **\_**
**Completed:** **\_**

---

### Month 8-9: Full-Stack Integration

---

#### A6.1: Next.js (Week 29-31)

> **Why this matters:** Next.js is the industry standard for React applications. It combines frontend and backend in one framework.

> **Time Investment:** ~4 hrs/day | **Total:** ~60 hours over 3 weeks

**Primary Resource:**

| Resource                  | Link                     | Status         |
| ------------------------- | ------------------------ | -------------- |
| **Next.js Official Docs** | https://nextjs.org/docs  | ⚪ Not Started |
| **Next.js Learn**         | https://nextjs.org/learn | ⚪ Not Started |

**Milestones:**

- [ ] Week 29: Create a Next.js app with multiple pages
- [ ] Week 30: Fetch data in a Server Component
- [ ] Week 31: Create API routes for CRUD operations
- [ ] Week 31: Use Server Actions for form submission

**Started:** **\_**
**Completed:** **\_**

---

#### A6.2: DevOps & Deployment (Week 32-34)

> **Why this matters:** Your app is useless if it's only on your laptop.

> **Time Investment:** ~3 hrs/day | **Total:** ~45 hours over 3 weeks

**Primary Resource:**

| Resource                | Link                                 | Status         |
| ----------------------- | ------------------------------------ | -------------- |
| **GitHub Actions Docs** | https://docs.github.com/en/actions   | ⚪ Not Started |
| **Docker Docs**         | https://docs.docker.com/get-started/ | ⚪ Not Started |
| **Vercel Docs**         | https://vercel.com/docs              | ⚪ Not Started |

**Milestones:**

- [ ] Week 32: Set up GitHub Actions to run tests on push
- [ ] Week 33: Dockerize your app and run with docker-compose
- [ ] Week 34: Deploy a full-stack app to Vercel + Neon

**Started:** **\_**
**Completed:** **\_**

---

### Month 9-10: Projects & Job Readiness

---

#### A7.1: Portfolio Projects (Week 35-40)

> **Why this matters:** Your projects are your proof. No one cares what tutorials you watched.

Build 5 projects that showcase different skills:

| #   | Project                  | Tech Stack                          | Status         | Live Link | GitHub |
| --- | ------------------------ | ----------------------------------- | -------------- | --------- | ------ |
| 1   | Personal Portfolio       | Next.js, Tailwind, Framer Motion    | ⚪ Not Started | —         | —      |
| 2   | Full-Stack E-Commerce    | Next.js, Prisma, PostgreSQL, Stripe | ⚪ Not Started | —         | —      |
| 3   | Real-Time Chat App       | Next.js, Socket.io, PostgreSQL      | ⚪ Not Started | —         | —      |
| 4   | SaaS Dashboard           | Next.js, Prisma, Tailwind, Charts   | ⚪ Not Started | —         | —      |
| 5   | Open Source Contribution | —                                   | ⚪ Not Started | —         | —      |

---

#### A7.2: Web Security (Week 37)

> **Why this matters:** One security vulnerability can destroy a company.

**Resources:**

| Resource                 | Purpose                | Link                                   |
| ------------------------ | ---------------------- | -------------------------------------- |
| OWASP Top 10             | Common vulnerabilities | https://owasp.org/www-project-top-ten/ |
| PortSwigger Web Security | Free course            | https://portswigger.net/web-security   |

---

#### A7.3: Performance & Accessibility (Week 38)

> **Why this matters:** Fast, accessible apps get more users and rank higher on Google.

**Resources:**

| Resource     | Purpose       | Link                               |
| ------------ | ------------- | ---------------------------------- |
| web.dev      | Performance   | https://web.dev/learn/performance/ |
| a11y Project | Accessibility | https://www.a11yproject.com/       |

---

## 🗺️ The Complete Learning Path (Visual)

```
MONTH 1
├── Week 1-2: HTML (The Odin Project)
│   └── Project: Recipes Website
│
MONTH 1-2
├── Week 3-5: CSS (The Odin Project)
│   ├── Flexbox Froggy (all levels)
│   ├── Grid Garden (all levels)
│   └── Project: Landing Page
│
MONTH 2-3
├── Week 6-9: JavaScript (The Odin Project)
│   ├── Project: Rock Paper Scissors
│   ├── Project: Etch-a-Sketch
│   └── Project: Calculator
│
MONTH 3-4
├── Week 10-14: Advanced JS + TypeScript (JavaScript.info + TS Handbook)
│   └── Projects: Todo, Weather App, Quiz App
│
MONTH 4-5
├── Week 15-19: React + Testing (React Docs + Full Stack Open)
│   └── Projects: Full React apps with tests
│
MONTH 5-6
├── Week 20-21: Tailwind + Vite
│
MONTH 6-7
├── Week 22-28: Backend (Node + Express + Databases)
│   └── Full Stack Open Parts 3-4
│
MONTH 8-9
├── Week 29-34: Next.js + DevOps
│
MONTH 9-10
├── Week 35-40: Portfolio Projects + Job Prep
```

---

## 🚫 Resources I'm NOT Using (And Why)

| Resource                    | Why I'm Skipping                    |
| --------------------------- | ----------------------------------- |
| YouTube tutorials           | Passive watching ≠ learning         |
| Udemy courses               | Too hand-holdy, promotes copy-paste |
| W3Schools                   | Outdated, use MDN instead           |
| Any AI for solving problems | Kills real learning                 |

---

## ✅ The Rules I Follow

1. **One resource at a time** — No switching mid-way
2. **No AI for problem solving** — Only for explaining concepts AFTER I've tried
3. **Type everything manually** — No copy-paste ever
4. **Build > Watch** — 2 hours building for every 1 hour reading
5. **Complete all projects** — No skipping
6. **Struggle is good** — 30+ minutes stuck before looking for hints
7. **Deploy everything** — If it's not live, it doesn't count

---

## 📊 Weekly Progress Log

### Week 1: [Date Range]

- **What I learned:**
- **What I built:**
- **Struggles:**
- **Next week's goal:**

---

## Status Legend

| Emoji | Meaning           |
| ----- | ----------------- |
| ⚪    | Not Started       |
| 🟡    | In Progress       |
| 🟢    | Completed         |
| 🔴    | Stuck / Need Help |

---

_Last Updated: [16-01-2026]_
