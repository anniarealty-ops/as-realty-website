---
name: Lead Generation & Conversion System — Brokerage Scaling
description: Complete playbook for Annia's expired listing outreach, investor deal finding, and brokerage scaling strategies built in March 2026
type: project
---

# Lead Generation & Conversion System — AS Realty & Investments

## Overview
Annia runs a full-stack lead gen + conversion machine as a solo broker. The system covers expired listings, investor deals, SMS campaigns, and off-market sourcing.

**Why:** Goal is $15K/month ($180K/year) from real estate alone. Current avg deal size is growing (~$15K/deal). Needs 10-12 deals/year minimum.

**How to apply:** When Annia brings a new lead, property, or campaign idea — apply this full system context automatically.

---

## The Lead Pipeline

### 1. Data Sources
- **BatchSkipTracing** — skip trace expired listings for phone/email (cancel reminder: March 11 — evaluate ROI)
- **Stellar MLS** — expired listing data pull (call 407-218-8607 for RETS/RESO API credentials)
- **octaxcol.com** — Orange County tax delinquent list (check Mondays)
- **Expired_Contacts.csv** — master list, currently ~1,606 leads on Desktop

### 2. SMS Outreach (SimpleTexting)
- Number: (407) 614-9598
- March 2026 blast: 2,151 texts across 4 campaigns
- Expired Listings: 1,626 contacts
- Hunters Creek Homeowners: 435 contacts
- **{firstName} fallback bug** — set fallback to "Homeowner" in SimpleTexting to avoid sending "{firstName}" literally
- **TCPA compliance** — remove DNC/opt-outs immediately from DB + CSV

### 3. Contact Cleanup Workflow
When contacts reply STOP / not interested / have agent / irrelevant:
- Mark `opted_out` in annia.db (Agent ANNIA SQLite DB)
- Remove from Expired_Contacts.csv
- Rebuild Expired_Leads_Master.html

Script pattern:
```python
# DB
conn = sqlite3.connect('/Users/anniasantana/Desktop/Claude Code/agent-annia/annia.db')
c.execute("UPDATE contacts SET status='opted_out' WHERE phone LIKE ?", (f'%{phone}%',))

# CSV — filter out matching phones
rows = [r for r in rows if phone not in r.get('Phone','').replace('-','')]
```

### 4. Lead Qualification Tiers
- **Hot** — replied, open to conversation, flexible on price
- **Warm** — replied, not ready yet, follow up in 2-4 weeks
- **Dead** — DNC, has agent, delusional price (e.g. Thomas Bullitt wanted MORE than expired price)
- **Investor play** — seller won't list but open to cash buyer intro

---

## Expired Listing Strategy

### Pricing Analysis Process
1. Pull address from MASTER_LEADS.csv by phone/name match
2. Check RPR (Realtors Property Resource) for AVM
3. Compare to original list price
4. If overpriced → position Annia as the agent who can price it RIGHT
5. If at/below AVM → position as strong listing opportunity or investor deal

### Conversation Flow (SMS → Call → Listing)
1. **Initial text** — warm, non-salesy, mention investor option as alternative
2. **If interested in listing** → send free CMA report (builds trust)
3. **If wants investor** → qualify their floor price vs. investor math (70-80% of AVM)
4. **If delusional price** → educate once, then move on. Don't chase.

### Key Insight — Investor vs. Listing Decision Tree
- If seller floor > 85% of AVM → investor play won't work → pivot to listing
- If seller floor < 80% of AVM → genuine investor deal → post to groups + charge finder's fee
- If seller owes exact payoff amount → likely at their floor → listing is only path to netting money

---

## Off-Market Investor Deal System

### Facebook Posting Strategy
**NEVER post:** exact address, exact price, or seller name publicly
**ALWAYS post:** teaser only (area, bed/bath, highlights) → DM for details

**Teaser post template:**
> 🏠 OFF-MARKET — [City], FL | [X]bed/[X]bath + [key features]
> $[X]K in upgrades | Below AVM | Motivated seller
> Cash/quick close preferred. DM me — serious investors only.
> 📞 (407) 492-1114 | Hablo español 🇨🇴
> — Annia Santana | Broker Owner | AS Realty & Investments

