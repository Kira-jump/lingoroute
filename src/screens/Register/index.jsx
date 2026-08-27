import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await register(name, email, password)
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
          Crée ton compte
        </div>
        <div className="text-sm text-slate-400 mb-6">Commence ta route vers l'anglais</div>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Ton prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            placeholder="Mot de passe (6 caractères min.)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          {error && (
            <div className="text-red-400 text-sm mb-3 animate-fadeInUp">{error}</div>
          )}
          <button className="btn-primary" disabled={loading}>
            {loading ? 'Création...' : "S'inscrire"}
          </button>
        </form>
        <div className="text-center text-sm text-slate-400 mt-5">
          Déjà un compte ?{' '}
          <Link to="/login" className="text-amber-400 font-medium">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  )
}

function traduireErreur(code) {
  const map = {
    'auth/email-already-in-use': 'Cet email est déjà utilisé.',
    'auth/invalid-email': 'Email invalide.',
    'auth/weak-password': 'Mot de passe trop faible (6 caractères min.).'
  }
  return map[code] || "Une erreur est survenue, réessaie."
}
