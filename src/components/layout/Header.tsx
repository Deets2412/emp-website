'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'color-mix(in oklch, var(--color-paper) 88%, transparent)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-6 px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '1.28rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}
          aria-label="Emotional Money home"
        >
          <span
            className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full text-base"
            style={{ border: '1.5px solid var(--color-ink)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            aria-hidden="true"
          >E</span>
          <span className="hidden sm:block">Emotional Money</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--color-ink)]"
              style={{ fontSize: '0.93rem', color: 'var(--color-ink-soft)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <Link href="/episodes" className="em-btn em-btn-ghost em-btn-sm hidden lg:inline-flex">
            Listen
          </Link>
          <Link href="/quiz" className="em-btn em-btn-primary em-btn-sm hidden sm:inline-flex">
            Take the quiz
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-9 w-9 place-items-center rounded-md lg:hidden"
            style={{ color: 'var(--color-ink)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="px-6 pb-5 pt-2 lg:hidden"
          style={{ borderTop: '1px solid var(--color-line)', background: 'var(--color-paper)' }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-base"
              style={{ color: 'var(--color-ink-soft)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            onClick={() => setMobileOpen(false)}
            className="em-btn em-btn-primary mt-4 w-full justify-center"
          >
            Take the quiz
          </Link>
        </nav>
      )}
    </header>
  )
}
