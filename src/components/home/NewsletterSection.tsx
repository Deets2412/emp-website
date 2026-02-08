import { NewsletterForm } from '@/components/shared/NewsletterForm'

export function NewsletterSection() {
  return (
    <section className="bg-gradient-to-br from-navy-800 to-navy-900 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Get weekly emotional money insights
        </h2>
        <p className="mt-4 text-lg text-navy-300">
          Every week, David and Emme share practical insights on understanding and
          transforming your emotional relationship with money. No spam. Unsubscribe anytime.
        </p>
        <div className="mt-8">
          <NewsletterForm variant="footer" />
        </div>
        <p className="mt-4 text-xs text-navy-500">
          Join our growing community of Australians who are changing how they feel about money.
        </p>
      </div>
    </section>
  )
}
