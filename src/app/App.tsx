import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Diary from '../pages/Diary'
import Article from '../pages/Article'
import Resources from '../pages/Resources'
import useScrollToTop from '../hooks/useScrollToTop'
import AdminLayout from '../admin/AdminLayout'
import ProtectedRoute from '../admin/ProtectedRoute'
import AdminStyles from '../admin/AdminStyles'
import {
  AdminDashboard, AdminDiary, AdminDiaryForm, AdminLogin, AdminPrompts,
  AdminResources, AdminSubscribers, AdminTopics,
} from '../admin/AdminPages'

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <AppRoutes />
    </BrowserRouter>
  )
}

function AppRoutes() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  if (isAdminRoute) {
    return (
      <>
        <AdminStyles />
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="diary" element={<AdminDiary />} />
              <Route path="diary/new" element={<AdminDiaryForm />} />
              <Route path="diary/:id/edit" element={<AdminDiaryForm />} />
              <Route path="topics" element={<AdminTopics />} />
              <Route path="resources" element={<AdminResources />} />
              <Route path="prompts" element={<AdminPrompts />} />
              <Route path="subscribers" element={<AdminSubscribers />} />
            </Route>
          </Route>
        </Routes>
      </>
    )
  }

  return (
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
  )
}

function RouteEffects() {
  useScrollToTop()
  return null
}
