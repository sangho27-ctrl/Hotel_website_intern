import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/admin/ProtectedRoute'

const MainPage        = lazy(() => import('./pages/MainPage'))
const RoomsPage       = lazy(() => import('./pages/RoomsPage'))
const RoomDetailPage  = lazy(() => import('./pages/RoomDetailPage'))
const ReviewsPage     = lazy(() => import('./pages/ReviewsPage'))
const ContactPage     = lazy(() => import('./pages/ContactPage'))
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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public routes */}
            <Route path="/"            element={<Layout><MainPage /></Layout>} />
            <Route path="/rooms"       element={<Layout><RoomsPage /></Layout>} />
            <Route path="/rooms/:id"   element={<Layout><RoomDetailPage /></Layout>} />
            <Route path="/offers"      element={<Navigate to="/" replace />} />
            <Route path="/reviews"     element={<Layout><ReviewsPage /></Layout>} />
            <Route path="/contact"     element={<Layout><ContactPage /></Layout>} />

            {/* Redirect old/missing paths */}
            <Route path="/attractions" element={<Navigate to="/" replace />} />
            <Route path="/gallery"     element={<Navigate to="/rooms" replace />} />
            <Route path="/checkin"     element={<Navigate to="/contact" replace />} />
            <Route path="/parking"     element={<Navigate to="/contact" replace />} />
            <Route path="/terms"       element={<Navigate to="/" replace />} />
            <Route path="/privacy"     element={<Navigate to="/" replace />} />
            <Route path="/cookies"     element={<Navigate to="/" replace />} />
            <Route path="/book"        element={<Navigate to="/" replace />} />

            {/* Admin routes */}
            <Route path="/admin/login"          element={<LoginPage />} />
            <Route path="/admin/dashboard"      element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/admin/rooms"          element={<ProtectedRoute><RoomsAdminPage /></ProtectedRoute>} />
            <Route path="/admin/rooms/new"      element={<ProtectedRoute><RoomFormPage /></ProtectedRoute>} />
            <Route path="/admin/rooms/:id/edit" element={<ProtectedRoute><RoomFormPage /></ProtectedRoute>} />
            <Route path="/admin/media"          element={<ProtectedRoute><MediaAdminPage /></ProtectedRoute>} />
            <Route path="/admin"                element={<Navigate to="/admin/login" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
