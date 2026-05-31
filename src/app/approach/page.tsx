import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'An emotion-first approach to money — exploring the psychology beneath financial decisions through established frameworks like CBT, ACT, IFS and attachment theory.',
}

const pageStyles = `
  .definition { max-width: 70ch; }
  .definition p { font-size: 1.12rem; color: var(--ink-soft); line-height: 1.7; }
  .definition p + p { margin-top: 18px; }

  .stage-list { display: flex; flex-direction: column; gap: 18px; }
  .srow { display: grid; grid-template-columns: 64px 1fr; gap: 24px; align-items: start; background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 30px 32px; }
  .srow .sn { font-family: var(--serif); font-size: 2.4rem; color: var(--sage-deep); line-height: 1; }
  .srow .wk { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--clay); }
  .srow h3 { font-size: 1.5rem; margin: 6px 0 4px; }
  .srow .sub { font-size: 0.96rem; color: var(--ink); font-weight: 500; margin-bottom: 10px; }
  .srow p { font-size: 0.96rem; color: var(--ink-soft); line-height: 1.6; }
  @media (max-width: 600px) { .srow { grid-template-columns: 1fr; gap: 10px; padding: 24px; } }

  .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .compare .col { border: 1px solid var(--line); border-radius: 16px; padding: 32px 30px; background: var(--paper); }
  .compare .col.alt2 { border-color: var(--sage-deep); box-shadow: 0 0 0 1px var(--sage-deep); }
  .compare .col h4 { font-size: 1.25rem; margin-bottom: 18px; }
  .xk { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
  .xk li { display: flex; gap: 11px; align-items: flex-start; font-size: 0.96rem; color: var(--ink-soft); }
  .xk li .m { flex: none; margin-top: 3px; }
  .m.no { color: var(--clay); } .m.yes { color: var(--sage); }
  @media (max-width: 680px) { .compare { grid-template-columns: 1fr; } }

  .modgrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .mod { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 30px 30px; display: flex; gap: 20px; }
  .mod .ab { font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.04em; color: var(--sage-deep); border: 1px solid color-mix(in oklch, var(--sage-deep) 30%, transparent); border-radius: 8px; padding: 8px 10px; height: fit-content; white-space: nowrap; }
  .mod h4 { font-size: 1.2rem; margin-bottom: 8px; }
  .mod p { font-size: 0.92rem; color: var(--ink-soft); line-height: 1.55; }
  @media (max-width: 680px) { .modgrid { grid-template-columns: 1fr; } }

  .note-band { background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); border-radius: 14px; padding: 22px 26px; font-size: 0.92rem; color: var(--sage-deep); line-height: 1.6; display: flex; gap: 14px; align-items: flex-start; }
  .note-band .ni { flex: none; margin-top: 2px; }
`

