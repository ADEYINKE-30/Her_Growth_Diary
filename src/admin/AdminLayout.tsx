import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCurrentAdmin, logout } from '../services/admin'

const links = [
  ['Dashboard', '/admin'],
  ['Diary', '/admin/diary'],
  ['Topics', '/admin/topics'],
  ['Resources', '/admin/resources'],
  ['Prompts', '/admin/prompts'],
  ['Subscribers', '/admin/subscribers'],
]

export default function AdminLayout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data } = useQuery({ queryKey: ['admin'], queryFn: getCurrentAdmin, retry: false })

  async function handleLogout() {
    await logout()
    queryClient.removeQueries({ queryKey: ['admin'] })
    navigate('/admin/login')
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <p className="admin-eyebrow">Her Growth Diary</p>
          <h1>Admin studio</h1>
        </div>
        <nav className="admin-nav">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/admin'}>{label}</NavLink>
          ))}
        </nav>
        <div className="admin-user">
          <span>{data?.data.email}</span>
          <button type="button" onClick={handleLogout}>Sign out</button>
        </div>
      </aside>
      <main className="admin-main"><Outlet /></main>
    </div>
  )
}
