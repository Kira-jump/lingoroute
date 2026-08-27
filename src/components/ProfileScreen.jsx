import { lessons } from '../data/lessons'

export default function ProfileScreen({ progress, onReset }) {
  const totalQuestions = lessons.reduce((sum, l) => sum + l.questions.length, 0)
  const completedCount = progress.completedLessons.length

  return (
    <div className="profile">
      <div className="passport-card">
        <div className="passport-eyebrow">Passeport linguistique</div>
        <div className="passport-name">Apprenant LingoRoute</div>
        <div className="passport-row">
          <div className="passport-stat">
            <span className="passport-stat-value">{progress.xp}</span>
            <span className="passport-stat-label">XP total</span>
          </div>
          <div className="passport-stat">
            <span className="passport-stat-value">{progress.streak}</span>
            <span className="passport-stat-label">jours de suite</span>
          </div>
          <div className="passport-stat">
            <span className="passport-stat-value">{completedCount}/{lessons.length}</span>
            <span className="passport-stat-label">leçons</span>
          </div>
        </div>
      </div>

      <div className="section-label">Tampons obtenus</div>
      <div className="stamp-grid">
        {lessons.map((l) => {
          const done = progress.completedLessons.includes(l.id)
          return (
            <div key={l.id} className={`stamp-tile ${done ? 'done' : ''}`}>
              <span className="stamp-tile-icon">{l.icon}</span>
              <span className="stamp-tile-title">{l.title}</span>
            </div>
          )
        })}
      </div>

      <div className="section-label">Statistiques</div>
      <div className="stat-line">
        <span>Questions disponibles</span>
        <span>{totalQuestions}</span>
      </div>
      <div className="stat-line">
        <span>Dernière visite</span>
        <span>{progress.lastVisit ?? '—'}</span>
      </div>

      <button className="reset-btn" onClick={onReset}>Réinitialiser la progression</button>
    </div>
  )
}
