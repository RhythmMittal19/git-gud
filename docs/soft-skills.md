# Soft Skills & Career

> [Back to main README](../README.md)

> **Why This Matters:** Technical skills get you interviews. Soft skills get you hired and promoted.

### Communication Skills

**Code Reviews — Giving Feedback:**

```text
DO:
✓ Be respectful — there's a human on the other side
✓ Explain WHY, not just WHAT
  Bad: "This is wrong"
  Good: "Consider using map() here for clarity — it makes the transformation explicit"
✓ Offer alternatives
✓ Distinguish between must-fix and nice-to-have
✓ Acknowledge what's done well
✓ Ask questions instead of demanding changes
  "Have you considered X?" vs "Do X instead"

DON'T:
✗ Be condescending
✗ Nitpick on style (use formatters instead)
✗ Make it personal
✗ Demand changes without explanation
```

**Code Reviews — Receiving Feedback:**

```text
DO:
✓ Assume positive intent
✓ Ask clarifying questions
✓ Thank reviewers for their time
✓ Explain your reasoning if you disagree
✓ Be open to learning

DON'T:
✗ Take it personally
✗ Get defensive
✗ Ignore feedback
✗ Argue about subjective preferences
```

**Technical Writing:**

````text
README Template:
# Project Name

Brief description of what this project does.

## Features
- Feature 1
- Feature 2

## Installation
```bash
npm install
npm run dev
```

## Usage

Brief usage instructions with examples.

## Tech Stack

- React
- Node.js
- PostgreSQL

## Contributing

How to contribute.

## License

MIT

````

**Documentation Tips:**

1. **Explain WHY, not just WHAT** — Code shows what, comments explain why
2. **Keep it updated** — Outdated docs are worse than no docs
3. **Include examples** — Show, don't just tell
4. **Structure for scanning** — Headings, bullets, code blocks
5. **Write for future you** — You'll forget in 6 months

---

### Reading Large Codebases

> This is a critical skill. 90% of your job is reading code, not writing it.

**The Strategy:**

```text
1. START WITH DOCUMENTATION
   □ README.md — overview, setup
   □ CONTRIBUTING.md — code organization
   □ Architecture docs (if they exist)
   □ API documentation

2. FIND THE ENTRY POINT
   □ main.js, index.ts, App.tsx
   □ server.js, app.py, main.go
   □ This is where execution begins

3. TRACE ONE FEATURE END-TO-END
   □ Pick a simple feature (e.g., user login)
   □ Follow the code from button click to database
   □ Don't try to understand everything at once

4. USE SEARCH AGGRESSIVELY
   □ grep, ripgrep, IDE search
   □ Search for function names, error messages
   □ "Find all references" is your friend

5. READ TESTS
   □ Tests show intended usage
   □ They're often simpler than production code
   □ They document edge cases

6. DRAW DIAGRAMS
   □ Box and arrow diagrams
   □ Data flow diagrams
   □ Sequence diagrams
   □ Even messy sketches help

7. EXPERIMENT
   □ Add console.log statements
   □ Change something small and see what breaks
   □ Run tests to understand behavior
````

**Tools:**

```text
IDE Features:
- "Go to Definition" (F12 in VS Code)
- "Find All References" (Shift+F12)
- "Call Hierarchy"
- Outline view

Command Line:
- grep -r "functionName" .
- git blame (who wrote this and when?)
- git log -p --follow filename (file history)

Debugging:
- Set breakpoints
- Step through code
- Inspect variables
```

---

### Open Source Contribution

> Shows you can work with others, read their code, and follow contribution guidelines.

**How to Start:**

```text
1. FIND PROJECTS YOU ACTUALLY USE
   - VS Code extensions you use
   - Libraries in your projects
   - Tools you rely on
   - You'll be more motivated

2. START SMALL
   - Documentation fixes (typos, clarity)
   - Adding tests
   - "Good first issue" labeled bugs
   - Don't try to add major features first

3. READ CONTRIBUTION GUIDELINES
   - CONTRIBUTING.md
   - Code style requirements
   - PR template
   - Commit message format

4. UNDERSTAND BEFORE CHANGING
   - Read the codebase
   - Understand existing patterns
   - Don't "improve" style arbitrarily

5. MAKE FOCUSED PRs
   - One issue = one PR
   - Don't combine unrelated changes
   - Small PRs get reviewed faster

6. RESPOND TO FEEDBACK
   - Be respectful and grateful
   - Maintainers are often volunteers
   - Iterate quickly on requested changes
```

**Finding Good First Issues:**

| Resource            | Link                                                      |
| ------------------- | --------------------------------------------------------- |
| Good First Issues   | https://goodfirstissue.dev/                               |
| Up For Grabs        | https://up-for-grabs.net/                                 |
| First Contributions | https://github.com/firstcontributions/first-contributions |
| GitHub Explore      | https://github.com/explore                                |
| CodeTriage          | https://www.codetriage.com/                               |

**Your First Contribution (Tutorial):**

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/REPO-NAME
cd REPO-NAME

# 3. Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/REPO-NAME

# 4. Create a branch
git checkout -b fix/typo-in-readme

# 5. Make your changes
# ... edit files ...

# 6. Commit
git add .
git commit -m "fix: correct typo in README"

# 7. Push to your fork
git push origin fix/typo-in-readme

# 8. Create Pull Request on GitHub
# Go to your fork → Click "Compare & pull request"
```

