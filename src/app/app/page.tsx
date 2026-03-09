import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EMP Companion App — Your Pocket Coach for Money Emotions',
  description:
    'Track emotions at the moment of decision. Build awareness. See patterns. The EMP Companion App brings ALP techniques into your real life — available exclusively to course participants.',
}

const features = [
  {
    icon: '⚡',
    title: 'Quick Check-In',
    desc: '5 seconds to log: How you feel, what triggered it, what you decided. Capture the emotional data that matters — right when it happens.',
  },
  {
    icon: '📊',
    title: 'Pattern Recognition',
    desc: '"You tend to overspend on Friday evenings after work." The app identifies your unique emotional spending patterns automatically.',
  },
  {
    icon: '🧘',
    title: 'In-Moment Support',
    desc: 'Feeling the urge to impulse buy? The app delivers guided breathing and ALP pause exercises before you swipe the card.',
  },
  {
    icon: '📈',
    title: 'See Your Transformation',
    desc: 'Anxiety down 50%. Impulsive purchases down 60%. Watch your emotional relationship with money transform in real data.',
  },
]

const featureList = [
  'Emotion tracking at point of purchase',
  'Belief & trigger identification',
  'Automated pattern insights',
  'In-app pause exercises',
  'Daily micro-practices',
  'Integration with course platform',
  'Private, secure data',
]

export default function AppPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
            Exclusive to Program Participants
          </div>
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            The EMP Companion App
          </h1>
          <p className="mt-4 text-xl text-gold-600">
            Your pocket coach for money emotions
          </p>
          <p className="mt-6 text-lg text-navy-600">
            Track emotions at the moment of decision. Build awareness. See patterns. Transform
            your relationship with money — one logged moment at a time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-navy-100 bg-white p-8 transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-3xl">
                {feature.icon}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-navy-800">{feature.title}</h2>
              <p className="mt-3 leading-relaxed text-navy-600">{feature.desc}</p>
              {/* Placeholder screenshot area */}
              <div className="mt-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-navy-100">
                <span className="text-sm text-navy-400">App screenshot coming soon</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-navy-800">All Features</h2>
          <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-8">
            <ul className="space-y-4">
              {featureList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-700">
                  <span className="mt-0.5 text-gold-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How It Fits */}
        <div className="mt-16 rounded-2xl bg-navy-800 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white">
              Where the Course Meets Real Life
            </h2>
            <p className="mt-4 text-navy-300">
              The course teaches you ALP concepts and techniques. The app helps you apply them
              in the moment — when you&apos;re standing in a shop, scrolling online, or feeling
              the pull of an emotional purchase. That&apos;s what makes the transformation stick.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { step: 'Learn', desc: 'Course teaches ALP framework' },
                { step: 'Track', desc: 'App captures real-time data' },
                { step: 'Transform', desc: 'Patterns shift naturally' },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-navy-700 bg-navy-700/50 p-4">
                  <h3 className="text-lg font-semibold text-gold-400">{item.step}</h3>
                  <p className="mt-1 text-sm text-navy-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-navy-600">
            The EMP Companion App is available exclusively to Transformation Program participants.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/courses"
              className="inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400"
            >
              Explore the Program
            </Link>
            <Link
              href="/quiz"
              className="inline-flex rounded-lg border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
            >
              Start with the Free Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
