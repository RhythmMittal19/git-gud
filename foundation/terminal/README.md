# F2: Terminal & Command Line Mastery

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F2: Terminal & Command Line Mastery (Weeks 1-6)

> **Why this matters:** Real developers live in the terminal. GUIs are training wheels. Every server you'll ever touch runs Linux with no GUI. Every build tool, every deployment, every serious debugging session — all terminal.

> **Time Investment:** ~30 min/day | **Total:** ~15 hours over 6 weeks

The terminal is your home. GUIs are for tourists.

**What to Learn (In Order):**

**Week 1: Navigation & Basics**

```bash
# Where am I?
pwd                     # Print working directory

# What's here?
ls                      # List files
ls -la                  # List all files (including hidden) with details
ls -lh                  # Human-readable file sizes

# Moving around
cd /path/to/dir         # Change directory (absolute path)
cd relative/path        # Change directory (relative path)
cd ..                   # Go up one directory
cd ~                    # Go to home directory
cd -                    # Go to previous directory

# Creating things
mkdir dirname           # Create directory
mkdir -p path/to/dir    # Create nested directories
touch filename          # Create empty file

# Removing things (BE CAREFUL)
rm filename             # Remove file
rm -r dirname           # Remove directory and contents
rm -rf dirname          # Force remove (DANGEROUS — no confirmation)
rmdir dirname           # Remove empty directory only

# Copying and moving
cp source dest          # Copy file
cp -r source dest       # Copy directory
mv source dest          # Move (or rename) file/directory

# Reading files
cat filename            # Print entire file
less filename           # View file (scrollable, press q to quit)
head filename           # First 10 lines
head -n 20 filename     # First 20 lines
tail filename           # Last 10 lines
tail -f filename        # Follow file (great for logs)

# Other basics
clear                   # Clear screen (or Ctrl+L)
history                 # Show command history
man command             # Manual for command (press q to quit)
command --help          # Quick help for command

# Tab completion — USE THIS CONSTANTLY
# Type first few letters, press Tab to autocomplete
```

**Week 2: File Operations & Permissions**

```bash
# File permissions
ls -l                   # Shows permissions like: -rwxr-xr-x
# First character: - (file) or d (directory)
# Next 9: rwx for owner, group, others
# r=read(4), w=write(2), x=execute(1)

chmod 755 file          # rwxr-xr-x (owner: all, others: read+execute)
chmod 644 file          # rw-r--r-- (owner: read+write, others: read)
chmod +x file           # Add execute permission
chmod -w file           # Remove write permission

# Ownership
chown user file         # Change owner
chown user:group file   # Change owner and group
chgrp group file        # Change group only

# Finding things
find . -name "*.js"              # Find all .js files in current dir
find . -type f -name "*.txt"     # Find files only (not directories)
find . -type d -name "src"       # Find directories named src
find . -mtime -7                 # Files modified in last 7 days
which command                    # Where is this command located?
whereis command                  # Find command binary, source, manual

# File information
file filename           # What type of file is this?
wc filename             # Word, line, character count
wc -l filename          # Just line count
du -sh dirname          # Disk usage of directory (human-readable)
df -h                   # Disk free space (all drives)
```

**Week 3: Text Processing**

```bash
# grep — search text (you'll use this constantly)
grep "pattern" file              # Find lines containing pattern
grep -i "pattern" file           # Case insensitive
grep -r "pattern" .              # Recursive search in directory
grep -n "pattern" file           # Show line numbers
grep -v "pattern" file           # Lines NOT containing pattern
grep -c "pattern" file           # Count matching lines

# Pipes — connect commands (THIS IS POWERFUL)
command1 | command2              # Output of command1 → input of command2
ls -la | grep ".js"              # List files, show only .js files
cat file | head -20              # First 20 lines of file
history | grep "git"             # Find git commands in history

# Redirection
command > file           # Output to file (overwrite)
command >> file          # Output to file (append)
command 2> file          # Errors to file
command &> file          # Both output and errors to file
command < file           # Input from file

# sed — stream editor (basic substitution)
sed 's/old/new/' file            # Replace first occurrence per line
sed 's/old/new/g' file           # Replace all occurrences
sed -i 's/old/new/g' file        # Edit file in place (careful!)

# awk — powerful text processing
awk '{print $1}' file            # Print first column
awk '{print $1, $3}' file        # Print first and third columns
awk -F',' '{print $2}' file      # Use comma as delimiter

# Other useful text tools
sort file                # Sort lines
sort -n file             # Sort numerically
sort -r file             # Reverse sort
uniq file                # Remove adjacent duplicates
sort file | uniq         # Remove all duplicates
cut -d',' -f1 file       # Cut first field (comma delimiter)
tr 'a-z' 'A-Z' < file    # Translate lowercase to uppercase
```

**Week 4: Process Management**

