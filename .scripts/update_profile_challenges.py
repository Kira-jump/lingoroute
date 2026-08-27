path = 'src/screens/Profile/index.jsx'
content = open(path).read()

content = content.replace(
    "import { getEffectiveDaily, claimDailyReward } from '../../services/dailyChallenge'\nimport DailyChallenge from '../../components/DailyChallenge'",
    """import { getEffectiveDaily, claimDailyReward, claimLong7Reward, claimLong10Reward, LONG7_REWARD_GEMS, LONG10_REWARD_GEMS } from '../../services/dailyChallenge'
import DailyChallenge from '../../components/DailyChallenge'
import LongChallengeCard from '../../components/LongChallengeCard'"""
)

old_fn = '''  async function handleClaimDaily() {
    const res = await claimDailyReward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }'''

new_fn = '''  async function handleClaimDaily() {
    const res = await claimDailyReward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  async function handleClaimLong7() {
    const res = await claimLong7Reward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }

  async function handleClaimLong10() {
    const res = await claimLong10Reward(user.uid, profile)
    setProfile((prev) => ({ ...prev, ...res }))
  }'''

if old_fn not in content:
    print('MOTIF FN NON TROUVÉ')
else:
    content = content.replace(old_fn, new_fn, 1)

old_daily_display = '''        <div className="mt-5">
          <DailyChallenge
            count={getEffectiveDaily(profile).count}
            claimed={getEffectiveDaily(profile).claimed}
            onClaim={handleClaimDaily}
          />
        </div>'''

new_daily_display = '''        <div className="mt-5">
          <DailyChallenge
            type={getEffectiveDaily(profile).type}
            target={getEffectiveDaily(profile).target}
            progress={getEffectiveDaily(profile).progress}
            claimed={getEffectiveDaily(profile).claimed}
            onClaim={handleClaimDaily}
          />
        </div>

        <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mt-6 mb-2">
          Défis long terme
        </div>
        <div className="flex flex-col gap-3">
          <LongChallengeCard
            title="Défi 7 jours"
            description="Maintiens ta série de connexion pendant 7 jours."
            progress={profile.streak ?? 0}
            target={7}
            claimed={profile.long7Claimed ?? false}
            rewardGems={LONG7_REWARD_GEMS}
            onClaim={handleClaimLong7}
          />
          <LongChallengeCard
            title="Défi 10 jours"
            description="Réussis le défi du jour sur 10 jours au total."
            progress={profile.longDays ?? 0}
            target={10}
            claimed={profile.long10Claimed ?? false}
            rewardGems={LONG10_REWARD_GEMS}
            onClaim={handleClaimLong10}
          />
        </div>'''

if old_daily_display not in content:
    print('MOTIF DAILY DISPLAY NON TROUVÉ')
else:
    content = content.replace(old_daily_display, new_daily_display, 1)

open(path, 'w').write(content)
print('ok')
