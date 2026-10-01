export type Page = 'home' | 'about' | 'diary' | 'article' | 'resources'

export type Navigate = (page: Page, article?: string) => void

export interface DiaryEntry {
  id: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
  image: string
  imageAlt: string
  content: string
}

export interface Topic {
  emoji: string
  name: string
  description: string
  color: string
  accent: string
}

export interface ResourceItem {
  title: string
  description: string
}

export interface ResourceCategory {
  category: string
  emoji: string
  items: ResourceItem[]
}
