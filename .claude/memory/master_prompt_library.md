---
name: Master Prompt Library
description: Exact prompts from top AI experts — ready to paste into Claude. Sourced from Sid Saladi, JD Hodges, Christopher Penn, Teresa Torres, Hamel Husain, Dan Shipper.
type: reference
---

# Master Prompt Library — Annia Santana

Exact prompts. Paste and use. Organized by situation.

---

## FILE & COMPUTER ORGANIZATION (Sid Saladi)

**Organize Downloads Folder:**
```
Analyze my Downloads folder and organize everything into logical subfolders by:
file type (Documents, Images, Videos, etc.), date (if relevant), and project or category.
Propose a plan before moving anything. Show me what you'll do first.
```

**Find Duplicate Files:**
```
Search my [Documents/Desktop/folder] for duplicate files. For each set:
(1) Show file names and locations
(2) Compare file sizes and dates
(3) Recommend which to keep
(4) Ask before deleting anything
Focus on files larger than 1MB.
```

**Find Storage Hogs:**
```
Scan my computer for files larger than 100MB. Show me: file name, location, size, 
last accessed date, whether it's safe to delete. Sort by size, largest first.
Help me free up at least 10GB.
```

**Bulk Rename Files:**
```
Rename all files in [folder path] using this format: YYYY-MM-DD_DescriptiveName.
Example: IMG_1234.jpg becomes 2025-03-15_ClientPhoto.jpg.
Show me the first 10 examples before proceeding with all files.
```

---

## IDEA GENERATION (Ethan Mollick)

**Generate Maximum Ideas:**
```
Generate 50 different [topic] ideas for [specific context].
Make each one genuinely different — not variations of the same idea.
After the list, identify the 5 boldest and most unconventional ones and explain why.
```

**Hostile Audience Test:**
```
I'm about to send this to [audience type]: [paste content]
Simulate 5 different reactions from people who would be skeptical, annoyed, or dismissive.
For each reaction, tell me the specific word, claim, or format that triggered it.
Then give me the revised version that addresses each trigger.
```

**Branching Exploration:**
```
Give me 3 completely different approaches to [problem/task].
Not variations — genuinely different strategic angles.
For each: what's the core assumption, who it works best for, biggest risk.
```

---

## FRAMEWORK BUILDING (Christopher Penn — EXACT PROMPT)

```
You're a world class systems analyst and management consultant. 
From this {conversation/transcript/notes}, we need to build a memorable {4 or 5}-letter 
framework that uses an acronym corresponding to a real-world word. 
Prefer verbs for the words, and remember that the acronym must be a real English word.
Good examples: WORLD, FOCUS, PACE, CLEAR, DRIVE.
Bad examples: LEKAD, SWOT, TIPR, EDLAK.

Here's how to accomplish this:
First, think through the major points. Then order them in a logical narrative 
(beginning/middle/end, or small/medium/large, or inside-out).
Once you've established a clear narrative, design 3-7 different {4 or 5}-letter 
framework acronyms and a concise 1-sentence explanation of each.
Rank order your creations by relevance to the main topic.
```

---

## CONTENT SYNTHESIS (Dan Shipper — Voice-First)

**Raw Notes → Outline:**
```
Here are my unorganized notes/thoughts: [paste]

Extract:
1. The core insight (what I'm actually trying to say in one sentence)
2. The 3-5 key supporting points
3. What's missing that would make this stronger
4. A clean outline I can use to write from

Don't write the piece yet — just give me the structure.
```

**Transcript → Action:**
```
Here's a voice transcript/recording summary: [paste]

Find:
1. Every actionable decision mentioned
2. Every question that was raised but not answered
3. The 1-2 most interesting ideas buried in the rambling
4. A clean summary I can share with someone who wasn't there

Under 200 words total.
```

---

## QUALITY EVALUATION (Hamel Husain)

**Output Evaluation Prompt:**
```
Evaluate this output as a domain expert reviewing it before it ships to a client:
[paste output]

Run these checks:
1. Does it actually answer the request, or does it answer a simpler version?
2. What specific claims could be wrong or unverified?
3. What would a skeptic's first objection be?
4. What's missing that someone in this domain would notice immediately?
5. Rate: Ship / Revise / Rebuild

Then give me the revised version.
```

**Synthetic Test Cases (for agents):**
```
Imagine [target user type] using [tool/agent/script].
Generate 20 different ways they would phrase the same request — 
including edge cases, unusual phrasing, and situations where they're frustrated or unclear.
Output as a JSON array of strings.
```

---

## DISCOVERY / INTERVIEW PREP (Teresa Torres)

**Story Excavation Questions:**
```
I'm meeting with [type of person] about [situation].
Generate discovery questions using the "excavate the story" method:
- Questions that get them to narrate a specific past experience (not opinions)
- Questions that surface unspoken fears or frustrations
- Questions that reveal what they actually want vs. what they say they want
- One question that challenges an assumption they probably hold

Format: 10 questions, ordered from easiest to most direct.
```

**Post-Meeting Opportunity Map:**
```
Here are my notes from a [seller/buyer/investor] meeting: [paste]

Extract:
1. What they said vs. what they probably meant (2-3 key translations)
2. The unmet need underneath their stated request
3. The assumption they hold that might not be true
4. Their #1 fear about this deal
5. Their real motivation (what would actually close this)
6. My recommended next action (specific, with timing)
7. A follow-up SMS under 160 chars
```

---

## REAL ESTATE SPECIFIC — HIGH VALUE PROMPTS

