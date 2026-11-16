'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  phone: string
  interest?: 'buying' | 'selling'
  smsConsent?: boolean
}

interface SignLeadFormProps {
  source: 'for-sale' | 'for-rent'
  src?: string
  title?: string
  subtitle?: string
}

export default function SignLeadForm({ source, src, title, subtitle }: SignLeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('/api/sign-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source, src }),
      })
    } catch (err) {
      console.error('Sign lead submit failed:', err)
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-8 text-center bg-white shadow-xl">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-navy-900">You're on the list!</h3>
        <p className="mt-2 text-sm text-gray-500">
          Annia will text or call you shortly at the number you provided.
        </p>
        <a href="tel:4074921114" className="btn-primary inline-block mt-6 px-6 py-3 font-bold">
          Or Call Now: (407) 492-1114 →
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-2xl p-8 bg-white shadow-xl">
      <h3 className="text-2xl font-bold mb-1 text-navy-900">
        {title || (source === 'for-rent' ? 'Get Rental Alerts' : 'Get Instant Listing Alerts')}
      </h3>
      <p className="text-sm mb-6 text-gray-500">
        {subtitle ||
          (source === 'for-rent'
            ? "Tell us your name and number and we'll text you when a new rental like this opens up."
            : "Tell us your name and number and we'll text you new listings and price drops in this area.")}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Full Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number *</label>
          <input
            {...register('phone', { required: 'Phone is required' })}
            placeholder="(407) 000-0000"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {source === 'for-sale' && (
          <div className="flex gap-6 pt-1">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input {...register('interest')} type="radio" value="buying" className="h-4 w-4 text-gold-500 focus:ring-gold-500" />
              I'm looking to buy
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input {...register('interest')} type="radio" value="selling" className="h-4 w-4 text-gold-500 focus:ring-gold-500" />
              I'm thinking of selling
            </label>
          </div>
        )}

        <div className="flex items-start gap-3 pt-1">
          <input
            {...register('smsConsent')}
            type="checkbox"
            id="smsConsent"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500 shrink-0 cursor-pointer"
          />
          <label htmlFor="smsConsent" className="text-xs leading-relaxed cursor-pointer text-gray-500">
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
          {isSubmitting ? 'Submitting...' : 'Send Me The Details →'}
        </button>

        <p className="text-center text-xs text-gray-400 pt-1">
          Prefer texting? Text <span className="font-semibold text-navy-900">HOMES</span> to{' '}
          <a href="tel:4074921114" className="underline">(407) 492-1114</a>
        </p>
      </form>
    </div>
  )
}
