import Link from 'next/link'
import { PERSONAS } from '@/lib/constants'

const personaSvgs: Record<string, React.ReactNode> = {
  'balanced-builder': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="8" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 26V18m6 8v-12m6 12v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'anxious-protector': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 7l11 4v8c0 7-5 11-11 14-6-3-11-7-11-14v-8l11-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  'avoidant-free-spirit': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M10 22c4-4 8 4 12 0s8-4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2" fill="currentColor"/>
      <circle cx="26" cy="26" r="2" fill="currentColor"/>
    </svg>
  ),
  'wounded-warrior': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 6v28M6 20h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  'perfectionist-analyzer': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="17" cy="17" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M24 24l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

export function QuizCTA() {
  const personaList = Object.entries(PERSONAS)

  return (
    <section className="py-24" style={{ background: 'var(--color-paper)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[52px] max-w-[64ch]">
          <p className="eyebrow">Money personas</p>
          <h2 className="mt-3.5 mb-[18px] font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
            What&rsquo;s your emotional relationship with money?
          </h2>
          <p className="lead">
            Most of us have a dominant emotional pattern with money. Understanding yours is the first
            step in the work — and a gentle way in. The free quiz takes about three minutes.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personaList.map(([slug, persona]) => (
            <div
              key={slug}
              className="flex flex-col gap-3.5 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)' }}
            >
              <span style={{ color: 'var(--color-sage-deep)' }} aria-hidden="true">
                {personaSvgs[slug]}
              </span>
              <h4 className="font-serif text-[1.32rem]" style={{ color: 'var(--color-ink)' }}>{persona.name}</h4>
              <p className="text-[0.9rem]" style={{ color: 'var(--color-ink-soft)' }}>{persona.tagline}</p>
            </div>
          ))}
          {/* Quiz invite card */}
          <div
            className="flex flex-col justify-between gap-5 rounded-2xl p-7"
            style={{ background: 'var(--color-ink)', border: '1px solid var(--color-ink)' }}
          >
            <div>
              <span style={{ color: 'var(--color-sage)' }} aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M16 16a4 4 0 1 1 5 4c-1 .7-1 1.3-1 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="20" cy="27" r="1.4" fill="currentColor"/>
                </svg>
              </span>
              <h4 className="mt-3.5 font-serif text-[1.32rem]" style={{ color: 'var(--color-paper)' }}>
                Which one are you?
              </h4>
              <p className="mt-2 text-[0.9rem]" style={{ color: 'oklch(0.82 0.012 80)' }}>
                Take the free quiz and get a personalised episode playlist for your pattern.
              </p>
            </div>
            <Link
              href="/quiz"
              className="em-btn em-btn-sm self-start"
              style={{ borderColor: 'oklch(0.5 0.01 80)', color: 'var(--color-paper)', background: 'transparent' }}
            >
              Take the free quiz <span className="em-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
