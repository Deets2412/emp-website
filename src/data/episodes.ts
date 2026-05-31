/**
 * Season 1 episode data — single source of truth for /episodes,
 * /episodes/[slug], and the homepage LatestEpisodes section.
 *
 * Lineup locked 2026-05-29 for Morgans Compliance + Marketing meeting
 * Tue 2 Jun 2026. See EMP/06_Marketing_Launch/Season_1_Lineup_v1_FINAL.md
 * and EMP/09_Website_Source/Compliance_Brief_for_Morgans_Meeting.md.
 */

export type ContentPillarValue =
  | 'psychology'
  | 'practical'
  | 'generational'
  | 'bonus'

export type AlpStageLabel =
  | 'Awareness'
  | 'Examination'
  | 'Embodiment'
  | 'Integration'

export type EpisodeStatus = 'scheduled' | 'released' | 'bonus'

export interface Episode {
  slug: string
  episodeNumber: number | null // null for Bonus & Specials (off-canon)
  title: string
  description: string
  contentPillar: ContentPillarValue
  pillarLabel: string
  duration: number
  publishedAt: string | null // null for undated bonus content
  alpStage: AlpStageLabel | null // null for bonus
  bestFor: string
  keyConcepts: string[]
  showNotes: string[]
  status: EpisodeStatus
  complianceFlag?: string // surfaces for editorial / compliance review
  bonusNote?: string // eyebrow line shown on detail page for bonus eps
}

