import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — The EMP Ecosystem',
  description:
    'From free podcast to a structured program. See how the Emotional Money ecosystem fits together — podcast, quiz, course, app, and community.',
}

const journeySteps = [
  {
    number: '1',
    title: 'Listen to the Podcast',
    price: 'Free',
    description:
      'Start building awareness through weekly conversations about the emotional side of money. David and Emme explore the feelings underneath our financial habits in an accessible, shame-free format.',
    details: [
      'New episodes every week',
      'Available on YouTube, Spotify, Apple Podcasts',
      'Each episode mapped to a stage of the approach',
      'Persona-specific episode recommendations',
    ],
    cta: { href: '/episodes', label: 'Browse Episodes' },
  },
  {
    number: '2',
    title: 'Discover Your Money Persona',
    price: 'Free',
    description:
      'Take our 3-minute quiz to identify which of the five emotional money patterns drives your decisions. Get personalised insights and episode recommendations.',
    details: [
      '20 questions, 3 minutes',
      'Instant personalised results',
      'Custom episode playlist',
      'Personalised growth strategies',
    ],
    cta: { href: '/quiz', label: 'Take the Quiz' },
  },
  {
    number: '3',
    title: 'Join the Program',
    price: '$697–997',
    description:
      'Go deeper with 12 weeks of structured, emotion-first learning. An interactive course platform with embedded exercises, live sessions, and community support.',
    details: [
      '12-week interactive course',
      'Live weekly sessions with hosts',
      'Private cohort community',
      '50+ guided exercises and workbook',
    ],
    cta: { href: '/courses', label: 'Explore the Program' },
  },
  {
    number: '4',
    title: 'Use the Companion App',
    price: 'Included with Program',
    description:
      'Bring your learning into real life. Notice your emotions at the point of a decision, spot your own triggers over time, and practise simple pause techniques when you need them most.',
    details: [
      'Real-time emotion tracking',
      'Automated pattern insights',
      'In-moment pause exercises',
      'Progress visualisation',
    ],
    cta: { href: '/app', label: 'See App Features' },
  },
  {
    number: '5',
    title: 'Grow with the Community',
    price: 'Included',
    description:
      'Continue your journey with alumni support, advanced content, and a community of people who understand the emotional side of money.',
    details: [
      '6-month alumni support',
      'Advanced content drops',
      'Peer accountability',
      'Ongoing growth resources',
    ],
    cta: null,
  },
]

const pageStyles = `
  .journey { display: flex; flex-direction: column; gap: 20px; max-width: 820px; margin: 0 auto; }
  .jrow { position: relative; }
  .jrow .conn { position: absolute; left: 39px; top: 88px; bottom: -20px; width: 1px; background: var(--line); }
  .jcard { position: relative; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 32px; transition: border-color 0.2s ease, transform 0.2s ease; }
  .jcard:hover { border-color: var(--line-strong); transform: translateY(-2px); }
  .jhead { display: flex; align-items: flex-start; gap: 24px; }
  .jnum { flex: none; width: 56px; height: 56px; border-radius: 14px; background: var(--sage-wash); color: var(--sage-deep); display: grid; place-items: center; font-family: var(--serif); font-size: 1.7rem; line-height: 1; border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); }
  .jbody { flex: 1; }
  .jtitle { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
  .jcard h3 { font-size: 1.45rem; }
  .jprice { font-family: var(--mono); font-size: 0.64rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--clay); border: 1px solid color-mix(in oklch, var(--clay) 35%, transparent); background: var(--clay-wash); padding: 5px 11px; border-radius: 999px; }
  .jcard .desc { font-size: 0.98rem; color: var(--ink-soft); line-height: 1.62; margin: 14px 0 18px; }
  .jk { list-style: none; margin: 0 0 18px; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 11px; }
  .jk li { display: flex; gap: 10px; align-items: flex-start; font-size: 0.9rem; color: var(--ink-soft); }
  .jk li .tick { flex: none; margin-top: 2px; color: var(--sage); }
  .jcta { display: inline-flex; align-items: center; gap: 0.5em; font-size: 0.92rem; font-weight: 500; color: var(--sage-deep); }
  @media (max-width: 600px) {
    .jhead { gap: 18px; }
    .jrow .conn { left: 31px; }
    .jnum { width: 44px; height: 44px; font-size: 1.4rem; }
    .jk { grid-template-columns: 1fr; }
  }

  .corp { background: var(--ink); color: var(--paper); border-radius: 24px; padding: 56px; text-align: center; }
  .corp .eyebrow { color: var(--sage); }
  .corp h2 { color: var(--paper); font-size: clamp(1.8rem, 3.2vw, 2.4rem); margin: 14px auto 16px; max-width: 22ch; }
  .corp p { color: oklch(0.82 0.012 80); max-width: 52ch; margin: 0 auto 28px; }
  .corp .btn-primary { background: var(--sage); border-color: var(--sage); color: oklch(0.2 0.02 150); }
  .corp .btn-primary:hover { background: var(--paper); border-color: var(--paper); color: var(--ink); }
  @media (max-width: 560px) { .corp { padding: 40px 26px; } }
`

const startOptions = [
  {
    title: 'Just Curious',
    desc: 'Start with the podcast. Listen to a few episodes and see if our approach resonates with you.',
    cta: { href: '/episodes', label: 'Browse Episodes' },
  },
  {
    title: 'Ready to Understand',
    desc: 'Take the quiz to discover your Money Persona. Get personalised insights in 3 minutes.',
    cta: { href: '/quiz', label: 'Take the Quiz' },
  },
  {
    title: 'Ready to Go Deeper',
    desc: 'Step into the Program for the full, structured, emotion-first experience.',
    cta: { href: '/courses', label: 'Explore the Program' },
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h1>
            How it all fits <em>together</em>
          </h1>
          <p className="lead">
            From free awareness to deeper, supported learning. Every piece of the Emotional Money
            ecosystem connects to the next — meeting you exactly where you are.
          </p>
        </div>
      </section>

      {/* journey */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The path</p>
            <h2>Five steps, one journey</h2>
          </div>
          <div className="journey">
            {journeySteps.map((step, i) => (
              <div key={step.number} className="jrow">
                {i < journeySteps.length - 1 && <div className="conn" aria-hidden="true" />}
                <div className="jcard">
                  <div className="jhead">
                    <div className="jnum" aria-hidden="true">{step.number}</div>
                    <div className="jbody">
                      <div className="jtitle">
                        <h3>{step.title}</h3>
                        <span className="jprice">{step.price}</span>
                      </div>
                      <p className="desc">{step.description}</p>
                      <ul className="jk">
                        {step.details.map((detail) => (
                          <li key={detail}>
                            <span className="tick" aria-hidden="true">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      {step.cta && (
                        <Link href={step.cta.href} className="jcta">
                          {step.cta.label} <span className="arrow">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* where to start */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Find your entry point</p>
            <h2>Where should you start?</h2>
          </div>
          <div className="cards-3">
            {startOptions.map((option) => (
              <div key={option.title} className="vcard">
                <h3>{option.title}</h3>
                <p>{option.desc}</p>
                <Link href={option.cta.href} className="jcta" style={{ marginTop: '16px' }}>
                  {option.cta.label} <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* corporate */}
      <section className="band alt">
        <div className="wrap">
          <div className="corp">
            <p className="eyebrow">For organisations</p>
            <h2>Bringing this to your team</h2>
            <p>
              We also offer psychology-informed financial wellbeing workshops for organisations —
              grounded in established approaches and built around the same emotion-first lens.
            </p>
            <Link className="btn btn-primary" href="/corporate">
              Learn about corporate programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
