export const SITE_NAME = 'The Emotional Money Podcast'
export const SITE_TAGLINE = 'Psychology-First Financial Transformation'
export const SITE_DESCRIPTION =
  'An Australian podcast exploring the psychology of money. Hosted by David & Emme — understanding how you feel about money is the first step to changing it.'

export const PERSONAS = {
  'balanced-builder': {
    name: 'Balanced Builder',
    tagline: 'Steady, grounded, and growing',
    color: '#4CAF50',
    emoji: '🌿',
  },
  'anxious-protector': {
    name: 'Anxious Protector',
    tagline: 'Driven by the need for security',
    color: '#2196F3',
    emoji: '🛡️',
  },
  'avoidant-free-spirit': {
    name: 'Avoidant Free Spirit',
    tagline: 'Living in the moment, avoiding the numbers',
    color: '#FF9800',
    emoji: '🦋',
  },
  'wounded-warrior': {
    name: 'Wounded Warrior',
    tagline: 'Carrying past financial pain forward',
    color: '#9C27B0',
    emoji: '⚔️',
  },
  'perfectionist-analyzer': {
    name: 'Perfectionist Analyzer',
    tagline: 'Seeking the perfect move before any move',
    color: '#607D8B',
    emoji: '🔍',
  },
} as const

export type PersonaSlug = keyof typeof PERSONAS

export const CONTENT_PILLARS = [
  { value: 'psychology', label: 'Emotional Deep Dives', description: 'Exploring the feelings that shape your money story' },
  { value: 'personality', label: 'Money Personalities', description: 'How your unique wiring affects your finances' },
  { value: 'generational', label: 'Generations & Culture', description: 'How your background shapes your money emotions' },
  { value: 'practical', label: 'Real Life Money', description: 'Navigating emotional money moments' },
] as const

export const NAV_LINKS = [
  { href: '/episodes', label: 'Episodes' },
  { href: '/quiz', label: 'Money Quiz' },
  { href: '/courses', label: 'Program' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
] as const

export const ALP_STAGES = [
  { key: 'awareness', label: 'Awareness', weeks: '1-2', description: 'Excavate your money story' },
  { key: 'examination', label: 'Examination', weeks: '3-4', description: 'Test your limiting beliefs' },
  { key: 'embodiment', label: 'Embodiment', weeks: '5-7', description: 'Parts work, wound healing, somatic practice' },
  { key: 'integration', label: 'Integration', weeks: '8-12', description: 'Values, relationships, habits, sustainability' },
] as const

export type ALPStage = typeof ALP_STAGES[number]['key']

export const SOCIAL_LINKS = {
  youtube: '#',
  spotify: '#',
  applePodcasts: '#',
  instagram: '#',
  tiktok: '#',
  linkedin: '#',
} as const
