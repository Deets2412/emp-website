import Link from 'next/link'
import { ALP_STAGES } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="px-8 pb-16 pt-[88px]" style={{ maxWidth: '1180px', margin: '0 auto' }}>
      <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.9fr]">
        {/* Copy */}
        <div>
          <p className="eyebrow">Psychology-led money education</p>
          <h1
            className="mt-[18px] mb-6 font-serif leading-[1.04] tracking-tight"
            style={{ fontSize: 'clamp(2.7rem, 5.6vw, 4.4rem)' }}
          >
            Change how you{' '}
            <em className="font-serif italic" style={{ color: 'var(--color-sage-deep)' }}>feel</em>
            {' '}about money.
          </h1>
          <p className="lead">
            An independent Australian podcast about the emotions underneath our financial choices.
            We explore the psychology of money — gently, without shame — so the way you feel about
            it can shift, and steadier choices follow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href="/quiz" className="em-btn em-btn-primary">Take the free quiz</Link>
            <Link href="/courses" className="em-btn em-btn-ghost">Explore the program</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 border-t pt-6" style={{ borderColor: 'var(--color-line)' }}>
            {[
              'Independent Australian podcast',
              'Grounded in established psychology',
              'Podcast · Course · Companion app',
            ].map((item) => (
              <div key={item} className="flex max-w-[200px] items-start gap-2.5">
                <svg className="mt-0.5 h-[18px] w-[18px] shrink-0" viewBox="0 0 18 18" fill="none" style={{ color: 'var(--color-sage)' }}>
                  <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="9" cy="9" r="2.4" fill="currentColor"/>
                </svg>
                <span className="text-sm leading-snug" style={{ color: 'var(--color-ink-soft)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frame card */}
        <aside
          className="hidden rounded-[20px] p-[30px] lg:block"
          style={{ background: 'var(--color-paper-2)', border: '1px solid var(--color-line)' }}
          aria-label="The four stages of the approach"
        >
          <div className="flex items-center gap-3.5 pb-[22px]" style={{ borderBottom: '1px solid var(--color-line)' }}>
            <div
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
              style={{ border: '1.5px solid var(--color-sage-deep)', color: 'var(--color-sage-deep)' }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M11 6v5l3.2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em]" style={{ color: 'var(--color-ink-faint)' }}>
                Your money story
              </div>
              <div className="font-serif text-[1.18rem]" style={{ color: 'var(--color-ink)' }}>
                Starts with how you feel
              </div>
            </div>
          </div>
          <div className="mt-2">
            {ALP_STAGES.map((stage, i) => (
              <div
                key={stage.key}
                className="flex items-center gap-4 py-[15px]"
                style={{ borderBottom: i < ALP_STAGES.length - 1 ? '1px solid var(--color-line)' : 'none' }}
              >
                <span className="w-[22px] shrink-0 font-mono text-[0.72rem]" style={{ color: 'var(--color-sage-deep)' }}>
                  0{i + 1}
                </span>
                <span className="font-serif text-[1.1rem]" style={{ color: 'var(--color-ink)' }}>{stage.label}</span>
                <span className="ml-auto text-[0.8rem]" style={{ color: 'var(--color-ink-faint)' }}>{stage.description}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
