const values = [
  {
    icon: '❤️',
    title: 'Emotions First',
    description:
      'We start with how money makes you feel — the anxiety, the excitement, the shame, the hope. Understanding your emotional responses is the first step to financial change.',
  },
  {
    icon: '🪞',
    title: 'Know Your Patterns',
    description:
      'Discover which of the 5 Money Personas drives your financial decisions. When you see your patterns clearly, you can start making choices that actually align with who you want to be.',
  },
  {
    icon: '🌱',
    title: 'Real Transformation',
    description:
      'This isn\'t about budgeting spreadsheets. It\'s about changing your relationship with money from the inside out — so the strategies you learn actually stick.',
  },
]

export function ValueProposition() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">
            Why your feelings about money matter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-600">
            Traditional finance tells you what to do. We help you understand why you haven&apos;t been doing it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-navy-100 bg-slate-bg p-8 transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-semibold text-navy-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
