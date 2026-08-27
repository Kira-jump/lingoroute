import { HeartCrack } from 'lucide-react'

export default function HeartsModal({ countdown, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-8 bg-blue-950/70 backdrop-blur-sm animate-fadeInUp"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-xs p-6 text-center border-2 border-red-400/30"
        onClick={(e) => e.stopPropagation()}
      >
        <HeartCrack className="w-10 h-10 text-red-400 mx-auto mb-3" />
        <div className="font-display text-lg text-slate-100 mb-1">Plus de cœurs !</div>
        <div className="text-slate-400 text-sm mb-5">
          Prochain cœur dans <span className="text-amber-400 font-mono">{countdown}</span>
        </div>
        <button className="btn-primary" onClick={onClose}>
          Compris
        </button>
      </div>
    </div>
  )
}
