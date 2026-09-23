import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

export const READING_PRICE_GEMS = 100

export async function unlockReading(uid, profile) {
  const gems = profile.gems ?? 0
  if (gems < READING_PRICE_GEMS) return { success: false, profile }
  const newGems = gems - READING_PRICE_GEMS
  await updateDoc(doc(db, 'users', uid), { readingUnlocked: true, gems: newGems })
  return { success: true, profile: { ...profile, readingUnlocked: true, gems: newGems } }
}
