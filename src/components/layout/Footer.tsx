import Link from 'next/link'
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-700">
                <span className="text-lg font-bold text-gold-500">E</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Emotional</span>
                <span className="text-lg font-bold text-gold-500"> Money</span>
              </div>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-navy-400">
              Exploring the emotions that drive your financial decisions. Because how you feel about money matters more than you think.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-400">
              Explore
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-gold-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/alp-methodology"
                  className="text-sm text-navy-300 transition-colors hover:text-gold-500"
                >
                  ALP Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/app"
                  className="text-sm text-navy-300 transition-colors hover:text-gold-500"
                >
                  Companion App
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate"
                  className="text-sm text-navy-300 transition-colors hover:text-gold-500"
                >
                  Corporate
                </Link>
              </li>
            </ul>
          </div>

          {/* Listen On */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-400">
              Listen On
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={SOCIAL_LINKS.youtube} className="text-sm text-navy-300 transition-colors hover:text-gold-500">
                  YouTube
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.spotify} className="text-sm text-navy-300 transition-colors hover:text-gold-500">
                  Spotify
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.applePodcasts} className="text-sm text-navy-300 transition-colors hover:text-gold-500">
                  Apple Podcasts
                </a>
              </li>
            </ul>
            <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-navy-400">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={SOCIAL_LINKS.instagram} className="text-sm text-navy-300 transition-colors hover:text-gold-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.tiktok} className="text-sm text-navy-300 transition-colors hover:text-gold-500">
                  TikTok
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.linkedin} className="text-sm text-navy-300 transition-colors hover:text-gold-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-400">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-navy-400">
              Weekly insights on understanding your emotional relationship with money.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* Compliance Disclaimers */}
        <div className="mt-12 border-t border-navy-800 pt-8">
          <div className="space-y-3 text-xs leading-relaxed text-navy-600">
            <p>
              <strong className="text-navy-500">Not Financial Advice:</strong> Content on this site is for educational and entertainment purposes only. Nothing here constitutes financial, investment, tax, or legal advice. Please consult a qualified professional before making financial decisions.
            </p>
            <p>
              <strong className="text-navy-500">Independence:</strong> Emotional Money is independently produced and is not affiliated with, endorsed by, or associated with Morgans Financial or any financial institution. Views expressed are personal and independent.
            </p>
            <p>
              <strong className="text-navy-500">Not Therapy:</strong> This content is not a substitute for professional mental health support. If you are experiencing financial stress or mental health concerns, please seek help from a qualified professional.
            </p>
            <p>
              <strong className="text-navy-500">Editorial Independence:</strong> All opinions expressed are those of the hosts in their personal capacity and do not represent the views of any employer, licensee, or professional body.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <Link href="/privacy" className="text-xs text-navy-500 transition-colors hover:text-navy-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-navy-500 transition-colors hover:text-navy-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
