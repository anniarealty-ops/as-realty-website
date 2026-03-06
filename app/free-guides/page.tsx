import Link from 'next/link'
import { FiDownload, FiCheckCircle, FiArrowRight, FiHome, FiTrendingUp } from 'react-icons/fi'

const buyerTips = [
  'Florida down payment assistance programs — free money',
  'How to buy with today\'s rates and still win',
  'Find homes before they hit Zillow',
  'The offer strategy that beats multiple bids',
  'New construction vs. resale — what\'s smarter now',
  'Complete 30-day buying timeline',
  'Hidden costs nobody tells first-time buyers',
  'Bilingual guide: English & Español',
]

const sellerTips = [
  'Price your home to sell fast AND for top dollar',
  'Net $10K–$20K more with low-cost improvements',
  'Navigate Florida\'s insurance crisis as a seller',
  'The 30-day selling timeline — nothing left to chance',
  'What buyers look for right now in Central FL',
  'Broker vs. discount agent — the real numbers',
  'How to attract multiple offers in any market',
  'Free home valuation with Annia included',
]

export default function FreeGuidesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#1A2E22] py-20 md:py-28 text-center">
        <div className="container max-w-3xl mx-auto px-6">
          <span className="block text-[#8DBDAD] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
            2026 Edition · 100% Free
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wider text-white leading-tight">
            Free Florida<br />
            <em className="not-italic text-[#8DBDAD]">Real Estate Guides</em>
          </h1>
          <p className="mt-6 text-white/60 text-base leading-relaxed max-w-xl mx-auto font-light">
            Whether you&apos;re buying your first home or selling for maximum value — Annia&apos;s free 2026 guides give you the insider playbook. English &amp; Spanish.
          </p>
        </div>
      </section>

      {/* ── TWO GUIDE CARDS ── */}
      <section className="bg-[#F5FAF7] py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* ── BUYER'S GUIDE ── */}
            <div className="bg-white border border-[#E8F3EE] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Top banner */}
              <div className="bg-[#E8F3EE] px-8 py-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#6B9E8A] rounded-full flex items-center justify-center shrink-0">
                  <FiHome className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-[#6B9E8A] text-[10px] font-semibold uppercase tracking-[0.25em]">Free Guide — 2026</p>
                  <h2 className="font-display text-2xl font-light text-[#1A2E22] tracking-wide uppercase">Buyer&apos;s Guide</h2>
                </div>
              </div>

              <div className="px-8 py-8 flex flex-col flex-1">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The complete playbook for first-time buyers and move-up buyers in Central Florida — down payment programs, offer strategies, and a step-by-step 30-day timeline.
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {buyerTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <FiCheckCircle className="text-[#6B9E8A] shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/buyers/free-guide"
                  className="btn-gold w-full flex items-center justify-center gap-3 py-4 text-sm"
                >
                  <FiDownload /> Get the Free Buyer&apos;s Guide
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">No spam · Instant access · English &amp; Español</p>
              </div>
            </div>

            {/* ── SELLER'S GUIDE ── */}
            <div className="bg-white border border-[#E8F3EE] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Top banner */}
              <div className="bg-[#1A2E22] px-8 py-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#6B9E8A] rounded-full flex items-center justify-center shrink-0">
                  <FiTrendingUp className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-[#8DBDAD] text-[10px] font-semibold uppercase tracking-[0.25em]">Free Guide — 2026</p>
                  <h2 className="font-display text-2xl font-light text-white tracking-wide uppercase">Seller&apos;s Guide</h2>
                </div>
              </div>

              <div className="px-8 py-8 flex flex-col flex-1">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The insider strategies used by top Central Florida sellers — how to price right, attract the best buyers, navigate Florida&apos;s insurance market, and net more at closing.
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {sellerTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <FiCheckCircle className="text-[#6B9E8A] shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sellers/free-guide"
                  className="btn-navy w-full flex items-center justify-center gap-3 py-4 text-sm"
                >
                  <FiDownload /> Get the Free Seller&apos;s Guide
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">No spam · Instant access · Free home valuation included</p>
              </div>
            </div>

          </div>

          {/* ── NOT SURE? ── */}
          <div className="mt-12 bg-[#E8F3EE] rounded-2xl p-8 md:p-10 text-center">
            <span className="block text-[#6B9E8A] text-[10px] font-semibold uppercase tracking-[0.3em] mb-3">Not Sure Where to Start?</span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-[#1A2E22] uppercase tracking-wide">
              Talk to Annia — It&apos;s Free
            </h3>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Annia personally answers every call and email. No bots, no pressure — just honest advice from a 20-year Central Florida expert. English &amp; Spanish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:4074921114" className="btn-gold inline-flex items-center justify-center gap-2 py-4 px-8">
                Call (407) 492-1114
              </a>
              <Link href="/contact" className="btn-navy inline-flex items-center justify-center gap-2 py-4 px-8">
                Send a Message <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
