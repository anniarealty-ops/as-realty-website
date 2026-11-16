import Link from 'next/link'
import PrintButton from '@/components/PrintButton'

export const metadata = {
  title: '2026 Florida Home Buyer\'s Guide | AS Realty',
  description: 'The complete guide to buying a home in Florida in 2026 — English & Spanish.',
}

export default function BuyerGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* Print bar */}
      <div className="no-print bg-navy-800 text-white py-3 px-6 flex justify-between items-center text-sm sticky top-0 z-10">
        <span className="text-gold-400 font-semibold">2026 Florida Buyer's Guide — AS Realty & Investments</span>
        <div className="flex gap-4">
          <PrintButton className="bg-gold-500 text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-gold-400 transition" label="⬇ Save as PDF" />
          <Link href="/buyers/free-guide" className="text-gray-300 hover:text-white text-xs">← Back</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">

        {/* Cover */}
        <div className="rounded-2xl p-12 text-center mb-12" style={{ background: 'linear-gradient(135deg, #09163a, #1e3a7a)' }}>
          <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">AS Realty & Investments</p>
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            2026 Florida<br />
            <span className="text-gold-400">Home Buyer's Guide</span>
          </h1>
          <p className="text-gray-300 text-base max-w-md mx-auto">
            Everything you need to buy your dream home in Florida — even with today's rates. English & Español.
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
            <h2 className="text-2xl font-bold text-navy-800">Can You Buy With 7% Rates? Yes — Here's How</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">The #1 mistake buyers make is waiting for rates to drop before buying. Here's the math: rates drop from 7% to 6%, and every buyer who was waiting floods the market simultaneously. Prices spike 8–12%. You end up paying more.</p>
          <p className="text-gray-600 leading-relaxed mb-3">The smarter strategy: buy now at 7%, then refinance when rates drop to 5.5–6% (projected 2026–2027). You build equity now and lower your payment later.</p>
          <div className="grid grid-cols-3 gap-3 my-4">
            {[
              { label: 'Buy at 7% now', payment: '$1,663/mo', note: 'on $250K loan' },
              { label: 'Refi at 6% in 2027', payment: '$1,499/mo', note: '$164/mo savings' },
              { label: 'Wait for 6%, prices up 10%', payment: '$1,648/mo', note: 'on $275K loan + missed equity' },
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-lg text-center text-sm border ${i === 2 ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
                <p className="font-bold text-navy-800 mb-1">{item.label}</p>
                <p className={`text-lg font-extrabold ${i === 2 ? 'text-red-700' : 'text-green-700'}`}>{item.payment}</p>
                <p className="text-gray-500 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-gold-50 border-l-4 border-gold-500 p-4 rounded-r-lg">
            <p className="text-navy-800 font-semibold text-sm">Bottom line: "Date the rate, marry the house." The home you want at a price you can afford matters more than the rate — which you can always refinance.</p>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 2 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">02</div>
            <h2 className="text-2xl font-bold text-navy-800">Florida Down Payment Assistance Programs</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">Florida has some of the most generous homebuyer assistance programs in the country. Many buyers qualify but never know these programs exist.</p>
          <div className="space-y-4">
            {[
              { name: 'Florida Hometown Heroes', benefit: 'Up to $35,000 in down payment assistance', who: 'Teachers, nurses, police, firefighters, and many other professions', type: '0% deferred second mortgage' },
              { name: 'FL HFA Preferred + PLUS 3%', benefit: '3% of loan amount as grant (no repayment)', who: 'First-time buyers, income limits apply', type: 'Grant — never repaid' },
              { name: 'FL BOND Program', benefit: 'Below-market interest rates + down payment help', who: 'First-time buyers in targeted counties', type: 'Rate reduction + assistance' },
              { name: 'Orange County SHIP', benefit: 'Up to $50,000 for down payment', who: 'Very low to moderate income buyers in Orange County', type: 'Deferred loan, forgiven over time' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-navy-800 text-sm">{item.name}</h4>
                  <span className="text-xs bg-gold-100 text-gold-700 font-semibold px-2 py-0.5 rounded">{item.type}</span>
                </div>
                <p className="text-green-700 font-bold text-sm mb-1">{item.benefit}</p>
                <p className="text-gray-500 text-xs">{item.who}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-navy-50 border border-navy-200 p-4 rounded-lg">
            <p className="text-navy-800 text-sm"><strong>Action:</strong> Ask Annia which programs you qualify for — she'll match you with the right assistance before you even start searching. (407) 492-1114</p>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 3 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">03</div>
            <h2 className="text-2xl font-bold text-navy-800">Hidden Costs Nobody Tells You</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">Your mortgage payment is just one piece of the puzzle. Here's the full picture:</p>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Cost</th>
                  <th className="text-right px-4 py-3 font-semibold">Typical Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cost: 'Property taxes (Central FL)', range: '$2,000–$6,000/year' },
                  { cost: 'Homeowner\'s Insurance', range: '$2,500–$6,000/year' },
                  { cost: 'Flood Insurance (if required)', range: '$800–$3,000/year' },
                  { cost: 'HOA Fees', range: '$0–$800/month' },
                  { cost: 'CDD Fees (Community Dev. District)', range: '$1,000–$3,500/year' },
                  { cost: 'Closing Costs (buyer)', range: '2–3% of purchase price' },
                  { cost: 'Home Inspection', range: '$400–$700' },
                  { cost: 'Maintenance (rule of thumb)', range: '1% of home value/year' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-700">{row.cost}</td>
                    <td className="px-4 py-3 text-right font-semibold text-navy-700">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">Budget for 30–40% on top of your mortgage payment for all carrying costs. Annia will help you build a complete budget before you make an offer.</p>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 4 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">04</div>
            <h2 className="text-2xl font-bold text-navy-800">How to Find Homes BEFORE They Hit Zillow</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-3">By the time a home appears on Zillow, it's had 50+ views and multiple offers are coming. The 0.01% of buyers find homes before that happens:</p>
          <div className="space-y-3">
            {[
              { strategy: 'MLS Coming Soon Listings', desc: 'Brokers can see "Coming Soon" status days before public listing. Annia gives you first access.' },
              { strategy: 'Off-Market / Pocket Listings', desc: 'Sellers who haven\'t listed yet but are ready to sell. Annia\'s network surfaces these deals first.' },
              { strategy: 'Expired + Withdrawn Listings', desc: 'Homes that were listed but didn\'t sell — often renegotiable at a discount.' },
              { strategy: 'New Construction Incentives', desc: 'Builders in Central FL are offering rate buydowns, closing cost credits, and free upgrades right now.' },
              { strategy: 'SMS + Email Alerts (Instant)', desc: 'Annia\'s buyer alert system texts you the moment a matching home hits the MLS — before most agents even know.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="text-gold-500 font-bold text-sm shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-bold text-navy-800 text-sm">{item.strategy}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 5 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">05</div>
            <h2 className="text-2xl font-bold text-navy-800">The Offer Strategy That Wins in Multiple Offers</h2>
          </div>
          <div className="space-y-3">
            {[
              { tactic: 'Pre-Approval Letter (not Pre-Qualification)', desc: 'A full pre-approval shows you\'re serious and financeable. Pre-qual is meaningless to sellers.' },
              { tactic: 'Escalation Clause', desc: '"I offer $280K, but will beat any bona fide offer by $2,000 up to $295K." Shows strength without overpaying blindly.' },
              { tactic: 'Flexible Closing Date', desc: 'Sellers often have timeline needs. Offering to match their preferred close date wins more deals than extra money.' },
              { tactic: 'Inspection for Information (Not Renegotiation)', desc: 'In competitive markets, waiving renegotiation rights (not inspection) shows confidence and wins.' },
              { tactic: 'Personal Letter (sometimes)', desc: 'In the right situation, a genuine personal letter can tip a seller toward your offer at equal price.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-gold-500 text-white font-bold flex items-center justify-center text-xs shrink-0">{i + 1}</div>
                <div>
                  <p className="font-bold text-navy-800 text-sm">{item.tactic}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 6 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">06</div>
            <h2 className="text-2xl font-bold text-navy-800">New Construction vs. Resale in Central FL 2026</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-bold text-blue-900 mb-3 text-sm">New Construction</h4>
              <ul className="space-y-2 text-xs text-blue-800">
                <li>✓ Builder rate buydowns (5.5–6% with incentives)</li>
                <li>✓ Warranty coverage (1/2/10 year)</li>
                <li>✓ Energy efficient — lower utility bills</li>
                <li>✓ No bidding wars (set price)</li>
                <li>✗ 6–12 month wait time</li>
                <li>✗ CDD fees common in new communities</li>
                <li>✗ Less negotiating room on base price</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h4 className="font-bold text-green-900 mb-3 text-sm">Resale Homes</h4>
              <ul className="space-y-2 text-xs text-green-800">
                <li>✓ Move in immediately</li>
                <li>✓ Established neighborhoods / mature trees</li>
                <li>✓ More negotiating room</li>
                <li>✓ Know exactly what you're getting</li>
                <li>✗ Older systems (roof, HVAC, plumbing)</li>
                <li>✗ Higher insurance if roof is older</li>
                <li>✗ May need updates/renovations</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 7 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">07</div>
            <h2 className="text-2xl font-bold text-navy-800">30-Day Buying Timeline</h2>
          </div>
          <div className="space-y-3">
            {[
              { day: 'Days 1–3', action: 'Call Annia. Discuss goals, budget, areas. Get pre-approved with a lender.' },
              { day: 'Days 4–7', action: 'Set up MLS alerts. Annia sends off-market + coming soon properties.' },
              { day: 'Days 8–14', action: 'Tour 5–10 homes. Identify top choices.' },
              { day: 'Day 15', action: 'Submit winning offer on the right home.' },
              { day: 'Days 16–20', action: 'Offer accepted. Inspection ordered. Negotiate repairs if needed.' },
              { day: 'Days 21–25', action: 'Appraisal. Loan processing. Title search.' },
              { day: 'Days 26–30', action: 'Clear to close. Final walkthrough. CLOSING DAY — you get the keys!' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded shrink-0 min-w-[90px] text-center">{item.day}</div>
                <p className="text-gray-600 text-sm pt-1">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Chapter 8 — Spanish */}
        <div className="mb-10 bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-500 text-white font-extrabold flex items-center justify-center text-sm">08</div>
            <h2 className="text-2xl font-bold text-navy-800">Guía en Español / Spanish Summary</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">Para nuestros clientes de habla hispana — un resumen de los pasos más importantes:</p>
          <div className="space-y-3">
            {[
              { es: '¿Puedes comprar con tasas del 7%?', en: 'Sí. "Date la tasa, cásate con la casa." Compra ahora y refinancia cuando bajen las tasas.' },
              { es: 'Programas de ayuda para el pago inicial', en: 'Florida ofrece hasta $35,000 en asistencia para compradores calificados. Pregúntale a Annia.' },
              { es: 'Costos ocultos que debes saber', en: 'Impuestos, seguro, HOA, y mantenimiento pueden sumar 30-40% más que tu hipoteca mensual.' },
              { es: 'Cómo encontrar casas antes que todos', en: 'Annia te da acceso a listados "Coming Soon" y propiedades fuera del mercado antes de Zillow.' },
              { es: 'La estrategia ganadora de oferta', en: 'Pre-aprobación completa + clausula de escalación + fecha de cierre flexible = oferta ganadora.' },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-gold-500 pl-4">
                <p className="font-bold text-navy-800 text-sm">{item.es}</p>
                <p className="text-gray-600 text-xs mt-1">{item.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center mb-6" style={{ background: 'linear-gradient(135deg, #09163a, #1e3a7a)' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Find Your Home?</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm">
            Contact Annia today. She'll match you with the right homes — including off-market deals — and get you into the right assistance programs before you spend a single dollar more than you need to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4074921114" className="bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-4 rounded-lg transition text-sm">
              📞 Call (407) 492-1114
            </a>
            <a href="https://mls-client.com/E71168B2" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-bold px-8 py-4 rounded-lg transition text-sm">
              🏠 Browse Listings Now
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-6">Annia Santana | Licensed Florida Broker | English & Spanish | asrealtyfl.com</p>
        </div>

        <div className="no-print text-center py-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-3">Save this guide for later</p>
          <PrintButton className="bg-navy-800 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-navy-700 transition" label="Save as PDF" />
          <Link href="/buyers/free-guide" className="ml-4 text-gold-600 text-sm hover:underline">Share This Guide →</Link>
        </div>
      </div>
    </div>
  )
}
