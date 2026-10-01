import { callGame } from './api'

const COMBO_THRESHOLD = 6
const COMBO_REWARD = 10 // affichage seulement, le montant réel est fixé par le serveur

export async function grantChestReward(uid, profile) {
  try {
    const updates = await callGame('chest')
    return { profile: { ...profile, ...updates }, reward: { gems: COMBO_REWARD } }
  } catch (e) {
    return { profile, reward: null }
  }
}

export { COMBO_THRESHOLD, COMBO_REWARD }
