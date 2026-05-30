'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'default' | 'footer' | 'inline' | 'dark' | 'new'
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
      if (res.ok) { setStatus('success'); setEmail('') }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm font-medium" style={{ color: variant === 'dark' ? 'var(--color-sage)' : 'var(--color-sage-deep)' }}>
        You&rsquo;re in! Check your inbox.
      </p>
    )
  }

  const isDark = variant === 'dark'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        placeholder={isDark ? 'you@email.com' : 'Your email address'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-full px-5 py-3 text-[0.95rem] focus:outline-none"
        style={isDark ? {
          border: '1px solid oklch(0.45 0.01 80)',
          background: 'oklch(0.32 0.012 70)',
          color: 'var(--color-paper)',
        } : {
          border: '1px solid var(--color-line-strong)',
          background: 'var(--color-paper)',
          color: 'var(--color-ink)',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors disabled:opacity-60"
        style={isDark ? {
          background: 'var(--color-sage)',
          border: '1px solid var(--color-sage)',
          color: 'oklch(0.2 0.02 150)',
        } : {
          background: 'var(--color-ink)',
          border: '1px solid var(--color-ink)',
          color: 'var(--color-paper)',
        }}
      >
        {status === 'loading' ? 'Joining...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
