import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Two perspectives, one curiosity. An independent Australian podcast about why we feel the way we do about money — and how understanding those feelings can gently change our relationship with it.',
}

const pageStyles = `
  .hosts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .host { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 36px; }
  .host .htop { display: flex; gap: 20px; align-items: center; margin-bottom: 18px; }
  .host .avatar { width: 72px; height: 72px; border-radius: 50%; flex: none; background: var(--sage-wash); color: var(--sage-deep); display: grid; place-items: center; font-family: var(--serif); font-size: 1.7rem; font-weight: 600; border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); }
  .host h3 { font-size: 1.5rem; }
  .host .role { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint); margin-top: 4px; }
  .host p { font-size: 0.94rem; color: var(--ink-soft); margin-top: 12px; line-height: 1.62; }
  .host .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
  .host .chip { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.04em; padding: 5px 10px; border-radius: 999px; background: var(--paper-2); border: 1px solid var(--line); color: var(--ink-soft); }
  @media (max-width: 820px) { .hosts-grid { grid-template-columns: 1fr; } }

  .modgrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: var(--line); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-top: 28px; }
  .mod { background: var(--paper); padding: 24px 22px; }
  .mod .ab { font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.06em; color: var(--sage-deep); }
  .mod h4 { font-size: 1.04rem; margin: 8px 0 8px; line-height: 1.2; }
  .mod p { font-size: 0.84rem; color: var(--ink-soft); line-height: 1.45; }
  @media (max-width: 820px) { .modgrid { grid-template-columns: 1fr 1fr; } }

  .story { max-width: 68ch; }
  .story p { font-size: 1.05rem; color: var(--ink-soft); line-height: 1.7; }
  .story p + p { margin-top: 20px; }
  .story .pull { font-family: var(--serif); font-size: 1.5rem; color: var(--ink); line-height: 1.4; margin: 32px 0; padding-left: 22px; border-left: 2px solid var(--sage); }

  .promise { background: var(--ink); color: var(--paper); border-radius: 20px; padding: 48px 52px; }
  .promise .eyebrow { color: var(--sage); }
  .promise p { font-family: var(--serif); font-size: clamp(1.4rem, 2.6vw, 1.9rem); line-height: 1.42; margin: 16px 0 0; color: var(--paper); }
  .promise a { display: inline-flex; align-items: center; gap: 0.5em; margin-top: 26px; font-family: var(--sans); font-size: 0.95rem; color: var(--sage); }

  @media (max-width: 560px) { .promise { padding: 34px 26px; } }
`

