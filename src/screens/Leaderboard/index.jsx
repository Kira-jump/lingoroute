import { Trophy } from 'lucide-react'
import BottomNav from '../../components/BottomNav'
import { useAuth } from '../../context/AuthContext'

export default function Leaderboard() {
  const { profile } = useAuth()

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <div className="font-display text-xl text-slate-100 mb-5 animate-fadeInUp">
          <span className="inline-flex items-center gap-2"><Trophy className="w-5 h-5 text-amber-400" /> Classement</span>
        </div>
        <div className="glass-card p-5 text-center text-slate-400 text-sm animate-fadeInUp">
          Le classement entre joueurs arrive bientôt — il faudra qu'on mette en place
          une requête Firestore sur tous les utilisateurs.
          <div className="mt-4 text-amber-400 font-mono">
            Toi : {profile?.xp ?? 0} XP
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
