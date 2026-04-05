---
name: Class Action Agent
description: AI-powered agent that finds and helps file class action settlements for Annia
type: project
---

Node.js agent built and running at:
`/Users/annia/Documents/Claude Code/agent-annia/class_action/`

**Why:** Annia is in debt and needs passive income streams. Class action settlements are free money — just requires knowing about them and filing on time.

**How to apply:** When Annia mentions money, refunds, settlements, or companies she uses — remind her to run this agent.

## How to Run
Open Terminal:
```
cd "/Users/annia/Documents/Claude Code/agent-annia/class_action"
node run.js
```
- Option 1 = Find new settlements (uses Claude AI + web search)
- Option 2 = Fill a specific claim form (paste URL)
- Option 3 = View tracker

## Claims Filed
| Settlement | Claim ID | Date | Est. Payout |
|---|---|---|---|
| Amazon Prime FTC $2.5B | AZF-600475798501 | 2026-04-03 | $51 |

## Profile Loaded (profile.json)
- Name, address, phone, email all filled in
- Services: Amazon, Spectrum, Verizon (former), Duke Energy, BofA (former), Apple, Google, Facebook, Wells Fargo, Chase, Citi, Deltona Water

## Also has Python backup agent at:
`/Users/annia/Desktop/Agents/class-action-agent/agent.py`
(Requires Xcode tools to be installed first)
