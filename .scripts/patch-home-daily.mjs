import fs from 'fs'
const f = 'src/screens/Home/index.jsx'
let s = fs.readFileSync(f, 'utf8')
const a = "dailyDate: updated.dailyDate, dailyCount: updated.dailyCount, dailyClaimed: updated.dailyClaimed"
if (s.split(a).length !== 2) {
  console.log('MOTIF ABSENT OU MULTIPLE, rien modifie')
  process.exit(1)
}
s = s.replace(a, "dailyDate: updated.dailyDate, dailyType: updated.dailyType, dailyTarget: updated.dailyTarget, dailyProgress: updated.dailyProgress, dailyClaimed: updated.dailyClaimed")
fs.writeFileSync(f, s)
console.log('OK')
