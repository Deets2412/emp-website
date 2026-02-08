'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800">
            <span className="text-lg font-bold text-gold-500">E</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-navy-800">Emotional</span>
            <span className="text-lg font-bold text-gold-600"> Money</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/quiz"
            className="hidden rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-600 sm:inline-flex"
          >
            Take the Quiz
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-navy-700 hover:bg-navy-50 lg:hidden"
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="border-t border-navy-100 bg-white px-4 pb-4 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 text-base font-medium text-navy-700 transition-colors hover:bg-navy-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-gold-500 px-4 py-2.5 text-center text-base font-semibold text-navy-900 transition-colors hover:bg-gold-600"
          >
            Take the Money Quiz
          </Link>
        </nav>
      )}
    </header>
  )
}
