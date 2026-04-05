# /lo-rate-quote — Rate Quote & Loan Scenario Builder

## Purpose
Build a clear, professional rate quote and loan scenario comparison for a borrower — showing multiple options side by side so they can make an informed decision. Also generates the talking points to explain it on a call.

## Trigger
User says "/lo-rate-quote", "build a rate quote", "loan scenario", or "compare these options"

## What to Collect
1. Loan amount (or purchase price + down payment)
2. Loan type (conventional, FHA, VA, DSCR)
3. Credit score
4. Property type and state
5. Owner-occupied or investment?
6. Current market rate (ask user to input today's rate — do not guess)
7. Any rate buy-down points being considered?

## Output

### 1. Side-by-Side Scenario Comparison
Always show at least 3 options:

| | Option A | Option B | Option C |
|--|---------|---------|---------|
| Loan Program | | | |
| Rate | | | |
| APR | | | |
| Monthly P&I | | | |
| PMI/MIP | | | |
| Total Monthly | | | |
| Points/Credits | | | |
| Break-even (if buying down) | | | |

### 2. Break-Even Analysis (for rate buy-downs)
If comparing a lower rate with points vs. higher rate with no points:
- Monthly savings from lower rate
- Upfront cost of points
- Break-even month = cost ÷ monthly savings
- Recommendation: buy down if they plan to stay longer than break-even

### 3. Total Cost of Loan (5-year and 30-year view)
Show how much they pay in interest over time — powerful for buyers who think "lower payment = better"

### 4. Call Script — How to Present This
Talking points to explain the options without overwhelming the borrower:
- Lead with the option you recommend and why
- Explain the trade-off simply
- Give them a clear decision to make

### 5. Objection Responses
Pre-built answers for:
- "The rate seems high" → explain market context
- "Can you do better?" → when and how to respond
- "I'll wait until rates drop" → cost of waiting calculator
- "My bank offered X" → how to compare APR not just rate

## After Delivering
Ask: "Want me to turn this into a borrower-facing PDF summary or a pre-approval letter?"
