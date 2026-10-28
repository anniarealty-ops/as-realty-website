import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, phone, type } = await req.json()
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN

  if (token && email) {
    const [firstname, ...rest] = String(name || '').trim().split(' ')
    try {
      await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            firstname: firstname || name,
            lastname: rest.join(' '),
            email,
            phone,
            ...(type ? { hs_lead_status: 'NEW' } : {}),
          },
        }),
      })
    } catch (err) {
      console.error('HubSpot contact create failed:', err)
    }
  }

  return NextResponse.json({ success: true })
}
