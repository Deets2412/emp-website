import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTENT_PILLARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore articles about the emotional side of money. From money anxiety to relationship finances, David and Emme share honest insights you can use today.',
}

const posts = [
  {
    slug: 'why-you-cry-about-money',
    title: 'Why You Cry About Money (And What It Really Means)',
    excerpt:
      'Tears and money are more connected than you think. Here is what your emotional reactions are trying to tell you.',
    category: 'psychology',
    categoryLabel: 'Emotional Deep Dives',
    author: 'David & Emme',
    date: '2026-07-01',
    readTime: 7,
  },
  {
    slug: 'money-fights-decoded',
    title: 'Money Fights Decoded — What You Are Really Arguing About',
    excerpt:
      'Most couples think they fight about spending. The real conflict runs much deeper.',
    category: 'practical',
    categoryLabel: 'Real Life Money',
    author: 'David',
    date: '2026-07-08',
    readTime: 6,
  },
  {
    slug: 'gen-z-money-anxiety',
    title: 'Gen Z Money Anxiety Is Real — Here Is What Is Driving It',
    excerpt:
      'Emme explores why her generation feels more financially anxious than any before, and what we can do about it.',
    category: 'generational',
    categoryLabel: 'Generations & Culture',
    author: 'Emme',
    date: '2026-07-15',
    readTime: 8,
  },
  {
    slug: 'five-signs-emotional-spender',
    title: 'Five Signs You Are an Emotional Spender (And What to Do Instead)',
    excerpt:
      'Retail therapy feels good in the moment. But emotional spending leaves you worse off. Spot the signs early.',
    category: 'practical',
    categoryLabel: 'Real Life Money',
    author: 'David & Emme',
    date: '2026-07-22',
    readTime: 5,
  },
  {
    slug: 'your-parents-money-story',
    title: 'Your Parents Money Story Is Running Your Life',
    excerpt:
      'The financial messages you absorbed as a child are still shaping every dollar decision you make today.',
    category: 'psychology',
    categoryLabel: 'Emotional Deep Dives',
    author: 'David',
    date: '2026-07-29',
    readTime: 9,
  },
  {
    slug: 'money-persona-relationship',
    title: 'How Your Money Persona Shows Up in Relationships',
    excerpt:
      'Your money patterns do not just affect your bank account — they shape every financial conversation with your partner.',
    category: 'personality',
    categoryLabel: 'Money Personalities',
    author: 'Emme',
    date: '2026-08-05',
    readTime: 7,
  },
]

export default function BlogPage() {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-navy-800 sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-navy-600">
            Honest insights about the emotional side of money. No jargon. No judgment. Just
            real conversations about how money makes us feel.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button className="rounded-full bg-navy-800 px-4 py-2 text-sm font-medium text-white">
            All Posts
          </button>
          {CONTENT_PILLARS.map((pillar) => (
            <button
              key={pillar.value}
              className="rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
            >
              {pillar.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/5"
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-navy-100 to-navy-200">
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl font-bold text-navy-300">EMP</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 inline-flex rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                  {post.categoryLabel}
                </div>
                <h2 className="text-lg font-semibold leading-snug text-navy-800 transition-colors group-hover:text-gold-600">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-navy-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-navy-400">
                  <span>{post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-navy-300" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-navy-300" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
