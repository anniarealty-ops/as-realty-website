---
name: Stellar MLS API / IDX Decision
description: Status and decision on Stellar MLS direct API access request — paused, not a priority
type: project
---

## Decision: Direct MLS API Application is PAUSED (not a priority)

**Why:** After review, the direct RESO/RETS API is not needed at Annia's current stage. Revenue focus is seller leads, not buyer search tools. The compliance process (PDF, Zoom demo, data review) is significant overhead for a low-priority feature.

**Why:** The direct API application triggered a full compliance review by Joshua F. (Stellar MLS Data Services) requiring: Anthropic ToS, written product summary PDF, and a live Zoom demo — significant time investment for a feature that doesn't directly drive $15k/month goal.

**How to apply:** Do NOT restart the Stellar MLS API application process unless Annia explicitly decides to proceed. If she asks about MLS data on her website, recommend third-party IDX plugins first.

## Stellar MLS Application — Status

- Contact: Joshua F., Data Services Administrator, Stellar MLS
- Status: Application submitted, compliance review underway — **ON HOLD by Annia's choice**
- PDF created: `/Users/anniasantana/Desktop/AS REALTY!!!/AS_Realty_MLS_Product_Summary.pdf`
- Script to regenerate PDF: `/Users/anniasantana/Desktop/Claude Code/agent-annia/generate_mls_summary_pdf.py`
- Stellar MLS phone: (407) 218-8607

## Better Alternative for Website Listing Search

Use a **third-party IDX plugin** — already Stellar MLS approved, no compliance review needed:
- **Showcase IDX** — ~$60/month, plugs into Next.js
- **IDX Broker** — ~$50/month, plugs into Next.js
- These handle all compliance automatically

## When to Revisit Direct API

Only pursue direct RESO API if:
1. Agent ANNIA needs to proactively pull/analyze listing data at scale
2. Third-party IDX plugins are insufficient for the use case
3. Annia is generating consistent $10k+/month and has bandwidth for compliance overhead
