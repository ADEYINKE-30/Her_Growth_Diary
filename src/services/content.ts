import type { AboutSection, Belief, DiaryEntry, GrowthStep, JournalPrompt, ResourceCategory, Topic } from '../types/content'

export const diaryEntries: DiaryEntry[] = [
  {
    id: 'not-falling-behind',
    category: 'Mindset',
    title: 'You Are Not Falling Behind',
    excerpt:
      'The world has a strange way of making you feel like you\'re late to your own life. Like everyone else received a map and you missed the day they handed them out.',
    readTime: '5 min read',
    date: 'September 14, 2026',
    image: 'https://images.unsplash.com/photo-1517703565892-7cdb859e127b?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Woman writing in a journal on her bed',
    content: `
Dear girl,

You are not falling behind.

I know it doesn't feel that way. I know you look around and see people your age getting promotions, getting engaged, buying houses, moving cities — and you're still here, trying to figure out what you want for breakfast.

But listen. Their timeline was never your timeline. Their chapter was never your chapter.

You are on your own path — and your path has always been leading somewhere, even when you couldn't see the destination.

Every experience you've had, every season you've walked through — they are not delays. They are preparation.

The girl you are becoming doesn't need to rush. She needs to arrive whole.

Keep going. There is still so much of you waiting to be discovered.

With love,
Her Growth Diary
    `,
  },
  {
    id: 'everyone-seems-ahead',
    category: 'Life & Growth',
    title: 'When Everyone Seems Ahead of You',
    excerpt:
      'Scrolling through a highlight reel of everyone else\'s life can make your quiet Tuesday feel like a failure. But comparison is a story you\'re telling yourself.',
    readTime: '4 min read',
    date: 'September 7, 2026',
    image: 'https://images.unsplash.com/photo-1762770656371-4424a56c1908?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Young woman looking upward in a forest',
    content: `
Dear girl,

Comparison is the thief of becoming.

When you scroll through the curated highlight reels of other people's lives, you are comparing your entire unedited journey to their most polished moments. That is not a fair comparison. That is never going to be a fair comparison.

The person who got the job, the relationship, the apartment — you're seeing the result. You're not seeing the years of doubt, the quiet rejection, the nights they cried wondering if they were enough.

You are enough, right here, in this moment.

The season you're in is not a mistake. It's teaching you something you'll need later.

Keep going.
    `,
  },
  {
    id: 'believe-in-yourself',
    category: 'Confidence',
    title: 'Learning to Believe in Yourself Again',
    excerpt:
      'Self-belief doesn\'t come back all at once. It comes back in small moments — every time you try anyway, every time you show up for yourself.',
    readTime: '6 min read',
    date: 'August 28, 2026',
    image: 'https://images.unsplash.com/photo-1516182823370-7a5fa91445c3?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Woman reading peacefully on a bench outside',
    content: `
Dear girl,

There will come a moment when you start to believe in yourself again.

Not all at once — it doesn't work like that. It comes back piece by piece, in the quiet moments when you surprise yourself. When you say the thing you were afraid to say. When you try the thing you kept putting off. When you wake up and choose yourself, even on the hard days.

Believing in yourself is not a feeling you wait for. It's a practice you show up for.

Today, I want you to do one small thing that the less confident version of you wouldn't have done.

That's how it starts.
    `,
  },
  {
    id: 'all-figured-out',
    category: 'Personal Growth',
    title: "You Don't Need to Have It All Figured Out",
    excerpt:
      "There is no deadline on becoming. The pressure you feel to have everything sorted by a certain age is a story that was never true.",
    readTime: '4 min read',
    date: 'August 19, 2026',
    image: 'https://images.unsplash.com/photo-1607557997149-96bf2b30c3c3?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Woman in cozy sweater reading a book',
    content: `
Dear girl,

Nobody has it all figured out.

The people who look like they do are just very good at showing you the parts that look put-together while quietly wondering, in their own quiet rooms, if they're doing this right.

You are allowed to not know. You are allowed to change your mind. You are allowed to start over. You are allowed to take a completely different path than the one you thought you were walking.

Life is not a test you can fail by taking too long.

Take your time. Choose yourself. Keep becoming.
    `,
  },
]

export const topics: Topic[] = [
  {
    emoji: '🌱',
    name: 'Growth',
    description: 'Becoming the person you want to be.',
    color: '#E8F5E9',
    accent: '#66BB6A',
  },
  {
    emoji: '💗',
    name: 'Self-Love',
    description: 'Learning to accept yourself as you are.',
    color: '#FDF0F3',
    accent: '#E8A4B0',
  },
  {
    emoji: '🧠',
    name: 'Mindset',
    description: 'Changing the way you see yourself and your journey.',
    color: '#F4F1F8',
    accent: '#C4B5D4',
  },
  {
    emoji: '🌸',
    name: 'Confidence',
    description: 'Finding your voice and believing in yourself.',
    color: '#FFF8F0',
    accent: '#FFB347',
  },
  {
    emoji: '📖',
    name: 'Life',
    description: 'Real thoughts about friendships, relationships, decisions, and growing up.',
    color: '#F0F7FF',
    accent: '#90CAF9',
  },
  {
    emoji: '✨',
    name: 'Becoming',
    description: 'Navigating change, uncertainty, dreams, and new seasons.',
    color: '#FDF5FF',
    accent: '#CE93D8',
  },
]

