import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Financial Wellbeing — Workshops & Programs',
  description:
    'Psychology-informed financial wellbeing workshops for organisations. Using Affective Liminal Psychology to help your team develop a healthier relationship with money.',
}

const workshopTypes = [
  {
    title: 'Awareness Workshop',
    duration: 'Half Day',
    desc: 'An introduction to the emotional side of money. Participants discover their Money Persona and learn how unconscious patterns drive financial decisions.',
    includes: [
      'Money Persona assessment for all participants',
      'Understanding emotional money patterns',
      'Introduction to ALP framework',
      'Team discussion facilitation',
    ],
  },
  {
    title: 'Deep Dive Program',
    duration: '4 Weeks',
    desc: 'A structured program taking teams through the four stages of ALP. Combines group sessions with individual reflection and practical exercises.',
    includes: [
      'Everything in Awareness Workshop',
      '4 weekly group sessions',
      'Individual workbooks',
      'Manager briefing and support guide',
      'Pre/post wellbeing measurement',
    ],
  },
  {
    title: 'Custom Program',
    duration: 'Flexible',
    desc: 'Tailored to your organisation\'s specific needs. We work with your HR and wellbeing team to design a program that fits your culture and goals.',
    includes: [
      'Needs assessment consultation',
      'Custom curriculum design',
      'Flexible delivery format',
      'Ongoing support and measurement',
      'Leadership coaching available',
    ],
  },
]

export default function CorporatePage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
            For Organisations
          </div>
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            Financial Wellbeing for Your Team
          </h1>
          <p className="mt-4 text-lg text-navy-600">
            Financial stress costs Australian businesses billions in lost productivity,
            absenteeism, and disengagement. We help your people build a healthier emotional
            relationship with money — using psychology, not spreadsheets.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              stat: '47%',
              label: 'of employees say financial stress impacts their work',
            },
            {
              stat: '3hrs',
              label: 'per week lost to financial worry at work (on average)',
            },
            {
              stat: '90%',
              label: 'efficacy rate of ALP methodology (This Naked Mind)',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-navy-100 bg-white p-6 text-center"
            >
              <p className="text-4xl font-bold text-gold-600">{item.stat}</p>
              <p className="mt-2 text-sm text-navy-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Our Approach */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-navy-800">Our Approach</h2>
          <p className="mt-4 text-center text-navy-600">
            Traditional financial wellness programs focus on literacy — budgeting, superannuation,
            debt management. These are important, but they miss the biggest factor: emotions.
          </p>
          <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
                  Traditional Approach
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    'Financial literacy education',
                    'Budgeting tools and calculators',
                    'Information-based',
                    'One-size-fits-all',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
                      <span className="mt-0.5 text-navy-400">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                  EMP Approach
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    'Emotional money psychology',
                    'Behaviour-change frameworks (ALP)',
                    'Experience-based',
                    'Persona-adapted content',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                      <span className="mt-0.5 text-gold-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Types */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-navy-800">Programs We Offer</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {workshopTypes.map((workshop) => (
              <div
                key={workshop.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-navy-800">{workshop.title}</h3>
                  <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700">
                    {workshop.duration}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">
                  {workshop.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  {workshop.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                      <span className="mt-0.5 text-gold-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">
            Interested in Bringing EMP to Your Organisation?
          </h2>
          <p className="mt-3 text-navy-300">
            We&apos;d love to discuss how we can support your team&apos;s financial wellbeing.
            Get in touch for a free consultation.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400"
            >
              Get in Touch
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-navy-500 hover:bg-navy-700/50"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