---

### Time Management

**For Developers:**

```text
1. POMODORO TECHNIQUE
   - 25 min focused work
   - 5 min break
   - After 4 pomodoros, 15-30 min break

2. TIME BLOCKING
   - Dedicate specific hours to specific tasks
   - Deep work in the morning (fewer distractions)
   - Meetings/communication in the afternoon

3. SINGLE-TASKING
   - Context switching is expensive
   - Close unnecessary tabs/apps
   - Put phone in another room

4. ENERGY MANAGEMENT
   - Hard problems when energy is high
   - Routine tasks when energy is low
   - Don't waste peak hours on email

5. SAYING NO
   - Not every opportunity is right for now
   - Protect your deep work time
   - It's okay to decline meetings without clear agendas
```

**Weekly Planning:**

```text
SUNDAY EVENING (30 min)
1. Review what you accomplished last week
2. Identify top 3 priorities for next week
3. Block time for those priorities
4. Identify potential blockers/meetings

DAILY (5 min)
1. Review today's tasks
2. Identify the ONE thing that must get done
3. Check calendar for meetings
4. End of day: quick reflection
```

---

### Working Effectively in a Team

**Communication:**

```text
ASYNC COMMUNICATION (Slack, Email)
- Lead with the ask (don't bury it)
- Provide context (why you're asking)
- Include relevant links/screenshots
- Indicate urgency level

Bad: "Hey, can we talk?"
Good: "Hey, I'm stuck on the authentication bug (#123).
       I've tried X and Y but neither worked.
       Could you take a look when you have 15 min?
       Not urgent — tomorrow is fine."

MEETINGS
- Come prepared (read agenda beforehand)
- Be on time
- Contribute or ask questions
- Take notes
- Send summary/action items after
```

**Collaboration:**

```text
1. OVER-COMMUNICATE
   - Status updates (what you're working on)
   - Blockers (what's stopping you)
   - Timeline changes (earlier or later than expected)

2. ASK FOR HELP
   - Try for 30 min first
   - Explain what you've tried
   - Ask specific questions
   - Share relevant code/logs

3. HELP OTHERS
   - Answer questions when you can
   - Share knowledge (docs, snippets)
   - Review PRs thoroughly but kindly

4. TAKE OWNERSHIP
   - If you see a problem, flag it
   - If you can fix it, offer to help
   - Follow through on commitments
```

---

### Dealing with Imposter Syndrome

**RECOMMENDED** (_Personally have Imposter Syndrome_)

**Reality:**

```text
EVERYONE feels like they don't belong sometimes. Including:
- Senior engineers
- Tech leads
- CTOs
- Famous open source maintainers

It's normal. It means you're pushing yourself.
```

**Strategies:**

```text
1. KEEP A "WINS" FILE
   - Document your accomplishments
   - Review when feeling down
   - Include small wins too

2. COMPARE TO YOURSELF, NOT OTHERS
   - You vs. 6 months ago
   - Not you vs. 10-year senior dev

3. REMEMBER THAT EVERYONE GOOGLES
   - No one memorizes everything
   - Even experts look things up
   - Knowing how to find answers IS a skill

4. EMBRACE "I DON'T KNOW"
   - It's okay to not know
   - "I don't know, but I'll find out"
   - Pretending to know is worse

5. CONTRIBUTE TO HELP OTHERS
   - Answer beginner questions
   - Write tutorials
   - Mentor someone earlier in the journey
   - Teaching reinforces that you DO know things
```

---

### Career Growth

**First 6 Months on the Job:**

```text
1. LEARN THE CODEBASE
   - Read code every day
   - Ask questions (but try first)
   - Understand the architecture

2. SHIP SMALL THINGS
   - Build trust with delivered work
   - Start with bug fixes
   - Then small features
   - Then larger features

3. BUILD RELATIONSHIPS
   - 1:1s with your manager
   - Get to know teammates
   - Find a mentor (informal is fine)

4. DOCUMENT WHAT YOU LEARN
   - Internal wikis
   - Onboarding improvements
   - Future you will thank you

5. ASK FOR FEEDBACK
   - Don't wait for performance reviews
   - "How can I improve?"
   - Act on the feedback
```

**Year 1-2:**

```text
1. TAKE ON LARGER PROJECTS
   - Own features end-to-end
   - Drive technical decisions
   - Learn system design

2. MENTOR NEWER DEVS
   - Help with code reviews
   - Pair programming
   - Answer questions

3. CONTRIBUTE TO TECHNICAL DECISIONS
   - Propose improvements
   - Write tech specs
   - Participate in architecture discussions

4. BUILD YOUR SPECIALTY
   - What are you known for?
   - What do people come to you for?
   - Go deep in one area
```

**Promotions:**

```text
1. UNDERSTAND THE EXPECTATIONS
   - What does the next level look like?
   - Ask your manager directly
   - Look at job descriptions

2. DEMONSTRATE BEFORE ASKING
   - Start doing the work of the next level
   - Then ask for the title/compensation

3. DOCUMENT YOUR WORK
   - Keep a brag document
   - Track metrics and impact
   - Quantify everything

4. COMMUNICATE YOUR ASPIRATIONS
   - Tell your manager your goals
   - Ask what gaps you need to fill
   - Make a plan together
```

---

