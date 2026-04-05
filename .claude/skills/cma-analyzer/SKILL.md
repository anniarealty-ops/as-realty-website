# /cma-analyzer — CMA & Property Analysis for Central Florida

## Purpose
Run a complete Comparative Market Analysis (CMA) and property investment analysis for any Central Florida address or property. Built specifically for Annia's market: Volusia County, Deltona, Orange City, Orlando, Kissimmee, Hunters Creek.

## Trigger
User says "/cma-analyzer", "run a CMA", "analyze this property", "what's this home worth", "pull comps", or gives an address

## What to Ask First (if not already provided)
1. Property address
2. Property type (SFH, condo, duplex, etc.)
3. Beds/baths/sqft (if known)
4. Purpose: listing, buyer offer, investor deal, or curiosity?
5. Any known condition issues?

## Full Analysis Output

### 1. Subject Property Overview
- Address, beds/baths/sqft, year built, lot size
- Days on market (if listed)
- Last sale date and price
- Estimated current value range

### 2. Comparable Sales (Past 6 Months)
Search for 3–5 sold comps within:
- 0.5–1 mile radius (expand if needed)
- Same property type
- Similar sqft (±20%)
- Similar beds/baths

For each comp display:
| Address | Beds/Bath | Sqft | Sale Price | $/sqft | Sale Date | Days on Market |

### 3. Price Per Square Foot Analysis
- Average $/sqft of comps
- Subject property implied value at avg $/sqft
- Adjustment notes (pool, condition, lot size, etc.)

### 4. Recommended List Price Range
- Conservative: (low end — quick sale)
- Target: (optimal — best terms)
- Aggressive: (test the market — highest price)

### 5. Florida Market Context
Always include relevant 2026 Central FL context:
- Insurance cost impact on buyer affordability
- HOA fees if applicable
- Flood zone status if relevant
- Days on market trend for that submarket

### 6. Investor Analysis (if applicable)
If Annia flags this as an investor deal, add:
- ARV (After Repair Value)
- Estimated repair costs (light/medium/heavy)
- MAO (Maximum Allowable Offer) at 70% rule: ARV × 0.70 − repairs
- Rental income estimate (Zillow rental data)
- Gross rent multiplier

### 7. Strategy Recommendation
Based on the analysis, recommend ONE of:
- **List it** — pricing strategy + timing
- **Offer it** — buyer negotiation anchor + ceiling
- **Wholesale it** — finder's fee range + investor pitch
- **Hold it** — rental income vs. carry cost

### 8. Reusable Prompts
End with 2–3 prompts Annia can save:
- "Run a CMA for [address] as a rental investment"
- "Write a listing presentation for [address] using this CMA"
- "Draft an offer letter for [address] at [price]"

## Data Sources to Use
- Web search for Zillow, Realtor.com, Redfin comps
- Volusia County Property Appraiser: vcpa.vcgov.org
- Orange County Property Appraiser: ocpafl.org
- Florida DOT / FHFA for market trend data

## After Delivering CMA
Ask: "Want me to turn this into a listing presentation, a seller's net sheet, or an investor teaser?"
