import { useEffect, useState } from 'react'
import { computeEffectiveHearts } from '../services/hearts'

export function useHeartsTimer(profile) {
  const compute = () => computeEffectiveHearts(profile?.hearts ?? 5, profile?.heartsUpdatedAt ?? null)
  const [state, setState] = useState(compute)

  useEffect(() => {
    setState(compute())
    const interval = setInterval(() => setState(compute()), 1000)
    return () => clearInterval(interval)
  }, [profile?.hearts, profile?.heartsUpdatedAt])

  return state
}
