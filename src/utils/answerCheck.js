// Normalise une chaîne pour comparaison : minuscules, apostrophes uniformisées,
// ponctuation finale retirée, espaces multiples réduits
function normalize(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[.!?]+$/g, '')
    .replace(/\s+/g, ' ')
}

// Formes contractées <-> développées les plus courantes en anglais
const CONTRACTIONS = [
  ["i'm", 'i am'],
  ["you're", 'you are'],
  ["he's", 'he is'],
  ["she's", 'she is'],
  ["it's", 'it is'],
  ["we're", 'we are'],
  ["they're", 'they are'],
  ["i've", 'i have'],
  ["you've", 'you have'],
  ["we've", 'we have'],
  ["they've", 'they have'],
  ["i'll", 'i will'],
  ["you'll", 'you will'],
  ["he'll", 'he will'],
  ["she'll", 'she will'],
  ["we'll", 'we will'],
  ["they'll", 'they will'],
  ["i'd", 'i would'],
  ["isn't", 'is not'],
  ["aren't", 'are not'],
  ["wasn't", 'was not'],
  ["weren't", 'were not'],
  ["don't", 'do not'],
  ["doesn't", 'does not'],
  ["didn't", 'did not'],
  ["can't", 'cannot'],
  ["won't", 'will not']
]

// Retourne toutes les variantes équivalentes d'une phrase (contractée + développée)
function expandVariants(text) {
  const variants = new Set([text])
  for (const [contracted, expanded] of CONTRACTIONS) {
    for (const v of [...variants]) {
      if (v.includes(contracted)) variants.add(v.replace(contracted, expanded))
      if (v.includes(expanded)) variants.add(v.replace(expanded, contracted))
    }
  }
  return variants
}

export function isAnswerCorrect(userInput, correctAnswer) {
  const userNorm = normalize(userInput)
  const correctVariants = expandVariants(normalize(correctAnswer))
  const userVariants = expandVariants(userNorm)

  for (const u of userVariants) {
    if (correctVariants.has(u)) return true
  }
  return false
}
