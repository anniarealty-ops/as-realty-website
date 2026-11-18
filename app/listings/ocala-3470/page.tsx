import { FiMapPin, FiPhone, FiMail, FiGlobe, FiCheck } from 'react-icons/fi'
import { MdOutlineBed, MdOutlineBathtub, MdOutlineSquareFoot, MdOutlineGarage, MdOutlinePets } from 'react-icons/md'
import SignLeadForm from '@/components/SignLeadForm'
import StickyLeadBar from '@/components/StickyLeadBar'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const APPLY_LINK = 'https://apply.link/9yTwzmA'

const specs = [
  { icon: MdOutlineBed, label: '4 Bedrooms' },
  { icon: MdOutlineBathtub, label: '2 Bathrooms' },
  { icon: MdOutlineSquareFoot, label: '2,088 Sq Ft' },
  { icon: MdOutlineGarage, label: '2-Car Garage' },
  { icon: MdOutlinePets, label: 'Cats & Dogs OK' },
]

const highlights = [
  'No HOA',
  'Split floor plan',
  'Island kitchen with solid wood cabinets',
  'Large fenced backyard on a corner lot',
  'Available 12/01/2026',
]

export default function OcalaListingPage({
  searchParams,
}: {
  searchParams?: { src?: string }
}) {
  const src = searchParams?.src || 'sign-ocala'

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">For Rent</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight">
            3470 SW 133rd Lane Road
          </h1>
          <p className="flex items-center gap-2 text-gray-300 mt-2">
            <FiMapPin /> Ocala, FL 34473
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <span className="text-3xl font-extrabold text-gold-400">$2,350/mo</span>
            <a href="tel:4074921114" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 flex items-center gap-2">
              <FiPhone /> Call (407) 492-1114
            </a>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <img
              src="/listings/ocala-3470/exterior.jpg"
              alt="3470 SW 133rd Lane Road, Ocala, FL - front exterior"
              className="w-full h-72 md:h-96 object-cover rounded-xl"
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <AnimateOnScroll delay={0.1}>
              <img
                src="/listings/ocala-3470/kitchen.jpg"
                alt="Kitchen with island and solid wood cabinets"
                className="w-full h-40 md:h-56 object-cover rounded-xl"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <img
                src="/listings/ocala-3470/living.jpg"
                alt="Living room"
                className="w-full h-40 md:h-56 object-cover rounded-xl"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {specs.map((spec, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <spec.icon className="text-2xl text-gold-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-navy-900">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="h-section text-navy-900 mb-4">About This Home</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the highly sought-after SW Ocala neighborhood, where you'll discover this
            beautiful and spacious 4-bedroom, 2-bath home with a thoughtfully designed split floor
            plan with 2,088 SqFt. No HOA! This residence boasts a generously sized island kitchen
            adorned with solid wood cabinets, offering ample space for culinary enthusiasts and
            those who love to entertain. Convenience is key with a 2-car garage providing shelter
            for your vehicles and additional storage. Your furry companions are sure to enjoy the
            large fenced backyard, providing them with plenty of space to roam and play on a
            serene corner lot within the neighborhood.
          </p>
          <ul className="mt-6 space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                <FiCheck className="text-gold-600" /> {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-navy-900 mb-2">Terms</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>12-month lease</li>
              <li>1st month, last month + security deposit ($2,300 minimum)</li>
              <li>Pet fee $350 (non-refundable) per pet, up to 2 pets</li>
              <li>Rent includes water</li>
              <li>Application fee: $49.00</li>
            </ul>
          </div>

          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mt-8 px-8 py-4 font-bold"
          >
            Apply Now →
          </a>
        </div>
      </section>
      <div id="listings-end" />

      {/* Lead form + contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Questions? Want A Showing?</span>
            <h2 className="h-section text-navy-900 mt-2">
              Contact Annia<br />Directly
            </h2>
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2"><FiPhone className="text-gold-600" /> (407) 492-1114</p>
              <p className="flex items-center gap-2"><FiMail className="text-gold-600" /> Annia.Realty@Gmail.com</p>
              <p className="flex items-center gap-2"><FiGlobe className="text-gold-600" /> asrealtyfl.com</p>
            </div>
            <p className="text-gray-500 mt-6 text-sm leading-relaxed max-w-sm">
              AS Realty &amp; Investments LLC. Leave your name and number below and Annia will text
              you back right away, or call/apply using the links above.
            </p>
          </div>
          <SignLeadForm
            source="for-rent"
            src={src}
            title="Interested In This Rental?"
            subtitle="Leave your name and number and Annia will text you back right away."
          />
        </div>
      </section>

      <StickyLeadBar source="for-rent" src={src} />
    </>
  )
}
