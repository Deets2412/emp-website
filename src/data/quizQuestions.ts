import type { PersonaSlug } from '@/lib/constants'

export interface QuizOption {
  text: string
  scores: Record<PersonaSlug, number>
}

export interface QuizQuestion {
  id: number
  question: string
  context?: string
  options: QuizOption[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'When you think back to how money was talked about in your childhood home, what feeling comes up first?',
    context: 'Childhood memories shape our deepest money patterns.',
    options: [
      {
        text: 'Calm — money was discussed openly and without drama',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Tension — there was always worry about whether we had enough',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 1, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Nothing much — money was never really talked about',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Shame or guilt — it felt like money was a loaded topic',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Control — there were strict rules about every dollar',
        scores: { 'balanced-builder': 1, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 2,
    question: 'You just got an unexpected $5,000 bonus. What is your very first emotional reaction?',
    context: 'Our instant reaction reveals our deepest money instincts.',
    options: [
      {
        text: 'Grateful — I think about how to split it between saving and something fun',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 1, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Relief — thank goodness, that eases the pressure a bit',
        scores: { 'balanced-builder': 1, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Excited — I already know what I want to spend it on',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Suspicious — something bad usually follows good news with money',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Anxious — I need to research the best possible use for this before touching it',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 3,
    question: 'How do you feel when you check your bank balance?',
    options: [
      {
        text: 'Pretty neutral — it is what it is, and I check regularly',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'A knot in my stomach — even if I know it should be fine',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 1, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I avoid it — I check as rarely as possible',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 4, 'wounded-warrior': 2, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Bracing myself — I expect bad news every time',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Focused — I cross-reference it against my spreadsheet immediately',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 4,
    question: 'Your friend asks to split the dinner bill evenly, but you only had a salad and water. What do you feel?',
    context: 'Money moments with friends reveal a lot about us.',
    options: [
      {
        text: 'Easy-going — it all evens out over time, no big deal',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 2, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Uncomfortable — I do the maths in my head and it stings',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Sure, whatever — I hate awkward money conversations',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Resentful — this always happens and I always lose out',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I speak up politely — fairness matters to me and I can calculate exactly what I owe',
        scores: { 'balanced-builder': 2, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 5,
    question: 'When you make a purchase you later regret, how does it sit with you?',
    options: [
      {
        text: 'I shrug it off and learn from it — everyone does it sometimes',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 2, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'It bothers me for days — I keep recalculating the lost money',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'I try not to think about it and move on quickly',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'It confirms what I already believe — I am bad with money',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I feel frustrated with myself for not researching enough beforehand',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 6,
    question: 'How do you feel about talking openly about money with your partner or closest friend?',
    context: 'Our comfort with money conversations says a lot.',
    options: [
      {
        text: 'Comfortable — I think honesty about money is really important',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Nervous — I worry they will judge my financial situation',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 1, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Bored — I would rather talk about literally anything else',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Vulnerable — it brings up feelings of not being good enough',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'In control — I prefer presenting a clear picture with actual numbers',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 7,
    question: 'It is late at night and you cannot sleep. What money thought is most likely keeping you awake?',
    options: [
      {
        text: 'Nothing specific — money does not usually keep me up',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 2, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'What if something goes wrong and we do not have enough saved?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'A vague worry I push away — I will deal with it tomorrow',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Replaying a past money mistake that still stings',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Running numbers in my head — did I miss something in my budget?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 8,
    question: 'You spot something you love in a shop window. It costs more than you would normally spend. What happens next?',
    options: [
      {
        text: 'I think about it — if it fits the budget, I treat myself without guilt',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I walk away quickly — spending that much makes me feel unsafe',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'I buy it on the spot — life is too short to overthink!',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'I feel torn — I want it but I do not deserve nice things',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I go home and compare prices, read reviews, and sleep on it for a week',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 9,
    question: 'How do you feel when someone you care about spends money in a way you would not?',
    options: [
      {
        text: 'Curious — everyone has their own approach and that is okay',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 2, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Worried for them — what if they end up in trouble?',
        scores: { 'balanced-builder': 1, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Not my business — I do not pay much attention to it',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 0, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Triggered — it brings up my own complicated feelings about spending',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Frustrated — if they just planned better they would be fine',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 10,
    question: 'When you think about retirement or your financial future, what emotion dominates?',
    options: [
      {
        text: 'Quietly confident — I am doing my best and it will work out',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Dread — what if I have not saved enough no matter what I do?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Honestly? I do not think about it much — that is future me problem',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Sadness — I feel like I am already too far behind to catch up',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Driven — I constantly refine my projections and calculations',
        scores: { 'balanced-builder': 1, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 11,
    question: 'You hear about a friend making a really smart investment. How does it make you feel?',
    options: [
      {
        text: 'Happy for them — maybe I can learn from their experience',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'A bit panicky — should I be doing that too? Am I falling behind?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Good for them — investments are not really my thing',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Envious and a bit hopeless — why does money work for them but not me?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Intrigued — I want to know every detail and do my own analysis',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 12,
    question: 'How would you describe your relationship with budgeting?',
    options: [
      {
        text: 'I have a loose system that works — not obsessive but on track',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Tight and detailed — I feel uneasy if I do not know where every dollar goes',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 3 },
      },
      {
        text: 'Budget? I have tried but I just cannot stick to one',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 2, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Guilt-driven — I make one after overspending then abandon it',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 2, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Detailed and colour-coded — I have spreadsheets going back years',
        scores: { 'balanced-builder': 1, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 13,
    question: 'If money were a person in your life, what kind of relationship would you say you have with it?',
    context: 'Sometimes a metaphor reveals more than a straight answer.',
    options: [
      {
        text: 'A reliable friend — we get along well, with mutual respect',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'An overprotective parent — always reminding me to be careful',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'A casual acquaintance — I do not think about them much',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'An ex who hurt me — complicated, painful, hard to trust',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'A project I am managing — I keep close tabs on every detail',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 14,
    question: 'You and your partner disagree about a big purchase. What is your emotional response?',
    context: 'Money conflicts in relationships reveal core patterns.',
    options: [
      {
        text: 'Let us talk it through — we can find a middle ground together',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Stressed — what if we cannot afford it and it causes problems?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I give in to avoid the argument — money fights are not worth it',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 2, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Hurt — why do they not see how hard this is for me?',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I present the data — if we look at the numbers it is obvious',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 15,
    question: 'When you have a bad day, what is your most likely comfort spending habit?',
    options: [
      {
        text: 'Small treat that I have already accounted for — coffee, a podcast rental',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'I tighten the purse strings — spending on a bad day will make me feel worse',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'I go shopping — buying things picks me up in the moment',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 2, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'I spiral — spend, then feel guilty, then feel worse about myself',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 2, 'wounded-warrior': 4, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'I review my finances — feeling in control of the numbers calms me down',
        scores: { 'balanced-builder': 1, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 16,
    question: 'How do you feel when you see other people your age who seem to be doing better financially?',
    options: [
      {
        text: 'Inspired — everyone is on their own path and comparison is not helpful',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Anxious — what am I doing wrong? I need to save more, faster',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Unbothered — I do not really pay attention to that stuff',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 0, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Defeated — the gap feels impossible to close',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Motivated to dig in — I will adjust my plan and do better',
        scores: { 'balanced-builder': 2, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 17,
    question: 'Someone offers you a financial opportunity that sounds great but involves some risk. What do you feel?',
    options: [
      {
        text: 'Open to it — I will weigh the risk thoughtfully and decide',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 1, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'My guard goes up immediately — too risky, too scary',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Sounds fun! Let us do it! I will figure out the details later',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 0, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Distrustful — people with money opportunities have let me down before',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I need to see every detail, model every scenario, and only then decide',
        scores: { 'balanced-builder': 1, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 18,
    question: 'How does money affect your sense of self-worth?',
    context: 'This one goes deep, but it matters.',
    options: [
      {
        text: 'My worth is not tied to money — I feel okay about who I am regardless',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 2, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I feel better about myself when I have a safety net saved up',
        scores: { 'balanced-builder': 1, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'I honestly do not connect the two — money is just money',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 0, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Deeply — when I am struggling with money, I feel like a failure as a person',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'I feel worthy when I have everything optimised and under control',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 19,
    question: 'You have been given the task of teaching a child about money. What feels most important to share?',
    options: [
      {
        text: 'Money is a tool — learn to use it wisely and it will serve you well',
        scores: { 'balanced-builder': 4, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Always save first — you never know what might happen',
        scores: { 'balanced-builder': 1, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 1, 'perfectionist-analyzer': 2 },
      },
      {
        text: 'Money is not everything — do not let it stress you out',
        scores: { 'balanced-builder': 1, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 1, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Be careful — the world is not always fair when it comes to money',
        scores: { 'balanced-builder': 0, 'anxious-protector': 2, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Learn everything you can — knowledge is the key to smart decisions',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
  {
    id: 20,
    question: 'Right now, in this moment, what single word best captures how money makes you feel?',
    context: 'Trust your gut here.',
    options: [
      {
        text: 'Grounded',
        scores: { 'balanced-builder': 4, 'anxious-protector': 0, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Worried',
        scores: { 'balanced-builder': 0, 'anxious-protector': 4, 'avoidant-free-spirit': 0, 'wounded-warrior': 2, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Meh',
        scores: { 'balanced-builder': 0, 'anxious-protector': 0, 'avoidant-free-spirit': 4, 'wounded-warrior': 0, 'perfectionist-analyzer': 0 },
      },
      {
        text: 'Heavy',
        scores: { 'balanced-builder': 0, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 4, 'perfectionist-analyzer': 1 },
      },
      {
        text: 'Driven',
        scores: { 'balanced-builder': 1, 'anxious-protector': 1, 'avoidant-free-spirit': 0, 'wounded-warrior': 0, 'perfectionist-analyzer': 4 },
      },
    ],
  },
]

export const TOTAL_QUESTIONS = quizQuestions.length
