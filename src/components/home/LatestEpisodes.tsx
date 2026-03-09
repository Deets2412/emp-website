import Link from 'next/link'

// Placeholder episodes until Sanity is connected
const placeholderEpisodes = [
  {
    slug: 'your-money-story',
    episodeNumber: 1,
    title: 'Your Money Story — How Childhood Messages Shape Your Financial Life',
    description:
      'Every financial decision you make is influenced by messages you absorbed as a child. David and Emme explore how your earliest money memories are still running the show today.',
    contentPillar: 'Emotional Deep Dives',
    alpStage: 'Awareness',
    duration: 38,
    thumbnail: null,
  },
  {
    slug: 'five-money-personas',
    episodeNumber: 2,
    title: 'The Five Money Personas — Which One Are You?',
    description:
      'Are you an Anxious Protector? A Free Spirit? A Wounded Warrior? Discover the five emotional patterns that define your relationship with money.',
    contentPillar: 'Money Personalities',
    alpStage: 'Awareness',
    duration: 42,
    thumbnail: null,
  },
  {
    slug: 'breakup-spending',
    episodeNumber: 3,
    title: 'Breakup Spending — Why Heartbreak Hits Your Wallet',
    description:
      'After a breakup, many of us cope through spending. David and Emme unpack the emotional mechanics of retail therapy and how to catch yourself before the credit card does.',
    contentPillar: 'Real Life Money',
    alpStage: 'Examination',
    duration: 35,
    thumbnail: null,
  },
]

const alpStageColors: Record<string, string> = {
  Awareness: 'bg-blue-50 text-blue-700',
  Examination: 'bg-purple-50 text-purple-700',
  Embodiment: 'bg-rose-50 text-rose-700',
  Integration: 'bg-emerald-50 text-emerald-700',
}

export function LatestEpisodes() {
  return (
    <section className="bg-slate-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">
              Latest Episodes
            </h2>
            <p className="mt-2 text-lg text-navy-600">
              Fresh conversations about the emotional side of money
            </p>
          </div>
          <Link
            href="/episodes"
            className="hidden text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700 sm:block"
          >
            View all episodes &rarr;
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placeholderEpisodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/episodes/${ep.slug}`}
              className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-navy-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gold-500">EP {ep.episodeNumber}</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-navy-900/80 px-2 py-0.5 text-xs font-medium text-white">
                  {ep.duration} min
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                    {ep.contentPillar}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${alpStageColors[ep.alpStage] || 'bg-navy-50 text-navy-700'}`}>
                    {ep.alpStage}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-navy-800 transition-colors group-hover:text-gold-600">
                  {ep.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-navy-600">{ep.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/episodes"
          className="mt-8 block text-center text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700 sm:hidden"
        >
          View all episodes &rarr;
        </Link>
      </div>
    </section>
  )
}
