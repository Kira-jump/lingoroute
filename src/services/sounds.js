let audioCtx = null

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

function tone(freq, duration, delay = 0, type = 'sine', volume = 0.15) {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = type
  osc.frequency.value = freq
  gain.gain.value = volume
  osc.connect(gain)
  gain.connect(ctx.destination)
  const startTime = ctx.currentTime + delay
  gain.gain.setValueAtTime(volume, startTime)
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
  osc.start(startTime)
  osc.stop(startTime + duration)
}

export function playCorrect() {
  try {
    tone(523.25, 0.12, 0)
    tone(659.25, 0.15, 0.1)
  } catch (e) {}
}

export function playIncorrect() {
  try {
    tone(220, 0.2, 0, 'sawtooth', 0.1)
  } catch (e) {}
}

export function playComplete() {
  try {
    tone(523.25, 0.12, 0)
    tone(659.25, 0.12, 0.12)
    tone(783.99, 0.25, 0.24)
  } catch (e) {}
}

export function playTap() {
  try {
    tone(400, 0.05, 0, 'sine', 0.08)
  } catch (e) {}
}
