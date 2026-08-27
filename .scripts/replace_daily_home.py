path = 'src/screens/Home/index.jsx'
content = open(path).read()

# Remplace les imports
content = content.replace(
    "import { syncDailyReset, claimDailyReward, getEffectiveDaily } from '../../services/dailyChallenge'\nimport DailyChallenge from '../../components/DailyChallenge'",
    "import { syncDailyReset, claimDailyReward, getEffectiveDaily, DAILY_GOAL } from '../../services/dailyChallenge'\nimport DailyCompleteModal from '../../components/DailyCompleteModal'"
)

# Retire l'encart affiché en dur
old_block = '''        <div className="mt-4">
          <DailyChallenge
            count={getEffectiveDaily(profile).count}
            claimed={getEffectiveDaily(profile).claimed}
            onClaim={handleClaimDaily}
          />
        </div>'''
if old_block not in content:
    print('MOTIF ENCART NON TROUVÉ')
else:
    content = content.replace(old_block, '', 1)

# Ajoute la détection de transition + affichage modal, juste après la déclaration de showHeartsModal
old_state = "  const [showHeartsModal, setShowHeartsModal] = useState(false)"
new_state = """  const [showHeartsModal, setShowHeartsModal] = useState(false)
  const [showDailyModal, setShowDailyModal] = useState(false)
  const prevDailyDone = useRef(false)"""
if old_state not in content:
    print('MOTIF STATE NON TROUVÉ')
else:
    content = content.replace(old_state, new_state, 1)

# Ajoute l'import useRef
content = content.replace(
    "import { useEffect, useState } from 'react'",
    "import { useEffect, useState, useRef } from 'react'"
)

# Ajoute un useEffect qui détecte la transition non-complété -> complété
old_effect_end = "  }, [user?.uid])"
new_effect_end = '''  }, [user?.uid])

  useEffect(() => {
    if (!profile) return
    const { count, claimed } = getEffectiveDaily(profile)
    const isDone = count >= DAILY_GOAL
    if (isDone && !claimed && !prevDailyDone.current) {
      setShowDailyModal(true)
    }
    prevDailyDone.current = isDone
  }, [profile?.dailyCount, profile?.dailyDate])'''

if old_effect_end not in content:
    print('MOTIF EFFECT END NON TROUVÉ')
else:
    content = content.replace(old_effect_end, new_effect_end, 1)

# Ajoute le rendu de la modale, juste après la modale des coeurs existante
old_hearts_modal = '''      {showHeartsModal && (
        <HeartsModal
          countdown={formatCountdown(heartsState.msUntilNext)}
          onClose={() => setShowHeartsModal(false)}
        />
      )}'''

new_hearts_modal = old_hearts_modal + '''

      {showDailyModal && (
        <DailyCompleteModal
          onClaim={async () => {
            const res = await claimDailyReward(user.uid, profile)
            setProfile((prev) => ({ ...prev, ...res }))
            setShowDailyModal(false)
          }}
          onClose={() => setShowDailyModal(false)}
        />
      )}'''

if old_hearts_modal not in content:
    print('MOTIF HEARTS MODAL NON TROUVÉ')
else:
    content = content.replace(old_hearts_modal, new_hearts_modal, 1)

open(path, 'w').write(content)
print('ok')
