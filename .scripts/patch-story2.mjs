import fs from 'fs'
let s = fs.readFileSync('api/game.js', 'utf8')
const a = "const STORY_XP = 20, STORY_GEMS = 10\n"
const b = "xp: (p.xp ?? 0) + STORY_XP, gems: gems + STORY_GEMS }"
if (s.split(a).length !== 2 || s.split(b).length !== 2) {
  console.log('MOTIF ABSENT OU MULTIPLE, rien modifie')
  process.exit(1)
}
s = s.replace(a, a + "const STORY_FINAL_XP = 30, STORY_FINAL_GEMS = 20\n")
s = s.replace(b, "xp: (p.xp ?? 0) + (n === 20 ? STORY_FINAL_XP : STORY_XP), gems: gems + (n === 20 ? STORY_FINAL_GEMS : STORY_GEMS) }")
fs.writeFileSync('api/game.js', s)
console.log('OK')
