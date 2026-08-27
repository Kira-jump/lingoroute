import AppIcon from '../../utils/icons'

export default function LongChallengeCard({ title, description, progress, target, claimed, rewardGems, onClaim }) {
  const pct = Math.min(100, Math.round((progress / target) * 100))
  const done = progress >= target

  return (
    <div className="glass-card p-4 animate-fadeInUp">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-slate-100 font-display font-semibold text-sm">
          <AppIcon name="Sparkles" className="w-4 h-4 text-amber-400" />
          {title}
        </div>
        <div className="text-xs font-mono text-slate-400">{Math.min(progress, target)}/{target}</div>
      </div>

      <div className="text-slate-400 text-xs mb-2">{description}</div>

      <div className="h-2 rounded-full bg-blue-950/60 overflow-hidden mb-3">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {done && !claimed && (
        <button className="w-full bg-amber-400 text-blue-950 font-semibold rounded-xl py-2 text-xs animate-popIn" onClick={onClaim}>
          Récupérer +{rewardGems} 🌰
        </button>
      )}

      {done && claimed && (
        <div className="text-emerald-400 text-xs font-mono text-center">✓ Récupéré</div>
      )}
    </div>
  )
}
