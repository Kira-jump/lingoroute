import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { callGame } from './api'
import { getAccessory } from '../database/accessories'

export async function buyAccessory(uid, profile, accessoryId) {
  try {
    const updates = await callGame('buyAccessory', { accessoryId })
    return { success: true, profile: { ...profile, ...updates } }
  } catch (e) {
    return { success: false, profile }
  }
}

export async function equipAccessory(uid, profile, accessoryId) {
  await updateDoc(doc(db, 'users', uid), { equippedAccessory: accessoryId })
  return { ...profile, equippedAccessory: accessoryId }
}
