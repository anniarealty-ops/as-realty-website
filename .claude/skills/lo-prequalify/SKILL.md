# /lo-prequalify — Borrower Pre-Qualification Analyzer

## Purpose
Walk through a borrower scenario and produce a complete pre-qualification analysis: loan programs they qualify for, estimated monthly payment, max purchase price, and any credit/DTI red flags to address before application.

## Trigger
User types `/lo-prequalify` or "run a prequal", "analyze this borrower", "what can they qualify for", or pastes borrower info

## What to Collect (ask if not provided)
1. Gross monthly income (all sources — W-2, self-employed, rental, etc.)
2. Monthly debt payments (car, student loans, credit cards, child support)
3. Credit score (middle score or range)
4. Down payment available
5. Property type (primary, second home, investment)
6. VA eligible? (military service)
7. First-time homebuyer?
8. Target purchase price or monthly payment range
9. State (affects loan limits and programs)

## Output

### 1. DTI Analysis
- Front-end DTI (housing only): Target <28%
- Back-end DTI (all debts): Target <43% conventional, <50% FHA/VA
- Max monthly housing payment based on income
- Flag if DTI is too high and what debt to pay off to fix it

### 2. Loan Programs They Qualify For
Analyze each:
- **Conventional** (Fannie/Freddie) — 620+ score, 3-5% down
- **FHA** — 580+ score, 3.5% down, good for lower scores
- **VA** — 0% down, no PMI, for veterans (if eligible)
- **USDA** — 0% down, rural areas, income limits apply
- **DSCR** — for investors, based on rental income not personal income
- **Bank Statement** — for self-employed borrowers
- Recommend the BEST program and explain why

### 3. Max Purchase Price
Calculate based on:
- Max monthly payment → back into purchase price at current rate
- Down payment available
- Show 3 scenarios: conservative / target / aggressive

### 4. Estimated Monthly Payment Breakdown
For target purchase price:
| Item | Amount |
|------|--------|
| Principal & Interest | $ |
| Property Tax (est.) | $ |
| Homeowners Insurance | $ |
| PMI (if applicable) | $ |
| HOA (if applicable) | $ |
| **Total PITI** | **$** |

### 5. Red Flags & Action Plan
List any issues:
- Score below program minimum → what to do to raise it
- DTI too high → which debt to eliminate
- Insufficient down payment → down payment assistance programs
- Collections or derogatory marks → rapid rescore options

### 6. Next Steps Script
What to tell the borrower right now — word for word.

## After Analysis
Ask: "Want me to draft the pre-approval letter language or a rate quote for this scenario?"
