import Link from 'next/link'
import { FiCheckCircle, FiStar, FiPhone } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

const credentials = [
  'Licensed Florida Real Estate Broker',
  '20+ Years of Active Real Estate Experience',
  'Broker Owner — AS Realty & Investments',
  'Specializes in Residential & Investment Properties',
  'Serving Greater Orlando & Central Florida',
  'Fluent in English and Spanish',
  '5-Star Rated — 100% Satisfaction Surveys',
]

const areas = [
  'Orlando', 'Lake Nona', 'Windermere', 'Winter Garden',
  'Horizon West', 'Kissimmee', 'Dr. Phillips', 'Celebration',
  'Clermont', 'Ocoee', 'Apopka', 'Altamonte Springs',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-navy-900 py-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(9,22,58,0.85), rgba(9,22,58,0.95)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">About</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Annia Santana
          </h1>
          <p className="text-gold-400 font-semibold mt-2 tracking-wide">
            Broker Owner — AS Realty &amp; Investments
          </p>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            20+ years of dedication, expertise, and results in the Central Florida real estate market.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Profile photo area */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/annia-santana.jpg"
                alt="Annia Santana – Broker Owner, AS Realty & Investments"
                className="w-full h-full object-cover object-top min-h-[480px]"
              />
            </div>
            {/* Credentials card */}
            <div className="bg-navy-800 rounded-2xl mt-6 p-6 text-white">
              <h3 className="text-gold-400 font-semibold uppercase text-xs tracking-widest mb-4">Credentials & Certifications</h3>
              <ul className="space-y-2">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <MdVerified className="text-gold-400 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Story */}
          <div>
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-widest">My Story</span>
            <h2 className="text-3xl font-bold text-navy-800 mt-2">A Career Built on Trust &amp; Results</h2>

            <div className="mt-6 space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                With over 20 years in Central Florida real estate, Annia Santana has built a reputation
                as one of Orlando's most trusted and results-driven brokers. As the Broker Owner of
                AS Realty &amp; Investments, she has helped hundreds of buyers find their dream homes,
                guided sellers to successful closings, and helped investors build lasting wealth through
                real estate.
              </p>
              <p>
                Annia's approach is simple: her clients always come first. She believes every real estate
                transaction is more than just a deal — it's a life milestone. That's why she invests the
                time to truly understand her clients' goals and works tirelessly to exceed their expectations.
              </p>
              <p>
                Whether you're a first-time buyer navigating the process for the first time, a growing
                family searching for more space, or a seasoned investor looking for the next opportunity
                in the Orlando market — Annia brings the market knowledge, sharp negotiation skills,
                and personal attention that gets results.
              </p>
              <p>
                Fluent in both English and Spanish, Annia proudly serves the diverse communities of
                Central Florida, making the home buying and selling experience accessible and
                comfortable for every client.
              </p>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2 mt-8 bg-gray-50 rounded-xl p-5">
              <div className="flex gap-1 text-gold-500 text-2xl">
                {[...Array(5)].map((_, i) => <FiStar key={i} />)}
              </div>
              <div className="ml-2">
                <p className="font-bold text-navy-800 text-sm">5-Star Rated</p>
                <p className="text-gray-500 text-xs">100% client satisfaction — verified reviews</p>
              </div>
            </div>

            {/* Contact strip */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:4074921114" className="btn-primary flex items-center gap-2">
                <FiPhone /> (407) 492-1114
              </a>
              <Link href="/contact" className="btn-navy">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="section-heading">Areas I Serve</h2>
          <p className="section-sub mx-auto mt-3">Proudly serving families and investors throughout Central Florida</p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {areas.map((a) => (
              <span key={a} className="bg-white border border-navy-200 text-navy-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm">
                {a}
              </span>
            ))}
          </div>
          <Link href="/contact" className="mt-10 inline-block btn-primary px-10 py-4">
            Let's Work Together →
          </Link>
        </div>
      </section>
    </>
  )
}
