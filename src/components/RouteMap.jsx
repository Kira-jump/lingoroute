export default function RouteMap({ lessons, completedLessons, onSelect }) {
  return (
    <div className="route">
      {lessons.map((lesson, i) => {
        const isDone = completedLessons.includes(lesson.id)
        const isLocked = i > 0 && !completedLessons.includes(lessons[i - 1].id)
        return (
          <div className="route-item" key={lesson.id}>
            <div className={`route-stamp ${isDone ? 'done' : ''} ${isLocked ? 'locked' : ''}`}>
              {isDone ? '✓' : lesson.icon}
            </div>
            <button
              className="route-card"
              disabled={isLocked}
              onClick={() => onSelect(lesson)}
            >
              <span className="title">{lesson.title}</span>
              <span className="theme">{lesson.theme}{isLocked ? ' · verrouillé' : ''}</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
