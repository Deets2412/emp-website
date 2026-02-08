import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

const posts: Record<
  string,
  {
    title: string
    excerpt: string
    category: string
    categoryLabel: string
    author: string
    date: string
    readTime: number
    body: string[]
  }
> = {
  'why-you-cry-about-money': {
    title: 'Why You Cry About Money (And What It Really Means)',
    excerpt:
      'Tears and money are more connected than you think. Here is what your emotional reactions are trying to tell you.',
    category: 'psychology',
    categoryLabel: 'Emotional Deep Dives',
    author: 'David & Emme',
    date: '2026-07-01',
    readTime: 7,
    body: [
      'If you have ever felt tears welling up during a conversation about money — whether it is checking your bank balance, talking about bills with your partner, or watching someone else buy something you cannot afford — you are not alone. And you are definitely not being dramatic.',
      'Money is one of the most emotionally charged topics in our lives. It is tied to our sense of safety, our self-worth, our childhood memories, and our deepest fears about the future. When tears come up around money, they are not about the dollars — they are about what those dollars represent.',
      'David sees this regularly with clients who have been managing their finances for decades. "People apologise for getting emotional," he says. "But those emotions are the most important information in the room. They are telling us something the spreadsheet never could."',
      'Emme relates from a different angle: "For my generation, money anxiety is constant. We are told we should be grateful for any job, while watching home ownership drift further away. The tears are not weakness — they are a completely rational response to an overwhelming situation."',
      'So what do your money tears actually mean? They are usually pointing to one of four core emotions: fear (of not having enough), shame (of not being enough), grief (for opportunities lost), or frustration (at feeling stuck). Recognising which emotion is driving your tears is the first step toward understanding — and eventually transforming — your relationship with money.',
    ],
  },
  'money-fights-decoded': {
    title: 'Money Fights Decoded — What You Are Really Arguing About',
    excerpt:
      'Most couples think they fight about spending. The real conflict runs much deeper.',
    category: 'practical',
    categoryLabel: 'Real Life Money',
    author: 'David',
    date: '2026-07-08',
    readTime: 6,
    body: [
      'Every financial planner has heard it: "We fight about money all the time." But after 25 years of working with couples, I can tell you that the fight is almost never actually about the money. It is about what money represents — security, freedom, control, love, or worth.',
      'When one partner criticises the other for spending too much on coffee, they are usually not upset about the $5. They are expressing anxiety about security. When someone hides a purchase, they are not just avoiding a lecture — they are protecting their sense of autonomy.',
      'The key to breaking the cycle is recognising that you and your partner probably have different Money Personas. An Anxious Protector paired with an Avoidant Free Spirit? That is a recipe for conflict unless both people understand what is driving the other.',
      'The good news is that once you decode what your money fights are really about, you can stop arguing about the symptoms and start addressing the real emotions underneath. That is where actual change happens.',
    ],
  },
  'gen-z-money-anxiety': {
    title: 'Gen Z Money Anxiety Is Real — Here Is What Is Driving It',
    excerpt:
      'Emme explores why her generation feels more financially anxious than any before, and what we can do about it.',
    category: 'generational',
    categoryLabel: 'Generations & Culture',
    author: 'Emme',
    date: '2026-07-15',
    readTime: 8,
    body: [
      'I am 25, and I cannot remember a time when money did not feel stressful. I entered the workforce during a pandemic, watched house prices triple in a decade, and scroll through social media where everyone seems to be thriving while I am barely keeping up.',
      'My generation is not lazy or entitled — we are anxious. And that anxiety is backed by real numbers. The cost of housing relative to income is at historic highs. Student debt is a given. The gig economy means job security is a luxury. We are the first generation expected to be worse off than our parents.',
      'But here is what makes it harder: we do not just feel the financial pressure. We feel the shame of not measuring up. Social media creates a comparison trap that previous generations never had to deal with. Every perfectly curated lifestyle post is a reminder of what we think we should have by now.',
      'The solution is not just better budgeting advice. It is emotional support. It is permission to feel scared without being told to "just work harder." It is understanding that our relationship with money was shaped by forces beyond our control — and that healing starts with acknowledging that.',
    ],
  },
  'five-signs-emotional-spender': {
    title: 'Five Signs You Are an Emotional Spender (And What to Do Instead)',
    excerpt:
      'Retail therapy feels good in the moment. But emotional spending leaves you worse off. Spot the signs early.',
    category: 'practical',
    categoryLabel: 'Real Life Money',
    author: 'David & Emme',
    date: '2026-07-22',
    readTime: 5,
    body: [
      'Emotional spending is not about being irresponsible. It is about using purchases to manage feelings that need a different kind of attention. Here are five signs it might be happening to you.',
      'First, you shop when you are stressed, sad, or bored — not because you need something. Second, you feel a rush of excitement when buying but guilt or emptiness shortly after. Third, you hide purchases from your partner or family. Fourth, your spending spikes after arguments, bad days at work, or difficult news. Fifth, you have items with tags still on them that you forgot you bought.',
      'If any of these sound familiar, you are not broken. You have just developed a coping mechanism that is not serving you well. The 48-hour rule is a good starting point: when you feel the urge to buy something emotional, wait 48 hours. If you still want it and it fits your budget, go for it. If the feeling has passed, you have just learned something valuable about what was really going on.',
      'The goal is not to stop spending altogether. It is to spend with awareness — to know the difference between "I want this" and "I need to feel something different right now."',
    ],
  },
  'your-parents-money-story': {
    title: 'Your Parents Money Story Is Running Your Life',
    excerpt:
      'The financial messages you absorbed as a child are still shaping every dollar decision you make today.',
    category: 'psychology',
    categoryLabel: 'Emotional Deep Dives',
    author: 'David',
    date: '2026-07-29',
    readTime: 9,
    body: [
      'Before you ever earned a dollar, you had already formed deep beliefs about money. These beliefs were not taught in a classroom — they were absorbed in your childhood home, through overheard conversations, unspoken tensions, and the way money was or was not discussed.',
      'If your parents fought about money, you may have learned that money causes conflict — and now you avoid financial conversations with your partner. If money was scarce and stressful, you may carry an anxious relationship with your bank balance even when you are doing fine. If money was never discussed at all, you may struggle with financial avoidance as an adult.',
      'These early money messages become what we call your "money story" — a narrative running quietly in the background of every financial decision you make. The story is not always true anymore, but it still feels true. And feelings drive behaviour.',
      'The first step toward freedom is awareness. Try this: think back to your earliest money memory. What were you told about money? What did you feel? What did you conclude about yourself and the world? You might be surprised how much that childhood moment still influences the way you handle money today.',
    ],
  },
  'money-persona-relationship': {
    title: 'How Your Money Persona Shows Up in Relationships',
    excerpt:
      'Your money patterns do not just affect your bank account — they shape every financial conversation with your partner.',
    category: 'personality',
    categoryLabel: 'Money Personalities',
    author: 'Emme',
    date: '2026-08-05',
    readTime: 7,
    body: [
      'When you combine two people with different Money Personas, you get a unique dynamic that can either strengthen or strain the relationship. Understanding your own persona — and your partner\'s — is the first step toward healthier money conversations.',
      'An Anxious Protector paired with an Avoidant Free Spirit is one of the most common and challenging combinations. One partner wants to check the accounts daily; the other would rather not think about money at all. Neither is wrong — they are just operating from different emotional places.',
      'The Wounded Warrior in a relationship often struggles with vulnerability. They may hide financial struggles out of shame, or self-sabotage joint financial goals because they do not believe they deserve success. Their partner needs patience, not lectures.',
      'The key insight is this: money conflicts in relationships are rarely about the money. They are about the emotions underneath. When you can name the emotion — "I feel scared" instead of "You spend too much" — you create space for connection instead of conflict.',
    ],
  },
}

