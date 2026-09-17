path = 'src/services/hearts.js'
content = open(path).read()

addition = '''

export const HEART_PRICE_GEMS = 25

export async function buyHeartWithGems(uid, profile) {
  const gems = profile.gems ?? 0
  if (gems < HEART_PRICE_GEMS) return { success: false, profile }
  const hearts = Math.min(5, (profile.hearts ?? 0) + 1)
  const newGems = gems - HEART_PRICE_GEMS
  const heartsUpdatedAt = hearts >= 5 ? null : profile.heartsUpdatedAt ?? null
  const { doc, updateDoc } = await import('firebase/firestore')
  const { db } = await import('./firebase')
  await updateDoc(doc(db, 'users', uid), { hearts, gems: newGems, heartsUpdatedAt })
  return { success: true, profile: { ...profile, hearts, gems: newGems, heartsUpdatedAt } }
}

export async function grantHeartFromAd(uid, profile) {
  const hearts = Math.min(5, (profile.hearts ?? 0) + 1)
  const heartsUpdatedAt = hearts >= 5 ? null : profile.heartsUpdatedAt ?? null
  const { doc, updateDoc } = await import('firebase/firestore')
  const { db } = await import('./firebase')
  await updateDoc(doc(db, 'users', uid), { hearts, heartsUpdatedAt })
  return { ...profile, hearts, heartsUpdatedAt }
}
'''

if 'HEART_PRICE_GEMS' in content:
    print('DÉJÀ PRÉSENT')
else:
    content += addition
    open(path, 'w').write(content)
    print('ok')
