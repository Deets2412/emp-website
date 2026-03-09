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
              Everyone has a dominant emotional pattern with money. Understanding yours
              is the first step in the ALP framework — and the key to unlocking
              second-order change.
            </p>
            <p className="mt-3 text-sm text-navy-400">
              In the Transformation Program, your learning path adapts to your persona
              with custom content, tailored app prompts, and persona-specific community groups.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30"
              >
                Take the Free Quiz
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-lg border border-navy-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-navy-500 hover:bg-navy-700/50"
              >
                Explore the Program
              </Link>
            </div>
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
