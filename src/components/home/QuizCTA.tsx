import Link from 'next/link'
import { PERSONAS } from '@/lib/constants'

export function QuizCTA() {
  const personaList = Object.values(PERSONAS)

  return (
    <section className="bg-navy-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What&apos;s your emotional relationship with money?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-300">
              Take our free 3-minute quiz to discover your Money Persona — the emotional
              pattern that drives every financial decision you make. Get personalised
              episode recommendations based on your results.
            </p>
            <Link
              href="/quiz"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30"
            >
              Take the Free Quiz
            </Link>
          </div>

          {/* Persona Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {personaList.map((persona) => (
              <div
                key={persona.name}
                className="rounded-xl border border-navy-700 bg-navy-700/50 p-4 transition-colors hover:border-gold-500/30"
              >
                <div className="text-2xl">{persona.emoji}</div>
                <h3 className="mt-2 text-sm font-semibold text-white">{persona.name}</h3>
                <p className="mt-1 text-xs text-navy-400">{persona.tagline}</p>
              </div>
            ))}
            {/* Extra card for mystery */}
            <div className="flex items-center justify-center rounded-xl border border-dashed border-gold-500/30 p-4">
              <div className="text-center">
                <div className="text-2xl">❓</div>
                <p className="mt-2 text-xs font-medium text-gold-500">Which one are you?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
