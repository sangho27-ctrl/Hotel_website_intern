import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import './RoomFormPage.css'

const AMENITY_OPTIONS = [
  'En-suite bathroom', 'Free WiFi', 'Flat-screen TV', 'Tea & coffee',
  'Sea view', 'Garden view', 'Air conditioning', 'Desk',
  'Wardrobe', 'Hairdryer', 'Safe', 'Mini fridge',
]

const EMPTY_FORM = {
  name: '',
  size: '',
  description: '',
  amenities: [],
  images: [],
}

export default function RoomFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [form, setForm] = useState(EMPTY_FORM)
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const token = localStorage.getItem('admin_token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  useEffect(() => {
    if (!isEdit) return
    fetch(`/api/admin/rooms/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((data) => {
        setForm({
          name: data.name || '',
          size: data.size || '',
          description: data.description || '',
          amenities: data.amenities || [],
          images: data.images || [],
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function toggleAmenity(amenity) {
    setForm((f) => ({
      ...f,
      amenities: f.amenities.includes(amenity)
        ? f.amenities.filter((a) => a !== amenity)
        : [...f.amenities, amenity],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSaving(true)

    const url = isEdit ? `/api/admin/rooms/${id}` : '/api/admin/rooms'
    const method = isEdit ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify({
          name: form.name,
          size: form.size ? Number(form.size) : null,
          description: form.description,
          amenities: form.amenities,
          images: form.images,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Save failed')
      }

      navigate('/admin/rooms')
    } catch (err) {
      setError(err.message)
      setSaving(false)
    }
  }

  if (loading) return (
    <AdminLayout>
      <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>Loading...</p>
    </AdminLayout>
  )

  return (
    <AdminLayout>
      <div className="room-form-page">
        <h1 className="room-form-page__title">{isEdit ? 'Edit Room' : 'Add Room'}</h1>

        <form className="room-form" onSubmit={handleSubmit} noValidate>
          <div className="room-form__row">
            <div className="room-form__field">
              <label className="room-form__label" htmlFor="name">Room Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                className="room-form__input"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="room-form__field room-form__field--half">
              <label className="room-form__label" htmlFor="size">Size (m²)</label>
              <input
                id="size"
                name="size"
                type="number"
                className="room-form__input"
                value={form.size}
                onChange={handleChange}
                min="1"
              />
            </div>

          </div>

          <div className="room-form__field">
            <label className="room-form__label" htmlFor="description">Short Description</label>
            <textarea
              id="description"
              name="description"
              className="room-form__input room-form__textarea"
              value={form.description}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <div className="room-form__field">
            <label className="room-form__label">Amenities</label>
            <div className="room-form__amenities">
              {AMENITY_OPTIONS.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`room-form__amenity-tag${form.amenities.includes(a) ? ' selected' : ''}`}
                  onClick={() => toggleAmenity(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="room-form__error">{error}</p>}

          <div className="room-form__actions">
            <button
              type="button"
              className="room-form__cancel"
              onClick={() => navigate('/admin/rooms')}
            >
              Cancel
            </button>
            <button type="submit" className="room-form__submit" disabled={saving}>
              {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Room'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
