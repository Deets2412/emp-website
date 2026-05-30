import Link from 'next/link'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export function Footer() {
  return (
    <footer style={{ background: 'var(--color-paper-2)', borderTop: '1px solid var(--color-line)', paddingTop: '72px', paddingBottom: '40px' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.28rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}
            >
              <span
                className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full text-base"
                style={{ border: '1.5px solid var(--color-ink)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                aria-hidden="true"
              >E</span>
              Emotional Money
            </Link>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
              Exploring the emotions that drive our financial decisions — because how you feel about money matters more than you might think.
            </p>
          </div>

          <div>
            <h5 className="mb-4 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--color-ink-faint)' }}>
              Explore
            </h5>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--color-ink-faint)' }}>
              Listen on
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href={SOCIAL_LINKS.youtube} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>YouTube</a></li>
              <li><a href={SOCIAL_LINKS.spotify} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>Spotify</a></li>
              <li><a href={SOCIAL_LINKS.applePodcasts} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>Apple Podcasts</a></li>
            </ul>
            <h5 className="mb-4 mt-6 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--color-ink-faint)' }}>
              Follow
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href={SOCIAL_LINKS.instagram} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>Instagram</a></li>
              <li><a href={SOCIAL_LINKS.tiktok} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>TikTok</a></li>
              <li><a href={SOCIAL_LINKS.linkedin} className="text-sm transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-soft)' }}>LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--color-ink-faint)' }}>
              Stay connected
            </h5>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
              Weekly reflections on understanding your emotional relationship with money.
            </p>
            <NewsletterForm variant="new" />
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-14 grid gap-y-5 gap-x-10 border-t pt-8 sm:grid-cols-2" style={{ borderColor: 'var(--color-line)' }}>
          {[
            {
              title: 'General information, not financial advice.',
              body: 'Emotional Money is educational and entertainment content about the psychology of money. It is general in nature, does not consider your personal objectives or circumstances, and is not financial product advice. Seek advice from a licensed professional before making financial decisions.',
            },
            {
              title: 'Independent & personal.',
              body: "This is an independent personal project. It is not affiliated with, endorsed by, or produced on behalf of any employer or financial services licensee. All views expressed are the hosts' own.",
            },
            {
              title: 'Not therapy.',
              body: 'This content is not therapy and not a substitute for professional mental-health care. If you are struggling, please speak with a qualified practitioner. In Australia, you can contact Lifeline on 13 11 14.',
            },
            {
              title: 'Editorial independence.',
              body: 'Where we mention products or services, any affiliate or sponsorship relationships are disclosed. Our hosts share personal opinions and remain editorially independent.',
            },
          ].map((d) => (
            <div key={d.title} className="flex gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-clay)' }}>
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M8 5v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="8" cy="11" r="0.8" fill="currentColor"/>
              </svg>
              <p className="text-[0.8rem] leading-relaxed" style={{ color: 'var(--color-ink-faint)' }}>
                <strong style={{ color: 'var(--color-ink-soft)', fontWeight: 500 }}>{d.title}</strong>{' '}{d.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6" style={{ borderColor: 'var(--color-line)' }}>
          <p className="text-[0.82rem]" style={{ color: 'var(--color-ink-faint)' }}>
            &copy; {new Date().getFullYear()} Emotional Money. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[0.82rem] transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-faint)' }}>Privacy Policy</Link>
            <Link href="/contact" className="text-[0.82rem] transition-colors hover:text-[var(--color-ink)]" style={{ color: 'var(--color-ink-faint)' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
