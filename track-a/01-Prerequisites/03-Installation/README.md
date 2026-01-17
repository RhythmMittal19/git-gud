# Development Environment Setup Guide

## Introduction

The first step in building a website is establishing the correct workspace. While many online tutorials utilize in-browser coding tools (known as "sandboxes"), professional development occurs in a local environment on your machine.

Setting up a development environment involves installing an operating system, a web browser, and a text editor that mimic the tools used in the industry. This guide will walk you through setting up a Unix-based workflow, which is the industry standard for web development.

---

## 1. Operating System Requirements

The Odin Project curriculum is designed specifically for **Unix-based operating systems**. Most open-source development tools (such as Ruby, Node.js, and Git) operate most efficiently in a Unix environment.

### Supported Systems

#### MacOS

**Status: Native Support**
MacOS is built on Unix. If you are using an Apple computer, no operating system changes are required. You may proceed directly to the browser and text editor sections.

#### Linux (Ubuntu/Xubuntu)

**Status: Native Support (Recommended)**
Linux is a free, open-source operating system. It is the preferred environment for servers and backend development globally.

- **Recommendation:** usage of [Ubuntu LTS](https://ubuntu.com/download/desktop) (Long Term Support) for stability.

#### Windows

**Status: Not Natively Supported**
Standard Windows is not a Unix-based system. Attempting to force web development tools to work natively on Windows often results in significant friction and compatibility errors.

**Analogy:** Imagine trying to fix a metric engine using imperial tools. You might find a wrench that _almost_ fits, but you will strip the bolts and struggle constantly. Using Linux provides the correct tools for the job.

**Windows Users Must Choose One of the Following Methods:**

1.  **Virtual Machine (VM) - Recommended for Beginners**
    - **Description:** This runs Linux inside a simulation window within Windows.
    - **Pros:** It is risk-free; if you break the Linux installation, you simply delete the file and start over without affecting your main computer.
    - **Guide:** [Virtual Machine Installation Guide](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/virtual-machine)

2.  **Dual-Boot**
    - **Description:** This installs Linux alongside Windows on your hard drive. When you turn on your computer, you choose which OS to load.
    - **Pros:** It offers the best performance as Linux utilizes your hardware directly.
    - **Cons:** Requires partitioning your hard drive.
    - **Guide:** [Dual-Boot Installation Guide](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dual-boot)

3.  **WSL2 (Windows Subsystem for Linux)**
    - **Description:** A feature of Windows 10/11 that allows you to run a Linux terminal directly inside Windows.
    - **Pros:** Seamless integration between Windows and Linux tools.
    - **Cons:** Can be conceptually confusing for beginners regarding where files are located.
    - **Guide:** [WSL2 Installation Guide](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/wsl2)

---

## 2. Web Browser Installation

You are required to install **Google Chrome** for this curriculum.

### Why Chrome?

While Firefox and Safari are excellent browsers, this course utilizes the **Chrome Developer Tools** (DevTools) for debugging. DevTools allow you to inspect the code of any website, test changes in real-time, and diagnose errors. To ensure your screen matches the tutorial screenshots, Chrome is necessary.

- [Download Google Chrome](https://www.google.com/chrome/)

---

## 3. Text Editors

A text editor is the primary tool where you will write your code. It differs significantly from word processors like Microsoft Word.

### The Difference: Rich Text vs. Plain Text

- **Rich Text (Microsoft Word/LibreOffice):** When you save a Word document, the file contains the text _plus_ hidden data regarding fonts, colors, margins, and layout. If you feed this file to a computer program, it will choke on that hidden data.
- **Plain Text (Code Editors):** A code editor saves only the specific characters you type. This allows interpreters (programs that run your code) to read the file purely as instructions.

**Analogy:** Think of Microsoft Word as a **collage**—it has text, but also glue, glitter, and pictures attached to it. Think of a Code Editor as a **typewriter**—it produces raw, unadorned characters that machines can read clearly.

### Recommended Editor: Visual Studio Code (VSCode)

We recommend Visual Studio Code. It is free, open-source, and includes features like syntax highlighting (coloring code keywords) and file management.

**Important for VM Users:** If you are using a Virtual Machine, you must install VSCode _inside_ the Linux VM, not just on your host Windows OS.

---

## 4. VSCode Installation Guide

Please follow the instructions specific to your operating system.

### Linux (Ubuntu) Installation

**Step 1: Download VSCode**
Open your Terminal. Run the following command to download the official installation package (`.deb` file) from Microsoft:

```bash
wget -O code-latest.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'
```

**Step 2: Install the Package**
Run the following command to install the downloaded file:

```bash
sudo apt install ./code-latest.deb
```

- **Security Note:** When you run a command with `sudo` (SuperUser Do), you are acting as an administrator. You will be asked for your password. **As you type your password, no dots or asterisks will appear on the screen.** This is standard Linux security behavior to prevent shoulder-surfing. Type the password blindly and press Enter.

**Step 3: Cleanup**
Remove the installer file to keep your system clean:

```bash
rm code-latest.deb
```

**Step 4: Launch VSCode**
You can launch the program via your Applications menu, or by typing `code` in the terminal.

### MacOS Installation

**Step 1: Download**
Download the [VSCode for Mac Universal build](https://code.visualstudio.com/Download).

**Step 2: Install**

1.  Navigate to your **Downloads** folder.
2.  Double-click `VSCode-darwin-universal.zip` to extract it.
3.  Drag the **Visual Studio Code.app** icon into your **Applications** folder.

**Step 3: Cleanup**
Move the `.zip` file in your Downloads folder to the Trash.

**Step 4: Launch**
Navigate to your Applications folder and double-click Visual Studio Code.

### WSL2 Installation

**Step 1: Install on Windows**
Download and install [VSCode for Windows](https://code.visualstudio.com/Download) as you would any normal program.

**Step 2: Install WSL Extension**

1.  Open VSCode on Windows.
2.  Click the **Extensions** icon on the left sidebar (looks like four squares).
3.  Search for **"WSL"** (published by Microsoft) and click Install.

**Step 3: Connect to Linux**

1.  Open your **WSL2 Terminal** (the Ubuntu app).
2.  Type the following command:
    ```bash
    code
    ```
3.  VSCode will launch a new window. Look at the bottom left corner; it should say **"WSL: Ubuntu"**. This confirms that the editor running on Windows is editing files located inside your Linux system.

---

## 5. Configuration & Assignments

### 1. Tutorial

Watch the following video to understand the interface of your new text editor. Do not worry about the code being written; focus on the layout of the tool.

- [VSCode Tutorial for Beginners](https://www.youtube.com/watch?v=B-s71n0dHkM)

### 2. Disable AI Completions

The Odin Project requires that you **disable** GitHub Copilot or any AI code completion features in VSCode.

- **How:** Click the settings icon (gear) or the Copilot icon in the bottom right corner and disable "Code Completions."
- **Reasoning:** Learning to code is about building mental models and logic. If an AI writes the code for you, you are bypassing the learning process. You cannot debug complex systems later if you did not understand the basic logic when you started.

---

## Checklist

1.  [x] Determine OS strategy (Native Mac/Linux vs. VM/Dual-Boot/WSL2).
2.  [x] Complete OS installation.
3.  [x] Install Google Chrome.
4.  [x] Install Visual Studio Code via the command line (Linux) or standard installer (Mac/Windows).
5.  [x] Launch VSCode and disable AI features.
