import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSONAS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Discover Your Money Persona',
  description:
    'Take our free 3-minute quiz to discover your emotional money pattern. Understand why you do what you do with money — and get a personalised action plan.',
}

const personaList = Object.values(PERSONAS)

export default function QuizLandingPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
            Free · 3 Minutes · Instant Results
          </div>
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            Discover Your Money Persona
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-600">
            Everyone has a unique emotional relationship with money — shaped by childhood,
            relationships, and life experience. This quiz reveals yours.
          </p>
        </div>

        {/* What You'll Discover */}
        <div className="mt-12 rounded-2xl border border-navy-100 bg-white p-8">
          <h2 className="text-center text-xl font-semibold text-navy-800">
            What You&apos;ll Discover
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Your primary Money Persona and what it means',
              'Why you do what you do with money',
              'Your specific strengths and challenges',
              'A personalised action plan for growth',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs text-gold-700">
                  ✓
                </span>
                <span className="text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Persona Previews */}
        <div className="mt-12">
          <h2 className="text-center text-xl font-semibold text-navy-800">
            The Five Money Personas
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {personaList.map((persona) => (
              <div
                key={persona.name}
                className="rounded-xl border border-navy-100 bg-white p-4 text-center transition-all hover:border-gold-300 hover:shadow-md"
              >
                <span className="text-2xl">{persona.emoji}</span>
                <p className="mt-2 text-sm font-semibold text-navy-800">{persona.name}</p>
                <p className="mt-1 text-xs text-navy-500">{persona.tagline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/quiz/questions"
            className="inline-flex rounded-lg bg-gold-500 px-8 py-4 text-lg font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Start the Quiz
          </Link>
          <p className="mt-4 text-sm text-navy-500">
            Join thousands of Australians discovering their emotional money patterns.
            <br />
            No sign-up required. Your results are instant.
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h2 className="text-center text-xl font-semibold text-navy-800">How It Works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Answer 20 Questions',
                desc: 'Go with your gut — first instinct is usually right.',
              },
              {
                step: '2',
                title: 'Get Your Persona',
                desc: 'Discover which of the five emotional money patterns fits you best.',
              },
              {
                step: '3',
                title: 'Get Your Action Plan',
                desc: 'Receive personalised strategies, mantras, and growth practices.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-3 font-semibold text-navy-800">{item.title}</h3>
                <p className="mt-1 text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
