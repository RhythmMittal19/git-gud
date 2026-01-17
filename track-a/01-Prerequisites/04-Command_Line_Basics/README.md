# Command Line Basics

## 📖 Introduction

Feeling scared of the command line? You’re not alone. We often imagine developers staring at a black screen with flashing green text, wildly hacking into mainframes.

In reality, that blank screen with a blinking cursor is the **Command Line Interface (CLI)**. It is essentially a conversation with your computer where you type commands, and the computer runs them. It is a critical skill because it acts as your base of operations to launch programs, manage files, and interact with tools like Git.

In this lesson, you will learn to navigate your computer, create files, and manage directories directly from the command line.

---

## 1. Test Drive Your Terminal

### Open the Terminal

- **Linux:** Press `Ctrl` + `Alt` + `T` or search for "Terminal" in your applications menu.
- **MacOS:** Press `Cmd` + `Space` to open Spotlight search, type "Terminal", and press `Enter`.
- **WSL2:** Open your "Ubuntu" app from the Windows Start menu.

### The Prompt

When the window opens, you will see a line of text ending in a symbol.

- **Linux/Older Macs:** Usually ends with `$`.
- **Newer Macs (zsh):** Usually ends with `%`.

This symbol is called the **Prompt**. It means the computer is waiting for you to type.

### Try Your First Command

Type the following and press `Enter`:

```bash
whoami
```

It should return your username.

> **Note:** In tutorials, you will often see commands written like `$ whoami`. The `$` just represents the prompt. Do **not** type the `$` yourself; just type the command that follows it.

---

## 2. Essential Concepts

### 🔒 Typing Passwords

When you run a command that requires administrator privileges (like `sudo`), you will be asked for a password.

- **Important:** As you type your password, **no characters (asterisks or dots) will appear on the screen.**
- This is a security feature. Just type your password blindly and press `Enter`.

### 📋 Copy and Paste

The standard copy/paste shortcuts work differently in the terminal.

- **Copy:** `Ctrl` + `Shift` + `C` (Mac: `Cmd` + `C`)
- **Paste:** `Ctrl` + `Shift` + `V` (Mac: `Cmd` + `V`)

### ↹ Tab Completion (The Developer's Best Friend)

Programmers are efficient (lazy). We rarely type full filenames.

- **How it works:** Start typing the name of a file or folder and press `Tab`. The terminal will auto-complete the name for you.
- **Example:** To navigate to `Downloads`, you can type `cd Do` and press `Tab`.
  - If you have both `Documents` and `Downloads`, press `Tab` twice to see the options, type the next letter (e.g., `w`), and press `Tab` again.

### 📂 Opening Projects with `.`

The period `.` represents the **Current Directory**. You can use it to tell programs to "open everything in this folder."

- **Example:** To open the current folder in VS Code, run:
  ```bash
  code .
  ```

---

## 3. Opening VS Code from CLI

To open a specific file or folder in VS Code, you can use the `code` command followed by the name (e.g., `code my_project`).

### Linux / WSL2

It usually works out of the box. Just type:

```bash
code
```

### MacOS Setup

If the command `code` doesn't work:

1.  Open VS Code manually.
2.  Press `Cmd` + `Shift` + `P` to open the Command Palette.
3.  Type `shell command`.
4.  Select **"Shell Command: Install 'code' command in PATH"**.
5.  Restart your terminal.

---

## 4. Assignments & Resources

### 📁 Prerequisites

Ensure you have a `Desktop` folder.

1.  Go to your home directory:
    ```bash
    cd ~
    ```
2.  Create the folder if it doesn't exist:
    ```bash
    mkdir Desktop
    ```
3.  Check if it exists:
    ```bash
    ls
    ```

### 📚 The Unix Shell Course

Complete the following specific lessons from the **Software Carpentry Foundation**:

1.  **[Download Files](https://swcarpentry.github.io/shell-novice/setup.html)**
    - _WSL2 Users:_ Do not download via browser. Open your terminal and run:
      ```bash
      wget https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip
      sudo apt install unzip
      unzip shell-lesson-data.zip
      ```
2.  **[Introducing the Shell](https://swcarpentry.github.io/shell-novice/01-intro.html)**
3.  **[Navigating Files and Directories](https://swcarpentry.github.io/shell-novice/02-filedir.html)**
4.  **[Working With Files and Directories](https://swcarpentry.github.io/shell-novice/03-create.html)**

### 🏋️ Practice Exercise

Run the following commands in your terminal to verify your skills.

1.  **Create a directory** named `test`:
    ```bash
    mkdir test
    ```
2.  **Navigate** into that directory:
    ```bash
    cd test
    ```
3.  **Create a file** named `test.txt`:
    ```bash
    touch test.txt
    ```
4.  **Open the file** in VS Code:
    ```bash
    code test.txt
    ```
    _(Type something in the file, save it, and close VS Code)_
5.  **Navigate back** to the parent directory:
    ```bash
    cd ..
    ```
6.  **Delete** the `test` directory:
    ```bash
    rm -r test
    ```
    _(Note: `-r` stands for recursive, which is needed to delete a folder that contains files)_

---

## 🧠 Knowledge Check

- What is the command line?
- How do you open the command line on your computer?
- How can you navigate to a particular directory? (`cd`)
- Where will `cd` on its own navigate you to? (Home)
- Where will `cd ..` navigate you to? (Up one level)
- How do you display the name of the directory you are currently in? (`pwd`)
- How do you display the contents of the directory you are currently in? (`ls`)
- How do you create a new directory? (`mkdir`)
- How do you create a new file? (`touch`)
- How do you destroy a directory or file? (`rm`)
- How do you rename a directory or file? (`mv`)
