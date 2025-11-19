# F6: Shell Scripting — Bash

> [Back to Foundation](../README.md) | [Back to main](../../README.md)

### F6: Shell Scripting — Bash (Weeks 6-12)

> **Why this matters:** Automation. A good script saves hundreds of hours. Every CI/CD pipeline, every deployment, every system task — it's all shell scripts underneath.

> **Time Investment:** ~30 min/day | **Total:** ~21 hours over 7 weeks

Automate everything. A good script saves hundreds of hours.

**What to Learn:**

**Week 6-7: Basics**

```bash
#!/bin/bash
# The shebang ^ tells the system which interpreter to use

# Variables (no spaces around =)
name="Rhythm"
age=21
echo "Hello, $name"
echo "Age: ${age}"

# User input
read -p "Enter your name: " username
echo "Hello, $username"

# Arguments
# $0 = script name
# $1, $2, etc. = arguments
# $@ = all arguments
# $# = number of arguments
echo "Script: $0"
echo "First argument: $1"
echo "All arguments: $@"
echo "Number of arguments: $#"

# Exit codes
# 0 = success
# non-zero = failure
exit 0
exit 1

# Check last command's exit code
echo "hello"
echo $?  # Prints 0 (success)

# Comments
# This is a single-line comment

: '
This is a
multi-line comment
'
```

**Week 8-9: Control Flow**

```bash
#!/bin/bash

# If statements
if [ condition ]; then
    echo "True"
elif [ other_condition ]; then
    echo "Other"
else
    echo "False"
fi

# Comparison operators (test command / [ ])
# String comparison
[ "$a" = "$b" ]      # Equal
[ "$a" != "$b" ]     # Not equal
[ -z "$a" ]          # Empty string
[ -n "$a" ]          # Not empty string

# Numeric comparison
[ "$a" -eq "$b" ]    # Equal
[ "$a" -ne "$b" ]    # Not equal
[ "$a" -lt "$b" ]    # Less than
[ "$a" -le "$b" ]    # Less than or equal
[ "$a" -gt "$b" ]    # Greater than
[ "$a" -ge "$b" ]    # Greater than or equal

# File tests
[ -f "$file" ]       # Is a regular file
[ -d "$dir" ]        # Is a directory
[ -e "$path" ]       # Exists
[ -r "$file" ]       # Is readable
[ -w "$file" ]       # Is writable
[ -x "$file" ]       # Is executable

# Logical operators
[ cond1 ] && [ cond2 ]   # AND
[ cond1 ] || [ cond2 ]   # OR
! [ condition ]          # NOT

# Modern test: [[ ]] (preferred)
[[ "$a" == "$b" ]]       # Pattern matching
[[ "$a" =~ regex ]]      # Regex matching

# Case statement
case "$variable" in
    pattern1)
        echo "Pattern 1"
        ;;
    pattern2|pattern3)
        echo "Pattern 2 or 3"
        ;;
    *)
        echo "Default"
        ;;
esac

# Loops
# For loop
for i in 1 2 3 4 5; do
    echo "$i"
done

for i in {1..10}; do
    echo "$i"
done

for file in *.txt; do
    echo "Processing $file"
done

for ((i=0; i<10; i++)); do
    echo "$i"
done

# While loop
count=0
while [ $count -lt 5 ]; do
    echo "$count"
    ((count++))
done

# Until loop
until [ $count -ge 10 ]; do
    echo "$count"
    ((count++))
done

# Loop control
break       # Exit loop
continue    # Skip to next iteration
```

**Week 10-11: Functions & Advanced**

