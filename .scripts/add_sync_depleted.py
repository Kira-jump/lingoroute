path = 'src/services/hearts.js'
content = open(path).read()

addition = '''

export async function syncHeartsDepleted(uid, profile) {
  if ((profile.hearts ?? 5) <= 0 && profile.heartsUpdatedAt) return profile
  const heartsUpdatedAt = Date.now()
  await updateDoc(doc(db, 'users', uid), { hearts: 0, heartsUpdatedAt })
  return { ...profile, hearts: 0, heartsUpdatedAt }
}
'''

if 'syncHeartsDepleted' in content:
    print('DÉJÀ PRÉSENT')
else:
    content += addition
    open(path, 'w').write(content)
    print('ok')
