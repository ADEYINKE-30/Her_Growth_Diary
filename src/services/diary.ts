import { apiClient } from '../lib/api-client'
import type { DiaryEntry } from '../types/content'

interface DiaryApiTopic {
  name: string
}

interface DiaryApiPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImageUrl: string | null
  coverImageAlt: string | null
  publishedAt: string | null
  createdAt: string
  topics: DiaryApiTopic[]
}

interface DiaryApiResponse {
  data: DiaryApiPost[]
}

function getReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

function mapDiaryPost(post: DiaryApiPost): DiaryEntry {
  const date = post.publishedAt ?? post.createdAt

  return {
    id: post.id,
    category: post.topics[0]?.name ?? 'Reflection',
    title: post.title,
    excerpt: post.excerpt,
    readTime: getReadTime(post.content),
    date: new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date)),
    image: post.coverImageUrl ?? '',
    imageAlt: post.coverImageAlt ?? post.title,
    content: post.content,
  }
}

export async function getDiaryEntries(): Promise<DiaryEntry[]> {
  const response = await apiClient<DiaryApiResponse>('/diary')
  return response.data.map(mapDiaryPost)
}