export default function AboutPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">About the show</p>
          <h1>Two perspectives, one curiosity</h1>
          <p className="lead">
            Emotional Money is an independent Australian podcast about why we feel the way we do
            about money — and how understanding those feelings can gently change our relationship
            with it.
          </p>
        </div>
      </section>

      {/* hosts */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Your hosts</p>
            <h2>Meet David &amp; Emme</h2>
          </div>
          <div className="hosts-grid">
            <div className="host">
              <div className="htop">
                <div className="avatar" aria-hidden="true">D</div>
                <div>
                  <h3>David</h3>
                  <div className="role">Co-host</div>
                </div>
              </div>
              <p>
                David has spent years quietly fascinated by one thing: why smart, capable people
                make emotional decisions with money. He kept noticing the same pattern — that
                knowing what to do and actually doing it are very different things, and the gap
                between them is almost always emotional, not technical.
              </p>
              <p>
                He started Emotional Money as a personal project to explore that gap out loud — in
                plain language, without jargon, and without judgement.
              </p>
              <div className="chips">
                <span className="chip">Behavioural curiosity</span>
                <span className="chip">Plain language</span>
                <span className="chip">Lifelong learner</span>
              </div>
            </div>
            <div className="host">
              <div className="htop">
                <div className="avatar" aria-hidden="true">E</div>
                <div>
                  <h3>Emme</h3>
                  <div className="role">Co-host</div>
                </div>
              </div>
              <p>
                At 25, Emme represents a generation navigating real financial pressure — housing,
                cost of living, and the anxiety that comes with it. As a psychology student, she
                brings a fresh, research-informed lens to the emotional side of money that
                traditional finance tends to ignore.
              </p>
              <p>
                She isn&apos;t afraid to ask the questions her generation is thinking but nobody
                says out loud. Her curiosity and openness make the harder feelings feel
                approachable and real.
              </p>
              <div className="chips">
                <span className="chip">Psychology student</span>
                <span className="chip">Gen Z lens</span>
                <span className="chip">Asks the real questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* approach */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: '64ch' }}>
            <p className="eyebrow">Our approach</p>
            <h2>An emotion-first approach to money</h2>
            <p className="lead">
              What unites us is one idea: change how you feel about money first, and steadier
              choices tend to follow — far more naturally than they ever do through willpower
              alone. It&apos;s an approach grounded in well-recognised psychology.
            </p>
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
            Drawing on established psychological approaches
          </p>
          <p style={{ maxWidth: '64ch', color: 'var(--ink-soft)', fontSize: '0.98rem', margin: '10px 0 4px' }}>
            Our thinking draws on several well-established approaches — and is informed by
            Affective Liminal Psychology, a framework for shifting deeply held patterns through
            feeling rather than force.
          </p>
          <div className="modgrid">
            <div className="mod">
              <div className="ab">CBT</div>
              <h4>Cognitive Behavioural Therapy</h4>
              <p>Noticing and reframing unhelpful thought patterns.</p>
            </div>
            <div className="mod">
              <div className="ab">ACT</div>
              <h4>Acceptance &amp; Commitment Therapy</h4>
              <p>Acting in line with your values, not your fear.</p>
            </div>
            <div className="mod">
              <div className="ab">IFS</div>
              <h4>Internal Family Systems</h4>
              <p>Understanding your competing money &ldquo;parts&rdquo;.</p>
            </div>
            <div className="mod">
              <div className="ab">—</div>
              <h4>Attachment theory</h4>
              <p>How early relationships shape money behaviour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* promise */}
      <section className="band">
        <div className="wrap">
          <div className="promise">
            <p className="eyebrow">Our promise</p>
            <p>
              We&apos;re not here to tell you what to do with money — you already know that.
              We&apos;re here to help you understand <em>why</em> you&apos;re not doing it, and to
              make that gentler to change.
            </p>
            <Link href="/approach">
              More about our approach <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* story */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Why this podcast</p>
            <h2>How it started</h2>
          </div>
          <div className="story">
            <p>
              It began with a simple, nagging observation: people who know exactly what they
              &ldquo;should&rdquo; do with money often can&apos;t bring themselves to do it. The
              problem is rarely the plan. It&apos;s the feelings — fear, shame, avoidance,
              self-sabotage — the parts of money nobody seems willing to talk about.
            </p>
            <p className="pull">
              &ldquo;The problem was never the plan. It was the feelings.&rdquo;
            </p>
            <p>
              Then David and Emme started talking. She was studying psychology and open about her
              own money anxiety; he was fascinated by the emotional patterns underneath financial
              decisions. In conversation, something clicked — between her emotional awareness and
              his curiosity about behaviour, they could explore the part of money that usually
              gets ignored.
            </p>
            <p>
              As they kept talking, a shared way of working took shape: an emotion-first approach
              that gave their conversations a structure. Emotional Money is where they think out
              loud about applying that lens to our relationship with money.
            </p>
          </div>
        </div>
      </section>

      {/* philosophy */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Our philosophy</p>
            <h2>What we believe</h2>
          </div>
          <div className="cards-3">
            <div className="vcard">
              <span className="glyph" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <path d="M17 29C12 24 7 20 7 14a10 10 0 0 1 20 0c0 6-5 10-10 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Emotion-first change</h3>
              <p>
                Understand how you feel about money first. When the feeling shifts, the behaviour
                tends to follow — without the constant willpower battle.
              </p>
            </div>
            <div className="vcard">
              <span className="glyph" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="11" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="23" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 27c0-3.5 2.7-6 6-6m18 6c0-3.5-2.7-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <h3>No shame, no force</h3>
              <p>
                Your money patterns made sense given what you learned. The aim is to update the
                learning — not to punish yourself for it.
              </p>
            </div>
            <div className="vcard">
              <span className="glyph" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="13" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17" cy="17" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17" cy="17" r="1.6" fill="currentColor" />
                </svg>
              </span>
              <h3>Grounded in psychology</h3>
              <p>
                Built on established approaches — CBT, ACT, IFS and attachment theory — rather
                than guesswork or quick-fix affirmations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter */}
      <section className="band alt">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
            <p className="eyebrow">Join the conversation</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', margin: '14px 0 14px' }}>
              Weekly notes on the feelings behind money
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '24px' }}>
              A short, practical reflection each week. No spam. Unsubscribe anytime.
            </p>
            <NewsletterForm variant="default" />
          </div>
        </div>
      </section>
    </>
  )
}
