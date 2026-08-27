import { useState } from 'react'

export default function Quiz({ lesson, onClose, onComplete }) {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)
  const [inputVal, setInputVal] = useState('')
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const questions = lesson.questions
  const q = questions[step]
  const progressPct = finished ? 100 : Math.round((step / questions.length) * 100)

  function isCurrentAnswerCorrect() {
    if (q.type === 'qcm') return selected === q.answer
    return inputVal.trim().toLowerCase() === q.answer.toLowerCase()
  }

  function handleCheck() {
    if (checked) return
    const correct = isCurrentAnswerCorrect()
    if (correct) setCorrectCount((c) => c + 1)
    setChecked(true)
  }

  function handleContinue() {
    if (step + 1 < questions.length) {
      setStep((s) => s + 1)
      setSelected(null)
      setInputVal('')
      setChecked(false)
    } else {
      const earnedXp = correctCount * 10
      onComplete(earnedXp)
      setFinished(true)
    }
  }

  const canCheck = q && (q.type === 'qcm' ? selected !== null : inputVal.trim().length > 0)

  if (finished) {
    return (
      <div className="quiz-overlay">
        <div className="complete-screen">
          <div className="complete-stamp">🏁</div>
          <div className="complete-title">Leçon terminée !</div>
          <div className="complete-xp">+{correctCount * 10} XP · {correctCount}/{questions.length} correctes</div>
          <button className="quiz-continue" onClick={onClose}>Retour à la route</button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-overlay">
      <div className="quiz-header">
        <button className="quiz-close" onClick={onClose} aria-label="Fermer">✕</button>
        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="quiz-body">
        <div className="quiz-prompt">{q.prompt}</div>

        {q.type === 'qcm' && (
          <div className="quiz-options">
            {q.options.map((opt) => {
              let cls = 'quiz-option'
              if (checked && opt === q.answer) cls += ' correct'
              else if (checked && opt === selected) cls += ' incorrect'
              else if (!checked && opt === selected) cls += ' selected'
              return (
                <button
                  key={opt}
                  className={cls}
                  disabled={checked}
                  onClick={() => setSelected(opt)}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        )}

        {q.type === 'fill' && (
          <input
            className={`quiz-input ${checked ? (isCurrentAnswerCorrect() ? 'correct' : 'incorrect') : ''}`}
            type="text"
            value={inputVal}
            disabled={checked}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ta réponse..."
            autoFocus
          />
        )}

        {checked && (
          <div className={`feedback-text ${isCurrentAnswerCorrect() ? 'correct' : 'incorrect'}`}>
            {isCurrentAnswerCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
          </div>
        )}
      </div>

      <div className="quiz-footer">
        {!checked ? (
          <button className="quiz-continue" disabled={!canCheck} onClick={handleCheck}>
            Vérifier
          </button>
        ) : (
          <button className="quiz-continue" onClick={handleContinue}>
            Continuer
          </button>
        )}
      </div>
    </div>
  )
}
