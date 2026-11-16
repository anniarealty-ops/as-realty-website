import Link from 'next/link'
import { FiPhone, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Deltona Real Estate Expert | Annia Santana — AS Realty & Investments',
  description: 'Annia Santana is Deltona\'s most active real estate broker. Buying or selling in 32725 or 32738? Get local expertise, bilingual service, and proven results.',
}

const whyDeltona = [
  { stat: '#1',      label: 'Fastest-growing city in Volusia County' },
  { stat: '$300Ks',  label: 'Median home price — still affordable' },
  { stat: '45 min',  label: 'To Orlando, Daytona Beach, or New Smyrna' },
  { stat: '2026',    label: 'Strong seller\'s market — low inventory' },
]

const services = [
  {
    title: 'Selling in Deltona',
    body: 'Annia knows every street in 32725 and 32738. She prices your home using real local data — not automated estimates — and runs a full bilingual marketing campaign to attract every qualified buyer in the market.',
    cta: 'Get My Free Home Valuation',
    href: '#deltona-form',
  },
  {
    title: 'Buying in Deltona',
    body: 'Whether you\'re relocating from Puerto Rico, Venezuela, New York, or across town — Annia guides you through every neighborhood, every price range, and every step from pre-approval to keys.',
    cta: 'Start Your Home Search',
    href: '/buyers',
  },
  {
    title: 'Investing in Deltona',
    body: 'Deltona\'s population growth and affordability make it one of Central Florida\'s top investor markets. Annia helps you identify cash-flowing rentals, fix-and-flip opportunities, and off-market deals.',
    cta: 'Explore Investment Options',
    href: '/contact',
  },
]

const neighborhoods = [
  { name: 'Deltona Lakes',     zip: '32725', note: 'Most established — high turnover, strong comps' },
  { name: 'Enterprise',        zip: '32725', note: 'Quiet, waterfront access, larger lots' },
  { name: 'Volusia Heights',   zip: '32738', note: 'Affordable entry point, growing demand' },
  { name: 'Saxon Boulevard',   zip: '32725', note: 'Commercial corridor, investor activity high' },
  { name: 'Catalina',         zip: '32738', note: 'Family-friendly, close to schools' },
  { name: 'Deltona Hills',    zip: '32725', note: 'Established neighborhoods, equity-rich sellers' },
]

