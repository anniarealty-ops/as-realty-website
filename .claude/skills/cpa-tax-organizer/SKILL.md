# /cpa-tax-organizer — Tax Document Organizer & Checklist Generator

## Purpose
Generate a complete, personalized tax document checklist for any client type — so they bring everything needed the first time. Also helps the CPA organize and track what's been received vs. outstanding.

## Trigger
User says "/cpa-tax-organizer", "tax checklist", "what docs do I need from this client", "tax organizer", or describes a client situation

## What to Ask First
"Tell me about the client: (1) Filing status — single, married filing jointly, married filing separately, head of household? (2) Income sources — W-2, self-employed, rental, investments, retirement? (3) Any life changes this year — new home, marriage, divorce, new baby, new business, sold property?"

## Output

### 1. Personalized Document Checklist
Organized by category — check off as received:

**Personal Info**
- [ ] Social Security numbers (taxpayer, spouse, all dependents)
- [ ] Bank account + routing number (for direct deposit)
- [ ] Last year's tax return (if new client)
- [ ] IP PIN (if applicable)

**Income Documents** (customize based on client)
- [ ] W-2(s) from all employers
- [ ] 1099-NEC (self-employment income)
- [ ] 1099-MISC (other income)
- [ ] 1099-INT (bank interest)
- [ ] 1099-DIV (dividends)
- [ ] 1099-B (investment sales — brokerage)
- [ ] 1099-R (retirement distributions)
- [ ] SSA-1099 (Social Security benefits)
- [ ] K-1 (partnership/S-Corp/trust income)
- [ ] Rental income records

**Deductions** (customize based on client)
- [ ] Mortgage interest statement (1098)
- [ ] Property tax records
- [ ] Charitable contribution receipts
- [ ] Medical expense receipts (if large)
- [ ] Student loan interest (1098-E)
- [ ] Tuition paid (1098-T)
- [ ] Business expense records (if self-employed)
- [ ] Home office measurements + expenses
- [ ] Vehicle mileage log
- [ ] Health insurance premiums (if self-employed)

**Self-Employed / Business Clients (additional)**
- [ ] Profit & Loss statement
- [ ] All 1099s received
- [ ] Business bank statements
- [ ] Payroll records (if any employees)
- [ ] Equipment purchases (for Section 179)
- [ ] Home office square footage
- [ ] Business mileage log

**Life Changes (if applicable)**
- [ ] HUD-1 or Closing Disclosure (if bought/sold home)
- [ ] Birth certificate (new dependent)
- [ ] Divorce decree (if divorced this year)
- [ ] Retirement account contribution statements

### 2. Outstanding Items Tracker
Generate a table to track document collection:
| Document | Expected From | Date Requested | Date Received | Notes |
|----------|--------------|----------------|---------------|-------|

### 3. Client Email Template
Ready-to-send email requesting documents:
- Personalized to client name and situation
- Professional but warm tone
- Clear deadline
- Easy instructions (scan, photo, or secure portal)
- Offer to answer questions

### 4. Estimated Turnaround Note
Based on complexity, suggest realistic completion timeline to set expectations.

## After Delivering
Ask: "Want me to create the client-facing version as a PDF checklist they can print and check off at home?"
