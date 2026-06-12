import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import { brand } from './config/brand'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/admin/ProtectedRoute'

const HomePage        = lazy(() => import('./pages/HomePage'))
const RoomsPage       = lazy(() => import('./pages/RoomsPage'))
const RoomDetailPage  = lazy(() => import('./pages/RoomDetailPage'))
const OffersPage      = lazy(() => import('./pages/OffersPage'))
const ReviewsPage     = lazy(() => import('./pages/ReviewsPage'))
const ContactPage     = lazy(() => import('./pages/ContactPage'))
const LoginPage       = lazy(() => import('./pages/admin/LoginPage'))
const DashboardPage   = lazy(() => import('./pages/admin/DashboardPage'))
const RoomsAdminPage  = lazy(() => import('./pages/admin/RoomsAdminPage'))
const RoomFormPage    = lazy(() => import('./pages/admin/RoomFormPage'))
const MediaAdminPage  = lazy(() => import('./pages/admin/MediaAdminPage'))
const AvailabilityPage     = lazy(() => import('./pages/AvailabilityPage'))
const LocalAttractionsPage = lazy(() => import('./pages/LocalAttractionsPage'))

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
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', brand.theme ?? 'dark')
  }, [])

  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public routes */}
            <Route path="/"            element={<Layout><HomePage /></Layout>} />
            <Route path="/rooms"       element={<Layout><RoomsPage /></Layout>} />
            <Route path="/rooms/:id"   element={<Layout><RoomDetailPage /></Layout>} />
            <Route path="/offers"      element={<Layout><OffersPage /></Layout>} />
            <Route path="/reviews"     element={<Layout><ReviewsPage /></Layout>} />
            <Route path="/contact"     element={<Layout><ContactPage /></Layout>} />
            <Route path="/attractions" element={<Layout><LocalAttractionsPage /></Layout>} />
            <Route path="/book"         element={<Navigate to="/availability" replace />} />
            <Route path="/availability" element={<Layout><AvailabilityPage /></Layout>} />
            <Route path="/gallery"     element={<Layout><Placeholder title="Gallery" /></Layout>} />
            <Route path="/checkin"     element={<Layout><Placeholder title="Check-In & Check-Out" /></Layout>} />
            <Route path="/parking"     element={<Layout><Placeholder title="Parking" /></Layout>} />
            <Route path="/terms"       element={<Layout><Placeholder title="Terms & Conditions" /></Layout>} />
            <Route path="/privacy"     element={<Layout><Placeholder title="Privacy Policy" /></Layout>} />
            <Route path="/cookies"     element={<Layout><Placeholder title="Cookie Policy" /></Layout>} />

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
