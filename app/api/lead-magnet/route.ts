import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, zip, type, guide, language } = body
  const lang: 'en' | 'es' = language === 'es' ? 'es' : 'en'

  // 1. Create/update contact directly in HubSpot CRM
  const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  try {
    if (HUBSPOT_TOKEN) {
      const [firstname, ...rest] = String(name || '').trim().split(' ')
      await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            firstname: firstname || name,
            lastname: rest.join(' '),
            email,
            phone,
          },
        }),
      })
    }
  } catch (err) {
    console.error('HubSpot form submit failed:', err)
  }

  // 2. Send welcome SMS via SimpleTexting (add your API key to .env.local)
  const ST_API_KEY = process.env.SIMPLETEXTING_API_KEY
  const ST_ACCOUNT_PHONE = process.env.SIMPLETEXTING_ACCOUNT_PHONE
  if (ST_API_KEY && ST_ACCOUNT_PHONE && phone) {
    const guideLabel = type === 'seller' ? 'Seller' : 'Buyer'
    const guideUrl = type === 'seller'
      ? 'https://asrealtyfl.com/guides/seller'
      : 'https://asrealtyfl.com/guides/buyer'
    const audioUrl = `https://asrealtyfl.com/audio/keys-in-hand?lang=${lang}`
    const smsMessage = guide === 'keys-in-hand'
      ? (lang === 'es'
          ? `Hola ${name.split(' ')[0]}! Tu guía Keys In Hand ya está lista. Escúchala en audio aquí: ${audioUrl}\n\nPreguntas? Llama o envía texto a Annia: (407) 492-1114`
          : `Hi ${name.split(' ')[0]}! Your Keys In Hand guide is ready. Listen to the audio version here: ${audioUrl}\n\nQuestions? Call/text Annia: (407) 492-1114`)
      : `Hi ${name.split(' ')[0]}! Your 2026 Florida ${guideLabel}'s Guide from Annia Santana is ready: ${guideUrl}\n\nQuestions? Call/text Annia: (407) 492-1114`

    try {
      await fetch('https://api.simpletexting.com/v2/api/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ST_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactPhone: phone.replace(/\D/g, '').replace(/^(\d{10})$/, '1$1'),
          accountPhone: ST_ACCOUNT_PHONE,
          message: smsMessage,
        }),
      })
    } catch { /* non-blocking */ }
  }

  // 3. Send welcome email via Resend (add your API key to .env.local)
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (RESEND_API_KEY && email) {
    const isseller = type === 'seller'
    const isKeysInHand = guide === 'keys-in-hand'
    const guideUrl = isKeysInHand
      ? 'https://asrealtyfl.com/guides/keys-in-hand.pdf'
      : isseller
        ? 'https://asrealtyfl.com/guides/seller'
        : 'https://asrealtyfl.com/guides/buyer'
    const subject = isKeysInHand
      ? (lang === 'es' ? '🔑 Tu guía Keys In Hand ya está lista' : '🔑 Your Keys In Hand Guide Is Ready')
      : isseller
        ? '📋 Your 2026 Central FL Home Seller\'s Guide is Ready'
        : '🏠 Your 2026 Florida Home Buyer\'s Guide is Ready'

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Annia Santana <annia@asrealtyfl.com>',
          to: email,
          subject,
          html: isKeysInHand
            ? buildKeysInHandEmailHTML(name, guideUrl, lang, !!phone)
            : buildEmailHTML(name, guideUrl, isseller),
        }),
      })
    } catch { /* non-blocking */ }
  }

  return NextResponse.json({ success: true })
}

