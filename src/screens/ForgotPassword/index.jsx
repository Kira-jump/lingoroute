import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function ForgotPassword() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await resetPassword(email)
      setSent(true)
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
          Mot de passe oublié
        </div>
        <div className="text-sm text-slate-400 mb-6">
          Entre ton email, on t'enverra un lien pour le réinitialiser
        </div>

        {sent ? (
          <div className="text-emerald-400 text-sm text-center py-4">
            Email envoyé ! Vérifie ta boîte de réception (et les spams).
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && (
              <div className="text-red-400 text-sm mb-3 animate-fadeInUp">{error}</div>
            )}
            <button className="btn-primary" disabled={loading}>
              {loading ? 'Envoi...' : 'Envoyer le lien'}
            </button>
          </form>
        )}

        <div className="text-center text-sm text-slate-400 mt-5">
          <Link to="/login" className="text-amber-400 font-medium">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}

function traduireErreur(code) {
  const map = {
    'auth/invalid-email': 'Email invalide.',
    'auth/user-not-found': 'Aucun compte associé à cet email.',
    'auth/too-many-requests': 'Trop de tentatives, réessaie plus tard.'
  }
  return map[code] || "Une erreur est survenue, réessaie."
}
