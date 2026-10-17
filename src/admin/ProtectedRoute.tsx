import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCurrentAdmin } from '../services/admin'

export default function ProtectedRoute() {
  const location = useLocation()
  const query = useQuery({ queryKey: ['admin'], queryFn: getCurrentAdmin, retry: false })

  if (query.isLoading) return <div className="admin-loading">Checking your session…</div>
  if (query.isError) return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  return <Outlet />
}
