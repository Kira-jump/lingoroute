path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

# Imports
content = content.replace(
    "import { incrementDailyCount } from '../../services/dailyChallenge'",
    "import { incrementDailyCount } from '../../services/dailyChallenge'\nimport { grantChestReward, COMBO_THRESHOLD } from '../../services/rewards'\nimport RewardChest from '../../components/RewardChest'"
)

# Nouveaux states
old_states = "  const [result, setResult] = useState(null)"
new_states = """  const [result, setResult] = useState(null)
  const [combo, setCombo] = useState(0)
  const [chestReward, setChestReward] = useState(null)"""
content = content.replace(old_states, new_states, 1)

# handleCheck : gérer le combo
old_check = '''  function handleCheck() {
    if (checked) return
    const ok = isCorrect()
    if (ok) {
      setCorrectCount((c) => c + 1)
      playCorrect()
    } else {
      setMistakes((m) => m + 1)
      playIncorrect()
    }
    setChecked(true)
  }'''

new_check = '''  async function handleCheck() {
    if (checked) return
    const ok = isCorrect()
    if (ok) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      const newCombo = combo + 1
      setCombo(newCombo)
      if (newCombo > 0 && newCombo % COMBO_THRESHOLD === 0) {
        const { profile: updated, reward } = await grantChestReward(user.uid, profile)
        setProfile(updated)
        setChestReward(reward)
      }
    } else {
      setMistakes((m) => m + 1)
      setCombo(0)
      playIncorrect()
    }
    setChecked(true)
  }'''

if old_check not in content:
    print('MOTIF CHECK NON TROUVÉ')
else:
    content = content.replace(old_check, new_check, 1)

# Affichage de la modale coffre, juste avant la fermeture du composant
marker = "  const usedIndexes = new Set()"
chest_render = '''  if (chestReward) {
    return (
      <RewardChest
        reward={chestReward}
        onClose={() => setChestReward(null)}
      />
    )
  }

''' + marker

if marker not in content:
    print('MARKER NON TROUVÉ')
else:
    content = content.replace(marker, chest_render, 1)

open(path, 'w').write(content)
print('ok')
