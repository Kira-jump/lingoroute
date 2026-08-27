import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

const DAILY_REWARD_GEMS = 15
const LONG7_REWARD_GEMS = 50
const LONG10_REWARD_GEMS = 80

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function seededHash(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

// Génère un défi déterministe (même défi toute la journée pour un même utilisateur)
function generateChallenge(uid, dateStr) {
  const seed = seededHash(uid + dateStr)
  const types = ['correct', 'lessons', 'perfect']
  const type = types[seed % types.length]

  let target = 1
  if (type === 'correct') {
    const options = [10, 15, 20]
    target = options[Math.floor(seed / 3) % options.length]
  } else if (type === 'lessons') {
    const options = [1, 2, 3]
    target = options[Math.floor(seed / 7) % options.length]
  }
  return { type, target }
}

export function challengeLabel(type, target) {
  if (type === 'correct') return `Réponds correctement ${target} fois`
  if (type === 'lessons') return `Termine ${target} leçon${target > 1 ? 's' : ''}`
  if (type === 'perfect') return 'Termine une leçon sans faute'
  return ''
}

export function getEffectiveDaily(profile) {
  return {
    type: profile.dailyType ?? 'correct',
    target: profile.dailyTarget ?? 10,
    progress: profile.dailyProgress ?? 0,
    claimed: profile.dailyClaimed ?? false
  }
}

// Régénère le défi si on a changé de jour (ou si le profil n'a jamais eu de défi)
export async function syncDailyReset(uid, profile) {
  const today = todayStr()
  if (profile.dailyDate === today && profile.dailyType) {
    return profile
  }
  const { type, target } = generateChallenge(uid, today)
  const updates = {
    dailyDate: today,
    dailyType: type,
    dailyTarget: target,
    dailyProgress: 0,
    dailyClaimed: false
  }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}

// Appelé à chaque fin de leçon, met à jour la progression selon le type du défi du jour
export async function recordLessonForDaily(uid, profile, { correctCount, mistakes }) {
  const type = profile.dailyType ?? 'correct'
  let increment = 0
  if (type === 'correct') increment = correctCount
  if (type === 'lessons') increment = 1
  if (type === 'perfect') increment = mistakes === 0 ? 1 : 0

  const newProgress = (profile.dailyProgress ?? 0) + increment
  const updates = { dailyProgress: newProgress }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}

export async function claimDailyReward(uid, profile) {
  const gems = (profile.gems ?? 0) + DAILY_REWARD_GEMS
  const longDays = (profile.longDays ?? 0) + 1
  const updates = { dailyClaimed: true, gems, longDays }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}

export async function claimLong7Reward(uid, profile) {
  const gems = (profile.gems ?? 0) + LONG7_REWARD_GEMS
  const updates = { long7Claimed: true, gems }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}

export async function claimLong10Reward(uid, profile) {
  const gems = (profile.gems ?? 0) + LONG10_REWARD_GEMS
  const updates = { long10Claimed: true, gems }
  await updateDoc(doc(db, 'users', uid), updates)
  return { ...profile, ...updates }
}

export { DAILY_REWARD_GEMS, LONG7_REWARD_GEMS, LONG10_REWARD_GEMS }
