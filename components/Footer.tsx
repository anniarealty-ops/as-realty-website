import Link from 'next/link'
import { FiPhone, FiMail, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#12231A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="md:col-span-2">
          <p className="text-2xl font-bold text-white">AS Realty <span className="text-[#6B9E8A]">&amp; Investments</span></p>
          <p className="text-sm text-[#6B9E8A] tracking-widest uppercase mt-0.5 mb-4">Annia Santana — Broker Owner</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Serving the Greater Orlando area with over 20 years of real estate expertise.
            Helping buyers, sellers, and investors achieve their real estate goals with
            5-star, 100% satisfaction service.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#6B9E8A] text-xl transition-colors"><FiFacebook /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#6B9E8A] text-xl transition-colors"><FiInstagram /></a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#6B9E8A] text-xl transition-colors"><FiYoutube /></a>
            <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-[#6B9E8A] text-xl transition-colors"><FaTiktok /></a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-[#6B9E8A] font-semibold uppercase tracking-widest text-xs mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: 'Buy a Home',      href: '/buyers' },
              { label: 'Sell Your Home',  href: '/sellers' },
              { label: 'Home Valuation',  href: '/sellers#valuation' },
              { label: 'Search Listings', href: 'https://mls-client.com/E71168B2' },
              { label: 'About Annia',     href: '/about' },
              { label: 'Contact',         href: '/contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#6B9E8A] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#6B9E8A] font-semibold uppercase tracking-widest text-xs mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="tel:4074921114" className="flex items-center gap-2 hover:text-[#6B9E8A] transition-colors">
                <FiPhone className="text-[#6B9E8A] shrink-0" /> (407) 492-1114
              </a>
            </li>
            <li>
              <a href="mailto:Annia.Realty@Gmail.com" className="flex items-center gap-2 hover:text-[#6B9E8A] transition-colors">
                <FiMail className="text-[#6B9E8A] shrink-0" /> Annia.Realty@Gmail.com
              </a>
            </li>
            <li className="text-gray-400 text-xs leading-relaxed pt-2">
              Serving Orlando, Kissimmee, Windermere,<br />
              Winter Garden, Lake Nona &amp; surrounding areas
            </li>
          </ul>
          <a
            href="https://mls-client.com/E71168B2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block btn-primary text-xs px-4 py-2"
          >
            Download Mobile App
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2E4A38] py-5 px-6 text-center text-xs text-white/30">
        <p>
          &copy; {year} AS Realty &amp; Investments. All rights reserved.
          &nbsp;|&nbsp; Annia Santana, Licensed Florida Real Estate Broker
          &nbsp;|&nbsp; Equal Housing Opportunity
        </p>
      </div>
    </footer>
  )
}
