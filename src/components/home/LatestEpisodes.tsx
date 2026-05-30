import Link from 'next/link'

const episodes = [
  {
    slug: 'your-money-story',
    num: 1,
    duration: 38,
    stage: 'Awareness',
    pillar: 'Emotional deep dives',
    title: 'Your Money Story — how childhood messages shape your financial life',
    body: 'The messages we absorb as children quietly influence the decisions we make as adults. David and Emme explore how early money memories still run the show.',
  },
  {
    slug: 'five-money-personas',
    num: 2,
    duration: 42,
    stage: 'Awareness',
    pillar: 'Money personalities',
    title: 'The Five Money Personas — which one are you?',
    body: 'Anxious Protector? Avoidant Free Spirit? Wounded Warrior? We unpack the five emotional patterns that quietly define our relationship with money.',
  },
  {
    slug: 'breakup-spending',
    num: 3,
    duration: 35,
    stage: 'Examination',
    pillar: 'Real life money',
    title: 'Breakup Spending — why heartbreak hits your wallet',
    body: 'After a breakup, many of us cope through spending. David and Emme unpack the emotional mechanics of retail therapy — and how to catch yourself first.',
  },
]

export function LatestEpisodes() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper-2)', borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[42px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Latest episodes</p>
            <h2 className="mt-3.5 font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
              Conversations about the emotional side of money
            </h2>
          </div>
          <Link href="/episodes" className="em-btn em-btn-ghost em-btn-sm hidden sm:inline-flex">
            View all episodes <span className="em-arrow">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/episodes/${ep.slug}`}
              className="flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)' }}
            >
              <div
                className="flex items-center gap-2.5 px-6 pt-5 font-mono text-[0.68rem] uppercase tracking-[0.08em]"
                style={{ color: 'var(--color-ink-faint)' }}
              >
                <span>EP {ep.num}</span>
                <span>·</span>
                <span>{ep.duration} min</span>
                <span
                  className="rounded-full px-2.5 py-1 text-[0.66rem] tracking-[0.06em]"
                  style={{ background: 'var(--color-sage-wash)', color: 'var(--color-sage-deep)' }}
                >
                  {ep.stage}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-3.5">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em]" style={{ color: 'var(--color-clay)' }}>
                  {ep.pillar}
                </span>
                <h3 className="font-serif text-[1.3rem] leading-[1.18]" style={{ color: 'var(--color-ink)' }}>{ep.title}</h3>
                <p className="text-[0.92rem] leading-[1.55]" style={{ color: 'var(--color-ink-soft)' }}>{ep.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[0.85rem]" style={{ color: 'var(--color-sage-deep)' }}>
                  Listen <span className="em-arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/episodes" className="mt-8 block text-center text-sm font-semibold sm:hidden" style={{ color: 'var(--color-sage-deep)' }}>
          View all episodes →
        </Link>
      </div>
    </section>
  )
}
