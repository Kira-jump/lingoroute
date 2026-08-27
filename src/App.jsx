import { AuthProvider } from './context/AuthContext'
import AppRouter from './navigation/AppRouter'

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