**Expired Listing Research:**
```
Research this property: [address]
Find: days on market, list price history, any price reductions, 
comparable active listings within 1 mile, recently sold comps.
Then tell me: 3 likely reasons it didn't sell, and what I would need to do differently 
to sell it in the next 60 days.
```

**Listing Price Defense:**
```
My seller wants to list at [price]. The market data shows [comps].
Simulate a conversation where I explain the pricing strategy to a seller 
who thinks their home is worth more.
Include: the exact phrases I should use, the objections they'll raise, 
and how to handle each objection without losing the listing.
```

**Investor Deal Teaser (no address/price):**
```
Write 3 different Facebook investor group posts for this deal:
[property details, price, location, condition]

Rules:
- No address
- No list price
- Goal: get DMs from serious cash buyers only
- Each post must take a different angle (urgency / equity / location)
- Under 100 words each
- End with: "DM me if you want details — cash buyers only"
```

**Bilingual Client Email:**
```
Write a [situation: first contact / follow-up / closing update] email to [client name].
Context: [paste situation]

Requirements:
- English version first, Spanish version below
- Warm and personal, not corporate
- Specific details from context (no generic filler)
- Under 150 words per version
- CTA: call or text (407) 492-1114
```

---

## AGENT BUILDING — INSTRUCTION PROMPTS (JD Hodges Style)

**Agent System Prompt Template:**
```
You are [agent name], an AI assistant for Annia Santana at AS Realty & Investments.

Your role: [specific function]
Your user: Annia Santana, Florida licensed broker, bilingual (EN/ES), Central FL market

ALWAYS:
- Web-search before giving any market-specific or product-specific advice
- Show your plan before executing any action
- Ask for confirmation before sending messages, modifying files, or contacting anyone
- Flag problems proactively — don't hide errors
- Be concise. No filler. Lead with the answer.

NEVER:
- Invent statistics or market data
- Take irreversible actions without explicit approval
- Use generic real estate language (nestled, dream home, cozy)

When uncertain: say so. Ask one clarifying question. Don't guess.

Current date: {date}
Task: [task description]
```

---

## SOLOPRENEUR DEVELOPMENT (Arvid Kahl — 40-20-40 method)

**Structured Feature Prompt (write this BEFORE asking Claude to code anything):**
```
Current status: [describe what exists now and what files are involved]
Desired outcome: [what should work after this is done — be specific]
Priority: [what matters most if tradeoffs are needed]
Implementation steps I know: [if you have a specific approach, list it]
Constraints: [what must NOT change, what to avoid breaking]
```

**System Architecture Prompt (for new agents/tools):**
```
I want to build [system]. Here are the requirements:
1. [requirement]
2. [requirement]
3. [requirement]
4. [requirement]

Before writing any code: design the system architecture. 
Show me the components, how they connect, and what could break.
Then ask me one clarifying question if anything is ambiguous.
```

**Debugging Loop Prompt:**
```
Here is the error: [paste error]
Here is what I was doing when it happened: [context]
Here is the relevant code: [paste code]

Step 1: What could be causing this?
Step 2: What diagnostic should I run to confirm?
Step 3: Once confirmed, what is the fix and why?
Don't implement anything yet — just diagnose.
```

---

## AGENT & SYSTEM QUALITY (Shreya Shankar — prompt drift prevention)

**Monthly Agent Audit Prompt:**
```
Here are 20 recent outputs from my [agent name]: [paste samples]

Run a partition analysis:
1. Group these by output type/category
2. For each group: are the outputs consistent, or drifting in quality?
3. Identify any patterns in the failures
4. What changed in the inputs that might explain quality drops?
5. Recommend: which prompt rules need to be tightened?
```

**Prompt Drift Check:**
```
Here is the original prompt I wrote for [agent]: [paste prompt]
Here is the prompt after my last 3 edits: [paste current]

Compare them:
1. What did I add that might have introduced ambiguity?
2. What did I remove that was actually important?
3. Are there contradictions between old and new instructions?
4. Rewrite the cleanest version that achieves the original intent.
```

---

## PRODUCTION SYSTEM DESIGN (Eugene Yan — build it right the first time)

**Eval-First Agent Design:**
```
I'm building an agent that does [task].
Before we write any code, help me design the evaluation framework:
1. What does "good output" look like? (specific, measurable)
2. What does "bad output" look like? (with examples)
3. What are the 3 most likely failure modes?
4. How will I know if it's drifting after 30 days?
5. What's the simplest test I can run on every output automatically?
```

**The Gallagher API Audit:**
```
Here is a business function I currently do manually: [describe]

Evaluate it through the Gallagher lens:
1. Can an AI tool fully automate this? (rate: Yes/Partial/No)
2. If partial: what part requires human judgment?
3. What licensed service or contractor could handle the rest?
4. What's the estimated cost vs. my time cost per month?
5. What breaks if I automate it poorly?

Recommend: Automate / Outsource / Template / Keep manual
```

---

## CLAUDE.MD OPTIMIZATION (JD Hodges)

**Monthly CLAUDE.md Review Prompt:**
```
Review my CLAUDE.md instructions file: [paste contents]

Find:
1. Any rules that are vague or could be misinterpreted
2. Rules that are probably outdated or no longer relevant
3. Missing rules based on common frustrations I would have with an AI assistant
4. Instructions that contradict each other
5. Anything that wastes tokens on every conversation without adding value

Suggest: what to keep, what to remove, what to rewrite.
Output: the cleaned version of the file.
```
