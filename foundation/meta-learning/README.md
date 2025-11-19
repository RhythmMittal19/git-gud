# F8: Meta-Learning & Problem Solving

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F8: Meta-Learning & Problem Solving (Ongoing)

> **Why this matters:** How you learn matters more than what you learn first. The best developers aren't the ones who know the most — they're the ones who learn the fastest.

> **Time Investment:** Not time-boxed — this is how you approach everything

**Learning Principles:**

**1. Feynman Technique**

```text
1. Study a concept
2. Explain it in simple terms (write it down or speak aloud)
3. Identify gaps in your explanation (where you got stuck)
4. Go back and fill the gaps
5. Simplify further — can you explain it to a 12-year-old?

If you can't explain it simply, you don't understand it yet.
```

**2. Spaced Repetition**

```text
Review schedule:
- After 1 day
- After 3 days
- After 7 days
- After 14 days
- After 30 days

Use Anki for key concepts:
- Make your own cards (the making IS learning)
- Keep cards atomic (one concept per card)
- Review daily (15-20 min)
```

**3. Active Recall**

```text
- Don't re-read, test yourself
- Close the book and try to remember
- Struggle is good — it strengthens memory
- Use flashcards, practice problems, teaching
- If you can't recall it, you haven't learned it
```

**4. Interleaving**

```text
- Mix different topics in one session
- Harder short-term, better long-term
- Example: 30 min JS, 30 min CSS, 30 min DSA
- Not: 2 hours JS, then 2 hours CSS
```

**5. Pomodoro Technique**

```text
1. Set timer for 25 minutes
2. Work with full focus (no distractions)
3. Take 5 minute break
4. Repeat 4 times
5. Take 15-30 minute break
```

**Problem-Solving Framework:**

```text
1. UNDERSTAND
   - What are the inputs?
   - What are the outputs?
   - What are the constraints?
   - Can I restate the problem in my own words?
   - What are the edge cases?

2. PLAN
   - Have I seen similar problems before?
   - Can I solve a simpler version first?
   - Can I break it into subproblems?
   - What data structures might help?
   - Can I visualize it? (draw diagrams)

3. EXECUTE
   - Start with brute force (get something working)
   - Code the solution step by step
   - Write tests first if possible
   - Don't optimize prematurely

4. REVIEW
   - Does it work for all edge cases?
   - Can it be cleaner? More readable?
   - What's the time/space complexity?
   - What did I learn?
   - Document the approach
```

**Debugging Framework:**

```text
1. REPRODUCE
   - Can I reliably trigger the bug?
   - What's the minimal reproduction case?
   - What inputs cause the problem?

2. ISOLATE
   - Where exactly does it fail?
   - Binary search through code (comment out half)
   - Add console.log strategically
   - Use debugger breakpoints

3. UNDERSTAND
   - WHY is it happening?
   - What's the root cause?
   - Don't just fix symptoms

4. FIX
   - Fix the root cause
   - Add a test that would have caught this
   - Consider if similar bugs exist elsewhere

5. VERIFY
   - Does the fix work?
   - Did it break anything else?
   - Do all tests pass?
```

**Resources:**

| Resource                         | Purpose             | Link                                                 |
| -------------------------------- | ------------------- | ---------------------------------------------------- |
| Learning How to Learn (Coursera) | Meta-learning       | https://www.coursera.org/learn/learning-how-to-learn |
| Make It Stick (Book)             | Science of learning | Book/Library                                         |
| Anki                             | Spaced repetition   | https://apps.ankiweb.net/                            |
| A Mind for Numbers (Book)        | Learning STEM       | Book/Library                                         |

---

### F9: Note-Taking & Knowledge Management (Ongoing)

> **Why this matters:** Your second brain. Knowledge compounds only if captured. In 2 years, you'll have learned thousands of things — if you don't write them down, you'll forget 90%.

> **Time Investment:** 10-15 min/day for daily notes

**The System:**

**1. Daily Notes**

```text
What to capture:
- What I learned today (bullet points)
- Questions that arose (things to research)
- Problems I solved (and how)
- Insights and "aha" moments
- Links to resources I found useful
```

**2. Concept Notes**

```text
- One concept per note
- Explain in your OWN words
- Include code examples
- Link to related concepts
- Add questions you still have
```

**3. Project Notes**

```text
- What am I building?
- Architecture decisions (and WHY)
- Problems encountered and solutions
- Things to improve
- Lessons learned
```

**Obsidian Structure (Recommended):**

```text
notes/
├── _templates/
│   ├── daily-note.md
│   ├── concept-note.md
│   └── leetcode-note.md
│
├── daily/
│   └── YYYY-MM-DD.md
│
├── concepts/
│   ├── javascript/
│   │   ├── closures.md
│   │   └── event-loop.md
│   └── react/
│       └── hooks.md
│
├── projects/
│   └── project-name.md
│
├── dsa/
│   ├── patterns/
│   └── problems/
│
└── MOCs/                    # Maps of Content (index files)
    ├── javascript-moc.md
    └── react-moc.md
```

**Daily Note Template:**

```markdown
# {{date:YYYY-MM-DD}} {{date:dddd}}

## 🎯 Focus Today

- [ ] Main goal 1
- [ ] Main goal 2

## 📚 What I Learned

-

## 💻 What I Built

-

## 🧩 DSA

| Problem | Difficulty | Pattern | Time |
| ------- | ---------- | ------- | ---- |
|         |            |         |      |

## ❓ Questions

-

## 🔗 Resources

-

## 📋 Tomorrow

-
```

**Tools:**

| Tool           | Best For              | Link                 |
| -------------- | --------------------- | -------------------- |
| Obsidian       | Local, linking, free  | https://obsidian.md/ |
| Notion         | All-in-one, cloud     | https://notion.so/   |
| Logseq         | Outliner, open source | https://logseq.com/  |
| Plain Markdown | Simple, portable      | Any text editor      |

**Recommendation:** Use Obsidian with plain Markdown. It's free, local-first, and you can sync your notes with Git.

**Milestones:**

- [ ] Week 1: Daily note habit established
- [ ] Week 4: 20+ concept notes created
- [ ] Month 3: Can find any past learning in under 30 seconds

---

## Foundation Track Summary

| Section           | Weeks   | Time/Day | Total Hours | Status |
| ----------------- | ------- | -------- | ----------- | ------ |
| F1: Touch Typing  | 1-8     | 30 min   | ~28 hrs     | [ ]    |
| F2: Terminal      | 1-6     | 30 min   | ~15 hrs     | [ ]    |
| F3: Git           | 2-8     | 20 min   | ~14 hrs     | [ ]    |
| F4: Text Editor   | 2-8     | 15 min   | ~10 hrs     | [ ]    |
| F5: Linux         | 3-10    | 30 min   | ~28 hrs     | [ ]    |
| F6: Bash          | 6-12    | 30 min   | ~21 hrs     | [ ]    |
| F7: Regex         | 8-12    | 20 min   | ~10 hrs     | [ ]    |
| F8: Meta-Learning | Ongoing | —        | —           | [ ]    |
| F9: Note-Taking   | Ongoing | 15 min   | —           | [ ]    |

**Total Foundation Investment:** ~126 hours over 12 weeks

This is not optional. This is what separates people who struggle forever from people who accelerate.

---