export const journalPrompts: JournalPrompt[] = [
  'What am I learning about myself lately?',
  'What am I proud of myself for?',
  'What am I currently struggling to accept?',
  'What would I tell my younger self?',
  'What does the next version of me need?',
  'Where have I been holding myself back?',
]

export const beliefs: Belief[] = [
  { icon: '🌿', title: 'You are not behind.', body: 'Life is not a race with a fixed finish line. Your journey is unfolding at exactly the pace it needs to.' },
  { icon: '💗', title: 'Small progress still counts.', body: 'Every tiny step you take — every difficult moment you walk through — is still movement. Still growth.' },
  { icon: '✨', title: 'You are allowed to change.', body: 'Outgrowing who you were is not betrayal. It is the most honest thing you can do.' },
  { icon: '🌸', title: 'Your story matters.', body: 'The quiet, unpolished, in-between version of you is just as worthy as the version you are becoming.' },
]

export const aboutSections: AboutSection[] = [
  {
    title: 'Why Her Growth Diary Exists',
    body: 'Growing up can feel confusing, lonely, and overwhelming — even when it doesn\'t look that way from the outside. You can be surrounded by people and still feel deeply unseen. You can look perfectly fine and still be silently wondering if you\'re doing this right.\n\nHer Growth Diary was created to be the gentle voice that says: you are not alone in this, and you are not falling behind. It is a place where the in-between season of becoming is not something to be ashamed of — it is something to be witnessed, understood, and gently encouraged.',
  },
  {
    title: 'Our Story',
    body: 'This space was born out of the kind of conversations that don\'t always happen out loud — the ones you have with yourself in the quiet of the night, in the pages of a journal, in the space between who you were and who you are trying to become.\n\nHer Growth Diary exists to hold that space. To say the things you needed to hear. To reflect back to you the truth that your growth is valid, your pace is enough, and your story is worth telling.',
  },
]

export const growthSteps: GrowthStep[] = [
  { label: 'Discover', desc: 'Something stirs inside you.' },
  { label: 'Learn', desc: 'You gather courage and begin.' },
  { label: 'Struggle', desc: 'It gets hard. You feel lost.' },
  { label: 'Reflect', desc: 'You pause and look inward.' },
  { label: 'Grow', desc: 'Something quietly shifts.' },
  { label: 'Become', desc: 'You are not who you were.' },
]

export const growthStepColors = ['#E8F5E9', '#FDF0F3', '#F4F1F8', '#FFF8F0', '#F0F7FF', '#FDF5FF']
export const growthStepAccents = ['#66BB6A', '#E8A4B0', '#C4B5D4', '#FFB347', '#90CAF9', '#CE93D8']

export const resources: ResourceCategory[] = [
  {
    category: 'Journal Prompts',
    emoji: '📝',
    items: [
      { title: '30 Days of Self-Discovery Prompts', description: 'A month of daily prompts to help you know yourself better.' },
      { title: 'Healing Through Journaling', description: 'Gentle prompts for processing difficult emotions and experiences.' },
      { title: 'Letters to My Future Self', description: 'A guided series for writing to the person you are becoming.' },
    ],
  },
  {
    category: 'Growth Guides',
    emoji: '🌱',
    items: [
      { title: "The Beginner's Guide to Self-Compassion", description: 'Learning to speak to yourself like you would a close friend.' },
      { title: 'Building Confidence from the Inside Out', description: 'Practical steps for cultivating real, lasting self-belief.' },
      { title: 'Navigating Life Transitions', description: 'How to move through change without losing yourself.' },
    ],
  },
  {
    category: 'Recommended Books',
    emoji: '📚',
    items: [
      { title: 'The Gifts of Imperfection — Brené Brown', description: 'Let go of who you think you should be and embrace who you are.' },
      { title: 'You Are a Badass — Jen Sincero', description: 'A witty, no-nonsense guide to creating a life you love.' },
      { title: 'Big Magic — Elizabeth Gilbert', description: 'On living a creative life beyond fear.' },
    ],
  },
  {
    category: 'Self-Reflection Exercises',
    emoji: '✨',
    items: [
      { title: 'The Weekly Check-In', description: 'A simple 10-minute ritual to end each week with intention.' },
      { title: 'Values Mapping Exercise', description: 'Discover what truly matters to you beneath the noise.' },
      { title: 'The Morning Pages Practice', description: 'Write three pages first thing in the morning to clear your mind.' },
    ],
  },
]
