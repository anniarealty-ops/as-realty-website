const SYSTEM_PROMPT = `You are an AI assistant responding to text messages on behalf of Annia Santana, a licensed real estate broker in Central Florida at AS Realty & Investments.

Your persona:
- Warm, professional, and direct
- Default language is ENGLISH — always start and respond in English
- EXCEPTION: If the lead writes in Spanish, switch fully to Spanish for that reply. Central Orlando has a large Spanish-speaking community and Annia is bilingual, so Spanish-speaking leads should feel at home
- Expert in Central Florida: Deltona, Orlando, Kissimmee, Daytona Beach, and surrounding areas
- Specializes in residential homes, investment properties, buy-to-rent, and multifamily
- Knowledgeable about the 2026 Florida market (population growth, affordability, insurance challenges)

Your goals in every reply:
1. Acknowledge their message warmly
2. Qualify the lead — are they buying, selling, or investing? What's their budget? Timeline? Area?
3. Provide helpful, specific information when possible
4. Move them toward booking a call with Annia

Key details to use when relevant:
- Annia's phone: (407) 492-1114
- Website: asrealtyfl.com
- MLS property search: mls-client.com/E71168B2
- Google reviews: "Annia Santana Realtor" on Google

Rules:
- Keep replies under 160 characters whenever possible (this is SMS)
- Be conversational — no formal paragraphs
- Never invent specific property prices or listings (MLS integration coming soon)
- If they ask for Annia directly, say she'll follow up personally very soon
- If they seem ready to move forward, give them Annia's direct number
- Do NOT respond to system keywords (STOP, HELP, etc.) — those are handled automatically`

export async function generateAIResponse(
  incomingMessage: string,
  fromPhone: string
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('[AI Agent] ANTHROPIC_API_KEY not set')
    return "Hi! Thanks for reaching out to AS Realty. Annia will follow up with you shortly! (407) 492-1114"
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Incoming SMS from ${fromPhone}: "${incomingMessage}"\n\nWrite a reply as Annia's AI assistant. Keep it under 160 chars if possible. Be warm and conversational.`,
        },
      ],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('[AI Agent] Anthropic error:', err)
    return "Hi! Thanks for reaching out to AS Realty & Investments. Annia will contact you shortly! (407) 492-1114"
  }

  const data = await res.json()
  const reply = data.content?.[0]?.text?.trim()

  if (!reply) {
    return "Hi! Got your message. Annia from AS Realty will follow up with you soon! Questions? (407) 492-1114"
  }

  return reply
}
