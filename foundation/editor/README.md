# F4: Text Editor Mastery

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F4: Text Editor Mastery (Weeks 2-8)

> **Why this matters:** Your editor is your instrument. A musician doesn't look at their fingers. You shouldn't either. Mastering shortcuts makes you 3-5x faster at actual coding.

> **Time Investment:** Learn shortcuts as you code | Dedicated practice: ~15 min/day

Choose ONE and master it:

> [!TIP]
> **Recommended:** Start with VS Code. Later, install the Vim extension to get the best of both worlds.

**Option A: VS Code (Recommended for beginners)**

**Week 2-3: Core Shortcuts (Memorize These)**

```text
FILE NAVIGATION
Ctrl+P              Quick file open (fuzzy search)
Ctrl+Shift+P        Command palette (access everything)
Ctrl+Tab            Switch between open files
Ctrl+\              Split editor
Ctrl+1/2/3          Focus editor group 1/2/3
Ctrl+B              Toggle sidebar
Ctrl+`              Toggle terminal
Ctrl+Shift+E        Explorer sidebar
Ctrl+Shift+F        Search in files
Ctrl+Shift+G        Source control (Git)

EDITING
Ctrl+D              Select next occurrence of selection
Ctrl+Shift+L        Select ALL occurrences of selection
Alt+Up/Down         Move line up/down
Alt+Shift+Up/Down   Copy line up/down
Ctrl+Shift+K        Delete entire line
Ctrl+/              Toggle line comment
Ctrl+Shift+/        Toggle block comment
Ctrl+]              Indent line
Ctrl+[              Outdent line
Ctrl+Enter          Insert line below
Ctrl+Shift+Enter    Insert line above

NAVIGATION
Ctrl+G              Go to line number
F12                 Go to definition
Alt+F12             Peek definition
Shift+F12           Find all references
Ctrl+Shift+O        Go to symbol in file
Ctrl+T              Go to symbol in workspace
Ctrl+Home           Go to beginning of file
Ctrl+End            Go to end of file
Ctrl+L              Select current line

MULTI-CURSOR (POWERFUL)
Alt+Click           Add cursor at click position
Ctrl+Alt+Up/Down    Add cursor above/below
Ctrl+Shift+L        Add cursor to all occurrences

SEARCH & REPLACE
Ctrl+F              Find in file
Ctrl+H              Find and replace
Ctrl+Shift+F        Find in all files
Ctrl+Shift+H        Replace in all files
```

**Week 4-5: Multi-cursor & Advanced**

```text
FOLDING
Ctrl+Shift+[        Fold region
Ctrl+Shift+]        Unfold region
Ctrl+K Ctrl+0       Fold all
Ctrl+K Ctrl+J       Unfold all

SELECTION
Shift+Alt+→         Expand selection
Shift+Alt+←         Shrink selection
Ctrl+Shift+K        Delete line

FORMATTING
Shift+Alt+F         Format document
Ctrl+K Ctrl+F       Format selection
```

**Week 6-8: Essential Extensions**

```text
MUST HAVE
- Prettier           Auto-format on save
- ESLint             JavaScript linting
- GitLens            Git superpowers (blame, history)
- Auto Rename Tag    HTML tag auto-rename
- Live Server        Local dev server with hot reload

RECOMMENDED
- Error Lens         Show errors inline
- Path Intellisense  Autocomplete file paths
- Bracket Pair Color Color matching brackets (built-in now)
- Material Icon Theme Better file icons
- Thunder Client     API testing (like Postman)
- TODO Highlight     Highlight TODOs and FIXMEs
- Code Spell Checker Catch typos in comments/strings

FOR LATER
- Vim                Vim keybindings in VS Code
- Remote - SSH       Edit files on remote servers
- Docker             Docker integration
```

**Settings to Configure (settings.json):**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.fontSize": 14,
  "editor.fontFamily": "Fira Code, Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.linkedEditing": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "files.autoSave": "onFocusChange",
  "workbench.colorTheme": "One Dark Pro",
  "terminal.integrated.defaultProfile.linux": "bash"
}
```

---

**Option B: Vim/Neovim (For Track B depth or VS Code Vim extension)**

**Week 2-3: Survival Mode**

```text
MODES (The most important concept)
Normal mode         Default, for navigation and commands
Insert mode         For typing text
Visual mode         For selecting text
Command mode        For running commands (:)

ENTERING INSERT MODE (from Normal)
i                   Insert before cursor
a                   Insert after cursor
I                   Insert at beginning of line
A                   Insert at end of line
o                   Open new line below
O                   Open new line above

RETURNING TO NORMAL MODE
Esc                 Always returns to Normal mode
Ctrl+[              Same as Esc (easier to reach)

SAVING AND QUITTING (Command mode)
:w                  Save (write)
:q                  Quit
:wq                 Save and quit
:q!                 Quit without saving (force)
ZZ                  Save and quit (shortcut)

NAVIGATION (Normal mode)
h j k l             Left, Down, Up, Right
w                   Next word
b                   Previous word
e                   End of word
0                   Beginning of line
$                   End of line
^                   First non-blank character
gg                  Beginning of file
G                   End of file
Ctrl+d              Half page down
Ctrl+u              Half page up
```

**Week 4-5: Efficiency**

```text
OPERATORS + MOTIONS = POWER
d + motion          Delete
c + motion          Change (delete + insert mode)
y + motion          Yank (copy)
v + motion          Visual select

EXAMPLES
dw                  Delete word
d$                  Delete to end of line
dd                  Delete entire line
cw                  Change word
cc                  Change entire line
yy                  Yank entire line
p                   Paste after cursor
P                   Paste before cursor

TEXT OBJECTS (inside/around)
iw                  Inner word
aw                  A word (includes space)
i"                  Inside quotes
a"                  Around quotes (includes quotes)
i(                  Inside parentheses
a(                  Around parentheses
it                  Inside HTML tag
at                  Around HTML tag

COMBINING
diw                 Delete inner word
ci"                 Change inside quotes
da(                 Delete around parentheses
yi{                 Yank inside braces
```

**Week 6-8: Power User**

```text
SEARCH
/pattern            Search forward
?pattern            Search backward
n                   Next match
N                   Previous match
*                   Search word under cursor

REPLACE
:%s/old/new/g       Replace all in file
:%s/old/new/gc      Replace all with confirmation
:s/old/new/g        Replace in current line

MARKS AND JUMPS
ma                  Set mark 'a'
'a                  Jump to mark 'a'
Ctrl+o              Jump back
Ctrl+i              Jump forward

MACROS
qa                  Start recording macro 'a'
q                   Stop recording
@a                  Play macro 'a'
@@                  Repeat last macro
```

**Resources:**

| Resource             | Purpose                    | Link                               |
| -------------------- | -------------------------- | ---------------------------------- |
| VS Code Docs         | Official shortcuts         | https://code.visualstudio.com/docs |
| VS Code Can Do That  | Tips and tricks            | https://vscodecandothat.com/       |
| Vim Tutor            | Built-in (type `vimtutor`) | Terminal                           |
| Vim Adventures       | Game-based learning        | https://vim-adventures.com/        |
| OpenVim              | Interactive tutorial       | https://www.openvim.com/           |
| Practical Vim (Book) | Deep mastery               | Book                               |
| Vim Genius           | Flashcard practice         | http://www.vimgenius.com/          |

**Milestones:**

- [ ] Week 3: Never touch mouse for basic editing
- [ ] Week 5: Multi-cursor editing feels natural
- [ ] Week 8: Custom snippets for your common patterns

---

