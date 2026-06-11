import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { brand } from '../../config/brand'
import { authService } from '../../services/authService'
import './AdminLayout.css'

export default function AdminLayout({ children }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    authService.logout()
      .finally(() => {
        logout()
        navigate('/admin/login')
      })
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__brand-name">{brand.name}</span>
          <span className="admin-sidebar__brand-sub">Admin</span>
        </div>

        <nav className="admin-sidebar__nav">
          <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/rooms" className={({ isActive }) => isActive ? 'active' : ''}>
            Rooms
          </NavLink>
          <NavLink to="/admin/media" className={({ isActive }) => isActive ? 'active' : ''}>
            Media
          </NavLink>
        </nav>

        <button className="admin-sidebar__logout" onClick={handleLogout}>
          Sign Out
        </button>
      </aside>

      <main className="admin-main">
        {children}
      </main>
    </div>
  )
}
