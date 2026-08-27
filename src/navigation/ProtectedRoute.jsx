import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Splash from '../screens/Splash'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <Splash />
  if (!user) return <Navigate to="/login" replace />

  return children
}
