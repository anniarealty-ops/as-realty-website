# /diagnose — Output Quality Evaluator
## From Hamel Husain's eval framework + Christopher Penn's Suspicion Rule

## Purpose
Before using ANY Claude output (agent result, content, script, analysis) — run it through
this skill to catch problems BEFORE they cost a deal, embarrass Annia, or get ignored by a client.

Think of it as a human expert reviewing the output before it ships.

## How to invoke
```
/diagnose [paste the output you want evaluated]
```

Or with context:
```
/diagnose [paste output] | goal: [what this was supposed to do] | audience: [who sees this]
```

Examples:
- `/diagnose [paste listing description] | goal: attract buyers | audience: Zillow browsers`
- `/diagnose [paste SMS script] | goal: get expired listing callback | audience: frustrated homeowner`
- `/diagnose [paste investor pitch email] | goal: get meeting | audience: cash investor`
- `/diagnose [paste Vivir Bonito caption] | goal: IG engagement | audience: Central FL homeowners`
- `/diagnose [paste agent output from expired sniper]`

---

## Evaluation Framework (run ALL checks)

### CHECK 1 — The Suspicion Test (Christopher Penn)
Is this output *perfectly flawless*? Zero friction, zero edge, perfectly smooth?
- If YES → it's probably generic. Flag it.
- Good output has a specific voice, a specific claim, a specific person behind it.
- Generic = "As a trusted real estate professional, I'm here to help you achieve your goals."
- Specific = "Your home sat on the market 127 days. Here's why I'd price it differently."

### CHECK 2 — The Slop Test (swyx / Latent Space)
Does this read like AI wrote it?
- Scan for: filler phrases, passive voice, vague claims, buzzwords, "In conclusion", "It's important to note"
- Flag every sentence that adds no specific information
- Rate: Clean / Has slop / Heavy slop

### CHECK 3 — The Audience Test (Ethan Mollick)
Would the TARGET PERSON stop and read this? Or scroll past?
- Simulate the first 3 seconds of their reaction
- What would make them stop? What would make them delete it?

### CHECK 4 — The Assumption Test (Teresa Torres)
What assumptions does this output make that could be wrong?
- List every claim that isn't verified
- Flag anything invented vs. researched
- Flag any numbers without a source

### CHECK 5 — The Error Pattern Check (Hamel Husain)
For agent outputs or automated results specifically:
- Did it follow the instructions it was given?
- Are there formatting errors?
- Are there factual claims that need verification?
- Did it skip any required sections?

### CHECK 6 — The Brand Check
For anything Vivir Bonito or AS Realty:
- No em dashes?
- No banned words? (just, very, really, delve, unlock, game-changer, etc.)
- Has phone number + website CTA?
- Is it warm and specific, not corporate?

---

## Output Format

```
DIAGNOSIS REPORT
────────────────
OVERALL VERDICT: SHIP IT / REVISE / REBUILD

WHAT'S WORKING:
• [specific strong elements]

PROBLEMS FOUND:
• [specific issue] → [suggested fix]
• [specific issue] → [suggested fix]

SLOP SENTENCES TO DELETE:
• "[exact sentence]" → replace with: "[better version]"

WHAT'S MISSING:
• [specific gap]

REVISED VERSION:
[full rewrite with all fixes applied]
```

End with:
> "Biggest risk if you send this as-is: [one sentence]"
