import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Organisations — Workshops & Programs',
  description:
    'Psychology-informed financial wellbeing workshops for organisations. An emotion-first approach to help your team understand the feelings beneath everyday money decisions.',
}

const workshopTypes = [
  {
    title: 'Awareness Workshop',
    duration: 'Half Day',
    desc: 'An introduction to the emotional side of money. Participants discover their Money Persona and explore how unconscious patterns shape financial decisions.',
    includes: [
      'Money Persona assessment for all participants',
      'Understanding emotional money patterns',
      'Introduction to the emotion-first approach',
      'Team discussion facilitation',
    ],
  },
  {
    title: 'Deep Dive Program',
    duration: '4 Weeks',
    desc: 'A structured program taking teams through the four stages of the approach. Combines group sessions with individual reflection and practical exercises.',
    includes: [
      'Everything in Awareness Workshop',
      '4 weekly group sessions',
      'Individual workbooks',
      'Manager briefing and support guide',
      'Pre/post wellbeing reflection',
    ],
  },
  {
    title: 'Custom Program',
    duration: 'Flexible',
    desc: 'Tailored to your organisation’s specific needs. We work with your HR and wellbeing team to design a program that fits your culture and goals.',
    includes: [
      'Needs assessment consultation',
      'Custom curriculum design',
      'Flexible delivery format',
      'Ongoing support and reflection',
      'Group facilitation throughout',
    ],
  },
]

const pageStyles = `
  .statgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .statcard { background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 34px 30px; text-align: center; }
  .statcard .sn { font-family: var(--serif); font-size: 2.8rem; line-height: 1; color: var(--sage-deep); }
  .statcard p { margin-top: 12px; font-size: 0.94rem; color: var(--ink-soft); line-height: 1.55; }
  @media (max-width: 760px) { .statgrid { grid-template-columns: 1fr; } }

  .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .compare .col { border: 1px solid var(--line); border-radius: 16px; padding: 32px 30px; background: var(--paper); }
  .compare .col.alt2 { border-color: var(--sage-deep); box-shadow: 0 0 0 1px var(--sage-deep); }
  .compare .col h4 { font-size: 1.2rem; margin-bottom: 18px; }
  .xk { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
  .xk li { display: flex; gap: 11px; align-items: flex-start; font-size: 0.96rem; color: var(--ink-soft); }
  .xk li .m { flex: none; margin-top: 3px; }
  .m.no { color: var(--clay); } .m.yes { color: var(--sage); }
  @media (max-width: 680px) { .compare { grid-template-columns: 1fr; } }

  .progrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .procard { display: flex; flex-direction: column; background: var(--paper); border: 1px solid var(--line); border-radius: 16px; padding: 34px 30px; transition: border-color 0.2s ease, transform 0.2s ease; }
  .procard:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .procard .phead { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
  .procard h3 { font-size: 1.4rem; }
  .procard .dur { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--clay); border: 1px solid color-mix(in oklch, var(--clay) 35%, transparent); background: var(--clay-wash); padding: 6px 11px; border-radius: 999px; white-space: nowrap; }
  .procard .pdesc { flex: 1; font-size: 0.95rem; color: var(--ink-soft); line-height: 1.6; margin-bottom: 22px; }
  .ck { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; }
  .ck li { display: flex; gap: 11px; align-items: flex-start; font-size: 0.92rem; color: var(--ink-soft); }
  .ck li .tick { flex: none; margin-top: 3px; color: var(--sage); }
  @media (max-width: 920px) { .progrid { grid-template-columns: 1fr; } }

  .cta-card { background: var(--ink); color: var(--paper); border-radius: 24px; padding: 60px; text-align: center; max-width: 760px; margin: 0 auto; }
  .cta-card h2 { color: var(--paper); font-size: clamp(1.9rem, 3.4vw, 2.6rem); margin: 14px auto 16px; max-width: 22ch; }
  .cta-card p { color: oklch(0.82 0.012 80); max-width: 50ch; margin: 0 auto 28px; }
  .cta-card .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .cta-card .btn-primary { background: var(--sage); border-color: var(--sage); color: oklch(0.2 0.02 150); }
  .cta-card .btn-primary:hover { background: var(--paper); border-color: var(--paper); }
  .cta-card .btn-ghost { color: var(--paper); border-color: oklch(0.45 0.01 80); }
  .cta-card .btn-ghost:hover { border-color: var(--paper); }
  @media (max-width: 560px) { .cta-card { padding: 40px 24px; } }
`

