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

export type JournalPrompt = string

export interface ResourceItem {
  title: string
  description: string
  url?: string
}

export interface ResourceCategory {
  category: string
  emoji: string
  items: ResourceItem[]
}

export interface Belief {
  icon: string
  title: string
  body: string
}

export interface AboutSection {
  title: string
  body: string
}

export interface GrowthStep {
  label: string
  desc: string
}