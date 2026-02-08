import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export const metadata: Metadata = {
  title: 'Free Resources',
  description:
    'Download free tools to transform your emotional relationship with money. Workbooks, trackers, conversation guides, and more.',
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

export default function ResourcesPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">
            Free Tools to Transform Your Money Relationship
          </h1>
          <p className="mt-4 text-lg text-navy-600">
            Practical resources designed to help you understand and gently shift your emotional
            money patterns. All free. No credit card required.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{resource.icon}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-navy-800">{resource.title}</h2>
                  <div className="mt-1 flex gap-2">
                    <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                      {resource.format}
                    </span>
                    <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-600">
                      {resource.pages}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600">
                {resource.description}
              </p>
              <div className="mt-6 rounded-xl bg-slate-bg p-4">
                <p className="mb-2 text-center text-xs font-medium text-navy-600">
                  Enter your email to download
                </p>
                <NewsletterForm variant="inline" />
              </div>
            </div>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="mt-16 rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not Sure Where to Start?
          </h2>
          <p className="mt-3 text-navy-300">
            Take our free Money Persona Quiz to discover which resources are best suited to your
            emotional money pattern.
          </p>
          <Link
            href="/quiz"
            className="mt-6 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Discover Your Money Persona
          </Link>
        </div>
      </div>
    </div>
  )
}
