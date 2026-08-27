import Mascot from '../Mascot'
import { getFamilyStatus } from '../../utils/family'

export default function FamilyRow({ level, completedLessons }) {
  const { married, children } = getFamilyStatus(level, completedLessons)

  return (
    <div className="flex items-end gap-1">
      <Mascot mood="idle" variant="dad" size={52} />
      {married && <Mascot mood="idle" variant="mom" size={48} className="-ml-2" />}
      {children.map((variant, i) => (
        <Mascot
          key={i}
          mood="idle"
          variant={variant}
          size={32}
          className="animate-popIn -ml-1"
        />
      ))}
    </div>
  )
}
