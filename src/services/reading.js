import { callGame } from './api'

export const READING_PRICE_GEMS = 100

export async function unlockReading(uid, profile) {
  try {
    const updates = await callGame('unlockReading')
    return { success: true, profile: { ...profile, ...updates } }
  } catch (e) {
    return { success: false, profile }
  }
}
