import { useState } from 'react'
import { HeartCrack, ShoppingBag, Tv } from 'lucide-react'
import { buyHeartWithGems, grantHeartFromAd, HEART_PRICE_GEMS } from '../../services/hearts'
import AdSimulationModal from '../AdSimulationModal'

export default function HeartsShopModal({ uid, profile, countdown, onProfileUpdate, onClose }) {
  const [showAd, setShowAd] = useState(false)
  const [buying, setBuying] = useState(false)
  const gems = profile.gems ?? 0
  const canBuy = gems >= HEART_PRICE_GEMS

  async function handleBuy() {
    if (!canBuy || buying) return
    setBuying(true)
    const res = await buyHeartWithGems(uid, profile)
    setBuying(false)
    if (res.success) {
      onProfileUpdate(res.profile)
      onClose()
    }
  }

  async function handleAdComplete() {
    const updated = await grantHeartFromAd(uid, profile)
    onProfileUpdate(updated)
    setShowAd(false)
    onClose()
  }

  if (showAd) {
    return <AdSimulationModal onComplete={handleAdComplete} onCancel={() => setShowAd(false)} />
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-8 bg-blue-950/80 backdrop-blur-sm animate-fadeInUp"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-xs p-6 text-center border-2 border-red-400/30 animate-popIn"
        onClick={(e) => e.stopPropagation()}
      >
        <HeartCrack className="w-9 h-9 text-red-400 mx-auto mb-2" />
        <div className="font-display text-lg text-slate-100 mb-1">Plus de cœurs !</div>
        <div className="text-slate-400 text-sm mb-5">
          Prochain cœur dans <span className="text-amber-400 font-mono">{countdown}</span>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
              canBuy ? 'bg-amber-400 text-blue-950' : 'bg-blue-900/40 text-slate-500'
            }`}
            onClick={handleBuy}
            disabled={!canBuy || buying}
          >
            <ShoppingBag className="w-4 h-4" />
            {buying ? 'Achat...' : `Acheter 1 cœur — ${HEART_PRICE_GEMS} 🌰`}
          </button>

          <button
            className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold bg-blue-900/50 border border-blue-400/20 text-slate-100"
            onClick={() => setShowAd(true)}
          >
            <Tv className="w-4 h-4" />
            Regarder une pub — 1 cœur gratuit
          </button>

          <button className="text-xs text-slate-500 mt-1" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}
