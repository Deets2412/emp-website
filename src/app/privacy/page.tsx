import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Emotional Money Podcast website.',
}

const pageStyles = `
  .prose { max-width: 68ch; }
  .prose > p { color: var(--ink-soft); font-size: 1.08rem; line-height: 1.75; }
  .prose section { margin-top: 48px; }
  .prose section h2 { font-family: var(--serif); font-size: 1.7rem; line-height: 1.2; margin-bottom: 16px; }
  .prose section p { color: var(--ink-soft); font-size: 1.05rem; line-height: 1.7; }
  .prose section p + p { margin-top: 16px; }
  .prose ul { list-style: none; margin: 18px 0 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
  .prose ul li { position: relative; padding-left: 26px; color: var(--ink-soft); font-size: 1.05rem; line-height: 1.65; }
  .prose ul li::before { content: ""; position: absolute; left: 4px; top: 0.62em; width: 6px; height: 6px; border-radius: 50%; background: var(--sage-deep); }
  .prose ul li strong { color: var(--ink); font-weight: 600; }
  .prose a.email { color: var(--sage-deep); text-decoration: underline; text-underline-offset: 3px; transition: color 0.18s ease; }
  .prose a.email:hover { color: var(--ink); }
  .prose .updated { font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint); margin-top: 14px; }
`

export default function PrivacyPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: 1 July 2026</p>
        </div>
      </section>

      {/* policy body */}
      <section className="band alt">
        <div className="wrap">
          <div className="prose">
            <p>
              The Emotional Money Podcast (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              respects your privacy and is committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, and safeguard information when you
              visit our website at emotionalmoney.com.au.
            </p>

            <section>
              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
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
              <h2>How We Use Your Information</h2>
              <ul>
                <li>Send you our weekly newsletter with emotional money insights</li>
                <li>Deliver your personalised Money Persona quiz results</li>
                <li>Tag your email with your persona for relevant content recommendations</li>
                <li>Respond to your contact form inquiries</li>
                <li>Improve our website, content, and user experience</li>
                <li>Notify you about new episodes, resources, and course launches</li>
              </ul>
            </section>

            <section>
              <h2>Cookies and Tracking</h2>
              <p>
                We use essential cookies to ensure our website functions properly. We also use
                analytics tools to understand how visitors interact with our site. These tools
                collect anonymous, aggregated data and do not identify you personally.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling cookies may
                affect some website functionality.
              </p>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul>
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
              <p>
                Each of these services has their own privacy policies. We encourage you to review
                them.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information from unauthorised
                access, disclosure, or destruction. Our website uses HTTPS encryption, and we
                limit access to personal data to authorised personnel only.
              </p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>
                Under the Australian Privacy Act 1988, you have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Unsubscribe from our email communications at any time</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hello@emotionalmoney.com.au" className="email">
                  hello@emotionalmoney.com.au
                </a>
                .
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated &quot;Last updated&quot; date. We encourage you to
                review this policy periodically.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal
                information, please contact us at:
              </p>
              <p>
                <a href="mailto:hello@emotionalmoney.com.au" className="email">
                  hello@emotionalmoney.com.au
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
