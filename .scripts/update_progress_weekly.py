path = 'src/services/progress.js'
content = open(path).read()

content = content.replace(
    "import { xpProgress } from '../utils/xp'",
    "import { xpProgress } from '../utils/xp'\nimport { syncLeaderboardEntry } from './leaderboard'"
)

old = "  const updates = { xp: totalXp, level, hearts, heartsUpdatedAt, completedLessons }\n  await updateDoc(doc(db, 'users', uid), updates)\n  return { ...profile, ...updates, earnedXp }"
new = """  const weeklyXp = (profile.weeklyXp ?? 0) + earnedXp

  const updates = { xp: totalXp, level, hearts, heartsUpdatedAt, completedLessons, weeklyXp }
  await updateDoc(doc(db, 'users', uid), updates)
  const finalProfile = { ...profile, ...updates, earnedXp }
  syncLeaderboardEntry(uid, finalProfile)
  return finalProfile"""

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