export const SEASON_ONE: Episode[] = [
  {
    slug: 'your-money-story',
    episodeNumber: 1,
    title: 'Your Money Story — Why Am I Like This?',
    description:
      "The \"chaotic mess\" in your bank account isn't a moral failing. It's the echo of patterns that were set before you could spell your own name. David and Emme open the season by introducing Financial DNA — the hidden architecture of money beliefs, attachment styles and inherited scripts that drive the financial decisions you can't quite explain.",
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 38,
    publishedAt: '2026-07-01',
    alpStage: 'Awareness',
    bestFor: 'All Personas (especially Wounded Warrior)',
    keyConcepts: ['Financial DNA', 'Money scripts', 'Attachment styles'],
    showNotes: [
      'Why smart, capable people still feel chaotic with money',
      "Klontz's four Money Scripts (Avoidance, Worship, Status, Vigilance)",
      'How attachment styles formed in childhood shape adult money behaviour',
      'The "secure base" — and what happens financially when it was never built',
      "Why awareness is the first ALP stage — and why it's not \"just knowing\"",
    ],
    status: 'scheduled',
  },
  {
    slug: 'five-money-personas',
    episodeNumber: 2,
    title: 'The Five Money Personas — Which One Are You?',
    description:
      'Are you an Anxious Protector? A Free Spirit? A Wounded Warrior? David and Emme introduce the five emotional patterns that define your relationship with money.',
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 42,
    publishedAt: '2026-07-08',
    alpStage: 'Awareness',
    bestFor: 'All Personas',
    keyConcepts: ['Money personas', 'Emotional patterns', 'Self-identification'],
    showNotes: [
      'Introducing the 5 Money Personas framework',
      'The Balanced Builder — steady and growth-oriented',
      'The Anxious Protector — driven by financial fear',
      'The Avoidant Free Spirit — living in the moment',
      'The Wounded Warrior — carrying past financial trauma',
      'The Perfectionist Analyzer — paralysed by analysis',
      'Take the quiz to discover your persona',
    ],
    status: 'scheduled',
  },
  {
    slug: 'breakup-spending',
    episodeNumber: 3,
    title: 'Breakup Spending — When Heartbreak Becomes a Spending Trap',
    description:
      "A $9 candle. An emergency takeaway. Three weeks of \"treat yourself\" you can't actually afford. Emme and David unpack why heartbreak — and stress, and loneliness, and Friday nights — hits the wallet first. This episode reframes \"doom spending\" as a nervous system problem, not a discipline problem.",
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 38,
    publishedAt: '2026-07-15',
    alpStage: 'Awareness',
    bestFor: 'Avoidant Free Spirit, Anxious Protector',
    keyConcepts: ['Hyperbolic discounting', 'Lipstick effect', 'Nervous system regulation'],
    showNotes: [
      'Why emotional spending is biological, not moral',
      'Hyperbolic discounting — why $5 today beats $50,000 in retirement',
      'The "Lipstick Effect" and micro-luxuries as control mechanisms',
      'Why budgeting fails at the neurological level',
      'What to do instead: regulation before action',
    ],
    status: 'scheduled',
  },
  {
    slug: 'comparison-game',
    episodeNumber: 4,
    title: 'The Comparison Game',
    description:
      "You're not poorer than your parents were. You're not even poorer than your friends. You're comparing your actual life to a curated highlight reel — and the gap between the two is where modern financial resentment lives. Emme and David explore why every milestone you reach immediately becomes the new normal.",
    contentPillar: 'generational',
    pillarLabel: 'Generations & Culture',
    duration: 36,
    publishedAt: '2026-07-22',
    alpStage: 'Awareness',
    bestFor: 'All Personas',
    keyConcepts: ['Relative deprivation', 'Upward social comparison', 'Shifting reference points'],
    showNotes: [
      'Upward social comparison and what Instagram does to financial wellbeing',
      'Shifting reference points — the milestone trap',
      'Relative Deprivation theory: the gap is the wound, not the lack',
      'Why "old money" doesn\'t post — and what that does to those who do',
      'Choosing your reference points instead of inheriting them',
    ],
    status: 'scheduled',
  },
  {
    slug: 'debt-monster',
    episodeNumber: 5,
    title: 'The Debt Monster',
    description:
      "You're not bad at maths. Your brain's CEO has been escorted out of the building. David and Emme go inside the neurology of debt — why the \"dread\" of opening your bank app physically takes your decision-making centre offline, and why every \"just budget better\" piece of advice fails to land for people in a shame spiral.",
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 42,
    publishedAt: '2026-07-29',
    alpStage: 'Examination',
    bestFor: 'Wounded Warrior, Avoidant Free Spirit',
    keyConcepts: ['Ostrich Effect', 'Financial shame spiral', 'Amygdala hijack'],
    showNotes: [
      'The "Ostrich Effect" — why your brain chooses blindness as a survival strategy',
      'The Financial Shame Spiral and how it compounds',
      'The biological lock: cortisol, the amygdala, and the prefrontal cortex',
      'Why action is impossible until regulation happens first',
      "One small thing you can do today that doesn't require willpower",
      'If you need immediate help with debt, contact the National Debt Helpline on 1800 007 007.',
    ],
    status: 'scheduled',
  },
  {
    slug: 'housing-crisis',
    episodeNumber: 6,
    title: 'The Housing Crisis',
    description:
      'When the wealth-building model your parents used gets yanked out of reach, the result isn\'t just "I can\'t buy a house." It\'s a deeper, quieter phenomenon called financial nihilism — and it changes every small money decision a person makes. Emme and David sit honestly with the intergenerational gap that nobody on either side wants to name out loud.',
    contentPillar: 'generational',
    pillarLabel: 'Generations & Culture',
    duration: 42,
    publishedAt: '2026-08-05',
    alpStage: 'Examination',
    bestFor: 'Anxious Protector, Avoidant Free Spirit',
    keyConcepts: ['Learned helplessness', 'Financial nihilism', 'Intergenerational wealth gap'],
    showNotes: [
      'The Lee & Yoo "Giving Up" research — when reward disappears, behaviour collapses',
      'Learned helplessness applied to a generation',
      'The 9.6-point homeownership gap projected for those born in the 1990s',
      'Housing instability and mental health: the Talmatzky review',
      'Redefining the goal when the original one is gone',
    ],
    status: 'scheduled',
    complianceFlag:
      'Politically charged territory. Stay descriptive, not prescriptive. No specific policy positions taken.',
  },
  {
    slug: 'stock-market-crypto',
    episodeNumber: 7,
    title: 'The Stock Market & Crypto',
    description:
      "\"I know it's gambling. I just don't see another way to catch up.\" That's the line David hears most often from clients in their thirties. This episode takes the urge seriously — not to lecture, but to unpack the psychology of high-risk investing in a world where the safe path feels closed. Behavioural biases, not stock tips.",
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 42,
    publishedAt: '2026-08-12',
    alpStage: 'Examination',
    bestFor: 'Avoidant Free Spirit, Perfectionist Analyzer',
    keyConcepts: ['Overconfidence bias', 'Herd mentality', 'Loss aversion'],
    showNotes: [
      'Overconfidence bias and the illusion of expertise',
      'Herd mentality and FOMO in retail trading',
      'Loss aversion: why people hold losers and sell winners',
      'The dopamine rush as a logical response to financial nihilism',
      'Separating the emotional urge from the financial decision',
    ],
    status: 'scheduled',
    complianceFlag:
      'HIGHEST compliance surface of the season. No specific securities, products, asset classes or strategies named. Pre-clear script with Morgans before recording. Extra disclaimer reads at top and tail.',
  },
  {
    slug: 'relationships-money',
    episodeNumber: 8,
    title: 'Relationships & Money',
    description:
      "Money is the leading cause of relationship conflict — and it's almost never about the money. David and Emme explore how your partner's spending hits your deepest childhood survival instincts, why financial infidelity is rarely about secrecy, and what to actually say when \"we need to talk about the credit card\" feels impossible.",
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 42,
    publishedAt: '2026-08-19',
    alpStage: 'Embodiment',
    bestFor: 'Wounded Warrior, Anxious Protector',
    keyConcepts: ['Financial infidelity', 'Attachment in joint finances', 'Mirror role'],
    showNotes: [
      'Anxious vs avoidant attachment in joint finances',
      'Financial infidelity: what it is, why it happens, what it really means',
      "The \"Mirror Role\" — when your partner's habits reflect your insecurities",
      "Why joint accounts aren't a solution; transparency rituals are",
      'One open-ended money question to ask your partner this week',
    ],
    status: 'scheduled',
  },
  {
    slug: 'career-burnout',
    episodeNumber: 9,
    title: 'Career & Burnout',
    description:
      "The intellectual climax of the season. Why reaching the top often feels like standing in a void — and the sharpest distinction Emme and David make all year: Purpose is future-oriented. Meaning is past-oriented. Overachievers are miserable because they're using the next promotion as a band-aid for a wound that needs surgery.",
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 42,
    publishedAt: '2026-08-26',
    alpStage: 'Embodiment',
    bestFor: 'Perfectionist Analyzer, Balanced Builder',
    keyConcepts: ['Hedonic adaptation', 'Purpose vs Meaning', 'Imposter syndrome'],
    showNotes: [
      'The Hedonic Treadmill — why success stops feeling good',
      'Imposter syndrome at the top: fear of loss replaces drive for gain',
      'Purpose vs Meaning — the most useful distinction in the season',
      'Why financial success can make this worse, not better',
      "The one question that surfaces whether you're chasing or running",
    ],
    status: 'scheduled',
  },
  {
    slug: 'enough-point',
    episodeNumber: 10,
    title: 'The "Enough" Point',
    description:
      "There's a Greek man named Diogenes who lived in a jar. To prove a point. Emme and David make philosophy useful — not as a vibe but as financial infrastructure. \"Enough\" is a number you set in advance, not a feeling you wait for. Pre-define it and the comparison game stops moving the goalpost.",
    contentPillar: 'psychology',
    pillarLabel: 'Emotional Deep Dives',
    duration: 36,
    publishedAt: '2026-09-02',
    alpStage: 'Integration',
    bestFor: 'All Personas',
    keyConcepts: ['Autarky', 'Sufficiency baseline', 'Confirmation bias'],
    showNotes: [
      'Diogenes, Cynicism, and Autarky — self-sufficiency through minimising desire',
      'Epicurus and the "sufficiency baseline"',
      'Actual Poverty vs the Feeling of Poverty',
      'How a pre-defined "enough" shuts down confirmation bias',
      'Writing down your number before the end of this week',
    ],
    status: 'scheduled',
  },
  {
    slug: 'financial-reset',
    episodeNumber: 11,
    title: 'The Financial Reset',
    description:
      "Eleven weeks of *why*. One episode of *what to do tomorrow morning*. David and Emme close the season with four small, specific actions drawn from Bandura's four sources of self-efficacy — none of them a 47-step plan, all of them buildable today. Information paralysis ends here. Season finale.",
    contentPillar: 'practical',
    pillarLabel: 'Real Life Money',
    duration: 42,
    publishedAt: '2026-09-09',
    alpStage: 'Integration',
    bestFor: 'All Personas',
    keyConcepts: ['Financial Self-Efficacy', 'Bandura four sources', 'Micro-wins'],
    showNotes: [
      "Mastery Experiences — audit one subscription you haven't used in 90 days",
      'Vicarious Experiences — join one no-spend community for 48 hours',
      'Social Persuasion — check your credit score today and treat the number as data',
      'Trigger Mapping — name one doom-spending trigger and pre-commit to an alternative',
      'The compounding micro-win: why small actions, repeated, are the whole game',
    ],
    status: 'scheduled',
  },
]

