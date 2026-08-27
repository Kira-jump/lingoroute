path = 'src/screens/Home/index.jsx'
content = open(path).read()

content = content.replace(
    "import { syncDailyReset, claimDailyReward, getEffectiveDaily, DAILY_GOAL } from '../../services/dailyChallenge'",
    "import { syncDailyReset, claimDailyReward, getEffectiveDaily } from '../../services/dailyChallenge'"
)

old = '''  useEffect(() => {
    if (!profile) return
    const { count, claimed } = getEffectiveDaily(profile)
    const isDone = count >= DAILY_GOAL
    if (isDone && !claimed && !prevDailyDone.current) {
      setShowDailyModal(true)
    }
    prevDailyDone.current = isDone
  }, [profile?.dailyCount, profile?.dailyDate])'''

new = '''  useEffect(() => {
    if (!profile) return
    const { progress, target, claimed } = getEffectiveDaily(profile)
    const isDone = progress >= target
    if (isDone && !claimed && !prevDailyDone.current) {
      setShowDailyModal(true)
    }
    prevDailyDone.current = isDone
  }, [profile?.dailyProgress, profile?.dailyDate])'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
