import type { Metadata } from 'next'
import Link from 'next/link'
import { ALP_STAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Affective Liminal Psychology — The Science Behind EMP',
  description:
    'Discover how Affective Liminal Psychology (ALP) creates lasting financial transformation. The evidence-based framework behind This Naked Mind — now applied to your relationship with money.',
}

export default function ALPMethodologyPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
            Evidence-Based Framework
          </div>
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            Affective Liminal Psychology
          </h1>
          <p className="mt-4 text-xl text-gold-600">
            The science behind lasting financial transformation
          </p>
          <p className="mt-6 text-lg text-navy-600">
            Traditional financial advice tells you what to do with money. ALP changes who you
            are with money. That&apos;s the difference between first-order change (forcing new
            behaviour) and second-order change (genuinely wanting different things).
          </p>
        </div>

        {/* What is ALP */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-800">What is ALP?</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-navy-700">
            <p>
              Affective Liminal Psychology is the evidence-based framework developed by Annie
              Grace through her work with This Naked Mind. It combines insights from
              neuroscience, psychology, and behavioural science to create genuine, lasting change
              in deeply ingrained patterns.
            </p>
            <p>
              The framework achieved a remarkable 90% efficacy rate in helping people transform
              their relationship with alcohol — not through willpower or shame, but by changing
              how people genuinely FEEL about the behaviour. We&apos;re applying this same
              proven methodology to money.
            </p>
          </div>
        </div>

        {/* How ALP Works */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-navy-800">
            How ALP Works: The Four Stages
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ALP_STAGES.map((stage, i) => (
              <div
                key={stage.key}
                className="rounded-2xl border border-navy-100 bg-white p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-900">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-800">{stage.label}</h3>
                    <span className="text-sm text-navy-500">Weeks {stage.weeks}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-600">
                  {stage.description}
                </p>
                <div className="mt-4 rounded-lg bg-slate-bg p-4">
                  <p className="text-xs font-medium text-navy-500">What happens here:</p>
                  <p className="mt-1 text-sm text-navy-700">
                    {stage.key === 'awareness' &&
                      'You uncover the unconscious money beliefs you absorbed as a child. These hidden "rules" have been running your financial decisions without your awareness.'}
                    {stage.key === 'examination' &&
                      'You test each belief against reality. Are they still true? Were they ever true? This is where liminal space opens — the gap between old belief and new understanding.'}
                    {stage.key === 'embodiment' &&
                      'Through parts work, somatic practice, and wound healing, you integrate new understanding at the emotional level — not just the intellectual level.'}
                    {stage.key === 'integration' &&
                      'Your new emotional relationship with money becomes your default. Values alignment, healthy relationship dynamics, and sustainable habits emerge naturally.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* First vs Second Order Change */}
        <div className="mt-16 rounded-2xl bg-navy-800 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              First-Order vs Second-Order Change
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
                  First-Order Change (Traditional)
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Force yourself to budget',
                    'Use willpower to resist impulse buys',
                    'Feel guilty when you "fail"',
                    'White-knuckle your way through',
                    'Constant internal battle',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-300">
                      <span className="mt-0.5 text-navy-500">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-500">
                  Second-Order Change (ALP)
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Genuinely want to manage money well',
                    'Impulse to overspend dissolves naturally',
                    'Self-compassion replaces shame',
                    'Aligned behaviour feels effortless',
                    'Internal harmony around money',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-300">
                      <span className="mt-0.5 text-gold-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Base */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-navy-800">
            The Evidence Base
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy-600">
            ALP integrates proven therapeutic frameworks into a structured educational format.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'CBT',
                full: 'Cognitive Behavioural Therapy',
                desc: 'Identifies and reframes the unhelpful thought patterns that drive financial anxiety and avoidance.',
              },
              {
                name: 'ACT',
                full: 'Acceptance & Commitment Therapy',
                desc: 'Builds psychological flexibility and helps align financial decisions with personal values.',
              },
              {
                name: 'IFS',
                full: 'Internal Family Systems',
                desc: 'Explores the different "parts" of you that have competing agendas around money (saver vs spender).',
              },
              {
                name: 'Attachment',
                full: 'Attachment Theory',
                desc: 'Reveals how your earliest relationships created the emotional blueprint for how you relate to money.',
              },
            ].map((framework) => (
              <div
                key={framework.name}
                className="rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
              >
                <span className="inline-flex rounded-full bg-gold-50 px-3 py-1 text-sm font-bold text-gold-700">
                  {framework.name}
                </span>
                <h3 className="mt-3 text-base font-semibold text-navy-800">
                  {framework.full}
                </h3>
                <p className="mt-2 text-sm text-navy-600">{framework.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">
            Ready to Experience ALP?
          </h2>
          <p className="mt-3 text-navy-300">
            Start with the free quiz to discover your Money Persona, or explore the
            Transformation Program for the full ALP experience.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/quiz"
              className="inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400"
            >
              Take the Free Quiz
            </Link>
            <Link
              href="/courses"
              className="inline-flex rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-navy-500 hover:bg-navy-700/50"
            >
              Explore the Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
