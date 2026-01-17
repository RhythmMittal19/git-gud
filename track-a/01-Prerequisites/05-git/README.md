# Setting Up Git & GitHub

## Overview

**Git** is a Version Control System (VCS) that tracks changes in your code. It is an essential tool for every developer, allowing you to save your work, collaborate with others, and revert mistakes.

**GitHub** is a cloud-based hosting service for Git repositories. It acts as a portfolio and collaboration hub for your code.

**Key Distinction:**

- **Git:** The software on your computer (The tool).
- **GitHub:** The website where you upload your code (The storage).

---

## 1. Installing Git

Select your operating system below to install the latest version of Git.

### Linux (Ubuntu)

**Step 1.1: Update System**
Open your terminal and run the following commands to ensure your package manager is current:

```bash
sudo apt update
sudo apt upgrade
```

- _Note: When typing your password after `sudo`, no characters will appear on screen. This is normal security behavior._

**Step 1.2: Install Git**
To get the latest version, add the official Git repository and install:

```bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

**Step 1.3: Verify Version**
Check that Git is installed and version is **2.28** or higher:

```bash
git --version
```

### MacOS

**Step 1.1: Install Homebrew**
MacOS requires a package manager called Homebrew. Paste this into your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **Apple Silicon (M1/M2/M3) Users:** Pay attention to the "Next Steps" output in your terminal after installation. You likely need to run two specific commands to add Homebrew to your PATH.

**Step 1.2: Install Git**
Once Homebrew is ready, install Git:

```bash
brew install git
```

**Step 1.3: Verify Version**
Close your terminal and open a new one. Check the version (must be **2.28** or higher):

```bash
git --version
```

### ChromeOS

**Prerequisite:** Ensure the **Linux Development Environment** is enabled in your Chromebook settings.

**Step 1.1: Update System**

```bash
sudo apt update
sudo apt upgrade
```

**Step 1.2: Install Git**

```bash
sudo apt install git
```

**Step 1.3: Verify Version**

```bash
git --version
```

- _If the version is below 2.28, follow the Linux instructions above to add the PPA._

---

## 2. Configuring Git & GitHub

### Step 2.1: Create a GitHub Account

1.  Go to [GitHub.com](https://github.com/) and create a free account.
2.  **Privacy Tip:** If you want to keep your email private:
    - Go to **Settings > Emails**.
    - Check "Keep my email addresses private".
    - Check "Block command line pushes that expose my email".
    - Note the `noreply` email address provided (e.g., `12345+username@users.noreply.github.com`). You will need this for the next step.

### Step 2.2: Enable Two-Factor Authentication (2FA)

GitHub strongly recommends (and sometimes requires) 2FA for security.

- Go to **Settings > Password and authentication**.
- Enable 2FA using an app like **Google Authenticator** or **Authy** on your phone.

### Step 2.3: Configure Git User Info

You need to tell Git who you are so your code contributions are correctly attributed to you.

Run the following commands in your terminal (replace the text inside quotes with your actual details):

**1. Set Username:**

```bash
git config --global user.name "Your Actual Name"
```

**2. Set Email:**

```bash
git config --global user.email yourname@example.com
```

- _Note: If you are using a private GitHub email, use the `@users.noreply.github.com` address found in Step 2.1._

**3. Set Default Branch Name:**
Industry standard has shifted from `master` to `main`.

```bash
git config --global init.defaultBranch main
```

**4. Set Merge Behavior:**
To prevent unnecessary complications when downloading code:

```bash
git config --global pull.rebase false
```

**5. Verify Settings:**
Check that everything is correct:

```bash
git config --get user.name
git config --get user.email
```

**MacOS Users ONLY:**
To prevent system files (`.DS_Store`) from cluttering your code:

```bash
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

---

## 3. Connecting via SSH (Secure Shell)

An SSH key allows your computer to talk to GitHub securely without typing your username and password every time you push code.

### Step 3.1: Generate SSH Key

1.  Check if you already have a key:

    ```bash
    ls ~/.ssh/id_ed25519.pub
    ```

    - _If "No such file or directory", proceed to step 2._
    - _If a file exists, skip to Step 3.2._

2.  Generate a new key:
    ```bash
    ssh-keygen -t ed25519
    ```

    - When prompted for a file location, just press **Enter**.
    - When prompted for a passphrase, you can press **Enter** for no password, or type one for extra security.

### Step 3.2: Link Key to GitHub

1.  **Copy the public key** to your clipboard by displaying it:

    ```bash
    cat ~/.ssh/id_ed25519.pub
    ```

    - _Highlight the output (starting with `ssh-ed25519`) and copy it._

2.  **Add to GitHub:**
    - Go to GitHub.com -> **Settings** -> **SSH and GPG keys**.
    - Click **New SSH Key**.
    - **Title:** Give it a name (e.g., "My Laptop").
    - **Key:** Paste the copied text.
    - Click **Add SSH key**.

### Step 3.3: Test Connection

Run this command to verify everything works:

```bash
ssh -T git@github.com
```

- Type `yes` if asked to continue connecting.
- **Success Message:** You should see: _"Hi username! You've successfully authenticated..."_

---

## Checklist

1.  [ ] Install Git and verify version is > 2.28.
2.  [ ] Create GitHub account and enable 2FA.
3.  [ ] Configure `user.name` and `user.email` in terminal.
4.  [ ] Generate SSH key and add it to GitHub settings.
5.  [ ] Successfully test SSH connection.
