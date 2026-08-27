path = 'src/screens/Home/index.jsx'
content = open(path).read()

content = content.replace(
    "import { syncStreak } from '../../services/streak'",
    "import { syncStreak } from '../../services/streak'\nimport { syncDailyReset, claimDailyReward, getEffectiveDaily } from '../../services/dailyChallenge'\nimport DailyChallenge from '../../components/DailyChallenge'"
)

old_effect = '''  useEffect(() => {
    if (user && profile) {
      syncHearts(user.uid, profile).then((updated) => {
        if (updated !== profile) setProfile(updated)
      })
      syncStreak(user.uid, profile).then((updated) => {
        setProfile((prev) => ({ ...prev, streak: updated.streak, lastVisit: updated.lastVisit }))
      })
    }
  }, [user?.uid])'''

new_effect = '''  useEffect(() => {
    if (user && profile) {
      syncHearts(user.uid, profile).then((updated) => {
        if (updated !== profile) setProfile(updated)
      })
      syncStreak(user.uid, profile).then((updated) => {
        setProfile((prev) => ({ ...prev, streak: updated.streak, lastVisit: updated.lastVisit }))
      })
      syncDailyReset(user.uid, profile).then((updated) => {
        setProfile((prev) => ({ ...prev, dailyDate: updated.dailyDate, dailyCount: updated.dailyCount, dailyClaimed: updated.dailyClaimed }))
      })
    }
  }, [user?.uid])

  async function handleClaimDaily() {
    const res = await claimDailyReward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }'''

if old_effect not in content:
    print('MOTIF EFFECT NON TROUVÉ')
else:
    content = content.replace(old_effect, new_effect, 1)

old_xpbar = '''        <div className="glass-card p-5 mt-5 animate-fadeInUp">
          <div className="text-amber-400 font-mono text-sm mb-2 flex items-center gap-1.5">
            <AppIcon name="Star" className="w-4 h-4" />
            Niveau {level}
          </div>
          <XPBar xp={intoLevel} xpForNextLevel={forNext} />
        </div>'''

new_xpbar = '''        <div className="glass-card p-5 mt-5 animate-fadeInUp">
          <div className="text-amber-400 font-mono text-sm mb-2 flex items-center gap-1.5">
            <AppIcon name="Star" className="w-4 h-4" />
            Niveau {level}
          </div>
          <XPBar xp={intoLevel} xpForNextLevel={forNext} />
        </div>

        <div className="mt-4">
          <DailyChallenge
            count={getEffectiveDaily(profile).count}
            claimed={getEffectiveDaily(profile).claimed}
            onClaim={handleClaimDaily}
          />
        </div>'''

if old_xpbar not in content:
    print('MOTIF XPBAR NON TROUVÉ')
else:
    content = content.replace(old_xpbar, new_xpbar, 1)

open(path, 'w').write(content)
print('ok')
