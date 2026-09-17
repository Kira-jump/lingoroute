import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { units } from '../../database/units'
import Hearts from '../../components/Hearts'
import XPBar from '../../components/XPBar'
import LessonNode from '../../components/LessonCard'
import BottomNav from '../../components/BottomNav'
import HeartsShopModal from '../../components/HeartsShopModal'
import AppIcon from '../../utils/icons'
import Mascot from '../../components/Mascot'
import { useHeartsTimer } from '../../hooks/useHeartsTimer'
import { syncHearts } from '../../services/progress'
import { syncStreak } from '../../services/streak'
import { syncDailyReset, claimDailyReward, getEffectiveDaily } from '../../services/dailyChallenge'
import DailyCompleteModal from '../../components/DailyCompleteModal'
import { formatCountdown } from '../../services/hearts'
import { xpProgress } from '../../utils/xp'

function getLessonStatus(lessonId, completedLessons) {
  if (completedLessons.includes(lessonId)) return 'done'
  const allLessons = units.flatMap((u) => [...u.lessons.map((l) => l.id), u.boss.id])
  const idx = allLessons.indexOf(lessonId)
  if (idx <= 0) return 'unlocked'
  const previousId = allLessons[idx - 1]
  return completedLessons.includes(previousId) ? 'unlocked' : 'locked'
}

const ZIGZAG = [0, 55, -30, -70, -30, 55]

export default function Home() {
  const { user, profile, setProfile } = useAuth()
  const navigate = useNavigate()
  const [showHeartsModal, setShowHeartsModal] = useState(false)
  const [showDailyModal, setShowDailyModal] = useState(false)
  const prevDailyDone = useRef(false)
  const heartsState = useHeartsTimer(profile)

  useEffect(() => {
    if (user && profile) {
      syncHearts(user.uid, profile).then((updated) => {
        if (updated !== profile) setProfile(updated)
      })
      syncStreak(user.uid, profile).then((updated) => {
        setProfile((prev) => ({ ...prev, streak: updated.streak, lastVisit: updated.lastVisit }))
      })
      syncDailyReset(user.uid, profile).then((updated) => {
        setProfile((prev) => ({ ...prev, dailyDate: updated.dailyDate, dailyCount: updated.dailyCount, dailyClaimed: updated.dailyClaimed }))
      })
    }
  }, [user?.uid])

  useEffect(() => {
    if (!profile) return
    const { progress, target, claimed } = getEffectiveDaily(profile)
    const isDone = progress >= target
    if (isDone && !claimed && !prevDailyDone.current) {
      setShowDailyModal(true)
    }
    prevDailyDone.current = isDone
  }, [profile?.dailyProgress, profile?.dailyDate])

  async function handleClaimDaily() {
    const res = await claimDailyReward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  if (!profile) return null

  const completedLessons = profile.completedLessons || []
  const { level, intoLevel, forNext } = xpProgress(profile.xp ?? 0)

  function handleLessonClick(lessonId) {
    if (heartsState.hearts <= 0) {
      setShowHeartsModal(true)
      return
    }
    navigate(`/lesson/${lessonId}`)
  }

  return (
    <div className="min-h-screen bg-blue-950 pb-28">
      <div className="max-w-md mx-auto px-5 pt-8">
        <div className="flex items-center justify-between animate-fadeInUp">
          <div className="flex items-center gap-3">
            <Mascot mood="idle" variant="dad" size={52} />
            <div>
              <div className="font-display text-xl text-slate-100">
                Bonjour {profile.name}
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-sm font-mono mt-0.5">
                <AppIcon name="Flame" className="w-4 h-4" />
                {profile.streak ?? 0} jour{(profile.streak ?? 0) > 1 ? 's' : ''}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Hearts count={heartsState.hearts} />
            {heartsState.msUntilNext != null && (
              <div className="text-[11px] font-mono text-slate-500">
                +1 cœur dans {formatCountdown(heartsState.msUntilNext)}
              </div>
            )}
          </div>
        </div>

        <div className="glass-card p-5 mt-5 animate-fadeInUp">
          <div className="text-amber-400 font-mono text-sm mb-2 flex items-center gap-1.5">
            <AppIcon name="Star" className="w-4 h-4" />
            Niveau {level}
          </div>
          <XPBar xp={intoLevel} xpForNextLevel={forNext} />
        </div>



        {Object.keys(profile.mistakeBank || {}).length > 0 && (
          <button
            className="w-full glass-card p-4 mt-5 flex items-center gap-3 border-2 border-amber-400/20 animate-fadeInUp"
            onClick={() => navigate('/review')}
          >
            <div className="w-10 h-10 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0">
              <AppIcon name="Brain" className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="text-slate-100 font-display font-semibold text-sm">Réviser tes erreurs</div>
              <div className="text-slate-500 text-xs">{Object.keys(profile.mistakeBank).length} question(s) à revoir</div>
            </div>
          </button>
        )}

        <div className="mt-8 space-y-10">
          {units.map((unit, unitIndex) => {
            const unitLocked = unitIndex > 0 &&
              !completedLessons.includes(units[unitIndex - 1].boss.id)

            const nodes = unitLocked ? [] : [...unit.lessons, unit.boss]

            return (
              <div key={unit.id} className="animate-fadeInUp">
                <div className="text-xs font-mono tracking-widest text-amber-400/80 uppercase mb-1">
                  {unit.title}
                </div>
                <div className="text-slate-300 text-sm mb-4">{unit.subtitle}</div>

                <div className="flex flex-col items-center gap-5">
                  {unitLocked ? (
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 border-2 border-blue-400/10 flex items-center justify-center opacity-40">
                      <AppIcon name="Lock" className="w-6 h-6 text-slate-500" />
                    </div>
                  ) : (
                    nodes.map((lesson, i) => (
                      <LessonNode
                        key={lesson.id}
                        lesson={lesson}
                        isBoss={lesson.id === unit.boss.id}
                        offset={ZIGZAG[i % ZIGZAG.length]}
                        status={getLessonStatus(lesson.id, completedLessons)}
                        onClick={() => handleLessonClick(lesson.id)}
                      />
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 animate-fadeInUp">
          <div className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-1">
            Unité 21
          </div>
          <div className="text-slate-500 text-sm mb-4">Nouveau palier — Perfectionnement</div>
          <div className="glass-card p-5 flex items-center gap-4 border-dashed border-2 border-blue-400/20">
            <div className="w-14 h-14 rounded-full bg-blue-900/40 flex items-center justify-center flex-shrink-0">
              <AppIcon name="Sparkles" className="w-6 h-6 text-amber-400/70" />
            </div>
            <div>
              <div className="text-slate-300 font-display font-semibold">Bientôt disponible</div>
              <div className="text-slate-500 text-xs mt-0.5">De nouvelles unités arrivent régulièrement !</div>
            </div>
          </div>
        </div>
      </div>

      {showHeartsModal && (
        <HeartsShopModal
          uid={user.uid}
          profile={profile}
          countdown={formatCountdown(heartsState.msUntilNext)}
          onProfileUpdate={setProfile}
          onClose={() => setShowHeartsModal(false)}
        />
      )}

      {showDailyModal && (
        <DailyCompleteModal
          onClaim={async () => {
            const res = await claimDailyReward(user.uid, profile)
            setProfile((prev) => ({ ...prev, ...res }))
            setShowDailyModal(false)
          }}
          onClose={() => setShowDailyModal(false)}
        />
      )}

      <BottomNav />
    </div>
  )
}
