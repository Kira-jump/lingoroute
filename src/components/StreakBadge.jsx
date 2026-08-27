export default function StreakBadge({ streak }) {
  return (
    <div className="streak-badge">
      <span className="flame">●</span>
      <span>{streak} jour{streak > 1 ? 's' : ''}</span>
    </div>
  )
}
