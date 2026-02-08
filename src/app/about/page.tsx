import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet David and Emme — the hosts of The Emotional Money Podcast. Learn about our mission to help Australians understand the emotions behind their financial decisions.',
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
            feel the way you do about money.
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
                <p className="text-sm text-gold-600">Wealth Manager · 25 Years Experience</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-navy-700">
              After 25 years as a financial planner and wealth manager, David noticed something
              that changed everything: his clients&apos; biggest barrier to financial success was
              never the numbers — it was the emotions. Fear, shame, guilt, avoidance — these
              feelings were running the show behind every dollar decision.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700">
              David brings decades of real-world financial experience and a deep understanding of
              why knowing what to do with money and actually doing it are very different things.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Financial Planning', 'Wealth Management', 'Behavioural Finance'].map((tag) => (
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
                  Psychology Student · Gen Z Perspective
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

        {/* Origin Story */}
        <div className="mt-16 mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-navy-800">Why This Podcast?</h2>
          <div className="mt-8 space-y-6 text-navy-700 leading-relaxed">
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
              The Emotional Money Podcast was born from that realisation — that understanding
              your feelings about money is just as important as understanding your finances.
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
                title: 'Feelings Come First',
                desc: 'Understand the emotion before the spreadsheet. Your financial decisions make perfect sense once you understand the feelings driving them.',
              },
              {
                icon: '🤝',
                title: 'No Shame, No Judgment',
                desc: 'Every money story is valid. We create a space where you can be honest about your financial feelings without fear of being judged.',
              },
              {
                icon: '🌱',
                title: 'Small Steps, Real Change',
                desc: 'Transformation does not happen overnight. We believe in gentle, sustainable shifts that add up to profound change over time.',
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
            ← Start listening to episodes
          </Link>
        </div>
      </div>
    </div>
  )
}
