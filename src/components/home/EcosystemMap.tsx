import Link from 'next/link'

const items = [
  {
    price: 'Free',
    title: 'The podcast',
    body: 'Builds awareness and introduces the ideas through weekly conversations.',
    cta: { href: '/episodes', label: 'Start listening' },
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="13" cy="13" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M13 4v3m0 12v3M4 13h3m12 0h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    price: 'Free',
    title: 'Money persona quiz',
    body: 'Identifies your dominant emotional pattern and points you to a starting path.',
    cta: { href: '/quiz', label: 'Take the quiz' },
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M13 8v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    price: '$697–997 AUD',
    title: 'Transformation program',
    body: 'A 12-week structured course with the full emotion-first framework and a companion app.',
    cta: { href: '/courses', label: 'Explore the program' },
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 6h12a2 2 0 0 1 2 2v12H7a2 2 0 0 1-2-2V6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 10h6m-6 4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    price: 'Included',
    title: 'Companion app',
    body: 'Notice how you feel at the moment of a decision. Build awareness. See patterns.',
    cta: { href: '/app', label: 'See features' },
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="8" y="4" width="10" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M12 18h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    price: 'Included',
    title: 'Ongoing community',
    body: 'Alumni support and continued growth beyond the program.',
    cta: null,
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="18" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 21c0-3 2.2-5 5-5m11 5c0-3-2.2-5-5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function EcosystemMap() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper-2)', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[52px] max-w-[62ch]">
          <p className="eyebrow">The ecosystem</p>
          <h2 className="mt-3.5 mb-[18px] font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
            More than a podcast — a way to go deeper
          </h2>
          <p className="lead">
            Everything fits together, from free awareness to a structured, supported program. Start
            wherever you are; there&rsquo;s no pressure to go further than feels right.
          </p>
        </div>
        <div
          className="grid overflow-hidden rounded-[18px] sm:grid-cols-2 lg:grid-cols-5"
          style={{ border: '1px solid var(--color-line)' }}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col gap-3.5 p-8"
              style={{
                background: 'var(--color-paper)',
                borderRight: i < items.length - 1 ? '1px solid var(--color-line)' : 'none',
                borderBottom: '1px solid var(--color-line)',
              }}
            >
              <span style={{ color: 'var(--color-sage-deep)' }} aria-hidden="true">{item.icon}</span>
              <span className="font-mono text-[0.72rem] tracking-[0.06em]" style={{ color: 'var(--color-clay)' }}>
                {item.price}
              </span>
              <h4 className="font-serif text-[1.22rem]" style={{ color: 'var(--color-ink)' }}>{item.title}</h4>
              <p className="flex-1 text-[0.86rem] leading-[1.5]" style={{ color: 'var(--color-ink-soft)' }}>{item.body}</p>
              {item.cta && (
                <Link
                  href={item.cta.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-[0.82rem]"
                  style={{ color: 'var(--color-sage-deep)' }}
                >
                  {item.cta.label} <span className="em-arrow">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
