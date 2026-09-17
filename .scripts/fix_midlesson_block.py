path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

# Imports
content = content.replace(
    "import HeartsModal from '../../components/HeartsModal'",
    "import HeartsShopModal from '../../components/HeartsShopModal'"
)
content = content.replace(
    "import { formatCountdown } from '../../services/hearts'",
    "import { formatCountdown } from '../../services/hearts'"
)

# Remplace le useEffect + le early return par un blocage basé sur les cœurs EFFECTIFS (hearts - mistakes de la session)
old = '''  useEffect(() => {
    if (heartsState.hearts <= 0 && !finished) {
      navigate('/home')
    }
  }, [heartsState.hearts, finished])

  if (heartsState.hearts <= 0 && !finished) {
    return null
  }'''

new = '''  const effectiveHearts = Math.max(0, heartsState.hearts - mistakes)
  const outOfHearts = effectiveHearts <= 0 && !finished'''

if old not in content:
    print('MOTIF 1 NON TROUVÉ')
else:
    content = content.replace(old, new, 1)

# Retire l'ancien useEffect import s'il n'est plus utilisé ailleurs -> on garde useEffect car peut servir ailleurs, pas grave

# Empêche de continuer à répondre si à court de cœurs : bloque handleCheck
old2 = "  async function handleCheck() {\n    if (checked || checking) return"
new2 = "  async function handleCheck() {\n    if (checked || checking || outOfHearts) return"
if old2 not in content:
    print('MOTIF 2 NON TROUVÉ')
else:
    content = content.replace(old2, new2, 1)

# Ajoute l'affichage de la modale boutique juste avant le rendu du quiz normal, à la place de l'ancien retour null
marker = "  const usedIndexes = new Set()"
insertion = '''  if (outOfHearts) {
    return (
      <HeartsShopModal
        uid={user.uid}
        profile={profile}
        countdown={formatCountdown(heartsState.msUntilNext)}
        onProfileUpdate={setProfile}
        onClose={() => navigate('/home')}
      />
    )
  }

''' + marker

if marker not in content:
    print('MARKER NON TROUVÉ')
else:
    content = content.replace(marker, insertion, 1)

open(path, 'w').write(content)
print('done')
