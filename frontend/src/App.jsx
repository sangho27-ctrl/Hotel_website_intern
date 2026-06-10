import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/admin/ProtectedRoute'
import RoomsPage from './pages/RoomsPage'
import RoomDetailPage from './pages/RoomDetailPage'
import LoginPage from './pages/admin/LoginPage'
import RoomsAdminPage from './pages/admin/RoomsAdminPage'
import RoomFormPage from './pages/admin/RoomFormPage'

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
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout><Placeholder title="Welcome to Colson House" /></Layout>} />
          <Route path="/rooms" element={<Layout><RoomsPage /></Layout>} />
          <Route path="/rooms/:id" element={<Layout><RoomDetailPage /></Layout>} />
          <Route path="/offers" element={<Layout><Placeholder title="Special Offers" /></Layout>} />
          <Route path="/attractions" element={<Layout><Placeholder title="Local Attractions" /></Layout>} />
          <Route path="/reviews" element={<Layout><Placeholder title="Guest Reviews" /></Layout>} />
          <Route path="/contact" element={<Layout><Placeholder title="Contact Us" /></Layout>} />
          <Route path="/book" element={<Layout><Placeholder title="Book Your Stay" /></Layout>} />
          <Route path="/gallery" element={<Layout><Placeholder title="Gallery" /></Layout>} />
          <Route path="/checkin" element={<Layout><Placeholder title="Check-In & Check-Out" /></Layout>} />
          <Route path="/parking" element={<Layout><Placeholder title="Parking" /></Layout>} />
          <Route path="/terms" element={<Layout><Placeholder title="Terms & Conditions" /></Layout>} />
          <Route path="/privacy" element={<Layout><Placeholder title="Privacy Policy" /></Layout>} />
          <Route path="/cookies" element={<Layout><Placeholder title="Cookie Policy" /></Layout>} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <RoomsAdminPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/rooms" element={
            <ProtectedRoute>
              <RoomsAdminPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/rooms/new" element={
            <ProtectedRoute>
              <RoomFormPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/rooms/:id/edit" element={
            <ProtectedRoute>
              <RoomFormPage />
            </ProtectedRoute>
          } />

          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
