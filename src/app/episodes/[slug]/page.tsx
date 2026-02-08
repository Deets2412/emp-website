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

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const episode = getEpisode(slug)

  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-navy-500">
          <Link href="/episodes" className="transition-colors hover:text-gold-600">
            Episodes
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy-700">Episode {episode.episodeNumber}</span>
        </nav>

        {/* Episode Header */}
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-gold-50 px-3 py-1 text-sm font-medium text-gold-700">
            {episode.pillarLabel}
          </div>
          <h1 className="text-3xl font-bold text-navy-800 sm:text-4xl">{episode.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-navy-500">
            <span>Episode {episode.episodeNumber}</span>
            <span className="h-1 w-1 rounded-full bg-navy-300" />
            <span>{episode.duration} min</span>
            <span className="h-1 w-1 rounded-full bg-navy-300" />
            <span>
              {new Date(episode.publishedAt).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Player Placeholder */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-navy-200 bg-white">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20">
                <svg className="h-8 w-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-navy-300">Video player coming at launch</p>
            </div>
          </div>

          {/* Platform Links */}
          <div className="flex items-center gap-4 border-t border-navy-100 px-6 py-4">
            <span className="text-sm font-medium text-navy-600">Listen on:</span>
            <a href="#" className="text-sm text-navy-500 transition-colors hover:text-gold-600">
              YouTube
            </a>
            <a href="#" className="text-sm text-navy-500 transition-colors hover:text-gold-600">
              Spotify
            </a>
            <a href="#" className="text-sm text-navy-500 transition-colors hover:text-gold-600">
              Apple Podcasts
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-navy-800">About This Episode</h2>
          <p className="mt-3 leading-relaxed text-navy-700">{episode.description}</p>
        </div>

        {/* Show Notes */}
        {episode.showNotes.length > 0 && (
          <div className="mb-8 rounded-2xl border border-navy-100 bg-white p-6">
            <h2 className="text-xl font-semibold text-navy-800">What We Cover</h2>
            <ul className="mt-4 space-y-3">
              {episode.showNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-semibold text-gold-700">
                    {i + 1}
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quiz CTA */}
        <div className="rounded-2xl bg-navy-800 p-8 text-center">
          <h3 className="text-xl font-bold text-white">
            Discover your Money Persona
          </h3>
          <p className="mt-2 text-navy-300">
            Take our free 3-minute quiz to find out which emotional money pattern drives your decisions.
          </p>
          <Link
            href="/quiz"
            className="mt-4 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Take the Quiz
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/episodes"
            className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
          >
            &larr; Back to all episodes
          </Link>
        </div>
      </div>
    </div>
  )
}
