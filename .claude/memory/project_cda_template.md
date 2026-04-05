---
name: CDA Template — AS Realty & Investments
description: Commission Disbursement Authorization template, process, and standards for AS Realty closings
type: project
---

## CDA Template Location
`/Users/anniasantana/Desktop/AS REALTY!!!/Templates/CDA_TEMPLATE.html`

## How to Generate a PDF (IMPORTANT)
The folder name "AS REALTY!!!" breaks Chrome headless. Always:
1. Write the filled HTML to `/tmp/CDA_XXXX.html`
2. Run Chrome headless pointing to `/tmp/` path
3. Save PDF to Desktop directly (not inside AS REALTY!!! folder)

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu \
  --print-to-pdf="/Users/anniasantana/Desktop/CDA_[ADDRESS].pdf" \
  "file:///tmp/CDA_[ADDRESS].html"
```

## Standard CDA Fields (fill for each transaction)
- PROPERTY_ADDRESS
- BUYER_NAME
- SELLER_NAME
- ACCEPTANCE_DATE
- CLOSING_DATE
- SALE_PRICE
- GROSS_COMMISSION (% and $ amount, who pays)
- TRANSACTION_FEE ($ amount, paid by buyer or seller)
- TRANSACTION_GROSS (gross commission + transaction fee)
- TITLE_COMPANY_NAME, ADDRESS, PHONE
- TITLE_OFFICER_NAME, EMAIL
- AS_REALTY_AMOUNT (broker cut)
- ANNIA_AMOUNT (total gross minus broker cut)

## Standard Math
- Gross Commission = Sale Price × commission %
- Transaction Gross = Gross Commission + Transaction Fee
- Annia receives = Transaction Gross − AS Realty fee

## Florida Law Checklist (verify before every closing)
- [ ] Buyer Broker Agreement signed BEFORE showing homes (post-NAR Aug 2024)
- [ ] Transaction fee disclosed in purchase contract (line 154 "Other" under buyer costs)
- [ ] BBC/MCA-2 signed by seller if seller pays buyer broker compensation
- [ ] CDA signed by Annia Santana as Broker before sending to title

## Design Standard
- Matches Florida Realty Investments CDA style (clean, no heavy borders)
- Gold (#b8963e) color for financial figures and AS logo
- Gray boxes for authorization text
- "page 1 of 1" footer
- Signature line with typed name/title below

## First Transaction Using This Template
- Property: 3160 Kresterbrooke Ln, Zephyrhills FL 33540
- Buyers: Denise Betancourth & Valeria Gomez
- Seller: Jennifer Lynn Keetch
- Closing: April 9, 2026
- Total commission: $9,750 ($7,250 seller + $2,500 buyer)
- AS Realty: $350 | Annia: $9,400
- Title: Larkin & Larkin / Rebecca Heath — rebecca@larkintitle.com
