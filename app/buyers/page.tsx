import Link from 'next/link'
import { FiCheckCircle, FiSearch, FiHome, FiDollarSign } from 'react-icons/fi'
import LeadForm from '@/components/LeadForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const steps = [
  { step: '01', title: 'Get Pre-Approved',    desc: 'Annia connects you with trusted local lenders to get your financing in order — fast.' },
  { step: '02', title: 'Define Your Search',  desc: 'Tell us your must-haves, price range ($280K+), and preferred Orlando neighborhoods.' },
  { step: '03', title: 'Tour Homes',          desc: 'We schedule showings around your availability and give you honest, expert guidance.' },
  { step: '04', title: 'Make an Offer',       desc: 'Annia negotiates on your behalf to get the best price and terms possible.' },
  { step: '05', title: 'Close & Move In',     desc: 'We manage the entire closing process so you can focus on moving into your new home.' },
]

const reasons = [
  '20+ years of local Orlando market expertise',
  'Access to new listings before they hit Zillow',
  'Expert negotiation — thousands saved at closing',
  'Full support from contract to closing',
  'Buyer representation at no cost to you',
  'Fluent in English and Spanish',
]

export default function BuyersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-navy-900 py-24 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9,22,58,0.92) 50%, rgba(9,22,58,0.5)), url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Buying a Home in Orlando</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 max-w-2xl leading-tight">
            Find Your Dream Home <br />
            <span className="text-gold-400">in Central Florida</span>
          </h1>
          <p className="text-gray-300 mt-5 max-w-xl leading-relaxed">
            Homes from $280K+ across Orlando's best neighborhoods. Annia Santana has guided hundreds
            of buyers to the perfect home with zero stress and maximum value.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://mls-client.com/E71168B2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FiSearch /> Search Live MLS Listings
            </a>
            <Link href="#buyer-form" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
              Talk to Annia
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
          <div>
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">Why Choose AS Realty</span>
            <h2 className="text-3xl font-bold text-navy-800 mt-2">Your Buyer's Advocate in Every Step</h2>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Buying a home is one of the biggest decisions of your life. Annia makes sure you have a
              knowledgeable advocate on your side — from your very first showing to the day you pick up your keys.
            </p>
            <ul className="mt-6 space-y-3">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <FiCheckCircle className="text-gold-500 text-lg shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
          <div className="bg-navy-800 rounded-2xl p-8 text-white">
            <FiHome className="text-gold-400 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Orlando Market Snapshot</h3>
            <p className="text-gray-400 text-sm mb-6">Current data — February 2026</p>
            <div className="space-y-4">
              {[
                { label: 'Median Home Price',   value: '$399,990' },
                { label: 'Price Range We Work', value: '$280K+' },
                { label: 'Avg. Mortgage Rate',  value: '~6.2%' },
                { label: 'Avg. Days on Market', value: '54 days' },
                { label: 'Inventory YoY Change',value: '+146%' },
                { label: 'Market Status',        value: 'Balanced (Buyer Friendly)' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-sm border-b border-navy-700 pb-3">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-gold-400 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Buying Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="section-heading">The Buying Process — Made Simple</h2>
              <p className="section-sub mx-auto">Annia walks you through every stage with clarity and confidence.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-navy-800 text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* MLS App CTA */}
      <section className="bg-gold-500 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Search Live MLS Listings — Right From Your Phone</h2>
          <p className="text-white/80 mt-2 text-sm">Download Annia's mobile app for instant access to real listings in Orlando, $280K+</p>
          <a
            href="https://mls-client.com/E71168B2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-gold-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FiSearch className="inline mr-2" /> Open the App
          </a>
        </div>
      </section>

      {/* Lead Form */}
      <section id="buyer-form" className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="section-heading">Ready to Find Your Home?</h2>
              <p className="section-sub mx-auto">Tell us what you're looking for and Annia will reach out right away.</p>
            </div>
            <LeadForm
              title="Connect With Annia"
              subtitle="No pressure, no obligation — just expert guidance."
            />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
