path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import { formatCountdown } from '../../services/hearts'",
    "import { formatCountdown, syncHeartsDepleted } from '../../services/hearts'"
)

old = "  const effectiveHearts = Math.max(0, heartsState.hearts - mistakes)\n  const outOfHearts = effectiveHearts <= 0 && !finished"
new = """  const effectiveHearts = Math.max(0, heartsState.hearts - mistakes)
  const outOfHearts = effectiveHearts <= 0 && !finished

  useEffect(() => {
    if (outOfHearts && user) {
      syncHeartsDepleted(user.uid, profile).then((updated) => setProfile(updated))
    }
  }, [outOfHearts])"""

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
