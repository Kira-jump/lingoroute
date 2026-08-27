path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

content = content.replace(
    "import { incrementDailyCount } from '../../services/dailyChallenge'",
    "import { recordLessonForDaily } from '../../services/dailyChallenge'"
)

old = '''      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      const dailyRes = await incrementDailyCount(user.uid, res, correctCount)
      playComplete()
      fireConfetti()
      setProfile(dailyRes)'''

new = '''      const res = await applyLessonResult(user.uid, profile, lessonId, correctCount, questions.length, mistakes)
      const dailyRes = await recordLessonForDaily(user.uid, res, { correctCount, mistakes })
      playComplete()
      fireConfetti()
      setProfile(dailyRes)'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
