import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/admin/ProtectedRoute'

const MainPage        = lazy(() => import('./pages/MainPage'))
const RoomDetailPage  = lazy(() => import('./pages/RoomDetailPage'))
const LoginPage       = lazy(() => import('./pages/admin/LoginPage'))
const DashboardPage   = lazy(() => import('./pages/admin/DashboardPage'))
const RoomsAdminPage  = lazy(() => import('./pages/admin/RoomsAdminPage'))
const RoomFormPage    = lazy(() => import('./pages/admin/RoomFormPage'))
const MediaAdminPage  = lazy(() => import('./pages/admin/MediaAdminPage'))

function PageLoader() {
  return (
    <div style={{ padding: '80px 40px', textAlign: 'center', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
      Loading…
    </div>
  )
}

function Placeholder({ title }) {
  return (
    <div style={{ padding: '80px 40px', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '16px' }}>
        {title}
      </h1>
      <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>Coming soon.</p>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public routes */}
            <Route path="/"          element={<Layout><MainPage /></Layout>} />
            <Route path="/rooms/:id" element={<Layout><RoomDetailPage /></Layout>} />

            {/* Admin routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/admin/rooms"     element={<ProtectedRoute><RoomsAdminPage /></ProtectedRoute>} />
            <Route path="/admin/rooms/new" element={<ProtectedRoute><RoomFormPage /></ProtectedRoute>} />
            <Route path="/admin/rooms/:id/edit" element={<ProtectedRoute><RoomFormPage /></ProtectedRoute>} />
            <Route path="/admin/media"     element={<ProtectedRoute><MediaAdminPage /></ProtectedRoute>} />
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
