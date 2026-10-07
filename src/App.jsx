import { Routes, Route } from 'react-router'

import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AuthLayout from './layouts/AuthLayout'

export default function App() {
  return (
    <Routes>

      {/* AUTH PAGES */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

    </Routes>
  )
}