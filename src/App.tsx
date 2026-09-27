/** @jsxRuntime classic */
/** @jsx React.createElement */
// React is provided by the app runtime; keep this import for classic JSX and hooks.
import React from 'react'
import type { Page } from './types'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Diary from './pages/Diary'
import Article from './pages/Article'
import Resources from './pages/Resources'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any
    }
  }
}

export default function App() {
  const [page, setPage] = React.useState<Page>('home')
  const [selectedArticle, setSelectedArticle] = React.useState<string | null>(null)

  const navigate = (p: Page, article?: string) => {
    setPage(p)
    if (article !== undefined) setSelectedArticle(article)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FBF8F5', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <Navbar currentPage={page} navigate={navigate} />

      {page === 'home' && <Home navigate={navigate} />}
      {page === 'about' && <About navigate={navigate} />}
      {page === 'diary' && <Diary navigate={navigate} />}
      {page === 'article' && <Article navigate={navigate} article={selectedArticle} />}
      {page === 'resources' && <Resources />}

      <Footer navigate={navigate} />
    </div>
  )
}
