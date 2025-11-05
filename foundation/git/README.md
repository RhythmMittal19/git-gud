# F3: Git Mastery

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F3: Git Mastery (Weeks 2-8)

> **Why this matters:** Git is how every team collaborates. Most developers know 5 commands and panic when something goes wrong. You'll understand Git's internals and never fear a merge conflict again.

> **Time Investment:** ~20 min/day | **Total:** ~14 hours over 7 weeks

Most developers know 5 Git commands. You'll understand Git's object model and never fear a merge conflict again.

**Level 1: Basic Workflow (Week 2-3)**

```bash
# Starting a project
git init                        # Initialize new repo
git clone URL                   # Clone existing repo

# Basic workflow (do this 100x until automatic)
git status                      # What's changed? (run this constantly)
git add filename                # Stage specific file
git add .                       # Stage all changes
git commit -m "message"         # Commit staged changes
git push                        # Push to remote
git pull                        # Pull from remote

# Viewing history
git log                         # Commit history
git log --oneline               # Compact history
git log --oneline -10           # Last 10 commits
git show COMMIT                 # Show specific commit
git diff                        # Unstaged changes
git diff --staged               # Staged changes
git diff HEAD~1                 # Changes since last commit

# .gitignore — files to ignore
# Create .gitignore file:
node_modules/
.env
.DS_Store
*.log
dist/
```

**Level 2: Branching (Week 3-4)**

```bash
# Branch basics
git branch                      # List branches
git branch feature-name         # Create branch
git checkout feature-name       # Switch to branch
git checkout -b feature-name    # Create AND switch (use this)
git switch feature-name         # Modern way to switch
git switch -c feature-name      # Modern create and switch

# Merging
git checkout main               # Switch to main
git merge feature-name          # Merge feature into main
# Fast-forward merge: no conflicts, history is linear
# 3-way merge: creates merge commit

# Merge conflicts — DON'T PANIC
# Git marks conflicts like this:
<<<<<<< HEAD
your changes
=======
their changes
>>>>>>> feature-name

# To resolve:
# 1. Open file, manually edit to keep what you want
# 2. Remove the <<<, ===, >>> markers
# 3. git add filename
# 4. git commit

# Deleting branches
git branch -d feature-name      # Delete merged branch
git branch -D feature-name      # Force delete unmerged branch

# Stash — save work temporarily
git stash                       # Stash current changes
git stash list                  # List stashes
git stash pop                   # Apply and remove latest stash
git stash apply                 # Apply but keep stash
git stash drop                  # Delete latest stash
```

**Level 3: History Manipulation (Week 4-5)**

```bash
# Undoing things
git checkout -- filename        # Discard unstaged changes to file
git restore filename            # Modern way to discard changes
git reset HEAD filename         # Unstage file
git restore --staged filename   # Modern way to unstage

# Reset — moving HEAD (BE CAREFUL)
git reset --soft HEAD~1         # Undo commit, keep changes staged
git reset --mixed HEAD~1        # Undo commit, keep changes unstaged (default)
git reset --hard HEAD~1         # Undo commit, DELETE changes (dangerous)

# Revert — safe way to undo (creates new commit)
git revert COMMIT               # Create commit that undoes COMMIT

# Amend — fix last commit
git commit --amend -m "new msg" # Change last commit message
git add forgotten-file
git commit --amend              # Add file to last commit

# Cherry-pick — copy specific commit
git cherry-pick COMMIT          # Apply commit to current branch

# Reflog — your safety net (MEMORIZE THIS)
git reflog                      # History of HEAD movements
git checkout HEAD@{2}           # Go back to 2 moves ago
# Reflog saves you when you think you've lost work

# Interactive rebase (advanced, but powerful)
git rebase -i HEAD~3            # Edit last 3 commits
# Options: pick, reword, edit, squash, drop
```

**Level 4: Collaboration (Week 5-6)**

```bash
# Remotes
git remote -v                   # Show remotes
git remote add origin URL       # Add remote
git remote remove origin        # Remove remote

# Fetch vs Pull
git fetch origin                # Download changes, don't merge
git pull origin main            # Fetch AND merge (git fetch + git merge)

# Forking workflow (for open source)
# 1. Fork repo on GitHub
# 2. Clone YOUR fork
git clone https://github.com/YOU/repo.git
# 3. Add original as upstream
git remote add upstream https://github.com/ORIGINAL/repo.git
# 4. Keep fork updated
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# Pull request workflow
git checkout -b feature         # Create feature branch
# ... make changes ...
git push -u origin feature      # Push branch to your fork
# Go to GitHub → Create Pull Request

# Useful for collaboration
git blame filename              # Who changed each line?
git bisect start                # Find commit that introduced bug
git bisect bad                  # Current is bad
git bisect good COMMIT          # This commit was good
# Git will binary search to find the breaking commit
```

**Level 5: Git Internals (Week 7-8)**

Understanding how Git actually works makes everything click.

```bash
# The .git directory
.git/
├── HEAD                # Pointer to current branch
├── config              # Repo configuration
├── objects/            # All data (blobs, trees, commits)
├── refs/               # Pointers to commits (branches, tags)
└── index               # Staging area

# Git objects — everything is a hash
git hash-object file            # Get hash of file content
git cat-file -t HASH            # Type of object
git cat-file -p HASH            # Pretty print object

# Object types
# blob   — file contents
# tree   — directory structure (list of blobs and trees)
# commit — snapshot (points to tree + metadata + parents)
# tag    — named pointer to commit

# Commits are snapshots, not diffs
# Each commit stores complete state, not changes
# Git is smart about storage (packing, deduplication)
```

**Commit Message Best Practices:**

```bash
# Use conventional commits
feat: add user authentication
fix: resolve login redirect bug
docs: update API documentation
style: format code with prettier
refactor: simplify auth middleware
test: add tests for user service
chore: update dependencies

# Structure
<type>: <short description>      # 50 chars max

<longer description if needed>   # 72 chars per line

<footer: references, breaking changes>

# Examples
feat: add shopping cart functionality

Implement add to cart, remove from cart, and cart total calculation.
Cart persists to localStorage for logged-out users.

Closes #123

---

fix: prevent crash on empty user input

Check for null/undefined before processing user input in the
search function. Previously, empty input caused TypeError.

Fixes #456
```

**Resources:**

| Resource               | Purpose              | Link                                               |
| ---------------------- | -------------------- | -------------------------------------------------- |
| Learn Git Branching    | Visual, interactive  | https://learngitbranching.js.org/                  |
| Pro Git Book           | Comprehensive, FREE  | https://git-scm.com/book/en/v2                     |
| Git Immersion          | Hands-on tutorial    | https://gitimmersion.com/                          |
| Oh Shit, Git!?!        | Fixing mistakes      | https://ohshitgit.com/                             |
| Visualizing Git        | See what commands do | https://git-school.github.io/visualizing-git/      |
| Git from the Bottom Up | Deep internals       | https://jwiegley.github.io/git-from-the-bottom-up/ |
| Atlassian Git Tutorial | Well-written guides  | https://www.atlassian.com/git/tutorials            |

**Practice:**

- Make 1 commit minimum daily (build the streak)
- Intentionally create merge conflicts and resolve them
- Explore the `.git` folder of any repository
- Try to "break" things and recover using reflog

**Milestones:**

- [ ] Week 3: Create branches, merge without fear
- [ ] Week 4: Resolve a merge conflict correctly
- [ ] Week 5: Use git reflog to recover "lost" work
- [ ] Week 6: Submit a pull request to any open source repo
- [ ] Week 8: Explain how Git stores data (blobs, trees, commits)

---

