import { useParams, useNavigate } from 'react-router-dom'
import { Volume2 } from 'lucide-react'
import { getLessonContent } from '../../database/lessonContent'
import { speakEnglish, isSpeechSupported } from '../../services/speak'
import AppIcon from '../../utils/icons'

export default function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const content = getLessonContent(lessonId)
  const canSpeak = isSpeechSupported()

  if (!content) {
    navigate(`/exercise/${lessonId}`, { replace: true })
    return null
  }

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col">
      <div className="max-w-md mx-auto w-full px-5 pt-6 flex items-center gap-3">
        <button className="text-slate-400 text-xl" onClick={() => navigate('/home')}>✕</button>
        <div className="font-display text-lg text-slate-100">{content.title}</div>
      </div>

      <div className="max-w-md mx-auto w-full px-5 pt-5 pb-32 flex-1 overflow-y-auto">
        <div className="text-slate-400 text-sm mb-6 animate-fadeInUp">{content.intro}</div>

        <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mb-3">
          Vocabulaire
        </div>
        <div className="flex flex-col gap-2.5 mb-8">
          {content.vocab.map((v, i) => (
            <div key={i} className="glass-card px-4 py-3 flex items-center justify-between gap-3 animate-fadeInUp">
              <div className="flex items-center gap-3 min-w-0">
                {canSpeak && (
                  <button
                    className="w-9 h-9 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0 active:scale-90 transition"
                    onClick={() => speakEnglish(v.en)}
                    aria-label="Écouter"
                  >
                    <Volume2 className="w-4 h-4 text-amber-400" />
                  </button>
                )}
                <div className="min-w-0">
                  <div className="font-display text-slate-100 font-medium">{v.en}</div>
                  {v.phon && <div className="text-slate-500 text-xs italic mt-0.5">[{v.phon}]</div>}
                </div>
              </div>
              <span className="text-amber-400 text-sm text-right">{v.fr}</span>
            </div>
          ))}
        </div>

        <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest mb-3">
          Exemples
        </div>
        <div className="flex flex-col gap-3">
          {content.examples.map((ex, i) => (
            <div key={i} className="glass-card px-4 py-3.5 flex items-center gap-3 animate-fadeInUp">
              {canSpeak && (
                <button
                  className="w-9 h-9 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0 active:scale-90 transition"
                  onClick={() => speakEnglish(ex.en, 0.85)}
                  aria-label="Écouter"
                >
                  <Volume2 className="w-4 h-4 text-amber-400" />
                </button>
              )}
              <div>
                <div className="text-slate-100">{ex.en}</div>
                <div className="text-slate-400 text-sm mt-1">{ex.fr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-blue-950/95 backdrop-blur-sm border-t border-blue-400/10">
        <div className="max-w-md mx-auto px-5 py-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          <button
            className="btn-primary flex items-center justify-center gap-2"
            onClick={() => navigate(`/exercise/${lessonId}`)}
          >
            Passer au quiz
            <AppIcon name="FastForward" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
