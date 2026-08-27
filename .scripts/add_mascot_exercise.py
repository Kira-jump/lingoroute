path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import Hearts from '../../components/Hearts'",
    "import Hearts from '../../components/Hearts'\nimport Mascot from '../../components/Mascot'"
)

# Mascotte sur l'écran final (excited)
old_final = '''        <div className="glass-card p-8 text-center max-w-md w-full animate-popIn">
          <div className="text-5xl mb-4">🏁</div>'''
new_final = '''        <div className="glass-card p-8 text-center max-w-md w-full animate-popIn">
          <Mascot mood="excited" size={90} className="mx-auto mb-3" />'''

# Mascotte pendant la correction (à côté du feedback)
old_feedback = '''        {checked && (
          <div className={`mt-4 text-sm font-mono ${isCorrect() ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
          </div>
        )}'''
new_feedback = '''        {checked && (
          <div className="mt-4 flex items-center gap-3">
            <Mascot mood={isCorrect() ? 'happy' : 'sad'} size={44} />
            <div className={`text-sm font-mono ${isCorrect() ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect() ? '✓ Correct !' : `✕ Réponse : ${q.answer}`}
            </div>
          </div>
        )}'''

ok1 = old_final in content
ok2 = old_feedback in content

if not ok1:
    print('MOTIF FINAL NON TROUVÉ')
if not ok2:
    print('MOTIF FEEDBACK NON TROUVÉ')

if ok1:
    content = content.replace(old_final, new_final, 1)
if ok2:
    content = content.replace(old_feedback, new_feedback, 1)

open(path, 'w').write(content)
print('ok' if ok1 and ok2 else 'partiel')
