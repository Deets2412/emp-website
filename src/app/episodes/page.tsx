import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTENT_PILLARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Episodes',
  description:
    'Browse all episodes of The Emotional Money Podcast. Each episode is tagged to ALP stages and Money Personas so you can find exactly what you need.',
}

// Placeholder episodes until Sanity is connected
const episodes = [
  {
    slug: 'your-money-story',
    episodeNumber: 1,
    title: 'Your Money Story — How Childhood Messages Shape Your Financial Life',
    description:
      'Every financial decision you make is influenced by messages you absorbed as a child. David and Emme explore how your earliest money memories are still running the show today.',
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 38,
    publishedAt: '2026-07-01',
    alpStage: 'Awareness',
    bestFor: 'All Personas (especially Wounded Warrior)',
    keyConcepts: ['Liminal space', 'Childhood programming', 'Money scripts'],
  },
  {
    slug: 'five-money-personas',
    episodeNumber: 2,
    title: 'The Five Money Personas — Which One Are You?',
    description:
      'Are you an Anxious Protector? A Free Spirit? A Wounded Warrior? Discover the five emotional patterns that define your relationship with money.',
    contentPillar: 'personality',
    pillarLabel: 'Money Personalities',
    duration: 42,
    publishedAt: '2026-07-08',
    alpStage: 'Awareness',
    bestFor: 'All Personas',
    keyConcepts: ['Money personas', 'Emotional patterns', 'Self-identification'],
  },
  {
    slug: 'breakup-spending',
    episodeNumber: 3,
    title: 'Breakup Spending — Why Heartbreak Hits Your Wallet',
    description:
      'After a breakup, many of us cope through spending. David and Emme unpack the emotional mechanics of retail therapy and how to catch yourself before the credit card does.',
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 35,
    publishedAt: '2026-07-15',
    alpStage: 'Examination',
    bestFor: 'Avoidant Free Spirit, Wounded Warrior',
    keyConcepts: ['Emotional spending', 'Coping mechanisms', 'Trigger awareness'],
  },
  {
    slug: 'money-parts',
    episodeNumber: 4,
    title: 'Money Parts — Why Part of You Saves While Another Part Spends',
    description:
      'Ever feel like there are two versions of you — one responsible, one impulsive? We explore why your internal parts have different financial agendas.',
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 40,
    publishedAt: '2026-07-22',
    alpStage: 'Embodiment',
    bestFor: 'Perfectionist Analyzer, Anxious Protector',
    keyConcepts: ['IFS', 'Parts work', 'Internal conflict'],
  },
  {
    slug: 'human-design-money',
    episodeNumber: 5,
    title: 'Human Design & Money — How Your Energy Type Affects Financial Decisions',
    description:
      'Emme brings her fascination with human design to the money conversation. Discover how generators, projectors, and manifestors each approach their finances differently.',
    contentPillar: 'personality',
    pillarLabel: 'Money Personalities',
    duration: 44,
    publishedAt: '2026-07-29',
    alpStage: 'Awareness',
    bestFor: 'All Personas',
    keyConcepts: ['Human design', 'Energy types', 'Decision-making styles'],
  },
  {
    slug: 'money-taboo',
    episodeNumber: 6,
    title: "The Money Taboo — Why We'll Talk About Sex But Not Salaries",
    description:
      "Money is still one of the last taboos. David and Emme explore why financial secrecy persists, what it costs us emotionally, and how to start having honest money conversations.",
    contentPillar: 'generational',
    pillarLabel: 'Generations & Culture',
    duration: 37,
    publishedAt: '2026-08-05',
    alpStage: 'Integration',
    bestFor: 'Anxious Protector, Balanced Builder',
    keyConcepts: ['Financial secrecy', 'Money conversations', 'Cultural norms'],
  },
]

const alpStageColors: Record<string, string> = {
  Awareness: 'stage-sage',
  Examination: 'stage-clay',
  Embodiment: 'stage-sage',
  Integration: 'stage-clay',
}

