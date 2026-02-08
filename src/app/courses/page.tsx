import type { Metadata } from 'next'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'Courses — Money Mindset Mastery',
  description:
    'A 12-week transformation journey to heal your relationship with money. Combining emotional insights with practical tools, guided exercises, and community support.',
}

const modules = [
  { week: 1, title: 'The Psychology of Money' },
  { week: 2, title: 'Your Money Mindset' },
  { week: 3, title: 'Values and Direction' },
  { week: 4, title: 'Understanding Your Money Parts' },
  { week: 5, title: 'Money and Attachment' },
  { week: 6, title: 'Early Money Patterns' },
  { week: 7, title: 'Integration Week' },
  { week: 8, title: 'Practical Application' },
  { week: 9, title: 'Building New Habits' },
  { week: 10, title: 'Advanced Strategies' },
  { week: 11, title: 'Relationships and Money' },
  { week: 12, title: 'Your New Money Story' },
]

const pricingTiers = [
  {
    name: 'Self-Paced Basic',
    price: '$497',
    description: 'Learn at your own pace with full course access',
    features: [
      'All 12 module video lessons',
      'Downloadable workbook',
      'Community forum access',
      'Lifetime course access',
    ],
  },
  {
    name: 'Live Cohort',
    price: '$997',
    description: 'Learn alongside others with live weekly sessions',
    features: [
      'Everything in Self-Paced',
      'Weekly live group sessions',
      'Real-time Q&A with David & Emme',
      'Accountability partners',
      'Private cohort community',
    ],
    popular: true,
  },
  {
    name: 'Premium with Coaching',
    price: '$1,997',
    description: 'Personal guidance throughout your journey',
    features: [
      'Everything in Live Cohort',
      '4x one-on-one coaching sessions',
      'Personalised action plan',
      'Direct messaging support',
      'Priority Q&A access',
    ],
  },
  {
    name: 'VIP Couples',
    price: '$2,497',
    description: 'Transform your money relationship together',
    features: [
      'Everything in Premium',
      'Both partners included',
      'Couples-specific modules',
      '4x couples coaching sessions',
      'Joint action plan',
    ],
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Coming Soon Badge */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-gold-500 px-4 py-1.5 text-sm font-semibold text-navy-900">
            Coming Soon — Early 2027
          </span>
        </div>

        {/* Hero */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            Money Mindset Mastery
          </h1>
          <p className="mt-2 text-xl text-gold-600">A 12-Week Transformation Journey</p>
          <p className="mt-6 text-lg text-navy-600">
            Go beyond understanding your emotions about money — learn to transform them. This
            comprehensive course combines the emotional insights from our podcast with practical
            tools, guided exercises, and community support.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mx-auto mt-12 max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-navy-800">
            What You&apos;ll Learn
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Understand the roots of your money patterns',
              'Identify your Money Persona and how it shapes decisions',
              'Break free from emotional spending cycles',
              'Build healthy money conversations in relationships',
              'Create a personalised financial action plan',
              'Develop lasting emotional resilience around money',
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

        {/* 12-Week Overview */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-navy-800">
            12-Week Module Overview
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.week}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white">
                  {mod.week}
                </span>
                <span className="text-sm font-medium text-navy-700">{mod.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-navy-800">Choose Your Path</h2>
          <p className="mt-2 text-center text-navy-600">
            All prices in AUD. Payment plans available.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  tier.popular
                    ? 'border-gold-400 bg-white shadow-lg shadow-gold-500/10'
                    : 'border-navy-100 bg-white'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-3 py-0.5 text-xs font-semibold text-navy-900">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-navy-800">{tier.name}</h3>
                <p className="mt-1 text-3xl font-bold text-navy-800">{tier.price}</p>
                <p className="mt-2 text-sm text-navy-600">{tier.description}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-navy-700">
                      <span className="mt-0.5 text-gold-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  disabled
                  className="mt-6 w-full rounded-lg bg-navy-100 px-4 py-3 text-sm font-semibold text-navy-400 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Waitlist */}
        <div className="mx-auto mt-16 max-w-xl rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
          <p className="mt-3 text-navy-300">
            Be the first to know when enrolment opens. Waitlist members get early access and an
            exclusive launch discount.
          </p>
          <div className="mt-6">
            <NewsletterForm variant="footer" />
          </div>
          <p className="mt-4 text-xs text-navy-500">
            Launching with Season 2 in early 2027. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
