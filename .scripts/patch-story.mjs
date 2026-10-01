import fs from 'fs'
let s = fs.readFileSync('api/game.js', 'utf8')
const a = "const CHEST_COOLDOWN_MS = 20000\n"
const b = "    case 'buyAccessory': {\n"
if (s.split(a).length !== 2 || s.split(b).length !== 2) {
  console.log('MOTIF ABSENT OU MULTIPLE, rien modifie')
  process.exit(1)
}
const story = `    case 'readStory': {
      const id = String(body.unitId || '')
      const m = /^u(\\d{1,2})$/.exec(id)
      const n = m ? Number(m[1]) : 0
      if (n < 1 || n > 20) fail(400, 'unknown_story')
      if (!(p.completedLessons || []).includes('b' + n)) fail(400, 'not_ready')
      const read = p.readStories || []
      if (read.includes(id)) fail(400, 'already_read')
      return { readStories: [...read, id], xp: (p.xp ?? 0) + STORY_XP, gems: gems + STORY_GEMS }
    }
`
s = s.replace(a, a + "const STORY_XP = 20, STORY_GEMS = 10\n").replace(b, story + b)
fs.writeFileSync('api/game.js', s)
console.log('OK')
