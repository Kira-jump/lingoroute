import { useState } from 'react'
import { BookOpen, Lock, Mic } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { readingTexts } from '../../database/readingTexts'
import { unlockReading, READING_PRICE_GEMS } from '../../services/reading'
import PronunciationReader from '../../components/PronunciationReader'
import BottomNav from '../../components/BottomNav'

export default function Reading() {
  const { user, profile, setProfile } = useAuth()
  const [selected, setSelected] = useState(null)
  const [unlocking, setUnlocking] = useState(false)

  if (!profile) return null

  const unlocked = profile.readingUnlocked ?? false
  const gems = profile.gems ?? 0
  const canUnlock = gems >= READING_PRICE_GEMS

  async function handleUnlock() {
    if (!canUnlock || unlocking) return
    setUnlocking(true)
    const res = await unlockReading(user.uid, profile)
    setUnlocking(false)
    if (res.success) setProfile(res.profile)
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-blue-950 pb-28">
        <div className="max-w-md mx-auto px-5 pt-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-amber-400/15 flex items-center justify-center mb-4 animate-fadeInUp">
            <Mic className="w-7 h-7 text-amber-400" />
          </div>
          <div className="font-display text-xl text-slate-100 mb-2 animate-fadeInUp">
            Entraînement à la prononciation
          </div>
          <div className="text-slate-400 text-sm mb-6 animate-fadeInUp">
            Lis des textes à voix haute adaptés à ton niveau et reçois un retour en temps réel sur ta prononciation.
          </div>

          <div className="glass-card p-5 w-full animate-fadeInUp">
            <div className="flex items-center justify-center gap-2 text-amber-400 font-mono text-sm mb-4">
              <Lock className="w-4 h-4" />
              Fonctionnalité premium
            </div>
            <button
              className={`w-full rounded-2xl py-3.5 font-semibold ${
                canUnlock ? 'bg-amber-400 text-blue-950' : 'bg-blue-900/40 text-slate-500'
              }`}
              disabled={!canUnlock || unlocking}
              onClick={handleUnlock}
            >
              {unlocking ? 'Déverrouillage...' : `Débloquer — ${READING_PRICE_GEMS} 🌰`}
            </button>
            {!canUnlock && (
              <div className="text-slate-500 text-xs mt-3">
                Il te manque {READING_PRICE_GEMS - gems} 🌰. Gagne des noisettes avec les défis et combos !
              </div>
            )}
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }

  if (selected) {
    return (
      <div className="min-h-screen bg-blue-950 pb-28">
        <div className="max-w-md mx-auto px-5 pt-8">
          <button className="text-slate-400 text-sm mb-5" onClick={() => setSelected(null)}>
            ← Retour aux textes
          </button>
          <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mb-1">
            {selected.level}
          </div>
          <div className="font-display text-xl text-slate-100 mb-5">{selected.title}</div>
          <PronunciationReader text={selected.text} />
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <div className="font-display text-xl text-slate-100 mb-1 flex items-center gap-2 animate-fadeInUp">
          <BookOpen className="w-5 h-5 text-amber-400" />
          Textes à lire
        </div>
        <div className="text-slate-400 text-sm mb-5">Choisis un texte adapté à ton niveau</div>

        <div className="flex flex-col gap-3">
          {readingTexts.map((t) => (
            <button
              key={t.id}
              className="glass-card p-4 text-left flex items-center justify-between animate-fadeInUp"
              onClick={() => setSelected(t)}
            >
              <div>
                <div className="text-slate-100 font-display font-semibold">{t.title}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.text.slice(0, 40)}...</div>
              </div>
              <div className="text-amber-400 text-xs font-mono">{t.level}</div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
