import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AS Realty & Investments | Annia Santana | Orlando FL',
  description:
    'Over 20 years of real estate experience in Orlando, FL. Buy, sell, or invest in Central Florida with Annia Santana — Broker Owner of AS Realty & Investments. 5-Star rated, 100% satisfied clients.',
  keywords:
    'Orlando real estate, homes for sale Orlando, buy home Orlando, sell home Orlando, AS Realty, Annia Santana, broker Orlando FL, investment property Orlando',
  openGraph: {
    title: 'AS Realty & Investments | Annia Santana | Orlando FL',
    description: 'Your trusted Orlando real estate broker with 20+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/48952948.js"
          strategy="afterInteractive"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
