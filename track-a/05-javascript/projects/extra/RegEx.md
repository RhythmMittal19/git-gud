# 📚 The Complete RegEx Roadmap for Beginners

> **A structured, beginner-friendly guide to mastering Regular Expressions**
> Follow this guide step-by-step from zero to hero! 🚀

---

## 🗺️ Learning Roadmap

This guide is designed to be followed in order. Each section builds on the previous one.

```
Level 1: Fundamentals (Week 1)
├── What is RegEx?
├── Basic Syntax & Setup
├── Literal Characters
└── Your First Patterns

Level 2: Building Blocks (Week 1-2)
├── Character Classes
├── Quantifiers
├── Escaping Special Characters
└── Practice: Simple Validation

Level 3: Positioning (Week 2)
├── Anchors & Boundaries
├── Start/End Matching
└── Practice: Exact Matching

Level 4: Advanced Patterns (Week 3)
├── Groups & Capturing
├── Alternation (OR Logic)
├── Flags & Modifiers
└── Practice: Complex Validation

Level 5: Pro Techniques (Week 3-4)
├── Lookaheads & Lookbehinds
├── Greedy vs Lazy
├── Common Patterns Library
└── Real-World Projects

Level 6: Mastery
├── Performance Optimization
├── Common Pitfalls
└── When NOT to Use RegEx
```

---

## 📖 Table of Contents

### 🎯 Getting Started

