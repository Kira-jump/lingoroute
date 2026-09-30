const ACCENTS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'ù', 'û', 'ü', 'ô', 'ö', 'î', 'ï', 'œ']
const FRENCH_WORDS = [
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'est', 'cela', 'pas', 'pour',
  'avec', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'tout', 'droit',
  'pays', 'ville', 'langue', 'merci', 'salut', 'toux', 'rhume', 'urgence',
  'preuve', 'soudain', 'jamais', 'toujours', 'chariot', 'panier', 'caisse',
  'quai', 'billet', 'vieux', 'jeune', 'grand', 'petit', 'fils', 'fille',
  'avocat', 'salaire', 'pourboire', 'addition', 'menu'
]

export function looksEnglish(text) {
  if (typeof text !== 'string' || !text.trim()) return false
  const lower = text.toLowerCase()
  for (const a of ACCENTS) {
    if (lower.includes(a)) return false
  }
  const words = lower.split(' ')
  for (const w of words) {
    if (FRENCH_WORDS.includes(w)) return false
  }
  return true
}

function stripParentheses(s) {
  let out = ''
  let depth = 0
  for (const ch of s) {
    if (ch === '(') depth++
    else if (ch === ')') depth = Math.max(0, depth - 1)
    else if (depth === 0) out += ch
  }
  return out.split(' ').filter(Boolean).join(' ')
}

// Texte à lire à voix haute pour une question donnée
export function speakableText(q) {
  if (q.type === 'fill' && typeof q.prompt === 'string') {
    const first = q.prompt.indexOf('"')
    const last = q.prompt.lastIndexOf('"')
    if (first !== -1 && last > first) {
      const sentence = q.prompt.slice(first + 1, last)
      if (sentence.includes('___')) {
        return stripParentheses(sentence.replace('___', q.answer))
      }
    }
  }
  return q.answer
}
