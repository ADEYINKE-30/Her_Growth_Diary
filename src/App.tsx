/** @jsxRuntime classic */
/** @jsx React.createElement */
// React is provided by the app runtime; keep this import for classic JSX and hooks.
import React from 'react'
import { Outlet, useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'
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
  const location = useLocation()
  const routerNavigate = useNavigate()
  const page = getPageFromPath(location.pathname)

  const navigate = (p: Page, article?: string) => {
    const path = article !== undefined ? `/diary/${article}` : pagePaths[p]
    routerNavigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FBF8F5', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <Navbar currentPage={page} navigate={navigate} />
      <Outlet context={{ navigate }} />
      <Footer navigate={navigate} />
    </div>
  )
}

export function HomeRoute() {
  return <Home navigate={useOutletNavigation()} />
}

export function AboutRoute() {
  return <About navigate={useOutletNavigation()} />
}

export function DiaryRoute() {
  return <Diary navigate={useOutletNavigation()} />
}

export function ArticleRoute() {
  const { articleId } = useParams()
  return <Article navigate={useOutletNavigation()} article={articleId ?? null} />
}

export function ResourcesRoute() {
  return <Resources />
}

function useOutletNavigation() {
  return useOutletContext<{ navigate: (page: Page, article?: string) => void }>().navigate
}

const pagePaths: Record<Page, string> = {
  home: '/',
  about: '/about',
  diary: '/diary',
  article: '/diary',
  resources: '/resources',
}

function getPageFromPath(pathname: string): Page {
  if (pathname === '/about') return 'about'
  if (pathname === '/diary') return 'diary'
  if (pathname.startsWith('/diary/')) return 'article'
  if (pathname === '/resources') return 'resources'
  return 'home'
}
