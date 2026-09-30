let voices = []

function loadVoices() {
  voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices()
  window.speechSynthesis.onvoiceschanged = loadVoices
}

function pickEnglishVoice() {
  if (!voices.length) loadVoices()
  return (
    voices.find((v) => v.lang === 'en-US') ||
    voices.find((v) => v.lang && v.lang.startsWith('en')) ||
    null
  )
}

export function speakEnglish(text, rate = 0.9) {
  if (!window.speechSynthesis || !text) return
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'en-US'
  utter.rate = rate
  const voice = pickEnglishVoice()
  if (voice) utter.voice = voice
  window.speechSynthesis.speak(utter)
}

export function isSpeechSupported() {
  return typeof window !== 'undefined' && !!window.speechSynthesis
}
