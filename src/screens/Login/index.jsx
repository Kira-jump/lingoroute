import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/home')
    } catch (err) {
      setError(traduireErreur(err.code))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-blue-950">
      <div className="w-full max-w-md glass-card p-7 animate-fadeInUp">
        <div className="font-display text-2xl font-semibold mb-1 text-slate-100">
          Content de te revoir
        </div>
        <div className="text-sm text-slate-400 mb-6">Connecte-toi pour continuer ta route</div>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="text-red-400 text-sm mb-3 animate-fadeInUp">{error}</div>
          )}
          <button className="btn-primary" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          <Link to="/forgot-password" className="text-slate-400">
            Mot de passe oublié ?
          </Link>
        </div>
        <div className="text-center text-sm text-slate-400 mt-5">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-amber-400 font-medium">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  )
}

function traduireErreur(code) {
  const map = {
    'auth/invalid-credential': 'Email ou mot de passe incorrect.',
    'auth/invalid-email': 'Email invalide.',
    'auth/too-many-requests': 'Trop de tentatives, réessaie plus tard.'
  }
  return map[code] || "Une erreur est survenue, réessaie."
}
