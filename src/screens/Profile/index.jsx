import { xpProgress } from '../../utils/xp'
import { useAuth } from '../../context/AuthContext'
import BottomNav from '../../components/BottomNav'
import { getEffectiveDaily, claimDailyReward, claimLong7Reward, claimLong10Reward, LONG7_REWARD_GEMS, LONG10_REWARD_GEMS } from '../../services/dailyChallenge'
import DailyChallenge from '../../components/DailyChallenge'
import LongChallengeCard from '../../components/LongChallengeCard'

export default function Profile() {
  const { user, profile, logout, setProfile } = useAuth()
  const { level } = profile ? xpProgress(profile.xp ?? 0) : { level: 1 }

  if (!profile) return null

  async function handleClaimDaily() {
    const res = await claimDailyReward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  async function handleClaimLong7() {
    const res = await claimLong7Reward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  async function handleClaimLong10() {
    const res = await claimLong10Reward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <div className="glass-card p-6 text-center animate-fadeInUp">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-display font-bold text-blue-950">
            {profile.name?.[0]?.toUpperCase() || '?'}
          </div>
          <div className="font-display text-xl text-slate-100 mt-3">{profile.name}</div>
          <div className="text-amber-400 text-sm font-mono">Niveau {level}</div>
          <button
            className="mt-3 text-xs bg-amber-400/15 text-amber-400 rounded-lg px-3 py-1.5"
            onClick={() => window.location.assign('/mascot-shop')}
          >
            🎩 Boutique du hamster
          </button>
        </div>

        <div className="mt-5">
          <DailyChallenge
            type={getEffectiveDaily(profile).type}
            target={getEffectiveDaily(profile).target}
            progress={getEffectiveDaily(profile).progress}
            claimed={getEffectiveDaily(profile).claimed}
            onClaim={handleClaimDaily}
          />
        </div>

        <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mt-6 mb-2">
          Défis long terme
        </div>
        <div className="flex flex-col gap-3">
          <LongChallengeCard
            title="Défi 7 jours"
            description="Maintiens ta série de connexion pendant 7 jours."
            progress={profile.streak ?? 0}
            target={7}
            claimed={profile.long7Claimed ?? false}
            rewardGems={LONG7_REWARD_GEMS}
            onClaim={handleClaimLong7}
          />
          <LongChallengeCard
            title="Défi 10 jours"
            description="Réussis le défi du jour sur 10 jours au total."
            progress={profile.longDays ?? 0}
            target={10}
            claimed={profile.long10Claimed ?? false}
            rewardGems={LONG10_REWARD_GEMS}
            onClaim={handleClaimLong10}
          />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="glass-card p-4 text-center animate-fadeInUp">
            <div className="text-amber-400 font-mono text-lg">{profile.xp}</div>
            <div className="text-slate-400 text-xs mt-1">XP</div>
          </div>
          <div className="glass-card p-4 text-center animate-fadeInUp">
            <div className="text-amber-400 font-mono text-lg">{profile.streak ?? 0}</div>
            <div className="text-slate-400 text-xs mt-1">Série</div>
          </div>
          <div className="glass-card p-4 text-center animate-fadeInUp">
            <div className="text-amber-400 font-mono text-lg">{profile.completedLessons?.length ?? 0}</div>
            <div className="text-slate-400 text-xs mt-1">Leçons</div>
          </div>
        </div>

        <button className="btn-primary mt-6 !bg-transparent !border !border-red-400/40 !text-red-400 !shadow-none" onClick={logout}>
          Se déconnecter
        </button>
      </div>
      <BottomNav />
    </div>
  )
}
