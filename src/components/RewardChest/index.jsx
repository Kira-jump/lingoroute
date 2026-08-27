import { useState, useEffect } from 'react'
import { Gift } from 'lucide-react'
import { COMBO_THRESHOLD } from '../../services/rewards'

export default function RewardChest({ reward, onClose }) {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setOpened(true), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-8 bg-blue-950/80 backdrop-blur-sm animate-fadeInUp">
      <div className="glass-card w-full max-w-xs p-7 text-center border-2 border-amber-400/40 animate-popIn">
        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
          Combo x{COMBO_THRESHOLD} !
        </div>

        <div className={`mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-amber-400/10 ${!opened ? 'animate-mascotWiggle' : ''}`}>
          <Gift className={`w-12 h-12 text-amber-400 transition-transform duration-300 ${opened ? 'scale-110' : ''}`} />
        </div>

        {opened ? (
          <div className="animate-popIn">
            <div className="font-display text-xl text-slate-100 mb-1">Coffre ouvert !</div>
            <div className="flex items-center justify-center gap-1.5 text-amber-400 font-mono text-lg mb-5">
              +{reward.gems} 🌰
            </div>
            <button className="btn-primary" onClick={onClose}>
              Continuer
            </button>
          </div>
        ) : (
          <div className="text-slate-400 text-sm">Ouverture...</div>
        )}
      </div>
    </div>
  )
}
