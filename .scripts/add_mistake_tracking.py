path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import { recordLessonForDaily } from '../../services/dailyChallenge'",
    "import { recordLessonForDaily } from '../../services/dailyChallenge'\nimport { recordMistakes, questionKey } from '../../services/mistakes'"
)

# Nouveau state pour collecter les questions ratées de la session
old_states = "  const [chestReward, setChestReward] = useState(null)"
new_states = "  const [chestReward, setChestReward] = useState(null)\n  const [missed, setMissed] = useState([])"
content = content.replace(old_states, new_states, 1)

# handleCheck : ajouter la question à "missed" si erreur
old_incorrect = '''    } else {
      setMistakes((m) => m + 1)
      setCombo(0)
      playIncorrect()
    }'''
new_incorrect = '''    } else {
      setMistakes((m) => m + 1)
      setCombo(0)
      playIncorrect()
      setMissed((m) => [...m, { key: questionKey(lessonId, q), lessonId, question: q }])
    }'''
content = content.replace(old_incorrect, new_incorrect, 1)

# handleContinue : enregistrer les erreurs de la session à la fin
old_finish = '''      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      const dailyRes = await recordLessonForDaily(user.uid, res, { correctCount, mistakes })
      playComplete()
      fireConfetti()
      setProfile(dailyRes)'''
new_finish = '''      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      const dailyRes = await recordLessonForDaily(user.uid, res, { correctCount, mistakes })
      const finalRes = await recordMistakes(user.uid, dailyRes, missed)
      playComplete()
      fireConfetti()
      setProfile(finalRes)'''
content = content.replace(old_finish, new_finish, 1)

open(path, 'w').write(content)
print('ok')
