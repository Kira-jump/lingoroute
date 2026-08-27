path = 'src/screens/Home/index.jsx'
content = open(path).read()

old = """  useEffect(() => {
    if (user && profile) {
      syncHearts(user.uid, profile).then((updated) => {
        if (updated !== profile) setProfile(updated)
      })
    }
  }, [user?.uid])"""

new = """  useEffect(() => {
    if (user && profile) {
      syncHearts(user.uid, profile).then((updated) => {
        if (updated !== profile) setProfile(updated)
      })
      syncStreak(user.uid, profile).then((updated) => {
        setProfile((prev) => ({ ...prev, streak: updated.streak, lastVisit: updated.lastVisit }))
      })
    }
  }, [user?.uid])"""

if old not in content:
    print('MOTIF NON TROUVÉ — vérifie le fichier manuellement')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
