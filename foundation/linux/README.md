# F5: Linux Fundamentals

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F5: Linux Fundamentals (Weeks 3-10)

> **Why this matters:** Every server runs Linux. Every cloud runs Linux. WSL is a taste, not a meal. Understanding Linux means understanding how computers actually work at the OS level.

> **Time Investment:** ~30 min/day | **Total:** ~28 hours over 8 weeks

WSL is not enough. You need to understand Linux as an operating system.

**What to Learn:**

**Week 3-4: User & System Basics**

```bash
# User management
sudo useradd username            # Create user
sudo useradd -m username         # Create user with home directory
sudo passwd username             # Set password
sudo usermod -aG groupname user  # Add user to group
sudo userdel username            # Delete user
sudo userdel -r username         # Delete user and home directory

# Groups
groups                           # Your groups
groups username                  # User's groups
sudo groupadd groupname          # Create group
sudo groupdel groupname          # Delete group

# Understanding sudo
sudo command                     # Run as root
sudo -i                          # Become root
sudo su -                        # Switch to root user
visudo                           # Edit sudoers file (safe way)

# Package management (Debian/Ubuntu)
sudo apt update                  # Update package lists
sudo apt upgrade                 # Upgrade all packages
sudo apt install package         # Install package
sudo apt remove package          # Remove package
sudo apt autoremove              # Remove unused dependencies
apt search keyword               # Search for packages
apt show package                 # Package info

# Package management (Fedora/RHEL)
sudo dnf update                  # Update packages
sudo dnf install package         # Install package
sudo dnf remove package          # Remove package

# Services (systemd)
sudo systemctl start service     # Start service
sudo systemctl stop service      # Stop service
sudo systemctl restart service   # Restart service
sudo systemctl status service    # Check status
sudo systemctl enable service    # Start on boot
sudo systemctl disable service   # Don't start on boot
journalctl -u service            # View service logs
```

**Week 5-6: File System Deep Dive**

```bash
# Filesystem Hierarchy Standard (FHS)
/                   # Root directory
/home               # User home directories
/root               # Root user's home
/etc                # Configuration files
/var                # Variable data (logs, databases)
/tmp                # Temporary files (cleared on reboot)
/usr                # User programs and data
/usr/bin            # User binaries
/usr/local          # Locally installed software
/opt                # Optional/third-party software
/bin                # Essential binaries
/sbin               # System binaries
/lib                # Shared libraries
/dev                # Device files
/proc               # Process information (virtual)
/sys                # System information (virtual)
/mnt                # Mount points
/media              # Removable media

# Inodes
ls -i file                       # Show inode number
stat file                        # Detailed file info
df -i                            # Inode usage

# Links
ln target linkname               # Hard link (same inode)
ln -s target linkname            # Symbolic link (pointer)
# Hard links: same inode, can't cross filesystems
# Symbolic links: pointer to path, can cross filesystems

# Mounting
mount                            # Show mounted filesystems
sudo mount /dev/sdb1 /mnt        # Mount device
sudo umount /mnt                 # Unmount
cat /etc/fstab                   # Filesystem table (auto-mount)
```

**Week 7-8: Processes & Memory**

```bash
# Process concepts
# PID: Process ID
# PPID: Parent Process ID
# Every process has a parent (except init/systemd)
# Orphan processes adopted by init

# Process states
# R: Running
# S: Sleeping (waiting for event)
# D: Uninterruptible sleep (usually I/O)
# Z: Zombie (terminated, parent hasn't read exit status)
# T: Stopped

# Viewing processes
ps aux                           # All processes
ps -ef                           # Full format
pstree                           # Process tree
pgrep processname                # Find PID by name

# /proc filesystem
cat /proc/cpuinfo                # CPU information
cat /proc/meminfo                # Memory information
cat /proc/PID/status             # Process status
ls /proc/PID/fd                  # Process file descriptors

# Signals
kill -l                          # List all signals
kill PID                         # SIGTERM (graceful shutdown)
kill -9 PID                      # SIGKILL (force kill)
kill -HUP PID                    # SIGHUP (reload config)
kill -STOP PID                   # SIGSTOP (pause)
kill -CONT PID                   # SIGCONT (resume)

# Memory
free -h                          # Memory usage
cat /proc/meminfo                # Detailed memory info
vmstat 1                         # Virtual memory stats every 1s
# Swap: disk space used as memory overflow
swapon --show                    # Show swap
```

**Week 9-10: Networking & Security**

```bash
# Firewall (UFW - Uncomplicated Firewall)
sudo ufw status                  # Check status
sudo ufw enable                  # Enable firewall
sudo ufw disable                 # Disable firewall
sudo ufw allow 22                # Allow SSH
sudo ufw allow 80/tcp            # Allow HTTP
sudo ufw deny 23                 # Deny telnet
sudo ufw delete allow 80         # Remove rule

# SSH configuration
cat /etc/ssh/sshd_config         # SSH server config
# Key-based authentication (more secure than passwords)
ssh-keygen -t ed25519            # Generate key pair
ssh-copy-id user@host            # Copy public key to server

# File permissions deep dive
# Special permissions
chmod u+s file                   # SUID - run as owner
chmod g+s dir                    # SGID - inherit group
chmod +t dir                     # Sticky bit - only owner can delete

# ACLs (Access Control Lists)
getfacl file                     # View ACLs
setfacl -m u:user:rwx file       # Set ACL

# Security basics
last                             # Login history
lastb                            # Failed login attempts
who                              # Who is logged in
w                                # Who is logged in (detailed)
```

**Resources:**

| Resource                          | Purpose                | Link                                   |
| --------------------------------- | ---------------------- | -------------------------------------- |
| Linux Journey                     | Start here             | https://linuxjourney.com/              |
| Linux Fundamentals (Paul Cobbaut) | FREE comprehensive PDF | https://linux-training.be/linuxfun.pdf |
| Linux From Scratch                | Ultimate understanding | https://www.linuxfromscratch.org/      |
| Linux Upskill Challenge           | Practical sysadmin     | https://linuxupskillchallenge.org/     |
| Arch Wiki                         | Best reference ever    | https://wiki.archlinux.org/            |
| TLCL (The Linux Command Line)     | Free book              | https://linuxcommand.org/tlcl.php      |

**Milestones:**

- [ ] Week 4: Create users, manage permissions, install packages
- [ ] Week 6: Explain the Linux filesystem hierarchy from memory
- [ ] Week 8: Understand what a process is, kill and manage them
- [ ] Week 10: Configure SSH with key-based auth, set up basic firewall

---