- [What is RegEx & Why Learn It?](#-level-1-what-is-regex--why-learn-it)
- [Setup & Tools](#-setup--tools)
- [How to Use This Guide](#-how-to-use-this-guide)

### 📘 Core Concepts (Learn in Order)

1. [Basic Characters & Literal Matching](#1-basic-characters--literal-matching)
2. [Character Classes](#2-character-classes)
3. [Quantifiers](#3-quantifiers)
4. [Anchors & Boundaries](#4-anchors--boundaries)
5. [Groups & Alternation](#5-groups--alternation)
6. [Special Characters & Escaping](#6-special-characters--escaping)
7. [Flags & Modifiers](#7-flags--modifiers)

### 🚀 Advanced Topics

8. [Lookaheads & Lookbehinds](#8-lookaheads--lookbehinds-advanced)
9. [Greedy vs Lazy Matching](#9-greedy-vs-lazy-matching)

### 💼 Practical Application

- [Common Validation Patterns](#-common-validation-patterns-library)
- [Real-World Examples](#-real-world-examples)
- [Practice Exercises](#-practice-exercises-with-solutions)

### 📚 Reference

- [Complete Cheat Sheet](#-complete-cheat-sheet)
- [Common Mistakes](#-common-mistakes--how-to-avoid-them)
- [Learning Resources](#-learning-resources--next-steps)

---

## 🎯 Level 1: What is RegEx & Why Learn It?

### What is RegEx?

**Regular Expressions (RegEx)** are patterns used to match character combinations in strings.

Think of RegEx as a **smart search tool** that can:

- ✅ Find text with specific patterns
- ✅ Validate user input (emails, passwords, phone numbers)
- ✅ Extract data from text
- ✅ Replace and transform text

### Real-World Analogy

**Normal Search:**

```
Find: "cat"
Result: Finds exactly "cat"
```

**RegEx Search:**

```
Find: /c[aeiou]t/
Result: Finds "cat", "cot", "cut", "cit", "cet"
```

RegEx gives you **superpowers** for text processing! 🦸

### Why Learn RegEx?

| Use Case             | Example                           |
| -------------------- | --------------------------------- |
| **Form Validation**  | Check if email format is valid    |
| **Data Extraction**  | Pull phone numbers from documents |
| **Text Cleaning**    | Remove unwanted characters        |
| **Search & Replace** | Update code patterns in files     |
| **URL Routing**      | Match website paths               |

---

## 🛠️ Setup & Tools

### In JavaScript (Recommended for Beginners)

```javascript
// Method 1: Literal notation (most common)
const pattern = /hello/;

// Method 2: Constructor
const pattern2 = new RegExp("hello");

// Test if pattern matches
pattern.test("hello world"); // true
```

### Essential JavaScript Methods

| Method       | Purpose               | Returns           | Example                                 |
| ------------ | --------------------- | ----------------- | --------------------------------------- |
| `.test()`    | Check if match exists | `true/false`      | `/cat/.test("cat")` → `true`            |
| `.match()`   | Find matches          | `Array` or `null` | `"cat".match(/cat/)` → `["cat"]`        |
| `.replace()` | Replace matches       | New string        | `"cat".replace(/cat/, "dog")` → `"dog"` |

---

## 📝 How to Use This Guide

### For Complete Beginners:

1. **Read sections in order** - Each builds on the previous
2. **Type every example** - Don't just read, practice!
3. **Complete practice exercises** - After each major section
4. **Use testing tools** - Verify your patterns work
5. **Take breaks** - Don't rush, one section per day is fine

### Learning Tips:

- ⏱️ **Spend 15-30 minutes daily** rather than cramming
- 🎯 **Focus on understanding, not memorizing**
- 💻 **Practice on real problems** from your projects
- 🤝 **Join communities** to ask questions
- 📝 **Keep a pattern library** of useful patterns you create

---

## 📘 Core Concepts

---

## 1️⃣ Basic Characters & Literal Matching

> **Estimated time:** 15 minutes
> **Difficulty:** ⭐☆☆☆☆

### The Simplest Pattern

Most characters match themselves exactly:

```javascript
/cat/.test("cat")           // ✅ true - exact match
/cat/.test("I have a cat")  // ✅ true - found inside
/cat/.test("dog")           // ❌ false - not found
```

### Case Sensitivity

By default, RegEx is **case-sensitive**:

```javascript
/cat/.test("cat")    // ✅ true
/cat/.test("Cat")    // ❌ false - different case!
/cat/.test("CAT")    // ❌ false
```

**💡 Pro Tip:** Add the `i` flag to ignore case (we'll learn flags later)

---

## 2️⃣ Character Classes

> **Estimated time:** 30 minutes
> **Difficulty:** ⭐⭐☆☆☆

### What Are Character Classes?

Character classes let you match **one character from a set**.

Syntax: `[characters]`

### Basic Examples

```javascript
// [abc] = Match 'a' OR 'b' OR 'c'
/[abc]/.test("apple")     // ✅ true (has 'a')
/[abc]/.test("banana")    // ✅ true (has 'a', 'b')
/[abc]/.test("dog")       // ❌ false (no a, b, or c)
```

### Ranges

Instead of listing every character, use ranges:

```javascript
// [a-z] = Any lowercase letter
/[a-z]/.test("hello")     // ✅ true

// [A-Z] = Any uppercase letter
/[A-Z]/.test("HELLO")     // ✅ true

// [0-9] = Any digit
/[0-9]/.test("42")        // ✅ true

// Combine ranges!
/[a-zA-Z0-9]/.test("Test123")  // ✅ true
```

### Negated Classes: `[^...]`

The `^` inside brackets means **"NOT"**:

```javascript
// [^0-9] = Any character that is NOT a digit
/[^0-9]/.test("hello")    // ✅ true (has non-digits)
/[^0-9]/.test("123")      // ❌ false (only digits)
```

### Shorthand Classes (Super Important!)

These shortcuts save tons of time:

| Shorthand | Meaning                | Same As          |
| --------- | ---------------------- | ---------------- |
| `\d`      | **D**igit              | `[0-9]`          |
| `\D`      | **NOT** digit          | `[^0-9]`         |
| `\w`      | **W**ord character     | `[a-zA-Z0-9_]`   |
| `\W`      | **NOT** word character | `[^a-zA-Z0-9_]`  |
| `\s`      | White**s**pace         | `[ \t\n\r]`      |
| `\S`      | **NOT** whitespace     | `[^ \t\n\r]`     |
| `.`       | **Any** character      | (except newline) |

```javascript
// Practical examples
/\d/.test("I am 25")           // ✅ true (found "25")
/\w/.test("hello_world")       // ✅ true (all word chars)
/\s/.test("hello world")       // ✅ true (has space)
```

### 🎯 Practice Exercise #1

Try to match these:

1. Any vowel (a, e, i, o, u)
2. Any digit between 5-9
3. Any character that's not a letter

<details>
<summary>💡 Show Solutions</summary>

```javascript
// 1. Any vowel
/[aeiou]/ /
  // 2. Digit 5-9
  [5 - 9] /
  // 3. Not a letter
  /[^a-zA-Z]/;
```

</details>

---

## 3️⃣ Quantifiers

> **Estimated time:** 45 minutes
> **Difficulty:** ⭐⭐⭐☆☆

### What Are Quantifiers?

Quantifiers tell RegEx **how many times** a pattern should repeat.

### The Big Six Quantifiers

| Symbol  | Meaning                    | Example  | Matches                      |
| ------- | -------------------------- | -------- | ---------------------------- |
| `*`     | **Zero or more**           | `a*`     | "", "a", "aa", "aaa"         |
| `+`     | **One or more**            | `a+`     | "a", "aa", "aaa"             |
| `?`     | **Zero or one** (optional) | `a?`     | "" or "a"                    |
| `{3}`   | **Exactly 3**              | `a{3}`   | "aaa" only                   |
| `{2,5}` | **Between 2 and 5**        | `a{2,5}` | "aa", "aaa", "aaaa", "aaaaa" |
| `{3,}`  | **3 or more**              | `a{3,}`  | "aaa", "aaaa", "aaaaa"...    |

### Examples: `*` (Zero or More)

```javascript
/ba*/.test("b")        // ✅ true (zero a's)
/ba*/.test("ba")       // ✅ true (one a)
/ba*/.test("baaaa")    // ✅ true (many a's)
```

**Real-world use:** Optional plural "s"

```javascript
/cats?/; // Matches "cat" or "cats"
```

### Examples: `+` (One or More)

```javascript
/ba+/.test("b")        // ❌ false (needs at least one 'a')
/ba+/.test("ba")       // ✅ true
/ba+/.test("baaaa")    // ✅ true
```

**Real-world use:** At least one digit

```javascript
/\d+/; // Matches "5", "42", "12345"
```

### Examples: `?` (Zero or One)

```javascript
/colou?r/.test("color")    // ✅ true (American)
/colou?r/.test("colour")   // ✅ true (British)
/colou?r/.test("colouur")  // ❌ false (too many u's!)
```

### Examples: `{n}` (Exact Count)

```javascript
/\d{4}/.test("1234")      // ✅ true
/\d{4}/.test("12")        // ❌ false (only 2 digits)

// PIN code: exactly 4 digits
/^\d{4}$/.test("1234")    // ✅ true
```

### Examples: `{n,m}` (Range)

```javascript
// Username: 3-15 characters
/^[a-z]{3,15}$/.test("jo")       // ❌ false (too short)
/^[a-z]{3,15}$/.test("john")     // ✅ true
/^[a-z]{3,15}$/.test("johnsmith") // ✅ true
```

### Visual Guide

```
Pattern: /a{2,4}/

Input: "a"      → ❌ (need at least 2)
Input: "aa"     → ✅
Input: "aaa"    → ✅
Input: "aaaa"   → ✅
Input: "aaaaa"  → ✅ (matches first 4)
```

### 🎯 Practice Exercise #2

Create patterns for:

1. Match 3 to 5 digits
2. Match one or more spaces
3. Match "ha" repeated 2+ times (haha, hahaha, etc.)

<details>
<summary>💡 Show Solutions</summary>

```javascript
// 1. 3 to 5 digits
/\d{3,5}/

// 2. One or more spaces
/\s+/

// 3. "ha" repeated 2+ times
/(ha){2,}/
```

</details>

---

## 4️⃣ Anchors & Boundaries

> **Estimated time:** 30 minutes
> **Difficulty:** ⭐⭐☆☆☆

### What Are Anchors?

Anchors don't match characters - they match **positions** in text.

### The Four Main Anchors

| Anchor | Meaning               | Example                      |
| ------ | --------------------- | ---------------------------- |
| `^`    | **Start** of string   | `^cat` = starts with "cat"   |
| `$`    | **End** of string     | `cat$` = ends with "cat"     |
| `\b`   | **Word boundary**     | `\bcat\b` = whole word "cat" |
| `\B`   | **NOT** word boundary | `\Bcat` = "cat" inside word  |

### `^` Start Anchor

```javascript
/^cat/.test("cat")           // ✅ true (starts with cat)
/^cat/.test("my cat")        // ❌ false (doesn't start with cat)
/^cat/.test("catch")         // ✅ true (starts with cat)
```

### `$` End Anchor

```javascript
/cat$/.test("cat")           // ✅ true (ends with cat)
/cat$/.test("my cat")        // ✅ true (ends with cat)
/cat$/.test("cats")          // ❌ false (ends with 's')
```

### `^...$` Exact Match (Both Together!)

```javascript
/^cat$/.test("cat")          // ✅ true (exactly "cat")
/^cat$/.test("cats")         // ❌ false
/^cat$/.test("my cat")       // ❌ false
/^cat$/.test("catch")        // ❌ false
```

**💡 Pro Tip:** Use `^...$` for form validation!

### `\b` Word Boundary

A word boundary is between `\w` and `\W`:

```javascript
/\bcat\b/.test("cat")              // ✅ true
/\bcat\b/.test("the cat sat")      // ✅ true
/\bcat\b/.test("concatenate")      // ❌ false ('cat' is inside)
/\bcat\b/.test("bobcat")           // ❌ false ('cat' is inside)
```

### Visual Example

```
Text: "I have a cat named Whiskers"

/cat/       → ✅ Matches (anywhere)
/^cat/      → ❌ Doesn't start with "cat"
/cat$/      → ❌ Doesn't end with "cat"
/^I/        → ✅ Starts with "I"
/Whiskers$/ → ✅ Ends with "Whiskers"
/\bcat\b/   → ✅ "cat" is a whole word
```

### 🎯 Practice Exercise #3

1. Match lines that start with "#" (like Markdown headers)
2. Match a complete word "test" (not "testing" or "contest")
3. Match strings that are exactly 5 characters

<details>
<summary>💡 Show Solutions</summary>

```javascript
// 1. Lines starting with #
/^#/

// 2. Exact word "test"
/\btest\b/

// 3. Exactly 5 characters
/^.{5}$/
```

</details>

---

## 5️⃣ Groups & Alternation

> **Estimated time:** 30 minutes
> **Difficulty:** ⭐⭐⭐☆☆

### Grouping with `()`

Parentheses create groups:

```javascript
// Without grouping
/ab+/       // Matches: "ab", "abb", "abbb"

// With grouping
/(ab)+/     // Matches: "ab", "abab", "ababab"
```

### Capturing Groups

Groups "capture" matched text for reuse:

```javascript
const text = "John Smith";
const match = text.match(/(\w+) (\w+)/);

console.log(match[0]); // "John Smith" (full match)
console.log(match[1]); // "John" (first group)
console.log(match[2]); // "Smith" (second group)
```

### Non-Capturing Groups `(?:...)`

When you need grouping but don't need to capture:

```javascript
// Capturing (stores in memory)
/(\d{3})-(\d{4})/

// Non-capturing (doesn't store)
/(?:\d{3})-(\d{4})/  // Only captures second group
```

### Alternation `|` (OR)

The pipe means "or":

```javascript
/cat|dog/.test("I have a cat")   // ✅ true
/cat|dog/.test("I have a dog")   // ✅ true
/cat|dog/.test("I have a bird")  // ❌ false
```

### Alternation with Groups

```javascript
// Match common titles
/(Mr|Mrs|Ms|Dr)\./.test("Mr.")   // ✅ true
/(Mr|Mrs|Ms|Dr)\./.test("Dr.")   // ✅ true
/(Mr|Mrs|Ms|Dr)\./.test("Prof.") // ❌ false
```

**⚠️ Important:** Order matters!

```javascript
/cat|category/.test("category")   // Matches "cat" (first option wins)
/category|cat/.test("category")   // Matches "category"
```

### 🎯 Practice Exercise #4

1. Match "gray" or "grey"
2. Match repeated "na" followed by " Batman!" (e.g., "nana Batman!")
3. Match file extensions: .jpg, .png, or .gif

<details>
<summary>💡 Show Solutions</summary>

```javascript
// 1. Gray or grey
/gr[ae]y/  // or /gr(a|e)y/

// 2. Na na Batman
/(na)+\sBatman!/

// 3. Image extensions
/\.(jpg|png|gif)$/
```

</details>

---

## 6️⃣ Special Characters & Escaping

> **Estimated time:** 20 minutes
> **Difficulty:** ⭐⭐☆☆☆

### Characters That Need Escaping

These have special meanings in RegEx:

```
. * + ? ^ $ { } [ ] \ | ( )
```

To match them literally, add `\` before them:

```javascript
// Match a literal period
/\./.test("file.txt")         // ✅ true
/./.test("file.txt")          // ✅ true (but . means "any char"!)

// Match a literal dollar sign
/\$/.test("$100")             // ✅ true

// Match literal brackets
/\[code\]/.test("[code]")     // ✅ true

// Match literal question mark
/\?/.test("Really?")          // ✅ true
```

### Common Escaping Patterns

| Pattern   | Matches       | Example    |
| --------- | ------------- | ---------- |
| `\.`      | Period        | `file.txt` |
| `\$`      | Dollar sign   | `$100`     |
| `\(` `\)` | Parentheses   | `(note)`   |
| `\[` `\]` | Brackets      | `[1]`      |
| `\?`      | Question mark | `What?`    |
| `\+`      | Plus sign     | `1+1`      |
| `\*`      | Asterisk      | `2*3`      |
| `\\`      | Backslash     | `C:\path`  |

### 🎯 Practice Exercise #5

Match these literally:

1. "What?"
2. "$19.99"
3. "C:\Users\Desktop"

<details>
<summary>💡 Show Solutions</summary>

```javascript
// 1. What?
/What\?/

// 2. $19.99
/\$19\.99/

// 3. C:\Users\Desktop
/C:\\Users\\Desktop/
```

</details>

---

## 7️⃣ Flags & Modifiers

> **Estimated time:** 20 minutes
> **Difficulty:** ⭐⭐☆☆☆

### What Are Flags?

Flags modify how RegEx behaves. Added after the closing `/`:

```javascript
/pattern/flags
```

### The Essential Flags

| Flag | Name                 | What It Does            | Example                    |
| ---- | -------------------- | ----------------------- | -------------------------- |
| `i`  | **Case insensitive** | Ignore upper/lowercase  | `/hello/i` matches "HELLO" |
| `g`  | **Global**           | Find all matches        | `/a/g` finds all 'a's      |
| `m`  | **Multiline**        | `^` `$` match each line | `/^test/m`                 |
| `s`  | **Dotall**           | `.` matches newlines    | `/a.b/s` matches "a\nb"    |

### Flag: `i` (Case Insensitive)

```javascript
/hello/.test("HELLO") / // ❌ false (case matters)
  hello /
  i.test("HELLO") / // ✅ true (case ignored!)
  hello /
  i.test("HeLLo"); // ✅ true
```

### Flag: `g` (Global)

Without `g`, only finds first match:

```javascript
"hello world".match(/o/); // ["o"] (first 'o' only)
"hello world".match(/o/g); // ["o", "o"] (all 'o's)

// Replace example
"hello world".replace(/o/, "0"); // "hell0 world"
"hello world".replace(/o/g, "0"); // "hell0 w0rld"
```

### Flag: `m` (Multiline)

```javascript
const text = "line1\nline2\nline3";

text.match(/^line/); // ["line"] (first line only)
text.match(/^line/gm); // ["line", "line", "line"] (all lines!)
```

### Combining Flags

```javascript
/test/gi    // Global + Case insensitive
/^#.*/gm    // Global + Multiline (all lines starting with #)
```

---

## 8️⃣ Lookaheads & Lookbehinds (Advanced)

> **Estimated time:** 45 minutes
> **Difficulty:** ⭐⭐⭐⭐☆

### What Are Lookarounds?

Lookarounds check if a pattern exists **without including it** in the match.

| Type                | Syntax     | Meaning                      |
| ------------------- | ---------- | ---------------------------- |
| Positive Lookahead  | `(?=...)`  | Match if **followed by**     |
| Negative Lookahead  | `(?!...)`  | Match if **NOT followed by** |
| Positive Lookbehind | `(?<=...)` | Match if **preceded by**     |
| Negative Lookbehind | `(?<!...)` | Match if **NOT preceded by** |

### Positive Lookahead `(?=...)`

```javascript
// Match "test" only if followed by "ing"
/test(?=ing)/.test("testing")    // ✅ true
/test(?=ing)/.test("tested")     // ❌ false

// Password must contain a digit (lookahead doesn't consume it)
/^(?=.*\d).{8,}$/
```

### Negative Lookahead `(?!...)`

```javascript
// Match "test" NOT followed by "ing"
/test(?!ing)/.test("tested")     // ✅ true
/test(?!ing)/.test("testing")    // ❌ false
```

### Practical Example: Strong Password

```javascript
// Must have: 8+ chars, uppercase, lowercase, digit, special char
const strongPass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

strongPass.test("Pass123!"); // ✅ true
strongPass.test("password"); // ❌ false (missing requirements)
```

**How it works:**

- `(?=.*[a-z])` - Contains lowercase
- `(?=.*[A-Z])` - Contains uppercase
- `(?=.*\d)` - Contains digit
- `(?=.*[@$!%*?&])` - Contains special char
- `[A-Za-z\d@$!%*?&]{8,}` - 8+ allowed chars

---

## 9️⃣ Greedy vs Lazy Matching

> **Estimated time:** 30 minutes
> **Difficulty:** ⭐⭐⭐⭐☆

### The Problem with Greedy

By default, quantifiers are **greedy** - they match as much as possible:

```javascript
const html = "<div>Hello</div><div>World</div>";

html.match(/<div>.*<\/div>/);
// ❌ ["<div>Hello</div><div>World</div>"] - matches too much!
```

### Solution: Lazy Quantifiers

Add `?` after the quantifier to make it **lazy** (match as little as possible):

```javascript
html.match(/<div>.*?<\/div>/g);
// ✅ ["<div>Hello</div>", "<div>World</div>"] - perfect!
```

### Lazy Quantifiers

| Greedy  | Lazy     | Behavior            |
| ------- | -------- | ------------------- |
| `*`     | `*?`     | Zero or more (lazy) |
| `+`     | `+?`     | One or more (lazy)  |
| `?`     | `??`     | Zero or one (lazy)  |
| `{n,}`  | `{n,}?`  | n or more (lazy)    |
| `{n,m}` | `{n,m}?` | n to m (lazy)       |

### Visual Comparison

```
Text: "aaaa"

/a+/    → Matches: "aaaa" (greedy, takes all)
/a+?/   → Matches: "a" (lazy, takes minimum)
```

---

## 💼 Common Validation Patterns Library

> Copy-paste these battle-tested patterns!

### Username

```javascript
// 3-15 chars: letters, numbers, underscore
/^[a-zA-Z0-9_]{3,15}$/

✅ "john_doe", "user123"
❌ "ab", "user name", "user@123"
```

### Email (Simple)

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

✅ "user@example.com", "name@mail.co"
❌ "user@com", "@example.com"
```

### Password (Strong)

```javascript
// Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

✅ "Pass123!", "SecureP@ss1"
❌ "password", "PASSWORD123"
```

### Phone (US)

```javascript
// 10 digits only
/^\d{10}$/

// Flexible: (123) 456-7890 or 123-456-7890
/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/

✅ "1234567890", "(123) 456-7890", "123-456-7890"
```

### URL

```javascript
/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

✅ "https://example.com", "http://www.site.org/path"
❌ "example.com", "ftp://files.com"
```

### Date (DD/MM/YYYY)

```javascript
/^\d{2}\/\d{2}\/\d{4}$/

✅ "25/12/2025", "01/01/2024"
❌ "1/1/2025", "2025-12-25"
```

### Credit Card (16 digits)

```javascript
// 16 digits: 1234567890123456
/^\d{16}$/

// With spaces/dashes: 1234-5678-9012-3456
/^(\d{4}[-\s]?){3}\d{4}$/

✅ "1234567890123456", "1234-5678-9012-3456"
```

### Hex Color

```javascript
// 6 digits: #FF5733
/^#[0-9A-Fa-f]{6}$/

// 3 or 6 digits: #FFF or #FF5733
/^#([0-9A-Fa-f]{3}){1,2}$/

✅ "#FF5733", "#fff", "#AbCdEf"
❌ "#FG5733", "FF5733"
```

### IP Address (IPv4)

```javascript
// Simple (allows invalid like 999.999.999.999)
/^(\d{1,3}\.){3}\d{1,3}$/

✅ "192.168.1.1", "10.0.0.1"
```

### Zip Code (US)

```javascript
// 5 digits or 5+4: 12345 or 12345-6789
/^\d{5}(-\d{4})?$/

✅ "12345", "12345-6789"
❌ "1234", "12345-678"
```

---

## 🎯 Real-World Examples

### Example 1: Complete Form Validator

```javascript
function validateForm(data) {
  const patterns = {
    username: /^[a-zA-Z0-9_]{3,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  const errors = {};

  if (!patterns.username.test(data.username)) {
    errors.username =
      "Username must be 3-15 characters (letters, numbers, underscore)";
  }

  if (!patterns.email.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!patterns.phone.test(data.phone)) {
    errors.phone = "Phone must be 10 digits";
  }

  if (!patterns.password.test(data.password)) {
    errors.password =
      "Password must be 8+ chars with uppercase, lowercase, digit, and special character";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Usage
const result = validateForm({
  username: "john_doe",
  email: "john@example.com",
  phone: "1234567890",
  password: "SecureP@ss1",
});

console.log(result);
// { isValid: true, errors: {} }
```

### Example 2: Extract Data from Text

```javascript
const text = `
Contact us:
Email: support@example.com
Phone: (123) 456-7890
Website: https://example.com
Price: $99.99
`;

// Extract email
const email = text.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
console.log(email[0]); // "support@example.com"

// Extract phone
const phone = text.match(/\(\d{3}\)\s\d{3}-\d{4}/);
console.log(phone[0]); // "(123) 456-7890"

// Extract URL
const url = text.match(/https?:\/\/[^\s]+/);
console.log(url[0]); // "https://example.com"

// Extract price
const price = text.match(/\$[\d.]+/);
console.log(price[0]); // "$99.99"
```

### Example 3: Clean User Input

```javascript
function cleanInput(text) {
  return text
    .replace(/\s+/g, " ") // Multiple spaces → single space
    .replace(/[^\w\s@.-]/g, "") // Remove special chars (except @.-)
    .trim(); // Remove leading/trailing spaces
}

console.log(cleanInput("  hello   world!!!  "));
// "hello world"
```

### Example 4: Format Phone Numbers

```javascript
function formatPhone(phone) {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

  return phone; // Return original if invalid
}

console.log(formatPhone("1234567890")); // "(123) 456-7890"
console.log(formatPhone("123-456-7890")); // "(123) 456-7890"
```

### Example 5: Parse CSV Line

```javascript
function parseCSV(line) {
  // Split by comma, but not commas inside quotes
  return line
    .match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
    .map((field) => field.replace(/^"|"$/g, "")); // Remove quotes
}

const csv = 'John Doe,"123 Main St, Apt 4",john@example.com';
console.log(parseCSV(csv));
// ["John Doe", "123 Main St, Apt 4", "john@example.com"]
```

---

## 🏋️ Practice Exercises (with Solutions)

### Beginner Level

**Exercise 1:** Match any 3-digit number

<details>
<summary>Solution</summary>

```javascript
/\d{3}/
// or with boundaries for exact match:
/^\d{3}$/
```

</details>

**Exercise 2:** Match words starting with "app"

<details>
<summary>Solution</summary>

```javascript
/\bapp\w*/;
// Explanation: \b = word boundary, app = literal, \w* = zero or more word chars
```

</details>

**Exercise 3:** Match valid hex color codes (#FFF or #FFFFFF)

<details>
<summary>Solution</summary>

```javascript
/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
```

</details>

### Intermediate Level

**Exercise 4:** Match time in HH:MM format (24-hour)

<details>
<summary>Solution</summary>

```javascript
/^([01]\d|2[0-3]):([0-5]\d)$/;
// Explanation:
// ([01]\d|2[0-3]) = 00-23 hours
// ([0-5]\d) = 00-59 minutes
```

</details>

**Exercise 5:** Extract hashtags from tweet

<details>
<summary>Solution</summary>

```javascript
const tweet = "Learning #JavaScript and #RegEx is fun! #coding";
const hashtags = tweet.match(/#\w+/g);
console.log(hashtags); // ["#JavaScript", "#RegEx", "#coding"]
```

</details>

**Exercise 6:** Validate username: 3-16 chars, starts with letter, alphanumeric + underscore

<details>
<summary>Solution</summary>

```javascript
/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
// Explanation:
// ^[a-zA-Z] = starts with letter
// [a-zA-Z0-9_]{2,15} = followed by 2-15 allowed chars (total 3-16)
// $ = end of string
```

</details>

### Advanced Level

**Exercise 7:** Match valid IPv4 address (strict)

<details>
<summary>Solution</summary>

```javascript
/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
// This ensures each octet is 0-255
```

</details>

**Exercise 8:** Password validator: 8+ chars, must contain uppercase, lowercase, digit, NO spaces

<details>
<summary>Solution</summary>

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/;
// (?=.*[a-z]) = has lowercase
// (?=.*[A-Z]) = has uppercase
// (?=.*\d) = has digit
// (?!.*\s) = NO spaces (negative lookahead)
// .{8,} = 8+ characters
```

</details>

**Exercise 9:** Extract image URLs from HTML

<details>
<summary>Solution</summary>

```javascript
const html = '<img src="photo.jpg"> <img src="avatar.png">';
const imageUrls = html
  .match(/src="([^"]+)"/g)
  .map((match) => match.replace(/src="|"/g, ""));
console.log(imageUrls); // ["photo.jpg", "avatar.png"]
```

</details>

---

## 📋 Complete Cheat Sheet

### Quick Reference

```
BASICS
------
abc         Literal characters
[abc]       Character class (a OR b OR c)
[^abc]      Negated class (NOT a, b, or c)
[a-z]       Range (a through z)
.           Any character (except newline)

SHORTCUTS
---------
\d          Digit [0-9]
\D          Non-digit
\w          Word character [a-zA-Z0-9_]
\W          Non-word character
\s          Whitespace
\S          Non-whitespace

QUANTIFIERS
-----------
*           Zero or more
+           One or more
?           Zero or one (optional)
{3}         Exactly 3
{3,}        3 or more
{3,5}       Between 3 and 5
*?          Lazy (match minimum)

ANCHORS
-------
^           Start of string/line
$           End of string/line
\b          Word boundary
\B          Not word boundary

GROUPS
------
(abc)       Capturing group
(?:abc)     Non-capturing group
\1          Backreference to group 1
a|b         Alternation (a OR b)

LOOKAROUNDS
-----------
(?=abc)     Positive lookahead
(?!abc)     Negative lookahead
(?<=abc)    Positive lookbehind
(?<!abc)    Negative lookbehind

FLAGS
-----
/pattern/i  Case insensitive
/pattern/g  Global (all matches)
/pattern/m  Multiline
/pattern/s  Dotall (. matches newlines)

ESCAPING
--------
\.          Literal period
\*          Literal asterisk
\+          Literal plus
\?          Literal question mark
\^          Literal caret
\$          Literal dollar
\\          Literal backslash
\(  \)      Literal parentheses
\[  \]      Literal brackets
```

### JavaScript Methods

```javascript
// Test if pattern matches
pattern.test(string); // → true/false

// Find first match
string.match(pattern); // → [match, groups] or null

// Find all matches (with /g flag)
string.match(/pattern/g); // → [match1, match2, ...] or null

// Replace matches
string.replace(pattern, replacement); // → new string

// Find position of match
string.search(pattern); // → index or -1

// Split by pattern
string.split(pattern); // → array
```

---

## ⚠️ Common Mistakes & How to Avoid Them

### ❌ Mistake 1: Not Escaping Special Characters

```javascript
// WRONG
/file.txt/.test("fileXtxt")      // ✅ true (oops! . = any char)

// CORRECT
/file\.txt/.test("fileXtxt")     // ❌ false
```

### ❌ Mistake 2: Forgetting Anchors

```javascript
// WRONG - matches "cat" anywhere
/cat/.test("concatenate")        // ✅ true (not what we want)

// CORRECT - exact match
/^cat$/.test("concatenate")      // ❌ false
```

### ❌ Mistake 3: Greedy Quantifiers

```javascript
// WRONG - too greedy
"<b>text</b>".match(/<.*>/); // "<b>text</b>" (matches everything)

// CORRECT - use lazy
"<b>text</b>".match(/<.*?>/g); // ["<b>", "</b>"]
```

### ❌ Mistake 4: Case Sensitivity

```javascript
// WRONG
/hello/.test("HELLO") / // ❌ false
  // CORRECT - use 'i' flag
  hello /
  i.test("HELLO"); // ✅ true
```

### ❌ Mistake 5: Not Using Global Flag

```javascript
// WRONG - only replaces first match
"oo oo".replace(/o/, "0"); // "0o oo"

// CORRECT - use 'g' flag
"oo oo".replace(/o/g, "0"); // "00 00"
```

### ❌ Mistake 6: Overcomplicating

```javascript
// WRONG - regex overkill
/^true$/.test(value);

// CORRECT - simple comparison
value === "true";
```

### ❌ Mistake 7: Not Validating Match Results

```javascript
// WRONG - may crash if no match
const match = text.match(/pattern/);
console.log(match[1]); // ERROR if match is null!

// CORRECT - check first
const match = text.match(/pattern/);
if (match) {
  console.log(match[1]); // Safe
}
```

---

## 📚 Learning Resources & Next Steps

### 🎓 Interactive Learning Platforms

#### **Beginner-Friendly**

1. **[RegexOne](https://regexone.com/)** ⭐⭐⭐⭐⭐

   - FREE interactive lessons
   - Perfect for absolute beginners
   - 25 lessons with instant feedback
   - Best starting point!

2. **[Regex101](https://regex101.com/)** ⭐⭐⭐⭐⭐

   - FREE pattern tester with explanations
   - Shows what each part of your regex does
   - Real-time matching visualization
   - Save and share patterns
   - **USE THIS while learning!**

3. **[RegexLearn](https://regexlearn.com/)** ⭐⭐⭐⭐
   - FREE gamified learning
   - Step-by-step interactive challenges
   - Great visual design
   - Multiple languages supported

#### **Practice & Challenges**

4. **[Regex Crossword](https://regexcrossword.com/)** ⭐⭐⭐⭐

   - FREE puzzle game
   - Fun way to practice
   - Different difficulty levels

5. **[HackerRank Regex](https://www.hackerrank.com/domains/regex)** ⭐⭐⭐⭐

   - FREE coding challenges
   - Earn badges and rank up
   - Real interview-style problems

6. **[Codewars Regex Katas](https://www.codewars.com/kata/search/regex)** ⭐⭐⭐⭐
   - FREE coding challenges
   - Community solutions to learn from
   - Various difficulty levels

### 📺 YouTube Channels & Videos

#### **Best Single Videos (Under 1 hour)**

1. **[Web Dev Simplified - Learn Regular Expressions In 20 Minutes](https://www.youtube.com/watch?v=rhzKDrUiJVk)** ⭐⭐⭐⭐⭐

   - Perfect crash course
   - Clear explanations with examples
   - 24 minutes

2. **[Fireship - RegEx in 100 Seconds](https://www.youtube.com/watch?v=sXQxhojSdZM)** ⭐⭐⭐⭐

   - Ultra-quick overview
   - Great for motivation
   - 2 minutes

3. **[Corey Schafer - Python Regular Expressions](https://www.youtube.com/watch?v=K8L6KVGG-7o)** ⭐⭐⭐⭐⭐

   - Comprehensive tutorial
   - Python-based but concepts apply everywhere
   - 1 hour

4. **[The Coding Train - Regex Programming](https://www.youtube.com/watch?v=7DG3kCDx53c)** ⭐⭐⭐⭐
   - Fun, engaging style
   - JavaScript-focused
   - 28 minutes

#### **Video Series**

5. **[FreeCodeCamp - Regular Expressions Course](https://www.youtube.com/watch?v=909NfO1St0A)** ⭐⭐⭐⭐⭐
   - Complete course
   - 2+ hours of content
   - Beginner to advanced

### 📖 Official Documentation

1. **[MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)** ⭐⭐⭐⭐⭐

   - Most authoritative source for JavaScript
   - Clear examples
   - Complete reference

2. **[JavaScript.info - Regular Expressions](https://javascript.info/regular-expressions)** ⭐⭐⭐⭐⭐

   - Modern, well-written tutorial
   - Progressive difficulty
   - Interactive examples

3. **[Regular-Expressions.info](https://www.regular-expressions.info/)** ⭐⭐⭐⭐
   - Comprehensive reference
   - Covers all regex flavors
   - In-depth explanations

### 📚 Books

1. **"Mastering Regular Expressions"** by Jeffrey Friedl ⭐⭐⭐⭐⭐

   - The definitive guide
   - In-depth coverage
   - Best for serious learners

2. **"Regular Expressions Cookbook"** by Jan Goyvaerts ⭐⭐⭐⭐
   - Problem-solution format
   - Real-world examples
   - Quick reference

### 🛠️ Essential Tools

1. **[Regex101](https://regex101.com/)** - Best overall tester
2. **[RegExr](https://regexr.com/)** - Great visual design
3. **[Debuggex](https://www.debuggex.com/)** - Visual regex diagrams
4. **[RegexPal](https://www.regexpal.com/)** - Simple, fast tester

### 🎯 Learning Path Recommendation

**Week 1-2: Foundations**

1. Watch: "Web Dev Simplified - RegEx in 20 Minutes"
2. Complete: RegexOne lessons 1-10
3. Practice: Use Regex101 for every example
4. Read: This guide sections 1-4

**Week 3-4: Intermediate**

1. Complete: RegexOne lessons 11-25
2. Read: This guide sections 5-7
3. Practice: HackerRank Easy challenges
4. Watch: Corey Schafer tutorial

**Week 5-6: Advanced**

1. Read: This guide sections 8-9
2. Practice: Regex Crossword puzzles
3. Try: Codewars Regex Katas
4. Read: MDN Documentation

**Week 7+: Mastery**

1. Build real projects using regex
2. Challenge: 1 HackerRank problem daily
3. Read: "Mastering Regular Expressions"
4. Share knowledge by helping others!

### 💡 Pro Tips for Success

1. **Practice daily** - Even 10 minutes helps
2. **Type, don't copy-paste** - Build muscle memory
3. **Test everything** - Use Regex101 constantly
4. **Start simple** - Add complexity gradually
5. **Learn from mistakes** - They're your best teacher
6. **Join communities** - r/regex on Reddit, Stack Overflow
7. **Build real projects** - Apply to your actual work
8. **Teach others** - Best way to solidify knowledge

### 🤝 Community & Help

- **[r/regex](https://www.reddit.com/r/regex/)** - Reddit community
- **[Stack Overflow Regex Tag](https://stackoverflow.com/questions/tagged/regex)** - Q&A
- **[RegEx Discord Servers](https://discord.gg/code)** - Real-time help

---

## 🎓 Final Tips

### When to Use RegEx

✅ Pattern matching in text
✅ Input validation
✅ Data extraction
✅ Search and replace
✅ Text processing

### When NOT to Use RegEx

❌ Parsing HTML/XML (use a parser instead)
❌ Simple string operations (`===`, `.includes()` are faster)
❌ Complex nested structures
❌ When readability matters more than conciseness

### Remember

- **Start simple, add complexity gradually**
- **Test thoroughly with edge cases**
- **Comment complex patterns**
- **Consider performance for large text**
- **Know when simple string methods are better**

---

## 🎉 You're Ready!

You now have:

- ✅ Complete RegEx knowledge from beginner to advanced
- ✅ A library of common patterns
- ✅ Real-world examples
- ✅ Practice exercises
- ✅ The best learning resources
- ✅ A clear learning path

### Next Steps:

1. Bookmark this guide
2. Sign up for [RegexOne](https://regexone.com/)
3. Open [Regex101](https://regex101.com/) in a new tab
4. Start practicing NOW!

Remember: **The only way to learn RegEx is by doing!**

Start with simple patterns and build up. You've got this! 💪

---

**Happy Regex Learning! 🚀**

_Questions or feedback? Share this guide and help others learn!_
