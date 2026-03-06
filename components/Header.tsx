'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

const navLinks = [
  { label: 'Home',             href: '/' },
  { label: 'Search Listings',  href: '/listings' },
  { label: 'Buy a Home',       href: '/buyers' },
  { label: 'Sell a Home',      href: '/sellers' },
  { label: 'Free Guides',      href: '/free-guides', highlight: true },
  { label: 'About',            href: '/about' },
  { label: 'Contact',          href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full z-50 sticky top-0 shadow-md">
      {/* Top bar */}
      <div className="bg-[#1A2E22] text-white/80 text-sm py-2 px-4 flex justify-center gap-6 flex-wrap">
        <a href="tel:4074921114" className="flex items-center gap-1 hover:text-[#8DBDAD] transition-colors">
          <FiPhone className="text-[#8DBDAD]" />
          (407) 492-1114
        </a>
        <a href="mailto:Annia.Realty@Gmail.com" className="flex items-center gap-1 hover:text-[#8DBDAD] transition-colors">
          <MdEmail className="text-[#8DBDAD]" />
          Annia.Realty@Gmail.com
        </a>
        <a
          href="https://mls-client.com/E71168B2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#8DBDAD] hover:text-white font-medium transition-colors"
        >
          Download Mobile App
        </a>
      </div>

      {/* Main nav */}
      <nav className="bg-[#F5FAF7] border-b border-[#E8F3EE] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-[#1A2E22] tracking-tight" style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}>AS Realty</span>
          <span className="text-xs font-medium text-[#6B9E8A] tracking-widest uppercase">&amp; Investments</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={link.highlight
                  ? 'text-[#6B9E8A] hover:text-[#4A7A68] font-semibold text-sm transition-colors'
                  : 'text-[#2E4A38] hover:text-[#6B9E8A] font-medium text-sm transition-colors'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/contact"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Free Consultation
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#2E4A38] text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F5FAF7] border-b border-[#E8F3EE] px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-[#2E4A38] hover:text-[#6B9E8A] font-medium py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/contact" className="btn-primary block text-center text-sm">
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
