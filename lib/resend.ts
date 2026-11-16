const RESEND_API = 'https://api.resend.com/emails'

export async function sendAlertEmail(subject: string, body: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ANNIA_ALERT_EMAIL || 'Annia.Realty@Gmail.com'
  if (!apiKey) {
    console.error('[Resend] RESEND_API_KEY not set — skipping email alert')
    return
  }

  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'AS Realty Alerts <alerts@asrealtyfl.com>',
      to: [to],
      subject,
      text: body,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('[Resend] Email send failed:', err)
  }
}
