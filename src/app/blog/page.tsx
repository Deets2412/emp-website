import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTENT_PILLARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore articles about the emotional side of money. From money anxiety to relationship finances, David and Emme share honest insights you can use today.',
}

const pageStyles = `
  .pillbar { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
  .pill { font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 8px 16px; border-radius: 999px; border: 1px solid var(--line); background: var(--paper); color: var(--ink-soft); cursor: pointer; transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease; }
  .pill:hover { border-color: var(--sage-deep); color: var(--sage-deep); }
  .pill.active { background: var(--ink); border-color: var(--ink); color: var(--paper); }

  .post-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .post-card { display: flex; flex-direction: column; overflow: hidden; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; transition: border-color 0.2s ease, transform 0.2s ease; }
  .post-card:hover { border-color: var(--line-strong); transform: translateY(-3px); }
  .post-thumb { aspect-ratio: 16 / 9; background: var(--sage-wash); display: grid; place-items: center; border-bottom: 1px solid var(--line); }
  .post-thumb span { font-family: var(--serif); font-size: 2.2rem; letter-spacing: 0.04em; color: var(--sage-deep); }
  .post-body { padding: 26px 28px 30px; display: flex; flex-direction: column; flex: 1; }
  .post-cat { display: inline-flex; align-self: flex-start; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 11px; border-radius: 999px; background: var(--clay-wash); color: var(--clay); margin-bottom: 14px; }
  .post-card h2 { font-size: 1.3rem; line-height: 1.25; margin-bottom: 10px; transition: color 0.18s ease; }
  .post-card:hover h2 { color: var(--sage-deep); }
  .post-excerpt { font-size: 0.94rem; color: var(--ink-soft); line-height: 1.6; }
  .post-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 20px; font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.04em; color: var(--ink-faint); }
  .post-meta .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--line-strong); }
  @media (max-width: 920px) { .post-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 620px) { .post-grid { grid-template-columns: 1fr; } }
`

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
    <>
      <style>{pageStyles}</style>

      {/* hero */}
      <section className="phero">
        <div className="wrap">
          <p className="eyebrow">From the show</p>
          <h1>
            Honest notes on the <em>feelings</em> behind money
          </h1>
          <p className="lead">
            No jargon. No judgment. Just real conversations about how money makes us feel —
            from money anxiety to the arguments couples keep having.
          </p>
        </div>
      </section>

      {/* posts */}
      <section className="band alt">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '32px' }}>
            <p className="eyebrow">Browse</p>
            <h2>Articles &amp; deep dives</h2>
            <div className="pillbar">
              <button className="pill active">All Posts</button>
              {CONTENT_PILLARS.map((pillar) => (
                <button key={pillar.value} className="pill">
                  {pillar.label}
                </button>
              ))}
            </div>
          </div>

          <div className="post-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <div className="post-thumb" aria-hidden="true">
                  <span>EMP</span>
                </div>
                <div className="post-body">
                  <span className="post-cat">{post.categoryLabel}</span>
                  <h2>{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.author}</span>
                    <span className="dot" />
                    <span>
                      {new Date(post.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="dot" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
