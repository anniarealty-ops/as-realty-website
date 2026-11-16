'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiPhone, FiDownload } from 'react-icons/fi'
import LeadForm from './LeadForm'

const LINES = [
  { text: 'Your',        color: 'text-white' },
  { text: 'Central',     color: 'text-[#8DBDAD]' },
  { text: 'Florida',     color: 'text-white' },
  { text: 'Real Estate', color: 'text-white' },
  { text: 'Expert.',     color: 'text-white' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1800&q=90"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-neighborhood-during-dusk-41920-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Cinematic gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-[#1A2E22]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="relative container w-full pb-20 md:pb-28 pt-10">
        <div className="grid md:grid-cols-2 gap-16 items-end">

          {/* Left — headline */}
          <div>
            <motion.span
              className="eyebrow text-[#8DBDAD]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Central Florida · 20+ Years · 7 Counties
            </motion.span>

            <h1 className="h-hero mt-4">
              {LINES.map((line, i) => (
                <motion.span
                  key={i}
                  className={`block ${line.color}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.13, duration: 0.65, ease: 'easeOut' }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-8 text-white/70 text-base leading-relaxed max-w-md font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.9 }}
            >
              From Orlando to the Space Coast — Annia Santana has spent over 20 years
              helping Central Florida families buy, sell, and invest with confidence.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.6 }}
            >
              <Link href="/buyers" className="btn-gold">Find Homes $280K+</Link>
              <Link href="/sellers" className="btn-dark">What&apos;s My Home Worth?</Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              <a
                href="tel:4074921114"
                className="flex items-center gap-2 text-white/50 hover:text-[#8DBDAD] transition-colors text-sm"
              >
                <FiPhone className="text-[#8DBDAD]" /> (407) 492-1114
              </a>
              <a
                href="https://mls-client.com/E71168B2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8DBDAD] hover:text-white text-sm transition-colors"
              >
                <FiDownload /> Mobile App
              </a>
            </motion.div>
          </div>

          {/* Right — lead form */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
          >
            <LeadForm
              title="Connect With Annia"
              subtitle="Tell us your goals — we'll reach out within 24 hours."
              dark
            />
          </motion.div>
        </div>
      </div>

      {/* ── Animated scroll cue ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-[9px] tracking-[0.3em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span>Scroll</span>
        <motion.span
          className="w-px h-10 bg-white/20 block"
          animate={{ scaleY: [1, 0.2, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
