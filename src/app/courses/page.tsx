import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'
import { ALP_STAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'EMP Transformation Program — 12 Weeks to Financial Freedom From the Inside Out',
  description:
    'The only financial psychology program combining Affective Liminal Psychology, an interactive course platform, and a companion mobile app. 12 weeks to change your emotional relationship with money.',
}

const programFeatures = {
  course: [
    'Weekly video lessons with embedded exercises',
    'Live Q&A sessions with David & Emme',
    'Community discussions with your cohort',
    'Gamified progress tracking',
    'Personalised learning path based on your Money Persona',
  ],
  app: [
    'Track emotions at point of purchase (in the moment)',
    'Identify your triggers and patterns automatically',
    'Practice ALP techniques in real-time',
    'Daily micro-practices aligned with course content',
    'See your transformation in data',
  ],
}

const whoIsThisFor = [
  'You know what you "should" do with money but can\'t stick to it',
  'Money anxiety feels overwhelming even when you\'re financially stable',
  'You avoid looking at accounts or bills',
  'Past financial trauma still affects current decisions',
  'Couples arguing about money but it\'s not about the numbers',
]

const whatYouGet = [
  '12 weeks of interactive course content',
  'EMP companion mobile app (exclusive to participants)',
  'Live weekly group sessions with David & Emme',
  'Private cohort community',
  'Comprehensive workbook (50+ exercises)',
  'Lifetime access to materials',
  '6-month alumni support',
]

