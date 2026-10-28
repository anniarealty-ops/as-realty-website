'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiCheckCircle, FiDownload, FiStar, FiArrowRight } from 'react-icons/fi'

const chapters = [
  { num: '01', title: 'Why 2026 Is the Right Time to Sell in Central FL', desc: 'Population growth, rising equity, and the window that closes in 12 months.' },
  { num: '02', title: 'What Your Home Is Actually Worth', desc: 'How to read a real CMA — not Zillow\'s guess — and price it to WIN.' },
  { num: '03', title: 'The 5 Things Buyers Look For Right Now', desc: 'What inspections, insurance, and interest rates mean for your listing today.' },
  { num: '04', title: 'How to Net $10K–$20K More on Your Sale', desc: 'Low-cost improvements, staging secrets, and negotiation leverage.' },
  { num: '05', title: 'Navigating Florida\'s Insurance Crisis as a Seller', desc: 'How to disclose, price around, and still attract multiple offers.' },
  { num: '06', title: 'The 30-Day Selling Timeline', desc: 'Exact steps from decision to closing — nothing left to chance.' },
  { num: '07', title: 'Why a Broker vs. a Discount Agent Costs You Thousands', desc: 'The numbers behind representation and negotiation that agents don\'t show you.' },
  { num: '08', title: 'Your Free Home Valuation + Next Steps', desc: 'How to book your complimentary CMA with Annia and get moving fast.' },
]

const reviews = [
  { name: 'Maria G.', text: 'Annia sold our home in 18 days — $14,000 over asking. Incredible.' },
  { name: 'James T.', text: 'Professional, responsive, and got us top dollar. Highly recommend.' },
  { name: 'Sofia R.', text: 'Best realtor in Central Florida. She knows this market inside and out.' },
]

export default function SellerFunnelPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/\S+@\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.zip.trim()) e.zip = 'Required'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      const hutk = document.cookie.match(/hubspotutk=([^;]+)/)?.[1]
      await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'seller', guide: 'seller-guide-2026', hutk, pageUri: window.location.href }),
      })
    } catch { /* still proceed */ }
    setLoading(false)
    setDone(true)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white ${errors[field] ? 'border-red-400' : 'border-gray-200'}`

  return (
    <>
      {/* HERO */}
      <section
        className="bg-navy-900 py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(9,22,58,0.97) 55%, rgba(9,22,58,0.8)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <FiDownload className="text-gold-400" />
              Free Seller's Guide — 2026 Edition
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Sell Your Central Florida Home for{' '}
              <span className="text-gold-400">TOP Dollar</span>{' '}
              in 2026
            </h1>
            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              The insider strategies used by only the <strong className="text-white">top 0.01% of sellers</strong> — how to price right, attract the best buyers, and close with more money in your pocket.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-white text-sm">
                <div className="flex text-gold-400">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
                </div>
                <span className="font-semibold">9 Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FiCheckCircle className="text-gold-400" />
                Licensed Florida Broker
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FiCheckCircle className="text-gold-400" />
                20+ Years Experience
              </div>
            </div>

            {/* What's inside preview */}
            <div className="mt-8 space-y-2">
              {['Price your home to sell fast AND high', 'Navigate Florida\'s insurance challenges', 'Net $10K–$20K more at closing'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200 text-sm">
                  <FiCheckCircle className="text-gold-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {done ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiDownload className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Your Guide Is Ready!</h3>
                <p className="text-gray-500 text-sm mb-6">
                  We also sent a copy to <strong>{form.email}</strong>. Annia will follow up within 24 hours.
                </p>
                <Link
                  href="/guides/seller"
                  target="_blank"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4"
                >
                  Open My Free Guide <FiArrowRight />
                </Link>
                <p className="text-xs text-gray-400 mt-4">
                  Want a free home valuation?{' '}
                  <a href="tel:4074921114" className="text-gold-600 font-semibold">Call (407) 492-1114</a>
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gold-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3">
                    100% Free — Instant Access
                  </div>
                  <h2 className="text-2xl font-bold text-navy-800">Get Your Free Seller's Guide</h2>
                  <p className="text-gray-500 text-sm mt-1">8 chapters. Real strategies. Zero fluff.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Full Name *"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="Email Address *"
                      type="email"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="Phone *"
                        type="tel"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <input
                        value={form.zip}
                        onChange={e => setForm({ ...form, zip: e.target.value })}
                        placeholder="Zip Code *"
                        className={inputClass('zip')}
                      />
                      {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-4 text-base font-bold tracking-wide flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? 'Getting your guide...' : (<><FiDownload /> Send Me the Free Guide</>)}
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    No spam. Unsubscribe anytime. Your info is private.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Inside the Guide</span>
            <h2 className="text-3xl font-bold text-navy-800 mt-2">8 Chapters That Will Change How You Sell</h2>
            <p className="text-gray-500 mt-3 text-sm">Everything your agent won't tell you — all in one place.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((ch) => (
              <div key={ch.num} className="flex gap-5 p-5 rounded-xl border border-gray-100 hover:border-gold-300 hover:shadow-md transition-all">
                <div className="text-gold-500 font-extrabold text-2xl w-10 shrink-0">{ch.num}</div>
                <div>
                  <h3 className="font-bold text-navy-800 text-sm mb-1">{ch.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom CTA */}
          {!done && (
            <div className="text-center mt-12">
              <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary px-10 py-4 text-base inline-flex items-center gap-2">
                <FiDownload /> Get the Free Guide Now
              </a>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Meet Your Guide</span>
              <h2 className="text-3xl font-bold text-navy-800 mt-2">Annia Santana, Licensed Florida Broker</h2>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Annia has helped hundreds of Central Florida homeowners sell their properties quickly and for top dollar.
                As a broker owner with 20+ years of experience, she knows exactly what it takes to win in today's market.
              </p>
              <div className="mt-6 space-y-3">
                {['Stellar MLS + Miami MLS certified broker', 'Bilingual: English & Spanish', 'AS Realty & Investments — locally owned', '9 verified 5-star Google reviews'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <FiCheckCircle className="text-gold-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a href="tel:4074921114" className="btn-primary text-sm px-6 py-3">
                  Call (407) 492-1114
                </a>
                <Link href="/sellers/free-guide" className="btn-outline text-sm px-6 py-3 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white">
                  Get Free Guide
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/annia-santana.jpg"
                alt="Annia Santana, Florida Broker"
                className="rounded-2xl shadow-xl w-full max-w-sm mx-auto object-cover object-top"
              />
            </div>
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex text-gold-500 mb-3">
                  {[...Array(5)].map((_, j) => <FiStar key={j} className="fill-current text-sm" />)}
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">"{r.text}"</p>
                <p className="text-navy-700 font-bold text-xs mt-3">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Sell the Smart Way?</h2>
          <p className="text-gray-300 mt-4 text-sm">
            Download the free guide now — then book your free home valuation with Annia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2"
            >
              <FiDownload /> Get the Free Guide
            </button>
            <a href="tel:4074921114" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-base">
              Call Annia Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
