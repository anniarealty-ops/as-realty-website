'use client'

import { useEffect, useState } from 'react'

interface StickyLeadBarProps {
  source: 'for-sale' | 'for-rent'
  src?: string
  sentinelId?: string
}

// Soft gate: shows only after the visitor has scrolled past the listings grid,
// so they see real homes before being asked for their number.
export default function StickyLeadBar({ source, src, sentinelId = 'listings-end' }: StickyLeadBarProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const sentinel = document.getElementById(sentinelId)
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setVisible(true)
        }
      },
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [sentinelId])

  if (!visible || dismissed) return null

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) return
    setSubmitted(true)
    try {
      await fetch('/api/sign-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, source, src }),
      })
    } catch (err) {
      console.error('Sticky lead bar submit failed:', err)
    }
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-navy-900 shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
      {submitted ? (
        <div className="max-w-3xl mx-auto px-4 py-3 text-center text-white text-sm">
          You're on the list — Annia will text you shortly.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <p className="hidden sm:block text-white text-sm font-medium flex-1 leading-snug">
            {source === 'for-rent'
              ? 'Get rental alerts in this area'
              : 'Get price-drop alerts + new listings in this area'}{' '}
            — just drop your number.
          </p>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            required
            placeholder="(407) 000-0000"
            className="flex-1 sm:flex-none sm:w-44 px-3 py-2 rounded text-navy-900 text-sm focus:outline-none"
          />
          <button type="submit" className="btn-primary px-5 py-2 text-xs whitespace-nowrap">
            Send Me Alerts
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="text-white/50 hover:text-white text-lg px-1"
          >
            ×
          </button>
        </form>
      )}
      {!submitted && (
        <p className="max-w-3xl mx-auto px-4 pb-2 text-[10px] text-white/50 text-center sm:text-left">
          By submitting you agree to receive texts from AS Realty & Investments. Reply STOP to opt out.
        </p>
      )}
    </div>
  )
}
