import Link from 'next/link'

const hosts = [
  {
    name: 'David',
    role: 'Co-Host & Financial Educator',
    age: '50',
    description:
      'With decades of experience managing wealth, David brings a deep understanding of the financial world — and an even deeper curiosity about why smart people make emotional money decisions.',
    expertise: ['Behavioural Finance', 'Financial Education', 'Money Psychology'],
    initial: 'D',
  },
  {
    name: 'Emme',
    role: 'Psychology Student & Co-Host',
    age: '25',
    description:
      'Emme brings a fresh Gen Z perspective and her psychology studies to every conversation — asking the questions her generation is thinking but nobody else dares to say out loud.',
    expertise: ['Psychology', 'Gen Z Perspective', 'Alternative Frameworks'],
    initial: 'E',
  },
]

export function HostsPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">Meet Your Hosts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-600">
            Two generations. Two perspectives. One mission: helping you understand your emotional
            relationship with money.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {hosts.map((host) => (
            <div
              key={host.name}
              className="overflow-hidden rounded-2xl border border-navy-100 bg-slate-bg"
            >
              {/* Photo Placeholder */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gold-500/20 ring-2 ring-gold-500/40">
                  <span className="text-4xl font-bold text-gold-500">{host.initial}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800">{host.name}</h3>
                <p className="text-sm font-medium text-gold-600">{host.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{host.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {host.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-navy-100 px-3 py-1 text-xs font-medium text-navy-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            Learn more about our story &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
