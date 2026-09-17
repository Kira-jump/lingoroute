import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getExercises } from '../../database/exercises'
import { useAuth } from '../../context/AuthContext'
import { applyLessonResult } from '../../services/progress'
import { useHeartsTimer } from '../../hooks/useHeartsTimer'
import { playCorrect, playIncorrect, playComplete } from '../../services/sounds'
import { fireConfetti } from '../../services/confetti'
import { recordLessonForDaily } from '../../services/dailyChallenge'
import { recordMistakes, questionKey } from '../../services/mistakes'
import { grantChestReward, COMBO_THRESHOLD } from '../../services/rewards'
import RewardChest from '../../components/RewardChest'
import ComboIndicator from '../../components/ComboIndicator'
import Hearts from '../../components/Hearts'
import Mascot from '../../components/Mascot'
import { isAnswerCorrect } from '../../utils/answerCheck'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Exercise() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { user, profile, setProfile } = useAuth()
  const heartsState = useHeartsTimer(profile)
  const questions = useMemo(() => shuffle(getExercises(lessonId)), [lessonId])

  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)
  const [inputVal, setInputVal] = useState('')
  const [dragChosen, setDragChosen] = useState([])
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState(null)
  const [combo, setCombo] = useState(0)
  const [chestReward, setChestReward] = useState(null)
  const [missed, setMissed] = useState([])
  const [checking, setChecking] = useState(false)

  const q = questions[step]
  const pct = Math.round((step / questions.length) * 100)

  const dragBank = useMemo(() => {
    if (q?.type !== 'drag') return []
    return shuffle(q.words)
  }, [step])

  const effectiveHearts = Math.max(0, heartsState.hearts - mistakes)
  const outOfHearts = effectiveHearts <= 0 && !finished

  function isCorrect() {
    if (q.type === 'qcm') return selected === q.answer
    if (q.type === 'truefalse') return selected === q.answer
    if (q.type === 'drag') return dragChosen.join(' ') === q.answer
    return isAnswerCorrect(inputVal, q.answer)
  }

  async function handleCheck() {
    if (checked || checking || outOfHearts) return
    setChecking(true)
    const ok = isCorrect()
    if (ok) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      const newCombo = combo + 1
      if (newCombo >= COMBO_THRESHOLD) {
        setCombo(0)
        const { profile: updated, reward } = await grantChestReward(user.uid, profile)
        setProfile(updated)
        setChestReward(reward)
      } else {
        setCombo(newCombo)
      }
    } else {
      setMistakes((m) => m + 1)
      setCombo(0)
      playIncorrect()
      setMissed((m) => [...m, { key: questionKey(lessonId, q), lessonId, question: q }])
    }
    setChecked(true)
    setChecking(false)
  }

  async function handleContinue() {
    if (step + 1 < questions.length) {
      setStep((s) => s + 1)
      setSelected(null)
      setInputVal('')
      setDragChosen([])
      setChecked(false)
    } else {
      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      const dailyRes = await recordLessonForDaily(user.uid, res, { correctCount, mistakes })
      const finalRes = await recordMistakes(user.uid, dailyRes, missed)
      playComplete()
      fireConfetti()
      setProfile(finalRes)
      setResult(res)
      setFinished(true)
    }
  }

  function pickWord(word) {
    if (checked) return
    setDragChosen((d) => [...d, word])
  }

  function removeWord(indexInChosen) {
    if (checked) return
    setDragChosen((d) => d.filter((_, i) => i !== indexInChosen))
  }

  const canCheck =
    q &&
    (q.type === 'qcm' || q.type === 'truefalse'
      ? selected !== null
      : q.type === 'drag'
      ? dragChosen.length === q.words.length
      : inputVal.trim().length > 0)

  if (finished) {
    return (
      <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center px-6">
        <div className="glass-card p-8 text-center max-w-md w-full animate-popIn">
          <Mascot mood="excited" size={90} className="mx-auto mb-3" />
          <div className="font-display text-2xl text-slate-100 mb-2">Leçon terminée !</div>
          <div className="text-amber-400 font-mono mb-1 animate-counterPop">
            +{result.earnedXp} XP
          </div>
          <div className="text-slate-400 text-sm mb-6">
            {correctCount}/{questions.length} correctes · Niveau {result.level}
          </div>
          <button className="btn-primary" onClick={() => navigate('/home')}>
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  if (chestReward) {
    return (
      <RewardChest
        reward={chestReward}
        onClose={() => setChestReward(null)}
      />
    )
  }

  if (outOfHearts) {
    return (
      <HeartsShopModal
        uid={user.uid}
        profile={profile}
        countdown={formatCountdown(heartsState.msUntilNext)}
        onProfileUpdate={setProfile}
        onClose={() => navigate('/home')}
      />
    )
  }

  const usedIndexes = new Set()

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <div className="max-w-md mx-auto w-full px-5 pt-6 flex items-center gap-3">
        <button className="text-slate-400 text-xl" onClick={() => navigate(`/lesson/${lessonId}`)}>✕</button>
        <div className="flex-1 h-2.5 rounded-full bg-blue-900/60 overflow-hidden">
          <div
            className="h-full bg-amber-400 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <Hearts count={Math.max(0, heartsState.hearts - mistakes)} />
      </div>

      <div className="max-w-md mx-auto w-full px-6 flex-1 flex flex-col justify-center">
        <div className="text-xs font-mono text-amber-400/70 uppercase tracking-widest mb-2">
          {q.type === 'qcm' && 'Choix multiple'}
          {q.type === 'fill' && 'Texte à trous'}
          {q.type === 'translate' && 'Traduction'}
          {q.type === 'drag' && 'Remets en ordre'}
          {q.type === 'truefalse' && 'Vrai ou Faux'}
        </div>
        <ComboIndicator combo={combo} />
        <div key={step} className="font-display text-2xl text-slate-100 mb-7 animate-screenIn">
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
          <div>
            <div className="glass-card min-h-[56px] p-3 flex flex-wrap gap-2 mb-4 border-2 border-amber-400/20">
              {dragChosen.length === 0 && (
                <span className="text-slate-500 text-sm">Tape les mots ci-dessous dans l'ordre...</span>
              )}
              {dragChosen.map((w, i) => (
                <button
                  key={i}
                  className="bg-amber-400 text-blue-950 font-medium rounded-lg px-3 py-1.5 text-sm"
                  onClick={() => removeWord(i)}
                  disabled={checked}
                >
                  {w}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {dragBank.map((w, i) => {
                if (usedIndexes.has(i)) return null
                const usedCount = dragChosen.filter((x) => x === w).length
                const bankSameWordCount = dragBank.slice(0, i + 1).filter((x) => x === w).length
                const isUsed = bankSameWordCount <= usedCount
                if (isUsed) return null
                return (
                  <button
                    key={i}
                    className="bg-blue-900/50 border border-blue-400/20 text-slate-100 rounded-lg px-3 py-1.5 text-sm"
                    onClick={() => pickWord(w)}
                    disabled={checked}
                  >
                    {w}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {checked && (
          <div className="mt-4 flex items-center gap-3">
            <Mascot mood={isCorrect() ? 'happy' : 'sad'} size={44} />
            <div className={`text-sm font-mono ${isCorrect() ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
            </div>
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
