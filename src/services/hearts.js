export const HEART_REGEN_MS = 15 * 60 * 1000 // 15 minutes par cœur

export function computeEffectiveHearts(hearts, heartsUpdatedAt) {
  if (hearts >= 5 || !heartsUpdatedAt) {
    return { hearts, heartsUpdatedAt: null, msUntilNext: null }
  }
  const elapsed = Date.now() - heartsUpdatedAt
  const gained = Math.floor(elapsed / HEART_REGEN_MS)

  if (gained <= 0) {
    return { hearts, heartsUpdatedAt, msUntilNext: HEART_REGEN_MS - elapsed }
  }

  const newHearts = Math.min(5, hearts + gained)
  if (newHearts >= 5) {
    return { hearts: 5, heartsUpdatedAt: null, msUntilNext: null }
  }

  const newHeartsUpdatedAt = heartsUpdatedAt + gained * HEART_REGEN_MS
  return {
    hearts: newHearts,
    heartsUpdatedAt: newHeartsUpdatedAt,
    msUntilNext: HEART_REGEN_MS - (Date.now() - newHeartsUpdatedAt)
  }
}

export function formatCountdown(ms) {
  if (ms == null) return null
  const totalSec = Math.max(0, Math.floor(ms / 1000))
  const m = String(Math.floor(totalSec / 60)).padStart(2, '0')
  const s = String(totalSec % 60).padStart(2, '0')
  return `${m}:${s}`
}