function buildKeysInHandEmailHTML(name: string, guideUrl: string, lang: 'en' | 'es', hasPhone: boolean): string {
  const firstName = name.split(' ')[0]
  const audioUrl = `https://asrealtyfl.com/audio/keys-in-hand?lang=${lang}`
  const t = lang === 'es'
    ? {
        heading: `¡Tu Guía Está Lista, ${firstName}!`,
        body: 'Gracias por pedir <strong>Keys In Hand</strong>, la guía para compradores de primera vivienda en el Centro de Florida. Cada paso, cada programa de ayuda, cada número de teléfono que necesitas.',
        cta: '📖 Abrir Tu Guía →',
        audioLine: hasPhone ? 'También te enviamos la versión en audio por mensaje de texto.' : '',
        follow: 'Estoy aquí para ayudarte en cada paso. Si tienes preguntas, responde este correo o llámame directamente.',
        ctaBottom: 'Buscar Casas Disponibles',
      }
    : {
        heading: `Your Guide Is Ready, ${firstName}!`,
        body: 'Thank you for requesting <strong>Keys In Hand</strong>, the Central Florida first-time homebuyer guide. Every step, every assistance program, every phone number you need.',
        cta: '📖 Open Your Guide →',
        audioLine: hasPhone ? 'We also texted you the audio version.' : '',
        follow: 'I\'m here to help you every step of the way. If you have any questions, reply to this email or call me directly.',
        ctaBottom: 'Search Available Listings',
      }

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:Inter,Arial,sans-serif;background:#f4f4f5;margin:0;padding:20px">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:#09163a;padding:32px 32px 24px;text-align:center">
      <div style="color:#c9a84c;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px">AS Realty & Investments</div>
      <h1 style="color:white;font-size:22px;margin:0;font-weight:800">${t.heading}</h1>
    </div>
    <div style="padding:32px">
      <p style="color:#374151;font-size:15px;line-height:1.7;margin-top:0">${t.body}</p>
      <div style="text-align:center;margin:28px 0">
        <a href="${guideUrl}" style="background:#c9a84c;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;display:inline-block">${t.cta}</a>
      </div>
      ${t.audioLine ? `<p style="text-align:center;color:#6b7280;font-size:13px;margin-top:-10px">🎧 ${t.audioLine} <a href="${audioUrl}" style="color:#c9a84c">Listen here</a></p>` : ''}
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">
      <p style="color:#374151;font-size:14px;line-height:1.7">${t.follow}</p>
      <p style="color:#374151;font-size:14px;margin-bottom:4px"><strong>Annia Santana</strong></p>
      <p style="color:#6b7280;font-size:13px;margin:0">Licensed Florida Broker | AS Realty & Investments</p>
      <p style="color:#6b7280;font-size:13px;margin:4px 0">
        <a href="tel:4074921114" style="color:#c9a84c">(407) 492-1114</a> |
        <a href="mailto:Annia.Realty@Gmail.com" style="color:#c9a84c">Annia.Realty@Gmail.com</a>
      </p>
      <div style="margin-top:24px;text-align:center">
        <a href="https://mls-client.com/E71168B2" style="background:#09163a;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:13px;display:inline-block">${t.ctaBottom}</a>
      </div>
    </div>
    <div style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb">
      <p style="color:#9ca3af;font-size:11px;margin:0">AS Realty & Investments | asrealtyfl.com | Central Florida<br><a href="#" style="color:#9ca3af">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`
}

function buildEmailHTML(name: string, guideUrl: string, isSeller: boolean): string {
  const firstName = name.split(' ')[0]
  const title = isSeller ? '2026 Central Florida Home Seller\'s Guide' : '2026 Florida Home Buyer\'s Guide'
  const cta = isSeller ? 'Get My Free Home Valuation' : 'Search Available Listings'
  const ctaUrl = isSeller ? 'https://asrealtyfl.com/sellers' : 'https://mls-client.com/E71168B2'

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:Inter,Arial,sans-serif;background:#f4f4f5;margin:0;padding:20px">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:#09163a;padding:32px 32px 24px;text-align:center">
      <div style="color:#c9a84c;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px">AS Realty & Investments</div>
      <h1 style="color:white;font-size:22px;margin:0;font-weight:800">Your Guide Is Ready, ${firstName}!</h1>
    </div>
    <div style="padding:32px">
      <p style="color:#374151;font-size:15px;line-height:1.7;margin-top:0">
        Thank you for requesting the <strong>${title}</strong>. This guide contains the strategies used by the top 0.01% of Florida real estate clients.
      </p>
      <div style="text-align:center;margin:28px 0">
        <a href="${guideUrl}" style="background:#c9a84c;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;display:inline-block">
          📋 Open Your Free Guide →
        </a>
      </div>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">
      <p style="color:#374151;font-size:14px;line-height:1.7">
        I'm here to help you every step of the way. If you have any questions, reply to this email or call me directly.
      </p>
      <p style="color:#374151;font-size:14px;margin-bottom:4px"><strong>Annia Santana</strong></p>
      <p style="color:#6b7280;font-size:13px;margin:0">Licensed Florida Broker | AS Realty & Investments</p>
      <p style="color:#6b7280;font-size:13px;margin:4px 0">
        <a href="tel:4074921114" style="color:#c9a84c">(407) 492-1114</a> |
        <a href="mailto:Annia.Realty@Gmail.com" style="color:#c9a84c">Annia.Realty@Gmail.com</a>
      </p>
      <div style="margin-top:24px;text-align:center">
        <a href="${ctaUrl}" style="background:#09163a;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:13px;display:inline-block">
          ${cta}
        </a>
      </div>
    </div>
    <div style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb">
      <p style="color:#9ca3af;font-size:11px;margin:0">
        AS Realty & Investments | asrealtyfl.com | Central Florida & Miami<br>
        <a href="#" style="color:#9ca3af">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>`
}