**Where to post:**
- Personal Facebook profile
- Facebook Groups: Central Florida Real Estate Investors, Orlando Real Estate Investors Network, Wholesale Real Estate Florida, Central Florida REIA
- Facebook Marketplace (under Real Estate → Homes for Sale)
- Instagram Stories

### Finder's Fee — MANDATORY Before Intro
- Amount: $3,000–$5,000 paid at closing by SELLER
- Get agreement via text BEFORE sharing any details with investors
- Text to seller: "Before I reach out to my network, I charge a $3,500 finder's fee at closing for connecting sellers with cash buyers off-market. No out-of-pocket — comes from proceeds. Does that work?"
- Text = binding enough to protect you

---

## Active Leads Tracker (March 2026)

### Hot Leads
| Lead | Property | Status | Next Step |
|------|----------|--------|-----------|
| Renee Manzo | 980 Glazebrook Loop, Orange City 32763 | Asking $457,925 (payoff included), RPR $484K, pool home, $250K upgrades | Get listing agreement — $26K equity gap leverage |
| Yanett Bello | 1113 Park Ridge Cir, Kissimmee 34746 | Asking $265K, originally listed $285K, 3/2 | Ask condition → post to investor groups, great deal |
| Pamela Roach | TBD | RPR $305K, listed $340K Nov 2025 | Emailed + texted. Sent free report. Follow up. |
| Jessica Pettry | TBD | Expired 11/13/2025, $365K, RVM $383,970 | Emailed + texted. Follow up. |
| Damaris Rodriguez | 675 Elbridge Dr, Kissimmee 34758 | Expired 12/19/2025, $399,900, RPR $377K, 2 weeks expired | Active conversation |
| Thomas Bullitt | 1137 Seburn Rd, Apopka 32703 | REMOVED — wants $450K, expired at $439K. Wasting time. | Deleted from all lists |

### Warm/Watch
| Lead | Notes |
|------|-------|
| Nirit Dror | Expired $350K, AVM $349K — playing hard to get. Skip for now. |
| Carlos Bello | Same email as Yanett (bellocabrerahome@yahoo.com) — possibly same family. 3024 Sutton Dr, Orlando 32810, $319,900 4/2 |

---

## Brokerage Scaling — The System

### Revenue Levers
1. **Listings** — main income. Target $300K–$600K price range, Central FL
2. **Investor deals** — finder's fee $3-5K per deal, no listing paperwork
3. **Buyer side** — only for qualified buyers, don't chase unqualified leads
4. **Agent recruitment** — add agents under brokerage = split income with zero extra work

### Marketing Stack
- SimpleTexting → expired listing SMS blasts
- YAMM → email campaigns to 62 personal clients
- Facebook groups → off-market deals + investor network
- asrealtyfl.com → SEO + lead funnels (seller + buyer free guides)
- dot.cards/annia → digital business card for all outreach
- Google Business "Annia Santana Realtor" → 9 x 5-star reviews, VERIFIED

### Weekly Rhythm
- **Monday** — check octaxcol.com for tax delinquent list, review SimpleTexting replies
- **Mid-week** — follow up on warm leads, post investor deals
- **Weekend** — Twilio voicemail drops to non-responders
- **Monthly** — YAMM email blast to personal client list

### Campaign Follow-Up Sequence
1. **Day 1** — Initial SMS blast
2. **Day 3** — Follow-up to non-responders: "Hi {firstName}, just wanted to follow up! If you're thinking about selling, I'd love to help. No pressure. (407) 492-1114 dot.cards/annia"
3. **Day 7** — Final: "Hi {firstName}, last time reaching out! If you ever need a local broker in Central FL, I'm here. Hablo espanol. (407) 492-1114"

---

## Key Tools & Files
- `annia.db` — `/Users/anniasantana/Desktop/Claude Code/agent-annia/annia.db`
- `Expired_Contacts.csv` — `/Users/anniasantana/Desktop/AS REALTY!!!/Expired_Contacts.csv`
- `MASTER_LEADS.csv` — `/Users/anniasantana/Desktop/AS REALTY!!!/MASTER_LEADS.csv`
- `Expired_Leads_Master.html` — `/Users/anniasantana/Desktop/Expired_Leads_Master.html`
- `Campaign_Templates_All4.html` — `/Users/anniasantana/Desktop/Campaign_Templates_All4.html`
- RPR — Realtors Property Resource (AVM tool, access via NAR membership)
