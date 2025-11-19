# F7: Regular Expressions

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F7: Regular Expressions (Weeks 8-12)

> **Why this matters:** Every validation, every search, every text processing task uses regex. Log parsing, data extraction, find-and-replace — regex is everywhere.

> **Time Investment:** ~20 min/day | **Total:** ~10 hours over 5 weeks

**What to Learn:**

**Week 8-9: Basics**

```text
LITERAL CHARACTERS
abc                 Matches "abc"
123                 Matches "123"

METACHARACTERS (have special meaning)
.                   Any single character (except newline)
^                   Start of line/string
$                   End of line/string
*                   Zero or more of previous
+                   One or more of previous
?                   Zero or one of previous
\                   Escape special character
|                   OR (alternation)
()                  Grouping
[]                  Character class

CHARACTER CLASSES
[abc]               a, b, or c
[^abc]              NOT a, b, or c
[a-z]               Any lowercase letter
[A-Z]               Any uppercase letter
[0-9]               Any digit
[a-zA-Z0-9]         Any alphanumeric

SHORTHAND CHARACTER CLASSES
\d                  Digit [0-9]
\D                  Non-digit [^0-9]
\w                  Word character [a-zA-Z0-9_]
\W                  Non-word character
\s                  Whitespace (space, tab, newline)
\S                  Non-whitespace

ANCHORS
^                   Start of line
$                   End of line
\b                  Word boundary
\B                  Non-word boundary
```

**Week 10: Quantifiers & Groups**

```text
QUANTIFIERS
*                   0 or more
+                   1 or more
?                   0 or 1 (optional)
{n}                 Exactly n times
{n,}                n or more times
{n,m}               Between n and m times

GREEDY VS LAZY
.*                  Greedy: match as much as possible
.*?                 Lazy: match as little as possible
.+?                 Lazy one or more
.??                 Lazy zero or one

Example:
Input: <tag>content</tag>
<.*>                Matches: <tag>content</tag> (greedy)
<.*?>               Matches: <tag> (lazy)

GROUPS
(abc)               Capturing group
(?:abc)             Non-capturing group
(a|b)               a OR b

BACKREFERENCES
\1, \2, etc.        Reference to captured group
Example:
(\w+)\s+\1          Matches repeated words: "the the"
```

**Week 11-12: Advanced**

```text
LOOKAHEAD (look forward without consuming)
(?=pattern)         Positive lookahead (followed by)
(?!pattern)         Negative lookahead (not followed by)

Examples:
\d+(?=px)           Digits followed by "px" (matches "100" in "100px")
\d+(?!px)           Digits NOT followed by "px"

LOOKBEHIND (look backward without consuming)
(?<=pattern)        Positive lookbehind (preceded by)
(?<!pattern)        Negative lookbehind (not preceded by)

Examples:
(?<=\$)\d+          Digits preceded by "$" (matches "50" in "$50")
(?<!\$)\d+          Digits NOT preceded by "$"

FLAGS
g                   Global (find all matches)
i                   Case insensitive
m                   Multiline (^ and $ match line boundaries)
s                   Dotall (. matches newline too)

COMMON PATTERNS
Email (simple):     ^[\w.-]+@[\w.-]+\.\w+$
URL:                https?://[\w.-]+(?:/[\w.-]*)*
Phone:              \d{3}[-.]?\d{3}[-.]?\d{4}
Date (YYYY-MM-DD):  \d{4}-\d{2}-\d{2}
IP Address:         \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}
```

**Resources:**

| Resource                 | Purpose             | Link                                  |
| ------------------------ | ------------------- | ------------------------------------- |
| RegexOne                 | Interactive lessons | https://regexone.com/                 |
| Regex101                 | Test and debug      | https://regex101.com/                 |
| RegexLearn               | Gamified            | https://regexlearn.com/               |
| Regular-Expressions.info | Reference           | https://www.regular-expressions.info/ |
| Regex Crossword          | Practice            | https://regexcrossword.com/           |

**Milestones:**

- [ ] Week 9: Match basic patterns (emails, phone numbers)
- [ ] Week 10: Use groups and backreferences
- [ ] Week 12: Write a regex that would have taken 100 lines of code

---

