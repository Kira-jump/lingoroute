import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { getAccessory } from '../database/accessories'

export async function buyAccessory(uid, profile, accessoryId) {
  const item = getAccessory(accessoryId)
  if (!item) return { success: false, profile }

  const owned = profile.ownedAccessories || []
  if (owned.includes(accessoryId)) return { success: false, profile }

  const gems = profile.gems ?? 0
  if (gems < item.price) return { success: false, profile }

  const newOwned = [...owned, accessoryId]
  const newGems = gems - item.price
  await updateDoc(doc(db, 'users', uid), { ownedAccessories: newOwned, gems: newGems })
  return { success: true, profile: { ...profile, ownedAccessories: newOwned, gems: newGems } }
}

export async function equipAccessory(uid, profile, accessoryId) {
  await updateDoc(doc(db, 'users', uid), { equippedAccessory: accessoryId })
  return { ...profile, equippedAccessory: accessoryId }
}
