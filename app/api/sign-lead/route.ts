import { NextRequest, NextResponse } from 'next/server'
import { sendSMS } from '@/lib/simpletexting'
import { sendAlertEmail } from '@/lib/resend'

type SignLeadBody = {
  name?: string
  phone: string
  source: 'for-sale' | 'for-rent'
  interest?: string
  src?: string
}

const PAGE_URL: Record<SignLeadBody['source'], string> = {
  'for-sale': 'asrealtyfl.com/for-sale',
  'for-rent': 'asrealtyfl.com/for-rent',
}

export async function POST(req: NextRequest) {
  const { name = '', phone, source, interest, src } = (await req.json()) as SignLeadBody

  const label = source === 'for-rent' ? 'FOR RENT' : 'FOR SALE'
  const tag = src ? ` [${src}]` : ''
  const summary = `New ${label} sign lead${tag}: ${name || '(no name)'} — ${phone}${interest ? ` (${interest})` : ''}`

  await Promise.allSettled([
    pushToHubSpot(name, phone, source, src),
    sendAlertEmail(`New ${label} lead from sign QR — ${name || phone}`, summary),
    sendSMS(process.env.ANNIA_ALERT_PHONE || '4074921114', summary),
    textLeadBack(phone, source, name),
  ])

  return NextResponse.json({ success: true })
}

// Instant auto-reply to the LEAD themselves — speed is the product
async function textLeadBack(phone: string, source: SignLeadBody['source'], name: string) {
  const firstName = name.trim().split(' ')[0]
  const greeting = firstName ? `${firstName}, ` : ''
  const link = PAGE_URL[source]

  const message =
    source === 'for-rent'
      ? `Annia here — ${greeting}got your info. Current rentals: ${link}. I'll text you personally in a minute. Reply RENT to tell me your move-in timeline.`
      : `Annia here — ${greeting}got your info. Current listings: ${link}. I'll text you personally in a minute. Reply BUY or SELL so I know how to help.`

  await sendSMS(phone, message)
}

async function pushToHubSpot(name: string, phone: string, source: string, src?: string) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!token) {
    console.error('[sign-lead] HUBSPOT_PRIVATE_APP_TOKEN not set — skipping CRM push')
    return
  }

  const [firstname, ...rest] = name.trim().split(' ')
  try {
    await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          firstname: firstname || undefined,
          lastname: rest.join(' ') || undefined,
          phone,
          hs_lead_status: 'NEW',
          lead_source: `Sign QR — ${source}${src ? ` (${src})` : ''}`,
        },
      }),
    })
  } catch (err) {
    console.error('[sign-lead] HubSpot contact create failed:', err)
  }
}
