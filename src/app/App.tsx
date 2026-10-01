import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Diary from '../pages/Diary'
import Article from '../pages/Article'
import Resources from '../pages/Resources'
import useScrollToTop from '../hooks/useScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-cream)', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/:articleId" element={<Article />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function RouteEffects() {
  useScrollToTop()
  return null
}
