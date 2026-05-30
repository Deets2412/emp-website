'use client'

const cards = [
  {
    title: 'Grounded in psychology',
    body: 'An emotion-first approach drawing on established psychology — including CBT, ACT, IFS and attachment theory — to work with the emotions beneath financial behaviour, not just the behaviour itself.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="17" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="17" r="1.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Second-order change',
    body: "We don't just look at what you do with money — we explore how you feel about it. When the feeling shifts, more aligned choices tend to follow, without the willpower battle.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M6 22c4-8 8-8 11 0s7 8 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6" cy="22" r="1.8" fill="currentColor"/>
        <circle cx="28" cy="11" r="1.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Made to last',
    body: 'Not budgeting spreadsheets or surface-level affirmations. A calmer, more honest look at your relationship with money — from the inside out, so changes are more likely to stick.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 29C12 24 7 20 7 14a10 10 0 0 1 20 0c0 6-5 10-10 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="17" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export function ValueProposition() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper-2)', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[52px] max-w-[62ch]">
          <p className="eyebrow">Why emotions</p>
          <h2 className="mt-3.5 mb-[18px] font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
            Why your feelings about money matter
          </h2>
          <p className="lead">
            You usually know what you &ldquo;should&rdquo; do with money. This is about understanding why that
            knowledge doesn&rsquo;t translate into action — and changing it gently, at the level of feeling.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--color-paper)',
                border: '1px solid var(--color-line)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-line-strong)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-line)')}
            >
              <span className="mb-[22px] block" style={{ color: 'var(--color-sage-deep)' }} aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="mb-3 font-serif text-[1.4rem]" style={{ color: 'var(--color-ink)' }}>{card.title}</h3>
              <p className="text-[0.98rem] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
