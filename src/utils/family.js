const MARRIAGE_LEVEL = 15
// Un enfant apparaît à chaque Boss de fin de palier complété
const CHILD_TRIGGERS = ['b5', 'b10', 'b15', 'b20']

export function getFamilyStatus(level, completedLessons = []) {
  const married = level >= MARRIAGE_LEVEL
  const childrenCount = CHILD_TRIGGERS.filter((id) => completedLessons.includes(id)).length

  // Alterne fille / garçon : 1er enfant fille, 2e garçon, 3e fille, 4e garçon
  const children = Array.from({ length: childrenCount }).map((_, i) =>
    i % 2 === 0 ? 'daughter' : 'son'
  )

  return { married, children }
}
