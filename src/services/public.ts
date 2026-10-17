import { apiClient } from '../lib/api-client'
import type { DiaryEntry, ResourceCategory, Topic } from '../types/content'
import { getDiaryEntries } from './diary'

interface ApiListResponse<T> {
  data: T[]
}

interface ApiResource {
  id: string
  categoryId: string
  title: string
  description: string
  url: string | null
  author: string | null
  sortOrder: number
  category?: { id: string; name: string }
}

interface ApiTopic {
  id: string
  name: string
  description: string
  slug: string
}

interface ApiPrompt {
  id: string
  prompt: string
  sortOrder: number
}

const topicStyles = [
  ['🌱', '#E8F5E9', '#66BB6A'],
  ['💗', '#FDF0F3', '#E8A4B0'],
  ['🧠', '#F4F1F8', '#C4B5D4'],
  ['🌸', '#FFF8F0', '#FFB347'],
  ['📖', '#F0F7FF', '#90CAF9'],
  ['✨', '#FDF5FF', '#CE93D8'],
] as const

function mapTopic(topic: ApiTopic, index: number): Topic {
  const [emoji, color, accent] = topicStyles[index % topicStyles.length]
  return { emoji, name: topic.name, description: topic.description, color, accent }
}

export async function getPublicDiary(): Promise<DiaryEntry[]> {
  return getDiaryEntries()
}

export async function getPublicTopics(): Promise<Topic[]> {
  const response = await apiClient<ApiListResponse<ApiTopic>>('/topics?limit=100')
  return response.data.map(mapTopic)
}

export async function getPublicPrompts(): Promise<string[]> {
  const response = await apiClient<ApiListResponse<ApiPrompt>>('/prompts?limit=100')
  return response.data
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((prompt) => prompt.prompt)
}

export async function getPublicResources(): Promise<ResourceCategory[]> {
  const response = await apiClient<ApiListResponse<ApiResource>>('/resources?limit=100')
  const categories = new Map<string, ResourceCategory>()

  for (const resource of response.data.sort((a, b) => a.sortOrder - b.sortOrder)) {
    const categoryName = resource.category?.name ?? 'Resources'
    const category = categories.get(resource.categoryId) ?? {
      category: categoryName,
      emoji: '✨',
      items: [],
    }
    category.items.push({
      title: resource.title,
      description: resource.author
        ? `${resource.description} — ${resource.author}`
        : resource.description,
      url: resource.url ?? undefined,
    })
    categories.set(resource.categoryId, category)
  }

  return [...categories.values()]
}

export async function subscribeToNewsletter(email: string): Promise<void> {
  await apiClient('/newsletter/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
}
