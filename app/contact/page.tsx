import { FiPhone, FiMail, FiDownload, FiClock } from 'react-icons/fi'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import LeadForm from '@/components/LeadForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20 text-center text-white">
        <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Contact Annia</h1>
        <p className="text-gray-300 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
          Ready to buy, sell, or invest? Have questions about the Orlando market?
          Reach out and Annia will personally respond.
        </p>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-800 mb-8">Reach Out Directly</h2>

            <div className="space-y-6">
              <a
                href="tel:4074921114"
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                  <FiPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Phone / Text</p>
                  <p className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors">(407) 492-1114</p>
                </div>
              </a>

              <a
                href="mailto:Annia.Realty@Gmail.com"
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                  <FiMail className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors">Annia.Realty@Gmail.com</p>
                </div>
              </a>

              <a
                href="https://mls-client.com/E71168B2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gold-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center shrink-0">
                  <FiDownload className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Mobile App</p>
                  <p className="font-bold text-navy-800 group-hover:text-gold-600 transition-colors">Download Free MLS App</p>
                  <p className="text-xs text-gray-400">Search on the go — iOS &amp; Android</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
                  <FiClock className="text-navy-700 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Response Time</p>
                  <p className="font-bold text-navy-800">Within 24 hours</p>
                  <p className="text-xs text-gray-400">Mon – Sun, 8am – 8pm</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="text-sm font-semibold text-navy-800 mb-4 uppercase tracking-wide">Follow on Social Media</p>
              <div className="flex gap-4">
                {[
                  { icon: <FiFacebook />,  label: 'Facebook' },
                  { icon: <FiInstagram />, label: 'Instagram' },
                  { icon: <FiYoutube />,   label: 'YouTube' },
                  { icon: <FaTiktok />,    label: 'TikTok' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-white hover:bg-gold-500 transition-colors text-xl"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm
              title="Send a Message"
              subtitle="Fill out the form below and Annia will personally get back to you."
            />
          </div>
        </div>
      </section>
    </>
  )
}