const faqs = [
  {
    q: 'Is this therapy?',
    a: 'No. This is psychoeducational content using evidence-based frameworks. If you\'re experiencing clinical depression, anxiety, or trauma, please work with a licensed therapist alongside this program.',
  },
  {
    q: 'Do I need the app?',
    a: 'The app is included and highly recommended. It\'s what makes the course stick — bringing classroom learning into real-life moments.',
  },
  {
    q: 'What if I miss a week?',
    a: 'All content is recorded. Live sessions are valuable but optional. You can catch up at your own pace.',
  },
  {
    q: 'How is this different from therapy?',
    a: 'Therapy is personalised clinical treatment. This is structured education using psychological frameworks to understand money patterns. They complement each other beautifully.',
  },
  {
    q: 'What tech do I need?',
    a: 'Computer or tablet for course videos, smartphone for companion app (iOS and Android).',
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-slate-bg">
      {/* Hero */}
      <div className="bg-navy-800 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-medium text-gold-400">
            Founding Cohort — Limited Places
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            The EMP Transformation Program
          </h1>
          <p className="mt-2 text-xl text-gold-500">
            12 Weeks to Change Your Emotional Relationship With Money
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300">
            Not another budgeting course. This is the only financial psychology program that
            combines interactive learning with real-time emotion tracking — powered by Affective
            Liminal Psychology.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#apply"
              className="inline-flex rounded-lg bg-gold-500 px-8 py-3.5 text-base font-semibold text-navy-900 transition-all hover:bg-gold-400"
            >
              Apply for Next Cohort
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex rounded-lg border border-navy-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-navy-500 hover:bg-navy-700/50"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* What Makes This Different */}
        <div>
          <h2 className="text-center text-3xl font-bold text-navy-800">
            What Makes This Different
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Interactive Course */}
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <div className="text-3xl">💻</div>
              <h3 className="mt-4 text-xl font-semibold text-navy-800">
                Interactive Course Platform
              </h3>
              <ul className="mt-4 space-y-3">
                {programFeatures.course.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy-600">
                    <span className="mt-0.5 text-gold-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Companion App */}
            <div className="relative rounded-2xl border border-gold-300 bg-white p-8 shadow-lg shadow-gold-500/5">
              <span className="absolute -top-3 left-6 rounded-full bg-gold-500 px-3 py-0.5 text-xs font-semibold text-navy-900">
                NEW
              </span>
              <div className="text-3xl">📱</div>
              <h3 className="mt-4 text-xl font-semibold text-navy-800">
                Companion Mobile App
              </h3>
              <ul className="mt-4 space-y-3">
                {programFeatures.app.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy-600">
                    <span className="mt-0.5 text-gold-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* ALP Framework */}
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <div className="text-3xl">🧠</div>
              <h3 className="mt-4 text-xl font-semibold text-navy-800">
                The ALP Framework
              </h3>
              <div className="mt-4 space-y-3">
                {ALP_STAGES.map((stage) => (
                  <div key={stage.key} className="rounded-lg bg-slate-bg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-navy-800">
                        {stage.label}
                      </span>
                      <span className="text-xs text-navy-500">Weeks {stage.weeks}</span>
                    </div>
                    <p className="mt-1 text-xs text-navy-600">{stage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-navy-800">Who This Is For</h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            {whoIsThisFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-sm text-gold-700">
                  ✓
                </span>
                <span className="text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-navy-800">What You Get</h2>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy-700">
                    <span className="mt-0.5 text-gold-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* App Showcase */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-navy-800">
            Track Emotions. See Patterns. Transform Your Life.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-navy-600">
            The EMP Companion App — your pocket coach for money emotions.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '⚡',
                title: 'Quick Check-In',
                desc: '5 seconds to log: How you feel, what triggered it, what you decided.',
              },
              {
                icon: '📊',
                title: 'Pattern Recognition',
                desc: '"You tend to overspend on Friday evenings after work" — automated insights.',
              },
              {
                icon: '🧘',
                title: 'In-Moment Support',
                desc: 'Guided breathing and pause exercises before impulse purchases.',
              },
              {
                icon: '📈',
                title: 'See Your Transformation',
                desc: 'Anxiety down. Impulse purchases down. Proof of real change in data.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 text-center transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-800">{feature.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-navy-500">
            Available exclusively to Transformation Program participants.{' '}
            <Link href="/app" className="font-medium text-gold-600 hover:text-gold-700">
              Learn more about the app &rarr;
            </Link>
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-20" id="apply">
          <h2 className="text-center text-3xl font-bold text-navy-800">Investment</h2>
          <p className="mt-2 text-center text-navy-600">
            Founding cohort pricing. All prices in AUD.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <h3 className="text-lg font-semibold text-navy-800">Self-Paced</h3>
              <p className="mt-1 text-3xl font-bold text-navy-800">$697</p>
              <p className="mt-2 text-sm text-navy-600">
                Full course access, companion app, workbook, and community.
              </p>
              <button
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-lg bg-navy-100 px-4 py-3 text-sm font-semibold text-navy-400"
              >
                Join Waitlist
              </button>
            </div>
            <div className="relative rounded-2xl border border-gold-400 bg-white p-8 shadow-lg shadow-gold-500/10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-3 py-0.5 text-xs font-semibold text-navy-900">
                Recommended
              </span>
              <h3 className="text-lg font-semibold text-navy-800">Live Cohort</h3>
              <p className="mt-1 text-3xl font-bold text-navy-800">$997</p>
              <p className="mt-2 text-sm text-navy-600">
                Everything in Self-Paced plus weekly live sessions, real-time Q&A, and
                accountability partners.
              </p>
              <button
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-lg bg-navy-100 px-4 py-3 text-sm font-semibold text-navy-400"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-20 rounded-2xl bg-navy-800 p-8 sm:p-12">
          <h2 className="text-center text-2xl font-bold text-white">
            This Is Not Your Typical Money Course
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
                What We&apos;re Not
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Not budgeting advice (you\'ve tried that)',
                  'Not mindset affirmations (too surface-level)',
                  'Not traditional therapy (we\'re educational)',
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
                What We Are
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Psychology-first financial transformation',
                  'Proven methodology with documented results',
                  'Interactive learning + real-time practice',
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

        {/* FAQs */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-navy-800">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-navy-100 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-navy-800">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className="mx-auto mt-20 max-w-xl rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
          <p className="mt-3 text-navy-300">
            Be the first to know when the founding cohort opens. Waitlist members get
            early access and an exclusive launch discount.
          </p>
          <div className="mt-6">
            <NewsletterForm variant="footer" />
          </div>
          <p className="mt-4 text-xs text-navy-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