export default function DeltonaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#1A2E22] py-28 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26,46,34,0.95) 55%, rgba(26,46,34,0.6)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <span className="eyebrow">Deltona, FL · Volusia County · ZIP 32725 &amp; 32738</span>
          <h1 className="h-hero text-white mt-3 max-w-2xl">
            Deltona&apos;s<br />
            <em className="not-italic text-[#8DBDAD]">Most Active</em><br />
            Real Estate<br />
            Broker.
          </h1>
          <p className="text-white/70 mt-6 max-w-lg leading-relaxed text-sm font-light">
            Annia Santana has closed more deals in Deltona than most agents have in all of Central Florida.
            Bilingual. Local. Your broker — not a team, not a corporation. Her.
          </p>
          <p className="text-white/50 mt-3 max-w-lg leading-relaxed text-sm font-light italic">
            ¿Hablas español? Annia también. Llámala hoy: (407) 492-1114
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="#deltona-form" className="btn-gold">
              Get a Free Deltona Home Valuation
            </Link>
            <a href="tel:4074921114" className="btn-dark flex items-center gap-2">
              <FiPhone /> (407) 492-1114
            </a>
          </div>
        </div>
      </section>

      {/* Why Deltona Stats */}
      <section className="bg-[#E8F3EE]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#6B9E8A]/20">
            {whyDeltona.map((s, i) => (
              <div key={i} className="py-10 px-8 text-center">
                <p className="font-display text-4xl md:text-5xl font-light tracking-widest text-[#1A2E22]">{s.stat}</p>
                <p className="text-[#6B9E8A] text-[10px] uppercase tracking-[0.2em] mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Deltona intro */}
      <section className="section-pad bg-white">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Why Deltona</span>
            <h2 className="h-section text-[#1A2E22] mt-2">
              Central Florida&apos;s<br />
              <em className="not-italic text-[#6B9E8A]">Hidden Gem.</em>
            </h2>
            <p className="text-gray-500 mt-6 leading-relaxed text-sm font-light">
              Deltona sits perfectly between Orlando and Daytona Beach — giving residents access to world-class employment, entertainment, and beaches at a price that still makes sense.
              Population has grown over 15% since 2020. Inventory remains tight. Sellers are winning. Buyers who act now still catch the wave.
            </p>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm font-light">
              As a bilingual broker with deep Volusia County roots, Annia serves both the long-established Deltona community and the growing wave of Puerto Rican and Venezuelan families choosing Deltona as their Florida home.
            </p>
            <div className="grid grid-cols-1 gap-3 mt-8">
              {[
                'Homes still priced below the Orlando metro average',
                'Strong rental demand — ideal for investors',
                'Large Spanish-speaking community — bilingual service matters here',
                'No state income tax + lower property taxes than South Florida',
                '45 minutes to Orlando International Airport',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                  <FiCheckCircle className="text-[#6B9E8A] mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-xl overflow-hidden shadow-xl min-h-[480px]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-[#F5FAF7]">
        <div className="container">
          <div className="mb-16">
            <span className="gold-rule" />
            <span className="eyebrow">How Annia Serves Deltona</span>
            <h2 className="h-section text-[#1A2E22] mt-2 max-w-xl">
              Buying, Selling, or Investing?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="bg-white border border-[#E8F3EE] p-10 card-lift flex flex-col">
                <h3 className="h-card text-[#1A2E22] mb-4">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.body}</p>
                <Link href={svc.href} className="mt-8 btn-navy self-start flex items-center gap-3 text-xs">
                  {svc.cta} <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Guide */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <span className="gold-rule mx-auto" />
            <span className="eyebrow">Deltona Neighborhood Guide</span>
            <h2 className="h-section text-[#1A2E22] mt-2">Know Before You Buy</h2>
            <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto">
              Not all of Deltona is the same. Annia knows which streets are appreciating, which neighborhoods have the best schools, and where the investment opportunities are hiding.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n, i) => (
              <div key={i} className="border border-[#E8F3EE] p-6 card-lift bg-[#F5FAF7]">
                <div className="w-8 h-[2px] bg-[#6B9E8A] mb-4" />
                <p className="font-display text-[#1A2E22] text-lg mb-1 tracking-wide">{n.name}</p>
                <p className="text-[#6B9E8A] text-[10px] uppercase tracking-widest mb-3">ZIP {n.zip}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual Section */}
      <section className="section-pad bg-[#1A2E22]">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow text-[#8DBDAD]">Bilingual Service · Servicio Bilingüe</span>
            <h2 className="h-section text-white mt-2">
              Tu Agente en<br />
              <em className="not-italic text-[#8DBDAD]">Deltona.</em>
            </h2>
            <p className="text-white/60 mt-6 text-sm leading-relaxed font-light">
              Deltona has one of the largest Spanish-speaking communities in Volusia County.
              Annia serves buyers and sellers in English and Spanish — so nothing gets lost in translation when it matters most.
            </p>
            <p className="text-white/60 mt-4 text-sm leading-relaxed font-light italic">
              Deltona tiene una de las comunidades de habla hispana más grandes del Condado de Volusia.
              Annia atiende compradores y vendedores en inglés y español — para que nada se pierda en la traducción cuando más importa.
            </p>
            <a href="tel:4074921114" className="btn-gold mt-8 inline-flex items-center gap-3">
              <FiPhone /> Llámame · Call Me: (407) 492-1114
            </a>
          </div>
          <div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">What our Deltona clients say</p>
              <blockquote className="text-white/80 text-sm leading-relaxed italic">
                &ldquo;Annia fue nuestra guía desde el principio hasta el final. Compramos nuestra primera casa en Deltona y ella hizo todo el proceso fácil y sin estrés. ¡La recomendamos al 100%!&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white text-sm font-semibold">Carmen & Héctor R.</p>
                <p className="text-white/40 text-xs mt-1">Deltona Lakes, First-Time Buyers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="deltona-form" className="section-pad bg-[#F5FAF7]">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Deltona Home Valuation — Free</span>
            <h2 className="h-section text-[#1A2E22] mt-2">
              What&apos;s Your<br />
              <em className="not-italic text-[#6B9E8A]">Deltona Home</em><br />
              Worth?
            </h2>
            <p className="text-gray-500 mt-6 text-sm leading-relaxed">
              Annia uses real Deltona sales data — not an algorithm — to give you an accurate home valuation.
              Free, no pressure, and delivered within 24 hours.
            </p>
            <p className="text-gray-400 mt-3 text-sm italic">
              ¿Quieres saber cuánto vale tu casa? Annia te responde en menos de 24 horas.
            </p>
          </div>
          <LeadForm
            title="Get My Free Deltona Valuation"
            subtitle="Annia will contact you with a full CMA within 24 hours. English & Spanish."
          />
        </div>
      </section>
    </>
  )
}
