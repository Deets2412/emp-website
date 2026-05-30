import { NewsletterForm } from '@/components/shared/NewsletterForm'

export function NewsletterSection() {
  return (
    <section className="py-24" style={{ background: 'var(--color-paper)' }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <div
          className="rounded-3xl px-10 py-16 text-center sm:px-16"
          style={{ background: 'var(--color-ink)' }}
        >
          <p className="eyebrow" style={{ color: 'var(--color-sage)' }}>Stay connected</p>
          <h2
            className="mt-4 font-serif"
            style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)', color: 'var(--color-paper)' }}
          >
            Weekly notes on the feelings behind money
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[1.05rem] leading-relaxed" style={{ color: 'oklch(0.82 0.012 80)' }}>
            Every week, David and Emme share a short, practical reflection on understanding your
            emotional relationship with money. No spam. Unsubscribe anytime.
          </p>
          <div className="mx-auto mt-7 max-w-[480px]">
            <NewsletterForm variant="dark" />
          </div>
          <p className="mt-4 text-[0.78rem]" style={{ color: 'oklch(0.7 0.01 80)' }}>
            By subscribing you agree to receive emails from Emotional Money. Every email includes
            an unsubscribe link.
          </p>
        </div>
      </div>
    </section>
  )
}
