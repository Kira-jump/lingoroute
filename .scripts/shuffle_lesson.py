path = 'src/screens/Exercise/index.jsx'
content = open(path).read()

old = "  const questions = getExercises(lessonId)"
new = "  const questions = useMemo(() => shuffle(getExercises(lessonId)), [lessonId])"

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
