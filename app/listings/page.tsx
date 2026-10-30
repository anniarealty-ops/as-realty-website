import Link from 'next/link'
import { FiDownload, FiPhone, FiSearch, FiMapPin, FiHome, FiTrendingUp } from 'react-icons/fi'
import LeadForm from '@/components/LeadForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const counties = [
  { name: 'Orange County',   cities: 'Orlando · Dr. Phillips · Winter Park · Windermere · Lake Nona' },
  { name: 'Seminole County', cities: 'Sanford · Altamonte Springs · Lake Mary · Longwood' },
  { name: 'Osceola County',  cities: 'Kissimmee · St. Cloud · Celebration · Harmony' },
  { name: 'Lake County',     cities: 'Clermont · Leesburg · Mount Dora · Groveland' },
  { name: 'Polk County',     cities: 'Lakeland · Winter Haven · Davenport · Haines City' },
  { name: 'Volusia County',  cities: 'Daytona Beach · DeLand · Deltona · Ormond Beach' },
  { name: 'Brevard County',  cities: 'Melbourne · Cocoa · Titusville · Space Coast' },
]

const features = [
  {
    icon: FiSearch,
    title: 'Live MLS Listings',
    body: 'Browse real, up-to-date listings directly from Stellar MLS — the same data your agent uses.',
  },
  {
    icon: FiMapPin,
    title: '7 Counties Covered',
    body: 'Search across all of Central Florida from a single app — Orange, Seminole, Osceola, Lake, Polk, Volusia & Brevard.',
  },
  {
    icon: FiHome,
    title: 'Homes $280K+',
    body: 'Filter by price, bedrooms, bathrooms, neighborhood, and more. Find the home that fits your life.',
  },
  {
    icon: FiTrendingUp,
    title: 'New Listings & Price Drops',
    body: 'Get instant alerts for new listings, open houses, and price reductions in your target neighborhoods.',
  },
]

export default function ListingsPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[60vh] flex items-center bg-[#0a0e1a]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(10,14,26,0.4) 0%, rgba(10,14,26,0.85) 100%),
            url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=85')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-24">
          <span className="eyebrow">Stellar MLS · Live Listings · Central Florida</span>
          <h1 className="h-hero text-white mt-2 max-w-3xl">
            Search<br />
            <em className="not-italic text-[#c9a84c]">Real</em><br />
            MLS Listings.
          </h1>
          <p className="text-gray-300 mt-6 max-w-lg text-base leading-relaxed font-light">
            Browse live Stellar MLS listings across all 7 Central Florida counties — updated daily, straight from the source.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://mls-client.com/E71168B2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-base px-8 py-4"
            >
              <FiSearch /> Search Listings Now
            </a>
            <a
              href="https://mls-client.com/E71168B2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark inline-flex items-center gap-3"
            >
              <FiDownload /> Download Free App
            </a>
          </div>
        </div>
      </section>

      {/* ══ APP PROMO BANNER ════════════════════════════════════════ */}
      <section className="bg-[#c9a84c] py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="font-display font-bold text-white text-xl">Get the Free Stellar MLS App</p>
            <p className="text-white/75 text-sm mt-1">All Central Florida listings · No subscription · Direct from Annia Santana</p>
          </div>
          <a
            href="https://mls-client.com/E71168B2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#c9a84c] font-bold px-8 py-3 text-sm tracking-wide hover:bg-gray-50 transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <FiDownload /> mls-client.com/E71168B2
          </a>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═══════════════════════════════════════════ */}
      <section className="section-pad bg-[#fafaf8]">
        <div className="container">
          <div className="mb-16">
            <span className="gold-rule" />
            <span className="eyebrow">Powered by Stellar MLS</span>
            <h2 className="h-section text-[#0a0e1a] mt-2 max-w-xl">
              The Same Data Your Agent Uses
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
              Stellar MLS is Florida's largest MLS, covering Central Florida. When you search through Annia's portal, you're seeing real, live listings — not outdated third-party data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 p-8 card-lift h-full">
                  <f.icon className="text-[#c9a84c] text-2xl mb-4" />
                  <h3 className="font-display font-bold text-[#0a0e1a] text-lg mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STEP-BY-STEP ════════════════════════════════════════════ */}
      <section className="section-pad bg-[#0a0e1a]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="gold-rule mx-auto" />
            <span className="eyebrow">How to Get Started</span>
            <h2 className="h-section text-white mt-2">3 Easy Steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Visit Your Search Portal',
                body: 'Go to mls-client.com/E71168B2 on any device — phone, tablet, or desktop.',
              },
              {
                step: '02',
                title: 'Download the Free App',
                body: 'Available on iPhone and Android. No cost, no subscription — completely free.',
              },
              {
                step: '03',
                title: 'Search & Connect',
                body: 'Browse real listings, save favorites, and reach out to Annia when you find the one.',
              },
            ].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 0.12}>
                <div className="border border-white/10 p-10 card-lift">
                  <p className="font-display text-5xl font-black text-[#c9a84c]/30">{s.step}</p>
                  <h3 className="font-display font-bold text-white text-xl mt-4 mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://mls-client.com/E71168B2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-base px-10 py-4"
            >
              <FiSearch /> Open My MLS Search Portal
            </a>
          </div>
        </div>
      </section>

      {/* ══ COUNTIES ════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="gold-rule mx-auto" />
            <span className="eyebrow">Search by Area</span>
            <h2 className="h-section text-[#0a0e1a] mt-2">All of Central Florida</h2>
            <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
              Annia's MLS portal covers listings across 7 counties and dozens of communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counties.map((c, i) => (
              <AnimateOnScroll key={i} delay={(i % 4) * 0.08}>
                <a
                  href="https://mls-client.com/E71168B2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-100 p-6 card-lift group block h-full"
                >
                  <div className="w-8 h-[2px] bg-[#c9a84c] mb-4" />
                  <p className="font-display font-bold text-[#0a0e1a] text-lg mb-2 group-hover:text-[#c9a84c] transition-colors">{c.name}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.cities}</p>
                  <p className="text-[#c9a84c] text-xs mt-4 flex items-center gap-1">
                    Search listings <FiSearch className="text-[10px]" />
                  </p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA + FORM ══════════════════════════════════════════════ */}
      <section className="section-pad bg-[#fafaf8]">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Ready to Find Your Home?</span>
            <h2 className="h-section text-[#0a0e1a] mt-2">
              Let Annia<br />
              <em className="not-italic text-[#c9a84c]">Guide</em><br />
              Your Search.
            </h2>
            <p className="text-gray-400 mt-6 text-sm leading-relaxed max-w-sm">
              Found something you love? Reach out and Annia will personally help you evaluate the property, make an offer, and close with confidence.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:4074921114" className="btn-gold inline-flex items-center gap-2">
                <FiPhone /> (407) 492-1114
              </a>
              <Link href="/buyers" className="btn-dark">
                Buyer Resources
              </Link>
            </div>
          </div>
          <LeadForm title="Connect With Annia" subtitle="Tell us what you're looking for and we'll get back to you within 24 hours." />
        </div>
      </section>
    </>
  )
}