const pageStyles = `
  .filterbar { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
  .filter { font-family: var(--sans); font-size: 0.88rem; font-weight: 500; padding: 0.55em 1.2em; border-radius: 999px; border: 1px solid var(--line-strong); background: var(--paper); color: var(--ink-soft); cursor: pointer; transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease; }
  .filter:hover { border-color: var(--ink); color: var(--ink); }
  .filter.is-active { background: var(--ink); border-color: var(--ink); color: var(--paper); }

  .ep-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  @media (max-width: 920px) { .ep-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 640px) { .ep-grid { grid-template-columns: 1fr; } }

  .ep-card { display: flex; flex-direction: column; overflow: hidden; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; transition: border-color 0.2s ease, transform 0.2s ease; }
  .ep-card:hover { border-color: var(--line-strong); transform: translateY(-3px); }

  .ep-thumb { position: relative; aspect-ratio: 16 / 9; background: var(--ink); display: grid; place-items: center; }
  .ep-thumb .epn { font-family: var(--serif); font-size: 2rem; font-weight: 500; color: var(--paper); letter-spacing: -0.01em; }
  .ep-thumb .dur { position: absolute; bottom: 10px; right: 10px; font-family: var(--mono); font-size: 0.64rem; letter-spacing: 0.06em; padding: 3px 8px; border-radius: 999px; background: color-mix(in oklch, var(--ink) 70%, transparent); color: var(--paper); }

  .ep-body { padding: 22px 24px 24px; display: flex; flex-direction: column; flex: 1; }
  .ep-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 14px; }
  .ep-tag { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; border: 1px solid var(--line); background: var(--paper-2); color: var(--ink-soft); }
  .ep-tag.stage-sage { background: var(--sage-wash); border-color: color-mix(in oklch, var(--sage-deep) 25%, transparent); color: var(--sage-deep); }
  .ep-tag.stage-clay { background: var(--clay-wash); border-color: color-mix(in oklch, var(--clay) 35%, transparent); color: var(--clay); }

  .ep-card h2 { font-size: 1.2rem; line-height: 1.28; margin-bottom: 10px; transition: color 0.18s ease; }
  .ep-card:hover h2 { color: var(--sage-deep); }
  .ep-desc { font-size: 0.92rem; color: var(--ink-soft); line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .ep-meta { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); }
  .ep-bestfor { font-size: 0.82rem; color: var(--ink-soft); }
  .ep-bestfor b { font-weight: 600; color: var(--ink); }
  .ep-date { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.06em; color: var(--ink-faint); margin-top: 8px; }

  .note-band { background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); border-radius: 14px; padding: 22px 26px; font-size: 0.9rem; color: var(--sage-deep); line-height: 1.6; max-width: 760px; }
`

export default function EpisodesPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">The podcast</p>
          <h1>
            Every <em>episode</em>, by feeling
          </h1>
          <p className="lead">
            Every week, David and Emme explore a different dimension of your emotional relationship
            with money. Each episode is tagged by theme and Money Persona, so you can find exactly
            what you need.
          </p>
        </div>
      </section>

      {/* episodes */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '0' }}>
            <p className="eyebrow">Browse the show</p>
            <h2>All episodes</h2>
          </div>

          {/* Filters */}
          <div className="filterbar">
            <button className="filter is-active">All Episodes</button>
            {CONTENT_PILLARS.map((pillar) => (
              <button key={pillar.value} className="filter">
                {pillar.label}
              </button>
            ))}
          </div>

          {/* Episode Grid */}
          <div className="ep-grid" style={{ marginTop: '40px' }}>
            {episodes.map((ep) => (
              <Link key={ep.slug} href={`/episodes/${ep.slug}`} className="ep-card">
                {/* Thumbnail */}
                <div className="ep-thumb">
                  <span className="epn">EP {ep.episodeNumber}</span>
                  <span className="dur">{ep.duration} min</span>
                </div>

                {/* Content */}
                <div className="ep-body">
                  <div className="ep-tags">
                    <span className="ep-tag">{ep.pillarLabel}</span>
                    <span className={`ep-tag ${alpStageColors[ep.alpStage] || ''}`}>
                      {ep.alpStage}
                    </span>
                  </div>
                  <h2>{ep.title}</h2>
                  <p className="ep-desc">{ep.description}</p>
                  <div className="ep-meta">
                    <p className="ep-bestfor">
                      <b>Best for:</b> {ep.bestFor}
                    </p>
                    <p className="ep-date">
                      {new Date(ep.publishedAt).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="band">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <p className="eyebrow">Where to start</p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '14px 0 16px' }}>
              Not sure which episode is for you?
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px' }}>
              Take the free quiz to discover your Money Persona, then come back for the episodes
              that speak to it. Everything here is general education — not therapy, and not financial
              advice.
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
