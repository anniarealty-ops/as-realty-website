import { NextRequest, NextResponse } from 'next/server'
import { sendSMS, addContact } from '@/lib/simpletexting'
import { generateAIResponse } from '@/lib/ai-agent'

// SimpleTexting forwards incoming SMS via GET:
// GET /api/sms-webhook?from=PHONE&to=YOUR_NUMBER&text=MESSAGE
//
// Set this webhook URL in SimpleTexting:
//   app.simpletexting.com → Settings → API → Webhooks → SMS Forwarding
//   URL: https://asrealtyfl.com/api/sms-webhook

// Keywords that SimpleTexting handles natively — do not reply to these
const SYSTEM_KEYWORDS = new Set(['STOP', 'UNSTOP', 'START', 'HELP', 'CANCEL', 'END', 'QUIT'])

// Yard sign shortcodes — each sign only advertises its own keyword, so each gets its own
// page link + qualifying question instead of one generic reply for both.
const SIGN_KEYWORDS: Record<string, { reply: string; tag: string }> = {
  HOMES: {
    reply:
      "Thanks for texting HOMES! See current listings: asrealtyfl.com/for-sale?src=sms-homes. Reply BUY or SELL so I know how to help. Annia (407) 492-1114",
    tag: 'sign-sale',
  },
  SALE: {
    reply:
      "Thanks for texting! See current listings: asrealtyfl.com/for-sale?src=sms-sale. Reply BUY or SELL so I know how to help. Annia (407) 492-1114",
    tag: 'sign-sale',
  },
  RENT: {
    reply:
      "Thanks for texting RENT! See current rentals: asrealtyfl.com/for-rent?src=sms-rent. What's your move-in timeline? Annia (407) 492-1114",
    tag: 'sign-rent',
  },
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const from = searchParams.get('from')?.trim() || ''
  const text = searchParams.get('text')?.trim() || ''

  // Validate required fields
  if (!from || !text) {
    return NextResponse.json({ ok: false, error: 'Missing from or text' }, { status: 400 })
  }

  // Skip system keywords — SimpleTexting handles STOP/HELP automatically
  if (SYSTEM_KEYWORDS.has(text.toUpperCase())) {
    return NextResponse.json({ ok: true, skipped: 'system_keyword' })
  }

  console.log(`[SMS Bot] Incoming from ${from}: "${text}"`)

  try {
    // 1. Yard sign shortcode ("HOMES", "SALE", "RENT") — skip the AI agent, send the matching
    // page link + a qualifying question, and tag the contact by sign source for tracking.
    const firstWord = text.toUpperCase().split(/\s+/)[0]
    const keyword = SIGN_KEYWORDS[firstWord]
    if (keyword) {
      await addContact(from, 'AI-Leads', {
        comment: `Sign keyword "${firstWord}" [${keyword.tag}]`,
      })
      await sendSMS(from, keyword.reply)
      console.log(`[SMS Bot] ${firstWord} shortcode reply sent to ${from} (${keyword.tag})`)
      return NextResponse.json({ ok: true, skipped: 'sign_keyword', tag: keyword.tag })
    }

    // 2. Auto-save lead to SimpleTexting "AI-Leads" list
    await addContact(from, 'AI-Leads', {
      comment: `First msg: ${text.slice(0, 100)}`,
    })

    // 3. Generate AI response using Claude
    const reply = await generateAIResponse(text, from)

    // 3. Send the reply back via SimpleTexting
    await sendSMS(from, reply)

    console.log(`[SMS Bot] Replied to ${from}: "${reply}"`)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[SMS Bot] Error:', err)

    // Fallback: always reply so the lead isn't left hanging
    try {
      await sendSMS(
        from,
        "Hi! Thanks for reaching out to AS Realty & Investments. Annia will contact you very soon! (407) 492-1114"
      )
    } catch {
      // If even the fallback fails, log and move on
      console.error('[SMS Bot] Fallback send also failed')
    }

    return NextResponse.json({ ok: true })
  }
}

// Some SimpleTexting configurations may POST instead of GET
export async function POST(req: NextRequest) {
  // Parse body as form data or JSON
  let from = ''
  let text = ''

  const contentType = req.headers.get('content-type') || ''

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const body = await req.text()
    const params = new URLSearchParams(body)
    from = params.get('from') || ''
    text = params.get('text') || ''
  } else {
    try {
      const body = await req.json()
      from = body.from || ''
      text = body.text || ''
    } catch {
      // Fall back to query params
      const { searchParams } = new URL(req.url)
      from = searchParams.get('from') || ''
      text = searchParams.get('text') || ''
    }
  }

  // Reuse the same GET logic by reconstructing the request URL
  const url = new URL(req.url)
  url.searchParams.set('from', from)
  url.searchParams.set('text', text)

  return GET(new NextRequest(url.toString(), { headers: req.headers }))
}
