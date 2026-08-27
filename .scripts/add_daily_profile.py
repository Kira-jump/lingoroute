path = 'src/screens/Profile/index.jsx'
content = open(path).read()

content = content.replace(
    "import { setLevelForTest, unlockBossForTest, resetFamilyForTest } from '../../services/devTools'",
    "import { setLevelForTest, unlockBossForTest, resetFamilyForTest } from '../../services/devTools'\nimport { getEffectiveDaily, claimDailyReward } from '../../services/dailyChallenge'\nimport DailyChallenge from '../../components/DailyChallenge'"
)

old = '''  async function handleResetFamily() {
    const res = await resetFamilyForTest(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }'''

new = '''  async function handleResetFamily() {
    const res = await resetFamilyForTest(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  async function handleClaimDaily() {
    const res = await claimDailyReward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }'''

if old not in content:
    print('MOTIF FUNCTION NON TROUVÉ')
else:
    content = content.replace(old, new, 1)

old_grid = '''        <div className="grid grid-cols-3 gap-3 mt-5">'''
new_grid = '''        <div className="mt-5">
          <DailyChallenge
            count={getEffectiveDaily(profile).count}
            claimed={getEffectiveDaily(profile).claimed}
            onClaim={handleClaimDaily}
          />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">'''

if old_grid not in content:
    print('MOTIF GRID NON TROUVÉ')
else:
    content = content.replace(old_grid, new_grid, 1)

open(path, 'w').write(content)
print('ok')
