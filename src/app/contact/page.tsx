'use client'

import { useState } from 'react'
import { SOCIAL_LINKS } from '@/lib/constants'

const subjects = [
  'General Inquiry',
  'Media & Press',
  'Speaking Engagements',
  'Brand Partnerships',
]

const pageStyles = `
  .contact-grid { display: grid; grid-template-columns: 3fr 2fr; gap: 28px; align-items: start; }
  @media (max-width: 880px) { .contact-grid { grid-template-columns: 1fr; gap: 24px; } }

  .form-card { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 40px; }
  @media (max-width: 560px) { .form-card { padding: 28px 22px; } }

  .field { display: flex; flex-direction: column; gap: 8px; }
  .field + .field { margin-top: 22px; }
  .field label { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage-deep); }
  .field input,
  .field select,
  .field textarea {
    width: 100%; padding: 0.85em 1.1em; border-radius: 12px;
    border: 1px solid var(--line-strong); background: var(--paper);
    color: var(--ink); font-family: var(--sans); font-size: 0.98rem; line-height: 1.5;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }
  .field input::placeholder,
  .field textarea::placeholder { color: var(--ink-faint); }
  .field input:focus,
  .field select:focus,
  .field textarea:focus { outline: none; border-color: var(--sage-deep); box-shadow: 0 0 0 3px var(--sage-wash); }
  .field textarea { resize: vertical; min-height: 130px; }
  .form-card .submit-row { margin-top: 28px; }
  .form-card .btn { width: 100%; justify-content: center; }
  .form-err { font-size: 0.9rem; color: var(--clay); margin-top: 16px; }

  .sent { text-align: center; padding: 28px 8px; }
  .sent .mark { width: 64px; height: 64px; border-radius: 50%; background: var(--sage-wash); color: var(--sage-deep); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
  .sent h3 { font-size: 1.5rem; margin-bottom: 10px; }
  .sent p { color: var(--ink-soft); font-size: 0.98rem; max-width: 40ch; margin: 0 auto; }
  .sent .again { margin-top: 20px; font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage-deep); background: none; border: none; cursor: pointer; padding: 0; }
  .sent .again:hover { color: var(--ink); }

  .side-card { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 34px 32px; }
  .side-card h3 { font-size: 1.35rem; margin-bottom: 12px; }
  .side-card > p { color: var(--ink-soft); font-size: 0.96rem; line-height: 1.6; }
  .side-block { margin-top: 26px; }
  .side-block .lbl { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clay); margin-bottom: 8px; }
  .side-block a.mail { color: var(--sage-deep); font-size: 0.96rem; font-weight: 500; }
  .side-block a.mail:hover { color: var(--ink); }
  .side-block .when { color: var(--ink-soft); font-size: 0.96rem; }
  .social-row { display: flex; flex-wrap: wrap; gap: 10px; }
  .social-row a { font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.04em; border: 1px solid var(--line-strong); border-radius: 999px; padding: 7px 14px; color: var(--ink-soft); transition: border-color 0.18s ease, color 0.18s ease; }
  .social-row a:hover { border-color: var(--sage-deep); color: var(--sage-deep); }
`

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
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>
            Get in <em>touch</em>
          </h1>
          <p className="lead">
            Have a question, a story to share, or a collaboration idea? We&rsquo;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* form + sidebar */}
      <section className="band alt">
        <div className="wrap">
          <div className="contact-grid">
            {/* Form */}
            <div className="form-card">
              {status === 'success' ? (
                <div className="sent">
                  <span className="mark" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M7 14.5l4.5 4.5L21 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3>Message sent</h3>
                  <p>Thanks for reaching out. We&rsquo;ll get back to you as soon as we can.</p>
                  <button onClick={() => setStatus('idle')} className="again">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind?"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="form-err">Something went wrong. Please try again.</p>
                  )}

                  <div className="submit-row">
                    <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending…' : 'Send message'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="side-card">
              <h3>We&rsquo;d love to hear from you</h3>
              <p>
                Whether it&rsquo;s a listener story, a topic suggestion, a media inquiry, or a
                partnership opportunity — we read every message.
              </p>

              <div className="side-block">
                <p className="lbl">Email</p>
                <a className="mail" href="mailto:hello@emotionalmoney.com.au">
                  hello@emotionalmoney.com.au
                </a>
              </div>

              <div className="side-block">
                <p className="lbl">Follow us</p>
                <div className="social-row">
                  {[
                    { name: 'YouTube', href: SOCIAL_LINKS.youtube },
                    { name: 'Instagram', href: SOCIAL_LINKS.instagram },
                    { name: 'TikTok', href: SOCIAL_LINKS.tiktok },
                    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
                  ].map((link) => (
                    <a key={link.name} href={link.href}>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="side-block">
                <p className="lbl">Response time</p>
                <p className="when">We aim to respond within 2 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
