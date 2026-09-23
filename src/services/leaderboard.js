import { doc, setDoc, updateDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { db } from './firebase'

function getWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
  return `${d.getUTCFullYear()}-W${weekNo}`
}

export async function syncWeeklyReset(uid, profile) {
  const currentWeek = getWeekKey()
  if (profile.weekKey === currentWeek) return profile
  const updates = { weekKey: currentWeek, weeklyXp: 0 }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}

export async function syncLeaderboardEntry(uid, profile) {
  await setDoc(doc(db, 'leaderboard', uid), {
    name: profile.name || 'Anonyme',
    weeklyXp: profile.weeklyXp ?? 0,
    level: profile.level ?? 1
  })
}

export async function fetchWeeklyTop(max = 20) {
  const q = query(collection(db, 'leaderboard'), orderBy('weeklyXp', 'desc'), limit(max))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }))
}

export { getWeekKey }
