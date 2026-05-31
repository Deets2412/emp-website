import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EMP Companion App — Your Pocket Coach for Money Emotions',
  description:
    'Track emotions at the moment of decision. Build awareness. See patterns. The EMP Companion App brings the in-the-moment practices into your real life — available to program participants.',
}

const features = [
  {
    title: 'Quick check-in',
    desc: 'Five seconds to log: how you feel, what triggered it, what you decided. Capture the emotional data that matters — right when it happens.',
  },
  {
    title: 'Pattern recognition',
    desc: 'A gentle nudge when a habit shows up — like a tendency to spend more on a Friday evening after work. The app surfaces your own emotional spending patterns over time.',
  },
  {
    title: 'In-moment support',
    desc: 'Feeling the urge to impulse buy? The app offers a guided breath and a short pause exercise before you reach for the card.',
  },
  {
    title: 'See your patterns shift',
    desc: 'Watch how your check-ins change over time — noticing where the urges ease and where steadier choices start to feel more natural, in your own data.',
  },
]

const featureList = [
  'Emotion tracking at point of purchase',
  'Belief & trigger identification',
  'Automated pattern insights',
  'In-app pause exercises',
  'Daily micro-practices',
  'Integration with course platform',
  'Private, secure data',
]

const pageStyles = `
  .feat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .feat { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 34px; transition: border-color 0.2s ease, transform 0.2s ease; }
  .feat:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .feat .glyph { color: var(--sage-deep); margin-bottom: 20px; }
  .feat h3 { font-size: 1.4rem; margin-bottom: 12px; }
  .feat p { font-size: 0.98rem; color: var(--ink-soft); line-height: 1.62; }
  .feat .shot { margin-top: 24px; height: 190px; border-radius: 14px; background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 18%, transparent); display: grid; place-items: center; }
  .feat .shot span { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage-deep); }
  @media (max-width: 820px) { .feat-grid { grid-template-columns: 1fr; } }

  .pill { display: inline-flex; align-items: center; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.13em; text-transform: uppercase; color: var(--sage-deep); background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); border-radius: 999px; padding: 7px 14px; margin-bottom: 22px; }

  .checklist { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 36px 40px; max-width: 640px; margin: 0 auto; }
  .checklist ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
  .checklist li { display: flex; gap: 13px; align-items: flex-start; font-size: 1rem; color: var(--ink-soft); }
  .checklist li .ck { flex: none; margin-top: 2px; color: var(--sage); }

  .fits { background: var(--ink); color: var(--paper); border-radius: 22px; padding: 52px 56px; text-align: center; }
  .fits .eyebrow { color: var(--sage); }
  .fits h2 { color: var(--paper); font-size: clamp(1.7rem, 3vw, 2.3rem); margin: 14px 0 16px; }
  .fits > p { color: oklch(0.86 0.012 80); max-width: 60ch; margin: 0 auto; line-height: 1.65; }
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 36px; }
  .step { border: 1px solid color-mix(in oklch, var(--paper) 22%, transparent); border-radius: 14px; padding: 22px 18px; text-align: left; }
  .step h3 { color: var(--sage); font-size: 1.15rem; margin-bottom: 6px; }
  .step p { color: oklch(0.82 0.012 80); font-size: 0.9rem; line-height: 1.5; }
  @media (max-width: 680px) { .steps { grid-template-columns: 1fr; } .fits { padding: 38px 28px; } }
`

export default function AppPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <span className="pill">Available to program participants</span>
          <h1>
            The EMP <em>companion app</em>
          </h1>
          <p className="lead">
            Your pocket coach for money emotions. Track how you feel at the moment of decision,
            build awareness, and see your patterns — one logged moment at a time.
          </p>
        </div>
      </section>

      {/* feature cards */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What it does</p>
            <h2>Small moments, captured</h2>
          </div>
          <div className="feat-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feat">
                <span className="glyph" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <circle cx="17" cy="17" r="13" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17 10v7l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="shot">
                  <span>App screenshot coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* feature list */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', margin: '0 auto 44px' }}>
            <p className="eyebrow">In the box</p>
            <h2>All features</h2>
          </div>
          <div className="checklist">
            <ul>
              {featureList.map((item) => (
                <li key={item}>
                  <span className="ck" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9.5l3 3 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* how it fits */}
      <section className="band alt">
        <div className="wrap">
          <div className="fits">
            <p className="eyebrow">Where it fits</p>
            <h2>Where the course meets real life</h2>
            <p>
              The course teaches the concepts and practices. The app helps you apply them in the
              moment — when you&apos;re standing in a shop, scrolling online, or feeling the pull of
              an emotional purchase. That&apos;s where the learning has room to take root.
            </p>
            <div className="steps">
              {[
                { step: 'Learn', desc: 'The course introduces the framework' },
                { step: 'Track', desc: 'The app captures real-time moments' },
                { step: 'Notice', desc: 'Patterns become easier to see' },
              ].map((item) => (
                <div key={item.step} className="step">
                  <h3>{item.step}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="band">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <p className="eyebrow">Where to start</p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '14px 0 16px' }}>
              The companion to the program
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px' }}>
              The EMP Companion App is available to program participants. Explore the program, or
              start with the free quiz to discover your Money Persona.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/courses">
                Explore the program
              </Link>
              <Link className="btn btn-ghost" href="/quiz">
                Start with the free quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
