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
  Awareness: 'bg-blue-50 text-blue-700',
  Examination: 'bg-purple-50 text-purple-700',
  Embodiment: 'bg-rose-50 text-rose-700',
  Integration: 'bg-emerald-50 text-emerald-700',
}

export default function EpisodesPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">Episodes</h1>
          <p className="mt-4 text-lg text-navy-600">
            Every week, David and Emme explore a different dimension of your emotional
            relationship with money. Each episode is tagged to ALP stages and Money Personas
            so you can find exactly what you need.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button className="rounded-full bg-navy-800 px-4 py-2 text-sm font-medium text-white">
            All Episodes
          </button>
          {CONTENT_PILLARS.map((pillar) => (
            <button
              key={pillar.value}
              className="rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
            >
              {pillar.label}
            </button>
          ))}
        </div>

        {/* Episode Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/episodes/${ep.slug}`}
              className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-navy-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
                  <span className="text-3xl font-bold text-gold-500">EP {ep.episodeNumber}</span>
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-navy-900/80 px-2 py-0.5 text-xs font-medium text-white">
                  {ep.duration} min
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tags row */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                    {ep.pillarLabel}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${alpStageColors[ep.alpStage] || 'bg-navy-50 text-navy-700'}`}>
                    {ep.alpStage}
                  </span>
                </div>
                <h2 className="text-lg font-semibold leading-snug text-navy-800 transition-colors group-hover:text-gold-600">
                  {ep.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-navy-600">{ep.description}</p>
                {/* Persona & concepts */}
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-navy-500">
                    <span className="font-medium">Best for:</span> {ep.bestFor}
                  </p>
                </div>
                <p className="mt-2 text-xs text-navy-400">
                  {new Date(ep.publishedAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
