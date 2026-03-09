import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--color-gold-500)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--color-navy-500)_0%,_transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-navy-700/60 px-4 py-1.5 text-sm text-gold-400">
              <span className="inline-block h-2 w-2 rounded-full bg-gold-500" />
              Evidence-Based Financial Psychology
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Change how you <span className="text-gold-500">feel</span> about money,
              <br />
              and watch your financial life{' '}
              <span className="text-gold-500">transform</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-300">
              The only Australian podcast using Affective Liminal Psychology to create
              lasting financial transformation. The same methodology behind This Naked
              Mind&apos;s 90% success rate &mdash; now for your relationship with money.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30"
              >
                Take the Free Quiz
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-lg border border-navy-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-navy-500 hover:bg-navy-700/50"
              >
                Explore the Program
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 space-y-2.5 text-sm text-navy-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Same methodology: 90% success rate (This Naked Mind)
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                First application to money psychology in Australia
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Podcast + Interactive Course + Companion App
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[400px] w-[400px]">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-navy-600 opacity-40" />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-gold-700 opacity-30" />
              <div className="absolute inset-16 flex items-center justify-center rounded-full bg-navy-700/80">
                <div className="text-center">
                  <div className="text-6xl">💰</div>
                  <p className="mt-2 text-sm font-medium text-gold-400">
                    Your Money Story
                  </p>
                  <p className="text-xs text-navy-400">Starts with how you feel</p>
                </div>
              </div>
              {/* ALP Stage labels */}
              <div className="absolute left-0 top-1/4 rounded-lg bg-navy-700/90 px-3 py-1.5 text-xs font-medium text-gold-400 shadow-lg">
                Awareness
              </div>
              <div className="absolute right-0 top-1/3 rounded-lg bg-navy-700/90 px-3 py-1.5 text-xs font-medium text-gold-400 shadow-lg">
                Examination
              </div>
              <div className="absolute bottom-1/4 left-4 rounded-lg bg-navy-700/90 px-3 py-1.5 text-xs font-medium text-gold-400 shadow-lg">
                Embodiment
              </div>
              <div className="absolute bottom-1/3 right-4 rounded-lg bg-navy-700/90 px-3 py-1.5 text-xs font-medium text-gold-400 shadow-lg">
                Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
