import Link from 'next/link'
import { FiPhone, FiDownload, FiArrowRight } from 'react-icons/fi'
import LeadForm from '@/components/LeadForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

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
      {/* ══ HERO — video background, Florida pool home ══ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1800&q=90"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/28962904/12529403_1080_1920_60fps.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,46,34,0.10) 0%, rgba(26,46,34,0.50) 55%, rgba(26,46,34,0.90) 100%)',
          }}
        />
        <div className="container w-full pb-20 md:pb-28 relative">
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

              {/* Quick search — hands off to the live MLS portal */}
              <form
                action="https://mls-client.com/E71168B2"
                target="_blank"
                className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col sm:flex-row gap-3 max-w-lg"
              >
                <select
                  defaultValue=""
                  className="flex-1 bg-white/90 text-[#1A2E22] text-sm rounded px-3 py-3 focus:outline-none"
                >
                  <option value="" disabled>Choose a county</option>
                  {counties.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <select
                  defaultValue=""
                  className="flex-1 bg-white/90 text-[#1A2E22] text-sm rounded px-3 py-3 focus:outline-none"
                >
                  <option value="" disabled>Price range</option>
                  <option>$280K – $400K</option>
                  <option>$400K – $600K</option>
                  <option>$600K+</option>
                </select>
                <button type="submit" className="btn-gold px-6 whitespace-nowrap">
                  Search Homes
                </button>
              </form>
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

      {/* ══ CREDIBILITY STRIP ══ */}
      <section className="bg-[#1A2E22] py-4">
        <div className="container flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="text-[#c9a84c] text-sm">★★★★★</span>
          <a
            href="https://g.page/r/CbPcwKBHUGmvEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            9 Five-Star Google Reviews · 100% Client Satisfaction
          </a>
        </div>
      </section>

      {/* ══ STATS BAR — pale mint, sage accents ══ */}
      <section className="bg-[#E8F3EE]">
        <div className="container">
          <AnimateOnScroll direction="fade">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#6B9E8A]/20">
              {stats.map((s, i) => (
                <div key={i} className="py-10 px-8 text-center">
                  <p className="font-display text-4xl md:text-5xl font-light tracking-widest text-[#1A2E22]">{s.value}</p>
                  <p className="text-[#6B9E8A] text-[10px] uppercase tracking-[0.2em] mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="section-pad bg-[#F5FAF7]">
        <div className="container">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="gold-rule" />
              <span className="eyebrow">Full-Service Brokerage</span>
              <h2 className="h-section text-[#1A2E22] max-w-xl mt-2">
                How Can We Help You?
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#E8F3EE] p-10 card-lift flex flex-col h-full">
                  <span className="eyebrow">{svc.tag}</span>
                  <h3 className="h-card text-[#1A2E22] mt-2 mb-4">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.body}</p>
                  <Link href={svc.href} className="mt-8 btn-navy self-start flex items-center gap-3 text-xs">
                    {svc.cta} <FiArrowRight />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT — Light mint, airy & feminine ══ */}
      <section className="section-pad bg-[#E8F3EE]">
        <div className="container grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <AnimateOnScroll direction="left">
          <div className="relative flex justify-center">
            <div className="aspect-[3/4] w-3/4 md:w-2/3 flex items-center justify-center overflow-hidden bg-[#D4EAE0]">
              <img
                src="/annia-hero.jpg"
                alt="Annia Santana – Broker Owner, AS Realty & Investments"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Sage corner frame accent */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#6B9E8A]" />
          </div>
          </AnimateOnScroll>

          {/* Bio */}
          <AnimateOnScroll direction="right">
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
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══ AREAS SERVED ══ */}
      <section className="section-pad bg-white">
        <div className="container">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counties.map((c, i) => (
              <AnimateOnScroll key={i} delay={(i % 4) * 0.08}>
                <div className="border border-[#E8F3EE] p-6 card-lift bg-[#F5FAF7] h-full">
                  <div className="w-8 h-[2px] bg-[#6B9E8A] mb-4" />
                  <p className="font-display font-normal text-[#1A2E22] text-lg mb-2 tracking-wide">{c.name}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.cities}</p>
                </div>
              </AnimateOnScroll>
            ))}
            {/* App CTA tile */}
            <AnimateOnScroll delay={(counties.length % 4) * 0.08}>
              <div className="bg-[#1A2E22] p-6 flex flex-col justify-between card-lift h-full">
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-pad bg-[#F5FAF7]">
        <div className="container">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="gold-rule" />
              <span className="eyebrow">Client Stories</span>
              <h2 className="h-section text-[#1A2E22] mt-2 max-w-lg">What Our Clients Say</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#E8F3EE] p-10 card-lift h-full">
                  <div className="text-[#6B9E8A] font-display font-light text-5xl leading-none mb-6">&ldquo;</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
                  <div className="mt-8 pt-6 border-t border-[#E8F3EE]">
                    <p className="font-semibold text-[#1A2E22] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-1">{t.area}</p>
                  </div>
                </div>
              </AnimateOnScroll>
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

      {/* ══ RELOCATION BUYERS — Bilingual ══ */}
      <section className="section-pad bg-[#1A2E22]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-rule" />
              <span className="eyebrow text-[#8DBDAD]">Relocating to Central Florida · Mudándote a Florida</span>
              <h2 className="h-section text-white mt-2">
                Moving to Florida?<br />
                <em className="not-italic text-[#8DBDAD]">Annia Makes It Easy.</em>
              </h2>
              <p className="text-white/60 mt-6 text-sm leading-relaxed font-light">
                Thousands of families from Puerto Rico, Venezuela, New York, and across the US are choosing Central Florida every year — for the weather, the opportunity, and the value. Annia helps them land right.
              </p>
              <p className="text-white/60 mt-4 text-sm leading-relaxed font-light italic">
                Miles de familias de Puerto Rico, Venezuela, Nueva York y todo el país eligen el Centro de Florida cada año. Annia los ayuda a llegar bien — en español, sin complicaciones.
              </p>
              <div className="grid grid-cols-1 gap-3 mt-8">
                {[
                  { en: 'Virtual tours — buy from anywhere, before you arrive', es: 'Tours virtuales — compra desde donde estás' },
                  { en: 'Bilingual service in English & Spanish', es: 'Servicio bilingüe en inglés y español' },
                  { en: 'Deltona · Kissimmee · Orange City · Orlando', es: 'Las mejores áreas para tu familia' },
                  { en: 'Trusted lender network — even for non-US credit history', es: 'Red de prestamistas con experiencia en crédito internacional' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                    <p className="text-white/80 text-xs">{item.en}</p>
                    <p className="text-[#8DBDAD]/60 text-xs italic mt-0.5">{item.es}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/buyers" className="btn-gold">
                  Start Your Search
                </Link>
                <a href="tel:4074921114" className="btn-dark flex items-center gap-2">
                  <FiPhone /> (407) 492-1114
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className="rounded-xl overflow-hidden min-h-[280px] bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=900&q=80')` }}
              />
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-[#8DBDAD] text-xs uppercase tracking-widest mb-3">Top Areas for Relocating Families</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Deltona', 'Kissimmee', 'Orange City', 'Orlando', 'Clermont', 'Daytona Area'].map((area, i) => (
                    <div key={i} className="text-white/60 text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#8DBDAD] inline-block" />
                      {area}
                    </div>
                  ))}
                </div>
                <Link href="/deltona" className="mt-4 inline-flex items-center gap-2 text-[#8DBDAD] text-xs hover:text-white transition-colors">
                  Explore Deltona → Florida&apos;s fastest-growing city <FiArrowRight />
                </Link>
              </div>
            </div>
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
