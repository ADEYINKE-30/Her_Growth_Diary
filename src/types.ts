export type Page = 'home' | 'about' | 'diary' | 'article' | 'resources'

export interface NavProps {
  navigate: (page: Page, article?: string) => void
  currentPage: Page
}
