# /net-sheet — Seller Net Sheet Calculator

## Purpose
Generate an instant, professional seller net sheet showing exactly how much the seller walks away with after all costs. Built for AS Realty listing appointments in Central Florida.

## Trigger
User says "/net-sheet", "net sheet", "what will the seller walk away with", or gives a sale price + mortgage info

## What to Collect
1. Sale price (or expected listing price)
2. Existing mortgage balance (if any)
3. Commission rate (default: 6% total — 3% AS Realty + 3% buyer's agent)
4. Are there any seller concessions? (closing cost credits to buyer)
5. Approximate closing date (affects prorated taxes/HOA)
6. HOA? Monthly amount?
7. Any liens, second mortgages, or judgments?

## Output

### Seller Net Sheet — [Property Address]

| Item | Amount |
|------|--------|
| **Sale Price** | $XXX,XXX |
| | |
| **DEDUCTIONS** | |
| Mortgage Payoff | -$XX,XXX |
| AS Realty Commission (3%) | -$X,XXX |
| Buyer's Agent Commission (3%) | -$X,XXX |
| FL Doc Stamps on Deed ($0.70/$100) | -$XXX |
| Title Insurance (seller pays in FL) | -$XXX |
| Settlement/Closing Fee | -$500 |
| Prorated Property Taxes | -$XXX |
| HOA Fees/Prorations | -$XXX |
| Seller Concessions | -$X,XXX |
| Misc. Closing Costs (est.) | -$500 |
| | |
| **ESTIMATED NET TO SELLER** | **$XX,XXX** |

### 3 Scenarios Side by Side
Show conservative / target / aggressive price:
| | Low ($XX0K) | Target ($XX5K) | High ($XX0K) |
|--|------------|---------------|-------------|
| Net to Seller | $XX,XXX | $XX,XXX | $XX,XXX |

### Florida-Specific Notes
- Seller pays doc stamps on deed: $0.70 per $100 of sale price
- Seller typically pays owner's title insurance in most FL counties
- Property taxes prorated to closing date (Jan 1 – closing day)
- Homestead exemption: remind seller to cancel after closing

## After Delivering
Ask: "Want me to turn this into a PDF to present at the listing appointment, or compare two price scenarios?"
