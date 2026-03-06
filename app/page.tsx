import Link from 'next/link'
import { FiPhone, FiDownload, FiArrowRight } from 'react-icons/fi'
import LeadForm from '@/components/LeadForm'

/* ─── Data ────────────────────────────────────────────────── */

const stats = [
  { value: '20+',    label: 'Years of Experience' },
  { value: '5★',     label: '100% Satisfaction' },
  { value: '$280K+', label: 'Home Prices We Work' },
  { value: '7',      label: 'Counties Served' },
]

const counties = [
  { name: 'Orange County',   cities: 'Orlando · Dr. Phillips · Winter Park · Windermere · Lake Nona' },
  { name: 'Seminole County', cities: 'Sanford · Altamonte Springs · Lake Mary · Longwood' },
  { name: 'Osceola County',  cities: 'Kissimmee · St. Cloud · Celebration · Harmony' },
  { name: 'Lake County',     cities: 'Clermont · Leesburg · Mount Dora · Groveland' },
  { name: 'Polk County',     cities: 'Lakeland · Winter Haven · Davenport · Haines City' },
  { name: 'Volusia County',  cities: 'Daytona Beach · DeLand · Deltona · Ormond Beach' },
  { name: 'Brevard County',  cities: 'Melbourne · Cocoa · Titusville · Space Coast' },
]

const services = [
  {
    tag:   'Buyers',
    title: 'Find Your Perfect Home',
    body:  'Homes $280K+ across Central Florida. Annia guides you from your first showing to the moment you get your keys — with expert negotiation at every step.',
    href:  '/buyers',
    cta:   'Start Your Search',
  },
  {
    tag:   'Sellers',
    title: 'Sell for Maximum Value',
    body:  'A proven marketing system — professional photography, multi-platform exposure, and sharp negotiation — designed to sell your home fast and for top dollar.',
    href:  '/sellers',
    cta:   'Get a Free Valuation',
  },
  {
    tag:   'Investors',
    title: 'Build Wealth Through Real Estate',
    body:  'Central Florida is one of the fastest-growing real estate markets in the US. Annia helps investors find, acquire, and profit from the right properties.',
    href:  '/contact',
    cta:   'Explore Investments',
  },
]

const testimonials = [
  {
    quote: 'Annia negotiated $15,000 below asking price on our Lake Nona home. Her knowledge of this market is absolutely unmatched.',
    name:  'Maria & Jose G.',
    area:  'Lake Nona, Orange County',
  },
  {
    quote: 'We relocated from New York with no knowledge of Central Florida. Annia was our guide, negotiator, and advocate. We closed on our dream home in 6 weeks.',
    name:  'David & Sandra T.',
    area:  'Clermont, Lake County',
  },
  {
    quote: 'As a first-time buyer, I was intimidated by everything. Annia made it completely stress-free. Her honesty and patience made all the difference.',
    name:  'Carlos M.',
    area:  'Kissimmee, Osceola County',
  },
]

