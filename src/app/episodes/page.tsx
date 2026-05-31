import type { Metadata } from 'next'
import Link from 'next/link'
import { SEASON_ONE, BONUS_EPISODES, ALL_EPISODES, type Episode } from '@/data/episodes'

export const metadata: Metadata = {
  title: 'Episodes',
  description:
    'Browse all episodes of The Emotional Money Podcast. Each episode is tagged by theme and Money Persona so you can find exactly what you need.',
}

const alpStageColors: Record<string, string> = {
  Awareness: 'stage-sage',
  Examination: 'stage-clay',
  Embodiment: 'stage-sage',
  Integration: 'stage-clay',
}

// Filter pills derived from the actual lineup, so they always match the content.
const filterLabels = Array.from(new Set(ALL_EPISODES.map((ep) => ep.pillarLabel)))

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
  .ep-desc { font-size: 0.92rem; color: var(--ink-soft); line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .ep-meta { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); }
  .ep-bestfor { font-size: 0.82rem; color: var(--ink-soft); }
  .ep-bestfor b { font-weight: 600; color: var(--ink); }
  .ep-date { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.06em; color: var(--ink-faint); margin-top: 8px; }

  .note-band { background: var(--sage-wash); border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); border-radius: 14px; padding: 22px 26px; font-size: 0.9rem; color: var(--sage-deep); line-height: 1.6; max-width: 760px; }
`

function EpisodeCard({ ep }: { ep: Episode }) {
  return (
    <Link href={`/episodes/${ep.slug}`} className="ep-card">
      <div className="ep-thumb">
        <span className="epn">{ep.episodeNumber !== null ? `EP ${ep.episodeNumber}` : 'Bonus'}</span>
        <span className="dur">{ep.duration} min</span>
      </div>
      <div className="ep-body">
        <div className="ep-tags">
          <span className="ep-tag">{ep.pillarLabel}</span>
          {ep.alpStage && (
            <span className={`ep-tag ${alpStageColors[ep.alpStage] || ''}`}>{ep.alpStage}</span>
          )}
        </div>
        <h2>{ep.title}</h2>
        <p className="ep-desc">{ep.description}</p>
        <div className="ep-meta">
          <p className="ep-bestfor">
            <b>Best for:</b> {ep.bestFor}
          </p>
          {ep.publishedAt && (
            <p className="ep-date">
              {new Date(ep.publishedAt).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

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

      {/* season 1 */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '0' }}>
            <p className="eyebrow">Season 1</p>
            <h2>All episodes</h2>
          </div>

          {/* Filters */}
          <div className="filterbar">
            <button className="filter is-active">All Episodes</button>
            {filterLabels.map((label) => (
              <button key={label} className="filter">
                {label}
              </button>
            ))}
          </div>

          {/* Episode Grid */}
          <div className="ep-grid" style={{ marginTop: '40px' }}>
            {SEASON_ONE.map((ep) => (
              <EpisodeCard key={ep.slug} ep={ep} />
            ))}
          </div>
        </div>
      </section>

      {/* bonus & specials */}
      {BONUS_EPISODES.length > 0 && (
        <section className="band">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Bonus &amp; Specials</p>
              <h2>Off-canon conversations</h2>
              <p className="lead">
                Extra episodes that sit alongside Season 1 — explored outside the core evidence base,
                for the curious.
              </p>
            </div>
            <div className="ep-grid">
              {BONUS_EPISODES.map((ep) => (
                <EpisodeCard key={ep.slug} ep={ep} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* cta */}
      <section className="band alt">
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