const allSlugs = Object.keys(posts)

function getPost(slug: string) {
  return posts[slug] || null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-bg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-800">Post Not Found</h1>
          <Link
            href="/blog"
            className="mt-4 inline-flex text-sm font-medium text-gold-600 hover:text-gold-700"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedSlugs = allSlugs.filter((s) => s !== slug && posts[s].category === post.category).slice(0, 2)

  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-navy-500">
          <Link href="/blog" className="transition-colors hover:text-gold-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy-700">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-gold-50 px-3 py-1 text-sm font-medium text-gold-700">
            {post.categoryLabel}
          </div>
          <h1 className="text-3xl font-bold text-navy-800 sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-navy-500">
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

        {/* Body */}
        <div className="space-y-6 text-navy-700 leading-relaxed">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="my-10 rounded-2xl bg-navy-800 p-8 text-center">
          <h3 className="text-xl font-bold text-white">Discover Your Money Persona</h3>
          <p className="mt-2 text-navy-300">
            Take our free 3-minute quiz and get a personalised action plan for your emotional
            money pattern.
          </p>
          <Link
            href="/quiz"
            className="mt-4 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Take the Quiz
          </Link>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 border-t border-navy-100 pt-6">
          <span className="text-sm font-medium text-navy-600">Share:</span>
          <button className="rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:border-gold-400 hover:text-gold-700">
            Copy Link
          </button>
          <button className="rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:border-gold-400 hover:text-gold-700">
            X / Twitter
          </button>
          <button className="rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:border-gold-400 hover:text-gold-700">
            Facebook
          </button>
        </div>

        {/* Related Posts */}
        {relatedSlugs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-navy-800">Related Posts</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedSlugs.map((s) => {
                const related = posts[s]
                return (
                  <Link
                    key={s}
                    href={`/blog/${s}`}
                    className="rounded-xl border border-navy-100 bg-white p-4 transition-all hover:border-gold-300 hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-gold-700">
                      {related.categoryLabel}
                    </span>
                    <h4 className="mt-1 font-semibold text-navy-800">{related.title}</h4>
                    <p className="mt-1 text-sm text-navy-500">{related.readTime} min read</p>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-12 rounded-2xl border border-navy-100 bg-white p-8 text-center">
          <h3 className="text-lg font-semibold text-navy-800">
            Get Weekly Emotional Money Insights
          </h3>
          <p className="mt-2 text-sm text-navy-600">
            No spam. Just real conversations about how money makes us feel.
          </p>
          <div className="mx-auto mt-4 max-w-sm">
            <NewsletterForm variant="inline" />
          </div>
        </div>

        {/* Back */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
