# Git & GitHub Fundamentals

## ℹ️ Overview

**Git** is a distributed Version Control System (VCS) that tracks changes in source code during software development. It allows developers to:

1.  **Record History:** Save snapshots of the project at specific points in time.
2.  **Revert Changes:** Restore previous versions if a bug is introduced.
3.  **Collaborate:** Merge work from multiple developers seamlessly.

**GitHub** is a cloud-based hosting service for Git repositories. It acts as a remote storage facility for your code, enabling collaboration, portfolio showcasing, and backup.

---

## 1. Prerequisites

Ensure you have completed the initial setup from the **Environment Setup** guide.

- Git installed (v2.28 or later).
- GitHub account created.
- SSH keys configured and linked to GitHub.

---

## 2. Core Concepts

### Local vs. Remote

- **Local:** The files and Git history stored on your physical computer.
- **Remote:** The version of your project stored on a server (e.g., GitHub).

### The Three States

Git manages files in three distinct states:

1.  **Working Directory:** The files you are currently editing.
2.  **Staging Area:** A "waiting room" where you prepare files for the next commit.
3.  **Repository (Commit History):** The permanent record of saved snapshots.

### Atomic Commits

**Best Practice:** An atomic commit includes changes related to only **one** feature or fix.

- **Why?** It makes debugging easier. If a feature breaks the app, you can revert just that specific commit without losing unrelated work.

---

## 3. Initializing a Repository

> [!IMPORTANT]
>
> I would highly recommend you guys making a clone of this repo and performing these git commands to understand them better in action or u can practice or learn them [_here_](../../foundation/git/)

### Step 3.1: Create Remote Repository

1.  Log in to [GitHub](https://github.com/).
2.  Click the **+** icon (top-right) -> **New repository**.
3.  **Name:** `git_test`
4.  **Settings:** Check **"Add a README file"**.
5.  Click **Create repository**.

### Step 3.2: Clone to Local Machine

To copy this repository to your computer:

1.  On the GitHub repo page, click the green **Code** button.
2.  Select the **SSH** tab (Do not use HTTPS).
3.  Copy the URL string (starts with `git@github.com...`).

Open your terminal and run:

```bash
# Create a dedicated folder for projects
mkdir ~/repos
cd ~/repos

# Clone the repository (replace USERNAME with your GitHub username)
git clone git@github.com:USERNAME/git_test.git
```

**Verify Connection:**
Navigate into the folder and check the remote status:

```bash
cd git_test
git remote -v
```

_Output should show `origin` pointing to your GitHub URL._

---

## 4. Basic Workflow

This cycle represents 80% of your interaction with Git.

### Step 4.1: Modify Files

Create a new file in your project folder:

```bash
touch hello_world.txt
```

Check the status. You will see the file listed under "Untracked files" in red.

```bash
git status
```

### Step 4.2: Stage Changes (`git add`)

Move the file from the Working Directory to the Staging Area.

```bash
git add hello_world.txt
```

- _Tip: Use `git add .` to stage all changed files in the current directory._

Check status again. The file should now appear in green under "Changes to be committed".

```bash
git status
```

### Step 4.3: Commit Changes (`git commit`)

Save the snapshot to your local history with a descriptive message.

```bash
git commit -m "Add hello_world.txt"
```

### Step 4.4: Push to Remote (`git push`)

Upload your local commits to GitHub.

```bash
git push origin main
```

- **origin:** The default name of the remote repository.
- **main:** The default name of the primary branch.

---

## 5. Viewing History

To view a log of all commits (snapshots) in the current branch:

```bash
git log
```

- **Navigation:** If the log is long, press `q` to exit the viewer.

---

## 6. Configuration Tip: VS Code as Editor

By default, Git uses Vim for editing commit messages (if you forget the `-m` flag). To use VS Code instead, run this one-time configuration command:

```bash
git config --global core.editor "code --wait"
```

Now, if you type `git commit` (without a message), VS Code will open. Type your message, save, and close the tab to finalize the commit.

---

## 📖 Cheatsheet

| Command                | Description                                              |
| :--------------------- | :------------------------------------------------------- |
| `git clone [url]`      | Downloads a repository from GitHub to your computer.     |
| `git status`           | Shows which files are changed, staged, or untracked.     |
| `git add [file]`       | Moves a specific file to the Staging Area.               |
| `git add .`            | Moves **all** changed files to the Staging Area.         |
| `git commit -m "msg"`  | Saves the staged files as a new snapshot in history.     |
| `git push origin main` | Uploads local commits to the remote repository (GitHub). |
| `git log`              | Displays the history of commits.                         |
| `git remote -v`        | Displays the URLs of the remote connections.             |

---

## 🧠 Knowledge Check

- What is the difference between `git add` and `git commit`?
- Why should you avoid making edits directly on the GitHub website?
- What does `origin` refer to in a Git command?
- How do you check if your local repository is connected to GitHub?