export default function ApproachPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">Our approach</p>
          <h1>An emotion-first approach to money</h1>
          <p className="lead">
            Most financial advice tells you what to do with money. We&apos;re more interested in
            how you <em>feel</em> about it — the difference between first-order change (forcing
            new behaviour) and second-order change (genuinely wanting different things).
          </p>
        </div>
      </section>

      {/* what is it */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '24px' }}>
            <p className="eyebrow">In plain terms</p>
            <h2>What the approach is</h2>
          </div>
          <div className="definition">
            <p>
              Our approach is about creating genuine, lasting change in deeply held patterns.
              Rather than relying on willpower or shame, it works with how a person actually feels
              about a behaviour — on the idea that when the feeling shifts, aligned action follows
              more naturally.
            </p>
            <p>
              On the podcast and in the program, we explore applying that same lens to our
              relationship with money: surfacing the beliefs underneath our financial habits, and
              gently updating them.
            </p>
          </div>
          <div className="note-band" style={{ marginTop: '30px', maxWidth: '760px' }}>
            <span className="ni" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10 6v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="10" cy="13.5" r="0.9" fill="currentColor" />
              </svg>
            </span>
            <span>
              This is educational content, not therapy or clinical treatment — and not financial
              advice. The practices below are explored in a learning context. If deeper issues
              surface, please work alongside a qualified practitioner.
            </span>
          </div>
        </div>
      </section>

      {/* four stages */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The journey</p>
            <h2>How the approach works: four stages</h2>
          </div>
          <div className="stage-list">
            <div className="srow">
              <div className="sn">1</div>
              <div>
                <div className="wk">Weeks 1–2</div>
                <h3>Awareness</h3>
                <div className="sub">Surface your money story.</div>
                <p>
                  Begin to notice the unconscious money beliefs absorbed early in life — the quiet
                  &ldquo;rules&rdquo; that have been shaping financial decisions without your
                  awareness.
                </p>
              </div>
            </div>
            <div className="srow">
              <div className="sn">2</div>
              <div>
                <div className="wk">Weeks 3–4</div>
                <h3>Examination</h3>
                <div className="sub">Question the beliefs.</div>
                <p>
                  Hold each belief up to the light. Is it still true? Was it ever? This is where a
                  new space opens — the gap between an old belief and a new understanding.
                </p>
              </div>
            </div>
            <div className="srow">
              <div className="sn">3</div>
              <div>
                <div className="wk">Weeks 5–7</div>
                <h3>Embodiment</h3>
                <div className="sub">Let it land emotionally.</div>
                <p>
                  Through reflective parts work and grounding practices, new understanding is
                  integrated at the level of feeling — not just intellectually. (Explored as
                  education, not therapy.)
                </p>
              </div>
            </div>
            <div className="srow">
              <div className="sn">4</div>
              <div>
                <div className="wk">Weeks 8–12</div>
                <h3>Integration</h3>
                <div className="sub">Make it sustainable.</div>
                <p>
                  A calmer relationship with money becomes the default. Values alignment, healthier
                  relationship dynamics, and steadier habits have room to emerge over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* first vs second order */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The core idea</p>
            <h2>First-order vs second-order change</h2>
          </div>
          <div className="compare">
            <div className="col">
              <h4>First-order change</h4>
              <ul className="xk">
                <li><span className="m no" aria-hidden="true">✕</span> Force yourself to budget</li>
                <li><span className="m no" aria-hidden="true">✕</span> Use willpower to resist impulse buys</li>
                <li><span className="m no" aria-hidden="true">✕</span> Feel guilty when you &ldquo;fail&rdquo;</li>
                <li><span className="m no" aria-hidden="true">✕</span> White-knuckle your way through</li>
                <li><span className="m no" aria-hidden="true">✕</span> A constant internal battle</li>
              </ul>
            </div>
            <div className="col alt2">
              <h4>Second-order change</h4>
              <ul className="xk">
                <li><span className="m yes" aria-hidden="true">✓</span> Genuinely want to manage money well</li>
                <li><span className="m yes" aria-hidden="true">✓</span> The urge to overspend eases on its own</li>
                <li><span className="m yes" aria-hidden="true">✓</span> Self-compassion in place of shame</li>
                <li><span className="m yes" aria-hidden="true">✓</span> Aligned choices feel more natural</li>
                <li><span className="m yes" aria-hidden="true">✓</span> A sense of ease around money</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* modalities */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: '64ch' }}>
            <p className="eyebrow">What it draws on</p>
            <h2>Established approaches</h2>
            <p className="lead">
              Our approach brings together insights from several well-recognised psychological
              approaches in a structured, educational format — and is informed by Affective Liminal
              Psychology, a framework for changing deeply held patterns through feeling rather than
              force.
            </p>
          </div>
          <div className="modgrid">
            <div className="mod">
              <div className="ab">CBT</div>
              <div>
                <h4>Cognitive Behavioural Therapy</h4>
                <p>
                  Noticing and reframing the unhelpful thought patterns that drive financial
                  anxiety and avoidance.
                </p>
              </div>
            </div>
            <div className="mod">
              <div className="ab">ACT</div>
              <div>
                <h4>Acceptance &amp; Commitment Therapy</h4>
                <p>
                  Building psychological flexibility and aligning decisions with personal values.
                </p>
              </div>
            </div>
            <div className="mod">
              <div className="ab">IFS</div>
              <div>
                <h4>Internal Family Systems</h4>
                <p>
                  Exploring the different &ldquo;parts&rdquo; of us that hold competing agendas
                  around money — saver versus spender.
                </p>
              </div>
            </div>
            <div className="mod">
              <div className="ab">Theory</div>
              <div>
                <h4>Attachment theory</h4>
                <p>
                  How our earliest relationships set an emotional blueprint for how we relate to
                  money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="band alt">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <p className="eyebrow">Where to start</p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '14px 0 16px' }}>
              Curious to explore it?
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px' }}>
              Start with the free quiz to discover your Money Persona, or look into the program
              for the full experience.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/quiz">
                Take the free quiz
              </Link>
              <Link className="btn btn-ghost" href="/courses">
                Explore the program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