export const BONUS_EPISODES: Episode[] = [
  {
    slug: 'money-taboo',
    episodeNumber: null,
    title: "The Money Taboo — Why We'll Talk About Sex But Not Salaries",
    description:
      'Money is still one of the last taboos. David and Emme explore why financial secrecy persists, what it costs us emotionally, and how to start having honest money conversations.',
    contentPillar: 'bonus',
    pillarLabel: 'Bonus & Specials',
    duration: 37,
    publishedAt: '2026-07-01',
    alpStage: null,
    bestFor: 'Anxious Protector, Balanced Builder',
    keyConcepts: ['Financial secrecy', 'Money conversations', 'Cultural norms'],
    showNotes: [
      'Why money is one of the last cultural taboos',
      "Why we'll discuss sex, politics, and death — but never salaries",
      'The emotional cost of financial secrecy',
      'How to open an honest money conversation without shame',
    ],
    status: 'bonus',
    bonusNote: 'A launch-day bonus episode.',
  },
  {
    slug: 'money-parts',
    episodeNumber: null,
    title: 'Money Parts — Why Part of You Saves While Another Part Spends',
    description:
      'Ever feel like there are two versions of you — one responsible, one impulsive? We explore why your internal parts have different financial agendas.',
    contentPillar: 'bonus',
    pillarLabel: 'Bonus & Specials',
    duration: 40,
    publishedAt: null,
    alpStage: null,
    bestFor: 'Perfectionist Analyzer, Anxious Protector',
    keyConcepts: ['IFS', 'Parts work', 'Internal conflict'],
    showNotes: [
      'Internal Family Systems (IFS) applied to money',
      'Meeting your "saver" and "spender" parts on their own terms',
      'Why suppressing a part guarantees its return',
      'Parts work as a Season 1-wide framework',
    ],
    status: 'bonus',
    bonusNote: 'A bonus deep dive into IFS — releases between Season 1 episodes.',
  },
  {
    slug: 'human-design-money',
    episodeNumber: null,
    title: 'Human Design & Money — How Your Energy Type Affects Financial Decisions',
    description:
      'Emme brings her fascination with human design to the money conversation. Discover how generators, projectors, and manifestors each approach their finances differently.',
    contentPillar: 'bonus',
    pillarLabel: 'Bonus & Specials',
    duration: 44,
    publishedAt: null,
    alpStage: null,
    bestFor: 'All Personas',
    keyConcepts: ['Human design', 'Energy types', 'Decision-making styles'],
    showNotes: [
      "Human design as a self-reflection lens, not a diagnostic",
      'Generators, projectors, manifestors, reflectors',
      'Where human design overlaps with evidence-based personality work',
      'Where it diverges and why that matters',
    ],
    status: 'bonus',
    bonusNote:
      "A bonus conversation. Emme's interest area — explored as a bonus, outside the Season 1 evidence base.",
  },
]

export const ALL_EPISODES: Episode[] = [...SEASON_ONE, ...BONUS_EPISODES]

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return ALL_EPISODES.find((ep) => ep.slug === slug)
}
