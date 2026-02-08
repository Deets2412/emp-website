'use client'

import { useState } from 'react'
import { SOCIAL_LINKS } from '@/lib/constants'

const subjects = [
  'General Inquiry',
  'Media & Press',
  'Speaking Engagements',
  'Brand Partnerships',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: subjects[0], message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-navy-600">
            Have a question, a story to share, or a collaboration idea? We would love to hear
            from you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">Message Sent!</h3>
                  <p className="mt-2 text-navy-600">
                    Thanks for reaching out. We will get back to you as soon as we can.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-navy-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-navy-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-navy-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-800 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-navy-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                      placeholder="What is on your mind?"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <h3 className="text-lg font-semibold text-navy-800">
                We&apos;d Love to Hear From You
              </h3>
              <p className="mt-2 text-sm text-navy-600">
                Whether it is a listener story, a topic suggestion, a media inquiry, or a
                partnership opportunity — we read every message.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                    Email
                  </p>
                  <a
                    href="mailto:hello@emotionalmoney.com.au"
                    className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
                  >
                    hello@emotionalmoney.com.au
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                    Follow Us
                  </p>
                  <div className="mt-2 flex gap-3">
                    {[
                      { name: 'YouTube', href: SOCIAL_LINKS.youtube },
                      { name: 'Instagram', href: SOCIAL_LINKS.instagram },
                      { name: 'TikTok', href: SOCIAL_LINKS.tiktok },
                      { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
                    ].map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:border-gold-400 hover:text-gold-700"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                    Response Time
                  </p>
                  <p className="mt-1 text-sm text-navy-700">
                    We aim to respond within 2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
