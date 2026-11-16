import { FiMapPin, FiHome, FiDroplet, FiPhone, FiMessageSquare } from 'react-icons/fi'
import { MdOutlineBed, MdOutlineBathtub } from 'react-icons/md'
import SignLeadForm from '@/components/SignLeadForm'
import StickyLeadBar from '@/components/StickyLeadBar'
import AnimateOnScroll from '@/components/AnimateOnScroll'

// TODO: replace with Annia's real active for-sale listings (address, price, beds/baths/sqft, photo, blurb, status)
const listings = [
  {
    photo: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    status: 'Active',
    address: '123 Sample St, Deltona, FL',
    price: '$349,900',
    beds: 3,
    baths: 2,
    sqft: '1,780',
    blurb: 'Updated pool home on a quarter-acre lot, minutes from I-4.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
    status: 'Active',
    address: '456 Example Ave, Orange City, FL',
    price: '$412,500',
    beds: 4,
    baths: 3,
    sqft: '2,210',
    blurb: 'Equity-rich suburban 4-bedroom with a fully fenced backyard.',
  },
]

export default function ForSalePage({
  searchParams,
}: {
  searchParams?: { src?: string }
}) {
  const src = searchParams?.src

  return (
    <>
      {/* Hero */}
      <section
        className="bg-navy-900 py-24 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9,22,58,0.92) 50%, rgba(9,22,58,0.55)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">You Scanned The Sign</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 max-w-2xl leading-tight">
            Homes For Sale<br />
            <span className="text-gold-400">In This Area</span>
          </h1>
          <p className="text-gray-300 mt-5 max-w-xl leading-relaxed">
            Here's what's currently available, straight from Annia Santana. Get the full details below,
            or get a text the second a new home or price drop hits the market.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#listings" className="btn-primary flex items-center gap-2">
              <FiHome /> See Current Listings
            </a>
            <a href="tel:4074921114" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 flex items-center gap-2">
              <FiPhone /> Call (407) 492-1114
            </a>
          </div>
        </div>
      </section>

      {/* Text shortcode banner */}
      <section className="bg-gold-500 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-3 text-center text-white">
          <FiMessageSquare className="text-xl" />
          <p className="text-sm font-semibold">
            In a hurry? Text <span className="underline">HOMES</span> to (407) 492-1114 and we'll send you the list instantly.
          </p>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="gold-rule mx-auto" />
            <span className="eyebrow">Currently Available</span>
            <h2 className="h-section text-navy-900 mt-2">Active Listings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {listings.map((home, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="border border-gray-100 card-lift overflow-hidden h-full bg-white">
                  <div
                    className="h-56 bg-gray-200"
                    style={{
                      backgroundImage: `url('${home.photo}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">{home.status}</span>
                      <span className="text-2xl font-extrabold text-navy-900">{home.price}</span>
                    </div>
                    <p className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                      <FiMapPin /> {home.address}
                    </p>
                    <div className="flex items-center gap-5 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1"><MdOutlineBed /> {home.beds} bd</span>
                      <span className="flex items-center gap-1"><MdOutlineBathtub /> {home.baths} ba</span>
                      <span className="flex items-center gap-1"><FiDroplet /> {home.sqft} sqft</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{home.blurb}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <div id="listings-end" />

      {/* Lead form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-rule" />
            <span className="eyebrow">Never Miss A Home</span>
            <h2 className="h-section text-navy-900 mt-2">
              Get Alerts<br />Before Anyone Else
            </h2>
            <p className="text-gray-500 mt-6 text-sm leading-relaxed max-w-sm">
              New listings and price drops in this area go fast. Leave your name and number and
              Annia will personally text you the moment something new comes up, or help you make
              an offer on one of the homes above.
            </p>
          </div>
          <SignLeadForm source="for-sale" src={src} />
        </div>
      </section>

      <StickyLeadBar source="for-sale" src={src} />
    </>
  )
}
