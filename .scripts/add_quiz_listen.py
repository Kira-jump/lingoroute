path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

anchor_import = "import { isAnswerCorrect } from '../../utils/answerCheck'"
anchor_used = "  const usedIndexes = new Set()"
old_feedback = """        {checked && (
          <div className="mt-4 flex items-center gap-3">
            <Mascot mood={isCorrect() ? 'happy' : 'sad'} size={44} />
            <div className={`text-sm font-mono ${isCorrect() ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
            </div>
          </div>
        )}"""

counts = {
    'import': content.count(anchor_import),
    'usedIndexes': content.count(anchor_used),
    'feedback': content.count(old_feedback)
}
print(counts)

if any(v != 1 for v in counts.values()):
    print('ANNULÉ : un motif est introuvable ou en double, rien modifié')
else:
    new_import = anchor_import + """
import { Volume2 } from 'lucide-react'
import { speakEnglish, isSpeechSupported } from '../../services/speak'
import { looksEnglish, speakableText } from '../../utils/language'"""

    new_used = """  const canListen =
    isSpeechSupported() &&
    typeof q.answer === 'string' &&
    (q.type === 'drag' || q.type === 'fill' || looksEnglish(q.answer))

""" + anchor_used

    new_feedback = """        {checked && (
          <div className="mt-4 flex items-center gap-3">
            <Mascot mood={isCorrect() ? 'happy' : 'sad'} size={44} />
            <div className={`text-sm font-mono ${isCorrect() ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
            </div>
            {canListen && (
              <button
                className="ml-auto w-10 h-10 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0 active:scale-90 transition"
                onClick={() => speakEnglish(speakableText(q))}
                aria-label="Écouter la réponse"
              >
                <Volume2 className="w-5 h-5 text-amber-400" />
              </button>
            )}
          </div>
        )}"""

    content = content.replace(anchor_import, new_import, 1)
    content = content.replace(anchor_used, new_used, 1)
    content = content.replace(old_feedback, new_feedback, 1)
    open(path, 'w').write(content)
    print('ok')
