import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Emotional Money Podcast website.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy-800 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-navy-500">Last updated: 1 July 2026</p>

        <div className="mt-8 space-y-8 text-navy-700 leading-relaxed">
          <p>
            The Emotional Money Podcast (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            respects your privacy and is committed to protecting your personal information. This
            Privacy Policy explains how we collect, use, and safeguard information when you
            visit our website at emotionalmoney.com.au.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">
              Information We Collect
            </h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Email address</strong> — when you subscribe to our newsletter, take our
                Money Persona Quiz, join a waitlist, or contact us.
              </li>
              <li>
                <strong>Quiz results</strong> — your Money Persona quiz responses and results,
                used to personalise your experience and email content.
              </li>
              <li>
                <strong>Contact form information</strong> — your name, email, and message when
                you reach out to us.
              </li>
              <li>
                <strong>Usage data</strong> — anonymous browsing data including pages visited,
                time on site, and device information, collected through analytics tools.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">
              How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Send you our weekly newsletter with emotional money insights</li>
              <li>Deliver your personalised Money Persona quiz results</li>
              <li>Tag your email with your persona for relevant content recommendations</li>
              <li>Respond to your contact form inquiries</li>
              <li>Improve our website, content, and user experience</li>
              <li>Notify you about new episodes, resources, and course launches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">
              Cookies and Tracking
            </h2>
            <p className="mt-3">
              We use essential cookies to ensure our website functions properly. We also use
              analytics tools to understand how visitors interact with our site. These tools
              collect anonymous, aggregated data and do not identify you personally.
            </p>
            <p className="mt-3">
              You can control cookies through your browser settings. Disabling cookies may
              affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">
              Third-Party Services
            </h2>
            <p className="mt-3">We use the following third-party services:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>ConvertKit (Kit)</strong> — email marketing and newsletter delivery
              </li>
              <li>
                <strong>Vercel</strong> — website hosting and analytics
              </li>
              <li>
                <strong>YouTube</strong> — video episode hosting
              </li>
              <li>
                <strong>Spotify</strong> — podcast hosting
              </li>
            </ul>
            <p className="mt-3">
              Each of these services has their own privacy policies. We encourage you to review
              them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">Data Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect your personal information from unauthorised
              access, disclosure, or destruction. Our website uses HTTPS encryption, and we
              limit access to personal data to authorised personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">
              Your Rights
            </h2>
            <p className="mt-3">
              Under the Australian Privacy Act 1988, you have the right to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Unsubscribe from our email communications at any time</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a
                href="mailto:hello@emotionalmoney.com.au"
                className="text-gold-600 transition-colors hover:text-gold-700"
              >
                hello@emotionalmoney.com.au
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated &quot;Last updated&quot; date. We encourage you to
              review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-800">Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy or how we handle your personal
              information, please contact us at:
            </p>
            <p className="mt-3">
              <a
                href="mailto:hello@emotionalmoney.com.au"
                className="text-gold-600 transition-colors hover:text-gold-700"
              >
                hello@emotionalmoney.com.au
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
