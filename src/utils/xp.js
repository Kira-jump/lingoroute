// XP cumulé nécessaire pour ATTEINDRE un niveau donné (niveau 1 = 0 XP)
export function xpToReachLevel(level) {
  return 100 * ((level - 1) * level) / 2
}

export function levelFromXp(totalXp) {
  let level = 1
  while (xpToReachLevel(level + 1) <= totalXp) level++
  return level
}

// Retourne le niveau, l'XP acquis dans ce niveau, et l'XP requis pour le niveau suivant
export function xpProgress(totalXp) {
  const level = levelFromXp(totalXp)
  const intoLevel = totalXp - xpToReachLevel(level)
  const forNext = level * 100
  return { level, intoLevel, forNext }
}
