import type { Metadata } from 'next'
import Link from 'next/link'
import { WaitlistForm } from '@/components/shared/WaitlistForm'

export const metadata: Metadata = {
  title: 'The Program',
  description:
    'A 12-week course in how you feel about money. A psychology-led program pairing interactive learning with a companion app for noticing your emotions in the moment.',
}

const pageStyles = `
  .tagstrip { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clay); border: 1px solid color-mix(in oklch, var(--clay) 35%, transparent); background: var(--clay-wash); padding: 6px 14px; border-radius: 999px; margin-bottom: 22px; }
  .tagstrip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--clay); }

  .feature { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .fblock { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 34px; position: relative; }
  .fblock.span2 { grid-column: 1 / -1; }
  .fblock .glyph { color: var(--sage-deep); margin-bottom: 18px; }
  .fblock h3 { font-size: 1.45rem; margin-bottom: 16px; }
  .fblock .badge { position: absolute; top: 24px; right: 24px; font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.1em; padding: 4px 9px; border-radius: 999px; background: var(--sage-wash); color: var(--sage-deep); }
  .ck { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; }
  .ck li { display: flex; gap: 11px; align-items: flex-start; font-size: 0.96rem; color: var(--ink-soft); }
  .ck li .tick { flex: none; margin-top: 3px; color: var(--sage); }

  .stages-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: var(--line); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-top: 24px; }
  .stg { background: var(--paper); padding: 24px 22px; }
  .stg .wk { font-family: var(--mono); font-size: 0.64rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--clay); }
  .stg h4 { font-size: 1.2rem; margin: 8px 0 8px; }
  .stg p { font-size: 0.86rem; color: var(--ink-soft); line-height: 1.5; }
  @media (max-width: 820px) { .stages-row { grid-template-columns: 1fr 1fr; } .feature { grid-template-columns: 1fr; } }

  .twocol { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  @media (max-width: 820px) { .twocol { grid-template-columns: 1fr; gap: 32px; } }

  .pricing { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 840px; }
  .tier { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 38px 34px; display: flex; flex-direction: column; gap: 8px; }
  .tier.featured { border-color: var(--sage-deep); box-shadow: 0 0 0 1px var(--sage-deep); }
  .tier .rec { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage-deep); }
  .tier h3 { font-size: 1.5rem; }
  .tier .price { font-family: var(--serif); font-size: 2.6rem; line-height: 1; margin: 8px 0 4px; }
  .tier .price small { font-size: 0.9rem; color: var(--ink-faint); font-family: var(--mono); letter-spacing: 0.04em; }
  .tier p.desc { font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 14px; }
  .tier .btn { margin-top: auto; align-self: flex-start; }
  @media (max-width: 680px) { .pricing { grid-template-columns: 1fr; } }

  .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .compare .col { border: 1px solid var(--line); border-radius: 16px; padding: 30px 28px; background: var(--paper); }
  .compare .col h4 { font-size: 1.2rem; margin-bottom: 16px; }
  .xk { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
  .xk li { display: flex; gap: 11px; align-items: flex-start; font-size: 0.94rem; color: var(--ink-soft); }
  .xk li .m { flex: none; margin-top: 3px; }
  .m.no { color: var(--clay); } .m.yes { color: var(--sage); }
  @media (max-width: 680px) { .compare { grid-template-columns: 1fr; } }

  .faq { max-width: 760px; }
  details.qa { border-bottom: 1px solid var(--line); padding: 22px 0; }
  details.qa summary { font-family: var(--serif); font-size: 1.18rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; gap: 16px; align-items: center; }
  details.qa summary::-webkit-details-marker { display: none; }
  details.qa summary .pm { font-family: var(--mono); color: var(--sage-deep); transition: transform 0.2s ease; flex: none; }
  details.qa[open] summary .pm { transform: rotate(45deg); }
  details.qa p { font-size: 0.96rem; color: var(--ink-soft); line-height: 1.6; margin-top: 14px; }

  .note-band { background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); border-radius: 14px; padding: 22px 26px; font-size: 0.9rem; color: var(--sage-deep); line-height: 1.55; margin-top: 28px; }

  .waitlist-card { background: var(--ink); color: var(--paper); border-radius: 24px; padding: 60px; text-align: center; }
  .waitlist-card h2 { color: var(--paper); font-size: clamp(1.9rem, 3.4vw, 2.7rem); margin: 14px auto 16px; max-width: 20ch; }
  .waitlist-card p { color: oklch(0.82 0.012 80); max-width: 48ch; margin: 0 auto 28px; }
  .waitlist-card form { display: flex; gap: 10px; max-width: 480px; margin: 0 auto; flex-wrap: wrap; }
  .waitlist-card input { flex: 1; min-width: 200px; padding: 0.95em 1.2em; border-radius: 999px; border: 1px solid oklch(0.45 0.01 80); background: oklch(0.32 0.012 70); color: var(--paper); font-family: var(--sans); font-size: 0.95rem; }
  .waitlist-card input::placeholder { color: oklch(0.66 0.01 80); }
  .waitlist-card .btn-primary { background: var(--sage); border-color: var(--sage); color: oklch(0.2 0.02 150); }
  .waitlist-card .btn-primary:hover { background: var(--paper); border-color: var(--paper); }
  @media (max-width: 560px) { .waitlist-card { padding: 40px 24px; } }
`

