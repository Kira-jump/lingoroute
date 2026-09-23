import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getStory } from '../../database/stories'
import { useAuth } from '../../context/AuthContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Mascot from '../../components/Mascot'
import { playComplete } from '../../services/sounds'
import { fireConfetti } from '../../services/confetti'

export default function Story() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const { user, profile, setProfile } = useAuth()
  const story = getStory(unitId)

  const [panel, setPanel] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!story) {
    navigate('/home', { replace: true })
    return null
  }

  const current = story.panels[panel]
  const pct = Math.round(((panel + 1) / story.panels.length) * 100)

  async function handleNext() {
    if (panel + 1 < story.panels.length) {
      setPanel((p) => p + 1)
    } else {
      const readStories = profile.readStories?.includes(unitId)
        ? profile.readStories
        : [...(profile.readStories || []), unitId]

      if (!profile.readStories?.includes(unitId)) {
        const xp = (profile.xp ?? 0) + story.rewardXp
        const gems = (profile.gems ?? 0) + story.rewardGems
        await updateDoc(doc(db, 'users', user.uid), { readStories, xp, gems })
        setProfile((prev) => ({ ...prev, readStories, xp, gems }))
        playComplete()
        fireConfetti()
      }
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center px-6">
        <div className="glass-card p-8 text-center max-w-md w-full animate-popIn">
          <Mascot mood="excited" size={90} className="mx-auto mb-3" />
          <div className="font-display text-2xl text-slate-100 mb-2">Histoire terminée !</div>
          <div className="text-amber-400 font-mono text-sm mb-6">
            +{story.rewardXp} XP · +{story.rewardGems} 🌰
          </div>
          <button className="btn-primary" onClick={() => navigate('/home')}>
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <div className="max-w-md mx-auto w-full px-5 pt-6 flex items-center gap-3">
        <button className="text-slate-400 text-xl" onClick={() => navigate('/home')}>✕</button>
        <div className="flex-1 h-2.5 rounded-full bg-blue-900/60 overflow-hidden">
          <div className="h-full bg-amber-400 transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-6 flex-1 flex flex-col justify-center items-center">
        <div className="text-xs font-mono text-amber-400/70 uppercase tracking-widest mb-4">
          {story.title}
        </div>

        <Mascot mood={current.mood} size={140} className="mb-6" />

        <div key={panel} className="glass-card p-5 w-full animate-popIn">
          <div className="font-display text-lg text-slate-100 mb-1.5">{current.en}</div>
          <div className="text-slate-400 text-sm">{current.fr}</div>
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-6 pb-10">
        <button className="btn-primary" onClick={handleNext}>
          {panel + 1 < story.panels.length ? 'Suivant' : 'Terminer'}
        </button>
      </div>
    </div>
  )
}
