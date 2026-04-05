---
name: File Transfer Method — Always Zip First
description: When copying large folders (especially photos) to USB or external drives, always zip first then copy — never rsync file-by-file
type: feedback
---

Always use ZIP when copying large folders to USB/external drives. Never use rsync file-by-file for photo libraries or folders with thousands of small files.

**Why:** Annia lost an entire day waiting for rsync to copy her Photos library at 20-30 kB/s because it copies each file individually. Zipping first creates one large file and transfers 10x faster.

**How to apply:**
- USB/external drive copy → `zip -r /Volumes/DriveName/folder.zip ~/source/folder/`
- Only use rsync when syncing between two Macs or for incremental backups where speed is not critical
- Always do the math first: estimate total size ÷ speed = time. If > 30 min, find a faster method.
- Think like an expert: save time, space, money — best results first.
