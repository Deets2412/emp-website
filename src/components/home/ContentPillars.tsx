import { CONTENT_PILLARS } from '@/lib/constants'

const pillarIcons = ['🧠', '🪞', '🌍', '💡']

export function ContentPillars() {
  return (
    <section className="bg-slate-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">What We Talk About</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-600">
            Every episode falls into one of four content pillars — each exploring a different
            dimension of your emotional money life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENT_PILLARS.map((pillar, i) => (
            <div
              key={pillar.value}
              className="rounded-2xl border border-navy-100 bg-white p-6 text-center transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-3xl">
                {pillarIcons[i]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-800">{pillar.label}</h3>
              <p className="mt-2 text-sm text-navy-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
