import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'Free Resources',
  description:
    'Free tools for understanding your emotional relationship with money. Workbooks, trackers, conversation guides, and more.',
}

const resources = [
  {
    title: 'Money Persona Workbook',
    description:
      'A complete guide to understanding your Money Persona with exercises, reflection prompts, and action plans tailored to your emotional money pattern.',
    format: 'PDF Workbook',
    icon: '📒',
    pages: '45 pages',
  },
  {
    title: 'Emotional Spending Tracker',
    description:
      'Track not just what you spend, but how you feel when you spend it. Uncover the emotional patterns behind your purchases over 30 days.',
    format: 'Printable Worksheet',
    icon: '📊',
    pages: '12 pages',
  },
  {
    title: 'Couples Money Conversation Guide',
    description:
      'A structured guide for having honest, shame-free money conversations with your partner. Includes prompts for each Money Persona combination.',
    format: 'PDF Guide',
    icon: '💑',
    pages: '28 pages',
  },
  {
    title: 'Weekly Reflection Journal',
    description:
      'Seven days of guided prompts to help you notice, understand, and gently shift your emotional money patterns. Use it as a standalone or alongside the podcast.',
    format: 'Digital Journal',
    icon: '📓',
    pages: '20 pages',
  },
]

const pageStyles = `
  .res-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .res-card { display: flex; flex-direction: column; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 32px; transition: border-color 0.18s ease, transform 0.18s ease; }
  .res-card:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .res-card .rtop { display: flex; gap: 18px; align-items: flex-start; }
  .res-card .ricon { font-size: 2.2rem; line-height: 1; flex: none; }
  .res-card h3 { font-size: 1.35rem; margin-bottom: 10px; }
  .res-card .tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .res-card .tag { font-family: var(--mono); font-size: 0.64rem; letter-spacing: 0.04em; padding: 5px 10px; border-radius: 999px; background: var(--paper-2); border: 1px solid var(--line); color: var(--ink-soft); }
  .res-card .tag.fmt { background: var(--sage-wash); border-color: color-mix(in oklch, var(--sage-deep) 25%, transparent); color: var(--sage-deep); }
  .res-card .desc { font-size: 0.94rem; color: var(--ink-soft); line-height: 1.62; margin: 18px 0 0; flex: 1; }
  .res-card .dl { margin-top: 24px; padding-top: 22px; border-top: 1px solid var(--line); }
  .res-card .dl .lbl { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 12px; }
  @media (max-width: 820px) { .res-grid { grid-template-columns: 1fr; } }
`

export default function ResourcesPage() {
  return (
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">Free resources</p>
          <h1>
            Free tools to understand your <em>money relationship</em>
          </h1>
          <p className="lead">
            Practical resources designed to help you notice and gently shift your emotional money
            patterns. All free. No credit card required.
          </p>
        </div>
      </section>

      {/* resource cards */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Downloads</p>
            <h2>Workbooks, trackers &amp; guides</h2>
          </div>
          <div className="res-grid">
            {resources.map((resource) => (
              <div key={resource.title} className="res-card">
                <div className="rtop">
                  <span className="ricon" aria-hidden="true">{resource.icon}</span>
                  <div>
                    <h3>{resource.title}</h3>
                    <div className="tags">
                      <span className="tag fmt">{resource.format}</span>
                      <span className="tag">{resource.pages}</span>
                    </div>
                  </div>
                </div>
                <p className="desc">{resource.description}</p>
                <div className="dl">
                  <p className="lbl">Enter your email to download</p>
                  <NewsletterForm variant="inline" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* quiz cta */}
      <section className="band">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <p className="eyebrow">Where to start</p>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', margin: '14px 0 16px' }}>
              Not sure where to start?
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '28px' }}>
              Take the free Money Persona Quiz to discover which resources are best suited to your
              emotional money pattern.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/quiz">
                Discover your Money Persona
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