```bash
#!/bin/bash

# Function definition
function greet() {
    echo "Hello, $1"
}

# Alternative syntax
greet() {
    echo "Hello, $1"
}

# Calling functions
greet "World"

# Return values
# Functions return exit codes (0-255), not values
# Use echo to "return" values
get_date() {
    echo $(date +%Y-%m-%d)
}
today=$(get_date)

# Local variables
calculate() {
    local result=$(( $1 + $2 ))
    echo $result
}

# Arrays
fruits=("apple" "banana" "cherry")
echo ${fruits[0]}         # First element
echo ${fruits[@]}         # All elements
echo ${#fruits[@]}        # Array length
fruits+=("date")          # Add element

# Iterate array
for fruit in "${fruits[@]}"; do
    echo "$fruit"
done

# Associative arrays (dictionaries)
declare -A person
person[name]="Rhythm"
person[age]=21
echo ${person[name]}

# Command substitution
current_date=$(date)
files=$(ls)

# Arithmetic
result=$((5 + 3))
((count++))
((count += 5))

# String manipulation
str="Hello World"
echo ${#str}              # Length: 11
echo ${str:0:5}           # Substring: Hello
echo ${str/World/Bash}    # Replace: Hello Bash
echo ${str,,}             # Lowercase: hello world
echo ${str^^}             # Uppercase: HELLO WORLD

# Here documents
cat << EOF
This is a multi-line
string that preserves
formatting and $variables
EOF
```

**Week 12: Real Scripts**

```bash
#!/bin/bash
# Example: Backup script

set -e          # Exit on error
set -u          # Error on undefined variable
set -o pipefail # Catch errors in pipes

# Configuration
BACKUP_DIR="/backup"
SOURCE_DIR="/home/user/projects"
DATE=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_NAME="backup_${DATE}.tar.gz"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Error handling
error_exit() {
    log "ERROR: $1"
    exit 1
}

# Check if backup directory exists
if [[ ! -d "$BACKUP_DIR" ]]; then
    mkdir -p "$BACKUP_DIR" || error_exit "Failed to create backup directory"
fi

# Create backup
log "Starting backup..."
tar -czf "${BACKUP_DIR}/${BACKUP_NAME}" "$SOURCE_DIR" || error_exit "Backup failed"

# Remove old backups (keep last 7)
log "Cleaning old backups..."
ls -t "${BACKUP_DIR}"/backup_*.tar.gz | tail -n +8 | xargs -r rm

log "Backup completed: ${BACKUP_NAME}"
```

```bash
#!/bin/bash
# Example: System monitoring script

get_cpu_usage() {
    top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1
}

get_memory_usage() {
    free | grep Mem | awk '{printf("%.1f"), $3/$2 * 100}'
}

get_disk_usage() {
    df -h / | tail -1 | awk '{print $5}' | cut -d'%' -f1
}

echo "=== System Status ==="
echo "CPU Usage: $(get_cpu_usage)%"
echo "Memory Usage: $(get_memory_usage)%"
echo "Disk Usage: $(get_disk_usage)%"

# Alert if usage is high
cpu=$(get_cpu_usage)
if (( $(echo "$cpu > 80" | bc -l) )); then
    echo "WARNING: High CPU usage!"
fi
```

**Resources:**

| Resource                 | Purpose             | Link                                          |
| ------------------------ | ------------------- | --------------------------------------------- |
| Bash Guide (Wooledge)    | The best reference  | https://mywiki.wooledge.org/BashGuide         |
| Shell Scripting Tutorial | Beginner friendly   | https://www.shellscript.sh/                   |
| Pure Bash Bible          | Advanced techniques | https://github.com/dylanaraps/pure-bash-bible |
| Exercism Bash Track      | Practice problems   | https://exercism.org/tracks/bash              |
| ShellCheck               | Linting tool        | https://www.shellcheck.net/                   |

**Projects to Build:**

1. **Automated backup script** (with rotation)
2. **System monitoring script** (CPU, memory, disk)
3. **Project scaffolding script** (creates folder structure)
4. **Git workflow automation** (commit, push, PR creation)
5. **Downloads organizer** (sort files by type)

**Milestones:**

- [ ] Week 7: Write a script with variables and arguments
- [ ] Week 9: Write a script with loops and conditionals
- [ ] Week 11: Write a script with functions and arrays
- [ ] Week 12: Automate something you do manually every day

---

