import type { Metadata } from 'next'
import Link from 'next/link'

// Placeholder episode data
const episodeData: Record<string, {
  episodeNumber: number
  title: string
  description: string
  contentPillar: string
  pillarLabel: string
  duration: number
  publishedAt: string
  showNotes: string[]
  youtubeId?: string
  spotifyUrl?: string
}> = {
  'your-money-story': {
    episodeNumber: 1,
    title: 'Your Money Story — How Childhood Messages Shape Your Financial Life',
    description:
      'Every financial decision you make is influenced by messages you absorbed as a child. David and Emme explore how your earliest money memories are still running the show today — and what you can do to rewrite the script.',
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 38,
    publishedAt: '2026-07-01',
    showNotes: [
      'How childhood money messages become adult financial habits',
      'The difference between what your parents said and what you felt',
      'Common money stories: scarcity, abundance, shame, and secrecy',
      'A simple exercise to identify your dominant money narrative',
      'Why awareness is the first step — not willpower',
    ],
  },
  'five-money-personas': {
    episodeNumber: 2,
    title: 'The Five Money Personas — Which One Are You?',
    description:
      'Are you an Anxious Protector? A Free Spirit? A Wounded Warrior? David and Emme introduce the five emotional patterns that define your relationship with money.',
    contentPillar: 'personality',
    pillarLabel: 'Money Personalities',
    duration: 42,
    publishedAt: '2026-07-08',
    showNotes: [
      'Introducing the 5 Money Personas framework',
      'The Balanced Builder — steady and growth-oriented',
      'The Anxious Protector — driven by financial fear',
      'The Avoidant Free Spirit — living in the moment',
      'The Wounded Warrior — carrying past financial trauma',
      'The Perfectionist Analyzer — paralyzed by analysis',
      'Take the quiz to discover your persona',
    ],
  },
  'breakup-spending': {
    episodeNumber: 3,
    title: 'Breakup Spending — Why Heartbreak Hits Your Wallet',
    description:
      'After a breakup, many of us cope through spending. David and Emme unpack the emotional mechanics of retail therapy and how to catch yourself before the credit card does.',
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 35,
    publishedAt: '2026-07-15',
    showNotes: [
      'The neuroscience of heartbreak and spending',
      'Why shopping activates the same reward pathways as love',
      "Emme's personal story with breakup spending",
      'The 48-hour rule for emotional purchases',
      'Healthier emotional outlets that actually work',
    ],
  },
}

