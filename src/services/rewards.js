import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

const COMBO_THRESHOLD = 6
const COMBO_REWARD = 10 // noisettes gagnées à chaque coffre

export async function grantChestReward(uid, profile) {
  const gems = (profile.gems ?? 0) + COMBO_REWARD
  await updateDoc(doc(db, 'users', uid), { gems })
  return { profile: { ...profile, gems }, reward: { gems: COMBO_REWARD } }
}

export { COMBO_THRESHOLD, COMBO_REWARD }
