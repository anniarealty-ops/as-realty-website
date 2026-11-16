'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FiPlay, FiDownload, FiPhoneCall } from 'react-icons/fi'

export default function KeysInHandAudioPage() {
  return (
    <Suspense fallback={null}>
      <AudioContent />
    </Suspense>
  )
}

function AudioContent() {
  const searchParams = useSearchParams()
  const initialLang = searchParams.get('lang') === 'es' ? 'es' : 'en'
  const [lang, setLang] = useState<'en' | 'es'>(initialLang)

  const copy = {
    en: {
      eyebrow: 'Audio Guide',
      title: 'Keys In Hand — Listen Now',
      sub: 'The 4-minute audio digest of the Central Florida First-Time Homebuyer Guide. Read by Annia Santana’s team, for your drive, your walk, or while you cook dinner.',
      toggleLabel: 'English',
      full: 'Want the full written guide instead?',
      fullLink: 'Open the PDF guide',
    },
    es: {
      eyebrow: 'Guía en Audio',
      title: 'Keys In Hand — Escucha Ahora',
      sub: 'El resumen en audio de 5 minutos de la guía para compradores de primera vivienda del Centro de Florida. Para tu camino, tu caminata, o mientras cocinas.',
      toggleLabel: 'Español',
      full: '¿Prefieres la guía completa por escrito?',
      fullLink: 'Abrir la guía en PDF',
    },
  }[lang]

  return (
    <section className="min-h-[80vh] bg-navy-900 flex items-center py-20">
      <div className="max-w-xl mx-auto px-6 w-full text-center">
        {/* Language toggle */}
        <div className="inline-flex rounded-full bg-navy-700 p-1 mb-8">
          <button
            onClick={() => setLang('en')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${lang === 'en' ? 'bg-gold-500 text-navy-900' : 'text-white/70'}`}
          >
            English
          </button>
          <button
            onClick={() => setLang('es')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${lang === 'es' ? 'bg-gold-500 text-navy-900' : 'text-white/70'}`}
          >
            Español
          </button>
        </div>

        <span className="block text-gold-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">
          {copy.eyebrow}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{copy.title}</h1>
        <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-md mx-auto">{copy.sub}</p>

        <div className="bg-white rounded-2xl p-6 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
            <FiPlay className="text-navy-900 text-xl ml-0.5" />
          </div>
          <audio
            key={lang}
            controls
            className="w-full"
            src={lang === 'en' ? '/audio/keys-in-hand-en.m4a' : '/audio/keys-in-hand-es.m4a'}
          >
            Your browser does not support audio playback.
          </audio>
        </div>

        <p className="text-gray-400 text-xs mt-6">{copy.full}</p>
        <Link
          href="/guides/keys-in-hand.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold mt-2 hover:text-gold-300"
        >
          <FiDownload /> {copy.fullLink}
        </Link>

        <div className="mt-10 pt-8 border-t border-white/10">
          <a href="tel:4074921114" className="btn-gold inline-flex items-center gap-2 px-6 py-3">
            <FiPhoneCall /> (407) 492-1114
          </a>
        </div>
      </div>
    </section>
  )
}