// Fallback for episodes not in our data
function getEpisode(slug: string) {
  return episodeData[slug] || {
    episodeNumber: 0,
    title: 'Episode Coming Soon',
    description: 'This episode is coming soon. Check back later!',
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 0,
    publishedAt: '2026-07-01',
    showNotes: [],
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const episode = getEpisode(slug)
  return {
    title: `Ep ${episode.episodeNumber}: ${episode.title}`,
    description: episode.description,
  }
}

const pageStyles = `
  .ep-crumb { display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 22px; }
  .ep-crumb a { color: var(--sage-deep); transition: color 0.18s ease; }
  .ep-crumb a:hover { color: var(--ink); }
  .ep-crumb .sep { color: var(--line-strong); }

  .ep-pill { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clay); border: 1px solid color-mix(in oklch, var(--clay) 35%, transparent); background: var(--clay-wash); padding: 6px 14px; border-radius: 999px; margin-bottom: 20px; }

  .ep-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 14px; margin-top: 20px; font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-faint); }
  .ep-meta .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--line-strong); flex: none; }

  .player { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
  .player .stage { aspect-ratio: 16 / 9; display: grid; place-items: center; background: var(--paper-3); border-bottom: 1px solid var(--line); }
  .player .pcore { text-align: center; color: var(--ink-soft); }
  .player .pbtn { width: 64px; height: 64px; border-radius: 50%; background: var(--sage-wash); color: var(--sage-deep); display: grid; place-items: center; margin: 0 auto 16px; border: 1px solid color-mix(in oklch, var(--sage-deep) 25%, transparent); }
  .player .pnote { font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; }
  .player .links { display: flex; align-items: center; flex-wrap: wrap; gap: 18px; padding: 18px 26px; }
  .player .links .lbl { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faint); }
  .player .links a { font-size: 0.92rem; color: var(--ink-soft); transition: color 0.18s ease; }
  .player .links a:hover { color: var(--sage-deep); }

  .ep-about { max-width: 68ch; }
  .ep-about p { font-size: 1.08rem; color: var(--ink-soft); line-height: 1.7; }

  .notes-card { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 38px 36px; }
  .notes-card .nlist { list-style: none; margin: 22px 0 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
  .notes-card .nlist li { display: flex; gap: 14px; align-items: flex-start; font-size: 0.98rem; color: var(--ink-soft); line-height: 1.55; }
  .notes-card .nlist .num { flex: none; width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; background: var(--sage-wash); color: var(--sage-deep); font-family: var(--mono); font-size: 0.72rem; font-weight: 500; margin-top: 1px; }

  .quiz-card { background: var(--ink); color: var(--paper); border-radius: 24px; padding: 56px 48px; text-align: center; }
  .quiz-card .eyebrow { color: var(--sage); margin-bottom: 14px; }
  .quiz-card h2 { color: var(--paper); font-size: clamp(1.7rem, 3vw, 2.3rem); margin: 0 auto 14px; max-width: 18ch; }
  .quiz-card p { color: oklch(0.82 0.012 80); max-width: 46ch; margin: 0 auto 28px; }
  .quiz-card .btn-primary { background: var(--sage); border-color: var(--sage); color: oklch(0.2 0.02 150); }
  .quiz-card .btn-primary:hover { background: var(--paper); border-color: var(--paper); }
  @media (max-width: 560px) { .quiz-card { padding: 40px 24px; } }

  .back-link { display: inline-flex; align-items: center; gap: 0.5em; font-family: var(--sans); font-size: 0.95rem; color: var(--sage-deep); }
  .back-link:hover { color: var(--ink); }
`

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const episode = getEpisode(slug)

  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          {/* Breadcrumb */}
          <nav className="ep-crumb">
            <Link href="/episodes">Episodes</Link>
            <span className="sep">/</span>
            <span>Episode {episode.episodeNumber}</span>
          </nav>

          <span className="ep-pill">{episode.pillarLabel}</span>
          <h1>{episode.title}</h1>

          <div className="ep-meta">
            <span>Episode {episode.episodeNumber}</span>
            <span className="dot" aria-hidden="true" />
            <span>{episode.duration} min</span>
            <span className="dot" aria-hidden="true" />
            <span>
              {new Date(episode.publishedAt).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {/* player */}
      <section className="band alt">
        <div className="wrap">
          <div className="player">
            <div className="stage">
              <div className="pcore">
                <div className="pbtn" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="pnote">Video player coming at launch</p>
              </div>
            </div>

            {/* Platform Links */}
            <div className="links">
              <span className="lbl">Listen on</span>
              <a href="#">YouTube</a>
              <a href="#">Spotify</a>
              <a href="#">Apple Podcasts</a>
            </div>
          </div>
        </div>
      </section>

      {/* about this episode */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '24px' }}>
            <p className="eyebrow">About this episode</p>
            <h2>What it&apos;s about</h2>
          </div>
          <div className="ep-about">
            <p>{episode.description}</p>
          </div>
        </div>
      </section>

      {/* show notes */}
      {episode.showNotes.length > 0 && (
        <section className="band alt">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: '28px' }}>
              <p className="eyebrow">In this episode</p>
              <h2>What we cover</h2>
            </div>
            <div className="notes-card">
              <ul className="nlist">
                {episode.showNotes.map((note, i) => (
                  <li key={i}>
                    <span className="num" aria-hidden="true">{i + 1}</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* quiz cta */}
      <section className="band">
        <div className="wrap">
          <div className="quiz-card">
            <p className="eyebrow">Where to start</p>
            <h2>Discover your Money Persona</h2>
            <p>
              Take our free 3-minute quiz to find out which emotional money pattern drives your
              decisions.
            </p>
            <Link className="btn btn-primary" href="/quiz">
              Take the quiz
            </Link>
          </div>

          {/* Back Link */}
          <div style={{ marginTop: '36px' }}>
            <Link href="/episodes" className="back-link">
              <span className="arrow" aria-hidden="true">&larr;</span> Back to all episodes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
