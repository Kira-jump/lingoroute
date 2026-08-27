import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

// Génère une clé stable pour identifier une question précise
export function questionKey(lessonId, question) {
  return `${lessonId}::${question.prompt}`.slice(0, 300)
}

// Enregistre les questions ratées d'une leçon (appelé à la fin du quiz)
export async function recordMistakes(uid, profile, missedQuestions) {
  if (missedQuestions.length === 0) return profile

  const mistakeBank = { ...(profile.mistakeBank || {}) }
  for (const { key, lessonId, question } of missedQuestions) {
    const existing = mistakeBank[key]
    mistakeBank[key] = {
      lessonId,
      question,
      count: (existing?.count ?? 0) + 1
    }
  }

  await updateDoc(doc(db, 'users', uid), { mistakeBank })
  return { ...profile, mistakeBank }
}

// Retire une question de la banque une fois qu'elle est réussie en révision
export async function clearMistake(uid, profile, key) {
  const mistakeBank = { ...(profile.mistakeBank || {}) }
  delete mistakeBank[key]
  await updateDoc(doc(db, 'users', uid), { mistakeBank })
  return { ...profile, mistakeBank }
}

// Sélectionne les 15 questions les plus ratées pour une session de révision
export function buildReviewSet(mistakeBank, limit = 15) {
  const entries = Object.entries(mistakeBank || {})
  entries.sort((a, b) => b[1].count - a[1].count)
  return entries.slice(0, limit).map(([key, data]) => ({
    key,
    lessonId: data.lessonId,
    ...data.question
  }))
}
