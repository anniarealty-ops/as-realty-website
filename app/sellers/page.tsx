import Link from 'next/link'
import { FiCheckCircle, FiTrendingUp, FiDollarSign, FiCamera } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import LeadForm from '@/components/LeadForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const marketingItems = [
  { icon: <FiCamera />,      label: 'Professional Photography & Virtual Tours' },
  { icon: <FiTrendingUp />,  label: 'MLS + Zillow + Realtor.com Syndication' },
  { icon: <FiDollarSign />,  label: 'Facebook, Instagram, TikTok & Google Ads' },
  { icon: <MdVerified />,    label: 'Targeted Email Campaigns to Active Buyers' },
  { icon: <FiCheckCircle />, label: 'Open Houses & Broker Previews' },
  { icon: <FiTrendingUp />,  label: 'Yard Signage, Flyers & Local Exposure' },
]

const sellingSteps = [
  { step: '01', title: 'Free Home Valuation',    desc: 'Annia performs a detailed Comparative Market Analysis (CMA) to price your home right.' },
  { step: '02', title: 'Prep & Stage',            desc: 'We advise on improvements that maximize your sale price without breaking the budget.' },
  { step: '03', title: 'Launch the Listing',      desc: 'Your home goes live on MLS and all major platforms with professional photos and video.' },
  { step: '04', title: 'Receive Offers',          desc: 'Annia reviews every offer with you and negotiates the best terms on your behalf.' },
  { step: '05', title: 'Close & Cash Out',        desc: 'Smooth closing coordination from contract to keys — we handle the details so you don\'t have to.' },
]

export default function SellersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-navy-900 py-24 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9,22,58,0.92) 50%, rgba(9,22,58,0.5)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Selling Your Home in Central Florida</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 max-w-2xl leading-tight">
            You&apos;re Not Hiring<br />
            an Agent.<br />
            <span className="text-gold-400">You&apos;re Hiring a<br />Marketing Agent.</span>
          </h1>
          <p className="text-gray-300 mt-5 max-w-xl leading-relaxed">
            Every AS Realty listing gets a full 20-step marketing campaign — professional photography,
            multi-platform syndication, targeted ads, and bilingual buyer outreach — designed to sell
            your home fast and for maximum value.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="#seller-form" className="btn-primary text-base px-8 py-4">
              Get My Free Home Valuation
            </Link>
            <a href="tel:4074921114" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-base px-8 py-4">
              Call (407) 492-1114
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold-500 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '96%',   label: 'Sale-to-List Price Ratio' },
              { value: '54',    label: 'Avg Days to Close' },
              { value: '20+',   label: 'Years of Experience' },
              { value: '100%',  label: 'Client Satisfaction' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="text-xs uppercase tracking-widest mt-1 opacity-90">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Plan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
          <div>
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">The AS Realty 20-Step Marketing Plan</span>
            <h2 className="text-3xl font-bold text-navy-800 mt-2">Your Listing Gets Launched — Not Just Listed</h2>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Most agents put your home on the MLS and wait. Annia runs a full marketing campaign —
              reaching English and Spanish-speaking buyers across Central Florida and beyond.
              More buyers = more offers = higher sale price.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {marketingItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700">
                  <span className="text-gold-500 text-lg">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
          <div
            className="rounded-2xl overflow-hidden shadow-xl min-h-[420px]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Selling Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="section-heading">The Selling Process — Step by Step</h2>
              <p className="section-sub mx-auto">A smooth, proven path from listing to closing.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-5 gap-6">
            {sellingSteps.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-700 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
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

      {/* Valuation Form */}
      <section id="valuation" className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
          <div className="text-white">
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Free — No Obligation</span>
            <h2 className="text-3xl font-bold mt-2">What Is Your Home Worth?</h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-sm">
              Get a free, accurate home valuation from Annia — a licensed broker with 20+ years of
              experience pricing and selling Orlando homes. No automated estimates. Real market data.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Detailed Comparative Market Analysis (CMA)',
                'Current Orlando market conditions',
                'Estimated net proceeds after closing costs',
                'No pressure, no obligation',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <FiCheckCircle className="text-gold-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
          <div id="seller-form">
            <LeadForm
              title="Get My Free Home Valuation"
              subtitle="Annia will contact you with a full CMA within 24 hours."
              dark
            />
          </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
