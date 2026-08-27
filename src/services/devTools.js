import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { xpToReachLevel } from '../utils/xp'

export async function setLevelForTest(uid, level) {
  const xp = xpToReachLevel(level)
  await updateDoc(doc(db, 'users', uid), { xp, level })
  return { xp, level }
}

export async function unlockBossForTest(uid, profile, bossId) {
  const completedLessons = profile.completedLessons?.includes(bossId)
    ? profile.completedLessons
    : [...(profile.completedLessons || []), bossId]
  await updateDoc(doc(db, 'users', uid), { completedLessons })
  return completedLessons
}

export async function resetFamilyForTest(uid, profile) {
  const completedLessons = (profile.completedLessons || []).filter(
    (id) => !['b5', 'b10', 'b15', 'b20'].includes(id)
  )
  await updateDoc(doc(db, 'users', uid), { xp: 0, level: 1, completedLessons })
  return { xp: 0, level: 1, completedLessons }
}
