import { useState, useEffect, useRef } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import './MediaAdminPage.css'

export default function MediaAdminPage() {
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const token = localStorage.getItem('admin_token')
  const headers = { Authorization: `Bearer ${token}` }

  useEffect(() => { fetchMedia() }, [])

  function fetchMedia() {
    setLoading(true)
    fetch('/api/admin/media', { headers })
      .then((r) => r.json())
      .then((data) => { setMedia(data); setLoading(false) })
      .catch(() => setLoading(false))
  }

  async function uploadFile(file) {
    const ALLOWED = ['image/jpeg', 'image/png', 'image/webp']
    const MAX = 5 * 1024 * 1024

    if (!ALLOWED.includes(file.type)) {
      setError('Only JPG, PNG, and WebP files are allowed.')
      return
    }
    if (file.size > MAX) {
      setError('File must be under 5 MB.')
      return
    }

    setError(null)
    setUploading(true)
    setUploadProgress(0)

    const fd = new FormData()
    fd.append('file', file)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/api/admin/media')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) setUploadProgress(Math.round((e.loaded / e.total) * 100))
    }

    xhr.onload = () => {
      setUploading(false)
      setUploadProgress(0)
      if (xhr.status === 201) {
        setMessage({ type: 'success', text: 'File uploaded.' })
        fetchMedia()
      } else {
        setError('Upload failed.')
      }
    }

    xhr.onerror = () => { setUploading(false); setError('Upload failed.') }
    xhr.send(fd)
  }

  function handleFiles(files) {
    if (files.length) uploadFile(files[0])
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  async function confirmDelete() {
    try {
      await fetch(`/api/admin/media/${deleteTarget.id}`, { method: 'DELETE', headers })
      setMessage({ type: 'success', text: 'File deleted.' })
      setDeleteTarget(null)
      fetchMedia()
    } catch {
      setError('Delete failed.')
      setDeleteTarget(null)
    }
  }

  return (
    <AdminLayout>
      <div className="media-admin">
        <h1 className="media-admin__title">Media Library</h1>

        {/* Upload zone */}
        <div
          className={`media-upload${dragging ? ' media-upload--drag' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => !uploading && inputRef.current?.click()}
        >
          <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.webp"
            style={{ display: 'none' }} onChange={(e) => handleFiles(e.target.files)} />
          {uploading ? (
            <div className="media-upload__progress">
              <div className="media-upload__bar">
                <div className="media-upload__fill" style={{ width: `${uploadProgress}%` }} />
              </div>
              <span>{uploadProgress}%</span>
            </div>
          ) : (
            <>
              <span className="media-upload__icon">↑</span>
              <p className="media-upload__text">Drag & drop or click to upload</p>
              <p className="media-upload__hint">JPG, PNG, WebP — max 5 MB</p>
            </>
          )}
        </div>

        {error && <p className="media-admin__error">{error}</p>}
        {message && (
          <p className={`media-admin__msg media-admin__msg--${message.type}`}>{message.text}</p>
        )}

        {loading && <p className="media-admin__empty">Loading...</p>}
        {!loading && media.length === 0 && (
          <p className="media-admin__empty">No files uploaded yet.</p>
        )}

        {!loading && media.length > 0 && (
          <div className="media-grid">
            {media.map((item) => (
              <div key={item.id} className="media-item">
                <div className="media-item__thumb">
                  <img src={item.url} alt={item.original_name} loading="lazy" />
                </div>
                <div className="media-item__info">
                  <span className="media-item__name" title={item.original_name}>
                    {item.original_name}
                  </span>
                  <span className="media-item__size">
                    {(item.size / 1024).toFixed(0)} KB
                  </span>
                  <button className="media-item__delete" onClick={() => setDeleteTarget(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {deleteTarget && (
        <div className="admin-modal-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="admin-modal__title">Delete File</h2>
            <p className="admin-modal__body">
              Delete <strong>{deleteTarget.original_name}</strong>? This cannot be undone.
            </p>
            <div className="admin-modal__actions">
              <button className="admin-modal__cancel" onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button className="admin-modal__confirm" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
