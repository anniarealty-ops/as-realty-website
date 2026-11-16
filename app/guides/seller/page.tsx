import Link from 'next/link'
import PrintButton from '@/components/PrintButton'

export const metadata = {
  title: '2026 Central Florida Home Seller\'s Guide | AS Realty',
  description: 'The complete guide to selling your Central Florida home for top dollar in 2026.',
}

export default function SellerGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* Print bar */}
      <div className="no-print bg-navy-800 text-white py-3 px-6 flex justify-between items-center text-sm sticky top-0 z-10">
        <span className="text-gold-400 font-semibold">2026 Central FL Seller's Guide — AS Realty & Investments</span>
        <div className="flex gap-4">
          <PrintButton className="bg-gold-500 text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-gold-400 transition" label="⬇ Save as PDF" />
          <Link href="/sellers/free-guide" className="text-gray-300 hover:text-white text-xs">← Back</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">

        {/* Cover */}
        <div className="bg-navy-900 rounded-2xl p-12 text-center mb-12" style={{ background: 'linear-gradient(135deg, #09163a, #1e3a7a)' }}>
          <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">AS Realty & Investments</p>
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            2026 Central Florida<br />
            <span className="text-gold-400">Home Seller's Guide</span>
          </h1>
          <p className="text-gray-300 text-base max-w-md mx-auto">
            The insider strategies used by the top 0.01% of sellers to price right, attract the best buyers, and close with more money.
          </p>
          <div className="mt-8 border-t border-white/20 pt-6 flex justify-center gap-8 text-xs text-gray-400">
            <span>Annia Santana, Licensed Broker</span>
            <span>asrealtyfl.com</span>
            <span>(407) 492-1114</span>
          </div>
        </div>

        {/* Chapter 1 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">01</div>
            <h2 className="text-2xl font-bold text-navy-800">Why 2026 Is the Right Time to Sell in Central FL</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">Central Florida continues to be one of the fastest-growing regions in the United States. Despite elevated interest rates, buyer demand remains strong driven by population migration from high-cost states like New York, California, and Illinois.</p>
          <p className="text-gray-600 leading-relaxed mb-3">The Deltona-Daytona Beach-Ormond Beach metro and the Orlando metro areas are projected to add 50,000+ new residents in 2026 alone. This sustained demand means qualified buyers are actively searching — and inventory in the $250K–$450K range remains tight.</p>
          <div className="bg-gold-50 border-l-4 border-gold-500 p-4 rounded-r-lg">
            <p className="text-navy-800 font-semibold text-sm">Key insight: Homeowners who have owned for 5+ years are sitting on $80,000–$150,000 in equity on average. That's life-changing money — and 2026 is the year to capture it.</p>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 2 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">02</div>
            <h2 className="text-2xl font-bold text-navy-800">What Your Home Is Actually Worth</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">Zillow's "Zestimate" is notoriously inaccurate — off by as much as 10–20% in rapidly changing markets like Central Florida. Here's how to get a real number:</p>
          <ul className="space-y-3 mb-4">
            {[
              { title: 'Comparable Sales (Comps)', desc: 'Look at homes that sold within 0.5 miles in the past 90 days with similar square footage, beds/baths, and condition.' },
              { title: 'Price Per Square Foot', desc: 'Divide the sale price by gross living area. In Deltona/Orlando, this typically ranges from $160–$230/sqft in 2026.' },
              { title: 'Condition Adjustments', desc: 'Updated kitchen/baths add $15K–$40K in value. A new roof adds $8K–$15K of buyer confidence.' },
              { title: 'HOA & Insurance Costs', desc: 'Higher HOA fees or flood insurance requirements reduce effective buyer purchasing power and should be factored into your price.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold-500 font-bold mt-0.5">→</span>
                <span className="text-gray-600 text-sm"><strong className="text-navy-800">{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
          <div className="bg-navy-50 border border-navy-200 p-4 rounded-lg">
            <p className="text-navy-800 text-sm"><strong>Action step:</strong> Call Annia at (407) 492-1114 for a free CMA — a real broker analysis, not an algorithm. This is the most important number in your sale.</p>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 3 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">03</div>
            <h2 className="text-2xl font-bold text-navy-800">The 5 Things Buyers Look For Right Now</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: '1. Move-In Ready Condition', desc: 'Buyers are paying premium rates — they expect to turn the key and move in. Fresh paint, clean carpets, and a deep clean go a long way.' },
              { label: '2. Updated Roof & HVAC', desc: 'Florida insurance companies scrutinize roof age heavily. A roof under 5 years old can increase your buyer pool by 40%.' },
              { label: '3. Strong Photos & Video', desc: 'Over 95% of buyers begin their search online. Professional photography and drone video are non-negotiable in 2026.' },
              { label: '4. Transparent Insurance Disclosure', desc: 'Buyers are asking about insurance costs upfront. Being proactive and transparent builds trust and speeds up closing.' },
              { label: '5. Competitive Pricing (Not Wishful Pricing)', desc: 'Overpriced homes sit on the market and get stigmatized. Correct pricing in the first 30 days maximizes your final sale price.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-gold-500 font-bold text-sm shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-navy-800 text-sm mb-1">{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 4 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">04</div>
            <h2 className="text-2xl font-bold text-navy-800">How to Net $10,000–$20,000 More on Your Sale</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">The gap between average sellers and elite sellers isn't luck — it's strategy. Here's what moves the needle:</p>
          <div className="space-y-3">
            {[
              { cost: '$200–$500', roi: '$3,000–$8,000', action: 'Deep cleaning + declutter + neutral paint touch-ups' },
              { cost: '$500–$1,500', roi: '$5,000–$15,000', action: 'Professional staging (even just the living room + master)' },
              { cost: '$300–$800', roi: '$5,000–$12,000', action: 'Professional photography + drone video + 3D virtual tour' },
              { cost: '$0', roi: '$5,000–$20,000', action: 'Smart negotiation strategy (escalation clauses, inspection buffers, closing cost credits)' },
              { cost: '$0', roi: '$8,000–$25,000', action: 'Multi-platform marketing: MLS + Zillow + FB/IG + SMS buyer alerts + email blasts' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-3 gap-3 items-center p-3 border border-gray-100 rounded-lg text-sm">
                <span className="text-gray-500">{item.action}</span>
                <span className="text-center font-semibold text-navy-700">{item.cost} cost</span>
                <span className="text-right font-bold text-green-700">{item.roi} added value</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 5 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">05</div>
            <h2 className="text-2xl font-bold text-navy-800">Navigating Florida's Insurance Crisis as a Seller</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">Florida's property insurance market is one of the most challenging in the country. Here's how smart sellers navigate it:</p>
          <ul className="space-y-3">
            {[
              'Get a 4-Point Inspection done before listing — know what buyers will find before they find it.',
              'If your roof is older than 15 years, get quotes on replacement cost and offer a credit or repair prior to listing.',
              'Gather your current insurance policy details — buyers will ask. Proactive transparency builds trust.',
              'Price to account for insurance costs — a $300/month policy affects buyer qualification. Factor this into your strategy.',
              'Consider Citizens Insurance availability for your area — some buyers require this as a condition.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600 text-sm">
                <span className="text-gold-500 font-bold mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 6 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">06</div>
            <h2 className="text-2xl font-bold text-navy-800">The 30-Day Selling Timeline</h2>
          </div>
          <div className="space-y-3">
            {[
              { day: 'Days 1–3', action: 'Free CMA with Annia. Set your price. Sign listing agreement.' },
              { day: 'Days 4–7', action: 'Prep & stage. Professional photos. Drone video. 3D tour.' },
              { day: 'Day 8', action: 'GO LIVE — MLS, Zillow, Realtor.com, FB/IG, SMS buyer blast, email campaign.' },
              { day: 'Days 9–14', action: 'Showings begin. Open house. Offer review.' },
              { day: 'Days 15–20', action: 'Accept best offer. Execute contract. Inspection period.' },
              { day: 'Days 21–30', action: 'Appraisal. Loan approval. Final walkthrough. CLOSING DAY.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded shrink-0 min-w-[90px] text-center">{item.day}</div>
                <p className="text-gray-600 text-sm pt-1">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 7 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">07</div>
            <h2 className="text-2xl font-bold text-navy-800">Why a Broker vs. Discount Agent Costs You Thousands</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">Discount brokers and flat-fee MLS services save you 1% in commission but cost you 5–10% in final sale price. Here's why:</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 text-sm mb-2">Discount Agent</h4>
              <ul className="space-y-2 text-xs text-red-700">
                <li>• No professional photography</li>
                <li>• MLS only — no multi-channel marketing</li>
                <li>• Limited negotiation experience</li>
                <li>• No SMS/email buyer campaigns</li>
                <li>• You do the showings</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 text-sm mb-2">Annia Santana, Broker</h4>
              <ul className="space-y-2 text-xs text-green-700">
                <li>• Pro photography + drone + 3D tour</li>
                <li>• 8-channel marketing campaign</li>
                <li>• 20+ years negotiation expertise</li>
                <li>• SMS + email blast to buyer list</li>
                <li>• Full service — you show up to close</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-gold-50 border-l-4 border-gold-500 p-4 rounded-r-lg">
            <p className="text-navy-800 text-sm font-semibold">Average result: Annia's listings sell for 96% of asking price vs. 89–91% for discount/FSBO sellers. On a $350K home, that's $17,500 more in your pocket.</p>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 8 — CTA */}
        <div className="mb-10 bg-navy-900 rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #09163a, #1e3a7a)' }}>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">08</div>
            <h2 className="text-2xl font-bold text-white">Your Free Home Valuation + Next Steps</h2>
          </div>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto text-sm">
            You've read the guide. Now it's time to act. Schedule your free, no-obligation home valuation with Annia — a real broker analysis backed by Stellar MLS and 20+ years of Central Florida expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4074921114" className="bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-4 rounded-lg transition text-sm">
              📞 Call (407) 492-1114
            </a>
            <a href="mailto:Annia.Realty@Gmail.com" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-bold px-8 py-4 rounded-lg transition text-sm">
              ✉ Annia.Realty@Gmail.com
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-6">
            Annia Santana | Licensed Florida Broker | AS Realty & Investments | asrealtyfl.com
          </p>
        </div>

        {/* Print prompt */}
        <div className="no-print text-center py-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-3">Want to save this guide?</p>
          <PrintButton className="bg-navy-800 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-navy-700 transition" label="Save as PDF" />
          <Link href="/sellers/free-guide" className="ml-4 text-gold-600 text-sm hover:underline">Share This Guide →</Link>
        </div>
      </div>
    </div>
  )
}
