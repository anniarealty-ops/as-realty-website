const ST_BASE = 'https://app2.simpletexting.com/v1'

function token() {
  return process.env.SIMPLETEXTING_API_KEY || ''
}

// Send a single SMS to a phone number (1 credit)
export async function sendSMS(to: string, message: string) {
  const phone = to.replace(/\D/g, '')
  const params = new URLSearchParams({
    token: token(),
    phone,
    message: message.slice(0, 160),
  })
  const res = await fetch(`${ST_BASE}/send?${params}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.json()
}

// Add a new contact to a SimpleTexting list
export async function addContact(
  phone: string,
  group = 'AI-Leads',
  opts: {
    firstName?: string
    lastName?: string
    email?: string
    comment?: string
  } = {}
) {
  const params = new URLSearchParams({
    token: token(),
    group,
    phone: phone.replace(/\D/g, ''),
  })
  if (opts.firstName) params.set('firstName', opts.firstName)
  if (opts.lastName) params.set('lastName', opts.lastName)
  if (opts.email) params.set('email', opts.email)
  if (opts.comment) params.set('comment', opts.comment)

  const res = await fetch(`${ST_BASE}/group/contact/add?${params}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.json()
}

// Update an existing contact's info
export async function updateContact(
  phone: string,
  group = 'AI-Leads',
  opts: {
    firstName?: string
    lastName?: string
    email?: string
    comment?: string
  }
) {
  const params = new URLSearchParams({
    token: token(),
    group,
    phone: phone.replace(/\D/g, ''),
  })
  if (opts.firstName) params.set('firstName', opts.firstName)
  if (opts.lastName) params.set('lastName', opts.lastName)
  if (opts.email) params.set('email', opts.email)
  if (opts.comment) params.set('comment', opts.comment)

  const res = await fetch(`${ST_BASE}/group/contact/update?${params}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.json()
}

// Block a contact (add to unsubscribed list)
export async function blockContact(phone: string) {
  const params = new URLSearchParams({
    token: token(),
    phone: phone.replace(/\D/g, ''),
  })
  const res = await fetch(`${ST_BASE}/contacts/blocklist/add?${params}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.json()
}
