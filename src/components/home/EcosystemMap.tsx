import Link from 'next/link'

const steps = [
  {
    icon: '📻',
    title: 'The Podcast',
    price: 'Free',
    description: 'Builds awareness of the emotions driving your financial decisions through weekly conversations.',
    cta: { href: '/episodes', label: 'Start Listening' },
  },
  {
    icon: '🎯',
    title: 'Money Persona Quiz',
    price: 'Free',
    description: 'Identifies your dominant emotional money pattern and recommends your path.',
    cta: { href: '/quiz', label: 'Take the Quiz' },
  },
  {
    icon: '📚',
    title: 'Transformation Program',
    price: '$697–997',
    description: '12-week structured transformation program with interactive course and companion app.',
    cta: { href: '/courses', label: 'Explore Program' },
  },
  {
    icon: '📱',
    title: 'Companion App',
    price: 'Included',
    description: 'Track emotions at the moment of decision. Build awareness. See patterns.',
    cta: { href: '/app', label: 'See Features' },
  },
  {
    icon: '🤝',
    title: 'Ongoing Community',
    price: 'Included',
    description: 'Alumni support, advanced content, and continued growth beyond the program.',
    cta: null,
  },
]

export function EcosystemMap() {
  return (
    <section className="bg-navy-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            More Than a Podcast: A Complete Transformation System
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-300">
            Everything works together to create lasting transformation — from free
            awareness to deep, supported change.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-navy-700 bg-navy-700/50 p-5 transition-colors hover:border-gold-500/30">
                <div className="text-3xl">{step.icon}</div>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-gold-500/20 px-2.5 py-0.5 text-xs font-medium text-gold-400">
                  {step.price}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-400">
                  {step.description}
                </p>
                {step.cta && (
                  <Link
                    href={step.cta.href}
                    className="mt-4 text-xs font-semibold text-gold-500 transition-colors hover:text-gold-400"
                  >
                    {step.cta.label} &rarr;
                  </Link>
                )}
              </div>
              {/* Arrow connector (hidden on mobile, visible on lg) */}
              {i < steps.length - 1 && (
                <div className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-navy-600 lg:block">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/episodes"
            className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400"
          >
            Start with the Podcast
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-navy-500 hover:bg-navy-700/50"
          >
            Or Jump to the Quiz
          </Link>
        </div>
      </div>
    </section>
  )
}
