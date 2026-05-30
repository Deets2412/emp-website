import Link from 'next/link'

const hosts = [
  {
    initial: 'D',
    name: 'David',
    role: 'Co-host',
    bio: "David is endlessly curious about why smart, capable people make emotional decisions with money — and what it takes to change that. He started Emotional Money as a personal project to explore the feelings underneath our financial choices, in plain language and without judgement.",
    chips: ['Behavioural curiosity', 'Plain language', 'Lifelong learner'],
  },
  {
    initial: 'E',
    name: 'Emme',
    role: 'Co-host',
    bio: "Emme brings a fresh Gen Z perspective and her psychology studies to every conversation — asking the questions her generation is actually thinking but nobody else says out loud. She keeps the show honest, curious and grounded.",
    chips: ['Psychology student', 'Gen Z lens', 'Asks the real questions'],
  },
]

export function HostsPreview() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-[52px] max-w-[62ch]">
          <p className="eyebrow">Your hosts</p>
          <h2 className="mt-3.5 mb-[18px] font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.9rem)' }}>
            Two perspectives, one curiosity
          </h2>
          <p className="lead">
            A podcast about why capable people make emotional decisions with money — and what it
            takes to feel differently about it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hosts.map((host) => (
            <div
              key={host.name}
              className="flex flex-col gap-6 rounded-[18px] p-9 sm:flex-row"
              style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)' }}
            >
              <div
                className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full font-serif text-[1.8rem] font-semibold"
                style={{
                  background: 'var(--color-sage-wash)',
                  color: 'var(--color-sage-deep)',
                  border: '1px solid color-mix(in oklch, var(--color-sage-deep) 25%, transparent)',
                }}
                aria-hidden="true"
              >
                {host.initial}
              </div>
              <div>
                <h3 className="font-serif text-[1.5rem]" style={{ color: 'var(--color-ink)' }}>{host.name}</h3>
                <div
                  className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.1em]"
                  style={{ color: 'var(--color-ink-faint)' }}
                >
                  {host.role}
                </div>
                <p className="mt-3 text-[0.94rem] leading-relaxed" style={{ color: 'var(--color-ink-soft)' }}>
                  {host.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {host.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.04em]"
                      style={{
                        background: 'var(--color-paper-2)',
                        border: '1px solid var(--color-line)',
                        color: 'var(--color-ink-soft)',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 rounded-[0_10px_10px_0] border-l-2 px-5 py-4 text-[0.88rem]"
          style={{
            borderColor: 'var(--color-sage)',
            background: 'var(--color-sage-wash)',
            color: 'var(--color-sage-deep)',
          }}
        >
          Emotional Money is an independent personal project. The hosts share their own views in a
          personal capacity — this show is not produced by, affiliated with, or endorsed by any
          employer or financial services licensee, and nothing here is financial product advice.
        </div>

        <div className="mt-8 text-center">
          <Link href="/about" className="text-sm font-medium transition-colors" style={{ color: 'var(--color-sage-deep)' }}>
            Learn more about our story →
          </Link>
        </div>
      </div>
    </section>
  )
}
