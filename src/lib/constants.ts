export const SITE_NAME = 'The Emotional Money Podcast'
export const SITE_TAGLINE = 'Understand Your Relationship With Money'
export const SITE_DESCRIPTION =
  'Explore the emotions that drive your financial decisions. Hosted by David & Emme — helping Australians understand why they feel the way they do about money.'

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
  { href: '/resources', label: 'Free Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About' },
] as const

export const SOCIAL_LINKS = {
  youtube: '#',
  spotify: '#',
  applePodcasts: '#',
  instagram: '#',
  tiktok: '#',
  linkedin: '#',
} as const
