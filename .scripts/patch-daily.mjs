import fs from 'fs'
const f = 'src/services/dailyChallenge.js'
let s = fs.readFileSync(f, 'utf8')
const imp = "import { db } from './firebase'\n"
const start = "export async function claimDailyReward"
const end = "export { DAILY_REWARD_GEMS"
if (![imp, start, end].every((m) => s.split(m).length === 2)) {
  console.log('MOTIF ABSENT OU MULTIPLE, rien modifie')
  process.exit(1)
}
const i = s.indexOf(start)
const j = s.indexOf(end)
if (j <= i) { console.log('ORDRE INATTENDU'); process.exit(1) }
const fn = (name, action) => [
  `export async function ${name}(uid, profile) {`,
  '  try {',
  `    const updates = await callGame('${action}')`,
  '    return { ...profile, ...updates }',
  '  } catch (e) {',
  '    return profile',
  '  }',
  '}'
].join('\n')
const block = [
  fn('claimDailyReward', 'claimDaily'),
  fn('claimLong7Reward', 'claimLong7'),
  fn('claimLong10Reward', 'claimLong10')
].join('\n\n') + '\n\n'
s = s.slice(0, i) + block + s.slice(j)
s = s.replace(imp, imp + "import { callGame } from './api'\n")
fs.writeFileSync(f, s)
console.log('OK')
