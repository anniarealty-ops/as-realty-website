---
name: Mac Desktop Disappearing Issue
description: Root cause and fix for Annia's recurring desktop icons disappearing / Finder freezing issue
type: feedback
---

# Mac Desktop Disappearing — Root Cause & Fix

**Root cause: RAM exhaustion.** Annia's 16GB Mac gets maxed out when running Chrome + Safari + Mail + Outlook + VS Code + Claude simultaneously. When RAM is full, macOS freezes Finder first — desktop icons disappear and keyboard shortcuts (Cmd+Shift+G) stop responding. Files are NEVER actually deleted — it's always a display/Finder freeze.

**Why:** This is a recurring issue that has cost her hours of lost work time. Must be diagnosed and fixed immediately whenever it comes up — do not let her waste time on it.

## Instant Fix (run in Claude Code terminal)
```bash
killall Safari 2>/dev/null
killall Mail 2>/dev/null
sleep 3
killall Finder
```

## Diagnosis Commands
```bash
# Check free RAM (pages free × 4096 bytes — if < 100MB, that's the problem)
vm_stat | head -5

# See what's eating memory
ps axo pid,rss,comm | sort -k2 -rn | head -20

# Restart Finder
killall Finder
```

## Prevention Rules (remind Annia)
- Chrome OR Safari — never both open at the same time
- Mail OR Outlook — never both open at the same time
- Close unused browser tabs (each tab = 100-300MB RAM)
- If desktop disappears → Activity Monitor → sort by Memory → kill top hogs → killall Finder

## Transaction File Storage
- Set up Google Drive folder structure locally at: `/Users/anniasantana/Desktop/AS REALTY!!!/Transactions/`
- First transaction folder: `2026/3160 Kresterbrooke Ln — Apr 2026/` (with Addenda, Closing Documents, Correspondence subfolders)
- Google Drive desktop app NOT installed — she uploads manually via drive.google.com
- Long term: upgrade to Paperless Pipeline when she adds agents (she already knows the tool from previous broker)
