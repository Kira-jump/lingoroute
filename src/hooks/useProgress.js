import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'lingoroute_progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    console.error('Failed to load progress', e)
  }
  return { xp: 0, streak: 0, lastVisit: null, completedLessons: [] }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  // Met à jour le streak à l'ouverture de l'app
  useEffect(() => {
    setProgress((prev) => {
      const today = todayStr()
      if (prev.lastVisit === today) return prev

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const wasYesterday = prev.lastVisit === yesterday.toISOString().slice(0, 10)

      return {
        ...prev,
        streak: wasYesterday ? prev.streak + 1 : 1,
        lastVisit: today
      }
    })
  }, [])

  const completeLesson = useCallback((lessonId, earnedXp) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) {
        return { ...prev, xp: prev.xp + earnedXp }
      }
      return {
        ...prev,
        xp: prev.xp + earnedXp,
        completedLessons: [...prev.completedLessons, lessonId]
      }
    })
  }, [])

  const resetProgress = useCallback(() => {
    const fresh = { xp: 0, streak: 0, lastVisit: null, completedLessons: [] }
    setProgress(fresh)
  }, [])

  return { progress, completeLesson, resetProgress }
}
