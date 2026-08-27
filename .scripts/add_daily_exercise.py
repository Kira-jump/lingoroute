path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import { fireConfetti } from '../../services/confetti'",
    "import { fireConfetti } from '../../services/confetti'\nimport { incrementDailyCount } from '../../services/dailyChallenge'"
)

old = '''      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      playComplete()
      fireConfetti()
      setProfile(res)'''

new = '''      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      const dailyRes = await incrementDailyCount(user.uid, res, correctCount)
      playComplete()
      fireConfetti()
      setProfile(dailyRes)'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
