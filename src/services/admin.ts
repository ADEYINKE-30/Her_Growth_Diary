import { apiClient } from '../lib/api-client'

export interface AdminUser {
  id: string
  email: string
  role: 'ADMIN' | 'EDITOR'
}

export interface DiaryAdminPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImageUrl: string | null
  coverImageAlt: string | null
  publishedAt: string | null
  status: 'DRAFT' | 'PUBLISHED'
  topics: { id: string; name: string; slug: string }[]
}

export interface Topic {
  id: string
  slug: string
  name: string
  description: string
  sortOrder: number
  _count?: { posts: number }
}

export interface Resource {
  id: string
  categoryId: string
  title: string
  description: string
  url: string | null
  author: string | null
  sortOrder: number
  isPublished: boolean
  category?: { id: string; name: string }
}

export interface Prompt {
  id: string
  prompt: string
  sortOrder: number
  isPublished: boolean
}

export interface Subscriber {
  id: string
  email: string
  subscribedAt: string
}

interface ListResponse<T> {
  data: T[]
  meta: { page: number; limit: number; total: number }
}

export async function login(email: string, password: string) {
  return apiClient<{ data: AdminUser }>('/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
}

export async function getCurrentAdmin() {
  return apiClient<{ data: AdminUser }>('/admin/me')
}

export async function logout() {
  await apiClient('/admin/logout', { method: 'POST' })
}

export async function listDiary() {
  return (await apiClient<ListResponse<DiaryAdminPost>>('/diary?status=ALL&limit=100')).data
}

export async function createDiary(input: Record<string, unknown>) {
  return apiClient<{ data: DiaryAdminPost }>('/diary', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function updateDiary(id: string, input: Record<string, unknown>) {
  return apiClient<{ data: DiaryAdminPost }>(`/diary/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function deleteDiary(id: string) {
  await apiClient(`/diary/${id}`, { method: 'DELETE' })
}

export async function listTopics() {
  return (await apiClient<ListResponse<Topic>>('/topics?limit=100')).data
}

export async function createTopic(input: Record<string, unknown>) {
  return apiClient<{ data: Topic }>('/topics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function updateTopic(id: string, input: Record<string, unknown>) {
  return apiClient<{ data: Topic }>(`/topics/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function deleteTopic(id: string) {
  await apiClient(`/topics/${id}`, { method: 'DELETE' })
}

export async function listResources() {
  return (await apiClient<ListResponse<Resource>>('/resources?limit=100')).data
}

export async function createResource(input: Record<string, unknown>) {
  return apiClient<{ data: Resource }>('/resources', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function updateResource(id: string, input: Record<string, unknown>) {
  return apiClient<{ data: Resource }>(`/resources/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function deleteResource(id: string) {
  await apiClient(`/resources/${id}`, { method: 'DELETE' })
}

export async function listPrompts() {
  return (await apiClient<ListResponse<Prompt>>('/prompts?limit=100')).data
}

export async function createPrompt(input: Record<string, unknown>) {
  return apiClient<{ data: Prompt }>('/prompts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function updatePrompt(id: string, input: Record<string, unknown>) {
  return apiClient<{ data: Prompt }>(`/prompts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
}

export async function deletePrompt(id: string) {
  await apiClient(`/prompts/${id}`, { method: 'DELETE' })
}

export async function listSubscribers() {
  return (await apiClient<ListResponse<Subscriber>>('/newsletter/subscribers?limit=100')).data
}
