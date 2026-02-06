export const courseData = {
  title: "Linux Command Line Mastery",
  description: "Master the Linux terminal from basic navigation to advanced system administration",
  chapters: [
    {
      id: 1,
      title: "File System Navigation",
      description: "Learn to navigate the Linux file system like a pro",
      lessons: [
        {
          id: 1,
          title: "Understanding the File System Structure",
          duration: "15 min",
          content: `
# Understanding the Linux File System

The Linux file system is organized as a hierarchical tree structure, starting from the root directory \`/\`.

## Key Directories

| Directory | Purpose |
|-----------|---------|
| \`/\` | Root - the top of the file system |
| \`/home\` | User home directories |
| \`/etc\` | System configuration files |
| \`/var\` | Variable data (logs, databases) |
| \`/usr\` | User programs and data |
| \`/bin\` | Essential command binaries |
| \`/tmp\` | Temporary files |
| \`/opt\` | Optional/third-party software |

## The pwd Command

The \`pwd\` (print working directory) command shows your current location:

\`\`\`bash
$ pwd
/home/username
\`\`\`

## The ls Command

List directory contents with various options:

\`\`\`bash
# Basic listing
$ ls
Documents  Downloads  Pictures

# Long format with details
$ ls -l
drwxr-xr-x 2 user user 4096 Jan 15 10:30 Documents
drwxr-xr-x 2 user user 4096 Jan 15 10:30 Downloads

# Show hidden files (starting with .)
$ ls -a
.  ..  .bashrc  .profile  Documents

# Human-readable sizes
$ ls -lh
-rw-r--r-- 1 user user 1.5K Jan 15 10:30 file.txt

# Sort by modification time
$ ls -lt

# Combine options
$ ls -lah
\`\`\`

<tip>
💡 Hidden files in Linux start with a dot (.). Your configuration files are usually hidden!
</tip>

## Understanding ls -l Output

\`\`\`
drwxr-xr-x 2 user group 4096 Jan 15 10:30 Documents
│├─┬─┤├─┤ │  │    │     │    └── Name
││ │ │ │  │  │    │     └── Date modified
││ │ │ │  │  │    └── Size in bytes
││ │ │ │  │  └── Group owner
││ │ │ │  └── User owner
││ │ │ └── Number of hard links
││ │ └── Others permissions (r-x)
││ └── Group permissions (r-x)
│└── User permissions (rwx)
└── File type (d=directory, -=file, l=link)
\`\`\`

<warning>
⚠️ Never run commands you don't understand, especially as root!
</warning>

### Practice Exercises

1. **Navigate the filesystem**: Use \`ls -la /\` to list the root directory. Identify 5 directories and describe their purpose.
2. **Read ls -l output**: Run \`ls -l\` in your home directory and identify the owner, group, permissions, and size of each item.
3. **Find hidden files**: Use \`ls -a\` to find hidden files in your home directory. What do \`.bashrc\` and \`.profile\` do?
4. **Practice commands**: Navigate to \`/var/log\`, list the contents sorted by modification time (\`ls -lt\`), and find the most recently modified log file.
          `
        },
        {
          id: 2,
          title: "Navigating with cd and Paths",
          duration: "12 min",
          content: `
# Navigating the File System with cd

The \`cd\` (change directory) command is your primary navigation tool.

## Basic Navigation

\`\`\`bash
# Go to a directory
$ cd Documents

# Go to home directory (three ways)
$ cd
$ cd ~
$ cd $HOME

# Go to root directory
$ cd /

# Go up one level
$ cd ..

# Go up two levels
$ cd ../..

# Go to previous directory
$ cd -
\`\`\`

## Absolute vs Relative Paths

| Type | Description | Example |
|------|-------------|---------|
| Absolute | Full path from root | \`/home/user/Documents\` |
| Relative | Path from current location | \`./Documents\` or \`Documents\` |

\`\`\`bash
# Absolute path (starts with /)
$ cd /var/log

# Relative path (from current directory)
$ cd Documents/Projects

# Using . (current directory)
$ cd ./Downloads

# Using ~ (home directory)
$ cd ~/Documents
\`\`\`

## Path Shortcuts

| Symbol | Meaning |
|--------|---------|
| \`~\` | Home directory |
| \`.\` | Current directory |
| \`..\` | Parent directory |
| \`-\` | Previous directory |

## Tab Completion

One of the most useful features! Press Tab to autocomplete:

\`\`\`bash
$ cd Doc[TAB]
$ cd Documents/

$ cd /etc/sys[TAB][TAB]
sysctl.conf  sysctl.d/  systemd/
\`\`\`

<tip>
💡 Double-tap Tab to see all possible completions when there are multiple matches.
</tip>

## Practical Examples

\`\`\`bash
# Common workflow
$ pwd
/home/user

$ cd /var/log
$ pwd
/var/log

$ cd -
/home/user

$ cd ~/Documents/Projects/myapp
$ pwd
/home/user/Documents/Projects/myapp

$ cd ../../
$ pwd
/home/user/Documents
\`\`\`

## The pushd and popd Commands

For complex navigation, use directory stack:

\`\`\`bash
# Save current directory and change
$ pushd /var/log
/var/log ~

# Go back to saved directory
$ popd
~

# View directory stack
$ dirs
\`\`\`

<warning>
⚠️ Spaces in directory names need escaping or quotes: \`cd My\\ Documents\` or \`cd "My Documents"\`
</warning>

### Practice Exercises

1. **Navigate challenge**: From your home directory, navigate to \`/var/log\`, then use \`cd -\` to return. Use \`pushd\` and \`popd\` to switch between 3 directories.
2. **Path practice**: Navigate to a deep directory using an absolute path. Then navigate to the same place using a relative path. Verify with \`pwd\`.
3. **Tab completion**: Practice tab completion by typing partial directory names and pressing Tab. Try double-Tab to see multiple options.
4. **Speed drill**: Navigate to /etc, /var/log, /tmp, /home, and back to your home directory — all within 30 seconds using shortcuts.
          `
        }
      ]
    },
    {
      id: 2,
      title: "File Operations",
      description: "Create, copy, move, and delete files and directories",
      lessons: [
        {
          id: 3,
          title: "Creating and Managing Files",
          duration: "18 min",
          content: `
# Creating and Managing Files

Learn to create, copy, move, and organize files from the command line.

## Creating Files

\`\`\`bash
# Create empty file
$ touch newfile.txt

# Create multiple files
$ touch file1.txt file2.txt file3.txt

# Create file with content
$ echo "Hello World" > greeting.txt

# Append to file
$ echo "Another line" >> greeting.txt

# Create file with cat (Ctrl+D to save)
$ cat > notes.txt
Type your content here
Press Ctrl+D when done
\`\`\`

## Creating Directories

\`\`\`bash
# Create single directory
$ mkdir projects

# Create nested directories
$ mkdir -p projects/webapp/src/components

# Create multiple directories
$ mkdir dir1 dir2 dir3

# Create with specific permissions
$ mkdir -m 755 secure_folder
\`\`\`

## Copying Files and Directories

\`\`\`bash
# Copy file
$ cp source.txt destination.txt

# Copy to directory
$ cp file.txt /path/to/directory/

# Copy multiple files
$ cp file1.txt file2.txt /destination/

# Copy directory recursively
$ cp -r sourcedir/ destdir/

# Copy with preservation of attributes
$ cp -p file.txt backup.txt

# Interactive mode (ask before overwrite)
$ cp -i source.txt dest.txt

# Verbose output
$ cp -v file.txt backup.txt
'file.txt' -> 'backup.txt'
\`\`\`

## Useful cp Options

| Option | Description |
|--------|-------------|
| \`-r\` | Recursive (for directories) |
| \`-i\` | Interactive (prompt before overwrite) |
| \`-v\` | Verbose (show what's being done) |
| \`-p\` | Preserve attributes (permissions, timestamps) |
| \`-u\` | Update (copy only when source is newer) |
| \`-n\` | No clobber (don't overwrite existing) |

## Moving and Renaming

The \`mv\` command moves AND renames:

\`\`\`bash
# Rename file
$ mv oldname.txt newname.txt

# Move file to directory
$ mv file.txt /path/to/directory/

# Move and rename
$ mv file.txt /path/to/newname.txt

# Move multiple files
$ mv file1.txt file2.txt /destination/

# Move directory
$ mv sourcedir/ /new/location/

# Interactive mode
$ mv -i source.txt dest.txt
\`\`\`

<tip>
💡 Unlike Windows, Linux has no "rename" command — just use \`mv\`!
</tip>

## Viewing File Contents

\`\`\`bash
# View entire file
$ cat file.txt

# View with line numbers
$ cat -n file.txt

# View large files page by page
$ less file.txt
$ more file.txt

# View first/last lines
$ head file.txt        # first 10 lines
$ head -n 20 file.txt  # first 20 lines
$ tail file.txt        # last 10 lines
$ tail -f logfile.txt  # follow updates live
\`\`\`

<warning>
⚠️ Be careful with \`mv\` — there's no undo! Use the \`-i\` flag when unsure.
</warning>

### Practice Exercises

1. **File creation**: Create a directory structure: \`project/src/components/\` and \`project/tests/\` in one command using \`mkdir -p\`.
2. **Copy and move**: Create 3 files, copy them to a new directory with \`cp\`, then rename one using \`mv\`.
3. **View files**: Create a file with 100 lines (\`seq 1 100 > numbers.txt\`). Practice viewing with \`head -20\`, \`tail -20\`, and \`less\`.
4. **Append content**: Use \`echo\` with \`>>\` to build a file line by line. Then use \`cat\` to view the result.
          `
        },
        {
          id: 4,
          title: "Deleting and Finding Files",
          duration: "15 min",
          content: `
# Deleting and Finding Files

Master file deletion and the powerful find command.

## Deleting Files with rm

\`\`\`bash
# Delete single file
$ rm file.txt

# Delete multiple files
$ rm file1.txt file2.txt file3.txt

# Delete with confirmation
$ rm -i important.txt
rm: remove regular file 'important.txt'? y

# Force delete (no confirmation)
$ rm -f file.txt

# Delete directory and contents
$ rm -r directory/

# Force delete directory
$ rm -rf directory/

# Verbose output
$ rm -v file.txt
removed 'file.txt'
\`\`\`

<warning>
⚠️ \`rm -rf /\` will destroy your entire system! NEVER run this!
</warning>

## Safer Alternatives

\`\`\`bash
# Use trash-cli instead of rm
$ trash-put file.txt
$ trash-list
$ trash-restore

# Or use rmdir for empty directories only
$ rmdir empty_directory/
\`\`\`

## The find Command

The most powerful file search tool:

\`\`\`bash
# Find by name
$ find /path -name "filename.txt"

# Find by name (case insensitive)
$ find /path -iname "*.TXT"

# Find in current directory
$ find . -name "*.js"

# Find by type
$ find . -type f  # files only
$ find . -type d  # directories only
$ find . -type l  # symbolic links

# Find by size
$ find . -size +100M  # larger than 100MB
$ find . -size -1k    # smaller than 1KB
$ find . -size 50M    # exactly 50MB

# Find by modification time
$ find . -mtime -7    # modified in last 7 days
$ find . -mtime +30   # modified more than 30 days ago
$ find . -mmin -60    # modified in last 60 minutes
\`\`\`

## find with Actions

\`\`\`bash
# Delete found files
$ find . -name "*.tmp" -delete

# Execute command on each file
$ find . -name "*.log" -exec rm {} \\;

# Execute with confirmation
$ find . -name "*.bak" -ok rm {} \\;

# Print with details
$ find . -name "*.txt" -ls
\`\`\`

## Common find Patterns

| Pattern | Description |
|---------|-------------|
| \`-name "*.log"\` | All .log files |
| \`-type f -empty\` | Empty files |
| \`-type d -empty\` | Empty directories |
| \`-user john\` | Files owned by john |
| \`-perm 755\` | Files with permission 755 |
| \`-newer file.txt\` | Files newer than file.txt |

## Combining Conditions

\`\`\`bash
# AND (implicit)
$ find . -name "*.txt" -size +1M

# OR
$ find . -name "*.jpg" -o -name "*.png"

# NOT
$ find . ! -name "*.txt"

# Complex expression
$ find . \\( -name "*.js" -o -name "*.ts" \\) -type f -mtime -7
\`\`\`

## Alternative: locate

Faster but requires database update:

\`\`\`bash
# Update database
$ sudo updatedb

# Fast search
$ locate filename

# Case insensitive
$ locate -i FILENAME
\`\`\`

<tip>
💡 Use \`find\` for precise, current results. Use \`locate\` for quick searches when the database is fresh.
</tip>

### Practice Exercises

1. **Find by name**: Find all \`.txt\` files in your home directory recursively.
2. **Find by size**: Find all files larger than 10MB in \`/var\`. Then find all empty files in your home directory.
3. **Find with actions**: Find all \`.log\` files in \`/tmp\` and delete them (use \`-delete\` or \`-exec rm\`).
4. **Complex find**: Find all \`.js\` or \`.ts\` files modified in the last 7 days, excluding \`node_modules\`.
          `
        }
      ]
    },
    {
      id: 3,
      title: "File Permissions",
      description: "Master Linux permission system and file ownership",
      lessons: [
        {
          id: 5,
          title: "Understanding Permission Basics",
          duration: "20 min",
          content: `
# Understanding Linux Permissions

Linux uses a robust permission system to control file access.

## Permission Types

| Permission | Symbol | File | Directory |
|------------|--------|------|-----------|
| Read | r (4) | View contents | List contents |
| Write | w (2) | Modify contents | Create/delete files |
| Execute | x (1) | Run as program | Enter directory |

## Reading Permissions

\`\`\`bash
$ ls -l file.txt
-rw-r--r-- 1 owner group 1234 Jan 15 10:30 file.txt
\`\`\`

Breaking down \`-rw-r--r--\`:
- First character: file type (\`-\` = file, \`d\` = directory, \`l\` = link)
- Characters 2-4: Owner permissions (\`rw-\` = read+write)
- Characters 5-7: Group permissions (\`r--\` = read only)
- Characters 8-10: Others permissions (\`r--\` = read only)

## Numeric (Octal) Notation

Each permission has a numeric value:
- Read (r) = 4
- Write (w) = 2
- Execute (x) = 1

| Symbolic | Numeric | Meaning |
|----------|---------|---------|
| rwx | 7 | Full access |
| rw- | 6 | Read and write |
| r-x | 5 | Read and execute |
| r-- | 4 | Read only |
| -wx | 3 | Write and execute |
| -w- | 2 | Write only |
| --x | 1 | Execute only |
| --- | 0 | No access |

## Common Permission Sets

| Numeric | Symbolic | Use Case |
|---------|----------|----------|
| 755 | rwxr-xr-x | Executables, directories |
| 644 | rw-r--r-- | Regular files |
| 700 | rwx------ | Private directories |
| 600 | rw------- | Private files (SSH keys) |
| 777 | rwxrwxrwx | Full access (avoid!) |

## The chmod Command

\`\`\`bash
# Numeric mode
$ chmod 755 script.sh
$ chmod 644 document.txt

# Symbolic mode - adding permissions
$ chmod u+x script.sh    # add execute for user
$ chmod g+w file.txt     # add write for group
$ chmod o-r file.txt     # remove read for others
$ chmod a+r file.txt     # add read for all

# Symbolic mode - setting permissions
$ chmod u=rwx,g=rx,o=r file.txt

# Recursive (directories)
$ chmod -R 755 directory/
\`\`\`

## Symbolic Mode Reference

| Symbol | Meaning |
|--------|---------|
| u | User (owner) |
| g | Group |
| o | Others |
| a | All (u+g+o) |
| + | Add permission |
| - | Remove permission |
| = | Set exact permission |

## Special Permissions

\`\`\`bash
# Setuid (4): Run as file owner
$ chmod u+s executable
$ chmod 4755 executable

# Setgid (2): Inherit group ownership
$ chmod g+s directory/
$ chmod 2755 directory/

# Sticky bit (1): Only owner can delete
$ chmod +t /shared/
$ chmod 1777 /shared/
\`\`\`

<tip>
💡 The sticky bit on /tmp prevents users from deleting each other's files!
</tip>

<warning>
⚠️ Avoid 777 permissions — it allows anyone to do anything with your files!
</warning>

### Practice Exercises

1. **Read permissions**: Run \`ls -l\` on several files and decode the permission string for each.
2. **Set permissions**: Create a script file. Set it to owner-executable using both numeric (\`chmod 755\`) and symbolic (\`chmod u+x\`) modes.
3. **Test access**: Create a file as your user, remove read permission for others, then try to read it as a different user (or test with group permissions).
4. **Private file**: Create a file with 600 permissions. Verify that only you can read and write it.
          `
        },
        {
          id: 6,
          title: "Ownership with chown and chgrp",
          duration: "12 min",
          content: `
# Managing File Ownership

Every file has an owner and a group. Learn to change them.

## Understanding Ownership

\`\`\`bash
$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 15 file.txt
              │    │
              │    └── Group owner
              └── User owner
\`\`\`

## The chown Command

Change file owner and/or group:

\`\`\`bash
# Change owner only
$ sudo chown newowner file.txt

# Change owner and group
$ sudo chown newowner:newgroup file.txt

# Change group only (with colon)
$ sudo chown :newgroup file.txt

# Recursive (directories)
$ sudo chown -R john:developers /project/

# Reference another file
$ sudo chown --reference=reference.txt target.txt
\`\`\`

## The chgrp Command

Change group only:

\`\`\`bash
# Change group
$ sudo chgrp developers file.txt

# Recursive
$ sudo chgrp -R webteam /var/www/

# Reference another file
$ sudo chgrp --reference=ref.txt target.txt
\`\`\`

## Practical Examples

\`\`\`bash
# Web server files (Apache/Nginx)
$ sudo chown -R www-data:www-data /var/www/html/

# Shared project directory
$ sudo chown -R :developers /project/
$ sudo chmod -R g+rw /project/

# User home directory
$ sudo chown -R john:john /home/john/

# Application with different owner/group
$ sudo chown root:appgroup /opt/myapp/
$ sudo chmod 750 /opt/myapp/
\`\`\`

## Working with Groups

\`\`\`bash
# List your groups
$ groups
john sudo developers docker

# List another user's groups
$ groups jane

# Add user to group
$ sudo usermod -aG docker john

# Create new group
$ sudo groupadd projectteam

# Remove user from group
$ sudo gpasswd -d john docker
\`\`\`

## The newgrp Command

Temporarily switch primary group:

\`\`\`bash
# Switch to different group
$ newgrp developers

# Files created now will have 'developers' group
$ touch newfile.txt
$ ls -l newfile.txt
-rw-r--r-- 1 john developers 0 Jan 15 newfile.txt
\`\`\`

## Default Permissions: umask

\`\`\`bash
# View current umask
$ umask
0022

# Files: 666 - 022 = 644 (rw-r--r--)
# Dirs:  777 - 022 = 755 (rwxr-xr-x)

# Set umask
$ umask 027
# Files: 666 - 027 = 640 (rw-r-----)
# Dirs:  777 - 027 = 750 (rwxr-x---)

# View symbolically
$ umask -S
u=rwx,g=rx,o=
\`\`\`

## Common Scenarios

| Scenario | Commands |
|----------|----------|
| Personal files | \`chmod 600 file\` |
| Shared read | \`chmod 644 file\` |
| Shared write | \`chmod 664 file\` & same group |
| Web files | \`chown www-data:www-data\` |
| Scripts | \`chmod 755 script.sh\` |

<tip>
💡 Add yourself to necessary groups and log out/in for changes to take effect.
</tip>

<warning>
⚠️ Only root can change file ownership. You need sudo!
</warning>

### Practice Exercises

1. **Check your groups**: Run \`groups\` to see your group memberships. Run \`id\` for detailed user/group info.
2. **Change ownership**: Create a file, check its owner with \`ls -l\`, then change the group using \`chgrp\`.
3. **Shared directory**: Create a directory for a group with setgid bit. Verify that new files inherit the group ownership.
4. **Umask practice**: Check your current umask. Create a file and directory — verify their permissions match the umask calculation.
          `
        }
      ]
    },
    {
      id: 4,
      title: "Text Processing",
      description: "Master grep, sed, awk and other text manipulation tools",
      lessons: [
        {
          id: 7,
          title: "Searching with grep",
          duration: "18 min",
          content: `
# Searching Text with grep

grep (Global Regular Expression Print) is essential for text searching.

## Basic grep Usage

\`\`\`bash
# Search for pattern in file
$ grep "error" logfile.txt

# Case insensitive
$ grep -i "Error" logfile.txt

# Show line numbers
$ grep -n "error" logfile.txt

# Count matches
$ grep -c "error" logfile.txt

# Show only filenames with matches
$ grep -l "error" *.log

# Recursive search in directories
$ grep -r "TODO" /project/src/

# Invert match (lines NOT matching)
$ grep -v "debug" logfile.txt
\`\`\`

## Useful grep Options

| Option | Description |
|--------|-------------|
| \`-i\` | Case insensitive |
| \`-n\` | Show line numbers |
| \`-c\` | Count matches only |
| \`-l\` | List filenames only |
| \`-L\` | List files without match |
| \`-v\` | Invert match |
| \`-r\` | Recursive search |
| \`-w\` | Match whole words |
| \`-x\` | Match whole lines |
| \`-A n\` | Show n lines after |
| \`-B n\` | Show n lines before |
| \`-C n\` | Show n lines context |

## Context Options

\`\`\`bash
# Show 3 lines after match
$ grep -A 3 "error" logfile.txt

# Show 2 lines before match
$ grep -B 2 "error" logfile.txt

# Show 2 lines before and after
$ grep -C 2 "error" logfile.txt
\`\`\`

## Regular Expressions

\`\`\`bash
# Basic patterns
$ grep "^Error" file.txt      # starts with Error
$ grep "error$" file.txt      # ends with error
$ grep "^$" file.txt          # empty lines
$ grep "colou*r" file.txt     # color or colour

# Extended regex (-E or egrep)
$ grep -E "error|warning" file.txt    # OR
$ grep -E "[0-9]{3}" file.txt         # 3 digits
$ grep -E "https?://" file.txt        # http or https

# Perl regex (-P)
$ grep -P "\\d{3}-\\d{4}" file.txt    # phone pattern
\`\`\`

## Common Patterns

| Pattern | Matches |
|---------|---------|
| \`.\` | Any single character |
| \`*\` | Zero or more of previous |
| \`+\` | One or more of previous |
| \`?\` | Zero or one of previous |
| \`[abc]\` | Any of a, b, c |
| \`[0-9]\` | Any digit |
| \`[a-z]\` | Any lowercase letter |
| \`^\` | Start of line |
| \`$\` | End of line |
| \`\\b\` | Word boundary |

## Practical Examples

\`\`\`bash
# Find IP addresses
$ grep -E "\\b[0-9]{1,3}(\\.[0-9]{1,3}){3}\\b" access.log

# Find email addresses
$ grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" file.txt

# Find error lines with timestamp
$ grep -E "^[0-9]{4}-[0-9]{2}-[0-9]{2}.*ERROR" app.log

# Search code for function definitions
$ grep -rn "function.*(" --include="*.js" src/

# Find TODO comments
$ grep -rn "TODO\\|FIXME\\|XXX" --include="*.py" .

# Exclude directories
$ grep -r "pattern" --exclude-dir={node_modules,.git} .
\`\`\`

## Piping with grep

\`\`\`bash
# Filter command output
$ ps aux | grep nginx
$ history | grep ssh
$ cat /var/log/syslog | grep -i error

# Chain grep commands
$ grep "error" log.txt | grep -v "timeout" | grep "server"
\`\`\`

<tip>
💡 Use \`grep -o\` to show only the matching part, not the whole line!
</tip>

### Practice Exercises

1. **Basic grep**: Search for "error" (case-insensitive) in system logs: \`grep -i "error" /var/log/syslog\`.
2. **Regex practice**: Use grep to find lines starting with a number, lines ending with a period, and lines containing an email address pattern.
3. **Context search**: Search for "failed" in a log file and show 3 lines before and after each match using \`-C 3\`.
4. **Pipeline mastery**: Use \`ps aux | grep\` to find specific processes. Then use \`history | grep\` to find past commands.
          `
        },
        {
          id: 8,
          title: "Stream Editing with sed and awk",
          duration: "25 min",
          content: `
# Text Transformation with sed and awk

sed and awk are powerful stream editors for text manipulation.

## sed Basics

sed (Stream EDitor) transforms text line by line:

\`\`\`bash
# Basic substitution
$ sed 's/old/new/' file.txt           # first occurrence per line
$ sed 's/old/new/g' file.txt          # all occurrences (global)
$ sed 's/old/new/gi' file.txt         # global, case insensitive

# Edit file in place
$ sed -i 's/old/new/g' file.txt

# Backup before editing
$ sed -i.bak 's/old/new/g' file.txt

# Multiple substitutions
$ sed -e 's/old/new/g' -e 's/foo/bar/g' file.txt
\`\`\`

## sed Addressing

\`\`\`bash
# Specific line number
$ sed '5s/old/new/' file.txt          # only line 5

# Line range
$ sed '1,10s/old/new/g' file.txt      # lines 1-10

# From line to end
$ sed '5,$s/old/new/g' file.txt       # line 5 to end

# Pattern matching
$ sed '/error/s/old/new/' file.txt    # lines containing "error"

# Delete lines
$ sed '5d' file.txt                   # delete line 5
$ sed '1,3d' file.txt                 # delete lines 1-3
$ sed '/pattern/d' file.txt           # delete matching lines

# Print specific lines
$ sed -n '5p' file.txt                # print only line 5
$ sed -n '1,10p' file.txt             # print lines 1-10
\`\`\`

## sed Advanced

\`\`\`bash
# Capture groups
$ sed 's/\\(.*\\)@\\(.*\\)/User: \\1, Domain: \\2/' emails.txt

# Insert and append
$ sed '3i\\New line before 3' file.txt
$ sed '3a\\New line after 3' file.txt

# Replace entire line
$ sed '5c\\Replacement line' file.txt

# Multiple commands
$ sed '{
  s/foo/bar/g
  s/old/new/g
  /delete/d
}' file.txt
\`\`\`

## awk Basics

awk is a pattern scanning and processing language:

\`\`\`bash
# Print specific columns
$ awk '{print $1}' file.txt           # first column
$ awk '{print $1, $3}' file.txt       # first and third
$ awk '{print $NF}' file.txt          # last column

# Custom field separator
$ awk -F':' '{print $1}' /etc/passwd
$ awk -F',' '{print $2}' data.csv

# Print with formatting
$ awk '{printf "%-10s %s\\n", $1, $2}' file.txt
\`\`\`

## awk Built-in Variables

| Variable | Meaning |
|----------|---------|
| \`$0\` | Entire line |
| \`$1, $2...\` | Field 1, 2, etc. |
| \`NF\` | Number of fields |
| \`NR\` | Record (line) number |
| \`FS\` | Field separator |
| \`OFS\` | Output field separator |
| \`RS\` | Record separator |

## awk Patterns and Conditions

\`\`\`bash
# Pattern matching
$ awk '/error/' file.txt              # lines with "error"
$ awk '!/error/' file.txt             # lines without "error"

# Conditions
$ awk '$3 > 100' file.txt             # third field > 100
$ awk 'NR > 1' file.txt               # skip header row
$ awk 'NF > 0' file.txt               # non-empty lines

# BEGIN and END blocks
$ awk 'BEGIN {print "Start"} {print} END {print "Done"}' file.txt

# Sum a column
$ awk '{sum += $1} END {print sum}' numbers.txt

# Average
$ awk '{sum += $1; count++} END {print sum/count}' numbers.txt
\`\`\`

## Practical Examples

\`\`\`bash
# Extract usernames from /etc/passwd
$ awk -F':' '{print $1}' /etc/passwd

# Process log files
$ awk '/ERROR/ {print $1, $2, $NF}' app.log

# Sum file sizes
$ ls -l | awk '{sum += $5} END {print "Total:", sum}'

# CSV processing
$ awk -F',' 'NR>1 {sum += $3} END {print "Total:", sum}' sales.csv

# Unique values
$ awk '{a[$1]++} END {for (k in a) print k, a[k]}' file.txt

# Replace in place (using temp file)
$ awk '{gsub(/old/, "new"); print}' file.txt > tmp && mv tmp file.txt
\`\`\`

<tip>
💡 Use \`sed\` for simple substitutions, \`awk\` for column-based processing!
</tip>

### Practice Exercises

1. **sed substitution**: Create a file with "Hello World" repeated 5 times. Use sed to replace "World" with "Linux" globally.
2. **sed line operations**: Use sed to delete the first 3 lines of a file, then to print only lines 5-10.
3. **awk columns**: Use awk to print the first and last columns from \`ls -l\` output. Then print only the file sizes.
4. **awk calculation**: Use awk on \`ls -l\` to sum all file sizes: \`ls -l | awk '{sum += $5} END {print sum}'\`.
          `
        }
      ]
    },
    {
      id: 5,
      title: "Bash Scripting",
      description: "Write powerful shell scripts to automate tasks",
      lessons: [
        {
          id: 9,
          title: "Script Fundamentals",
          duration: "22 min",
          content: `
# Bash Scripting Fundamentals

Automate tasks with shell scripts.

## Creating Your First Script

\`\`\`bash
#!/bin/bash
# This is a comment
# my_script.sh - A simple script

echo "Hello, World!"
\`\`\`

\`\`\`bash
# Make it executable
$ chmod +x my_script.sh

# Run it
$ ./my_script.sh
Hello, World!
\`\`\`

## The Shebang

The first line tells the system which interpreter to use:

\`\`\`bash
#!/bin/bash      # Bash shell
#!/bin/sh        # POSIX shell
#!/usr/bin/env bash   # Portable way to find bash
#!/usr/bin/python3    # Python script
\`\`\`

## Variables

\`\`\`bash
#!/bin/bash

# Assign variables (no spaces around =)
name="John"
count=42
today=$(date +%Y-%m-%d)

# Use variables
echo "Hello, $name"
echo "Today is $today"
echo "Count: $count"

# Curly braces for clarity
echo "File: \${name}_backup.txt"

# Read-only variable
readonly PI=3.14159

# Unset variable
unset count
\`\`\`

## Special Variables

| Variable | Meaning |
|----------|---------|
| \`$0\` | Script name |
| \`$1, $2...\` | Arguments 1, 2, etc. |
| \`$#\` | Number of arguments |
| \`$@\` | All arguments as separate strings |
| \`$*\` | All arguments as one string |
| \`$?\` | Exit status of last command |
| \`$$\` | Current script PID |
| \`$!\` | PID of last background command |

## User Input

\`\`\`bash
#!/bin/bash

# Read input
echo "What is your name?"
read name
echo "Hello, $name!"

# Read with prompt
read -p "Enter your age: " age

# Read password (hidden)
read -sp "Enter password: " password
echo  # newline

# Read with timeout
read -t 5 -p "Quick! Enter something: " response

# Read into array
read -a colors -p "Enter colors: "
echo "First color: \${colors[0]}"
\`\`\`

## Command Line Arguments

\`\`\`bash
#!/bin/bash
# greet.sh

if [ $# -eq 0 ]; then
    echo "Usage: $0 <name>"
    exit 1
fi

echo "Hello, $1!"
echo "You passed $# arguments"

# Loop through all arguments
for arg in "$@"; do
    echo "Arg: $arg"
done
\`\`\`

## Exit Codes

\`\`\`bash
#!/bin/bash

# 0 = success, non-zero = error
if some_command; then
    echo "Success"
    exit 0
else
    echo "Failed"
    exit 1
fi

# Check last command status
some_command
if [ $? -eq 0 ]; then
    echo "Command succeeded"
fi
\`\`\`

## Script Template

\`\`\`bash
#!/bin/bash
# ===========================================
# Script Name: backup.sh
# Description: Backup important files
# Author: Your Name
# Date: 2024-01-15
# ===========================================

set -e          # Exit on error
set -u          # Error on undefined variable
set -o pipefail # Pipeline fails on any error

# Variables
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d)

# Functions
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Main
log "Starting backup..."
# Your code here
log "Backup complete!"
\`\`\`

<tip>
💡 Always use \`set -e\` to stop on errors and \`set -u\` to catch typos in variable names!
</tip>

### Practice Exercises

1. **First script**: Write a script that takes your name as an argument and prints "Hello, [name]! Today is [date]."
2. **Variables**: Write a script that stores the current date, hostname, and username in variables, then prints a formatted system summary.
3. **User input**: Write a script that asks for a filename, checks if it exists (\`-f\`), and displays its contents or an error message.
4. **Error handling**: Write a script with \`set -e\` that tries to cd to a non-existent directory — observe how it exits on error.
          `
        },
        {
          id: 10,
          title: "Control Structures and Functions",
          duration: "25 min",
          content: `
# Control Structures and Functions

Master conditionals, loops, and functions in Bash.

## If Statements

\`\`\`bash
#!/bin/bash

# Basic if
if [ "$name" = "John" ]; then
    echo "Hello John!"
fi

# If-else
if [ $count -gt 10 ]; then
    echo "Count is greater than 10"
else
    echo "Count is 10 or less"
fi

# If-elif-else
if [ $score -ge 90 ]; then
    grade="A"
elif [ $score -ge 80 ]; then
    grade="B"
elif [ $score -ge 70 ]; then
    grade="C"
else
    grade="F"
fi
\`\`\`

## Test Operators

### String Comparisons
| Operator | Meaning |
|----------|---------|
| \`=\` or \`==\` | Equal |
| \`!=\` | Not equal |
| \`-z\` | Empty string |
| \`-n\` | Non-empty string |

### Numeric Comparisons
| Operator | Meaning |
|----------|---------|
| \`-eq\` | Equal |
| \`-ne\` | Not equal |
| \`-gt\` | Greater than |
| \`-ge\` | Greater or equal |
| \`-lt\` | Less than |
| \`-le\` | Less or equal |

### File Tests
| Operator | Meaning |
|----------|---------|
| \`-e\` | Exists |
| \`-f\` | Is regular file |
| \`-d\` | Is directory |
| \`-r\` | Is readable |
| \`-w\` | Is writable |
| \`-x\` | Is executable |
| \`-s\` | Has size > 0 |

## Example Tests

\`\`\`bash
# File checks
if [ -f "/etc/passwd" ]; then
    echo "File exists"
fi

if [ -d "$HOME/Documents" ]; then
    echo "Directory exists"
fi

if [ ! -e "$file" ]; then
    echo "File does not exist"
fi

# Multiple conditions
if [ -f "$file" ] && [ -r "$file" ]; then
    echo "File exists and is readable"
fi

if [ "$a" = "x" ] || [ "$a" = "y" ]; then
    echo "a is x or y"
fi
\`\`\`

## For Loops

\`\`\`bash
# Loop through list
for fruit in apple banana orange; do
    echo "Fruit: $fruit"
done

# Loop through files
for file in *.txt; do
    echo "Processing $file"
done

# C-style for loop
for ((i=1; i<=5; i++)); do
    echo "Number: $i"
done

# Loop through arguments
for arg in "$@"; do
    echo "Argument: $arg"
done

# Loop through range
for i in {1..10}; do
    echo $i
done

# Range with step
for i in {0..100..10}; do
    echo $i  # 0, 10, 20, ...
done
\`\`\`

## While and Until Loops

\`\`\`bash
# While loop
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Until loop (opposite of while)
count=1
until [ $count -gt 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt

# Infinite loop
while true; do
    echo "Press Ctrl+C to stop"
    sleep 1
done
\`\`\`

## Case Statements

\`\`\`bash
case "$1" in
    start)
        echo "Starting..."
        ;;
    stop)
        echo "Stopping..."
        ;;
    restart)
        echo "Restarting..."
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac
\`\`\`

## Functions

\`\`\`bash
#!/bin/bash

# Define function
greet() {
    echo "Hello, $1!"
}

# Function with return value
add() {
    local result=$(( $1 + $2 ))
    echo $result
}

# Function with local variables
process_file() {
    local filename=$1
    local count=$(wc -l < "$filename")
    echo "File $filename has $count lines"
}

# Call functions
greet "World"
sum=$(add 5 3)
echo "Sum: $sum"
process_file "data.txt"
\`\`\`

## Error Handling

\`\`\`bash
#!/bin/bash
set -e  # Exit on error

# Custom error handler
trap 'echo "Error on line $LINENO"; exit 1' ERR

# Function with error handling
safe_cd() {
    cd "$1" || { echo "Failed to cd to $1"; exit 1; }
}

# Check command success
if ! command -v git &> /dev/null; then
    echo "git is not installed"
    exit 1
fi
\`\`\`

<tip>
💡 Always quote variables: \`"$var"\` prevents word splitting issues!
</tip>

### Practice Exercises

1. **If statements**: Write a script that checks if a number (argument) is positive, negative, or zero.
2. **For loop**: Write a script that loops through all \`.txt\` files in a directory and prints their line counts.
3. **While loop**: Write a script that reads a file line by line and counts the total lines.
4. **Functions**: Write a script with a \`backup()\` function that copies a file to a \`.bak\` version. Call it with different filenames.
          `
        }
      ]
    },
    {
      id: 6,
      title: "Process Management",
      description: "Monitor and control running processes",
      lessons: [
        {
          id: 11,
          title: "Viewing Processes with ps and top",
          duration: "18 min",
          content: `
# Viewing and Monitoring Processes

Learn to see what's running on your system.

## The ps Command

\`\`\`bash
# Basic - your processes
$ ps
  PID TTY          TIME CMD
 1234 pts/0    00:00:00 bash
 5678 pts/0    00:00:00 ps

# All processes (BSD style)
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 225816  9324 ?        Ss   Jan10   0:03 /sbin/init
...

# All processes (Unix style)
$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 Jan10 ?        00:00:03 /sbin/init
...
\`\`\`

## Understanding ps Output

| Column | Meaning |
|--------|---------|
| PID | Process ID |
| PPID | Parent Process ID |
| %CPU | CPU usage |
| %MEM | Memory usage |
| VSZ | Virtual memory size |
| RSS | Resident memory size |
| TTY | Terminal |
| STAT | Process state |
| TIME | CPU time used |
| COMMAND | Command name |

## Process States

| State | Meaning |
|-------|---------|
| R | Running |
| S | Sleeping (interruptible) |
| D | Sleeping (uninterruptible) |
| T | Stopped |
| Z | Zombie |
| < | High priority |
| N | Low priority |
| s | Session leader |
| + | Foreground process |

## Useful ps Commands

\`\`\`bash
# Find specific process
$ ps aux | grep nginx

# Show process tree
$ ps auxf
$ pstree

# Show only specific columns
$ ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem

# Top 10 memory consumers
$ ps aux --sort=-%mem | head -11

# Top 10 CPU consumers
$ ps aux --sort=-%cpu | head -11

# Show threads
$ ps -eLf
\`\`\`

## The top Command

Real-time process viewer:

\`\`\`bash
$ top
\`\`\`

### top Interface

\`\`\`
top - 10:30:00 up 5 days,  2:00,  1 user,  load average: 0.50, 0.35, 0.25
Tasks: 256 total,   1 running, 255 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.5 us,  1.0 sy,  0.0 ni, 96.0 id,  0.5 wa,  0.0 hi,  0.0 si
MiB Mem :  16000.0 total,   8000.0 free,   4000.0 used,   4000.0 cache
MiB Swap:   2000.0 total,   2000.0 free,      0.0 used.  11000.0 avail

  PID USER      %CPU %MEM    TIME+  COMMAND
 1234 user      25.0  5.0   1:30.00 chrome
 ...
\`\`\`

### top Keyboard Shortcuts

| Key | Action |
|-----|--------|
| q | Quit |
| k | Kill process |
| r | Renice process |
| M | Sort by memory |
| P | Sort by CPU |
| T | Sort by time |
| c | Toggle command line |
| 1 | Toggle per-CPU stats |
| h | Help |

## Better Alternatives

\`\`\`bash
# htop - colorful, interactive
$ htop

# btop - modern, beautiful
$ btop

# glances - comprehensive monitoring
$ glances
\`\`\`

## Load Average

The three numbers show system load for:
- Last 1 minute
- Last 5 minutes  
- Last 15 minutes

\`\`\`bash
# View load average
$ uptime
10:30:00 up 5 days, 2:00, 1 user, load average: 0.50, 0.35, 0.25

$ cat /proc/loadavg
0.50 0.35 0.25 1/256 12345
\`\`\`

<tip>
💡 Load average should typically stay below your CPU core count. Use \`nproc\` to check cores.
</tip>

<warning>
⚠️ High load (>2x cores) indicates system stress. Investigate with top/htop.
</warning>

### Practice Exercises

1. **Explore processes**: Run \`ps aux\` and identify the top 5 CPU-consuming processes. Then do the same for memory.
2. **Use top**: Open \`top\`, press \`M\` to sort by memory, then \`P\` for CPU. Practice killing a process with \`k\`.
3. **Process tree**: Run \`ps auxf\` or \`pstree\` to see the process hierarchy. Find the init/systemd process at the top.
4. **Load average**: Check your system's load average with \`uptime\`. Compare it to the number of CPU cores (\`nproc\`). Is your system stressed?
          `
        },
        {
          id: 12,
          title: "Controlling Processes",
          duration: "15 min",
          content: `
# Controlling Processes

Start, stop, and manage running processes.

## Background and Foreground

\`\`\`bash
# Run in background
$ long_command &
[1] 12345

# List background jobs
$ jobs
[1]+  Running    long_command &

# Bring to foreground
$ fg %1

# Send to background (after Ctrl+Z)
$ bg %1

# Suspend current process
$ Ctrl+Z
[1]+  Stopped    long_command
\`\`\`

## The kill Command

\`\`\`bash
# Kill by PID
$ kill 12345

# Force kill
$ kill -9 12345

# Kill by name
$ killall firefox
$ pkill chrome

# Kill all user processes
$ pkill -u username
\`\`\`

## Common Signals

| Signal | Number | Action |
|--------|--------|--------|
| SIGHUP | 1 | Hangup/reload |
| SIGINT | 2 | Interrupt (Ctrl+C) |
| SIGQUIT | 3 | Quit |
| SIGKILL | 9 | Force kill (cannot ignore) |
| SIGTERM | 15 | Terminate (default) |
| SIGSTOP | 19 | Stop (cannot ignore) |
| SIGCONT | 18 | Continue |

\`\`\`bash
# Send specific signal
$ kill -SIGHUP 12345    # Reload config
$ kill -SIGSTOP 12345   # Pause process
$ kill -SIGCONT 12345   # Resume process

# List all signals
$ kill -l
\`\`\`

## Process Priority (nice)

Priority ranges from -20 (highest) to 19 (lowest).

\`\`\`bash
# Run with lower priority
$ nice -n 10 long_command

# Run with higher priority (requires root)
$ sudo nice -n -10 important_command

# Change running process priority
$ renice 10 -p 12345
$ sudo renice -10 -p 12345
\`\`\`

## The nohup Command

Keep processes running after logout:

\`\`\`bash
# Run immune to hangups
$ nohup long_command &
nohup: ignoring input and appending output to 'nohup.out'

# With custom output
$ nohup long_command > output.log 2>&1 &

# Disown a running job
$ long_command &
$ disown %1
\`\`\`

## Screen and tmux

Terminal multiplexers for persistent sessions:

\`\`\`bash
# Start new screen session
$ screen -S mysession

# Detach: Ctrl+A, then D

# List sessions
$ screen -ls

# Reattach
$ screen -r mysession

# tmux equivalents
$ tmux new -s mysession
$ tmux ls
$ tmux attach -t mysession
\`\`\`

## System Services (systemd)

\`\`\`bash
# Service status
$ sudo systemctl status nginx

# Start/stop/restart
$ sudo systemctl start nginx
$ sudo systemctl stop nginx
$ sudo systemctl restart nginx
$ sudo systemctl reload nginx

# Enable/disable at boot
$ sudo systemctl enable nginx
$ sudo systemctl disable nginx

# List all services
$ systemctl list-units --type=service

# View service logs
$ journalctl -u nginx
$ journalctl -u nginx -f  # follow
\`\`\`

## Practical Examples

\`\`\`bash
# Kill all zombie processes
$ ps aux | awk '$8=="Z" {print $2}' | xargs -r kill -9

# Find and kill process using port
$ lsof -ti:8080 | xargs kill

# Monitor specific process
$ watch -n 1 'ps aux | grep nginx'

# Wait for process to finish
$ wait $PID

# Run command with timeout
$ timeout 60 long_command
\`\`\`

<tip>
💡 Always try \`kill\` (SIGTERM) before \`kill -9\` (SIGKILL) to allow graceful shutdown.
</tip>

<warning>
⚠️ \`kill -9\` doesn't allow cleanup — use only as last resort!
</warning>

### Practice Exercises

1. **Background jobs**: Start a long-running command (\`sleep 300\`), send it to background with \`&\`, list jobs, bring to foreground, then kill it.
2. **Signal practice**: Start a \`sleep 1000\` process. Send SIGTERM, then SIGKILL. Observe the difference.
3. **Service management**: List all running services with \`systemctl\`. Check the status of \`sshd\` or \`nginx\`.
4. **Screen/tmux**: Start a screen or tmux session, run a command, detach, list sessions, and reattach.
          `
        }
      ]
    },
    {
      id: 7,
      title: "Networking Commands",
      description: "Essential networking tools for diagnostics and transfers",
      lessons: [
        {
          id: 13,
          title: "Network Diagnostics",
          duration: "20 min",
          content: `
# Network Diagnostics

Essential commands for network troubleshooting.

## Checking Connectivity

\`\`\`bash
# Ping host
$ ping google.com
PING google.com (142.250.80.46) 56(84) bytes of data.
64 bytes from 142.250.80.46: icmp_seq=1 ttl=117 time=12.3 ms

# Ping with count
$ ping -c 4 google.com

# Ping with interval
$ ping -i 0.5 google.com
\`\`\`

## Network Interfaces

\`\`\`bash
# Show all interfaces
$ ip addr
$ ip a

# Show specific interface
$ ip addr show eth0

# Show routing table
$ ip route
$ ip r

# Old commands (still work)
$ ifconfig
$ route -n
\`\`\`

## DNS Lookups

\`\`\`bash
# Basic lookup
$ nslookup google.com
$ host google.com
$ dig google.com

# Detailed dig
$ dig google.com +short
142.250.80.46

$ dig google.com MX    # Mail servers
$ dig google.com NS    # Name servers
$ dig google.com ANY   # All records

# Reverse lookup
$ dig -x 8.8.8.8
$ host 8.8.8.8
\`\`\`

## Tracing Routes

\`\`\`bash
# Trace route
$ traceroute google.com
traceroute to google.com (142.250.80.46), 30 hops max
 1  router (192.168.1.1)  1.234 ms
 2  isp-gateway  10.123 ms
 ...

# Using ICMP (like Windows)
$ traceroute -I google.com

# Modern alternative
$ mtr google.com
\`\`\`

## Port Checking

\`\`\`bash
# Check if port is open
$ nc -zv google.com 443
Connection to google.com 443 port [tcp/https] succeeded!

# Check multiple ports
$ nc -zv host.com 80 443 8080

# Netstat - show listening ports
$ netstat -tlnp
$ netstat -tulnp  # include UDP

# ss - modern replacement
$ ss -tlnp
$ ss -tulnp
\`\`\`

## ss Command Options

| Option | Meaning |
|--------|---------|
| -t | TCP |
| -u | UDP |
| -l | Listening |
| -n | Numeric (don't resolve) |
| -p | Show process |
| -a | All sockets |

## Network Statistics

\`\`\`bash
# Connection statistics
$ ss -s
Total: 234
TCP:   45 (estab 12, closed 8, orphaned 0, timewait 5)

# Active connections
$ ss -tn state established

# Connections to specific port
$ ss -tn dst :443

# Who's connected to my server
$ ss -tn src :22
\`\`\`

## Checking Open Ports/Connections

\`\`\`bash
# What's listening on which port
$ sudo lsof -i -P -n | grep LISTEN
$ sudo lsof -i :80

# Find process using port
$ sudo lsof -ti :8080
$ sudo fuser 8080/tcp
\`\`\`

## Testing HTTP

\`\`\`bash
# Quick check
$ curl -I https://google.com  # headers only
$ curl -s -o /dev/null -w "%{http_code}" https://google.com

# Full request
$ curl -v https://api.example.com

# POST request
$ curl -X POST -d "data=value" https://api.example.com

# With headers
$ curl -H "Authorization: Bearer token" https://api.example.com
\`\`\`

## Downloading

\`\`\`bash
# wget - download file
$ wget https://example.com/file.zip

# Resume interrupted download
$ wget -c https://example.com/large-file.zip

# Download to specific name
$ wget -O myfile.zip https://example.com/file.zip

# curl download
$ curl -O https://example.com/file.zip
$ curl -o myfile.zip https://example.com/file.zip
\`\`\`

<tip>
💡 Use \`mtr\` instead of \`traceroute\` — it combines ping and traceroute with real-time updates!
</tip>

### Practice Exercises

1. **Connectivity check**: Ping google.com with 5 packets. Then use \`traceroute\` to see the network path.
2. **DNS lookup**: Use \`dig google.com\` to find IP addresses. Try \`dig -x 8.8.8.8\` for reverse lookup.
3. **Port scanning**: Use \`ss -tlnp\` to find all listening ports on your system. Identify which services are running.
4. **HTTP testing**: Use \`curl -I\` to check the headers of 3 different websites. Note the HTTP status codes and server types.
          `
        },
        {
          id: 14,
          title: "SSH and Remote Connections",
          duration: "18 min",
          content: `
# SSH and Remote Connections

Secure Shell (SSH) for remote access.

## Basic SSH

\`\`\`bash
# Connect to remote server
$ ssh user@hostname
$ ssh user@192.168.1.100

# Specify port
$ ssh -p 2222 user@hostname

# Verbose (debugging)
$ ssh -v user@hostname
\`\`\`

## SSH Keys

\`\`\`bash
# Generate SSH key pair
$ ssh-keygen -t ed25519 -C "your_email@example.com"
# or RSA
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Copy public key to server
$ ssh-copy-id user@hostname

# Or manually
$ cat ~/.ssh/id_ed25519.pub | ssh user@hostname 'cat >> ~/.ssh/authorized_keys'
\`\`\`

## SSH Config File

Create \`~/.ssh/config\` for shortcuts:

\`\`\`
# ~/.ssh/config
Host myserver
    HostName 192.168.1.100
    User admin
    Port 22
    IdentityFile ~/.ssh/id_ed25519

Host production
    HostName prod.example.com
    User deploy
    Port 2222

Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
\`\`\`

Now connect with: \`ssh myserver\`

## Running Remote Commands

\`\`\`bash
# Execute single command
$ ssh user@host "ls -la"

# Execute multiple commands
$ ssh user@host "cd /var/log && tail -100 syslog"

# Run local script remotely
$ ssh user@host 'bash -s' < local_script.sh
\`\`\`

## File Transfer with SCP

\`\`\`bash
# Copy to remote
$ scp file.txt user@host:/path/to/destination/

# Copy from remote
$ scp user@host:/path/to/file.txt ./

# Copy directory
$ scp -r directory/ user@host:/path/

# Specify port
$ scp -P 2222 file.txt user@host:/path/
\`\`\`

## File Transfer with rsync

\`\`\`bash
# Sync to remote
$ rsync -avz local/ user@host:/remote/

# Sync from remote
$ rsync -avz user@host:/remote/ local/

# Dry run (show what would happen)
$ rsync -avzn local/ user@host:/remote/

# Delete files not in source
$ rsync -avz --delete local/ user@host:/remote/

# Exclude files
$ rsync -avz --exclude='*.log' local/ user@host:/remote/
\`\`\`

## rsync Options

| Option | Meaning |
|--------|---------|
| -a | Archive mode (preserves everything) |
| -v | Verbose |
| -z | Compress during transfer |
| -P | Show progress + partial transfers |
| -n | Dry run |
| --delete | Delete extra files at destination |

## SSH Tunneling

\`\`\`bash
# Local port forwarding
# Access remote_host:3306 via localhost:3306
$ ssh -L 3306:localhost:3306 user@remote_host

# Remote port forwarding
# Make local :8080 available on remote :9090
$ ssh -R 9090:localhost:8080 user@remote_host

# Dynamic (SOCKS proxy)
$ ssh -D 8080 user@remote_host
# Configure browser to use localhost:8080 as SOCKS proxy
\`\`\`

## SSH Agent

\`\`\`bash
# Start agent
$ eval "$(ssh-agent -s)"

# Add key
$ ssh-add ~/.ssh/id_ed25519

# List keys
$ ssh-add -l

# Forward agent to remote
$ ssh -A user@host
\`\`\`

## Security Best Practices

\`\`\`bash
# Secure permissions
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/id_ed25519
$ chmod 644 ~/.ssh/id_ed25519.pub
$ chmod 600 ~/.ssh/config

# Disable password auth (in /etc/ssh/sshd_config)
PasswordAuthentication no
PermitRootLogin no
\`\`\`

<tip>
💡 Use \`rsync\` over \`scp\` for large transfers — it's faster and can resume!
</tip>

<warning>
⚠️ Never share private SSH keys. Use \`ssh-keygen -p\` to add a passphrase for extra protection.
</warning>

### Practice Exercises

1. **SSH key setup**: Generate an ED25519 SSH key pair. Examine the public and private key files.
2. **SSH config**: Create an \`~/.ssh/config\` file with at least one host alias. Test connecting using the alias.
3. **File transfer**: Use \`scp\` to copy a file to a remote server (or between directories locally). Then do the same with \`rsync\`.
4. **SSH tunnel**: Set up a local port forward to access a remote service (e.g., a database) through SSH.
          `
        }
      ]
    },
    {
      id: 8,
      title: "Package Management",
      description: "Install, update, and manage software packages",
      lessons: [
        {
          id: 15,
          title: "Debian/Ubuntu Package Management (apt)",
          duration: "15 min",
          content: `
# Debian/Ubuntu Package Management

APT (Advanced Package Tool) for Debian-based systems.

## Updating Package Lists

\`\`\`bash
# Update package list (always do this first!)
$ sudo apt update

# Upgrade installed packages
$ sudo apt upgrade

# Full upgrade (handles dependencies better)
$ sudo apt full-upgrade

# Update and upgrade together
$ sudo apt update && sudo apt upgrade -y
\`\`\`

## Installing Packages

\`\`\`bash
# Install package
$ sudo apt install nginx

# Install multiple packages
$ sudo apt install nginx mysql-server php

# Install without prompts
$ sudo apt install -y package-name

# Install specific version
$ sudo apt install nginx=1.18.0-0ubuntu1

# Install from .deb file
$ sudo dpkg -i package.deb
$ sudo apt install -f  # fix dependencies
\`\`\`

## Removing Packages

\`\`\`bash
# Remove package (keep config)
$ sudo apt remove nginx

# Remove package and config
$ sudo apt purge nginx

# Remove unused dependencies
$ sudo apt autoremove

# Clean package cache
$ sudo apt autoclean
$ sudo apt clean
\`\`\`

## Searching and Info

\`\`\`bash
# Search for packages
$ apt search nginx
$ apt-cache search "web server"

# Show package info
$ apt show nginx

# List installed packages
$ apt list --installed

# List upgradable
$ apt list --upgradable

# Check if installed
$ dpkg -l nginx
\`\`\`

## Managing Repositories

\`\`\`bash
# Add PPA
$ sudo add-apt-repository ppa:nginx/stable
$ sudo apt update

# Remove PPA
$ sudo add-apt-repository --remove ppa:nginx/stable

# List repositories
$ cat /etc/apt/sources.list
$ ls /etc/apt/sources.list.d/

# Add GPG key
$ wget -qO - https://example.com/key.gpg | sudo apt-key add -
\`\`\`

## Useful Commands

\`\`\`bash
# Which package provides a file
$ dpkg -S /usr/bin/vim
$ apt-file search /usr/bin/vim

# List files in package
$ dpkg -L nginx

# Reconfigure package
$ sudo dpkg-reconfigure tzdata

# Hold package version
$ sudo apt-mark hold nginx
$ sudo apt-mark unhold nginx

# Show held packages
$ apt-mark showhold
\`\`\`

## Package Cache Locations

| Path | Purpose |
|------|---------|
| /var/cache/apt/archives/ | Downloaded .deb files |
| /var/lib/apt/lists/ | Package lists |
| /var/lib/dpkg/status | Installed package database |

## Practical Examples

\`\`\`bash
# Full system update
$ sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y

# Find large installed packages
$ dpkg-query -W --showformat='\${Installed-Size;10}\\t\${Package}\\n' | sort -k1,1n | tail -20

# List manually installed packages
$ apt-mark showmanual

# Check broken packages
$ sudo apt --fix-broken install
\`\`\`

<tip>
💡 Run \`sudo apt update\` before installing anything to ensure latest package info!
</tip>

<warning>
⚠️ Be careful with PPAs — they're third-party and may conflict with system packages.
</warning>

### Practice Exercises

1. **Update system**: Run a full system update with \`sudo apt update && sudo apt upgrade\`.
2. **Install and remove**: Install a package (e.g., \`tree\`), verify it works, then remove it with \`apt remove\` and clean up with \`autoremove\`.
3. **Package info**: Use \`apt show\` to get info about a package before installing. Use \`dpkg -L\` to list installed files.
4. **Find packages**: Search for "web server" packages using \`apt search\`. Compare the results.
          `
        },
        {
          id: 16,
          title: "RHEL/CentOS Package Management (yum/dnf)",
          duration: "15 min",
          content: `
# RHEL/CentOS Package Management

YUM and DNF for Red Hat-based systems.

## DNF vs YUM

- **YUM** (Yellowdog Updater Modified) - older, still works
- **DNF** (Dandified YUM) - modern replacement (RHEL 8+, Fedora)

Most commands are identical - just replace \`yum\` with \`dnf\`.

## Updating System

\`\`\`bash
# Check for updates
$ sudo dnf check-update

# Update all packages
$ sudo dnf update
$ sudo dnf update -y  # no prompts

# Update specific package
$ sudo dnf update nginx

# Upgrade (same as update in dnf)
$ sudo dnf upgrade
\`\`\`

## Installing Packages

\`\`\`bash
# Install package
$ sudo dnf install nginx

# Install multiple
$ sudo dnf install nginx mariadb php

# Install from local RPM
$ sudo dnf install ./package.rpm

# Install from URL
$ sudo dnf install https://example.com/package.rpm

# Reinstall package
$ sudo dnf reinstall nginx
\`\`\`

## Removing Packages

\`\`\`bash
# Remove package
$ sudo dnf remove nginx

# Remove with dependencies
$ sudo dnf autoremove nginx

# Clean unused dependencies
$ sudo dnf autoremove

# Clean cache
$ sudo dnf clean all
$ sudo dnf clean packages
$ sudo dnf clean metadata
\`\`\`

## Searching and Info

\`\`\`bash
# Search packages
$ dnf search nginx
$ dnf search all "web server"

# Package info
$ dnf info nginx

# List installed
$ dnf list installed

# List available
$ dnf list available

# List updates available
$ dnf list updates

# What provides a file
$ dnf provides /usr/bin/vim
$ dnf provides "*/bin/vim"
\`\`\`

## Managing Repositories

\`\`\`bash
# List repositories
$ dnf repolist
$ dnf repolist all  # including disabled

# Enable/disable repo
$ sudo dnf config-manager --enable epel
$ sudo dnf config-manager --disable epel

# Add repository
$ sudo dnf config-manager --add-repo https://example.com/repo.repo

# Install EPEL (Extra Packages)
$ sudo dnf install epel-release
\`\`\`

## Package Groups

\`\`\`bash
# List available groups
$ dnf group list

# Install group
$ sudo dnf group install "Development Tools"
$ sudo dnf groupinstall "Development Tools"

# Remove group
$ sudo dnf group remove "Development Tools"

# Group info
$ dnf group info "Development Tools"
\`\`\`

## History and Rollback

\`\`\`bash
# View history
$ dnf history

# View specific transaction
$ dnf history info 25

# Undo transaction
$ sudo dnf history undo 25

# Rollback to transaction
$ sudo dnf history rollback 20
\`\`\`

## Useful Commands

\`\`\`bash
# List package files
$ rpm -ql nginx

# Find which package owns file
$ rpm -qf /etc/nginx/nginx.conf

# Verify package integrity
$ rpm -V nginx

# Download without installing
$ dnf download nginx
$ dnfdownloader nginx

# List dependencies
$ dnf repoquery --requires nginx
$ dnf repoquery --whatrequires nginx
\`\`\`

## DNF Modules (RHEL 8+)

\`\`\`bash
# List modules
$ dnf module list

# Enable module stream
$ sudo dnf module enable nodejs:16

# Install module
$ sudo dnf module install nodejs:16

# Reset module
$ sudo dnf module reset nodejs
\`\`\`

## Comparison Table

| Task | apt | dnf/yum |
|------|-----|---------|
| Update lists | apt update | dnf check-update |
| Upgrade all | apt upgrade | dnf update |
| Install | apt install pkg | dnf install pkg |
| Remove | apt remove pkg | dnf remove pkg |
| Search | apt search term | dnf search term |
| Info | apt show pkg | dnf info pkg |
| Clean | apt clean | dnf clean all |
| List installed | apt list --installed | dnf list installed |

<tip>
💡 EPEL repository provides many additional packages for RHEL/CentOS!
</tip>

<warning>
⚠️ On production servers, test updates in staging first and consider using \`dnf history rollback\` for recovery.
</warning>

### Practice Exercises

1. **Compare package managers**: If you have access to both Ubuntu and CentOS systems, install the same package on both and compare the commands.
2. **Repository management**: List all configured repositories. On Ubuntu, add and remove a PPA. On CentOS, enable/disable EPEL.
3. **Package history**: On a CentOS/RHEL system, use \`dnf history\` to review recent package operations.
4. **Group install**: On CentOS, list available package groups with \`dnf group list\` and install "Development Tools".
          `
        }
      ]
    }
  ]
};
