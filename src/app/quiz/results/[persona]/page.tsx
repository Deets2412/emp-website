import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSONAS } from '@/lib/constants'
import type { PersonaSlug } from '@/lib/constants'
import { personaProfiles } from '@/data/personas'

function getPersona(slug: string) {
  const validSlugs = Object.keys(PERSONAS) as PersonaSlug[]
  if (validSlugs.includes(slug as PersonaSlug)) {
    return personaProfiles[slug as PersonaSlug]
  }
  return null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ persona: string }>
}): Promise<Metadata> {
  const { persona: slug } = await params
  const persona = getPersona(slug)
  if (!persona) {
    return { title: 'Money Persona Results' }
  }
  return {
    title: `You're a ${persona.name}! — Money Persona Results`,
    description: persona.description,
  }
}

const pageStyles = `
  .result-emoji { font-size: 3.4rem; line-height: 1; margin-bottom: 8px; }
  .result-tag {
    display: inline-flex; font-family: var(--mono); font-size: 0.7rem;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--sage-deep);
    background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 22%, transparent);
    border-radius: 999px; padding: 6px 14px; margin-bottom: 20px;
  }

  .pcard {
    background: var(--paper); border: 1px solid var(--line);
    border-radius: 16px; padding: 32px;
  }
  .pcard + .pcard { margin-top: 24px; }
  .pcard h2 { font-size: 1.5rem; margin-bottom: 14px; }
  .pcard p { color: var(--ink-soft); line-height: 1.7; }
  .pcard .big { font-size: 1.12rem; color: var(--ink); }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .two-col + .pcard, .pcard + .two-col, .two-col + .two-col { margin-top: 24px; }

  .ticklist { list-style: none; margin: 16px 0 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
  .ticklist li { display: flex; gap: 11px; align-items: flex-start; font-size: 0.96rem; color: var(--ink-soft); line-height: 1.55; }
  .ticklist li .m { flex: none; margin-top: 2px; }
  .m.yes { color: var(--sage); } .m.clay { color: var(--clay); }

  .ord { list-style: none; margin: 16px 0 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
  .ord li { display: flex; gap: 14px; align-items: flex-start; font-size: 0.96rem; color: var(--ink-soft); line-height: 1.55; }
  .ord li .n {
    flex: none; display: flex; align-items: center; justify-content: center;
    width: 26px; height: 26px; border-radius: 999px; font-family: var(--mono);
    font-size: 0.74rem; font-weight: 600; color: var(--sage-deep);
    background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 24%, transparent);
  }

  .mantra-card { background: var(--paper-3); border: 1px solid var(--line); border-radius: 16px; padding: 32px; }
  .mantra-card h2 { font-size: 1.5rem; margin-bottom: 16px; }
  .mantra-card .q { font-family: var(--serif); font-style: italic; font-size: 1.25rem; color: var(--ink); line-height: 1.5; }
  .mantra-card .q + .q { margin-top: 12px; }

  .label { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clay); }
  .practice-block + .practice-block { margin-top: 18px; }
  .practice-block p { margin-top: 6px; font-size: 0.96rem; }

  .partner-card { background: var(--clay-wash); border: 1px solid color-mix(in oklch, var(--clay) 26%, transparent); border-radius: 16px; padding: 32px; }
  .partner-card h2 { font-size: 1.5rem; margin-bottom: 14px; }
  .partner-card p { color: var(--ink-soft); line-height: 1.7; }

  .persona-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 28px; }
  .persona-chip {
    display: block; text-align: center; background: var(--paper);
    border: 1px solid var(--line); border-radius: 14px; padding: 18px 12px;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
  .persona-chip:hover { border-color: var(--line-strong); transform: translateY(-2px); }
  .persona-chip.current { border-color: var(--sage-deep); box-shadow: 0 0 0 1px var(--sage-deep); }
  .persona-chip .pe { font-size: 1.5rem; display: block; }
  .persona-chip .pn { margin-top: 6px; font-size: 0.78rem; font-weight: 600; color: var(--ink); }

  .share-row { display: flex; justify-content: center; gap: 12px; margin-top: 18px; flex-wrap: wrap; }

  .retake { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--sage-deep); }
  .retake:hover { color: var(--ink); }

  @media (max-width: 820px) {
    .two-col { grid-template-columns: 1fr; }
    .persona-grid { grid-template-columns: repeat(2, 1fr); }
  }
`

