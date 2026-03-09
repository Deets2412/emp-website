const values = [
  {
    icon: '🧬',
    title: 'Evidence-Based Psychology',
    description:
      'Built on Affective Liminal Psychology — the same framework behind This Naked Mind\'s 90% success rate. We use proven methods from CBT, ACT, IFS, and attachment theory.',
  },
  {
    icon: '💫',
    title: 'Second-Order Change',
    description:
      'We don\'t just change what you DO with money — we change how you FEEL about it. When the emotion shifts, aligned behaviour flows naturally. No willpower battles.',
  },
  {
    icon: '🌱',
    title: 'Lasting Transformation',
    description:
      'This isn\'t about budgeting spreadsheets or mindset affirmations. It\'s about changing your relationship with money from the inside out — so the changes actually stick.',
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
            You know what you should do with money. We help you understand why you&apos;re
            not doing it — and change that at the deepest level.
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
