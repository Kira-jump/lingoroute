import { useState, useRef } from 'react'
import { Mic, Square } from 'lucide-react'

function stripPunctuation(str) {
  let out = ''
  for (const ch of str) {
    if (!'.!?,'.includes(ch)) out += ch
  }
  return out
}

function compareWords(expected, heard) {
  const expWords = stripPunctuation(expected.toLowerCase()).split(' ').filter(Boolean)
  const heardWords = stripPunctuation(heard.toLowerCase()).split(' ').filter(Boolean)
  return expWords.map((w) => ({
    word: w,
    matched: heardWords.includes(w)
  }))
}

export default function PronunciationReader({ text }) {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [result, setResult] = useState(null)
  const [unsupported, setUnsupported] = useState(false)
  const recognitionRef = useRef(null)

  function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setUnsupported(true)
      return
    }
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.onresult = (event) => {
      const heard = event.results[0][0].transcript
      setTranscript(heard)
      setResult(compareWords(text, heard))
    }
    recognition.onend = () => setListening(false)
    recognition.onerror = () => setListening(false)
    recognitionRef.current = recognition
    setListening(true)
    setResult(null)
    setTranscript('')
    recognition.start()
  }

  function stopListening() {
    recognitionRef.current?.stop()
    setListening(false)
  }

  if (unsupported) {
    return (
      <div className="glass-card p-4 text-center text-sm text-slate-400">
        La reconnaissance vocale n'est pas supportee sur ce navigateur. Essaie avec Chrome.
      </div>
    )
  }

  const correctCount = result?.filter((w) => w.matched).length ?? 0
  const totalWords = result?.length ?? 0

  return (
    <div>
      <div className="glass-card p-5 mb-4">
        <div className="font-display text-lg text-slate-100 leading-relaxed">
          {result
            ? result.map((w, i) => (
                <span key={i} className={w.matched ? 'text-emerald-400' : 'text-red-400'}>
                  {w.word}{' '}
                </span>
              ))
            : text}
        </div>
      </div>
      {result && (
        <div className="text-center text-sm font-mono text-amber-400 mb-4">
          {correctCount}/{totalWords} mots bien prononces
        </div>
      )}
      {transcript && (
        <div className="text-center text-xs text-slate-500 mb-4">
          Ce que j'ai entendu: {transcript}
        </div>
      )}
      <div className="flex justify-center gap-3">
        {!listening ? (
          <button
            className="btn-primary flex items-center justify-center gap-2 !w-auto px-6"
            onClick={startListening}
          >
            <Mic className="w-4 h-4" />
            {result ? 'Reessayer' : 'Commencer a lire'}
          </button>
        ) : (
          <button
            className="bg-red-500 text-white rounded-2xl px-6 py-3.5 flex items-center gap-2 font-semibold"
            onClick={stopListening}
          >
            <Square className="w-4 h-4" />
            Arreter
          </button>
        )}
      </div>
    </div>
  )
}
