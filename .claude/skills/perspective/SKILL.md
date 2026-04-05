# /perspective — Adversarial Reaction Simulator
## Ethan Mollick's "Perspective Testing" — see your content through others' eyes before you send it

## Purpose
Simulate how real people — buyers, sellers, investors, title officers, skeptics — would react
to Annia's content, pricing, scripts, or proposals BEFORE she sends them.
Catches problems before they cost a deal.

## How to invoke
```
/perspective [paste what you want tested] as [role]
```

Examples:
- `/perspective [paste listing price + description] as skeptical buyer`
- `/perspective [paste seller script] as defensive expired listing homeowner`
- `/perspective [paste offer terms] as listing agent`
- `/perspective [paste SMS blast] as tired homeowner who gets 10 texts a day`
- `/perspective [paste IG caption] as first-time buyer who doesn't trust realtors`
- `/perspective [paste finder's fee pitch] as cautious investor`

If role is not specified, default to the most likely skeptic for the content type.

---

## Execution Steps

### Step 1 — Identify the audience role
If not specified:
- Listing/price → skeptical buyer
- Script/outreach → defensive homeowner
- Offer → listing agent
- Social post → distracted social media scroller
- Investor pitch → experienced investor who has been burned before

### Step 2 — Simulate the reaction

Produce THREE sections:

#### FIRST IMPRESSION (2-3 sentences)
What is the person's gut reaction in the first 5 seconds?

#### OBJECTIONS THEY'LL RAISE (bullet list)
Every doubt, hesitation, or pushback this person would have.
Be brutally honest. Don't sugarcoat.

#### WHAT WOULD MAKE THEM SAY YES (bullet list)
Specific changes to the content/script/price/approach that would convert this person.

### Step 3 — REVISED VERSION
Rewrite the original content incorporating the fixes from Step 2.
Label it: "REVISED — addresses all objections above"

---

## Bonus: Multi-Perspective Mode
If Annia wants reactions from multiple roles at once:
```
/perspective [content] as all
```
Produces reactions from: Buyer + Seller + Investor + Skeptic (all four simultaneously)

---

## End With:
> "Toughest objection: [state the #1 thing that would kill this deal/response]
> Easiest fix: [one sentence on what to change first]"
