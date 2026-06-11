import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import API_BASE from '../../config/api'
import './RoomsAdminPage.css'

export default function RoomsAdminPage() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [message, setMessage] = useState(null)

  const token = localStorage.getItem('admin_token')
  const headers = { Authorization: `Bearer ${token}` }

  useEffect(() => {
    fetchRooms()
  }, [])

  function fetchRooms() {
    setLoading(true)
    fetch(`${API_BASE}/api/admin/rooms`, { headers })
      .then((r) => r.json())
      .then((data) => { setRooms(data); setLoading(false) })
      .catch(() => setLoading(false))
  }

  async function confirmDelete() {
    try {
      const res = await fetch(`${API_BASE}/api/admin/rooms/${deleteTarget.id}`, {
        method: 'DELETE',
        headers,
      })
      if (!res.ok) throw new Error('Delete failed')
      setMessage({ type: 'success', text: `"${deleteTarget.name}" deleted.` })
      setDeleteTarget(null)
      fetchRooms()
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete room.' })
      setDeleteTarget(null)
    }
  }

  return (
    <AdminLayout>
      <div className="rooms-admin">
        <div className="rooms-admin__header">
          <h1 className="rooms-admin__title">Rooms</h1>
          <Link to="/admin/rooms/new" className="rooms-admin__add-btn">
            + Add Room
          </Link>
        </div>

        {message && (
          <p className={`rooms-admin__message rooms-admin__message--${message.type}`}>
            {message.text}
          </p>
        )}

        {loading && <p className="rooms-admin__empty">Loading...</p>}

        {!loading && rooms.length === 0 && (
          <p className="rooms-admin__empty">No rooms yet.</p>
        )}

        {!loading && rooms.length > 0 && (
          <table className="rooms-admin__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Price / night</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.id}>
                  <td>{room.name}</td>
                  <td>{room.size ? `${room.size} m²` : '—'}</td>
                  <td>£{room.price}</td>
                  <td className="rooms-admin__actions">
                    <Link to={`/admin/rooms/${room.id}/edit`} className="rooms-admin__edit-btn">
                      Edit
                    </Link>
                    <button
                      className="rooms-admin__delete-btn"
                      onClick={() => setDeleteTarget(room)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Confirm modal */}
      {deleteTarget && (
        <div className="admin-modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="admin-modal__title">Delete Room</h2>
            <p className="admin-modal__body">
              Are you sure you want to delete <strong>{deleteTarget.name}</strong>? This cannot be undone.
            </p>
            <div className="admin-modal__actions">
              <button className="admin-modal__cancel" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button className="admin-modal__confirm" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
