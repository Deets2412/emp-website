import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSONAS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Discover Your Money Persona',
  description:
    'Take our free 3-minute quiz to discover your emotional money pattern. Understand why you do what you do with money — and get a personalised action plan.',
}

const personaList = Object.values(PERSONAS)

const pageStyles = `
  .tagstrip { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clay); border: 1px solid color-mix(in oklch, var(--clay) 35%, transparent); background: var(--clay-wash); padding: 6px 14px; border-radius: 999px; margin-bottom: 22px; }
  .tagstrip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--clay); }

  .discover { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 40px; }
  .discover .dgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 28px; margin-top: 24px; }
  .discover .ditem { display: flex; gap: 12px; align-items: flex-start; font-size: 0.98rem; color: var(--ink-soft); }
  .discover .ditem .tick { flex: none; margin-top: 2px; color: var(--sage); }
  @media (max-width: 680px) { .discover { padding: 30px 26px; } .discover .dgrid { grid-template-columns: 1fr; } }

  .persona-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-top: 28px; }
  .pcard { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 26px 18px; text-align: center; transition: border-color 0.2s ease, transform 0.2s ease; }
  .pcard:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .pcard .emoji { font-size: 2rem; line-height: 1; }
  .pcard h3 { font-family: var(--serif); font-size: 1.05rem; margin: 14px 0 6px; }
  .pcard p { font-size: 0.84rem; color: var(--ink-soft); line-height: 1.45; }
  @media (max-width: 920px) { .persona-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 480px) { .persona-grid { grid-template-columns: 1fr; } }

  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .step { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 32px 30px; }
  .step .sn { font-family: var(--serif); font-size: 2.4rem; color: var(--sage-deep); line-height: 1; }
  .step h3 { font-size: 1.3rem; margin: 12px 0 8px; }
  .step p { font-size: 0.94rem; color: var(--ink-soft); line-height: 1.6; }
  @media (max-width: 820px) { .steps { grid-template-columns: 1fr; } }

  .quiz-cta { text-align: center; max-width: 600px; margin: 0 auto; }
  .quiz-cta .note { color: var(--ink-faint); font-size: 0.9rem; margin-top: 18px; line-height: 1.55; }
`

const discoverItems = [
  'Your primary Money Persona and what it means',
  'Why you do what you do with money',
  'Your specific strengths and challenges',
  'A personalised action plan for growth',
]

const steps = [
  {
    step: '1',
    title: 'Answer 20 Questions',
    desc: 'Go with your gut — first instinct is usually right.',
  },
  {
    step: '2',
    title: 'Get Your Persona',
    desc: 'Discover which of the five emotional money patterns fits you best.',
  },
  {
    step: '3',
    title: 'Get Your Action Plan',
    desc: 'Receive personalised strategies, mantras, and growth practices.',
  },
]

export default function QuizLandingPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <span className="tagstrip">
            <i className="dot" /> Free · 3 minutes · Instant results
          </span>
          <h1>
            Discover your <em>Money Persona</em>
          </h1>
          <p className="lead">
            Everyone has a unique emotional relationship with money — shaped by childhood,
            relationships, and life experience. This quiz reveals yours.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/quiz/questions">
              Start the quiz <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/approach">
              See the approach
            </Link>
          </div>
        </div>
      </section>

      {/* what you'll discover */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What you get</p>
            <h2>What you&rsquo;ll discover</h2>
          </div>
          <div className="discover">
            <p style={{ color: 'var(--ink-soft)', fontSize: '0.98rem', maxWidth: '60ch' }}>
              A short, reflective quiz that surfaces the emotional pattern beneath your
              money habits — and what to do with it.
            </p>
            <div className="dgrid">
              {discoverItems.map((item) => (
                <div key={item} className="ditem">
                  <span className="tick" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* persona previews */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The five patterns</p>
            <h2>The five Money Personas</h2>
          </div>
          <div className="persona-grid">
            {personaList.map((persona) => (
              <div key={persona.name} className="pcard">
                <span className="emoji" aria-hidden="true">{persona.emoji}</span>
                <h3>{persona.name}</h3>
                <p>{persona.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The process</p>
            <h2>How it works</h2>
          </div>
          <div className="steps">
            {steps.map((item) => (
              <div key={item.step} className="step">
                <div className="sn">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="band">
        <div className="wrap">
          <div className="quiz-cta">
            <p className="eyebrow">Ready when you are</p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '14px 0 16px' }}>
              Find your Money Persona
            </h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              No sign-up required. Your results are instant.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link className="btn btn-primary" href="/quiz/questions">
                Start the quiz <span className="arrow">→</span>
              </Link>
            </div>
            <p className="note">
              A free, 3-minute reflection on the emotional patterns beneath how you relate to money.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
