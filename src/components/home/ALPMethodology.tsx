import Link from 'next/link'

const pillars = [
  {
    icon: '🧠',
    title: 'Liminal Space Work',
    description:
      'We access the subconscious beliefs driving your financial decisions — the ones you didn\'t know you had.',
  },
  {
    icon: '💫',
    title: 'Second-Order Change',
    description:
      'Instead of fighting yourself to "stop overspending," you genuinely stop WANTING to overspend. No willpower required.',
  },
  {
    icon: '❤️',
    title: 'Emotion-First',
    description:
      'Change how you FEEL about money first. The behaviour changes naturally afterward.',
  },
  {
    icon: '🔄',
    title: 'No Shame, No Force',
    description:
      'Your money patterns made sense given what you learned. We update the learning, not punish the behaviour.',
  },
]

export function ALPMethodology() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex rounded-full bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-700">
            Evidence-Based Framework
          </div>
          <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">
            The Science Behind the Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-navy-600">
            Most financial advice focuses on behaviour (&quot;just budget&quot;). We work with
            the emotions DRIVING that behaviour. Affective Liminal Psychology (ALP) is the
            evidence-based framework behind This Naked Mind&apos;s 90% success rate in
            changing deep-seated patterns. Now we&apos;re applying it to money.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-navy-100 bg-slate-bg p-6 text-center transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-3xl">
                {pillar.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-800">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/alp-methodology"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            Learn more about Affective Liminal Psychology
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