/* ─── Page ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══ HERO — Florida pool home, warm light overlay ══ */}
      <section
        className="relative min-h-screen flex items-end"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(26,46,34,0.10) 0%, rgba(26,46,34,0.50) 55%, rgba(26,46,34,0.90) 100%),
            url('/hero-home.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="container w-full pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-16 items-end">

            {/* Left — headline */}
            <div>
              <span className="eyebrow">Central Florida · 20+ Years · 7 Counties</span>
              <h1 className="h-hero text-white mt-2">
                Your<br />
                <em className="not-italic text-[#8DBDAD]">Central</em><br />
                Florida<br />
                Real Estate<br />
                Expert.
              </h1>
              <p className="mt-8 text-white/75 text-base leading-relaxed max-w-md font-light">
                From Orlando to the Space Coast — Annia Santana has spent over 20 years helping Central Florida families buy, sell, and invest with confidence.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/buyers" className="btn-gold">
                  Find Homes $280K+
                </Link>
                <Link href="/sellers" className="btn-dark">
                  What&apos;s My Home Worth?
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-10">
                <a href="tel:4074921114" className="flex items-center gap-2 text-white/60 hover:text-[#8DBDAD] transition-colors text-sm">
                  <FiPhone className="text-[#8DBDAD]" /> (407) 492-1114
                </a>
                <a
                  href="https://mls-client.com/E71168B2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8DBDAD] hover:text-white text-sm transition-colors"
                >
                  <FiDownload /> Download Mobile App
                </a>
              </div>
            </div>

            {/* Right — lead form */}
            <div className="hidden md:block">
              <LeadForm
                title="Connect With Annia"
                subtitle="Tell us your goals — we'll reach out within 24 hours."
                dark
              />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[9px] tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <span className="w-px h-10 bg-white/15 block" />
        </div>
      </section>

      {/* Mobile form */}
      <section className="md:hidden bg-[#1A2E22] px-6 pb-16">
        <LeadForm title="Connect With Annia" subtitle="Tell us your goals — we'll reach out within 24 hours." dark />
      </section>

      {/* ══ STATS BAR — pale mint, sage accents ══ */}
      <section className="bg-[#E8F3EE]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#6B9E8A]/20">
            {stats.map((s, i) => (
              <div key={i} className="py-10 px-8 text-center">
                <p className="font-display text-4xl md:text-5xl font-light tracking-widest text-[#1A2E22]">{s.value}</p>
                <p className="text-[#6B9E8A] text-[10px] uppercase tracking-[0.2em] mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="section-pad bg-[#F5FAF7]">
        <div className="container">
          <div className="mb-16">
            <span className="gold-rule" />
            <span className="eyebrow">Full-Service Brokerage</span>
            <h2 className="h-section text-[#1A2E22] max-w-xl mt-2">
              How Can We Help You?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="bg-white border border-[#E8F3EE] p-10 card-lift flex flex-col">
                <span className="eyebrow">{svc.tag}</span>
                <h3 className="h-card text-[#1A2E22] mt-2 mb-4">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.body}</p>
                <Link href={svc.href} className="mt-8 btn-navy self-start flex items-center gap-3 text-xs">
                  {svc.cta} <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT — Light mint, airy & feminine ══ */}
      <section className="section-pad bg-[#E8F3EE]">
        <div className="container grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] w-full flex items-center justify-center overflow-hidden bg-[#D4EAE0]">
              <img
                src="/annia-santana.jpg"
                alt="Annia Santana – Broker Owner, AS Realty & Investments"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Sage corner frame accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[#6B9E8A]" />
          </div>

          {/* Bio */}
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Experience You Can Trust</span>
            <h2 className="h-section text-[#1A2E22] mt-2 leading-none">
              Annia<br />
              <em className="not-italic text-[#6B9E8A]">Santana.</em>
            </h2>
            <p className="text-[#6B9E8A] text-xs tracking-widest uppercase mt-4">Broker Owner — AS Realty &amp; Investments</p>

            <p className="text-gray-600 mt-6 leading-relaxed text-sm font-light">
              For over 20 years, Annia Santana has been the name Central Florida families trust when it matters most. As Broker Owner of AS Realty &amp; Investments, she brings deep market expertise, sharp negotiation, and a personal commitment to every client she serves.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm font-light">
              From Orange County to the Space Coast — whether you&apos;re buying your first home, selling a family property, or building a real estate portfolio — Annia delivers results.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                '20+ years licensed in Florida',
                'Certified Florida Broker',
                '5-Star rated, 100% satisfaction',
                'Fluent: English & Spanish',
                'Serving 7 Central FL counties',
                '$280K+ property specialist',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-500 text-xs">
                  <span className="text-[#6B9E8A] mt-0.5">—</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/about" className="btn-gold">Meet Annia</Link>
              <a href="tel:4074921114" className="btn-navy">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AREAS SERVED ══ */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="gold-rule mx-auto" />
            <span className="eyebrow">Service Area</span>
            <h2 className="h-section text-[#1A2E22] mt-2">
              All of Central Florida
            </h2>
            <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
              Seven counties. Dozens of communities. One broker who knows them all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counties.map((c, i) => (
              <div key={i} className="border border-[#E8F3EE] p-6 card-lift bg-[#F5FAF7]">
                <div className="w-8 h-[2px] bg-[#6B9E8A] mb-4" />
                <p className="font-display font-normal text-[#1A2E22] text-lg mb-2 tracking-wide">{c.name}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{c.cities}</p>
              </div>
            ))}
            {/* App CTA tile */}
            <div className="bg-[#1A2E22] p-6 flex flex-col justify-between card-lift">
              <div className="w-8 h-[2px] bg-[#6B9E8A] mb-4" />
              <p className="font-display font-normal text-white text-lg mb-2 tracking-wide">Search Anytime</p>
              <p className="text-white/50 text-xs mb-6">Live MLS listings — all counties — free on your phone.</p>
              <a
                href="https://mls-client.com/E71168B2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold self-start flex items-center gap-2 text-xs"
              >
                <FiDownload /> Free App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-pad bg-[#F5FAF7]">
        <div className="container">
          <div className="mb-16">
            <span className="gold-rule" />
            <span className="eyebrow">Client Stories</span>
            <h2 className="h-section text-[#1A2E22] mt-2 max-w-lg">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-[#E8F3EE] p-10 card-lift">
                <div className="text-[#6B9E8A] font-display font-light text-5xl leading-none mb-6">&ldquo;</div>
                <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
                <div className="mt-8 pt-6 border-t border-[#E8F3EE]">
                  <p className="font-semibold text-[#1A2E22] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{t.area}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://g.page/r/CbPcwKBHUGmvEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3"
            >
              ★ Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ══ APP CTA ══ */}
      <section className="section-pad-sm bg-[#1A2E22] text-center">
        <div className="container">
          <span className="eyebrow">Search On the Go</span>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wider uppercase text-white mt-2">
            Browse Real MLS Listings<br />From Your Phone.{' '}
            <em className="not-italic text-[#8DBDAD]">Free.</em>
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            All Central Florida listings, updated daily. New listings, price drops, and open houses right in your pocket.
          </p>
          <a
            href="https://mls-client.com/E71168B2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-10 inline-flex items-center gap-3"
          >
            <FiDownload /> Download My Free App
          </a>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="section-pad bg-white">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Ready to Get Started?</span>
            <h2 className="h-section text-[#1A2E22] mt-2">
              Let&apos;s Talk<br />Real Estate.
            </h2>
            <p className="text-gray-400 mt-6 text-sm leading-relaxed max-w-sm">
              When you reach out to AS Realty &amp; Investments, Annia personally responds. No bots. No pressure. Real expertise, real results.
            </p>
            <a href="tel:4074921114" className="btn-navy mt-8 inline-flex items-center gap-3">
              <FiPhone /> (407) 492-1114
            </a>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