export default async function QuizResultsPage({
  params,
}: {
  params: Promise<{ persona: string }>
}) {
  const { persona: slug } = await params
  const persona = getPersona(slug)

  if (!persona) {
    return (
      <>
        <section className="phero">
          <div className="wrap">
            <p className="eyebrow">Money Persona</p>
            <h1>Persona not found</h1>
            <p className="lead">
              This persona doesn&apos;t exist. Take the quiz to discover yours.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/quiz">
                Take the quiz
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  const allPersonas = Object.values(personaProfiles)

  return (
    <>
      <style>{pageStyles}</style>

      {/* hero / result header */}
      <section className="phero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="result-emoji" aria-hidden="true">{persona.emoji}</div>
          <p className="result-tag">Your Money Persona</p>
          <h1 style={{ margin: '0 auto 18px', maxWidth: '20ch' }}>
            You&apos;re a <em>{persona.name}</em>
          </h1>
          <p className="lead" style={{ margin: '0 auto' }}>{persona.tagline}</p>
        </div>
      </section>

      {/* description */}
      <section className="band alt">
        <div className="wrap">
          <div className="pcard">
            <p className="big">{persona.description}</p>
          </div>

          {/* strengths & challenges */}
          <div className="two-col">
            <div className="pcard">
              <h2>Your strengths</h2>
              <ul className="ticklist">
                {persona.strengths.map((s, i) => (
                  <li key={i}>
                    <span className="m yes" aria-hidden="true">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pcard">
              <h2>Your challenges</h2>
              <ul className="ticklist">
                {persona.challenges.map((c, i) => (
                  <li key={i}>
                    <span className="m clay" aria-hidden="true">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* origin */}
          <div className="pcard">
            <h2>Where this comes from</h2>
            <p>{persona.origin}</p>
          </div>
        </div>
      </section>

      {/* mantras + practice */}
      <section className="band">
        <div className="wrap">
          <div className="mantra-card">
            <h2>Your mantras</h2>
            {persona.mantras.map((m, i) => (
              <p key={i} className="q">&ldquo;{m}&rdquo;</p>
            ))}
          </div>

          <div className="two-col">
            <div className="pcard">
              <h2>Daily practice</h2>
              <div className="practice-block">
                <span className="label">Morning</span>
                <p>{persona.dailyPractice.morning}</p>
              </div>
              <div className="practice-block">
                <span className="label">Evening</span>
                <p>{persona.dailyPractice.evening}</p>
              </div>
            </div>

            <div className="pcard">
              <h2>Weekly practice</h2>
              <p style={{ marginTop: '16px', fontSize: '0.96rem' }}>{persona.weeklyPractice}</p>
            </div>
          </div>

          {/* growth edges */}
          <div className="pcard">
            <h2>Signs you&apos;re growing</h2>
            <ul className="ord">
              {persona.growthEdges.map((g, i) => (
                <li key={i}>
                  <span className="n" aria-hidden="true">{i + 1}</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* partner advice */}
      <section className="band alt">
        <div className="wrap">
          <div className="partner-card">
            <h2>For your partner</h2>
            <p>{persona.partnerAdvice}</p>
          </div>
        </div>
      </section>

      {/* explore all personas */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '0', textAlign: 'center', maxWidth: 'none' }}>
            <p className="eyebrow">Eight money patterns</p>
            <h2>Explore all personas</h2>
          </div>
          <div className="persona-grid">
            {allPersonas.map((p) => (
              <Link
                key={p.slug}
                href={`/quiz/results/${p.slug}`}
                className={`persona-chip${p.slug === persona.slug ? ' current' : ''}`}
              >
                <span className="pe" aria-hidden="true">{p.emoji}</span>
                <p className="pn">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* share + cta */}
      <section className="band alt">
        <div className="wrap">
          <div className="pcard" style={{ textAlign: 'center' }}>
            <h2>Share your results</h2>
            <p>Help a friend discover their Money Persona too.</p>
            <div className="share-row">
              <button className="btn btn-ghost btn-sm">Copy link</button>
              <button className="btn btn-ghost btn-sm">Share on X</button>
              <button className="btn btn-ghost btn-sm">Share on Facebook</button>
            </div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '48px auto 0' }}>
            <p className="eyebrow">Where to next</p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '14px 0 16px' }}>
              Curious to go deeper?
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px' }}>
              Explore episodes that speak to your money patterns, or look into the program for
              the full experience.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/episodes">
                Browse episodes
              </Link>
              <Link className="btn btn-ghost" href="/courses">
                Explore the program
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/quiz/questions" className="retake">
              ← Retake the quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
