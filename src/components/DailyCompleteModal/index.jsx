import { PartyPopper, Gem } from 'lucide-react'

export default function DailyCompleteModal({ onClaim, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-8 bg-blue-950/80 backdrop-blur-sm animate-fadeInUp"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-xs p-7 text-center border-2 border-amber-400/40 animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        <PartyPopper className="w-10 h-10 text-amber-400 mx-auto mb-3" />
        <div className="font-display text-xl text-slate-100 mb-1">Défi du jour réussi !</div>
        <div className="flex items-center justify-center gap-1.5 text-amber-400 font-mono text-sm mb-6">
          <Gem className="w-4 h-4" />
          +15 noisettes t'attendent
        </div>
        <button className="btn-primary" onClick={onClaim}>
          Récupérer et continuer
        </button>
      </div>
    </div>
  )
}