```bash
# Viewing processes
ps                      # Your processes
ps aux                  # All processes (detailed)
ps aux | grep "node"    # Find node processes
top                     # Live process viewer (q to quit)
htop                    # Better process viewer (install separately)

# Process control
command &               # Run in background
jobs                    # List background jobs
fg                      # Bring last job to foreground
fg %1                   # Bring job 1 to foreground
bg                      # Continue stopped job in background
Ctrl+C                  # Kill foreground process
Ctrl+Z                  # Suspend (pause) foreground process

# Killing processes
kill PID                # Kill process by ID (graceful)
kill -9 PID             # Force kill (use as last resort)
killall processname     # Kill all processes with name
pkill -f "pattern"      # Kill processes matching pattern

# Environment variables
echo $PATH              # Print PATH variable
echo $HOME              # Print home directory
export VAR=value        # Set environment variable
printenv                # Print all environment variables
env                     # Same as printenv
```

**Week 5: System Information**

```bash
# System info
uname -a                # System information
hostname                # Computer name
uptime                  # How long system has been running
whoami                  # Current user
id                      # User and group IDs

# Disk and storage
df -h                   # Disk free space
du -sh *                # Size of each item in current directory
du -sh dirname          # Size of specific directory
lsblk                   # List block devices (drives)
mount                   # Show mounted filesystems
fdisk -l                # List disk partitions (needs sudo)

# Memory
free -h                 # Memory usage (human-readable)
vmstat                  # Virtual memory statistics

# Archives
tar -cvf archive.tar files      # Create tar archive
tar -xvf archive.tar            # Extract tar archive
tar -czvf archive.tar.gz files  # Create compressed archive
tar -xzvf archive.tar.gz        # Extract compressed archive
zip -r archive.zip dirname      # Create zip
unzip archive.zip               # Extract zip
gzip file                       # Compress file
gunzip file.gz                  # Decompress file
```

**Week 6: Networking Basics**

```bash
# Network information
ip addr                 # Show IP addresses (modern)
ifconfig                # Show IP addresses (older, may need install)
hostname -I             # Just IP addresses

# Testing connectivity
ping google.com         # Test connection (Ctrl+C to stop)
ping -c 4 google.com    # Ping 4 times then stop
traceroute google.com   # Trace route to destination
dig google.com          # DNS lookup
nslookup google.com     # DNS lookup (simpler)

# Downloading
curl https://example.com            # Fetch URL content
curl -o file.html https://url       # Save to file
curl -O https://url/file.zip        # Save with original name
wget https://url/file.zip           # Download file
wget -c https://url/file.zip        # Continue interrupted download

# Remote connections
ssh user@host           # Connect to remote server
ssh -p 2222 user@host   # Connect on specific port
scp file user@host:/path            # Copy file to remote
scp user@host:/path/file ./         # Copy file from remote
rsync -avz source/ user@host:/dest  # Sync directories

# Checking ports
netstat -tulpn          # Show listening ports
ss -tulpn               # Same (modern replacement)
lsof -i :3000           # What's using port 3000?
```

**Resources:**

| Resource                      | Purpose                               | Link                                                        |
| ----------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| Linux Journey                 | Interactive beginner course           | https://linuxjourney.com/                                   |
| LabEx Linux                   | Hands-on Linux labs                   | https://labex.io/                                           |
| The Linux Command Line (Book) | Comprehensive, FREE                   | https://linuxcommand.org/tlcl.php                           |
| OverTheWire Bandit            | Gamified learning **_(Recommended)_** | https://overthewire.org/wargames/bandit/                    |
| Terminus Game                 | Terminal game for beginners           | https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html |
| ExplainShell                  | Understand any command                | https://explainshell.com/                                   |
| tldr pages                    | Simplified man pages                  | https://tldr.sh/                                            |
| Commandline Challenge         | Practice challenges                   | https://cmdchallenge.com/                                   |

**Practice Project:**
Create a script that organizes your Downloads folder by file type automatically.

```bash
#!/bin/bash
# organize-downloads.sh
# Organizes files in Downloads by extension

DOWNLOADS=~/Downloads

# Create directories
mkdir -p "$DOWNLOADS"/{Images,Documents,Videos,Music,Archives,Code,Other}

# Move files by extension
mv "$DOWNLOADS"/*.{jpg,jpeg,png,gif,svg,webp} "$DOWNLOADS/Images/" 2>/dev/null
mv "$DOWNLOADS"/*.{pdf,doc,docx,txt,xlsx,pptx} "$DOWNLOADS/Documents/" 2>/dev/null
mv "$DOWNLOADS"/*.{mp4,mkv,avi,mov,wmv} "$DOWNLOADS/Videos/" 2>/dev/null
mv "$DOWNLOADS"/*.{mp3,wav,flac,aac} "$DOWNLOADS/Music/" 2>/dev/null
mv "$DOWNLOADS"/*.{zip,tar,gz,rar,7z} "$DOWNLOADS/Archives/" 2>/dev/null
mv "$DOWNLOADS"/*.{js,py,html,css,json,ts} "$DOWNLOADS/Code/" 2>/dev/null

echo "Downloads organized!"
```

**Milestones:**

- [ ] Week 1: Navigate file system without looking anything up
- [ ] Week 2: Understand and modify file permissions confidently
- [ ] Week 3: Use pipes to chain 3+ commands together
- [ ] Week 4: Kill a frozen process, manage background jobs
- [ ] Week 6: SSH into a remote server and transfer files

---

