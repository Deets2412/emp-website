import Link from 'next/link'

const points = [
  {
    title: 'Beneath the surface',
    body: 'Gently exploring the subconscious beliefs that quietly shape financial decisions — the ones we absorbed without knowing.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2.5 3"/>
        <circle cx="13" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: 'Second-order change',
    body: 'Instead of forcing yourself to stop overspending, the aim is to genuinely stop wanting to — change from the feeling outward.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 16c3-7 6-7 8 0M13 16c3-7 6-7 8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Emotion-first',
    body: 'Notice how you feel about money first. Understanding the feeling is what makes the behaviour easier to change.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 21C9 17 5 14 5 10a5 5 0 0 1 8-2 5 5 0 0 1 8 2c0 4-4 7-8 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'No shame, no force',
    body: 'Your money patterns made sense given what you learned. The work is to update the learning — not punish yourself for it.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9 13l2.6 2.6L17 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function ALPMethodology() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Copy */}
          <div>
            <p className="eyebrow">The approach</p>
            <h2 className="mt-3.5 mb-[18px] font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
              The thinking behind the work
            </h2>
            <p className="lead">
              Most money advice focuses on behaviour (&ldquo;just budget&rdquo;). We start with the emotions
              driving it — exploring the deep-seated patterns underneath, and what it takes to genuinely
              feel differently about money.
            </p>
            <Link
              href="/approach"
              className="mt-6 inline-flex items-center gap-2 border-b pb-0.5 font-medium transition-colors"
              style={{
                color: 'var(--color-sage-deep)',
                borderColor: 'color-mix(in oklch, var(--color-sage-deep) 40%, transparent)',
              }}
            >
              More about our approach <span className="em-arrow">→</span>
            </Link>
          </div>

          {/* 2×2 grid */}
          <div
            className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'var(--color-line)', border: '1px solid var(--color-line)' }}
          >
            {points.map((point) => (
              <div key={point.title} className="p-7" style={{ background: 'var(--color-paper)' }}>
                <span className="mb-4 block" style={{ color: 'var(--color-sage-deep)' }} aria-hidden="true">
                  {point.icon}
                </span>
                <h4 className="mb-2 font-serif text-[1.18rem]" style={{ color: 'var(--color-ink)' }}>{point.title}</h4>
                <p className="text-[0.92rem] leading-[1.55]" style={{ color: 'var(--color-ink-soft)' }}>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
