import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSONAS } from '@/lib/constants'
import type { PersonaSlug } from '@/lib/constants'
import { personaProfiles } from '@/data/personas'

function getPersona(slug: string) {
  const validSlugs = Object.keys(PERSONAS) as PersonaSlug[]
  if (validSlugs.includes(slug as PersonaSlug)) {
    return personaProfiles[slug as PersonaSlug]
  }
  return null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ persona: string }>
}): Promise<Metadata> {
  const { persona: slug } = await params
  const persona = getPersona(slug)
  if (!persona) {
    return { title: 'Money Persona Results' }
  }
  return {
    title: `You're a ${persona.name}! — Money Persona Results`,
    description: persona.description,
  }
}

export default async function QuizResultsPage({
  params,
}: {
  params: Promise<{ persona: string }>
}) {
  const { persona: slug } = await params
  const persona = getPersona(slug)

  if (!persona) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-bg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-800">Persona Not Found</h1>
          <p className="mt-2 text-navy-600">
            This persona doesn&apos;t exist. Try taking the quiz!
          </p>
          <Link
            href="/quiz"
            className="mt-4 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    )
  }

  const allPersonas = Object.values(personaProfiles)

  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Result Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
            Your Money Persona
          </div>
          <div className="text-5xl">{persona.emoji}</div>
          <h1 className="mt-4 text-3xl font-bold text-navy-800 sm:text-4xl">
            You&apos;re a {persona.name}!
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">{persona.tagline}</p>
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-navy-700">{persona.description}</p>
        </div>

        {/* Strengths & Challenges */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-white p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-navy-800">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm">
                💪
              </span>
              Your Strengths
            </h2>
            <ul className="mt-4 space-y-3">
              {persona.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-700">
                  <span className="mt-1 text-green-500">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-navy-800">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm">
                🎯
              </span>
              Your Challenges
            </h2>
            <ul className="mt-4 space-y-3">
              {persona.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-700">
                  <span className="mt-1 text-amber-500">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Origin */}
        <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-navy-800">Where This Comes From</h2>
          <p className="mt-3 leading-relaxed text-navy-700">{persona.origin}</p>
        </div>

        {/* Mantras */}
        <div className="mt-8 rounded-2xl bg-navy-800 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Your Mantras</h2>
          <div className="mt-4 space-y-3">
            {persona.mantras.map((m, i) => (
              <p key={i} className="text-lg italic text-navy-200">
                &ldquo;{m}&rdquo;
              </p>
            ))}
          </div>
        </div>

        {/* Daily & Weekly Practice */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-white p-6">
            <h2 className="text-lg font-semibold text-navy-800">Daily Practice</h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                  Morning
                </p>
                <p className="mt-1 text-sm text-navy-700">{persona.dailyPractice.morning}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">
                  Evening
                </p>
                <p className="mt-1 text-sm text-navy-700">{persona.dailyPractice.evening}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-6">
            <h2 className="text-lg font-semibold text-navy-800">Weekly Practice</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-700">
              {persona.weeklyPractice}
            </p>
          </div>
        </div>

        {/* Growth Edges */}
        <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-navy-800">
            Signs You&apos;re Growing
          </h2>
          <ul className="mt-4 space-y-3">
            {persona.growthEdges.map((g, i) => (
              <li key={i} className="flex items-start gap-3 text-navy-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-semibold text-gold-700">
                  {i + 1}
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Partner Advice */}
        <div className="mt-8 rounded-2xl border border-gold-200 bg-gold-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-navy-800">
            For Your Partner
          </h2>
          <p className="mt-3 leading-relaxed text-navy-700">{persona.partnerAdvice}</p>
        </div>

        {/* Other Personas */}
        <div className="mt-12">
          <h2 className="text-center text-xl font-semibold text-navy-800">
            Explore All Personas
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {allPersonas.map((p) => (
              <Link
                key={p.slug}
                href={`/quiz/results/${p.slug}`}
                className={`rounded-xl border p-3 text-center transition-all hover:shadow-md ${
                  p.slug === persona.slug
                    ? 'border-gold-400 bg-gold-50'
                    : 'border-navy-100 bg-white hover:border-gold-300'
                }`}
              >
                <span className="text-xl">{p.emoji}</span>
                <p className="mt-1 text-xs font-semibold text-navy-800">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Share & CTAs */}
        <div className="mt-12 space-y-6">
          {/* Share */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 text-center">
            <h3 className="font-semibold text-navy-800">Share Your Results</h3>
            <p className="mt-1 text-sm text-navy-600">
              Help your friends discover their Money Persona too!
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button className="rounded-lg border border-navy-200 px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700">
                Copy Link
              </button>
              <button className="rounded-lg border border-navy-200 px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700">
                Share on X
              </button>
              <button className="rounded-lg border border-navy-200 px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700">
                Share on Facebook
              </button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="rounded-2xl bg-navy-800 p-8 text-center">
            <h3 className="text-xl font-bold text-white">Ready to Go Deeper?</h3>
            <p className="mt-2 text-navy-300">
              Download our free workbook with exercises tailored to your persona, or explore
              episodes that speak to your money patterns.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/resources"
                className="inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
              >
                Free Resources
              </Link>
              <Link
                href="/episodes"
                className="inline-flex rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
              >
                Browse Episodes
              </Link>
            </div>
          </div>
        </div>

        {/* Retake */}
        <div className="mt-8 text-center">
          <Link
            href="/quiz/questions"
            className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
          >
            ← Retake the Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
