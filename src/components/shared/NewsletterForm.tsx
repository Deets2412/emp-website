'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'default' | 'footer' | 'inline'
}

export function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={variant === 'footer' ? 'text-gold-400' : 'text-navy-800'}>
        <p className="text-sm font-medium">You&apos;re in! Check your inbox.</p>
      </div>
    )
  }

  const isFooter = variant === 'footer'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`flex-1 rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 ${
          isFooter
            ? 'border-navy-700 bg-navy-800 text-white placeholder:text-navy-500'
            : 'border-navy-200 bg-white text-navy-800 placeholder:text-navy-400'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="whitespace-nowrap rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-600 disabled:opacity-60"
      >
        {status === 'loading' ? 'Joining...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-500 sm:col-span-2">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
