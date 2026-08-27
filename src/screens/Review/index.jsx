import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { buildReviewSet, clearMistake } from '../../services/mistakes'
import { playCorrect, playIncorrect, playComplete } from '../../services/sounds'
import { fireConfetti } from '../../services/confetti'

export default function Review() {
  const navigate = useNavigate()
  const { user, profile, setProfile } = useAuth()
  const questions = useMemo(() => buildReviewSet(profile?.mistakeBank), [])

  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)
  const [inputVal, setInputVal] = useState('')
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center px-8 text-center">
        <div className="font-display text-xl text-slate-100 mb-2">Rien à réviser !</div>
        <div className="text-slate-400 text-sm mb-6">
          Tu n'as aucune question ratée en attente. Continue tes leçons pour progresser.
        </div>
        <button className="btn-primary" onClick={() => navigate('/home')}>
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const q = questions[step]
  const pct = Math.round((step / questions.length) * 100)

  function isCorrect() {
    if (q.type === 'qcm' || q.type === 'truefalse') return selected === q.answer
    return inputVal.trim().toLowerCase() === String(q.answer).toLowerCase()
  }

  async function handleCheck() {
    if (checked) return
    const ok = isCorrect()
    if (ok) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      const updated = await clearMistake(user.uid, profile, q.key)
      setProfile(updated)
    } else {
      playIncorrect()
    }
    setChecked(true)
  }

  function handleContinue() {
    if (step + 1 < questions.length) {
      setStep((s) => s + 1)
      setSelected(null)
      setInputVal('')
      setChecked(false)
    } else {
      playComplete()
      fireConfetti()
      setFinished(true)
    }
  }

  const canCheck = q.type === 'qcm' || q.type === 'truefalse' ? selected !== null : inputVal.trim().length > 0

  if (finished) {
    return (
      <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center px-6">
        <div className="glass-card p-8 text-center max-w-md w-full animate-popIn">
          <div className="text-5xl mb-4">🧠</div>
          <div className="font-display text-2xl text-slate-100 mb-2">Révision terminée !</div>
          <div className="text-slate-400 text-sm mb-6">
            {correctCount}/{questions.length} correctes
          </div>
          <button className="btn-primary" onClick={() => navigate('/home')}>
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <div className="max-w-md mx-auto w-full px-5 pt-6 flex items-center gap-3">
        <button className="text-slate-400 text-xl" onClick={() => navigate('/home')}>✕</button>
        <div className="flex-1 h-2.5 rounded-full bg-blue-900/60 overflow-hidden">
          <div className="h-full bg-amber-400 transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="max-w-md mx-auto w-full px-6 flex-1 flex flex-col justify-center">
        <div className="text-xs font-mono text-amber-400/70 uppercase tracking-widest mb-2">
          Révision
        </div>
        <div className="font-display text-2xl text-slate-100 mb-7 animate-screenIn">
          {q.prompt}
        </div>

        {q.type === 'qcm' && (
          <div className="flex flex-col gap-3">
            {q.options.map((opt) => {
              let cls = 'glass-card text-left px-4 py-3.5 text-slate-100 transition border-2'
              if (checked && opt === q.answer) cls += ' !border-emerald-400 !bg-emerald-500/15'
              else if (checked && opt === selected) cls += ' !border-red-400 !bg-red-500/15'
              else if (!checked && opt === selected) cls += ' !border-amber-400'
              else cls += ' border-transparent'
              return (
                <button key={opt} className={cls} disabled={checked} onClick={() => setSelected(opt)}>
                  {opt}
                </button>
              )
            })}
          </div>
        )}

        {q.type === 'truefalse' && (
          <div className="flex gap-3">
            {[true, false].map((val) => {
              let cls = 'flex-1 glass-card px-4 py-5 text-center font-display font-semibold text-lg transition border-2'
              if (checked && val === q.answer) cls += ' !border-emerald-400 !bg-emerald-500/15 text-emerald-300'
              else if (checked && val === selected) cls += ' !border-red-400 !bg-red-500/15 text-red-300'
              else if (!checked && val === selected) cls += ' !border-amber-400 text-slate-100'
              else cls += ' border-transparent text-slate-100'
              return (
                <button key={String(val)} className={cls} disabled={checked} onClick={() => setSelected(val)}>
                  {val ? 'Vrai' : 'Faux'}
                </button>
              )
            })}
          </div>
        )}

        {(q.type === 'fill' || q.type === 'translate') && (
          <input
            className={`input-field !mb-0 ${checked ? (isCorrect() ? '!border-emerald-400' : '!border-red-400') : ''}`}
            value={inputVal}
            disabled={checked}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ta réponse..."
            autoFocus
          />
        )}

        {q.type === 'drag' && (
          <div className="text-slate-400 text-sm">
            (Réponse attendue : <span className="text-amber-400">{q.answer}</span>)
          </div>
        )}

        {checked && (
          <div className={`mt-4 text-sm font-mono ${isCorrect() ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
          </div>
        )}
      </div>

      <div className="max-w-md mx-auto w-full px-6 pb-10">
        {!checked ? (
          <button className="btn-primary" disabled={!canCheck} onClick={handleCheck}>
            Vérifier
          </button>
        ) : (
          <button className="btn-primary" onClick={handleContinue}>
            Continuer
          </button>
        )}
      </div>
    </div>
  )
}
