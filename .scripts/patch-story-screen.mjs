import fs from 'fs'
const f = 'src/screens/Story/index.jsx'
let s = fs.readFileSync(f, 'utf8')
const imp = "import { doc, updateDoc } from 'firebase/firestore'\nimport { db } from '../../services/firebase'\n"
const start = "      const readStories = profile.readStories?.includes(unitId)\n"
const end = "        fireConfetti()\n      }\n"
const ok = [imp, start, end].every((m) => s.split(m).length === 2)
if (!ok) { console.log('MOTIF ABSENT OU MULTIPLE, rien modifie'); process.exit(1) }
const i = s.indexOf(start)
const j = s.indexOf(end) + end.length
if (j <= i) { console.log('ORDRE INATTENDU'); process.exit(1) }
const block = [
  "      if (!profile.readStories?.includes(unitId)) {",
  "        try {",
  "          const updates = await callGame('readStory', { unitId })",
  "          setProfile((prev) => ({ ...prev, ...updates }))",
  "          playComplete()",
  "          fireConfetti()",
  "        } catch (e) {}",
  "      }",
  ""
].join('\n')
s = s.slice(0, i) + block + s.slice(j)
s = s.replace(imp, "import { callGame } from '../../services/api'\n")
fs.writeFileSync(f, s)
console.log('OK')
