---
name: Boot Camp Windows Installation Plan
description: Plan to install Windows 10 via Boot Camp on Annia's iMac so she can run Claude Cowork
type: project
---

Mac cannot run Claude Cowork natively — Intel i5 chip and macOS Monterey 12 are incompatible (Cowork requires Apple Silicon OR Windows). Plan: install Windows 10 via Boot Camp (free).

**Why:** Claude Cowork requires either Apple Silicon (M1+) on Mac or Windows. Annia's iMac17,1 (Late 2015, Intel i5-6500) maxes out at macOS Monterey 12.7.6 and cannot upgrade to Ventura officially.

**How to apply:** When Annia asks about Cowork or continuing this setup, pick up from whatever step she's on.

## Status (March 19, 2026)
- ⏳ IN PROGRESS — stopped at Step 1
- Annia needs to buy a USB flash drive (16GB+) — recommended Walmart/Target ~$8-10
- Windows 10 ISO download may or may not be done (was assigned as homework)

## Full Plan

### What's needed:
- USB flash drive, 16GB or bigger (anything on it will be erased)
- 64GB+ free space on Mac ✅ (638GB free confirmed)

### Steps:
1. Download Windows 10 ISO from `microsoft.com/software-download/windows10ISO` → save to Downloads (~5GB)
2. Plug in USB drive
3. Open Spotlight (Cmd + Space) → type **Boot Camp Assistant** → Enter
4. Click Continue
5. Select the Windows ISO from Downloads
6. Set partition slider to give Windows at least 64GB
7. Click Install — Mac restarts automatically
8. Follow Windows setup prompts (language, skip product key → click "I don't have a product key")
9. Once in Windows → open **Edge browser**
10. Go to `claude.ai/download` → download Claude Desktop for Windows
11. Install, sign in with Claude account → click **Cowork**

### To switch between Mac and Windows after install:
- Restart Mac → hold **Option key** → choose Windows or Mac
