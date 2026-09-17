import { useState, useEffect } from 'react'
import { Tv, Heart } from 'lucide-react'

export default function AdSimulationModal({ onComplete, onCancel }) {
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    if (seconds <= 0) {
      onComplete()
      return
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-8 bg-blue-950/90 backdrop-blur-sm animate-fadeInUp">
      <div className="glass-card w-full max-w-xs p-7 text-center border-2 border-amber-400/40 animate-popIn">
        <Tv className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-pulseSoft" />
        <div className="font-display text-lg text-slate-100 mb-1">Publicité en cours...</div>
        <div className="text-slate-400 text-sm mb-5">
          Un <Heart className="w-3.5 h-3.5 inline text-red-500 fill-red-500" /> cœur gratuit dans {seconds}s
        </div>
        <button
          className="text-xs text-slate-500 underline"
          onClick={onCancel}
        >
          Annuler
        </button>
      </div>
    </div>
  )
}
