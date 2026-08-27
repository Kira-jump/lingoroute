export default function XPBar({ xp, xpForNextLevel }) {
  const pct = Math.min(100, Math.round((xp / xpForNextLevel) * 100))
  return (
    <div>
      <div className="h-3 rounded-full bg-blue-950/60 overflow-hidden border border-blue-400/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-xs font-mono text-slate-400 mt-1.5">
        {xp} XP / {xpForNextLevel} XP
      </div>
    </div>
  )
}
