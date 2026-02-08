import type { PersonaSlug } from '@/lib/constants'

export interface PersonaProfile {
  slug: PersonaSlug
  name: string
  tagline: string
  emoji: string
  color: string
  description: string
  strengths: string[]
  challenges: string[]
  origin: string
  mantras: string[]
  dailyPractice: { morning: string; evening: string }
  weeklyPractice: string
  growthEdges: string[]
  partnerAdvice: string
  recommendedEpisodes: string[]
}

export const personaProfiles: Record<PersonaSlug, PersonaProfile> = {
  'balanced-builder': {
    slug: 'balanced-builder',
    name: 'Balanced Builder',
    tagline: 'Steady, grounded, and growing',
    emoji: '🌿',
    color: '#4CAF50',
    description:
      'You have a relatively healthy relationship with money. You can plan, save, and spend without excessive anxiety or avoidance. You see money as a tool for building the life you want.',
    strengths: [
      'You make financial decisions without excessive stress',
      'You balance present enjoyment with future planning',
      'You are open to learning and adjusting your approach',
      'You handle setbacks without spiralling',
      'You are generally comfortable discussing money openly',
    ],
    challenges: [
      'You might take your financial health for granted',
      'You can become complacent about long-term planning',
      'You may not always recognise the emotional side of money',
      'You could be more intentional about values alignment',
      'You sometimes miss how your stability affects a partner who struggles',
    ],
    origin:
      'Often rooted in a childhood with generally secure relationships and some financial stability — or where healthy money patterns were learned despite instability.',
    mantras: [
      'I trust myself with money',
      'I can handle whatever comes',
      'Money is a tool for the life I want',
    ],
    dailyPractice: {
      morning:
        'Set a quick financial intention for the day and express gratitude for the resources you have.',
      evening:
        'Notice any money moments today and celebrate what went well.',
    },
    weeklyPractice:
      'Sunday evening check-in: review spending vs. values alignment and make one small adjustment for the week ahead.',
    growthEdges: [
      'You notice and support others who struggle with money without being dismissive',
      'You deepen your self-awareness about your own triggers',
      'You stay intentional rather than coasting on past success',
      'You align your spending more closely with your true values',
    ],
    partnerAdvice:
      'Your partner may struggle more than you with money emotions. Create safe space for honest money conversations and be patient with their patterns — your stability is a gift, not a weapon.',
    recommendedEpisodes: ['your-money-story', 'money-taboo'],
  },
  'anxious-protector': {
    slug: 'anxious-protector',
    name: 'Anxious Protector',
    tagline: 'Driven by the need for security',
    emoji: '🛡️',
    color: '#2196F3',
    description:
      'You worry about money constantly, even when you are objectively okay. You are hyper-vigilant about financial security, always scanning for threats, and never quite feel like you have "enough."',
    strengths: [
      'You are excellent at spotting financial risks early',
      'You are motivated to save and build security',
      'You pay close attention to financial details',
      'You are protective of the people you love',
      'You are unlikely to make reckless financial decisions',
    ],
    challenges: [
      'Constant financial anxiety regardless of your actual situation',
      'Difficulty enjoying what you already have',
      'Checking accounts obsessively for reassurance',
      'Finding it hard to spend even on legitimate needs',
      'Catastrophising financial situations that are actually manageable',
    ],
    origin:
      'Often rooted in financial instability during childhood, parents who worried constantly about money, or direct experience of loss and scarcity that taught you the world is not safe.',
    mantras: [
      'I can feel anxious and still be okay',
      'I have enough for today',
      'My worry is trying to protect me, but I am safe',
      'The feeling will pass, the facts remain',
    ],
    dailyPractice: {
      morning:
        'Reality check: "Am I in actual danger today?" Name one concrete resource you have.',
      evening:
        'What did I worry about today? Did those things actually happen? What can I let go of?',
    },
    weeklyPractice:
      'Review your actual financial numbers — facts, not fears. Reality-test one worry and note one thing that went well.',
    growthEdges: [
      'You notice worry without it taking over your day',
      'You can spend on legitimate needs without guilt',
      'You check accounts less frequently',
      'You take small, considered financial risks and see you survive',
    ],
    partnerAdvice:
      'They are not trying to be controlling — they are scared. Give reassurance without enabling constant checking. A weekly money meeting helps because it provides predictable reassurance.',
    recommendedEpisodes: ['your-money-story', 'five-money-personas'],
  },
  'avoidant-free-spirit': {
    slug: 'avoidant-free-spirit',
    name: 'Avoidant Free Spirit',
    tagline: 'Living in the moment, avoiding the numbers',
    emoji: '🦋',
    color: '#FF9800',
    description:
      'You avoid dealing with money whenever possible. You do not open bills, rarely check accounts, and prefer not to think about the future. Money feels restrictive and overwhelming, and you value your independence highly.',
    strengths: [
      'You live fully in the present moment',
      'You are not controlled by financial anxiety',
      'You value experiences over material things',
      'You have an independent, adventurous spirit',
      'You can take risks that others cannot',
    ],
    challenges: [
      'Avoiding bank accounts, bills, and financial mail',
      'Procrastinating on important financial tasks',
      'Making impulsive decisions to avoid discomfort',
      'Problems growing because they are not addressed early',
      'Withdrawing from money conversations in relationships',
    ],
    origin:
      'Often rooted in a childhood where money was overwhelming or shameful. Avoidance became your way of coping with financial stress, and you learned to be very self-reliant.',
    mantras: [
      'One small step is enough',
      'I can feel overwhelmed and still take action',
      'Looking does not make problems worse — it helps me handle them',
      'Asking for help is strength, not weakness',
    ],
    dailyPractice: {
      morning:
        'Choose one tiny financial task for today. Remind yourself: "I can feel resistant and still do this."',
      evening:
        'Did I do my tiny task? Celebrate if yes! Plan tomorrow\'s tiny task.',
    },
    weeklyPractice:
      'Review: what did I avoid this week? Celebrate one thing I did not avoid. Plan next week\'s tiny steps.',
    growthEdges: [
      'You can look at your bank account without massive resistance',
      'You open mail the day it arrives',
      'You have a rough sense of monthly spending',
      'You can talk about money for 15 minutes without shutting down',
    ],
    partnerAdvice:
      'Do not chase them about money — it makes them withdraw more. Set structured, predictable times for money talks. Appreciate even the smallest steps and do not take over everything.',
    recommendedEpisodes: ['breakup-spending', 'money-parts'],
  },
  'wounded-warrior': {
    slug: 'wounded-warrior',
    name: 'Wounded Warrior',
    tagline: 'Carrying past financial pain forward',
    emoji: '⚔️',
    color: '#9C27B0',
    description:
      'You carry deep shame and pain about money. You may feel fundamentally broken or undeserving when it comes to finances. You might self-sabotage success or swing between extremes — saving everything, then spending it all.',
    strengths: [
      'Deep self-awareness — you know something needs to change',
      'Remarkable resilience — you keep trying despite the pain',
      'Genuine empathy for others who struggle with money',
      'Strong motivation to heal and transform',
      'When things go well, you truly appreciate it',
    ],
    challenges: [
      'Intense shame about your financial situation',
      'Self-sabotaging when things start going well',
      'Inconsistency — saving carefully then spending it all',
      'Feeling you do not deserve financial success',
      'Difficulty trusting yourself with financial decisions',
    ],
    origin:
      'Often rooted in childhood poverty, financial instability, shame messages about money, or family conflicts around finances that left deep wounds about your worth.',
    mantras: [
      'I am not broken — I am hurt. Hurt can heal.',
      'My worth is not determined by my bank account',
      'I can learn to trust myself with money',
      'Small steps are healing steps',
    ],
    dailyPractice: {
      morning:
        'Read your belief card. Set one tiny promise to yourself: "Today I choose to believe I can heal."',
      evening:
        'Did I keep my promise? Offer yourself compassion: "I am doing my best with a hard history."',
    },
    weeklyPractice:
      'Identify what pattern showed up this week. Plan one small pattern-breaking experiment. Celebrate one thing you did not sabotage.',
    growthEdges: [
      'You notice the sabotage pattern before acting on it',
      'You can hold onto small wins without dismissing them',
      'Shame decreases, even a little',
      'You keep promises to yourself more often',
    ],
    partnerAdvice:
      'Be patient — this is deep pain, not bad behaviour. Do not take the push-pull personally. Celebrate small wins because they are huge for them. Encourage professional support without ultimatums.',
    recommendedEpisodes: ['your-money-story', 'breakup-spending'],
  },
  'perfectionist-analyzer': {
    slug: 'perfectionist-analyzer',
    name: 'Perfectionist Analyzer',
    tagline: 'Seeking the perfect move before any move',
    emoji: '🔍',
    color: '#607D8B',
    description:
      'You need to do money "perfectly." You research exhaustively, track every dollar, and criticise every decision. You are often paralysed by the fear of making the wrong financial choice.',
    strengths: [
      'You are an excellent researcher and detail-oriented thinker',
      'You make thoughtful, well-considered decisions',
      'You are responsible and take finances seriously',
      'You are unlikely to make impulsive financial mistakes',
      'Your high standards often drive genuinely good outcomes',
    ],
    challenges: [
      'Paralysis by analysis — researching forever, never deciding',
      'Tracking every dollar exhaustively and feeling it is never enough',
      'Harsh self-criticism about every financial decision',
      'All-or-nothing thinking: perfect budget or complete chaos',
      'Impossible standards that leave you feeling perpetually behind',
    ],
    origin:
      'Often rooted in a childhood where love or approval was conditional on achievement. Mistakes were harshly criticised, and you learned that being perfect was the only way to feel safe.',
    mantras: [
      'Done is better than perfect',
      'I can make a good decision with good-enough information',
      'Mistakes are how I learn, not proof I am failing',
      'B+ is plenty',
    ],
    dailyPractice: {
      morning:
        'Set today\'s goal: "Good enough" in one financial area. Set a time limit for one financial task.',
      evening:
        'Did I achieve "good enough"? What did my inner critic say? Write a more compassionate response.',
    },
    weeklyPractice:
      'Where was I perfectionistic this week? What did it cost me? Where was "good enough" actually fine? Choose one area for B+ work next week.',
    growthEdges: [
      'You make financial decisions with "good enough" information',
      'You track spending roughly, not to the penny',
      'You allow yourself mistakes without spiralling',
      'You choose progress over perfection',
    ],
    partnerAdvice:
      'Do not criticise their meticulousness — they will defend it. Appreciate that they DO research things well. Gently challenge paralysis: "What would good enough look like here?"',
    recommendedEpisodes: ['five-money-personas', 'money-parts'],
  },
}