export default function CorporatePage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">For organisations</p>
          <h1>
            Financial wellbeing for your <em>team</em>
          </h1>
          <p className="lead">
            Money worry is one of the most common sources of everyday stress. We help your people
            explore a healthier emotional relationship with money &mdash; through psychology, not
            spreadsheets.
          </p>
        </div>
      </section>

      {/* why it matters */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Why it matters</p>
            <h2>Money stress doesn&apos;t stay at home</h2>
            <p className="lead">
              When people carry financial worry, it follows them into work &mdash; affecting focus,
              wellbeing and how present they can be. An emotion-first approach gives teams a calmer,
              shame-free way to understand those patterns.
            </p>
          </div>
          <div className="statgrid">
            <div className="statcard">
              <div className="sn">Focus</div>
              <p>Money worry is distracting &mdash; it&apos;s hard to be present when stress is in the background.</p>
            </div>
            <div className="statcard">
              <div className="sn">Wellbeing</div>
              <p>Financial stress is closely tied to overall wellbeing, sleep and day-to-day mood.</p>
            </div>
            <div className="statcard">
              <div className="sn">Connection</div>
              <p>Talking openly about money, without judgement, can ease a quiet, common pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* our approach */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: '64ch' }}>
            <p className="eyebrow">Our approach</p>
            <h2>Beyond financial literacy</h2>
            <p className="lead">
              Traditional financial wellness programs focus on literacy &mdash; budgeting,
              superannuation, debt management. These matter, but they often miss the biggest factor:
              emotions.
            </p>
          </div>
          <div className="compare">
            <div className="col">
              <h4>Traditional approach</h4>
              <ul className="xk">
                <li><span className="m no" aria-hidden="true">&#10005;</span> Financial literacy education</li>
                <li><span className="m no" aria-hidden="true">&#10005;</span> Budgeting tools and calculators</li>
                <li><span className="m no" aria-hidden="true">&#10005;</span> Information-based</li>
                <li><span className="m no" aria-hidden="true">&#10005;</span> One-size-fits-all</li>
              </ul>
            </div>
            <div className="col alt2">
              <h4>Our approach</h4>
              <ul className="xk">
                <li><span className="m yes" aria-hidden="true">&#10003;</span> Emotional money psychology</li>
                <li><span className="m yes" aria-hidden="true">&#10003;</span> An emotion-first, behaviour-change framework</li>
                <li><span className="m yes" aria-hidden="true">&#10003;</span> Experience-based</li>
                <li><span className="m yes" aria-hidden="true">&#10003;</span> Persona-adapted content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* programs */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we offer</p>
            <h2>Programs we run</h2>
          </div>
          <div className="progrid">
            {workshopTypes.map((workshop) => (
              <div key={workshop.title} className="procard">
                <div className="phead">
                  <h3>{workshop.title}</h3>
                  <span className="dur">{workshop.duration}</span>
                </div>
                <p className="pdesc">{workshop.desc}</p>
                <ul className="ck">
                  {workshop.includes.map((item) => (
                    <li key={item}>
                      <span className="tick" aria-hidden="true">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="band">
        <div className="wrap">
          <div className="cta-card">
            <p className="eyebrow" style={{ color: 'var(--sage)' }}>Bring it to your team</p>
            <h2>Interested in a workshop for your organisation?</h2>
            <p>
              We&apos;d love to talk through how a workshop or program could support your team&apos;s
              wellbeing. Get in touch to start the conversation.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Get in touch
              </Link>
              <Link className="btn btn-ghost" href="/how-it-works">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
