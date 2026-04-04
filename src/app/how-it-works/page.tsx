import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — The EMP Ecosystem',
  description:
    'From free podcast to full transformation. See how the Emotional Money Podcast ecosystem works together — podcast, quiz, course, app, and community.',
}

const journeySteps = [
  {
    number: '1',
    icon: '📻',
    title: 'Listen to the Podcast',
    price: 'Free',
    description:
      'Start building awareness through weekly conversations about the emotional side of money. David and Emme introduce ALP concepts in an accessible, shame-free format.',
    details: [
      'New episodes every week',
      'Available on YouTube, Spotify, Apple Podcasts',
      'Each episode tagged to ALP stages',
      'Persona-specific episode recommendations',
    ],
    cta: { href: '/episodes', label: 'Browse Episodes' },
  },
  {
    number: '2',
    icon: '🎯',
    title: 'Discover Your Money Persona',
    price: 'Free',
    description:
      'Take our 3-minute quiz to identify which of the five emotional money patterns drives your decisions. Get personalised insights and episode recommendations.',
    details: [
      '20 questions, 3 minutes',
      'Instant personalised results',
      'Custom episode playlist',
      'Personalised growth strategies',
    ],
    cta: { href: '/quiz', label: 'Take the Quiz' },
  },
  {
    number: '3',
    icon: '📚',
    title: 'Join the Transformation Program',
    price: '$697–997',
    description:
      'Go deep with 12 weeks of structured ALP-based learning. Interactive course platform with embedded exercises, live sessions, and community support.',
    details: [
      '12-week interactive course',
      'Live weekly sessions with hosts',
      'Private cohort community',
      '50+ guided exercises and workbook',
    ],
    cta: { href: '/courses', label: 'Explore the Program' },
  },
  {
    number: '4',
    icon: '📱',
    title: 'Use the Companion App',
    price: 'Included with Program',
    description:
      'Bring your learning into real life. Track emotions at the point of purchase, identify triggers automatically, and practise ALP techniques when you need them most.',
    details: [
      'Real-time emotion tracking',
      'Automated pattern insights',
      'In-moment pause exercises',
      'Progress visualisation',
    ],
    cta: { href: '/app', label: 'See App Features' },
  },
  {
    number: '5',
    icon: '🤝',
    title: 'Grow with the Community',
    price: 'Included',
    description:
      'Continue your journey with alumni support, advanced content, and a community of people who understand the emotional side of money.',
    details: [
      '6-month alumni support',
      'Advanced content drops',
      'Peer accountability',
      'Ongoing growth resources',
    ],
    cta: null,
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            How It All Works Together
          </h1>
          <p className="mt-4 text-lg text-navy-600">
            From free awareness to deep, supported transformation. Every piece of the EMP
            ecosystem connects to the next — meeting you exactly where you are.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {journeySteps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < journeySteps.length - 1 && (
                <div className="absolute bottom-0 left-7 top-20 w-px bg-navy-200" />
              )}
              <div className="relative rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-2xl">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-semibold text-navy-800">{step.title}</h2>
                      <span className="rounded-full bg-gold-500/20 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                        {step.price}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-navy-600">{step.description}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-navy-700">
                          <span className="mt-0.5 text-gold-500">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {step.cta && (
                      <Link
                        href={step.cta.href}
                        className="mt-4 inline-flex text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
                      >
                        {step.cta.label} &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* For Different People */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-navy-800">
            Where Should You Start?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Just Curious',
                desc: 'Start with the podcast. Listen to a few episodes and see if our approach resonates with you.',
                cta: { href: '/episodes', label: 'Browse Episodes' },
              },
              {
                title: 'Ready to Understand',
                desc: 'Take the quiz to discover your Money Persona. Get personalised insights in 3 minutes.',
                cta: { href: '/quiz', label: 'Take the Quiz' },
              },
              {
                title: 'Ready to Transform',
                desc: 'Jump straight into the Transformation Program for the full ALP experience.',
                cta: { href: '/courses', label: 'Explore the Program' },
              },
            ].map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 text-center transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
              >
                <h3 className="text-lg font-semibold text-navy-800">{option.title}</h3>
                <p className="mt-3 text-sm text-navy-600">{option.desc}</p>
                <Link
                  href={option.cta.href}
                  className="mt-4 inline-flex text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
                >
                  {option.cta.label} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate */}
        <div className="mt-16 rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">For Organisations</h2>
          <p className="mt-3 text-navy-300">
            We also offer corporate financial wellbeing workshops using the ALP framework.
            Psychology-informed, evidence-based, and scalable for your team.
          </p>
          <Link
            href="/corporate"
            className="mt-6 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400"
          >
            Learn About Corporate Programs
          </Link>
        </div>
      </div>
    </div>
  )
}
