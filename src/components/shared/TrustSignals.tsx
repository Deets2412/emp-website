export function TrustSignals({ variant = 'horizontal' }: { variant?: 'horizontal' | 'compact' }) {
  const signals = [
    'Psychology-first approach to money',
    'Evidence-based: CBT, ACT, IFS, Attachment',
    'Australian-developed for Australian context',
    'Educational content — not financial advice',
  ]

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {signals.map((signal) => (
          <div key={signal} className="flex items-center gap-1.5 text-xs text-navy-500">
            <span className="text-gold-500">✓</span>
            {signal}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-slate-bg p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal) => (
          <div key={signal} className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs text-gold-700">
              ✓
            </span>
            <span className="text-sm text-navy-700">{signal}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
