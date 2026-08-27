import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { computeEffectiveHearts } from './hearts'
import { xpProgress } from '../utils/xp'

export async function syncHearts(uid, profile) {
  const synced = computeEffectiveHearts(profile.hearts ?? 5, profile.heartsUpdatedAt ?? null)
  if (synced.hearts === profile.hearts && synced.heartsUpdatedAt === (profile.heartsUpdatedAt ?? null)) {
    return profile
  }
  await updateDoc(doc(db, 'users', uid), {
    hearts: synced.hearts,
    heartsUpdatedAt: synced.heartsUpdatedAt
  })
  return { ...profile, hearts: synced.hearts, heartsUpdatedAt: synced.heartsUpdatedAt }
}

export async function applyLessonResult(uid, profile, lessonId, correctCount, totalQuestions, mistakesMade) {
  const earnedXp = correctCount * 10
  const totalXp = (profile.xp ?? 0) + earnedXp
  const { level } = xpProgress(totalXp)

  const previousHearts = profile.hearts ?? 5
  const hearts = Math.max(0, previousHearts - mistakesMade)
  const heartsUpdatedAt =
    mistakesMade > 0
      ? (previousHearts >= 5 ? Date.now() : profile.heartsUpdatedAt ?? Date.now())
      : profile.heartsUpdatedAt ?? null

  const completedLessons = profile.completedLessons?.includes(lessonId)
    ? profile.completedLessons
    : [...(profile.completedLessons || []), lessonId]

  const updates = { xp: totalXp, level, hearts, heartsUpdatedAt, completedLessons }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates, earnedXp }
}
