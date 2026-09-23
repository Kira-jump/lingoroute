import { useAuth } from '../../context/AuthContext'
import { accessories } from '../../database/accessories'
import { buyAccessory, equipAccessory } from '../../services/avatar'
import Mascot from '../../components/Mascot'
import BottomNav from '../../components/BottomNav'
import { useNavigate } from 'react-router-dom'

export default function MascotShop() {
  const { user, profile, setProfile } = useAuth()
  const navigate = useNavigate()

  if (!profile) return null

  const owned = profile.ownedAccessories || []
  const equipped = profile.equippedAccessory || null

  async function handleBuy(id) {
    const res = await buyAccessory(user.uid, profile, id)
    if (res.success) setProfile(res.profile)
  }

  async function handleEquip(id) {
    const updated = await equipAccessory(user.uid, profile, equipped === id ? null : id)
    setProfile(updated)
  }

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <button className="text-slate-400 text-sm mb-4" onClick={() => navigate('/profile')}>
          ← Retour
        </button>

        <div className="font-display text-xl text-slate-100 mb-1">Boutique du hamster</div>
        <div className="text-slate-400 text-sm mb-5">{profile.gems ?? 0} 🌰 disponibles</div>

        <div className="glass-card p-6 flex justify-center mb-6 animate-fadeInUp">
          <Mascot mood="happy" variant="dad" accessory={equipped} size={100} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {accessories.map((item) => {
            const isOwned = owned.includes(item.id)
            const isEquipped = equipped === item.id
            const canAfford = (profile.gems ?? 0) >= item.price

            return (
              <div key={item.id} className="glass-card p-4 text-center animate-fadeInUp">
                <div className="flex justify-center mb-2">
                  <Mascot mood="idle" variant="dad" accessory={item.id} size={64} />
                </div>
                <div className="text-slate-100 text-sm font-medium mb-2">{item.name}</div>

                {!isOwned ? (
                  <button
                    className={`w-full rounded-lg py-2 text-xs font-semibold ${
                      canAfford ? 'bg-amber-400 text-blue-950' : 'bg-blue-900/40 text-slate-500'
                    }`}
                    disabled={!canAfford}
                    onClick={() => handleBuy(item.id)}
                  >
                    {item.price} 🌰
                  </button>
                ) : (
                  <button
                    className={`w-full rounded-lg py-2 text-xs font-semibold ${
                      isEquipped ? 'bg-emerald-500 text-white' : 'bg-blue-900/50 border border-blue-400/20 text-slate-100'
                    }`}
                    onClick={() => handleEquip(item.id)}
                  >
                    {isEquipped ? '✓ Équipé' : 'Équiper'}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