const faqs = [
  {
    q: 'Is this therapy?',
    a: 'No. This is psychoeducational content using established psychological frameworks. It is not therapy and not a substitute for professional mental-health care. If you’re experiencing depression, anxiety or the effects of trauma, please work with a licensed practitioner — this program can sit alongside that, not replace it.',
    open: true,
  },
  {
    q: 'Is this financial advice?',
    a: 'No. Nothing here is personal financial advice or a product recommendation. It’s general education about the emotional side of money. For decisions about your finances, please speak with a licensed financial adviser.',
  },
  {
    q: 'Do I need the app?',
    a: 'The app is included and recommended — it’s what helps the learning land in real life, by letting you notice feelings at the moment of a decision. It’s optional, though; the course stands on its own.',
  },
  {
    q: 'What if I miss a week?',
    a: 'All content is recorded and you keep lifetime access. Live sessions are valuable but optional, and you can catch up at your own pace.',
  },
  {
    q: 'What do I need to take part?',
    a: 'A computer or tablet for the course videos, and a smartphone (iOS or Android) for the companion app.',
  },
]

export default function CoursesPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <span className="tagstrip">
            <i className="dot" /> Founding cohort · limited places
          </span>
          <h1>
            A 12-week course in how you <em>feel</em> about money
          </h1>
          <p className="lead">
            Not another budgeting course. A structured, psychology-led program that pairs
            interactive learning with a companion app for noticing your emotions in the moment —
            built around an emotion-first approach to money.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#waitlist">Join the waitlist</a>
            <Link className="btn btn-ghost" href="/approach">See the approach</Link>
          </div>
        </div>
      </section>

      {/* what makes it different */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What&apos;s inside</p>
            <h2>Three parts, working together</h2>
          </div>
          <div className="feature">
            <div className="fblock">
              <span className="badge">New</span>
              <span className="glyph" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <rect x="4" y="6" width="22" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11 25h8M15 21v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Interactive course platform</h3>
              <ul className="ck">
                <li><span className="tick" aria-hidden="true">✓</span> Weekly video lessons with embedded exercises</li>
                <li><span className="tick" aria-hidden="true">✓</span> Live Q&amp;A sessions with David &amp; Emme</li>
                <li><span className="tick" aria-hidden="true">✓</span> Discussions with your cohort</li>
                <li><span className="tick" aria-hidden="true">✓</span> A learning path shaped by your Money Persona</li>
              </ul>
            </div>
            <div className="fblock">
              <span className="glyph" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <rect x="9" y="4" width="12" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M13 22h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Companion mobile app</h3>
              <ul className="ck">
                <li><span className="tick" aria-hidden="true">✓</span> Notice how you feel at the point of a decision</li>
                <li><span className="tick" aria-hidden="true">✓</span> Spot your own triggers and patterns over time</li>
                <li><span className="tick" aria-hidden="true">✓</span> Practise simple pause techniques in the moment</li>
                <li><span className="tick" aria-hidden="true">✓</span> Daily micro-practices aligned with each week</li>
              </ul>
            </div>
            <div className="fblock span2">
              <span className="glyph" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="11" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <h3>How the 12 weeks unfold</h3>
              <div className="stages-row">
                <div className="stg"><div className="wk">Weeks 1–2</div><h4>Awareness</h4><p>Gently surface your money story.</p></div>
                <div className="stg"><div className="wk">Weeks 3–4</div><h4>Examination</h4><p>Question the beliefs underneath it.</p></div>
                <div className="stg"><div className="wk">Weeks 5–7</div><h4>Embodiment</h4><p>Parts work and reflective practice.</p></div>
                <div className="stg"><div className="wk">Weeks 8–12</div><h4>Integration</h4><p>Values, relationships and habits.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* who / what you get */}
      <section className="band">
        <div className="wrap twocol">
          <div>
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', margin: '14px 0 24px' }}>This might resonate if…</h2>
            <ul className="ck" style={{ gap: '14px' }}>
              <li><span className="tick" aria-hidden="true">✓</span> You know what you &ldquo;should&rdquo; do with money but can&apos;t seem to stick to it</li>
              <li><span className="tick" aria-hidden="true">✓</span> Money worry feels heavy even when things are objectively fine</li>
              <li><span className="tick" aria-hidden="true">✓</span> You avoid looking at accounts or bills</li>
              <li><span className="tick" aria-hidden="true">✓</span> Old money experiences still shape how you feel today</li>
              <li><span className="tick" aria-hidden="true">✓</span> You and a partner keep having the same money argument — and it&apos;s not really about the numbers</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">What&apos;s included</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', margin: '14px 0 24px' }}>What you get</h2>
            <ul className="ck" style={{ gap: '14px' }}>
              <li><span className="tick" aria-hidden="true">✓</span> 12 weeks of interactive course content</li>
              <li><span className="tick" aria-hidden="true">✓</span> The companion app (exclusive to participants)</li>
              <li><span className="tick" aria-hidden="true">✓</span> Live weekly group sessions with David &amp; Emme</li>
              <li><span className="tick" aria-hidden="true">✓</span> A private cohort community</li>
              <li><span className="tick" aria-hidden="true">✓</span> A workbook with 50+ reflective exercises</li>
              <li><span className="tick" aria-hidden="true">✓</span> Lifetime access to materials + 6 months alumni support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Enrolment</p>
            <h2>Founding cohort pricing</h2>
            <p className="lead">Two ways to take part. All prices in Australian dollars.</p>
          </div>
          <div className="pricing">
            <div className="tier">
              <span className="rec">Self-paced</span>
              <div className="price">$697 <small>AUD</small></div>
              <p className="desc">Full course access, companion app, workbook and community.</p>
              <ul className="ck" style={{ marginBottom: '20px' }}>
                <li><span className="tick" aria-hidden="true">✓</span> All 12 weeks, at your own pace</li>
                <li><span className="tick" aria-hidden="true">✓</span> Companion app + workbook</li>
                <li><span className="tick" aria-hidden="true">✓</span> Cohort community access</li>
              </ul>
              <a className="btn btn-ghost" href="#waitlist">Join waitlist</a>
            </div>
            <div className="tier featured">
              <span className="rec">Recommended · Live cohort</span>
              <div className="price">$997 <small>AUD</small></div>
              <p className="desc">Everything in Self-paced, plus live guidance and accountability.</p>
              <ul className="ck" style={{ marginBottom: '20px' }}>
                <li><span className="tick" aria-hidden="true">✓</span> Everything in Self-paced</li>
                <li><span className="tick" aria-hidden="true">✓</span> Weekly live sessions &amp; real-time Q&amp;A</li>
                <li><span className="tick" aria-hidden="true">✓</span> Accountability partners</li>
              </ul>
              <a className="btn btn-primary" href="#waitlist">Join waitlist</a>
            </div>
          </div>
          <div className="note-band" style={{ maxWidth: '840px' }}>
            This is an educational program about the psychology of money. It is general in nature,
            is not financial product advice, and does not consider your personal circumstances. It
            is also not therapy — see the notes at the foot of the page.
          </div>
        </div>
      </section>

      {/* what it's not */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Honest expectations</p>
            <h2>What this is — and isn&apos;t</h2>
          </div>
          <div className="compare">
            <div className="col">
              <h4>What it isn&apos;t</h4>
              <ul className="xk">
                <li><span className="m no" aria-hidden="true">✕</span> Budgeting advice (you&apos;ve tried that)</li>
                <li><span className="m no" aria-hidden="true">✕</span> Surface-level mindset affirmations</li>
                <li><span className="m no" aria-hidden="true">✕</span> Therapy or clinical treatment</li>
                <li><span className="m no" aria-hidden="true">✕</span> Personal financial advice or product recommendations</li>
              </ul>
            </div>
            <div className="col">
              <h4>What it is</h4>
              <ul className="xk">
                <li><span className="m yes" aria-hidden="true">✓</span> Psychology-led money education</li>
                <li><span className="m yes" aria-hidden="true">✓</span> A structured framework, drawn from established approaches</li>
                <li><span className="m yes" aria-hidden="true">✓</span> Interactive learning paired with real-life practice</li>
                <li><span className="m yes" aria-hidden="true">✓</span> A calmer, shame-free way to understand your patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Questions</p>
            <h2>Good things to ask</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q} className="qa" {...(f.open ? { open: true } : {})}>
                <summary>
                  {f.q} <span className="pm" aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* waitlist */}
      <section className="band" id="waitlist">
        <div className="wrap">
          <div className="waitlist-card">
            <p className="eyebrow" style={{ color: 'var(--sage)' }}>Join the waitlist</p>
            <h2>Be first to hear when the founding cohort opens</h2>
            <p>
              Waitlist members get early access and a founding-cohort offer. No spam. Unsubscribe
              anytime.
            </p>
            {/* TODO: wire this form to a real waitlist endpoint (not /api/newsletter/subscribe).
                For v1 it's a styled, non-functional form matching publish/program.html. */}
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  )
}
