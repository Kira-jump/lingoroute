import { Flame } from 'lucide-react'
import { COMBO_THRESHOLD, COMBO_REWARD } from '../../services/rewards'

export default function ComboIndicator({ combo }) {
  if (combo === 0) return null

  return (
    <div className="flex items-center gap-2 mb-4 animate-popIn">
      <Flame className="w-4 h-4 text-amber-400" />
      <div className="flex gap-1">
        {Array.from({ length: COMBO_THRESHOLD }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i < combo ? 'bg-amber-400' : 'bg-blue-900/60'
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-mono text-amber-400">+{COMBO_REWARD} 🌰</span>
    </div>
  )
}
