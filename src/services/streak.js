import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function yesterdayStr() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

export async function syncStreak(uid, profile) {
  const today = todayStr()

  if (profile.lastVisit === today) {
    return profile
  }

  const wasYesterday = profile.lastVisit === yesterdayStr()
  const newStreak = wasYesterday ? (profile.streak ?? 0) + 1 : 1

  const updates = { streak: newStreak, lastVisit: today }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}
