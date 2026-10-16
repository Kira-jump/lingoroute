import fs from 'fs'
const f = 'src/screens/Story/index.jsx'
let s = fs.readFileSync(f, 'utf8')
const a = "  const [finished, setFinished] = useState(false)\n"
const b = "          setProfile((prev) => ({ ...prev, ...updates }))\n"
const c = [
  '          <div className="text-amber-400 font-mono text-sm mb-6">',
  '            +{story.rewardXp} XP · +{story.rewardGems} 🌰',
  '          </div>',
  ''
].join('\n')
if (![a, b, c].every((m) => s.split(m).length === 2)) {
  console.log('MOTIF ABSENT OU MULTIPLE, rien modifie')
  process.exit(1)
}
const c2 = [
  '          {rewarded ? (',
  '            <div className="text-amber-400 font-mono text-sm mb-6">',
  '              +{story.rewardXp} XP · +{story.rewardGems} 🌰',
  '            </div>',
  '          ) : (',
  '            <div className="text-slate-400 text-sm mb-6">Histoire déjà lue, pas de récompense cette fois.</div>',
  '          )}',
  ''
].join('\n')
s = s.replace(a, a + "  const [rewarded, setRewarded] = useState(false)\n")
s = s.replace(b, b + "          setRewarded(true)\n")
s = s.replace(c, c2)
fs.writeFileSync(f, s)
console.log('OK')
