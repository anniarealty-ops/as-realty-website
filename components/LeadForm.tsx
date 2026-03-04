'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  phone: string
  email: string
  type: 'buyer' | 'seller' | 'investor'
  message?: string
  smsConsent?: boolean
}

interface LeadFormProps {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function LeadForm({
  title = 'Get a Free Consultation',
  subtitle = 'Fill out the form and Annia will reach out within 24 hours.',
  dark = false,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Replace this URL with your GoHighLevel webhook URL
    const GHL_WEBHOOK = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || ''
    try {
      if (GHL_WEBHOOK) {
        await fetch(GHL_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
      }
      setSubmitted(true)
    } catch {
      setSubmitted(true) // Still show success to user
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-lg border ${
    dark ? 'bg-navy-700 border-navy-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
  } focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm`

  const labelClass = `block text-sm font-medium mb-1 ${dark ? 'text-gray-200' : 'text-gray-700'}`

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${dark ? 'bg-navy-700' : 'bg-white shadow-xl'}`}>
        <div className="text-5xl mb-4">✅</div>
        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-navy-800'}`}>
          Thank you! We'll be in touch shortly.
        </h3>
        <p className={`mt-2 text-sm ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
          Annia Santana will contact you within 24 hours at the number or email you provided.
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-8 ${dark ? 'bg-navy-700' : 'bg-white shadow-xl'}`}>
      <h3 className={`text-2xl font-bold mb-1 ${dark ? 'text-white' : 'text-navy-800'}`}>{title}</h3>
      <p className={`text-sm mb-6 ${dark ? 'text-gray-300' : 'text-gray-500'}`}>{subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            {...register('phone', { required: 'Phone is required' })}
            placeholder="(407) 000-0000"
            type="tel"
            className={inputClass}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
            })}
            placeholder="you@email.com"
            type="email"
            className={inputClass}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className={labelClass}>I am a... *</label>
          <select
            {...register('type', { required: true })}
            className={inputClass}
          >
            <option value="">Select one</option>
            <option value="buyer">Buyer — Looking to purchase a home</option>
            <option value="seller">Seller — Looking to sell my home</option>
            <option value="investor">Investor — Looking for investment properties</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Message (optional)</label>
          <textarea
            {...register('message')}
            placeholder="Tell us about your real estate goals..."
            rows={3}
            className={inputClass}
          />
        </div>

        {/* SMS Consent — optional, compliant with TCPA & SimpleTexting requirements */}
        <div className="flex items-start gap-3 pt-1">
          <input
            {...register('smsConsent')}
            type="checkbox"
            id="smsConsent"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500 shrink-0 cursor-pointer"
          />
          <label htmlFor="smsConsent" className={`text-xs leading-relaxed cursor-pointer ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            I agree to receive promotional text messages from AS Realty & Investments sent via an autodialer, and this agreement is not a condition of any purchase. I agree to the{' '}
            <a href="/terms" className="underline hover:text-gold-600">Terms of Service</a> and{' '}
            <a href="/privacy" className="underline hover:text-gold-600">Privacy Policy</a>.{' '}
            Up to 4 msgs/month. Msg &amp; Data rates may apply. Text STOP to opt-out. Text HELP for assistance.
            My mobile information will not be shared with third parties for marketing purposes.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-base py-4 font-bold tracking-wide disabled:opacity-60"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Consultation →'}
        </button>
      </form>
    </div>
  )
}
