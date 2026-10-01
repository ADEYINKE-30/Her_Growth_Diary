import type { DiaryEntry } from '../../types/content'

export function getDiaryCategories(entries: DiaryEntry[]) {
  return ['All', ...Array.from(new Set(entries.map((entry) => entry.category)))]
}

export function filterDiaryEntries(entries: DiaryEntry[], category: string, search: string) {
  const normalizedSearch = search.trim().toLowerCase()

  return entries.filter((entry) => {
    const matchesCategory = category === 'All' || entry.category === category
    const matchesSearch =
      normalizedSearch === '' ||
      entry.title.toLowerCase().includes(normalizedSearch) ||
      entry.excerpt.toLowerCase().includes(normalizedSearch)

    return matchesCategory && matchesSearch
  })
}
