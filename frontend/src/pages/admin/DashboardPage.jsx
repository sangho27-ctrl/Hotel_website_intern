import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import API_BASE from '../../config/api'
import './DashboardPage.css'

export default function DashboardPage() {
  const [roomCount, setRoomCount] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/rooms`)
      .then((r) => r.json())
      .then((data) => setRoomCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setRoomCount(0))
  }, [])

  return (
    <AdminLayout>
      <div className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>

        <div className="dashboard__stats">
          <div className="dashboard__stat">
            <span className="dashboard__stat-value">
              {roomCount === null ? '—' : roomCount}
            </span>
            <span className="dashboard__stat-label">Rooms</span>
          </div>
          <div className="dashboard__stat dashboard__stat--muted">
            <span className="dashboard__stat-value">—</span>
            <span className="dashboard__stat-label">Bookings</span>
          </div>
          <div className="dashboard__stat dashboard__stat--muted">
            <span className="dashboard__stat-value">—</span>
            <span className="dashboard__stat-label">Enquiries</span>
          </div>
        </div>

        <div className="dashboard__actions">
          <h2 className="dashboard__section-title">Quick Actions</h2>
          <div className="dashboard__links">
            <Link to="/admin/rooms/new" className="dashboard__link">
              <span className="dashboard__link-icon">+</span>
              <span>Add New Room</span>
            </Link>
            <Link to="/admin/rooms" className="dashboard__link">
              <span className="dashboard__link-icon">≡</span>
              <span>Manage Rooms</span>
            </Link>
            <Link to="/rooms" target="_blank" className="dashboard__link dashboard__link--outline">
              <span className="dashboard__link-icon">↗</span>
              <span>View Website</span>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
