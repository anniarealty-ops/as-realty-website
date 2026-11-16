'use client'

import { useEffect, useState } from 'react'
import { FiX, FiDownload, FiHeadphones } from 'react-icons/fi'

type Lang = 'en' | 'es'

const text = {
  en: {
    badge: '100% Free',
    title: 'Keys In Hand',
    sub: 'The Fun & Simple First-Time Homebuyer Guide for Orlando, Kissimmee & Daytona. Every step, every program, every phone number.',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone (optional — get the audiobook version too)',
    cta: 'Send Me the Free Guide',
    sending: 'Sending...',
    fine: 'No spam. Unsubscribe anytime.',
    doneTitle: 'Your Guide Is On The Way!',
    doneBody: (email: string) => `Check your inbox at ${email}.`,
    doneAudio: 'We\'re also texting you the audio version.',
    openGuide: 'Open Your Guide Now',
    langToggle: 'Español',
  },
  es: {
    badge: '100% Gratis',
    title: 'Keys In Hand',
    sub: 'La guía fácil y sencilla para compradores de primera vivienda en Orlando, Kissimmee y Daytona. Cada paso, cada programa, cada número de teléfono.',
    name: 'Nombre Completo',
    email: 'Correo Electrónico',
    phone: 'Teléfono (opcional — recibe también la versión en audio)',
    cta: 'Envíame la Guía Gratis',
    sending: 'Enviando...',
    fine: 'Sin spam. Cancela cuando quieras.',
    doneTitle: '¡Tu Guía Está en Camino!',
    doneBody: (email: string) => `Revisa tu correo en ${email}.`,
    doneAudio: 'También te estamos enviando la versión en audio por mensaje de texto.',
    openGuide: 'Abrir Tu Guía Ahora',
    langToggle: 'English',
  },
}

export default function FreeGuidePopup() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('en')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('kih-popup-seen')) return

    let shown = false
    const show = () => {
      if (shown) return
      shown = true
      setOpen(true)
      sessionStorage.setItem('kih-popup-seen', '1')
    }

    // Exit intent (desktop)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }
    document.addEventListener('mouseleave', onMouseLeave)

    // Fallback timer (works on mobile where exit-intent doesn't apply)
    const timer = setTimeout(show, 25000)

    return () => {
      document.removeEventListener('mouseleave', onMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  const t = text[lang]

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = lang === 'en' ? 'Required' : 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = lang === 'en' ? 'Valid email required' : 'Correo válido requerido'
    }
    return e
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    try {
      await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          type: 'buyer',
          guide: 'keys-in-hand',
          language: lang,
          pageUri: window.location.href,
        }),
      })
    } catch {
      /* still show success — don't block the user on a network hiccup */
    }
    setLoading(false)
    setDone(true)
  }

  if (!open) return null

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white ${
      errors[field] ? 'border-red-400' : 'border-gray-200'
    }`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
        >
          <FiX size={22} />
        </button>

        <div className="bg-navy-900 px-7 pt-7 pb-5">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-gold-400 text-xs font-bold uppercase tracking-widest underline mb-3"
          >
            {t.langToggle}
          </button>
          <div className="inline-block bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {t.badge}
          </div>
          <h2 className="text-white text-2xl font-extrabold leading-tight">{t.title}</h2>
          <p className="text-gray-300 text-sm mt-2 leading-relaxed">{t.sub}</p>
        </div>

        <div className="px-7 py-6">
          {done ? (
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDownload className="text-green-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-1">{t.doneTitle}</h3>
              <p className="text-gray-500 text-sm mb-1">{t.doneBody(form.email)}</p>
              {form.phone && (
                <p className="text-gray-500 text-xs flex items-center justify-center gap-1 mt-2">
                  <FiHeadphones /> {t.doneAudio}
                </p>
              )}
              <a
                href="/guides/keys-in-hand.pdf"
                target="_blank"
                className="btn-primary w-full flex items-center justify-center gap-2 mt-5 py-3"
              >
                <FiDownload /> {t.openGuide}
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <div>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.name}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.email}
                  type="email"
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={t.phone}
                  type="tel"
                  className={inputClass('phone')}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3.5 font-bold disabled:opacity-60"
              >
                {loading ? t.sending : t.cta}
              </button>
              <p className="text-center text-xs text-gray-400">{t.fine}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
