import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet David and Emme — the hosts of The Emotional Money Podcast. Learn about our mission and the Affective Liminal Psychology framework powering lasting financial transformation.',
}

export default function AboutPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">Meet Your Hosts</h1>
          <p className="mt-4 text-lg text-navy-600">
            Two very different perspectives. One shared mission: helping you understand why you
            feel the way you do about money — and transforming that relationship using
            evidence-based psychology.
          </p>
        </div>

        {/* Host Bios */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* David */}
          <div className="rounded-2xl border border-navy-100 bg-white p-8">
            <div className="flex items-start gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xl font-bold text-gold-500">
                DM
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800">David</h2>
                <p className="text-sm text-gold-600">Co-Host &middot; Financial Educator</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-navy-700">
              With decades spent in the financial services industry, David noticed something
              that changed everything: the biggest barrier to financial success is never the
              numbers — it&apos;s the emotions. Fear, shame, guilt, avoidance — these feelings
              run the show behind every dollar decision.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700">
              David brings real-world financial knowledge and a deep curiosity about why knowing
              what to do with money and actually doing it are very different things.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Behavioural Finance', 'Financial Education', 'Money Psychology'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Emme */}
          <div className="rounded-2xl border border-navy-100 bg-white p-8">
            <div className="flex items-start gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xl font-bold text-navy-900">
                EM
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800">Emme</h2>
                <p className="text-sm text-gold-600">
                  Psychology Student &middot; Gen Z Perspective
                </p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-navy-700">
              At 25, Emme represents a generation navigating unprecedented financial anxiety —
              from housing affordability to cost-of-living pressures. As a psychology student,
              she brings a fresh, research-informed lens to the emotional side of money that
              traditional finance completely ignores.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700">
              Emme is not afraid to ask the questions her generation is thinking but nobody is
              saying out loud. Her vulnerability and curiosity make complex emotional concepts
              feel accessible and real.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Psychology', 'Gen Z Perspective', 'Emotional Intelligence'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ALP Approach */}
        <div className="mt-16 rounded-2xl border border-gold-200 bg-white p-8 sm:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
              Our Methodology
            </div>
            <h2 className="text-3xl font-bold text-navy-800">
              Our Approach: Psychology-First Change
            </h2>
            <p className="mt-4 leading-relaxed text-navy-700">
              While David brings financial education experience and Emme contributes psychology
              studies and Gen Z perspective, they&apos;re united by one belief: lasting financial
              change starts with emotions, not spreadsheets.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700">
              We apply evidence-based psychological frameworks — including CBT, ACT, IFS, and
              attachment theory — to help people understand and transform their emotional
              relationship with money.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-navy-800">Why ALP Works</h3>
              <p className="mt-2 leading-relaxed text-navy-600">
                Traditional finance focuses on behaviour change through willpower. ALP changes
                the emotional relationship FIRST, so aligned behaviour flows naturally.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'CBT', desc: 'Cognitive Behavioural Therapy — reframing unhelpful thought patterns' },
                { label: 'ACT', desc: 'Acceptance & Commitment Therapy — values-aligned action' },
                { label: 'IFS', desc: 'Internal Family Systems — understanding your money "parts"' },
                { label: 'Attachment Theory', desc: 'How early relationships shape financial behaviour' },
              ].map((framework) => (
                <div key={framework.label} className="rounded-lg bg-slate-bg p-4">
                  <span className="text-sm font-semibold text-navy-800">{framework.label}</span>
                  <p className="mt-1 text-xs text-navy-600">{framework.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-navy-800 p-6">
              <p className="text-sm font-medium text-gold-400">Our Promise</p>
              <p className="mt-2 text-navy-300">
                We&apos;re not here to tell you what to do with money. You already know that.
                We&apos;re here to help you understand WHY you&apos;re not doing it — and
                change that at the deepest level.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/alp-methodology"
                className="text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
              >
                Learn more about our approach &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Origin Story */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-navy-800">Why This Podcast?</h2>
          <div className="mt-8 space-y-6 leading-relaxed text-navy-700">
            <p>
              It started with a simple observation. David had been helping clients manage their
              money for over two decades, but he kept running into the same wall: people who
              knew exactly what they should be doing with their money — but couldn&apos;t bring
              themselves to do it.
            </p>
            <p>
              The problem was never the plan. It was the feelings. Fear. Shame. Avoidance.
              Self-sabotage. The emotions that nobody in finance was willing to talk about.
            </p>
            <p>
              Then David met Emme at a university guest lecture. She was studying psychology and
              struggling with her own money anxiety — and she wasn&apos;t shy about saying so.
              In their conversations, something clicked: David had the financial expertise. Emme
              had the emotional awareness. Together, they could bridge the gap that traditional
              finance had been ignoring for years.
            </p>
            <p>
              They discovered a psychology-first approach to change — one that doesn&apos;t
              rely on willpower or shame, but on understanding and transforming the emotions
              driving financial behaviour. That insight became the foundation of Emotional Money.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-navy-800">Our Philosophy</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: '❤️',
                title: 'Emotion-First Change',
                desc: 'Change how you feel about money first. The behaviour changes naturally afterward — no willpower battles required.',
              },
              {
                icon: '🤝',
                title: 'No Shame, No Force',
                desc: 'Your money patterns made perfect sense given what you learned. We update the learning, not punish the behaviour.',
              },
              {
                icon: '🧬',
                title: 'Evidence-Based',
                desc: 'Built on proven psychological frameworks: CBT, ACT, IFS, and attachment theory. Not guesswork — science.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 text-center"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 rounded-2xl bg-slate-bg p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Psychology-first approach to money' },
              { label: 'Evidence-based: CBT, ACT, IFS, Attachment' },
              { label: 'Australian-made for the Australian context' },
              { label: 'Educational content — not financial advice' },
            ].map((signal) => (
              <div key={signal.label} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs text-gold-700">
                  ✓
                </span>
                <span className="text-sm text-navy-700">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Join the Conversation
          </h2>
          <p className="mt-3 text-navy-300">
            Get weekly insights on understanding your emotional relationship with money.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/episodes"
            className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
          >
            &larr; Start listening to episodes
          </Link>
        </div>
      </div>
    </div>
  )
}
