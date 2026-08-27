import AppIcon from '../../utils/icons'
import { challengeLabel } from '../../services/dailyChallenge'

export default function DailyChallenge({ type, target, progress, claimed, onClaim }) {
  const pct = Math.min(100, Math.round((progress / target) * 100))
  const done = progress >= target

  return (
    <div className="glass-card p-4 animate-fadeInUp">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-slate-100 font-display font-semibold">
          <AppIcon name="Target" className="w-4 h-4 text-amber-400" />
          Défi du jour
        </div>
        <div className="text-xs font-mono text-slate-400">{Math.min(progress, target)}/{target}</div>
      </div>

      <div className="text-slate-300 text-sm mb-2">{challengeLabel(type, target)}</div>

      <div className="h-2.5 rounded-full bg-blue-950/60 overflow-hidden mb-3">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {done && !claimed && (
        <button
          className="w-full bg-amber-400 text-blue-950 font-semibold rounded-xl py-2 text-sm animate-popIn"
          onClick={onClaim}
        >
          Récupérer +15 🌰
        </button>
      )}

      {done && claimed && (
        <div className="text-emerald-400 text-xs font-mono text-center">✓ Récompense récupérée</div>
      )}
    </div>
  )
}
