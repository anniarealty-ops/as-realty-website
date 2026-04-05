---
name: Skills Library — Claude Code
description: All installed Claude Code skills, sources, and how to use advisory vs action skills
type: reference
---

## Skills Installed (108 total) — March 2026

### Installation location
`/Users/anniasantana/.claude/skills/`

### Custom Real Estate Skills (built for Annia)
- `/real-estate-analysis` — deal evaluation, ARV, commission, red flags, verdict
- `/client-outreach` — buyer/seller emails & texts, English + Spanish
- `/listing-description` — MLS copy, social captions
- `/expired-listing-script` — SMS + call scripts for expired leads
- `/cda-generator` — Commission Disbursement Authorization builder

### Official Anthropic Skills (17)
`/pdf` `/docx` `/xlsx` `/pptx` `/brand-guidelines` `/internal-comms` `/frontend-design` `/canvas-design` `/theme-factory` `/doc-coauthoring` `/skill-creator` `/web-artifacts-builder` `/webapp-testing` `/mcp-builder` `/claude-api` `/algorithmic-art` `/slack-gif-creator`

### C-Level Advisor Skills (Alireza Rezvani — github.com/alirezarezvani/claude-skills)
`/ceo-advisor` `/cfo-advisor` `/coo-advisor` `/cmo-advisor` `/cto-advisor` `/founder-coach` `/executive-mentor` `/chief-of-staff` `/board-deck-builder` `/competitive-intel` `/scenario-war-room` `/strategic-alignment` `/decision-logger`

### Business & Finance Skills
`/financial-analyst` `/saas-metrics-coach` `/contract-and-proposal-writer` `/customer-success-manager` `/revenue-operations` `/sales-engineer`

### Marketing Skills (40+)
`/social-media-manager` `/content-creator` `/content-humanizer` `/x-twitter-growth` `/social-media-analyzer` `/campaign-analytics` `/marketing-strategy-pmm` `/cold-email` `/email-sequence` `/copywriting` `/copy-editing` `/social-content` `/paid-ads` `/seo-audit` `/ai-seo` `/launch-strategy` `/lead-magnets` `/marketing-ideas` `/marketing-psychology` `/referral-program` `/pricing-strategy` `/programmatic-seo` `/site-architecture` `/analytics-tracking` `/competitor-alternatives` `/ab-test-setup` `/churn-prevention` `/ad-creative`

### Composio Tools
`/lead-research-assistant` `/invoice-organizer` `/meeting-insights-analyzer` `/content-research-writer` `/file-organizer` `/image-enhancer` `/changelog-generator` `/competitive-ads-extractor` `/tailored-resume-generator` `/domain-name-brainstormer` `/artifacts-builder` `/twitter-algorithm-optimizer`

---

## How Skills Work — Key Distinction

### Advisory Skills (think WITH you — need specific real problems)
Examples: `/ceo-advisor` `/founder-coach` `/financial-analyst`
- Give them a REAL situation: leads, numbers, decisions
- They ask questions, give strategy, challenge thinking
- Useless if opened cold with no context

### Action Skills (produce deliverables — give details, get output)
Examples: `/listing-description` `/cold-email` `/social-media-manager`
- Give property details, client info, or topic
- They output finished work: emails, posts, scripts, documents

---

## Video Creation — What's Possible

Claude Code CANNOT create or post videos directly.
Full pipeline requires:
1. Claude → writes script
2. HeyGen or Synthesia (~$29-89/mo) → renders AI video
3. YouTube Data API (free) + Zapier → auto-posts

Claude CAN do: scripts, titles, descriptions, tags, content calendars.

---

## Sources — Skill Libraries
- Sabrina Ramonov: https://www.threads.com/@sabrina_ramonov (recommended collections)
- Anthropic official: https://github.com/anthropics/skills
- Alireza Rezvani (most advanced): https://github.com/alirezarezvani/claude-skills
- Composio: https://github.com/ComposioHQ/awesome-claude-skills
- Marketing: https://github.com/coreyhaines31/marketingskills
- Master list: https://github.com/hesreallyhim/awesome-claude-code
