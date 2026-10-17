import fs from 'fs'
function patch(f, imp, start, end, block) {
  let s = fs.readFileSync(f, 'utf8')
  if (![imp, start, end].every((m) => s.split(m).length === 2)) {
    console.log(f + ' : MOTIF ABSENT OU MULTIPLE, rien modifie')
    process.exit(1)
  }
  const i = s.indexOf(start)
  const j = s.indexOf(end)
  if (j <= i) { console.log(f + ' : ORDRE INATTENDU'); process.exit(1) }
  s = s.slice(0, i) + block + '\n\n' + s.slice(j)
  s = s.replace(imp, imp + "import { callGame } from './api'\n")
  fs.writeFileSync(f, s)
  console.log(f + ' : OK')
}
const imp = "import { db } from './firebase'\n"
patch('src/services/hearts.js', imp,
  'export async function buyHeartWithGems',
  'export async function grantHeartFromAd',
  [
    'export async function buyHeartWithGems(uid, profile) {',
    '  try {',
    "    const updates = await callGame('buyHeart')",
    '    return { success: true, profile: { ...profile, ...updates } }',
    '  } catch (e) {',
    '    return { success: false, profile }',
    '  }',
    '}'
  ].join('\n'))
patch('src/services/avatar.js', imp,
  'export async function buyAccessory',
  'export async function equipAccessory',
  [
    'export async function buyAccessory(uid, profile, accessoryId) {',
    '  try {',
    "    const updates = await callGame('buyAccessory', { accessoryId })",
    '    return { success: true, profile: { ...profile, ...updates } }',
    '  } catch (e) {',
    '    return { success: false, profile }',
    '  }',
    '}'
  ].join('\n'))
