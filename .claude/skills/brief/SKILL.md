# /brief — Voice-to-Brief Skill
## Dan Shipper's Voice-First Workflow + Christopher Penn's Framework Method

## Purpose
Turn Annia's spoken thoughts, rambling notes, or rough ideas into a clean brief,
outline, script, or plan. No blank page. No wasted time.

Talk first. Claude organizes after.

## How to invoke
```
/brief [paste voice transcript or rough notes]
```

Or specify the output type:
```
/brief [notes] | output: listing presentation
/brief [notes] | output: seller script
/brief [notes] | output: content calendar
/brief [notes] | output: agent instructions
/brief [notes] | output: email
/brief [notes] | output: social post
/brief [notes] | output: framework
```

Examples:
- `/brief ok so this seller in Deltona has a 3/2 pool home she hasnt listed yet she wants to sell but is worried about pricing and she had a bad experience before with another agent i really think i can help her if i could just get in front of her | output: seller script`
- `/brief ideas for vivir bonito this week maybe something about insurance costs in florida how that affects buyers and also maybe something about the market in deltona like whats happening with prices | output: content calendar`
- `/brief i want to build an agent that texts expired listings every monday automatically and then follows up 3 days later if no response | output: agent instructions`

---

## Execution Steps

### Step 1 — Extract the Gold
Read the raw input. Identify:
- The CORE goal (what Annia actually wants to accomplish)
- The KEY facts (property details, client situation, specific context)
- The CONSTRAINTS (time, budget, audience, platform)
- The EMOTION (urgency, confidence, warmth, concern)

### Step 2 — Identify gaps
What critical information is missing? Ask ONE question only if essential.
Otherwise, make a reasonable assumption and flag it.

### Step 3 — Produce the requested output

**If output: listing presentation or seller script:**
Structure as: Hook → Problem → Your Solution → Proof → Call to Action
Include specific numbers from the notes. Never generic.

**If output: content calendar:**
7-day plan. Each day: Platform | Topic | Hook | Format (Reel/Post/Story) | Bilingual? Y/N

**If output: agent instructions:**
Format as a SKILL.md-ready prompt with: Purpose, Steps, Output Format, Quality Checks

**If output: email:**
Subject line (3 options) + Body. Under 200 words. CTA with phone.

**If output: framework:**
Use Christopher Penn's exact framework prompt:
- Extract major points from the notes
- Order them logically (beginning/middle/end)
- Generate 3-5 letter acronym options that are REAL words (like FOCUS, PACE, WORLD)
- Prefer verbs for each letter
- Rank by relevance to the main goal

**If output: social post:**
Apply /post skill format (EN + ES, IG + FB, with hashtags and CTA)

**If output not specified:**
Default to a structured brief with: Goal | Key Facts | Recommended Action | Next Step

---

## Quality Rule
Every output must contain at least ONE specific detail from the raw input.
Generic outputs without Annia's specific context are not acceptable.
