import fs from 'fs'
let s = fs.readFileSync('api/game.js', 'utf8')
const a = "  } catch (e) {\n    return res.status(e.status || 500)"
if (s.split(a).length !== 2) {
  console.log('MOTIF ABSENT OU MULTIPLE, rien modifie')
  process.exit(1)
}
s = s.replace(a, "  } catch (e) {\n    if (!e.status) console.error('GAME_API_ERROR', e && e.code, e && e.message)\n    return res.status(e.status || 500)")
fs.writeFileSync('api/game.js', s)
console.log('OK')
