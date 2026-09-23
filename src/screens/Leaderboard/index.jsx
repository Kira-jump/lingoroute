import { useEffect, useState } from 'react'
import { Trophy, Medal } from 'lucide-react'
import BottomNav from '../../components/BottomNav'
import { useAuth } from '../../context/AuthContext'
import { syncWeeklyReset, syncLeaderboardEntry, fetchWeeklyTop } from '../../services/leaderboard'

const MEDAL_COLORS = ['text-amber-400', 'text-slate-300', 'text-amber-700']

export default function Leaderboard() {
  const { user, profile, setProfile } = useAuth()
  const [top, setTop] = useState(null)

  useEffect(() => {
    if (!user || !profile) return
    async function run() {
      const synced = await syncWeeklyReset(user.uid, profile)
      if (synced !== profile) setProfile(synced)
      await syncLeaderboardEntry(user.uid, synced)
      const list = await fetchWeeklyTop(20)
      setTop(list)
    }
    run()
  }, [user?.uid])

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <div className="font-display text-xl text-slate-100 mb-1 flex items-center gap-2 animate-fadeInUp">
          <Trophy className="w-5 h-5 text-amber-400" />
          Classement de la semaine
        </div>
        <div className="text-slate-400 text-sm mb-5">
          Basé sur l'XP gagné cette semaine
        </div>

        {top === null && (
          <div className="glass-card p-5 text-center text-slate-400 text-sm animate-fadeInUp">
            Chargement du classement...
          </div>
        )}

        {top !== null && top.length === 0 && (
          <div className="glass-card p-5 text-center text-slate-400 text-sm animate-fadeInUp">
            Personne n'a encore de score cette semaine. Sois le premier !
          </div>
        )}

        <div className="flex flex-col gap-2">
          {top?.map((entry, i) => {
            const isMe = entry.uid === user?.uid
            return (
              <div
                key={entry.uid}
                className={`glass-card px-4 py-3 flex items-center gap-3 animate-fadeInUp ${
                  isMe ? 'border-2 border-amber-400/40' : ''
                }`}
              >
                <div className="w-7 text-center font-mono text-sm text-slate-400">
                  {i < 3 ? <Medal className={`w-5 h-5 mx-auto ${MEDAL_COLORS[i]}`} /> : i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-slate-100 text-sm font-medium">
                    {entry.name} {isMe && <span className="text-amber-400 text-xs">(toi)</span>}
                  </div>
                  <div className="text-slate-500 text-xs">Niveau {entry.level}</div>
                </div>
                <div className="text-amber-400 font-mono text-sm">{entry.weeklyXp} XP</div>
              </div>
            )
          })}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
