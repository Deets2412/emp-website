'use client'

import { SOCIAL_LINKS } from '@/lib/constants'

const platforms = [
  {
    name: 'YouTube',
    sub: 'Watch full video episodes',
    href: SOCIAL_LINKS.youtube,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4.5" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8.5 7.5l4 2.5-4 2.5v-5Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Spotify',
    sub: 'Listen anywhere',
    href: SOCIAL_LINKS.spotify,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 8.5c3-1 6-.6 8 .6M6.5 11c2.5-.7 5-.4 6.6.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Apple Podcasts',
    sub: 'Subscribe on Apple',
    href: SOCIAL_LINKS.applePodcasts,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="8" y="6" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 13.5c.8.9 1.9 1.4 3 1.4s2.2-.5 3-1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function PlatformLinks() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper-2)', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-7 max-w-[62ch]">
          <p className="eyebrow">Listen wherever you are</p>
          <h2 className="mt-3.5 font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
            Watch on YouTube, or take us with you
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="flex items-center gap-4 rounded-2xl px-6 py-5 transition-colors"
              style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-line)')}
            >
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px]"
                style={{
                  background: 'var(--color-paper-2)',
                  border: '1px solid var(--color-line)',
                  color: 'var(--color-sage-deep)',
                }}
                aria-hidden="true"
              >
                {p.icon}
              </div>
              <div>
                <div className="font-serif text-[1rem]" style={{ color: 'var(--color-ink)' }}>{p.name}</div>
                <div className="text-[0.82rem]" style={{ color: 'var(--color-ink-faint)' }}>{p.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
